import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppNavbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Exercises from './pages/Exercises';
import About from './pages/About';
import Login from './pages/Login';
import './App.css';

const App = () => (
  <Router>
    <AppNavbar />
    <Routes>
      <Route path="/" element={
        <>
          <HeroSection />
        </>
      } />
      <Route path="/exercises" element={<Exercises />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  </Router>
);

export default App;
