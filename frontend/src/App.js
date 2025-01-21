import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppNavbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import LogoSection from './components/LogoSection';
import BenefitsSection from './components/BenefitsSection';
import Features from './components/Features';
import MainFeatures from './components/MainFeatures';
import ConfidentialSecure from './components/ConfidentialSecure';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import './App.css';

const App = () => (
  <Router>
    <AppNavbar />
    <Routes>
      <Route path="/" element={
        <>
          <HeroSection />
          <LogoSection />
          <BenefitsSection />
          <Features />
          <MainFeatures />
          <ConfidentialSecure />
          <Testimonials />
          <Footer />
        </>
      } />
    </Routes>
  </Router>
);

export default App;
