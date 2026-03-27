import React from 'react';
import AnimatedSection from './AnimatedSection';
import './Pricing.css';

export default function Pricing() {
  return (
    <AnimatedSection className="pricing-section">
      <div className="pricing-grid">
        {/* Starter Plan */}
        <div className="pricing-card pricing-card-1">
          <div className="pricing-header">
            <div className="pricing-tier-name">Starter plan</div>
            <p className="pricing-price-spacer">.</p>
            <p className="pricing-subtitle">Best for individuals</p>
          </div>
          
          <div className="pricing-footer">
            <a href="#" className="pricing-btn">
              Start free
            </a>
            <p className="pricing-terms">No contract, cancel anytime.</p>
          </div>
        </div>

        {/* PRO Plan */}
        <div className="pricing-card pricing-card-2">
          <div className="pricing-header">
            <div className="pricing-tier-name text-muted">PRO PLAN</div>
            <p className="pricing-price">100 INR</p>
            <p className="pricing-subtitle">For esteemed ones</p>
          </div>
          
          <div className="pricing-footer">
            <a href="#" className="pricing-btn">
              Contact sales
            </a>
            <p className="pricing-terms">No contract, cancel anytime.</p>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
