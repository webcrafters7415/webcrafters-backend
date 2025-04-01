// agency-website/client/src/components/AboutUs.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import photo1 from './photo_1.svg'; // Import the SVG file from the components folder
import './AboutUs.css';

const AboutUs = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const detailVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: { height: 'auto', opacity: 1, transition: { duration: 0.5 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.section
      id="about"
      className="about-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={sectionVariants}
    >
      <div className="about-container">
        <div className="about-content">
          <h2>About WebCrafters</h2>
          <p className="brief-description">
            WebCrafters is a dynamic digital agency dedicated to transforming your ideas into stunning online experiences. We specialize in web development, design, and digital marketing, helping businesses worldwide achieve their digital goals.
          </p>
          <motion.div
            className="detailed-description"
            initial="hidden"
            animate={isExpanded ? 'visible' : 'hidden'}
            variants={detailVariants}
          >
            <p>
              Founded in 2015, WebCrafters has grown into a global leader in digital innovation, serving clients across diverse industries. Our team of skilled developers, designers, and marketers work collaboratively to deliver tailor-made solutions that drive growth and engagement. From crafting responsive websites to implementing cutting-edge SEO strategies, we are committed to excellence in every project. At WebCrafters, we believe in the power of creativity and technology to shape the future of digital success. Whether you're a startup looking to establish your online presence or an established brand aiming to scale, we’re here to partner with you on your journey.
            </p>
          </motion.div>
          <motion.button
            className="read-more-button"
            onClick={() => setIsExpanded(!isExpanded)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isExpanded ? 'Read Less' : 'Read More'}
          </motion.button>
        </div>
        <motion.div
          className="about-image"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={imageVariants}
        >
          <img src={photo1} alt="WebCrafters Team" />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutUs;