import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

export default function Footer() {
  return (
    <footer>
      <Container className="m-0 border border-3 border-primary rounded bg-white bg-opacity-50">
        <Row className="fs-4 justify-content-center">
          <p className="text-center">
            Look at the source code on <a href="https://github.com/charlieterle/reactive-weather">GitHub</a>
          </p>
        </Row>
      </Container>
    </footer>
  );
}