import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';

export default function CurrentWeather({ weatherData, celFar }) {
  const locationData = weatherData.location;
  const location = [locationData.name, locationData.region, locationData.country].join(", ")
  const currentData = weatherData.current;
  const currentTemp = celFar === "C" ? currentData.temp_c : currentData.temp_f;
  const weatherStatus = currentData.condition.text;
  const precipPct = weatherData.forecast.forecastday[0].day.daily_chance_of_rain;
  return (
    <Container className="container mt-2">
      <h1 class="text-center">Current Weather</h1>
      <Row>{location}</Row>
      <Row className="">
        {currentTemp}˚{celFar}
      </Row>
      <Row>
        {weatherStatus}
      </Row>
      <Row>
        Precipitation: {precipPct}%
      </Row>
    </Container>
  )
}