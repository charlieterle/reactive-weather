import './App.css';
import SearchBar from './components/SearchBar.js'
import CurrentWeather from './components/CurrentWeather.js';
import HourlyCard from './components/HourlyCard.js';

let celFar = "F";

function App() {
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
        <HourlyCard
          hourlyData={{
            timeStamp: "9 PM",
            temp: 30,
          }}
          celFar={celFar}
        />
      </header>
    </div>
  );
}

export default App;
