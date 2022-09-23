import React from "react";

import { Button, Col, Row } from "react-bootstrap";
import { handleCategory } from "../../redux/action";

const Categories = ({ setList }) => {
  return (
    <Row className="m-0 p-3 d-flex justify-content-center">
      <Col
        as={Button}
        variant="dark"
        className="mx-3 mb-1"
        onClick={() => handleCategory("men's clothing", setList)}
      >
        Men's clothing
      </Col>
      <Col
        as={Button}
        variant="dark"
        className="mx-3 mb-1"
        onClick={() => handleCategory("women's clothing", setList)}
      >
        Women's clothing
      </Col>
      <Col
        as={Button}
        variant="dark"
        className="mx-3 mb-1"
        onClick={() => handleCategory("jewelery", setList)}
      >
        Jewelery
      </Col>
      <Col
        as={Button}
        variant="dark"
        className="mx-3 mb-1"
        onClick={() => handleCategory("electronics", setList)}
      >
        Electronic
      </Col>
      <Col
        as={Button}
        variant="dark"
        className="mx-3 mb-1"
        onClick={() => handleCategory("all", setList)}
      >
        All
      </Col>
    </Row>
  );
};

export default Categories;
