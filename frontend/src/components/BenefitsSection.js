import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import pSupport from '../assets/img_left.jpg';
import rtFeedback from '../assets/rt_feedback.jpg';

const BenefitsSection = () => (
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
);

export default BenefitsSection;
