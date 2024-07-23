import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';

export default function CurrentWeather({ weatherData, celFar }) {
  return (
    <Container className="container mt-2">
      <Row>{weatherData.title}</Row>
      <Row className="">
        {weatherData.currentTemp}˚{celFar}
      </Row>
      <Row>
        {weatherData.weatherStatus}
      </Row>
      <Row>
        Precipitation: {weatherData.precipPct}%
      </Row>
    </Container>
  )
}