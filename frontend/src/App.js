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
import CTA from './components/CTA';
import Footer from './components/Footer';
import ChatbotPage from './pages/ChatbotPage';
import Loader from './pages/loader';
import Login from './components/Login';
import Registration from './components/Registration';
import Verify from './components/Verify';
import './App.css';

const App = () => (
  <Router>
    <Routes>
      {/* Main App Route */}
      <Route
        path="/"
        element={
          <>
            <AppNavbar />
            <HeroSection />
            <LogoSection />
            <BenefitsSection />
            <Features />
            <MainFeatures />
            <ConfidentialSecure />
            <Testimonials />
            <CTA />
            <Footer />
          </>
        }
      />
      {/* Chatbot Route */}
      <Route path="/chatbot" element={<ChatbotPage />} />

      {/* Loader Route */}
      <Route path="/loader" element={ <Loader /> } />

      {/* Login Route */}
      <Route path="/login" element= { <Login /> } />

      {/* Registration Route */}
      <Route path="/registration" element={ <Registration />} />

      {/* Verify */}
      <Route path="/verify" element={ <Verify /> } />
    </Routes>
  </Router>
);

export default App;
