import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import secure from '../assets/secure.jpg';

const ConfidentialSecure = () => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 3.5 }}
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
              src={secure}
              alt="Confidential and Secure"
              style={{ width: '300px', height: 'auto', borderRadius: '10px', marginBottom: "20px" }}
            />
            <div className="ms-md-4">
              <h5 style={{ color: '#31511e', fontWeight: 'bold', fontSize: '30px', textTransform: 'uppercase' }}>Confidential and Secure</h5>
              <p className="text-secondary">Emphasizes user privacy and data security, keeping all personal information confidential. With strong encryption and secure data management, users can rely on their data being protected from unauthorized access.</p>
            </div>
          </div>
        </motion.div>
      </Col>
    </Row>
  </motion.div>
);

export default ConfidentialSecure;