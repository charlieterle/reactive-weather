import React from 'react'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import { FaMagnifyingGlass } from "react-icons/fa6";

export default function SearchBar() {
  return (
    <Form className="container">
      <Row>
      <Form.Group className="searchBar" controlId="searchBar">
        <FaMagnifyingGlass className="fa6" />
        <Form.Control className="form-input" size="lg" type="text" placeholder="Tokyo, Japan" />
      </Form.Group>
      </Row>
    </Form>
  );
}