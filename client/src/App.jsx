import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BentoFeatures from './components/BentoFeatures';
import Metrics from './components/Metrics';
import Pricing from './components/Pricing';
import WorkflowGallery from './components/WorkflowGallery';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      
      <main className="main-content">
        <Hero />
        <BentoFeatures />
        <Metrics />
        <Pricing />
        <WorkflowGallery />
        <FAQ />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
