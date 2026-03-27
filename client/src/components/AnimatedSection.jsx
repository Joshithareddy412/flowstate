import React, { useRef, useEffect, useState } from 'react';
import './AnimatedSection.css';

export default function AnimatedSection({ children, className = '' }) {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const currentRef = domRef.current;
    if (!currentRef) return;
    
    // Create an intersection observer to trigger animations
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(true);
          // Unobserve once visible since we want it once
          observer.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '-50px',
      threshold: 0.1
    });

    observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <section
      ref={domRef}
      className={`animated-section ${isVisible ? 'is-visible' : ''} ${className}`}
    >
      {children}
    </section>
  );
}
