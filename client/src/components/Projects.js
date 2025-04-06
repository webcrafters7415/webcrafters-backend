// agency-website/client/src/components/Projects.js
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: 'Luxury E-commerce Platform',
      category: 'E-commerce',
      description:
        'A high-end e-commerce platform for a luxury fashion brand, featuring AI-driven personalization, WebGL animations, and a headless CMS for seamless content management.',
      technologies: ['React', 'Node.js', 'WebGL', 'Shopify API', 'Headless CMS'],
      image: `${process.env.PUBLIC_URL}/images/luxury-ecommerce-desktop.jpg`,
    },
    {
      title: 'Corporate Finance Portal',
      category: 'Corporate',
      description:
        'A secure, responsive portal for a financial institution, with custom API integrations, WCAG-compliant accessibility, and proactive cybersecurity measures.',
      technologies: ['React', 'Express', 'MongoDB', 'Custom APIs', 'Penetration Testing'],
      image: `${process.env.PUBLIC_URL}/images/corporate-finance-desktop.jpg`,
    },
    {
      title: 'Creative Agency Showcase',
      category: 'Creative',
      description:
        'An immersive website for a creative agency, featuring 3D animations, parallax effects, and a sustainable design with eco-friendly hosting.',
      technologies: ['React', 'Three.js', 'GSAP', 'Green Hosting'],
      image: `${process.env.PUBLIC_URL}/images/creative-agency-desktop.jpg`,
    },
    {
      title: 'Online Learning Platform',
      category: 'E-commerce',
      description:
        'A scalable e-commerce platform for online courses, with performance optimization, CRO through A/B testing, and 24/7 support for uninterrupted access.',
      technologies: ['React', 'Next.js', 'Stripe API', 'A/B Testing', '24/7 Support'],
      image: `${process.env.PUBLIC_URL}/images/online-learning-desktop.jpg`,
    },
    {
      title: 'Tech Startup Landing Page',
      category: 'Corporate',
      description:
        'A sleek landing page for a tech startup, designed with conversion rate optimization, accessibility-first principles, and a headless CMS for scalability.',
      technologies: ['React', 'Gatsby', 'Headless CMS', 'CRO', 'WCAG 2.1'],
      image: `${process.env.PUBLIC_URL}/images/tech-startup-desktop.jpg`,
    },
    {
      title: 'Interactive Art Gallery',
      category: 'Creative',
      description:
        'An interactive online gallery with WebGL-powered 3D exhibits, immersive storytelling, and sustainable hosting to reduce its carbon footprint.',
      technologies: ['React', 'WebGL', 'Three.js', 'Sustainable Hosting'],
      image: `${process.env.PUBLIC_URL}/images/art-gallery-desktop.jpg`,
    },
  ];

  const categories = ['All', 'E-commerce', 'Corporate', 'Creative'];

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
    hover: {
      scale: 1.05,
      boxShadow: '0 15px 30px rgba(0, 0, 0, 0.2)',
      transition: { duration: 0.3, ease: 'easeInOut' },
    },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: 'easeOut' } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.3, ease: 'easeIn' } },
  };

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2>Our Projects</h2>
        <div className="filter-buttons">
          {categories.map((category) => (
            <motion.button
              key={category}
              className={`filter-button ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover="hover"
              onClick={() => setSelectedProject(project)}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="overlay">
                  <h3>{project.title}</h3>
                  <p>{project.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal for project details */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="project-modal"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="modal-content">
              <button className="close-button" onClick={() => setSelectedProject(null)}>
                <FaTimes />
              </button>
              <img src={selectedProject.image} alt={selectedProject.title} className="modal-image" />
              <h3>{selectedProject.title}</h3>
              <p className="modal-category">{selectedProject.category}</p>
              <p className="modal-description">{selectedProject.description}</p>
              <div className="modal-technologies">
                <h4>Technologies Used:</h4>
                <ul>
                  {selectedProject.technologies.map((tech, idx) => (
                    <li key={idx}>{tech}
                    </li>
                  ))}
                </ul>
              </div>
              {/* Removed the "View Live Site" button */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
