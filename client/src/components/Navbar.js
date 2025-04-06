import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Navbar.css';
import { Menu, X } from 'lucide-react';

const Navbar = ({ scrollToContact }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode');
  };

  const handleLinkClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false); // close menu after click
  };

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="navbar-container">
        <div className="logo">WebCrafters</div>

        <div className="menu-icon" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </div>

        <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <li><button onClick={() => handleLinkClick('home')} className="nav-button">Home</button></li>
          <li><button onClick={() => handleLinkClick('about')} className="nav-button">About Us</button></li>
          <li><button onClick={() => handleLinkClick('services')} className="nav-button">Services</button></li>
          <li><button onClick={() => handleLinkClick('projects')} className="nav-button">Projects</button></li>
          <li><button onClick={() => scrollToContact()} className="nav-button contact-button">Contact</button></li>
          <li><button onClick={toggleDarkMode} className="dark-mode-button">{isDarkMode ? 'Light Mode' : 'Dark Mode'}</button></li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
