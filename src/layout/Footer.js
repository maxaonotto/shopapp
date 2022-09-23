import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <Container fluid className="py-3 text-center fw-bold fs-5 bg-black">
      <Row>
        <Col className="text-white">All rights reserved &copy; Shoply</Col>
      </Row>
    </Container>
  );
};

export default Footer;
