import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        
        <div className="footer-logo-block">
          <div className="footer-logo-icon">
            <svg viewBox="0 0 33 33" fill="currentColor">
              <path d="M28,0H5C2.24,0,0,2.24,0,5v23c0,2.76,2.24,5,5,5h23c2.76,0,5-2.24,5-5V5c0-2.76-2.24-5-5-5ZM29,17c-6.63,0-12,5.37-12,12h-1c0-6.63-5.37-12-12-12v-1c6.63,0,12-5.37,12-12h1c0,6.63,5.37,12,12,12v1Z"></path>
            </svg>
          </div>
          <span className="footer-logo-text">FLOWSTATE</span>
        </div>

        <div className="footer-links-block">
          <a href="#" className="footer-link">Privacy Policy</a>
          <a href="#" className="footer-link">Terms of Service</a>
          <p className="footer-copyright">© 2026 Flowstate. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}
