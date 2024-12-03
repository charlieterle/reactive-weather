import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

export default function Header() {
  return (
    <Container className="mt-2 mb-3 text-center border border-3 border-primary rounded bg-white bg-opacity-50">
      <Row className="h1 justify-content-center"> Reactive Weather </Row>
      <Row className="h3 justify-content-center"> by Charles Dieterle </Row>
    </Container>
  );
}