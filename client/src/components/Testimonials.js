import React, { useState } from "react";
import "./Testimonials.css";

const testimonials = [
  {
    quote: "This agency transformed our business with a stunning website. Absolutely top-notch service!",
    name: "Sophia Carter",
    role: "CEO, Digital Trends",
  },
  {
    quote: "Their attention to detail and creativity exceeded our expectations. Highly recommended!",
    name: "Liam Johnson",
    role: "Founder, StartUp Hub",
  },
  {
    quote: "Professional, innovative, and reliable. Best decision we made for our online presence.",
    name: "Emma Wilson",
    role: "Marketing Head, InnovateX",
  },
  {
    quote: "The team delivered beyond our imagination. Our new website is sleek and modern!",
    name: "Daniel Martinez",
    role: "CTO, TechFlow",
  },
  {
    quote: "User-friendly and beautifully designed websites. We’ve seen great conversion rates!",
    name: "Olivia Brown",
    role: "Director, Bright Media",
  },
  {
    quote: "They handled our project with expertise and precision. Couldn’t be happier!",
    name: "Ethan Walker",
    role: "Product Manager, NextGen Solutions",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="testimonials-section">
      <h2 className="testimonials-heading">What Our Clients Say</h2>
      <div className="testimonial-card">
        <p className="testimonial-text">"{testimonials[currentIndex].quote}"</p>
        <h4 className="testimonial-author">{testimonials[currentIndex].name}</h4>
        <p className="testimonial-role">{testimonials[currentIndex].role}</p>
      </div>
      <div className="testimonial-buttons">
        <button onClick={prevTestimonial} className="testimonial-btn">❮</button>
        <button onClick={nextTestimonial} className="testimonial-btn">❯</button>
      </div>
    </section>
  );
};

export default Testimonials;
