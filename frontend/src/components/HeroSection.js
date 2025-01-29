import React from 'react';
import { Container, Col, Row, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../App.css';
import head_right from '../assets/head_right.png';

const HeroSection = () => {
  const navigate = useNavigate();

  const handleChatNow = () => {
    navigate('/chatbot');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      style={{ marginTop: "60px", marginBottom: "100px", padding: "20px" }}
    >
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <div className='head_left'>
                <span className='h_subTitle'>ARTIFICIAL INTELLIGENCE</span>
                <div className='w-100 mt-2 h_title'>
                  <h1>MENTAL HEALTH COMPANION</h1>
                </div>
                <p className='text-second'>MindBuddy is here to provide personalized support and self-care guidance to help you manage stress and maintain your mental well-being.</p>
                <div className='d-flex justify-content-start align-items-start w-100 mt-4'>
                  <Button className='bg_login fw-bold border-0' onClick={handleChatNow}>Chat Now</Button>
                </div>
              </div>
            </motion.div>
          </Col>
          <Col md={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <div className='head_right'>
                <div className='imageContainer d-flex justify-content-end align-items-center'>
                  <img src={head_right} alt="headerr-robot" className='head_rightImg' style={{ maxWidth: "100%", height: "auto" }} />
                </div>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default HeroSection;