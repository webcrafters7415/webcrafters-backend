import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Pricing from './components/Pricing';
import WhyChooseUs from './components/WhyChooseUs';
import WebDesignProcess from './components/WebDesignProcess';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import FAQs from './components/FAQs';
import Contact from './components/Contact';
import './App.css';

function App() {
  const contactRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    document.body.classList.remove('dark-mode');
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar scrollToContact={scrollToContact} />
        <Hero />
        <AboutUs />
        <Services />
        <Pricing />
        <WhyChooseUs />
        <WebDesignProcess />
        <Projects />
        <Testimonials />
        <FAQs />
        <div ref={contactRef}>
          <Contact />
        </div>
      </div>
    </Router>
  );
}

export default App;
