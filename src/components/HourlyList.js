// Returns a carousel-like component that users can click to move
// between chunks of hourly data
import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';
// import { TODO FIND NEW ICON } from 'react-icons/bs';
import { useState } from 'react';

export default function HourlyList({ hourData, celFar }) {
  const [listOpen, setlistOpen] = useState(false);

  let currentHour = hourData[0].time.slice(11, 14);

  // Create a list of rows that display the hourly data for the next 24 hours
  const listItems = hourData.map(
    (oneHourData) =>
      <ListGroup.Item className="bg-white bg-opacity-50" >
        <Row className="justify-content-center">
          <Col>{oneHourData.time.slice(11, 14) >= currentHour ? 'Today' : 'Tomorrow'} {oneHourData.time.slice(11)}</Col>
          <Col className="">
            <Image src={oneHourData.condition.icon}></Image>
          </Col>
          <Col>
            {celFar === 'C' ? Math.round(Number(oneHourData.temp_c)) : Math.round(Number(oneHourData.temp_f))}˚{celFar}
          </Col>
        </Row>
      </ListGroup.Item>
  );

  // Changes which set of hourly data is displayed
  function openCloseList() {
    setlistOpen(!listOpen);
  }

  return (
    <Container> 
      <ListGroup >
        {listItems}
      </ListGroup>
    </Container>
  );
}