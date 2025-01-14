import React, { useState, useEffect, useRef } from 'react';
import './ScrollingSections.css';

const ScrollingSections = ({ children }) => {
  const [activeSection, setActiveSection] = useState(0);
  const [hideProgress, setHideProgress] = useState(false);
  const containerRef = useRef(null);
  const sections = React.Children.toArray(children);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollPosition = container.scrollTop;
      const windowHeight = window.innerHeight;
      const scrollHeight = container.scrollHeight;
      
      // Calculate current section based on scroll position
      const sectionIndex = Math.floor((scrollPosition + windowHeight / 2) / windowHeight);
      setActiveSection(sectionIndex);

      // Hide progress when reaching the footer
      const isNearBottom = scrollPosition + windowHeight >= scrollHeight - windowHeight;
      if (isNearBottom) {
        setHideProgress(true);
        container.classList.add('end-reached');
      } else {
        setHideProgress(false);
        container.classList.remove('end-reached');
      }

      // Update visibility of sections
      sections.forEach((_, index) => {
        const section = container.children[index];
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          const isVisible = 
            scrollPosition >= sectionTop - windowHeight / 2 &&
            scrollPosition < sectionTop + sectionHeight - windowHeight / 2;
          
          if (isVisible) {
            section.classList.add('visible');
          } else {
            section.classList.remove('visible');
          }
        }
      });
    };

    container.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => container.removeEventListener('scroll', handleScroll);
  }, [sections.length]);

  const scrollToSection = (index) => {
    const container = containerRef.current;
    if (container) {
      const targetSection = container.children[index];
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="scrolling-sections">
      <div ref={containerRef} className="scroll-container">
        {sections.map((section, index) => (
          <div key={index} className="scroll-section">
            {section}
          </div>
        ))}
      </div>
      
      <div className={`scroll-progress ${hideProgress ? 'hidden' : ''}`}>
        {sections.map((_, index) => (
          <div
            key={index}
            className={`progress-dot ${index === activeSection ? 'active' : ''}`}
            onClick={() => scrollToSection(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ScrollingSections; 