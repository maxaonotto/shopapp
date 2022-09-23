import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";

const NavLogo = () => {
  return (
    <Navbar.Brand className="fw-bold fs-3">
      <Nav.Link as={Link} to="/">
        S h o p l y
      </Nav.Link>
    </Navbar.Brand>
  );
};

export default NavLogo;
