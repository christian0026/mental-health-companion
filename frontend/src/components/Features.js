import React from 'react';
import { Row, Col } from 'react-bootstrap';
import empatheticAI from '../assets/empatheticAI.jpg';
import selfCare from '../assets/selfCare.jpg';
import privacyFocused from '../assets/privacyFocused.jpg';
import '../App.css';

const Features = () => (
  <Row style={{ marginTop: "80px", marginBottom: "60px" }}>
    <Col md={4} className="text-center">
      <img src={empatheticAI} alt="Empathetic AI" style={{ width: '100px', height: '100px', marginBottom: '20px', borderRadius: "50%" }} />
      <h5 style={{ color: '#31511e', fontWeight: 'bold', fontSize: '20px' }}>Empathetic AI</h5>
      <p className="text-secondary">Understands your emotions and provides personalized support.</p>
    </Col>
    <Col md={4} className="text-center">
      <img src={selfCare} alt="Self-Care Guidance" style={{ width: '100px', height: '100px', marginBottom: '20px', borderRadius: "50%" }} />
      <h5 style={{ color: '#31511e', fontWeight: 'bold', fontSize: '20px' }}>Self-Care Guidance</h5>
      <p className="text-secondary">Access to stress relief exercises and personalized recommendations.</p>
    </Col>
    <Col md={4} className="text-center">
      <img src={privacyFocused} alt="Privacy-Focused" style={{ width: '100px', height: '100px', marginBottom: '20px', borderRadius: '50%' }} />
      <h5 style={{ color: '#31511e', fontWeight: 'bold', fontSize: '20px' }}>Privacy-Focused</h5>
      <p className="text-secondary">No ads, no costs, and guaranteed anonymity.</p>
    </Col>
  </Row>
);

export default Features;
