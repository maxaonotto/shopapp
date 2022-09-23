import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import GoShopping from "../button/GoShopping";

const Empty = () => {
  return (
    <Row className="text-center">
      <Col className=" fw-bold fs-1 ">
        <Form className="pb-5">Your cart is empty</Form>
        <GoShopping />
      </Col>
    </Row>
  );
};

export default Empty;
