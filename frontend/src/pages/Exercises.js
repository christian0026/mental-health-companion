import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';
import { FaBars } from 'react-icons/fa';
import { motion } from "framer-motion";

const ExercisesPage = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const openModal = (url) => {
    const embedUrl = url.includes("watch?v=") 
      ? url.replace("watch?v=", "embed/")
      : url;
    setVideoUrl(embedUrl);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setVideoUrl('');
  };

  const exercises = [
    { 
      title: 'Mindful Breathing', 
      description: 'Practice deep breathing to reduce stress and improve focus.', 
      time: '10 minutes',
      gradient: 'linear-gradient(135deg, #E3C997, #A68B5B)',
      video: 'https://www.youtube.com/embed/LiUnFJ8P4gM' 
    },
    { 
      title: 'Gratitude Journal', 
      description: 'Reflect on positive experiences to boost happiness.', 
      time: '7 minutes',
      gradient: 'linear-gradient(135deg, #1E1E1E, #4B4B4B)',
      video: 'https://www.youtube.com/embed/iz0yM5YoIow'
    },
    { 
      title: 'Goal Visualization', 
      description: 'Visualize your goals to increase motivation and clarity.', 
      time: '6 minutes',
      gradient: 'linear-gradient(135deg, #2E3192, #1BFFFF)',
      video: 'https://www.youtube.com/embed/8ZhoeSaPF-k' 
    },
    { 
      title: 'Self Compassion', 
      description: 'Learn to be kinder to yourself in challenging times.', 
      time: '5 minutes',
      gradient: 'linear-gradient(135deg, #9B5DE5, #7D3EB2)',
      video: 'https://www.youtube.com/embed/41wMbLb9M2Q' 
    },
    { 
      title: 'Positive Affirmations', 
      description: 'Boost your self-esteem with daily affirmations.', 
      time: '15 minutes',
      gradient: 'linear-gradient(135deg, #FF6B6B, #FF8E8E)',
      video: 'https://www.youtube.com/embed/yo1pJ_D-H3M' 
    },
    { 
      title: 'Stress Management', 
      description: 'Techniques to manage and reduce daily stress.', 
      time: '4 minutes',
      gradient: 'linear-gradient(135deg, #F57C00, #FF9800)',
      video: 'https://www.youtube.com/embed/grfXR6FAsI8' 
    }
  ];

  return (
    <div className="container-fluid vh-100 d-flex flex-column">
      {/* Top Bar - Sticky with Shadow */}
      <div 
        className="d-flex align-items-center bg-white border-bottom p-3"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)"
        }}
      >
        <button className="btn btn-secondary btn-sm me-2" onClick={toggleSidebar}>
          <FaBars />
        </button>
        <a href="/" style={{ textDecoration: 'none' }}>
          <h5 className="m-0" style={{ fontWeight: 'bold', color: 'black' }}>
            MINDBUDDY | <span style={{ fontWeight: "bold", color: "#31511e" }}>EXERCISES</span>
          </h5>
        </a>
      </div>

      {/* Sidebar and Content */}
      <div className="d-flex flex-grow-1 position-relative">
        {/* Sidebar */}
        <motion.div 
          className="bg-light border-end p-3 position-absolute top-0 h-100"
          style={{
            width: '240px',
            transform: showSidebar ? 'translateX(0)' : 'translateX(-250px)',
            transition: 'transform 0.3s ease',
            zIndex: 10
          }}
        >
          <div className="d-flex flex-column">
            <Link to="/" className="btn btn-light mb-2">🏠 Home</Link>
            <Link to="/chatbot" className="btn btn-light mb-2">💬 Chat Now</Link>
            <Link to="/exercises" className="btn btn-light">🧘 Exercises</Link>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="flex-grow-1 d-flex flex-column">
          <Container className="py-5">
            <motion.div 
              className="text-center mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="fw-bold">Wellness Exercises</h2>
              <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '16px', color: '#555' }}>
                Boost your mental health with our Wellness Exercises...
              </p>
            </motion.div>

            <h4 className="fw-bold mb-3">Personal Growth</h4>
            <Row>
              {exercises.map((exercise, index) => (
                <Col md={6} lg={4} key={index} className="mb-4">
                  <motion.div 
                    className="p-4 text-white rounded"
                    style={{
                      background: exercise.gradient,
                      borderRadius: '12px',
                      minHeight: '150px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div>
                      <h5 className="fw-bold">{exercise.title}</h5>
                      <p className="small">{exercise.description}</p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="small">{exercise.time}</span>
                      <Button 
                        variant="light"
                        className="text-dark fw-bold"
                        onClick={() => openModal(exercise.video)}
                      >
                        Try Now
                      </Button>
                    </div>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      </div>

      {/* Video Modal */}
      <Modal show={showModal} onHide={closeModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Exercise Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="ratio ratio-16x9">
            <iframe src={videoUrl} title="Exercise Video" frameBorder="0" allowFullScreen></iframe>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ExercisesPage;
