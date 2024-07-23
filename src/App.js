import './App.css';
import SearchBar from './components/SearchBar.js'
import CurrentWeather from './components/CurrentWeather.js';
import HourlyCard from './components/HourlyCard.js';
import HourlyCarousel from './components/HourlyCarousel.js';

const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
const baseWeatherUrl = 'http://api.weatherapi.com/v1';
const forecastUrlExt = '/forecast.json';
const forecastDays = 3;

let celFar = "F";

const data = getWeatherData('Tokyo', forecastDays);

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SearchBar/>
        <CurrentWeather
          weatherData={{
            title: "Today",
            currentTemp: 38,
            weatherStatus: "Cloudy",
            precipPct: 55,
          }}
          celFar={celFar}
        />
        <HourlyCarousel
          hourlyCards={hourlyCards}
          />
      </header>
    </div>
  );
}

let hourlyCards = [];
for (let i = 0; i < 13; i++) {
  hourlyCards.push(
    <HourlyCard
      hourlyData={{
        timeStamp: i + " AM",
        temp: 30 + i,
      }}
      celFar={celFar}
    />
  )
}

async function getWeatherData(location, days) {
  const apiArr = [
    baseWeatherUrl,
    forecastUrlExt,
    '?key=',
    apiKey,
    "&q=",
    location, 
    "&days=",
    days,
  ];

  const apiUrl = apiArr.join('');

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.error(error.message);
  }
}