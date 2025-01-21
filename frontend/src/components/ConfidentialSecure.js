import React from 'react';
import { Row, Col } from 'react-bootstrap';
import secure from '../assets/secure.jpg';

const ConfidentialSecure = () => (
    <Row style={{ marginBottom: "60px", marginLeft: "10%", marginRight: "10%" }}>
        <Col>
            <div className="box d-flex align-items-center">
              <div className="me-4">
                      <img
                        src={secure}
                        alt="Confidential and Secure"
                        style={{
                          width: '300px',
                          height: 'auto',
                          objectFit: 'cover',
                          borderRadius: '30px'
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
                    Confidential and secure
                </h5>
                      <p className="text-secondary">
                      Emphasizes user privacy and data security, keeping all personal information confidential. With strong encryption and secure data management, users can rely on their data being protected from unauthorized access.
                      </p>
                    </div>
            </div>
        </Col>
      </Row>
);

export default ConfidentialSecure;