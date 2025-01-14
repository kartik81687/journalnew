import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>JOURNAL AI</h1>
      </div>
      
      <div className="navbar-links">
        <div className="dropdown">
          <button className="dropdown-btn">Products</button>
        </div>
        <a href="#pricing">Pricing</a>
        <a href="#demo">Demo</a>
        <a href="#marketplace">Marketplace</a>
        <a href="#help">Help Center</a>
        <a href="#resources">Resources</a>
      </div>

      <div className="navbar-auth">
        <button className="sign-in-btn">Sign In</button>
      </div>
    </nav>
  );
};

export default Navbar; 