import React, { useEffect, useState } from "react";
import { getCoordinates, getWeatherData } from "../api/api";

const WeatherDashboard = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favCities");
    return saved ? JSON.parse(saved) : [];
  });

  // Fetch weather by city
  const fetchWeather = async (cityName) => {
    try {
      setError("");

      const geo = await getCoordinates(cityName);
      if (!geo.length) {
        setError("City not found");
        return;
      }

      const { lat, lon } = geo[0];
      const data = await getWeatherData(lat, lon);

      setWeather({
        name: cityName,
        temp: (data.main.temp - 273.15).toFixed(1),
        humidity: data.main.humidity,
        desc: data.weather[0].description,
        icon: data.weather[0].icon,
      });
    } catch (err) {
      console.error(err);
      setError("Error fetching weather!");
    }
  };

  // Add to favourites
  const addToFavorites = () => {
    if (!city) return;
    if (!favorites.includes(city)) {
      const updated = [...favorites, city];
      setFavorites(updated);
      localStorage.setItem("favCities", JSON.stringify(updated));
    }
  };

  // Auto-refresh every 10 minutes
  useEffect(() => {
    if (!weather) return;

    const interval = setInterval(() => {
      fetchWeather(weather.name);
    }, 10 * 60 * 1000);

    return () => clearInterval(interval);
  }, [weather]);

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-4">
        🌤️ Realtime Weather Dashboard
      </h1>

      {/* Search Bar */}
      <div className="flex mb-4">
        <input
          className="border p-2 rounded-l-md flex-1"
          placeholder="Search city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-r-md"
          onClick={() => fetchWeather(city)}
        >
          Search
        </button>
      </div>

      {/* Favorites Dropdown */}
      {favorites.length > 0 && (
        <div className="mb-4">
          <label className="font-semibold">⭐ Favourite Cities</label>
          <select
            className="border p-2 w-full mt-1"
            onChange={(e) => fetchWeather(e.target.value)}
          >
            <option>Select Favourite</option>
            {favorites.map((c, i) => (
              <option key={i} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Error Message */}
      {error && <p className="text-red-500 text-center">{error}</p>}

      {/* Weather Card */}
      {weather && (
        <div className="bg-blue-100 p-4 rounded shadow text-center text-black">
          <h2 className="text-2xl font-semibold mb-2">
            {weather.name} ({weather.desc})
          </h2>
          <img
            className="mx-auto w-24"
            src={`https://openweathermap.org/img/wn/${weather.icon}@4x.png`}
            alt="weather"
          />

          <p>🌡️ Temperature: {weather.temp} °C</p>
          <p>💧 Humidity: {weather.humidity}%</p>

          <button
            onClick={addToFavorites}
            className="bg-green-500 text-white mt-3 px-4 py-2 rounded-md"
          >
            ⭐ Save to Favourites
          </button>
        </div>
      )}
    </div>
  );
};

export default WeatherDashboard;
