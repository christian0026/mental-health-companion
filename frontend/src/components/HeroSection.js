import React from 'react';
import { Container, Col, Row, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import head_right from '../assets/head_right.png';
import { getAuth } from 'firebase/auth';
import { auth } from "../firebaseConfig";  // Update path
console.log("Firebase Auth:", auth);

const HeroSection = () => {
  const navigate = useNavigate();
  const auth = getAuth();

  const handleChatNow = () => {
    if (!auth.currentUser) {
      alert("Please log in to access the chatbot.");
      navigate('/login');
    } else {
      navigate('/chatbot');
    }
  };

  return (
    <div className="align-items-center mb-10" style={{ marginTop: "60px" }}>
      <Container>
        <Row>
          <Col md={6}>
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
          </Col>
          <Col md={6}>
            <div className='head_right'>
              <div className='imageContainer d-flex justify-content-ed align-items-center'>
                <img src={head_right} alt="headerr-robot" className='head_rightImg'></img>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroSection;
