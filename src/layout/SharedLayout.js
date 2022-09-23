import React from "react";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import NavBar from "./navbar/NavBar";

const SharedLayout = () => {
  return (
    <Container
      fluid
      style={{ height: "100vh" }}
      className="p-0 d-flex flex-column justify-content-between"
    >
      <NavBar />
      <Outlet />
      <Footer />
    </Container>
  );
};

export default SharedLayout;
