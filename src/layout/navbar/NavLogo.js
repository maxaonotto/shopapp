import React from "react";
import { Nav, Navbar } from "react-bootstrap";

const NavLogo = () => {
  return (
    <Navbar.Brand className="fw-bold fs-3 py-1 pl-5">
      <Nav.Link to="/">S h o p l y</Nav.Link>
    </Navbar.Brand>
  );
};

export default NavLogo;
