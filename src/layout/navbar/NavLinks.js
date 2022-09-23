import React from "react";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";

const NavLinks = () => {
  return (
    <Nav className="mx-auto fs-5">
      <Nav.Link as={Link} to="/">
        Home
      </Nav.Link>
      <Nav.Link as={Link} to="/products">
        Catalog
      </Nav.Link>
    </Nav>
  );
};

export default NavLinks;
