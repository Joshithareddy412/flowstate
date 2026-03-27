import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import './FAQ.css';

export default function FAQ() {
  return (
    <AnimatedSection className="faq-section">
      <div className="faq-header">
        <h2 className="faq-title">YOUR LIFE, SIMULATED!</h2>
        <p className="faq-subtitle">
          Get answers about AI guidance, workflow, and recommendations.
        </p>
      </div>

      <div className="faq-list">
        <AccordionItem 
          title="How does AI understand my input?" 
          content="Our system analyzes your input to identify your intent and recommends the best next steps for your workflow."
        />
        <AccordionItem 
          title="What are the main use cases?" 
          content="Organize tasks, set priorities, and get personalized suggestions based on your goals and deadlines."
        />
        <AccordionItem 
          title="Is my information kept private?" 
          content="Your data is protected with secure protocols and used only to improve your experience."
        />
        <AccordionItem 
          title="Can I try it for free?" 
          content="Start free and explore all features before upgrading to a paid plan."
        />
      </div>

      <div className="faq-footer">
        <p className="faq-support-text">Need more help? Reach out to our support team.</p>
        <a href="#" className="faq-support-btn">
          Support
        </a>
      </div>
    </AnimatedSection>
  );
}

function AccordionItem({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion-item">
      <button 
        className="accordion-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="accordion-title">{title}</span>
        <div className={`accordion-icon ${isOpen ? 'is-open' : ''}`}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>
      </button>
      
      <div className={`accordion-content-wrapper ${isOpen ? 'is-open' : ''}`}>
        <div className="accordion-content">
          {content}
        </div>
      </div>
    </div>
  );
}
