import React, { useState } from "react";
import "./FAQs.css";

const faqsData = [
  {
    question: "What services does your agency provide?",
    answer: "We offer web development, UI/UX design, SEO optimization, and branding solutions to help businesses establish a strong online presence.",
  },
  {
    question: "How long does it take to build a website?",
    answer: "Depending on the complexity, a website typically takes 2-6 weeks from planning to launch.",
  },
  {
    question: "Do you provide post-launch support?",
    answer: "Yes! We offer maintenance packages to ensure your website remains updated and secure.",
  },
  {
    question: "Can I customize my website's design?",
    answer: "Absolutely! We tailor every project to match your brand identity and business goals.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept credit/debit cards, PayPal, and bank transfers for hassle-free transactions.",
  },
  {
    question: "How do I get started?",
    answer: "Simply contact us through our website, and we’ll schedule a consultation to discuss your project.",
  },
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faqs-section">
      <h2 className="faqs-heading">Frequently Asked Questions</h2>
      <div className="faqs-container">
        {faqsData.map((faq, index) => (
          <div key={index} className={`faq-item ${openIndex === index ? "open" : ""}`} onClick={() => toggleFAQ(index)}>
            <div className="faq-question">
              {faq.question}
              <span className="faq-toggle">{openIndex === index ? "−" : "+"}</span>
            </div>
            <div className="faq-answer">{faq.answer}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQs;
