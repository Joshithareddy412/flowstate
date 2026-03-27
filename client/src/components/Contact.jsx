import React from 'react';
import AnimatedSection from './AnimatedSection';
import './Contact.css';

export default function Contact() {
  return (
    <AnimatedSection className="contact-section">
      <div className="contact-container">
        
        {/* Left Image */}
        <div className="contact-img-wrapper">
          <img 
            src="https://cdn.prod.website-files.com/69c6b85da80e50c8474e5a23/69c6bfe20b2efc6a807ff6a8_Empty_chair_in_202603272305.jpeg" 
            alt="Office chair" 
            className="contact-img"
          />
        </div>

        {/* Right Form */}
        <div className="contact-form-wrapper">
          <h2 className="contact-title">Contact our team</h2>
          <p className="contact-subtitle">
            Get in touch for workflow support. <br className="hidden-sm" />
            <a href="mailto:shauryasambyal12e4@gmail.com" className="contact-email">shauryasambyal12e4@gmail.com</a>
          </p>

          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label htmlFor="name" className="form-label">Full name</label>
              <input 
                type="text" 
                id="name" 
                placeholder="Your name" 
                disabled
                className="form-input"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email address</label>
              <input 
                type="email" 
                id="email" 
                placeholder="email@website.com" 
                disabled
                className="form-input"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="focus" className="form-label">Project focus</label>
              <select 
                id="focus" 
                disabled
                className="form-select"
              >
                <option value="">Select one...</option>
                <option value="First">First choice</option>
                <option value="Second">Second choice</option>
                <option value="Third">Third choice</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="message" className="form-label">How can we help?</label>
              <textarea 
                id="message" 
                rows="4" 
                placeholder="Type your message..." 
                disabled
                className="form-textarea"
              ></textarea>
            </div>

            <div className="form-checkbox-group">
              <input 
                type="checkbox" 
                id="agreement" 
                disabled
                className="form-checkbox"
              />
              <label htmlFor="agreement" className="form-checkbox-label">
                I agree to the <a href="#" className="privacy-link">privacy policy</a>.
              </label>
            </div>

            <button 
              type="submit" 
              disabled
              className="submit-btn"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </AnimatedSection>
  );
}
