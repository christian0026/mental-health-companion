import React from 'react';
import { Container, Col, Row, Button } from 'react-bootstrap';
import '../App.css';
import head_right from '../assets/head_right.png';
import acm from '../assets/acm.png';
import apa from '../assets/apa.png';
import scholar_space from '../assets/scholar_space.png';
import mdpi from '../assets/mdpi.png';
import wrcouncil from '../assets/wrcouncil.png';
import pSupport from '../assets/img_left.jpg';
import rtFeedback from '../assets/rt_feedback.jpg';
import empatheticAI from '../assets/empatheticAI.jpg';
import selfCare from '../assets/selfCare.jpg';
import privacyFocused from '../assets/privacyFocused.jpg';

const HeroSection = () => (
  <div className="align-items-center" style={{ marginTop: "60px" }}>
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
              <Button className='bg_login fw-bold border-0'>Chat Now</Button>
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

      {/* Logos SECTION START */}
      <div className="logos-row mt-5" style={{ marginBottom: "60px" }}>
        <a href="https://dl.acm.org/doi/10.1145/3564752" target="_blank" rel="noopener noreferrer">
          <img src={acm} alt="ACM Logo" className="logo-img" style={{ width: "80px", height: "100%"}} />
        </a>

        <a href="https://psycnet.apa.org/record/2016-22282-000" target="_blank" rel="noopener noreferrer">
          <img src={apa} alt="APA Logo" className="logo-img" />
        </a>

        <a href="https://scholarspace.manoa.hawaii.edu/server/api/core/bitstreams/9498e31c-22c8-42ed-b0c3-0eca9dca85e9/content" target="_blank" rel="noopener noreferrer">
          <img src={scholar_space} alt="Scholar Space Logo" className="logo-img" style={{ width: "80px", height: "100%"}} />
        </a>

        <a href="https://www.mdpi.com/2227-9709/10/4/82" target="_blank" rel="noopener noreferrer">
          <img src={mdpi} alt="MDPI Logo" className="logo-img" />
        </a>

        <a href="https://journalpublication.wrcouncil.org/index.php/JHAM/article/view/10" target="_blank" rel="noopener noreferrer">
          <img src={wrcouncil} alt="MDPI Logo" className="logo-img" />
        </a>
      </div>
      {/* LOGOS SECTION END */}

      {/* BENEFITS SECTION START */}
      <Row style={{ marginBottom: "60px", marginLeft: "10%", marginRight: "10%" }}>
            <Col md={12}>
              <div className="box d-flex align-items-center">
                <div className="me-4">
                  <img
                    src={pSupport}
                    alt="Personalized Support"
                    style={{
                      width: '300px',
                      height: 'auto',
                      objectFit: 'cover',
                    }}
                  />
                </div>
                <div>
                  <h5
                    style={{
                      color: '#31511e',
                      fontWeight: 'bold',
                      fontSize: '30px',
                      textTransform: 'uppercase',
                    }}
                  >
                    Personalized Support
                  </h5>
                  <p className="text-secondary">
                    Employs sophisticated AI to deliver customized mental health assistance. By examining user data and preferences, it adapts interventions and suggestions to fit each person's specific requirements, providing relevant and effective support that boosts their mental well-being.
                  </p>
                  <a href='https://www.sciencedirect.com/science/article/abs/pii/S245190222100046X?via%3Dihub' target='_blank' rel="noopener noreferrer"><Button className="bg_login fw-bold border-0">Read More</Button></a>
                </div>
              </div>
            </Col>

            <Col md={12} style={{ marginTop: "40px" }}>
              <div className="box d-flex align-items-center justify-content-between">
                <div className="me-4">
                  <h5
                    style={{
                      color: '#31511e',
                      fontWeight: 'bold',
                      fontSize: '30px',
                      textTransform: 'uppercase',
                    }}
                  >
                    Real-Time Feedback
                  </h5>
                  <p className="text-secondary">
                    Delivers real-time mental health insights, enabling swift support and intervention. It helps users identify and manage their emotions to avoid escalating negativity. The rapid feedback mechanism provides timely guidance and coping strategies crucial during stressful times.
                  </p>
                  <Button className="bg_login fw-bold border-0">Read More</Button>
                </div>
                <div>
                  <img
                    src={rtFeedback}
                    alt="Real-Time Feedback"
                    style={{
                      width: '320px',
                      height: 'auto',
                      objectFit: 'cover',
                      borderRadius: '30px'
                    }}
                  />
                </div>
              </div>
            </Col>
      </Row>
      {/* BENEFITS SECTION END */}

      {/* FEATURES SECTION START */}
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
      {/* FEATURES SECTION END */}
      

      
    </Container>
  </div>
);

export default HeroSection;
