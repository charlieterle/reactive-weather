import './App.css';
import SearchBar from './components/SearchBar.js'
import CurrentWeather from './components/CurrentWeather.js';
import HourlyCard from './components/HourlyCard.js';
import HourlyCarousel from './components/HourlyCarousel.js';

let celFar = "F";

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
        <HourlyCarousel
          hourlyCards={hourlyCards}
          />
      </header>
    </div>
  );
}

export default App;
