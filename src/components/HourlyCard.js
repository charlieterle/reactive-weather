import React from 'react'
import Card from 'react-bootstrap/Card'

export default function HourlyCard({ hourData, celFar }) {
  return (
    <Card>
      <Card.Header>{hourData.time}</Card.Header>
      <Card.Body>
        <Card.Text>{celFar === 'C' ? hourData.temp_c : hourData.temp_f}˚{celFar}</Card.Text>
        <Card.Img src="" />
        <Card.Text>50%</Card.Text>
      </Card.Body>

    </Card>
  )
}