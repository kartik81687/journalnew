import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">LOGO HERE</div>
      <div className="search-bar">
        <input type="text" placeholder="Search anything..." />
      </div>
      <div className="user-profile">
        <img src="/path-to-avatar.jpg" alt="User avatar" />
        <span>Jhon Doe</span>
      </div>
    </header>
  );
};

export default Header; 