import React, { useState } from 'react';
import { Menu, X, ChevronDown, User } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-inner">
          
          {/* Logo */}
          <div className="navbar-logo">
            <div className="logo-icon">
              <svg viewBox="0 0 33 33" fill="currentColor">
                <path d="M28,0H5C2.24,0,0,2.24,0,5v23c0,2.76,2.24,5,5,5h23c2.76,0,5-2.24,5-5V5c0-2.76-2.24-5-5-5ZM29,17c-6.63,0-12,5.37-12,12h-1c0-6.63-5.37-12-12-12v-1c6.63,0,12-5.37,12-12h1c0,6.63,5.37,12,12,12v1Z"></path>
              </svg>
            </div>
            <span className="logo-text">FLOWSTATE</span>
          </div>

          {/* Desktop Nav */}
          <div className="navbar-links-desktop">
            <div 
              className="nav-dropdown-wrapper"
              onMouseEnter={() => setSolutionsOpen(true)}
              onMouseLeave={() => setSolutionsOpen(false)}
            >
              <button className="nav-link dropdown-toggle">
                Solutions <ChevronDown className="dropdown-icon" />
              </button>
              
              <div className={`nav-dropdown-menu ${solutionsOpen ? 'is-open' : ''}`}>
                <a href="#" className="dropdown-item">
                  <div className="dropdown-item-icon">
                     <User size={20} />
                  </div>
                  <div className="dropdown-item-content">
                    <div className="dropdown-title">Intent Detection</div>
                    <div className="dropdown-desc">Analyze input & suggest</div>
                  </div>
                </a>
              </div>
            </div>
            
            <a href="#" className="nav-link">About</a>
            <a href="#" className="nav-link">Blog</a>
            <a href="#" className="nav-link">Support</a>
          </div>

          {/* Action Button */}
          <div className="navbar-action-desktop">
            <a href="#" className="btn-primary">Start free</a>
          </div>

          {/* Mobile menu button */}
          <div className="navbar-mobile-toggle">
            <button onClick={() => setIsOpen(!isOpen)} className="mobile-toggle-btn">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar-mobile-menu ${isOpen ? 'is-open' : ''}`}>
        <div className="mobile-menu-inner">
          <a href="#" className="mobile-link">Solutions</a>
          <a href="#" className="mobile-link">About</a>
          <a href="#" className="mobile-link">Blog</a>
          <a href="#" className="mobile-link">Support</a>
          <div className="mobile-action-wrapper">
            <a href="#" className="btn-primary mobile-full-btn">Start free</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
