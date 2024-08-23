// Returns a carousel-like component that users can click to move
// between chunks of hourly data
import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import CardGroup from 'react-bootstrap/CardGroup';
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';
import { useState } from 'react';

const SCROLLER_LENGTH = 6;

export default function HourlyScroller({ hourlyCards }) {
  const [slideNum, setSlideNum] = useState(0);

  // Divide all of the cards up into sets that will each form one slide on the scroller
  const scrollerItems = [];
  for (let i = 0; i < Math.ceil(hourlyCards.length / SCROLLER_LENGTH); i++) {
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
      <Row className="align-items-center" key={key}>
        <Col className="text-bg-primary text-center rounded-3 py-3" onClick={() => changeSlides(-1)}>
          <BsArrowLeft />
        </Col>
        <Col className="col-10">
          <CardGroup>
            {itemGroup}
          </CardGroup>
        </Col>
        <Col className="text-bg-primary text-center rounded-3 py-3" onClick={() => changeSlides(1)}>
          <BsArrowRight />
        </Col>
      </Row>
    )
  }

  return (
    createScrollerItem(scrollerItems[slideNum])
  );
}