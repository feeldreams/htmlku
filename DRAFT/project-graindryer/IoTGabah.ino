#include <WiFi.h>
#include <Preferences.h>
#include <PubSubClient.h>
#include <ArduinoJson.h>
#include <WebServer.h>

const char* ap_ssid = "GrainDryer_AP_1";
const char* ap_password = "12345678";
const int panelId = 1;
const char* mqttBroker = "broker.hivemq.com";
const int mqttPort = 1883;
String mqttTopic = "iot/sensor/datagabah/1";
String resetWifiTopic = "iot/sensor/resetwifi/1";

Preferences prefs;
WebServer server(80);
WiFiClient espClient;
PubSubClient mqttClient(espClient);

void handleRoot() {
  Serial.println("Received GET /");
  server.send(200, "text/html", "<!DOCTYPE html><html><body><h2>ESP32 GrainDryer</h2><p>POST /config untuk WiFi</p></body></html>");
}

void handleConfig() {
  if (server.method() != HTTP_POST) {
    Serial.println("Received non-POST /config");
    server.send(405, "text/plain", "Method Not Allowed");
    return;
  }
  Serial.println("Received POST /config");
  String body = server.arg("plain");
  DynamicJsonDocument doc(512);
  DeserializationError err = deserializeJson(doc, body);
  if (!err && doc.containsKey("ssid") && doc.containsKey("pass")) {
    prefs.putString("ssid", doc["ssid"].as<String>());
    prefs.putString("pass", doc["pass"].as<String>());
    Serial.println("WiFi config saved: SSID=" + doc["ssid"].as<String>());
    server.send(200, "application/json", "{\"status\":\"saved\",\"message\":\"Rebooting...\"}");
    delay(1000);
    ESP.restart();
  } else {
    Serial.println("Invalid JSON or missing ssid/pass: " + body);
    server.send(400, "application/json", "{\"error\":\"Invalid JSON or missing ssid/pass\"}");
  }
}

void handleNotFound() {
  Serial.println("Received request for unknown endpoint: " + server.uri());
  server.send(404, "text/plain", "File not found");
}

void callback(char* topic, byte* payload, unsigned int length) {
  String message;
  for (unsigned int i = 0; i < length; i++) {
    message += (char)payload[i];
  }
  Serial.println("Message received on " + String(topic) + ": " + message);

  if (String(topic) == resetWifiTopic && message == "resetWiFi") {
    Serial.println("Received resetWiFi command");
    prefs.clear();
    WiFi.disconnect(true);
    Serial.println("WiFi credentials cleared, restarting to AP mode");
    delay(1000);
    ESP.restart();
  }
}

void setup() {
  Serial.begin(115200);
  prefs.begin("wifi", false);

  WiFi.mode(WIFI_AP);
  WiFi.softAPConfig(IPAddress(192, 168, 4, 1), IPAddress(192, 168, 4, 1), IPAddress(255, 255, 255, 0));
  WiFi.softAP(ap_ssid, ap_password);
  Serial.print("AP Started at ");
  Serial.println(WiFi.softAPIP());

  server.on("/", HTTP_GET, handleRoot);
  server.on("/config", HTTP_POST, handleConfig);
  server.onNotFound(handleNotFound);
  server.begin();
  Serial.println("HTTP server started at http://192.168.4.1");
  delay(3000);

  String ssid = prefs.getString("ssid", "");
  if (ssid.length() > 0) {
    connectWiFi();
  }
}

void loop() {
  server.handleClient();
  if (WiFi.status() == WL_CONNECTED && !mqttClient.connected()) {
    connectMQTT();
  }
  mqttClient.loop();

  static unsigned long lastPublish = 0;
  if (mqttClient.connected() && millis() - lastPublish > 10000) {
    sendDummyData();
    lastPublish = millis();
  }
}

void connectWiFi() {
  String ssid = prefs.getString("ssid", "");
  String pass = prefs.getString("pass", "");
  Serial.printf("Connecting to %s...\n", ssid.c_str());
  WiFi.mode(WIFI_STA);
  WiFi.begin(ssid.c_str(), pass.c_str());
  unsigned long t0 = millis();
  while (WiFi.status() != WL_CONNECTED && millis() - t0 < 15000) {
    delay(500);
    Serial.print(".");
  }
  if (WiFi.status() == WL_CONNECTED) {
    Serial.println("\nWiFi Connected: " + WiFi.localIP().toString());
    mqttClient.setServer(mqttBroker, mqttPort);
    mqttClient.setCallback(callback);
    connectMQTT();
  } else {
    Serial.println("\nWiFi Failed, starting AP");
    WiFi.mode(WIFI_AP);
    WiFi.softAPConfig(IPAddress(192, 168, 4, 1), IPAddress(192, 168, 4, 1), IPAddress(255, 255, 255, 0));
    WiFi.softAP(ap_ssid, ap_password);
    Serial.print("AP Started at ");
    Serial.println(WiFi.softAPIP());
    server.begin();
    Serial.println("HTTP server started at http://192.168.4.1");
  }
}

void connectMQTT() {
  if (WiFi.status() != WL_CONNECTED) {
    Serial.println("WiFi not connected, skipping MQTT");
    return;
  }
  String clientId = "GrainDryer-" + String(panelId) + "-" + String(random(0xffff), HEX);
  if (mqttClient.connect(clientId.c_str())) {
    Serial.println("MQTT Connected to " + String(mqttBroker));
    mqttClient.subscribe(resetWifiTopic.c_str());
    Serial.println("Subscribed to " + String(resetWifiTopic));
  } else {
    Serial.print("MQTT Failed, rc=");
    Serial.println(mqttClient.state());
  }
}

void sendDummyData() {
  DynamicJsonDocument doc(256);
  doc["panel_id"] = panelId;
  doc["grain_temperature"] = 32.5;
  doc["grain_moisture"] = 14.0;
  doc["room_temperature"] = 30.0;

  char buffer[256];
  serializeJson(doc, buffer);
  if (mqttClient.publish(mqttTopic.c_str(), buffer)) {
    Serial.println("Published to " + mqttTopic + ": " + String(buffer));
  } else {
    Serial.println("Failed to publish");
  }
}