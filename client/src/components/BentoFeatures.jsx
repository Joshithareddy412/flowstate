import React from 'react';
import AnimatedSection from './AnimatedSection';
import './BentoFeatures.css';

export default function BentoFeatures() {
  return (
    <AnimatedSection className="bento-section">
      <div className="bento-grid">
        {/* Card 1 */}
        <div className="bento-card bento-card-1">
          <div className="bento-icon-wrapper">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18.7C6.6 17.6 4.8 15 4.8 12C4.8 8.9 6.6 6.3 9 5.2"></path>
              <path d="M14.8 5.2C17.4 6.3 19.2 8.9 19.2 12C19.2 15 17.4 17.6 14.8 18.7"></path>
              <path d="M4 19.2L9 19.2C9.1 19.2 9.2 19.1 9.2 19L9.2 14"></path>
              <path d="M20 4.8L15 4.8C14.9 4.8 14.8 4.9 14.8 5L14.8 10"></path>
            </svg>
          </div>
          <h3 className="bento-title">Tailored next action ranking</h3>
          <p className="bento-desc">
            Share your interests and get a prioritized list of steps, organized by urgency and relevance to help you move forward efficiently.
          </p>
          <a href="#" className="bento-link">
            Start <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"><path d="M2 8H14.5M14.5 8L8.5 2M14.5 8L8.5 14"></path></svg>
          </a>
        </div>

        {/* Card 2 */}
        <div className="bento-card bento-card-2">
          <div className="bento-icon-wrapper">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="8"></circle>
            </svg>
          </div>
          <h3 className="bento-title">Intent-based smart guidance</h3>
          <p className="bento-desc">
            Our AI reviews your input and recommends focused paths, so you can make quick, informed decisions for your workflow.
          </p>
          <a href="#" className="bento-link">
            Learn more <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"><path d="M2 8H14.5M14.5 8L8.5 2M14.5 8L8.5 14"></path></svg>
          </a>
        </div>

        {/* Card 3 (Image BG) */}
        <div className="bento-card bento-card-image bento-card-3">
          <img 
            src="https://cdn.prod.website-files.com/69c6b85da80e50c8474e5a23/69c6bc9aab9cf704ce2dfd4f_AI_named_FLOWSTATE_202603272251.jpeg" 
            alt="AI Flowstate" 
            className="bento-bg-img"
          />
          <div className="bento-overlay"></div>
          <div className="bento-image-content">
            <div className="bento-image-label">How it works</div>
            <p className="bento-image-text">
              Enter your goal. Instantly receive actionable steps, powered by predictive analysis and real-time data.
            </p>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
