import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import pSupport from '../assets/img_left.jpg';
import rtFeedback from '../assets/rt_feedback.jpg';

const BenefitsSection = () => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 2.5 }}
    style={{ marginBottom: "100px", padding: "20px" }}
  >
    <Row className="justify-content-center">
      <Col md={10}>
        <motion.div
          whileHover={{ scale: 1.02 }}
          style={{ padding: "20px", borderRadius: "10px", backgroundColor: "#f8f9fa" }}
        >
          <div className="d-flex flex-column flex-md-row align-items-center">
            <img
              src={pSupport}
              alt="Personalized Support"
              style={{ width: '300px', height: 'auto', borderRadius: '10px', marginBottom: "20px" }}
            />
            <div className="ms-md-4">
              <h5 style={{ color: '#31511e', fontWeight: 'bold', fontSize: '30px', textTransform: 'uppercase' }}>Personalized Support</h5>
              <p className="text-secondary">Employs sophisticated AI to deliver customized mental health assistance. By examining user data and preferences, it adapts interventions and suggestions to fit each person's specific requirements, providing relevant and effective support that boosts their mental well-being.</p>
              <a href='https://www.sciencedirect.com/science/article/abs/pii/S245190222100046X?via%3Dihub' target='_blank' rel="noopener noreferrer">
                <Button className="bg_login fw-bold border-0">Read More</Button>
              </a>
            </div>
          </div>
        </motion.div>
      </Col>
      <Col md={10} className="mt-5">
        <motion.div
          whileHover={{ scale: 1.02 }}
          style={{ padding: "20px", borderRadius: "10px", backgroundColor: "#f8f9fa" }}
        >
          <div className="d-flex flex-column flex-md-row align-items-center">
            <div className="me-md-4">
              <h5 style={{ color: '#31511e', fontWeight: 'bold', fontSize: '30px', textTransform: 'uppercase' }}>Real-Time Feedback</h5>
              <p className="text-secondary">Delivers real-time mental health insights, enabling swift support and intervention. It helps users identify and manage their emotions to avoid escalating negativity. The rapid feedback mechanism provides timely guidance and coping strategies crucial during stressful times.</p>
              <Button className="bg_login fw-bold border-0">Read More</Button>
            </div>
            <img
              src={rtFeedback}
              alt="Real-Time Feedback"
              style={{ width: '320px', height: 'auto', borderRadius: '10px', marginBottom: "20px" }}
            />
          </div>
        </motion.div>
      </Col>
    </Row>
  </motion.div>
);

export default BenefitsSection;