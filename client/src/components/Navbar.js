import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Navbar.css';

const Navbar = ({ scrollToContact }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode');
  };

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="navbar-logo">
        <h1>WebCrafters</h1>
      </div>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><button onClick={scrollToContact} className="contact-btn">Contact</button></li>
      </ul>
      <div className="dark-mode-toggle">
        <button onClick={toggleDarkMode} className="dark-mode-btn">
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
