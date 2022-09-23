import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <Container fluid className="py-3 text-center fw-bold fs-4">
      <Row>
        <Col className="">Footer &copy; Shoply</Col>
      </Row>
    </Container>
  );
};

export default Footer;
