// Returns a single card displaying the weather forecast for a single hour
import React from 'react';
import Card from 'react-bootstrap/Card';

export default function HourlyCard({ hourData, today, celFar }) {
  return (
    <Card className="bg-white bg-opacity-25">
      <Card.Header className="text-center">{(today ? 'Today' : 'Tomorrow') + ', ' + hourData.time.slice(11)}</Card.Header>
      <Card.Body >
        <Card.Text className="fs-4">
          {celFar === 'C' ? Math.round(Number(hourData.temp_c)) : Math.round(Number(hourData.temp_f))}˚{celFar}
        </Card.Text>
        <Card.Img className="rounded float-start" src={hourData.condition.icon} />
      </Card.Body>
    </Card>
  )
}