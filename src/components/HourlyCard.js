import React from 'react'
import Card from 'react-bootstrap/Card'

export default function HourlyCard({ hour, temp, celFar }) {
  return (
    <Card>
      <Card.Header>{hour}</Card.Header>
      <Card.Body>
        <Card.Text>{temp}˚{celFar}</Card.Text>
        <Card.Img src="" />
        <Card.Text>50%</Card.Text>
      </Card.Body>

    </Card>
  )
}