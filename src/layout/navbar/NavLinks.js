import React from "react";
import { Nav } from "react-bootstrap";

const NavLinks = () => {
  return (
    <Nav className="mx-auto fs-5">
      <Nav.Link to="/">Home</Nav.Link>
      <Nav.Link to="/products">Catalog</Nav.Link>
    </Nav>
  );
};

export default NavLinks;
