steps for using the weatherApi is

1. login to the openweather and generate the api key and save
2. open the docs for weather forecast api and copy the url
3. create the function for get the lat and log of the city using the geolocation api
4. after get the cordinates of city name, lat and long by using forecast api, get forecast of the city
   5.after getting the forecast, display the forecast on the screen for the next 5 days.

api used here are geolocation api and weather forecast api.

<!-- =>  const WEATHER_API_URL = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`; -->
<!-- const GEOCODING_API_URL = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${API_KEY}`; -->

if the user want the current location of the user here we user navigator

navigator.geolocation.getCurrentPosition(
(position) => {
const { latitude, longitude } = position.coords;
// Get coordinates of user location
// Get city name from coordinates using reverse geocoding API
const REVERSE_GEOCODING_URL = `http://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=${API_KEY}`;
fetch(REVERSE_GEOCODING_URL)
.then((res) => res.json())
.then((data) => {
const { name } = data[0];
getWeatherDetails(name, latitude, longitude);
})
.catch(() => {
alert("Error fetching weather details the current location");
});
})
