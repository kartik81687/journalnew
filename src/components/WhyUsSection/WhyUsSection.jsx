import React from 'react';
import './WhyUsSection.css';

const WhyUsSection = () => {
  return (
    <div className="why-us-section">
      <div className="why-us-decorative">
        <div className="decor-shape gradient-ball ball-1"></div>
        <div className="decor-shape gradient-ball ball-2"></div>
        <div className="sparkle sparkle-1"></div>
        <div className="sparkle sparkle-2"></div>
      </div>
      <div className="why-us-content">
        <div className="why-us-header">
          <div className="tag">Why Us?</div>
          <h2 className="why-us-title">
            Why it is<br />
            worth choosing <span className="highlight">Product Name Here</span>
          </h2>
        </div>

        <div className="features-layout">
          {/* Left Feature */}
          <div className="feature-text left">
            <h3>Awesome Features</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt Laoreet non curabitur gravida sagittis aliquam bibendum.</p>
          </div>

          {/* Center Icons */}
          <div className="features-icons">
            <div className="icon-grid">
              <div className="icon home" style={{ background: '#00C92C' }}>🏠</div>
              <div className="icon robot" style={{ background: '#56CCF2' }}>🤖</div>
              <div className="icon calendar" style={{ background: '#FBAB4D' }}>📅</div>
              <div className="icon target" style={{ background: '#FBAB4D', border: '2px solid white' }}>🎯</div>
              <div className="icon settings" style={{ background: '#9586FB' }}>⚙️</div>
              <div className="icon list" style={{ background: '#56CCF2' }}>📋</div>
            </div>
          </div>

          {/* Right Feature */}
          <div className="feature-text right">
            <div className="feature-card">
              <h3>Fast Billing</h3>
              <p>Easily integrate with all your need favorite tools through and APIsing including automatic</p>
            </div>
          </div>

          {/* Bottom Features */}
          <div className="bottom-features">
            <div className="feature-card" style={{ background: 'rgba(86, 204, 242, 0.1)' }}>
              <div className="feature-icon">✍️</div>
              <h3>Easy Writing</h3>
              <p>Easily integrate with all your need favorite tools through and APIsing including automatic</p>
            </div>
            <div className="feature-card" style={{ background: 'rgba(251, 171, 77, 0.1)' }}>
              <div className="feature-icon">📱</div>
              <h3>Professional NotePad</h3>
              <p>Easily integrate with all your need favorite tools through and APIsing including automatic</p>
            </div>
            <div className="feature-card" style={{ background: 'rgba(0, 201, 44, 0.1)' }}>
              <div className="feature-icon">📊</div>
              <h3>Project Management</h3>
              <p>Easily integrate with all your need favorite tools through and APIsing including automatic</p>
            </div>
          </div>
        </div>
      </div>
      <div className="why-us-floating">
        <div className="why-us-shape floating-plus plus-1">+</div>
        <div className="why-us-shape floating-plus plus-2">+</div>
        <div className="why-us-shape floating-star star-1">★</div>
        <div className="why-us-shape floating-star star-2">★</div>
      </div>
    </div>
  );
};

export default WhyUsSection; 