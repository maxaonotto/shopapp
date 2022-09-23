import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const GoShopping = () => {
  return (
    <Button
      as={Link}
      to="/products"
      className="mx-auto p-3 w-25 fw-bold"
      variant="outline-dark"
    >
      Go Shopping
    </Button>
  );
};

export default GoShopping;
