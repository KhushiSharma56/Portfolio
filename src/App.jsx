import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { motion } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import ThemeToggle from './components/ThemeToggle';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './index.css';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };
  useEffect(() => {
  document.body.className = theme === 'dark' ? 'dark' : '';
  }, [theme]);
  return (
    <Router>
      <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'} font-poppins transition-colors duration-300`}>
        <Header theme={theme} />
        <ThemeToggle toggleTheme={toggleTheme} theme={theme} />
        <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} /> {/* Redirect invalid routes to Home */}
          </Routes>
        </motion.main>
        <BackToTop />
        <Footer />
      </div>
    </Router>
  );
}

export default App;