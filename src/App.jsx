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
import ContactPage from './pages/ContactPage';
import ScrollToTop from './components/ScrollToTop';
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
              <Marquee />
              <Menu />
              <Reviews />
              <Deals />
            </>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
