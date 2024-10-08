// This component contains the portion of the site that shows the weather right now
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

export default function CurrentWeather({ weatherData, celFar, miKm }) {
  const locationData = weatherData.location;
  const location = [locationData.name, locationData.region].join(", ");
  const currentData = weatherData.current;
  const currentTemp = celFar === "C" ? Math.round(Number(currentData.temp_c)) : Math.round(Number(currentData.temp_f));
  const currentFeelsLike = celFar === "C" ? Math.round(Number(currentData.feelslike_c)) : Math.round(Number(currentData.feelslike_f));
  const weatherStatus = currentData.condition.text;
  const windSpeed = miKm === "km" ? Math.round(Number(currentData.wind_kph)) : Math.round(Number(currentData.wind_mph));
  const windUnit = miKm === "km" ? "kph" : "mph";
  return (
    <Container className="mt-2">
      <Row className="justify-content-center">
        <Col className="col-md-6 border border-5 border-primary rounded">
          <Row className="justify-content_center">
            <Col className="h3">
              {location}
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col xs="auto">
              <Image src={currentData.condition.icon} alt={weatherStatus}></Image>
            </Col>
          </Row>
          <Row className="row-cols-3 justify-content-center" >
            <Col xs="auto">
              {weatherStatus}
              <br />
              {currentTemp}˚{celFar}
              <br />
              Feels like {currentFeelsLike}˚{celFar}
              <br />
            </Col>
            <Col>
              Humidity: {currentData.humidity}%
              <br />
              UV Index: {currentData.uv}
              <br />
              Wind: {windSpeed} {windUnit} {currentData.wind_dir}
            </Col>
          </Row>

        </Col>
      </Row>
    </Container >
  );
}
