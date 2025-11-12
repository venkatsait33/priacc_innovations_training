import React, { useState } from "react";

const API_KEY = "48f4c409185d1e958bd69a3d4497d7b5";
const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [forecast, setForecast] = useState([]);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [error, setError] = useState("");

  // Fetch weather data based on coordinates
  const getWeatherDetails = async (cityName, lat, lon) => {
    try {
      const WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
      const res = await fetch(WEATHER_API_URL);
      const data = await res.json();

      if (data.cod !== "200") {
        setError("Weather data not found");
        return;
      }

      // Filter unique forecast days (one per day)
      const uniqueForecastDays = [];
      const fiveDaysForecast = data.list.filter((forecast) => {
        const forecastDate = new Date(forecast.dt_txt).getDate();
        if (!uniqueForecastDays.includes(forecastDate)) {
          uniqueForecastDays.push(forecastDate);
          return true;
        }
        return false;
      });

      setCity("");
      setError("");
      setForecast(fiveDaysForecast);
      setCurrentWeather(fiveDaysForecast[0]); // current weather (today)
    } catch (err) {
      setError("Error fetching weather data");
      console.error(err);
    }
  };

  // Get coordinates for city
  const getCityCoordinates = async () => {
    if (!city.trim()) {
      setError("Please enter a city name");
      return;
    }

    try {
      const GEOCODING_API_URL = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`;
      const res = await fetch(GEOCODING_API_URL);
      const data = await res.json();

      if (!data.length) {
        setError(`City "${city}" not found`);
        return;
      }

      const { name, lat, lon } = data[0];
      getWeatherDetails(name, lat, lon);
    } catch (err) {
      setError("Error fetching city data");
      console.error(err);
    }
  };

  // Create weather card JSX
  const createWeatherCard = (cityName, weatherItem, index) => {
    const date = weatherItem.dt_txt.split(" ")[0];
    const temp = (weatherItem.main.temp - 273.15).toFixed(2);
    const icon = weatherItem.weather[0].icon;
    const desc = weatherItem.weather[0].description;
    const wind = weatherItem.wind.speed;
    const humidity = weatherItem.main.humidity;

    if (index === 0) {
      return (
        <div
          key={index}
          className="flex flex-col md:flex-row justify-between items-center bg-blue-100 p-4 rounded shadow-md mb-4"
        >
          <div>
            <h2 className="text-2xl font-semibold">
              {cityName} ({date})
            </h2>
            <p>🌡️ Temperature: {temp} °C</p>
            <p>💨 Wind: {wind} m/s</p>
            <p>💧 Humidity: {humidity}%</p>
          </div>
          <div className="text-center">
            <img
              src={`https://openweathermap.org/img/wn/${icon}@4x.png`}
              alt="weather-icon"
            />
            <p className="capitalize font-medium">{desc}</p>
          </div>
        </div>
      );
    } else {
      return (
        <li
          key={index}
          className="card border rounded-lg p-4 bg-white shadow-md text-center"
        >
          <h3>📅 {date}</h3>
          <img
            src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
            alt="weather-icon"
            className="mx-auto"
          />
          <p>🌡️ Temp: {temp} °C</p>
          <p>💨 Wind: {wind} m/s</p>
          <p>💧 Humidity: {humidity}%</p>
        </li>
      );
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-4">
        🌤️ React Weather App
      </h1>

      <div className="flex justify-center mb-4">
        <input
          type="text"
          placeholder="Enter city name..."
          className="border p-2 rounded-l-md w-2/3"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button
          onClick={getCityCoordinates}
          className="bg-blue-500 text-white px-4 py-2 rounded-r-md"
        >
          Search
        </button>
      </div>

      {error && <p className="text-red-500 text-center mb-4">{error}</p>}

      {/* Current Weather */}
      {currentWeather && (
        <div>
          {createWeatherCard(currentWeather.name || city, currentWeather, 0)}
        </div>
      )}

      {/* 5-Day Forecast */}
      {forecast.length > 1 && (
        <>
          <h2 className="text-xl font-semibold mt-4 mb-2">5-Day Forecast</h2>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {forecast
              .slice(1)
              .map((item, i) => createWeatherCard(city, item, i + 1))}
          </ul>
        </>
      )}
    </div>
  );
};

export default WeatherApp;
