import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaInstagram, FaGithub, FaLinkedinIn, FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import '../App.css';

const Footer = () => (
  <motion.footer
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 4.5 }}
    style={{ marginTop: "100px", padding: "20px", backgroundColor: "#f8f9fa" }}
  >
    <div className="footer-top">
      <Container>
      <Row className="align-items-center">
          <Col md={6}>
            <p className="social-text" style={{ color: "white" }}>Get connected with us on social networks</p>
          </Col>
          <Col md={6} className="social-icons">
            <motion.a whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} href="#"><FaFacebookF style={{ color: "white" }} /></motion.a>
            <motion.a whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} href="#"><FaInstagram style={{ color: "white" }} /></motion.a>
            <motion.a whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} href="#"><FaTwitter style={{ color: "white" }} /></motion.a>
            <motion.a whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} href="#"><FaEnvelope style={{ color: "white" }} /></motion.a>
            <motion.a whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} href="#"><FaLinkedinIn style={{ color: "white" }} /></motion.a>
            <motion.a whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} href="#"><FaGithub style={{ color: "white" }} /></motion.a>
          </Col>
        </Row>
      </Container>
    </div>

    <div className="footer-middle">
      <Container>
        <Row>
          <Col md={3}>
            <h5>MIND BUDDY</h5>
            <p>Mind Buddy is dedicated to improving mental well-being by providing accessible and AI-powered support tools.</p>
          </Col>
          <Col md={3}>
            <h5>Resources</h5>
            <a href="https://books.google.com.ph/books?id=EY0MsG8ZHZUC&lpg=PA127&ots=8SEuwDG0zU&dq=how%20to%20manage%20stress&lr&pg=PA127#v=onepage&q=how%20to%20manage%20stress&f=false" target="_blank" style={{ textDecoration: "none" }}>Manage Stress</a><br></br>
            <a href="https://www.brighterdaze.co/blog/how-to-create-mindfulness-in-your-everyday-life-8-practical-tips-for-beginners" target="_blank" style={{ textDecoration: "none" }}>Mindful Tips</a><br></br>
            <a href="https://psycnet.apa.org/record/1979-28756-000" target="_blank" style={{ textDecoration: "none" }}>Understanding Anxiety</a>
          </Col>
          <Col md={3}>
            <h5>QUICK LINKS</h5>
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
        <p style={{ color: "white" }}>© 2024 Copyright: Mindbuddy.com</p>
      </Container>
    </div>
  </motion.footer>
);

export default Footer;