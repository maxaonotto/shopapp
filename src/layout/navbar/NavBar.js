import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import NavCart from "./NavCart";
import NavLinks from "./NavLinks";
import NavLogo from "./NavLogo";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container className="m-0 p-0">
        <NavLogo />
        <NavLinks />
        <NavCart />
      </Container>
    </Navbar>
  );
};

export default NavBar;
