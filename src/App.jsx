import React, { useState, useEffect } from 'react';
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
import Loader from './components/Loader';
import Locations from './components/Locations';
import useDynamicTitle from './hooks/useDynamicTitle';

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import DealsPage from './pages/DealsPage';

function App() {
  useDynamicTitle();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Loader isLoading={isLoading} />
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
                  <DealsPage isHome={true} />
                  <Locations />
                </div>
              </div>
            </>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/dine-in" element={<DineInPage />} />
          <Route path="/deals" element={<DealsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          {/* Catch-all route for 404s - Redirect to Home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
