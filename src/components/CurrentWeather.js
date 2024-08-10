import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

export default function CurrentWeather({ weatherData, celFar }) {
  const locationData = weatherData.location;
  const location = [locationData.name, locationData.region].join(", ");
  const currentData = weatherData.current;
  const currentTemp = celFar === "C" ? Math.round(Number(currentData.temp_c)) : Math.round(Number(currentData.temp_f));
  const weatherStatus = currentData.condition.text;
  return (
    <Container className="mt-2">
      <Card>
        <Card.Header>{location}</Card.Header>
        <Card.Body className="">
          <Card.Img class="float-start" src={currentData.condition.icon} alt={weatherStatus}></Card.Img>
          <Card.Text className="">{currentTemp}˚{celFar}<br />{weatherStatus}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}
