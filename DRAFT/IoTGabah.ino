#include <WiFi.h>
#include <WiFiManager.h>
#include <PubSubClient.h>

// LED
const int ledGreen = 2;
const int ledRed = 4;

// MQTT
const char* mqttServer = "mqtt.my.id";
const int mqttPort = 1883;
const char* mqttTopicPub = "iot/sensor/datagabah";
const char* mqttTopicSub = "iot/resetwifi";

WiFiClient espClient;
PubSubClient client(espClient);

// Sensor Simulasi
float temperatureGrain, moisture, temperatureEnv;
unsigned long lastSendTime = 0;
const unsigned long interval = 5000;
bool allowSendData = true;

void generateRandomSensorData() {
  temperatureGrain = random(250, 400) / 10.0;
  moisture = random(5, 30);
  temperatureEnv = random(250, 350) / 10.0;

  Serial.println("[Sensor] Data Random:");
  Serial.printf("  Suhu Gabah: %.2f C\n", temperatureGrain);
  Serial.printf("  Kadar Air : %.2f %%\n", moisture);
  Serial.printf("  Suhu Ruang: %.2f C\n", temperatureEnv);

  if (moisture <= 14) {
    digitalWrite(ledGreen, HIGH);
    digitalWrite(ledRed, LOW);
  } else {
    digitalWrite(ledRed, HIGH);
    digitalWrite(ledGreen, LOW);
  }
}

void mqttCallback(char* topic, byte* payload, unsigned int length) {
  String msg;
  for (unsigned int i = 0; i < length; i++) {
    msg += (char)payload[i];
  }

  Serial.print("[MQTT] Diterima [");
  Serial.print(topic);
  Serial.print("] : ");
  Serial.println(msg);

  if (String(topic) == mqttTopicSub && msg == "reset") {
    Serial.println("[MQTT] Perintah 'reset' diterima. Memutus koneksi dan restart.");
    allowSendData = false;
    delay(1000);
    WiFi.disconnect(true, true);
    delay(1000);
    ESP.restart();
  }
}

void reconnectMQTT() {
  int attempt = 0;
  while (!client.connected() && WiFi.isConnected()) {
    Serial.printf("[MQTT] Mencoba koneksi ke broker (%d/3)...\n", attempt + 1);
    if (client.connect("ESP32Client")) {
      Serial.println("[MQTT] Berhasil terhubung ke broker!");
      client.subscribe(mqttTopicSub);
      Serial.printf("[MQTT] Berlangganan ke topik: %s\n", mqttTopicSub);
      break;
    } else {
      Serial.print("[MQTT] Gagal, kode: ");
      Serial.println(client.state());
      attempt++;
      delay(3000);
    }

    // Jika gagal 3 kali berturut-turut, reset koneksi
    if (attempt >= 3) {
      Serial.println("[MQTT] Gagal 3 kali berturut-turut. Reset WiFi & Restart ESP...");
      allowSendData = false;
      delay(1000);
      WiFi.disconnect(true, true);
      delay(1000);
      ESP.restart();
    }
  }
}

void publishMQTT(float tg, float m, float te) {
  if (!WiFi.isConnected() || !allowSendData) {
    Serial.println("[MQTT] Tidak mengirim data: WiFi tidak aktif atau reset.");
    return;
  }

  String payload = "{";
  payload += "\"GrainTemperature\":" + String(tg) + ",";
  payload += "\"GrainMoisture\":" + String(m) + ",";
  payload += "\"RoomTemperature\":" + String(te);
  payload += "}";

  if (client.publish(mqttTopicPub, payload.c_str())) {
    Serial.println("[MQTT] Data berhasil dikirim:");
    Serial.println(payload);
  } else {
    Serial.println("[MQTT] Gagal mengirim data!");
  }
}

void setup() {
  Serial.begin(115200);
  delay(1000);
  Serial.println("========== MULAI SETUP ==========");

  pinMode(ledGreen, OUTPUT);
  pinMode(ledRed, OUTPUT);

  WiFiManager wm;
  bool res;
  res = wm.autoConnect("IoTGabah", "gabah123");

  if (!res) {
    Serial.println("[WiFiManager] Gagal menyambung. Restart ESP...");
    delay(3000);
    ESP.restart();
  }

  Serial.println("[WiFi] Terhubung ke: " + WiFi.SSID());
  Serial.println("[WiFi] IP Address : " + WiFi.localIP().toString());

  client.setServer(mqttServer, mqttPort);
  client.setCallback(mqttCallback);
  reconnectMQTT();

  randomSeed(analogRead(0));
  Serial.println("========== SELESAI SETUP ==========");
}

void loop() {
  if (WiFi.isConnected()) {
    if (!client.connected()) {
      reconnectMQTT();
    }
    client.loop();
  }

  if (millis() - lastSendTime > interval) {
    lastSendTime = millis();
    generateRandomSensorData();
    publishMQTT(temperatureGrain, moisture, temperatureEnv);
  }
}
