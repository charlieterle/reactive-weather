// Returns a carousel-like component that users can click to move
// between chunks of hourly data
import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

export default function HourlyList({ hourData, celFar }) {
  const [listOpen, setListOpen] = useState(false);
  const [openCloseText, setOpenCloseText] = useState('Expand Hourly Forecast')

  let currentHour = hourData[0].time.slice(11, 14);

  // Create a list of rows that display the hourly data for the next 24 hours
  const listItems = hourData.map(
    (oneHourData) =>
      <ListGroup.Item key={`hourlydata-${oneHourData.time}`} className="bg-white bg-opacity-75 border border-1 border-dark-subtle" >
        <Row className="justify-content-center">
          <Col>{oneHourData.time.slice(11, 14) >= currentHour ? 'Today' : 'Tomorrow'}<br />{oneHourData.time.slice(11)}</Col>
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
    setListOpen(!listOpen);
    setOpenCloseText(listOpen ? 'Expand Hourly Forecast' : 'Collapse Hourly Forecast');
  }

  // Decides how much hourly forecast data to display
  let listItemsDisplay = listOpen ? listItems : listItems.slice(0, 6);

  return (
    <Container className="mt-2 text-center gx-0">
      <Row className="justify-content-center gx-0">
        <Col className="col-sm-10 col-md-8 col-lg-6">
          <ListGroup className="border border-3 border-primary rounded">
            {listItemsDisplay}
          </ListGroup>
          <Button onClick={openCloseList}>
            {openCloseText}
          </Button>
        </Col>
      </Row>
    </Container>
  );
}