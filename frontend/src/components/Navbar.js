import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';

const AppNavbar = () => (

  <Navbar className="navbar" bg="transparent" expand="lg">
    <Container>
      <Navbar.Brand as={Link} to="/" className='brand'>
        <img src = {logo} alt="logo" className="logo" style={{width: "4rem", height: "100%", objectFit: "cover", border: "none", borderRadius: "60px"}}/> MINDBUDDY
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto text-center d-flex justify-content-center">
          <Nav.Link href='/' className="nav-links">home</Nav.Link>
          <Nav.Link href='../pages/About.js' className="nav-links">about</Nav.Link>
          <Nav.Link href='#testimonials' className="nav-links">testimonials</Nav.Link>
          <Nav.Link href='/registration' className="nav-links">sign up</Nav.Link>
          <Nav.Link href='/login' className='nav-links'>
            <Button size='sm' className='bg_login fw-bold text-decoration-none' style={{borderRadius: "20px", background: "black", textTransform: "none"}}>Log in</Button>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default AppNavbar;
