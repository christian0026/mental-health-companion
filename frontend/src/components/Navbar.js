import React from 'react';
import { Navbar, Nav, Container, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AppNavbar = () => (
  <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand as={Link} to="" style={{ fontWeight: 'bold'}}>
        <Image src="https://img.icons8.com/ios/452/brain.png" width="30" height="30" className="d-inline-block align-top" alt="Mindbuddy" />
        MINDBUDDY
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/" style={{ color: '#31511E'}} >home</Nav.Link>
          <Nav.Link as={Link} to="/about" style={{ color: '#31511E'}}>about</Nav.Link>
          <Nav.Link as={Link} to="/exercises" style={{ color: '#31511E'}}>chat now</Nav.Link>
          <Nav.Link as={Link} to="/login" style={{ color: '#31511E'}}>sign in</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default AppNavbar;
