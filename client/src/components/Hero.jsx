import React, { useEffect, useState } from 'react';
import './Hero.css';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Delay adding class slightly to allow initial paint,
    // triggering the CSS load animations.
    setTimeout(() => setMounted(true), 100);
  }, []);

  return (
    <div className="hero-container">
      {/* Background Graphic Element */}
      <div className="hero-bg-wrapper">
        <img 
          src="https://cdn.prod.website-files.com/69c6b85da80e50c8474e5a23/69c6bc7e115d139f47494a46_Screenshot_2026-03-27_190753-removebg-preview.png" 
          alt="Hero Background" 
          className="hero-bg-img mask-fade-top"
        />
      </div>

      <div className={`hero-content ${mounted ? 'is-mounted' : ''}`}>
        <h1 className="hero-heading">
          Shape habits. <br className="hero-heading-break" />
          Predict outcomes.
        </h1>

        <p className="hero-subheading">
          AI-powered workflows tailored to your goals. Enter your interests—get structured, actionable next steps. Progress made simple, with smart predictions and clear priorities.
        </p>

        <div className="hero-actions">
          <a href="#" className="btn-primary hero-btn">
            Start free
          </a>
        </div>
      </div>
      
      {/* Bottom fade out overlay purely for effect */}
      <div className="hero-fade-bottom"></div>
    </div>
  );
}
