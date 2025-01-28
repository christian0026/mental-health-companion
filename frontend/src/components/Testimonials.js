import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../App.css";

const testimonials = [
  { name: "Yna", message: "Lorem Ipsum has been the industry's standard dummy text.", rating: 5 },
  { name: "Aina", message: "Lorem Ipsum has been the industry's standard dummy text.", rating: 4 },
  { name: "Cza", message: "Lorem Ipsum has been the industry's standard dummy text.", rating: 5 }
];

const Testimonials = () => (
  <Container className="py-5">
    <h4 className="text-center mb-4" style={{ color: "#31511e", textTransform: "uppercase"}}>Testimonials</h4>
    <h1 className="text-center mb-4" style={{ fontWeight: "bold", textTransform: "uppercase"}}>read what others have to say</h1>
    <Row>
      {testimonials.map((testimonial, index) => (
        <Col md={4} key={index}>
          <Card className="testimonial-card" style={{ background: "#E1E1E1"}}>
            <Card.Body>
              <div className="testimonial-header">
                <div className="testimonial-avatar"></div>
                <div>
                  <div className="testimonial-stars">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        fill={i < testimonial.rating ? "#FFD700" : "#E0E0E0"}
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                  <p className="testimonial-name">{testimonial.name}</p>
                </div>
              </div>
              <Card.Text className="testimonial-message">
                "{testimonial.message}"
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
);

export default Testimonials;
