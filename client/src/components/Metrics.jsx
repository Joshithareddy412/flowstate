import React from 'react';
import AnimatedSection from './AnimatedSection';
import './Metrics.css';

export default function Metrics() {
  return (
    <AnimatedSection className="metrics-section">
      <div className="metrics-grid">
        <div className="metrics-card metrics-card-1">
          <div className="metrics-value">10000+</div>
          <p className="metrics-label">Workflows structured for users</p>
        </div>
        
        <div className="metrics-card metrics-card-2">
          <div className="metrics-value">100%</div>
          <p className="metrics-label">Intent recognition precision</p>
        </div>
        
        <div className="metrics-card metrics-card-3">
          <div className="metrics-value">300</div>
          <p className="metrics-label">Actions predicted every day</p>
        </div>
      </div>
    </AnimatedSection>
  );
}
