// This component contains the portion of the site that shows the weather right now
import React from 'react';
import Card from 'react-bootstrap/Card';

export default function CurrentWeather({ weatherData, celFar }) {
  const locationData = weatherData.location;
  const location = [locationData.name, locationData.region].join(", ");
  const currentData = weatherData.current;
  const currentTemp = celFar === "C" ? Math.round(Number(currentData.temp_c)) : Math.round(Number(currentData.temp_f));
  const weatherStatus = currentData.condition.text;
  return (
      <Card>
        <Card.Header>{location}</Card.Header>
        <Card.Body className="">
          <Card.Img className="" src={currentData.condition.icon} alt={weatherStatus}></Card.Img>
          <Card.Text className="">{currentTemp}˚{celFar}<br />{weatherStatus}</Card.Text>
        </Card.Body>
      </Card>
  );
}
