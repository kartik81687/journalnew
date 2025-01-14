import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <div className="tag">Introducing Journal</div>
          <h1 className="hero-title">
            Your Ultimate<br />
            Productivity Solution
          </h1>
          <p className="hero-description">
            Lorem ipsum dolor sit amet consectetur. Tellus blandit magna tempor et faucibus ut.
            Fermentum faucibus mauris orci facilisis. Ac pharetra auctor eu.
          </p>
          <div className="hero-buttons">
            <button className="primary-btn">Buy Now</button>
            <button className="secondary-btn">Buy SaaS Now</button>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <img src="images/dashboard-mockup.png" alt="Dashboard Preview" className="dashboard-preview" />
        </div>
      </div>

      <div className="decorative-elements">
        <div className="floating-shape blob blob-1"></div>
        <div className="floating-shape blob blob-2"></div>
        <div className="shape cube"></div>
        <div className="shape pyramid"></div>
        <div className="shape ring"></div>
      </div>

      <div className="hero-3d-elements">
        {/* Left side elements */}
        <div className="left-3d-group">
          <div className="cone-3d cone-3d-1">
            <div className="cone-base"></div>
            <div className="cone-surface"></div>
          </div>
          
          <div className="diamond-3d diamond-3d-1">
            <div className="diamond-face front"></div>
            <div className="diamond-face back"></div>
            <div className="diamond-face left"></div>
            <div className="diamond-face right"></div>
            <div className="diamond-face top"></div>
            <div className="diamond-face bottom"></div>
          </div>

          <div className="sphere-3d sphere-3d-1"></div>
          
          <div className="helix-3d helix-3d-1">
            <div className="helix-line"></div>
            <div className="helix-line"></div>
            <div className="helix-line"></div>
          </div>
        </div>

        {/* Prisms */}
        <div className="prism-3d prism-3d-1">
          <div className="prism-face" style={{ transform: 'rotateY(0deg)' }}></div>
          <div className="prism-face" style={{ transform: 'rotateY(120deg)' }}></div>
          <div className="prism-face" style={{ transform: 'rotateY(240deg)' }}></div>
        </div>
        <div className="prism-3d prism-3d-2">
          <div className="prism-face" style={{ transform: 'rotateY(0deg)' }}></div>
          <div className="prism-face" style={{ transform: 'rotateY(120deg)' }}></div>
          <div className="prism-face" style={{ transform: 'rotateY(240deg)' }}></div>
        </div>

        {/* Cylinders */}
        <div className="cylinder-3d cylinder-3d-1">
          <div className="cylinder-base" style={{ transform: 'translateY(0)' }}></div>
          <div className="cylinder-body"></div>
          <div className="cylinder-base" style={{ transform: 'translateY(60px)' }}></div>
        </div>

        {/* Torus */}
        <div className="torus-3d torus-3d-1"></div>
        <div className="torus-3d torus-3d-2"></div>

        {/* Octahedron */}
        <div className="octahedron-3d octahedron-3d-1">
          <div className="octahedron-face" style={{ transform: 'rotateX(0deg)' }}></div>
          <div className="octahedron-face" style={{ transform: 'rotateX(180deg)' }}></div>
          <div className="octahedron-face" style={{ transform: 'rotateY(90deg)' }}></div>
          <div className="octahedron-face" style={{ transform: 'rotateY(-90deg)' }}></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 