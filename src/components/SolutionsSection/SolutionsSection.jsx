import React from 'react';
import './SolutionsSection.css';

const SolutionsSection = () => {
  return (
    <div className="solutions-section">
      <div className="solutions-content">
        <div className="solutions-left">
          <div className="tag">The Solutions</div>
          <h2 className="solutions-title">
            Write, plan, & <span className="highlight">get organized</span>
            <br />all in one place.
          </h2>
          <p className="solutions-description">
            Building an enterprise level site doesn't need nightmare or cost your
            thousands. Felix is purpose built for ease of use and complete
            flexibility to create even the most powerful of products.
          </p>

          <div className="features-list">
            <div className="feature-item">
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" stroke="#8B7FE8" strokeWidth="2"/>
                  <path d="M8 12H16M12 8V16" stroke="#8B7FE8" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="feature-text">
                <h3>Take Notes</h3>
                <p>Write notes quickly and organize them as you like, no matter where you are. Focus remembers it all and keeps it organized so you don't have to.</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M9 11L12 14L22 4M21 12V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H16" stroke="#8B7FE8" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="feature-text">
                <h3>Track to-dos and to-learns</h3>
                <p>Did you know that stress comes from not taking action on certain things that you might have some control over. As soon as you take action on it, you will feel better.</p>
              </div>
            </div>
          </div>

          <div className="solutions-cta">
            <button className="get-started-btn">Get Started</button>
            <button className="play-btn">
              <span className="play-icon">▶</span>
            </button>
          </div>
        </div>

        <div className="solutions-right">
          <img src="/solution-1.png" alt="Calendar Solution" className="solution-image" />
          {/* <div className="trusted-badge">
            <h4>Trusted by Customers</h4>
            <div className="count">10,000+</div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default SolutionsSection; 