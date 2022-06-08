import React from "react";
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"

const Navigation = () => (
  <div>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>PLANTRLY</Navbar.Brand>
        <Nav.Link href="/home">Home</Nav.Link>
      </Container>
    </Navbar>
  </div>
);


export default Navigation