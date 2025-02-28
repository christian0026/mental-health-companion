import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import AppNavbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import LogoSection from './components/LogoSection';
import BenefitsSection from './components/BenefitsSection';
import Features from './components/Features';
import MainFeatures from './components/MainFeatures';
import ConfidentialSecure from './components/ConfidentialSecure';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ChatbotPage from './pages/ChatbotPage';
import LoaderWrapper from './pages/LoaderWrapper';
import Verify from './components/Verify';
import Exercises from './pages/Exercises';
import './App.css';

const App = () => (
  <BrowserRouter basename="/mental-health-companion"> {/* <-- Add this line */}
    <Routes>
      {/* Main App Route */}
      <Route
        path="/"
        element={
          <LoaderWrapper>
            <AppNavbar />
            <HeroSection />
            <LogoSection />
            <BenefitsSection />
            <Features />
            <MainFeatures />
            <ConfidentialSecure />
            <CTA />
            <Footer />
          </LoaderWrapper>
        }
      />
      {/* Chatbot Route */}
      <Route path="/chatbot" element={<ChatbotPage />} />

      {/* Verify */}
      <Route path="/verify" element={<Verify />} />

      {/* Exercises */}
      <Route path="/exercises" element={<Exercises />} />
    </Routes>
  </BrowserRouter>
);

export default App;
