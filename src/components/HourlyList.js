// Returns a carousel-like component that users can click to move
// between chunks of hourly data
import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
// import { TODO FIND NEW ICON } from 'react-icons/bs';
import { useState } from 'react';

export default function HourlyList({ hourData, today, celFar }) {
  const [listOpen, setlistOpen] = useState(false);

  // Divide all of the cards up into sets that will each form one slide on the scroller
  const scrollerItems = [];
  for (let i = 0; i < hourData.length; i++) {
    const cardArr = []
    for (let j = 0; j < SCROLLER_LENGTH; j++) {
      let index = i * SCROLLER_LENGTH + j;
      if (index < hourlyCards.length) {
        cardArr.push(hourlyCards[index]);
      };
    }
    scrollerItems.push([cardArr, "scrollerItem" + i]);
  }

  // Changes which set of hourly data is displayed
  function changeSlides(interval) {
    const nextSlideNum = slideNum + interval;
    if (nextSlideNum < 0 || nextSlideNum > scrollerItems.length - 1) {
      return;
    }
    setSlideNum(nextSlideNum);
  }

  function createScrollerItem([itemGroup, key]) {
    return (
      <Container className="mt-2 text-center">
        <Row className="align-items-center" key={key}>
          <Col className="col-2 col-sm-1 text-bg-primary text-center rounded-3 py-3" onClick={() => changeSlides(-1)}>
            <BsArrowLeft />
          </Col>
          <Col className="col">
              {itemGroup}
          </Col>
          <Col className="col-2 col-sm-1 text-bg-primary text-center rounded-3 py-3" onClick={() => changeSlides(1)}>
            <BsArrowRight />
          </Col>
        </Row>
      </Container>
    )
  }

  return (
    createScrollerItem(scrollerItems[slideNum], 'hourlyscroller')
  );
}