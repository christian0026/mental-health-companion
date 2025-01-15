import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Testimonials = () => (
  <Container className="py-5">
    <h2 className="text-center mb-4">Testimonials</h2>
    <Row>
      <Col md={4}>
        <Card>
          <Card.Body>
            <Card.Text>
              "Lorem Ipsum has been the industry's standard dummy text."
            </Card.Text>
            <Card.Footer>- Yna</Card.Footer>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4}>
        <Card>
          <Card.Body>
            <Card.Text>
              "Lorem Ipsum has been the industry's standard dummy text."
            </Card.Text>
            <Card.Footer>- Aina</Card.Footer>
          </Card.Body>
        </Card>
      </Col>
      <Col md={4}>
        <Card>
          <Card.Body>
            <Card.Text>
              "Lorem Ipsum has been the industry's standard dummy text."
            </Card.Text>
            <Card.Footer>- Cza</Card.Footer>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default Testimonials;
