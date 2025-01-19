import React from 'react';
import { Container, Col, Row, Button } from 'react-bootstrap';
import '../App.css';
import head_right from '../assets/head_right.png';
import acm from '../assets/acm.png';
import apa from '../assets/apa.png';
import scholar_space from '../assets/scholar_space.png';

const HeroSection = () => (
  <div className="align-items-center">
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

      <Row>
        <div className='d-flex'>
          
        </div>
        <Col md='{4}'>
          <div className='box'>
            <div className='boxContainer'>
              <div className=''>
                <img src={acm} alt='acm' className='img-fluid'></img>
              </div>
            </div>
          </div>
        </Col>
        <Col md='{4}'></Col>
        <Col md='{4}'></Col>
      </Row>
    </Container>
  </div>
);

export default HeroSection;
