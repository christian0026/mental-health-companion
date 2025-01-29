import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import empatheticAI from '../assets/empatheticAI.jpg';
import selfCare from '../assets/selfCare.jpg';
import privacyFocused from '../assets/privacyFocused.jpg';
import '../App.css';

const Features = () => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 2 }}
    style={{ marginBottom: "100px", padding: "20px" }}
  >
    <Row className="justify-content-center">
      {[
        { img: empatheticAI, title: "Empathetic AI", text: "Understands your emotions and provides personalized support." },
        { img: selfCare, title: "Self-Care Guidance", text: "Access to stress relief exercises and personalized recommendations." },
        { img: privacyFocused, title: "Privacy-Focused", text: "No ads, no costs, and guaranteed anonymity." },
      ].map((feature, index) => (
        <Col key={index} md={4} sm={6} className="text-center mb-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ padding: "20px", borderRadius: "10px", backgroundColor: "#f8f9fa" }}
          >
            <img src={feature.img} alt={feature.title} style={{ width: '100px', height: '100px', marginBottom: '20px', borderRadius: "50%" }} />
            <h5 style={{ color: '#31511e', fontWeight: 'bold', fontSize: '20px' }}>{feature.title}</h5>
            <p className="text-secondary">{feature.text}</p>
          </motion.div>
        </Col>
      ))}
    </Row>
  </motion.div>
);

export default Features;