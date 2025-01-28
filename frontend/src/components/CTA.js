import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import '../App.css';

const CTA = () => {
  const navigate = useNavigate();
  const auth = getAuth();

  const handleStartChatting = () => {
    if (!auth.currentUser) {
      alert("Please log in to start chatting.");
      navigate('/login');
    } else {
      navigate('/chatbot');
    }
  };

  return (
    <Container className="d-flex justify-content-center mt-5 mb-5">
      <Card className="cta-card text-center" style={{ background: "#E1E1E1", borderRadius: "20px" }}>
        <Card.Body>
          <p className="cta-subtitle">START YOUR MENTAL HEALTH JOURNEY TODAY!</p>
          <h4 className="cta-title">
            <strong>Personalized Support and Stress Relief at your Fingertips</strong>
          </h4>
          <Button className="cta-btn mt-5 mb-5" style={{ borderRadius: "50px", background: "black" }} onClick={handleStartChatting}>START CHATTING</Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default CTA;
