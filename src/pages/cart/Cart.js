import React from "react";
import { Container, Row } from "react-bootstrap";
import ClearCartButton from "../../component/button/ClearCart";
import CartList from "../../component/cart/CartList";
import TotalPrice from "../../component/cart/TotalPrice";

const Cart = () => {
  return (
    <Container fluid>
      <CartList />
      <Row className="py-2 d-flex justify-content-around">
        <ClearCartButton />
        <TotalPrice />
      </Row>
    </Container>
  );
};

export default Cart;
