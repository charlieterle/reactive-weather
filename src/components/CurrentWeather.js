import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function CurrentWeather({ weatherData, celFar }) {
  const locationData = weatherData.location;
  const location = [locationData.name, locationData.region, locationData.country].join(", ")
  const currentData = weatherData.current;
  const currentTemp = celFar === "C" ? Math.round(Number(currentData.temp_c)) : Math.round(Number(currentData.temp_f));
  const weatherStatus = currentData.condition.text;
  return (
    <Container className="container mt-2">
      <Row className="">
        <Col className="bg-primary-subtle col-11 fs-3 text-left">Weather in {location}</Col>
        <Col className="col-1">
          <img class="float-right" src={currentData.condition.icon} alt={weatherStatus}></img>
        </Col>
      </Row>
      <Row className="">
        <Col className="bg-secondary-subtle col-12 fs-2 text-left">{currentTemp}˚{celFar} </Col>
      </Row>
      <Row className="">
        <Col className="bg-secondary-subtle col-12 fs-2 text-left">{weatherStatus}</Col>
      </Row>
    </Container>
  )
}