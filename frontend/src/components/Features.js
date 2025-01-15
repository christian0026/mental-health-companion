import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Features = () => (
  <Container className="py-5">
    <h2 className="text-center mb-4">Main Features</h2>
    <Row>
      <Col md={4}>
        <Card>
          <Card.Body>
            <Card.Title>AI-Powered Chatbot</Card.Title>
            <Card.Text>Empathetic AI self-care guidance.</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4}>
        <Card>
          <Card.Body>
            <Card.Title>Stress Relief Exercises</Card.Title>
            <Card.Text>Access to exercises for managing stress.</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4}>
        <Card>
          <Card.Body>
            <Card.Title>Resource Library</Card.Title>
            <Card.Text>Audio and video resources for well-being.</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default Features;
