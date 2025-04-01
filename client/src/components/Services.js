// agency-website/client/src/components/Services.js
import React from 'react';
import { motion } from 'framer-motion';
import {
  FaBrain, // For AI-Driven Website Personalization
  FaTachometerAlt, // For Performance Optimization
  FaUniversalAccess, // For Accessibility-First Development
  FaCode, // For Custom API Development
  FaShieldAlt, // For Proactive Cybersecurity
  FaChartLine, // For Conversion Rate Optimization
  FaServer, // For Headless CMS Implementation
  FaLeaf, // For Sustainable Web Design
  FaHeadset, // For White-Glove Maintenance and Support
  FaCube, // For Immersive Storytelling with WebGL
} from 'react-icons/fa';
import './Services.css';

const Services = () => {
  const services = [
    {
      title: 'AI-Driven Website Personalization',
      description:
        'We leverage AI to create dynamic, personalized user experiences, tailoring content and recommendations in real-time to boost engagement and conversions by up to 30%.',
      icon: <FaBrain />,
    },
    {
      title: 'Performance Optimization with 99.9% Uptime',
      description:
        'Ensure your website loads in under 2 seconds with a 99.9% uptime guarantee, using advanced techniques like lazy loading and CDN integration to maximize performance.',
      icon: <FaTachometerAlt />,
    },
    {
      title: 'Accessibility-First Development (WCAG Compliance)',
      description:
        'We design WCAG 2.1-compliant websites, ensuring inclusivity for all users with features like screen reader compatibility, increasing traffic and reducing legal risks.',
      icon: <FaUniversalAccess />,
    },
    {
      title: 'Custom API Development for Seamless Integrations',
      description:
        'Our custom APIs enable seamless integration with CRMs, payment gateways, and more, streamlining your business processes with a tailored, error-free solution.',
      icon: <FaCode />,
    },
    {
      title: 'Proactive Cybersecurity with Penetration Testing',
      description:
        'Protect your website with regular penetration testing, SSL implementation, and DDoS protection, ensuring your business stays secure against cyber threats.',
      icon: <FaShieldAlt />,
    },
    {
      title: 'Conversion Rate Optimization (CRO) with A/B Testing',
      description:
        'Maximize conversions with data-driven A/B testing, heatmaps, and user journey analysis, delivering measurable results like a 40% increase in lead generation.',
      icon: <FaChartLine />,
    },
    {
      title: 'Headless CMS Implementation for Scalability',
      description:
        'Future-proof your website with a headless CMS, enabling content delivery across web, mobile, and IoT devices while reducing management time by 50%.',
      icon: <FaServer />,
    },
    {
      title: 'Sustainable Web Design (Eco-Friendly Hosting)',
      description:
        'Reduce your website’s carbon footprint with green hosting and optimized code, appealing to eco-conscious brands and improving SEO with sustainable practices.',
      icon: <FaLeaf />,
    },
    {
      title: 'White-Glove Maintenance and 24/7 Support',
      description:
        'Enjoy peace of mind with our 24/7 support and maintenance service, handling updates, backups, and emergencies to keep your website running smoothly.',
      icon: <FaHeadset />,
    },
    {
      title: 'Immersive Storytelling with WebGL and Animations',
      description:
        'Engage users with interactive 3D elements, WebGL, and animations, creating memorable experiences that increase user engagement by up to 25%.',
      icon: <FaCube />,
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
    <section id="services" className="services-section">
      <div className="services-container">
        <h2>Our Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              whileHover="hover"
            >
              <motion.div className="service-icon" variants={iconVariants}>
                {service.icon}
              </motion.div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;