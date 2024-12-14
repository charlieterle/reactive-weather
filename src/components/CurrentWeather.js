// This component contains the portion of the site that shows the weather right now
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

export default function CurrentWeather({ weatherData, celFar, miKm }) {
  const locationData = weatherData.location;
  const currentData = weatherData.current;
  const currentTemp = celFar === "C" ? Math.round(Number(currentData.temp_c)) : Math.round(Number(currentData.temp_f));
  const currentFeelsLike = celFar === "C" ? Math.round(Number(currentData.feelslike_c)) : Math.round(Number(currentData.feelslike_f));
  const weatherStatus = currentData.condition.text;
  const windSpeed = miKm === "km" ? Math.round(Number(currentData.wind_kph)) : Math.round(Number(currentData.wind_mph));
  const windUnit = miKm === "km" ? "kph" : "mph";
  return (
    <Container className="mt-2 text-center">
      <Row className="justify-content-center">
        <Col className="col-sm-10 col-md-8 col-lg-6 border border-3 border-primary rounded bg-white bg-opacity-25">
          <Row className="justify-content-center h3">
            {locationData.name}, {locationData.region}
          </Row>
          <Row className="row-cols-3 justify-content-center" >
            <Col>
              <Image src={currentData.condition.icon} alt={weatherStatus}></Image>
            </Col>
            <Col>
              <Row className="justify-content-center">{currentTemp}˚{celFar}</Row>
              <Row className="justify-content-center">{weatherStatus}</Row>
              <Row className="justify-content-center">Feels like {currentFeelsLike}˚{celFar}</Row>
            </Col>
            <Col>
              <Row className="justify-content-center">Humidity: {currentData.humidity}%</Row>
              <Row className="justify-content-center">UV Index: {currentData.uv}</Row>
              <Row className="justify-content-center">Wind: {windSpeed} {windUnit} {currentData.wind_dir}</Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container >
  );
}
