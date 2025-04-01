// agency-website/client/src/components/Hero.js
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import collaborationScene from './collaboration-scene.png'; // Import the image directly from the components folder
import './Hero.css';

const Hero = () => {
  // State to track mouse position
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Update mouse position on move
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 2, // Normalize to -1 to 1
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Combined variants for parallax and hover effects
  const combinedVariants = (intensity) => ({
    initial: { x: 0, y: 0, scale: 1, opacity: 1 },
    animate: {
      x: mousePosition.x * intensity,
      y: mousePosition.y * intensity,
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  });

  return (
    <motion.section
      id="home"
      className="hero-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="hero-content">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Crafting Digital Success Worldwide
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          Your Vision. <span className="highlight">Our Innovation.</span>
        </motion.p>
      </div>
      <div className="hero-illustration">
        <motion.div
          className="collaboration-scene"
          variants={combinedVariants(20)}
          initial="initial"
          animate="animate"
          whileHover="hover"
        >
          <img src={collaborationScene} alt="Collaboration Scene" className="collaboration-image" />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
