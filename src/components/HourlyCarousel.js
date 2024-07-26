import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Row from 'react-bootstrap/Row'

const CAROUSEL_LENGTH = 6;

export default function HourlyCarousel({ hourlyCards }) {
    // Divide all of the cards up into sets that will each form one slide on the carousel
    const carouselItems = [];
    for (let i = 0; i < Math.ceil(hourlyCards.length / CAROUSEL_LENGTH); i++) {
        const cardArr = []
        for (let j = 0; j < CAROUSEL_LENGTH; j++) {
            let index = i * CAROUSEL_LENGTH + j;
            if (index < hourlyCards.length) cardArr.push(hourlyCards[index]);
        }
        carouselItems.push([cardArr, "carouselItem" + i]);
    }

    function createCarouselItem([itemGroup, key]) {
        return (
            <Carousel.Item key={key}>
                <Row>
                {itemGroup}
                </Row>
            </Carousel.Item>
        )
    }

    return (
        <Carousel>
            {carouselItems.map(createCarouselItem)}
        </Carousel>
    )
}