import React from 'react';
import { Row, Col } from 'react-bootstrap';
import aiPowered from '../assets/aiPowered.jpg';
import stressRelief from '../assets/stressRelief.jpg';
import careSelf from '../assets/careSelf.jpg';
import library from '../assets/library.jpg';
import anonymity from '../assets/anonymity.jpg';
import userFriendly from '../assets/userFriendly.jpg';
import crisisSupport from '../assets/crisisSupport.jpg';
import audioVideo from '../assets/audioVideo.jpg';
import '../App.css';

const MainFeatures = () => (
    <div style={{ marginTop: "80px", marginBottom: "60px" }}>
        <h2 className="text-center" style={{ color: '#31511e', fontWeight: 'bold', marginBottom: '40px', textTransform: 'uppercase' }}>
          <span style={{ color: 'black' }}>Main</span> Features
        </h2>
        <Row className="justify-content-center">
          {/* First Row */}
          <Col md={5} sm={6} className="feature-box d-flex align-items-center p-3" style={{ backgroundColor: '#E1E1E1', borderRadius: '10px', margin: '10px' }}>
            <img src={aiPowered} alt="AI-Powered Chatbot" className="feature-icon me-3" />
            <h5 style={{ fontWeight: 'bold', fontSize: '1.2rem', textTransform: 'uppercase', color: 'black' }}>AI-Powered Chatbot</h5>
          </Col>
          <Col md={5} sm={6} className="feature-box d-flex align-items-center p-3" style={{ backgroundColor: '#E1E1E1', borderRadius: '10px', margin: '10px' }}>
            <img src={stressRelief} alt="Stress Relief Exercises" className="feature-icon me-3" />
            <h5 style={{ fontWeight: 'bold', fontSize: '1.2rem', textTransform: 'uppercase', color: 'black' }}>Stress Relief Exercises</h5>
          </Col>
        </Row>
        <Row className="justify-content-center mt-4">
          {/* Second Row */}
          <Col md={5} sm={6} className="feature-box d-flex align-items-center p-3" style={{ backgroundColor: '#E1E1E1', borderRadius: '10px', margin: '10px' }}>
            <img src={careSelf} alt="Self-Care Recommendations" className="feature-icon me-3" />
            <h5 style={{ fontWeight: 'bold', fontSize: '1.2rem', textTransform: 'uppercase', color: 'black' }}>Self-Care Recommendations</h5>
          </Col>
          <Col md={5} sm={6} className="feature-box d-flex align-items-center p-3" style={{ backgroundColor: '#E1E1E1', borderRadius: '10px', margin: '10px' }}>
            <img src={library} alt="Resource Library" className="feature-icon me-3" />
            <h5 style={{ fontWeight: 'bold', fontSize: '1.2rem', textTransform: 'uppercase', color: 'black' }}>Resource Library</h5>
          </Col>
        </Row>
        <Row className="justify-content-center mt-4">
          {/* Third Row */}
          <Col md={5} sm={6} className="feature-box d-flex align-items-center p-3" style={{ backgroundColor: '#E1E1E1', borderRadius: '10px', margin: '10px' }}>
            <img src={anonymity} alt="Anonymity and Privacy" className="feature-icon me-3" />
            <h5 style={{ fontWeight: 'bold', fontSize: '1.2rem', textTransform: 'uppercase', color: 'black' }}>Anonymity and Privacy</h5>
          </Col>
          <Col md={5} sm={6} className="feature-box d-flex align-items-center p-3" style={{ backgroundColor: '#E1E1E1', borderRadius: '10px', margin: '10px' }}>
            <img src={userFriendly} alt="User-Friendly Interface" className="feature-icon me-3" />
            <h5 style={{ fontWeight: 'bold', fontSize: '1.2rem', textTransform: 'uppercase', color: 'black' }}>User-Friendly Interface</h5>
          </Col>
        </Row>
        <Row className="justify-content-center mt-4">
          {/* Fourth Row */}
          <Col md={5} sm={6} className="feature-box d-flex align-items-center p-3" style={{ backgroundColor: '#E1E1E1', borderRadius: '10px', margin: '10px' }}>
            <img src={crisisSupport} alt="Crisis Support" className="feature-icon me-3" />
            <h5 style={{ fontWeight: 'bold', fontSize: '1.2rem', textTransform: 'uppercase', color: 'black' }}>Crisis Support</h5>
          </Col>
          <Col md={5} sm={6} className="feature-box d-flex align-items-center p-3" style={{ backgroundColor: '#E1E1E1', borderRadius: '10px', margin: '10px' }}>
            <img src={audioVideo} alt="Audio and Video Resources" className="feature-icon me-3" />
            <h5 style={{ fontWeight: 'bold', fontSize: '1.2rem', textTransform: 'uppercase', color: 'black' }}>Audio and Video Resources</h5>
          </Col>
        </Row>
      </div>
);

export default MainFeatures;