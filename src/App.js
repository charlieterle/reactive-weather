import SearchBar from './components/SearchBar.js'
import CurrentWeather from './components/CurrentWeather.js';
import HourlyCard from './components/HourlyCard.js';
import HourlyCarousel from './components/HourlyCarousel.js';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const WEATHER_BASE_URL = 'http://api.weatherapi.com/v1';
const FORECAST_URL_EXT = '/forecast.json';
const FORECAST_DAYS = 3;

let celFar = "F";

// Can use this data to internationalize the site
const condition_data = require('./conditions.json');

export default function App() {
  const [location, setLocation] = useState('');
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
    getWeatherData(newLocation);
  }

  const searchBar = (
    <SearchBar
      onLocationSubmit={handleLocationSubmit}
      onInputChange={handleInputChange}
    />
  )

  // If there has been no request for weather data yet, only show the search bar
  if (isEmpty(weatherData)) {
    return (
      <div className="App">
        <div class="position-absolute top-50 start-50 translate-middle">{searchBar}</div>
      </div>
    );
  }

  let hourlyCards = [];
  const hourlyDataToday = weatherData.forecast.forecastday[0].hour;
  const hourlyDataTomorrow = weatherData.forecast.forecastday[1].hour;
  const current_hour = Number(weatherData.location.localtime.slice(11, 13));
  // Get the next 24 hours of hourly weather data
  for (let i = 0; i < 24; i++) {
    let hour = current_hour + i + 1;
    let today = hour <= 23;
    let hourData = today ? hourlyDataToday[hour] : hourlyDataTomorrow[hour - 24];
    hourlyCards.push(
      <HourlyCard
        hourData={hourData}
        today={today}
        celFar={celFar}
        key={"hourlyCard-" + hourData.time}
      />
    )
  }

  return (
    <div className="App">
      {searchBar}
      <Container className="mt-2">
        <Row className="row-12">
          <Col className="col-12 col-md-3">
            <CurrentWeather weatherData={weatherData} celFar={celFar} />
          </Col>
          <Col className="col-12 col-md-9">
            <HourlyCarousel hourlyCards={hourlyCards} />
          </Col>
        </Row>
      </Container>
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
