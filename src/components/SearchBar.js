import React from 'react'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import { FaMagnifyingGlass } from "react-icons/fa6";

export default function SearchBar({ onLocationSubmit, onInputChange, inputValue }) {
  return (
    <Form onSubmit={onLocationSubmit} className="container mt-2">
      <Row>
      <Form.Group className="searchBar" controlId="searchBar">
        <FaMagnifyingGlass className="fa6" />
        <Form.Control onInput={onInputChange} className="form-input .bg-light" size="lg" type="text" value={inputValue} placeholder="Search City (e.g. Tokyo)" />
      </Form.Group>
      </Row>
    </Form>
  );
}