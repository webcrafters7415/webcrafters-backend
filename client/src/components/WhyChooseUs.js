// agency-website/client/src/components/WhyChooseUs.js
import React from 'react';
import { motion } from 'framer-motion';
import {
  FaRocket, // For Innovation-Driven Solutions
  FaUsers, // For Client-Centric Approach
  FaChartBar, // For Measurable Results
  FaShieldAlt, // For Security and Reliability
  FaGlobe, // For Global Reach with Local Expertise
  FaClock, // For Timely Delivery
} from 'react-icons/fa';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const reasons = [
    {
      title: 'Innovation-Driven Solutions',
      description:
        'We leverage cutting-edge technologies like AI, WebGL, and headless CMS to deliver innovative solutions that keep your business ahead of the curve.',
      icon: <FaRocket />,
    },
    {
      title: 'Client-Centric Approach',
      description:
        'Your success is our priority. We work closely with you to understand your goals and deliver tailored solutions that meet your unique needs.',
      icon: <FaUsers />,
    },
    {
      title: 'Measurable Results',
      description:
        'Our data-driven strategies, like CRO and A/B testing, ensure measurable outcomes—such as up to 40% higher conversions and increased engagement.',
      icon: <FaChartBar />,
    },
    {
      title: 'Security and Reliability',
      description:
        'With proactive cybersecurity, penetration testing, and a 99.9% uptime guarantee, we ensure your website is secure and always available.',
      icon: <FaShieldAlt />,
    },
    {
      title: 'Global Reach with Local Expertise',
      description:
        'Serving clients worldwide since 2015, we combine global insights with local expertise to deliver solutions that resonate with your audience.',
      icon: <FaGlobe />,
    },
    {
      title: 'Timely Delivery',
      description:
        'We value your time. Our streamlined processes and dedicated team ensure your project is delivered on schedule without compromising quality.',
      icon: <FaClock />,
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
    hover: {
      scale: 1.05,
      boxShadow: '0 15px 30px rgba(0, 0, 0, 0.2)',
      borderColor: '#f1c40f',
      transition: { duration: 0.3, ease: 'easeInOut' },
    },
  };

  const iconVariants = {
    hover: { rotate: 10, scale: 1.1, transition: { duration: 0.3 } },
  };

  return (
    <section id="why-choose-us" className="why-choose-us-section">
      <div className="why-choose-us-container">
        <h2>Why Choose Us</h2>
        <div className="why-choose-us-grid">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="reason-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              whileHover="hover"
            >
              <motion.div className="reason-icon" variants={iconVariants}>
                {reason.icon}
              </motion.div>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;