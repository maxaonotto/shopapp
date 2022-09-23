import React from "react";
import { Link } from "react-router-dom";
import { Badge, Button, Nav } from "react-bootstrap";

const NavCart = () => {
  return (
    <Nav.Link as={Link} to="/cart">
      <Button variant="outline-light">
        Cart
        <Badge bg="white" text="black" className="mx-1">
          1
        </Badge>
      </Button>
    </Nav.Link>
  );
};

export default NavCart;
