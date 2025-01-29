import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
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
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 3 }}
    style={{ marginBottom: "100px", padding: "20px" }}
  >
    <h2 className="text-center" style={{ color: '#31511e', fontWeight: 'bold', marginBottom: '40px', textTransform: 'uppercase' }}>
      <span style={{ color: 'black' }}>Main</span> Features
    </h2>
    <Row className="justify-content-center">
      {[
        { img: aiPowered, title: "AI-Powered Chatbot" },
        { img: stressRelief, title: "Stress Relief Exercises" },
        { img: careSelf, title: "Self-Care Recommendations" },
        { img: library, title: "Resource Library" },
        { img: anonymity, title: "Anonymity and Privacy" },
        { img: userFriendly, title: "User-Friendly Interface" },
        { img: crisisSupport, title: "Crisis Support" },
        { img: audioVideo, title: "Audio and Video Resources" },
      ].map((feature, index) => (
        <Col key={index} md={6} sm={6} className="mb-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ 
              padding: "20px", 
              borderRadius: "10px", 
              backgroundColor: "#f8f9fa",
              display: "flex",
              alignItems: "center",
              gap: "15px"
            }}
          >
            <img 
              src={feature.img} 
              alt={feature.title} 
              style={{ 
                width: '50px', 
                height: '50px', 
                borderRadius: '50%', 
                objectFit: "cover" 
              }} 
            />
            <h6 style={{ fontWeight: 'bold', fontSize: '1rem', textTransform: 'uppercase', color: 'black', margin: 0 }}>
              {feature.title}
            </h6>
          </motion.div>
        </Col>
      ))}
    </Row>
  </motion.div>
);

export default MainFeatures;