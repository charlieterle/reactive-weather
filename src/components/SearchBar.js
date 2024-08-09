import React from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import InputGroup from 'react-bootstrap/InputGroup';
import { FaMagnifyingGlass } from "react-icons/fa6";

export default function SearchBar({ onLocationSubmit, onInputChange, inputValue }) {
  return (
    <Container className="mt-2">
      <Form onSubmit={onLocationSubmit}>
        <InputGroup>
          <InputGroup.Text onClick={onLocationSubmit} className="btn btn-primary" id="search-bar-icon">
            <FaMagnifyingGlass className="mx-1 my-2"/>
          </InputGroup.Text>
          <Form.Control
            onInput={onInputChange}
            className="form-input .bg-light"
            size="lg"
            type="text"
            value={inputValue}
            placeholder="Search City (e.g. Tokyo)"
            aria-label="search-bar"
            aria-describedby="search-bar-icon"
          />
        </InputGroup>
      </Form>
    </Container>
  );
}