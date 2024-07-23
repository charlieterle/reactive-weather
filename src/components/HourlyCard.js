import React from 'react'
import Card from 'react-bootstrap/Card'

export default function HourlyCard({ hourlyData, celFar }) {
  return (
    <Card>
      <Card.Header>{hourlyData.timeStamp}</Card.Header>
      <Card.Body>
        <Card.Text>{hourlyData.temp}˚{celFar}</Card.Text>
        <Card.Img src="" />
        <Card.Text>50%</Card.Text>
      </Card.Body>

    </Card>
  )
}