import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { Badge, Button, Nav } from "react-bootstrap";
import { selectCartAmount } from "../../redux/selector";

const NavCart = () => {
  const cartAmount = useSelector(selectCartAmount);
  return (
    <Nav.Link as={Link} to="/cart">
      <Button variant="outline-light">
        Cart
        <Badge bg="white" text="black" className="mx-1">
          {cartAmount}
        </Badge>
      </Button>
    </Nav.Link>
  );
};

export default NavCart;
