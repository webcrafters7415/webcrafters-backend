// agency-website/client/src/components/Pricing.js
import React from 'react';
import { motion } from 'framer-motion';
import './Pricing.css';

const Pricing = () => {
  const plans = [
    {
      name: 'Basic',
      price: 199,
      features: [
        'AI-Driven Website Personalization (Basic)',
        'Performance Optimization with 99.9% Uptime',
        'Accessibility-First Development (WCAG Compliance)',
        'Sustainable Web Design (Eco-Friendly Hosting)',
        'Standard Support (Business Hours)',
      ],
      recommended: false,
    },
    {
      name: 'Pro',
      price: 599,
      features: [
        'AI-Driven Website Personalization (Advanced)',
        'Performance Optimization with 99.9% Uptime',
        'Accessibility-First Development (WCAG Compliance)',
        'Custom API Development for Seamless Integrations',
        'Conversion Rate Optimization (CRO) with A/B Testing',
        'Sustainable Web Design (Eco-Friendly Hosting)',
        'White-Glove Maintenance and 24/7 Support',
      ],
      recommended: true,
    },
    {
      name: 'Enterprise',
      price: 999,
      features: [
        'AI-Driven Website Personalization (Advanced)',
        'Performance Optimization with 99.9% Uptime',
        'Accessibility-First Development (WCAG Compliance)',
        'Custom API Development for Seamless Integrations',
        'Proactive Cybersecurity with Penetration Testing',
        'Conversion Rate Optimization (CRO) with A/B Testing',
        'Headless CMS Implementation for Scalability',
        'Sustainable Web Design (Eco-Friendly Hosting)',
        'White-Glove Maintenance and 24/7 Support',
        'Immersive Storytelling with WebGL and Animations',
      ],
      recommended: false,
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

  return (
    <section id="pricing" className="pricing-section">
      <div className="pricing-container">
        <h2>Plans and Pricing</h2>
        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`pricing-card ${plan.recommended ? 'recommended' : ''}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              whileHover="hover"
            >
              {plan.recommended && <span className="recommended-badge">Recommended</span>}
              <h3>{plan.name}</h3>
              <div className="price">
                <span className="price-value">${plan.price}</span>
                <span className="price-period">/month</span>
              </div>
              <ul className="features-list">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <motion.button
                className="choose-plan-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Choose Plan
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;