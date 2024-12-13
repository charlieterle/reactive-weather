import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

export default function Footer() {
  return (
    <footer>
      <Container className="col-9 col-sm-7 col-md-5 col-lg-4 col-xl-3 mb-4 border border-3 border-primary rounded bg-white bg-opacity-50 position-absolute bottom-0 start-50 translate-middle-x">
        <Row className="fs-4 justify-content-center">
          <p className="text-center">View the code for this website on <a href="https://github.com/charlieterle/reactive-weather">my GitHub</a></p>
        </Row>
      </Container>
    </footer>
  );
}