import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';

const AppNavbar = () => {
  return (
    <Navbar 
      className="navbar" 
      bg="white" 
      expand="lg"
      style={{
        position: "sticky",
        top: "0",
        width: "100%",
        zIndex: "1000",
        backgroundColor: "white",
        boxShadow: "-2px 0px 25px -3px rgba(0,0,0,0.75)"
      }}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className='brand'>
          <img src={logo} alt="logo" className="logo" 
            style={{ 
              width: "4rem", 
              height: "100%", 
              objectFit: "cover", 
              border: "none", 
              borderRadius: "60px" 
            }} 
          /> 
          MINDBUDDY
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-center d-flex justify-content-center">
            <Nav.Link 
              as={Link} 
              to="/" 
              className="nav-links"
              style={{
                position: "relative",
                margin: "0 10px",
                textDecoration: "none",
                color: "black",
                transition: "color 0.3s ease",
                padding: "5px 10px",
                borderRadius: "5px",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                e.target.style.color = "#31511e";
                e.target.style.backgroundColor = "#f8f9fa";
              }}
              onMouseLeave={(e) => {
                e.target.style.color = "black";
                e.target.style.backgroundColor = "transparent";
              }}
            >
              home
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/chatbot" 
              className="nav-links"
              style={{
                position: "relative",
                margin: "0 10px",
                textDecoration: "none",
                color: "black",
                transition: "color 0.3s ease",
                padding: "5px 10px",
                borderRadius: "5px",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                e.target.style.color = "#31511e";
                e.target.style.backgroundColor = "#f8f9fa";
              }}
              onMouseLeave={(e) => {
                e.target.style.color = "black";
                e.target.style.backgroundColor = "transparent";
              }}
            >
              chat now
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/exercises" 
              className="nav-links"
              style={{
                position: "relative",
                margin: "0 10px",
                textDecoration: "none",
                color: "black",
                transition: "color 0.3s ease",
                padding: "5px 10px",
                borderRadius: "5px",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                e.target.style.color = "#31511e";
                e.target.style.backgroundColor = "#f8f9fa";
              }}
              onMouseLeave={(e) => {
                e.target.style.color = "black";
                e.target.style.backgroundColor = "transparent";
              }}
            >
              exercises
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;.0