import './App.css';
import SearchBar from './components/SearchBar.js'
import CurrentWeather from './components/CurrentWeather.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SearchBar/>
        <WeatherCard
          weatherData={{
            title: "Today",
            currentTemp: 38,
            weatherStatus: "Cloudy",
            precipPct: 55,
          }}
          celFar={'F'}
        />
      </header>
    </div>
  );
}

export default App;
