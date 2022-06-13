import React from "react";
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"

const Navigation = () => (
  <Navbar className="NavBar" bg="light" expand="xl">
    <Container>
      <Navbar.Brand className="NavBrand">PLANTRLY</Navbar.Brand>
      <Nav.Link className="Navlink" href="/plant">Home</Nav.Link>
    </Container>
  </Navbar>
);


export default Navigation