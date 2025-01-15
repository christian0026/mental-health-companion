import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppNavbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Exercises from './pages/Exercises';
import About from './pages/About';
import Login from './pages/Login';

const App = () => (
  <Router>
    <AppNavbar />
    <Routes>
      <Route path="/" element={
        <>
          <HeroSection />
          <Features />
          <Testimonials />
        </>
      } />
      <Route path="/exercises" element={<Exercises />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
    </Routes>
    <Footer />
  </Router>
);

export default App;
