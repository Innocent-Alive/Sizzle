import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Marquee from './components/Marquee';
import Menu from './components/Menu';
import Reviews from './components/Reviews';
import Deals from './components/Deals';
import Footer from './components/Footer';
import MenuPage from './pages/MenuPage';
import DineInPage from './pages/DineInPage';
import ContactPage from './pages/ContactPage';
import TermsAndConditions from './pages/TermsAndConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ScrollToTop from './components/ScrollToTop';
import AnimatedLines from './components/AnimatedLines';
import useDynamicTitle from './hooks/useDynamicTitle';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  useDynamicTitle();
  
  return (
    <Router>
      <ScrollToTop />
      <div className="App bg-background min-h-screen text-secondary">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <div className="relative">
                <AnimatedLines />
                <div className="relative z-10">
                  <Marquee />
                  <Menu />
                  <Reviews />
                  <Deals />
                </div>
              </div>
            </>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/dine-in" element={<DineInPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
