import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

export default function Header() {
  return (
    <Container className="mt-2 mb-3 border border-3 border-primary rounded bg-white bg-opacity-50">
      <Row className="h2 justify-content-center"> Reactive Weather </Row>
      <Row className="h4 justify-content-center"> by Charles Dieterle </Row>
    </Container>
  );
}