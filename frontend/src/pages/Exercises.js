import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ExercisesCard from '../components/ExercisesCard';

const ExercisesPage = () => {
  const exercises = [
    { title: 'Breathing Exercises', description: 'Calm your mind with breathing techniques.' },
    { title: 'Yoga Poses', description: 'Simple poses to improve flexibility and reduce stress.' },
    { title: 'Meditation', description: 'Guided meditation for mindfulness.' },
  ];

  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">Wellness Exercises</h2>
      <Row>
        {exercises.map((exercise, index) => (
          <Col md={4} key={index}>
            <ExercisesCard title={exercise.title} description={exercise.description} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ExercisesPage;
