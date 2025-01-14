import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="newsletter-section">
        <div className="newsletter-content">
          <h2>Take control of your<br />personal Journals today</h2>
          <div className="subscribe-wrapper">
            <input type="email" placeholder="Enter your email" />
            <button className="subscribe-btn">Subscribe</button>
          </div>
        </div>
      </div>

      <div className="footer-content">
        <div className="footer-left">
          <div className="logo">LOGO HERE</div>
          <p>Lorem ipsum dolor sit amet consectetur. Tellus blandit magna tempor et faucibus ut.</p>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">FB</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">TW</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">IG</a>
          </div>
        </div>

        <div className="divider"></div>

        <div className="footer-right">
          <div className="footer-column">
            <h3>Products</h3>
            <ul>
              <li><a href="/business-suite">Business Suite</a></li>
              <li><a href="/host-billing">HostBilling</a></li>
              <li>
                <div className="link-with-tag">
                  <a href="/ibilling">iBilling</a>
                  <span className="offer-tag">Offer</span>
                </div>
              </li>
              <li><a href="/products">More</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Brand Name</h3>
            <ul>
              <li><a href="/help">Help center</a></li>
              <li><a href="/privacy">Privacy policy</a></li>
              <li><a href="/cookie">Cookie policy</a></li>
              <li><a href="/support">Support policy</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Contact us</h3>
            <ul>
              <li><a href="tel:+9155456789">+9155 456 789</a></li>
              <li><a href="mailto:mail@email.com">mail@email.com</a></li>
              <li>
                <button className="chat-btn">CHAT WITH US</button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright © Brand Name 2024</p>
      </div>
    </footer>
  );
};

export default Footer; 