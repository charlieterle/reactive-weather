import './App.css';
import SearchBar from './components/SearchBar.js'
import CurrentWeather from './components/CurrentWeather.js';
import HourlyCard from './components/HourlyCard.js';
import HourlyCarousel from './components/HourlyCarousel.js';
import { useState } from 'react';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const WEATHER_BASE_URL = 'http://api.weatherapi.com/v1';
const FORECAST_URL_EXT = '/forecast.json';
const FORECAST_DAYS = 3;

let celFar = "F";

export default function App() {
  const localStorageLocations = localStorage.getItem('locations');
  let locations = localStorageLocations === null ? [] : JSON.parse(localStorageLocations)['locations'];
  const [location, setLocation] = useState(locations.length > 0 ? locations[locations.length - 1] : '');
  const [locationInput, setLocationInput] = useState('');
  const [weatherData, setWeatherData] = useState({});

  function handleInputChange(e) {
    setLocationInput(e.target.value);
  }

  function isEmpty(obj) {
    for (const prop in obj) return false;
    return true;
  }

  function handleLocationSubmit(e) {
    e.preventDefault();
    if (locationInput === location) return;
    const newLocation = locationInput;
    setLocation(newLocation);
    if (locations.includes(newLocation)) {
      return;
    }
    const locationsString = JSON.stringify({ "locations": locations });
    localStorage.setItem("locations", locationsString);
    getWeatherData(newLocation);
  }

  const searchBar = (
    <SearchBar
      onLocationSubmit={handleLocationSubmit}
      onInputChange={handleInputChange}
    />
  )
  if (isEmpty(weatherData)) {
    return (
      <div className="App">
        <header className="App-header">
          {searchBar}
        </header>
      </div>
    );
  }

  let hourlyCards = [];
  const hourlyData = weatherData.forecast.forecastday[0].hour;
  for (const h of hourlyData) {
    hourlyCards.push(
      <HourlyCard
        hourData={h}
        celFar={celFar}
        key={"hourlyCard-" + h.time}
      />
    )
  }

  return (
    <div className="App">
      <header className="App-header">
        {searchBar}
        <CurrentWeather
          weatherData={weatherData}
          celFar={celFar}
        />
        <HourlyCarousel
          hourlyCards={hourlyCards}
        />
      </header>
    </div>
  );

  async function getWeatherData(location) {
    const apiArr = [
      WEATHER_BASE_URL,
      FORECAST_URL_EXT,
      '?key=',
      API_KEY,
      "&q=",
      location,
      "&days=",
      FORECAST_DAYS,
    ];

    const apiUrl = apiArr.join('');

    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const json = await response.json();
      setWeatherData(json);
    } catch (error) {
      console.error(error.message);
    }
  }
}
