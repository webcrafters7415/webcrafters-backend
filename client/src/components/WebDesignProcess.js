// agency-website/client/src/components/WebDesignProcess.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import './WebDesignProcess.css';

const WebDesignProcess = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      title: 'Web Strategy',
      description:
        'We use in-depth research and analysis as key pillars to build a step-by-step plan that expands your digital presence and drives online growth.',
      subPoints: [
        'Identify your target audiences',
        'Analyze user pain points & define your UVP',
      ],
    },
    {
      title: 'Planning & Information Architecture',
      description:
        'We utilize proven techniques to map your content, meet user intent, and create engaging user experiences that guide visitors through key conversion journeys.',
      subPoints: [
        'Wireframe a base-level user flow & sitemap',
        'Define content structure for optimal UX',
      ],
    },
    {
      title: 'Design & Prototyping',
      description:
        'Our team crafts visually stunning designs and interactive prototypes to bring your vision to life, ensuring a seamless user experience before development begins.',
      subPoints: [
        'Create high-fidelity designs',
        'Develop interactive prototypes for testing',
      ],
    },
    {
      title: 'Development & Testing',
      description:
        'We build your website with precision, using cutting-edge technologies, and rigorously test it to ensure functionality, performance, and security.',
      subPoints: [
        'Develop responsive, optimized code',
        'Conduct thorough testing for bugs & performance',
      ],
    },
    {
      title: 'Launch & Optimization',
      description:
        'After launching your website, we monitor its performance and optimize it continuously to ensure it meets your goals and delivers measurable results.',
      subPoints: [
        'Deploy the website with zero downtime',
        'Optimize based on analytics & user feedback',
      ],
    },
  ];

  const handleNext = () => {
    setCurrentStep((prev) => (prev + 1) % steps.length);
  };

  const handlePrev = () => {
    setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length);
  };

  // Function to handle smooth scrolling to the Contact section
  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
    exit: { opacity: 0, x: -50, transition: { duration: 0.5, ease: 'easeIn' } },
  };

  return (
    <section id="web-design-process" className="web-design-process-section">
      <div className="web-design-process-container">
        <h2>Our Web Design Process</h2>
        <div className="process-carousel">
          <motion.button
            className="nav-arrow left-arrow"
            onClick={handlePrev}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaArrowLeft />
          </motion.button>
          <motion.div
            key={currentStep}
            className="process-step"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <h3>{steps[currentStep].title}</h3>
            <p className="step-description">{steps[currentStep].description}</p>
            <ul className="sub-points">
              {steps[currentStep].subPoints.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </motion.div>
          <motion.button
            className="nav-arrow right-arrow"
            onClick={handleNext}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaArrowRight />
          </motion.button>
        </div>
        <motion.button
          className="cta-button"
          onClick={handleScrollToContact}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Scroll to Contact Section"
        >
          Got a Project? Speak With Our Experts
        </motion.button>
      </div>
    </section>
  );
};

export default WebDesignProcess;