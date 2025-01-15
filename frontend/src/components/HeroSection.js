import React from 'react';
import { Container, Button } from 'react-bootstrap';

const HeroSection = () => (
  <div className="hero bg-light text-center py-5">
    <Container>
      <h1 style={{ color: '#31511E' }}>YOUR AI MENTAL HEALTH COMPANION</h1>
      <p>MindBuddy is here to provide personalized support and self-care guidance to help you manage stress and maintain your mental well-being.</p>
      <Button variant="primary" href="/chat">Start Chatting</Button>
      
    </Container>
  </div>
);

export default HeroSection;
