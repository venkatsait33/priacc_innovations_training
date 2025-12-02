const API_KEY = import.meta.env.VITE_API_KEY;

// Get coordinates from city
export const getCoordinates = async (city) => {
  const url = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`;
  const res = await fetch(url);
  return res.json();
};

// Get weather by lat/lon
export const getWeatherData = async (lat, lon) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
  const res = await fetch(url);
  return res.json();
};
