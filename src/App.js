import SearchBar from './components/SearchBar.js'
import CurrentWeather from './components/CurrentWeather.js';
import HourlyCard from './components/HourlyCard.js';
import HourlyCarousel from './components/HourlyCarousel.js';
import HourlyScroller from './components/HourlyScroller.js';
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
// const condition_data = require('./conditions.json');

export default function App() {
  // location is calculated and stored when a user submits an input in the search bar
  const [location, setLocation] = useState('');
  // location input is to maintain the state of the search bar input
  const [locationInput, setLocationInput] = useState('');
  // weatherData is retrieved with an API call on submit of the location input
  const [weatherData, setWeatherData] = useState({});

  // Handle a user typing into the search bar
  function handleInputChange(e) {
    setLocationInput(e.target.value);
  }

  // Handle a user submitting what is typed in the search bar
  function handleLocationSubmit(e) {
    e.preventDefault();
    // Prevent the same input from being searched again
    if (locationInput === location) return;
    const newLocation = locationInput;
    setLocation(newLocation);
    getWeatherData(newLocation);
  }

  // Create the SearchBar element
  const searchBar = (
    <SearchBar
      onLocationSubmit={handleLocationSubmit}
      onInputChange={handleInputChange}
    />
  )

  // Checks if an object is empty (used to check if weatherData is populated or not)
  function isEmpty(obj) {
    for (const prop in obj) return false;
    return true;
  }

  // If there has been no request for weather data yet, return a webpage with only the search bar
  if (isEmpty(weatherData)) {
    return (
      <div className="App">
        <div className="position-absolute top-50 start-50 translate-middle">{searchBar}</div>
      </div>
    );
  }

  // Get the next 24 hours of hourly weather data
  // and create an HourlyCard for each hour
  let hourlyCards = [];
  const hourlyDataToday = weatherData.forecast.forecastday[0].hour;
  const hourlyDataTomorrow = weatherData.forecast.forecastday[1].hour;
  const current_hour = Number(weatherData.location.localtime.slice(11, 13));
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

  // Main return statement
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
        <HourlyScroller hourlyCards={hourlyCards} />
      </Container>
    </div>
  );

  // Weather API call
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
