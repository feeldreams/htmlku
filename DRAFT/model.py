import numpy as np
import logging
import requests

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

class PredictionModel:
    TARGET_MOISTURE = 14.0

    def __init__(self, api_url="http://127.0.0.1:3333/api/training-data"):
        self.weights = None  # Bobot: [w1, w2, w3, w4]
        self.bias = 0.0      # Bias: b
        self.training_data = []
        self.input_means = []
        self.input_stds = []
        self.output_mean = 0.0
        self.output_std = 1.0
        self.load_training_data(api_url)
        self.normalize_training_data()
        self.initialize_weights()
        self.train_model()

    def load_training_data(self, api_url):
        """Memuat data pelatihan dari API Laravel."""
        try:
            response = requests.get(api_url, timeout=10)
            response.raise_for_status()
            raw_data = response.json()
            logger.info(f"Menerima {len(raw_data)} grup data dari API")

            for group in raw_data:
                measurements = group['measurements']
                drying_time = group['DryingTime']
                grain_temperatures = [float(m["GrainTemperature"]) for m in measurements]
                grain_moistures = [float(m["GrainMoisture"]) for m in measurements]
                room_temperatures = [float(m["RoomTemperature"]) for m in measurements]
                weights = [float(m["Weight"]) for m in measurements]

                avg_data = {
                    "GrainTemperature": round(np.mean(grain_temperatures), 1),
                    "GrainMoisture": round(np.mean(grain_moistures), 1),
                    "RoomTemperature": round(np.mean(room_temperatures), 1),
                    "Weight": round(np.mean(weights), 1),
                    "DryingTime": drying_time
                }
                self.training_data.append(avg_data)
            logger.info(f"Memuat {len(self.training_data)} grup pelatihan dari API")
        except requests.RequestException as e:
            logger.error(f"Gagal memuat data pelatihan dari API: {e}")
            raise
        except (ValueError, KeyError) as e:
            logger.error(f"Gagal memproses data API: {e}")
            raise

    def normalize_training_data(self):
        """Normalisasi data pelatihan menggunakan z-score."""
        features = ['GrainTemperature', 'GrainMoisture', 'RoomTemperature', 'Weight']
        self.input_means = [np.mean([d[key] for d in self.training_data]) for key in features]
        self.input_stds = [np.std([d[key] for d in self.training_data]) or 1.0 for key in features]
        drying_times = [d['DryingTime'] for d in self.training_data]
        self.output_mean = np.mean(drying_times)
        self.output_std = np.std(drying_times) or 1.0

        for d in self.training_data:
            d['GrainTemperature'] = (d['GrainTemperature'] - self.input_means[0]) / self.input_stds[0]
            d['GrainMoisture'] = (d['GrainMoisture'] - self.input_means[1]) / self.input_stds[1]
            d['RoomTemperature'] = (d['RoomTemperature'] - self.input_means[2]) / self.input_stds[2]
            d['Weight'] = (d['Weight'] - self.input_means[3]) / self.input_stds[3]
            d['DryingTime'] = (d['DryingTime'] - self.output_mean) / self.output_std

        logger.info(f"Rata-rata input: {[round(m, 1) for m in self.input_means]}")
        logger.info(f"Standar deviasi input: {[round(s, 1) for s in self.input_stds]}")
        logger.info(f"Rata-rata output: {round(self.output_mean, 1)}")
        logger.info(f"Standar deviasi output: {round(self.output_std, 1)}")

    def initialize_weights(self):
        """Inisialisasi bobot dengan nilai awal."""
        self.weights = np.array([0.01, 0.2, 0.01, 0.05])  # w2 (kadar air) lebih besar, w4 (bobot gabah) memengaruhi Weight
        self.bias = 0.0
        logger.info(f"Bobot awal: {[round(w, 3) for w in self.weights]}, bias: {self.bias}")

    def predict_linear(self, inputs):
        """Hitung prediksi: w1*x1 + w2*x2 + w3*x3 + w4*x4 + b."""
        return np.dot(inputs, self.weights) + self.bias

    def compute_cost(self, X, y):
        """Hitung fungsi biaya Mean Squared Error (MSE)."""
        m = len(y)
        predictions = self.predict_linear(X)
        errors = predictions - y
        cost = (1 / (2 * m)) * np.sum(errors ** 2)
        return cost

    def gradient_descent(self, X, y, learning_rate=0.01, epochs=1000):
        """Lakukan gradient descent untuk mengoptimalkan bobot dan bias."""
        m = len(y)
        for epoch in range(epochs):
            predictions = self.predict_linear(X)
            errors = predictions - y
            grad_weights = (1 / m) * np.dot(X.T, errors)
            grad_bias = (1 / m) * np.sum(errors)
            self.weights -= learning_rate * grad_weights
            self.bias -= learning_rate * grad_bias
            cost = self.compute_cost(X, y)
            if epoch % 50 == 0:
                logger.info(f"Epoch {epoch}: Biaya = {cost:.4f}, Bobot = {[round(w, 3) for w in self.weights]}, Bias = {round(self.bias, 3)}")

    def train_model(self):
        """Latih model menggunakan gradient descent."""
        X = np.array([
            [d['GrainTemperature'], d['GrainMoisture'], d['RoomTemperature'], d['Weight']]
            for d in self.training_data
        ])
        y = np.array([d['DryingTime'] for d in self.training_data])
        logger.info("Memulai pelatihan model dengan gradient descent...")
        self.gradient_descent(X, y)
        logger.info("Pelatihan selesai")

    def predict(self, data):
        """Prediksi waktu pengeringan berdasarkan data input."""
        logger.info(f"Data input: {{'SuhuGabah': {data['GrainTemperature']:.1f}, 'KadarAirGabah': {data['GrainMoisture']:.1f}, 'SuhuRuangan': {data['RoomTemperature']:.1f}, 'Berat': {data['Weight']:.1f}}}")
        required_keys = ['GrainTemperature', 'GrainMoisture', 'RoomTemperature', 'Weight']
        if not all(key in data for key in required_keys) or not all(isinstance(data[key], (int, float)) for key in required_keys) or any(data[key] < 0 for key in required_keys):
            logger.error("Data input tidak valid")
            return 0.0
        max_grain_temp = max(d['GrainTemperature'] * self.input_stds[0] + self.input_means[0] for d in self.training_data)
        min_grain_temp = min(d['GrainTemperature'] * self.input_stds[0] + self.input_means[0] for d in self.training_data)
        max_weight = max(d['Weight'] * self.input_stds[3] + self.input_means[3] for d in self.training_data)
        min_weight = min(d['Weight'] * self.input_stds[3] + self.input_means[3] for d in self.training_data)
        if data['GrainTemperature'] > max_grain_temp or data['GrainTemperature'] < min_grain_temp:
            logger.warning(f"Suhu gabah ({data['GrainTemperature']:.1f}°C) di luar rentang data pelatihan ({min_grain_temp:.1f}–{max_grain_temp:.1f}°C)")
        if data['Weight'] > max_weight or data['Weight'] < min_weight:
            logger.warning(f"Berat ({data['Weight']:.1f} kg) di luar rentang data pelatihan ({min_weight:.1f}–{max_weight:.1f} kg)")
        normalized_data = np.array([
            (data['GrainTemperature'] - self.input_means[0]) / self.input_stds[0],
            (data['GrainMoisture'] - self.input_means[1]) / self.input_stds[1],
            (data['RoomTemperature'] - self.input_means[2]) / self.input_stds[2],
            (data['Weight'] - self.input_means[3]) / self.input_stds[3]
        ])
        normalized_result = self.predict_linear(normalized_data)
        result = normalized_result * self.output_std + self.output_mean
        result = max(result, 0)
        result = min(result, 720)
        # logger.info(f"Prediksi normalisasi: {normalized_result:.4f}")
        # logger.info(f"Prediksi denormalisasi: {result:.2f} menit")
        return result if not np.isnan(result) else 0.0
