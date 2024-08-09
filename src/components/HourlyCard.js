import React from 'react';
import Card from 'react-bootstrap/Card';

export default function HourlyCard({ hourData, today, celFar }) {
  return (
    <Card>
      <Card.Header class="text-center">{(today ? 'Today' : 'Tomorrow') + ', ' + hourData.time.slice(11)}</Card.Header>
      <Card.Body>
        <Card.Text>{celFar === 'C' ? hourData.temp_c : hourData.temp_f}˚{celFar}</Card.Text>
        <Card.Img class="rounded float-start" src={hourData.condition.icon} />
        <Card.Text>{hourData.condition.text}</Card.Text>
      </Card.Body>

    </Card>
  )
}