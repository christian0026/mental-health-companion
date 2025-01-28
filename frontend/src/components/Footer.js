import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaInstagram, FaGithub, FaLinkedinIn, FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import '../App.css';

const Footer = () => (
  <footer className="footer-section">
    <div className="footer-top">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <p className="social-text">Get connected with us on social networks</p>
          </Col>
          <Col md={6} className="social-icons">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
            <FaEnvelope />
            <FaLinkedinIn />
            <FaGithub />
          </Col>
        </Row>
      </Container>
    </div>

    <div className="footer-middle">
      <Container>
        <Row>
          <Col md={3}>
            <h5>MIND BUDDY</h5>
            <p>Lorem ipsum is simply dummy text of the printing and typesetting industry.</p>
          </Col>
          <Col md={3}>
            <h5>ANOTHER TEXT</h5>
            <p>TEXT</p>
            <p>TEXT</p>
            <p>TEXT</p>
          </Col>
          <Col md={3}>
            <h5>USEFUL LINKS</h5>
            <p>TEXT</p>
            <p>TEXT</p>
            <p>TEXT</p>
          </Col>
          <Col md={3}>
            <h5>CONTACT</h5>
            <p><FaMapMarkerAlt /> Cavite, Silang 4103, PH</p>
            <p><FaEnvelope /> mindbuddy@gmail.com</p>
            <p><FaPhone /> +01 234 5678</p>
          </Col>
        </Row>
      </Container>
    </div>

    <div className="footer-bottom">
      <Container>
        <p>© 2024 Copyright: Mindbuddy.com</p>
      </Container>
    </div>
  </footer>
);

export default Footer;
