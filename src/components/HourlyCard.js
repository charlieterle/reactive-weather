// Returns a single card displaying the weather forecast for a single hour
import React from 'react';
import Card from 'react-bootstrap/Card';

export default function HourlyCard({ hourData, today, celFar }) {
  return (
    <Card>
      <Card.Header class="text-center">{(today ? 'Today' : 'Tomorrow') + ', ' + hourData.time.slice(11)}</Card.Header>
      <Card.Body>
        <Card.Text>
          {celFar === 'C' ? Math.round(Number(hourData.temp_c)) : Math.round(Number(hourData.temp_f))}˚{celFar}
          <br />
          {hourData.condition.text}
        </Card.Text>
        <Card.Img class="rounded float-start" src={hourData.condition.icon} />
      </Card.Body>
    </Card>
  )
}