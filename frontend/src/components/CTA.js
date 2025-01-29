import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';
import '../App.css';

const CTA = () => {
  const navigate = useNavigate();

  const handleStartChatting = () => {
    navigate('/chatbot');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 4 }}
      style={{ marginBottom: "100px", padding: "20px" }}
    >
      <Container className="d-flex justify-content-center">
        <motion.div
          whileHover={{ scale: 1.02 }}
          style={{ width: "100%", maxWidth: "800px" }}
        >
          <Card className="text-center" style={{ background: "#E1E1E1", borderRadius: "20px" }}>
            <Card.Body>
              <p className="cta-subtitle">START YOUR MENTAL HEALTH JOURNEY TODAY!</p>
              <h4 className="cta-title">
                <strong>Personalized Support and Stress Relief at your Fingertips</strong>
              </h4>
              <Button className="cta-btn mt-5 mb-5" style={{ borderRadius: "50px", background: "black" }} onClick={handleStartChatting}>START CHATTING</Button>
            </Card.Body>
          </Card>
        </motion.div>
      </Container>
    </motion.div>
  );
};

export default CTA;