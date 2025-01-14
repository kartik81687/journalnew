import React from 'react';
import './ClaritySection.css';

const ClaritySection = () => {
  return (
    <div className="clarity-section">
      <div className="clarity-content">
        <div className="clarity-left">
          <img src="images/solution-2.png" alt="Journal Preview" className="clarity-image" />
        </div>

        <div className="clarity-right">
          <div className="tag">The Solutions</div>
          <h2 className="clarity-title">
            <span className="highlight">Bring Clarity</span> back in your life
          </h2>
          <p className="clarity-description">
            Motivation does not help get things done; clarity does. Learn to
            develop better plans as only better planning will help you gain clarity.
          </p>

          <div className="clarity-features">
            <div className="clarity-feature">
              <h3>Say good bye to procrastination</h3>
              <p>Get things done. This will help you get rid of stress and will bring joy in your life.
              Remember you are stressed not beacuse you over work but you have poor planning.</p>
            </div>

            <div className="clarity-feature">
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#FBAB4D" strokeWidth="2"/>
                  <path d="M8 12L11 15L16 9" stroke="#FBAB4D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="feature-text">
                <h3>Turn your ideas into real business</h3>
                <p>Every Human being is unique and has a special kind of power and creativity that they can offer to the world. Ideas in your head do not get any value until it forms into any expression.</p>
              </div>
            </div>

            <div className="clarity-feature">
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#FBAB4D" strokeWidth="2"/>
                  <path d="M18.2222 12C18.2222 15.3137 15.5359 18 12.2222 18C8.90854 18 6.22223 15.3137 6.22223 12C6.22223 8.68629 8.90854 6 12.2222 6C15.5359 6 18.2222 8.68629 18.2222 12Z" stroke="#FBAB4D" strokeWidth="2"/>
                </svg>
              </div>
              <div className="feature-text">
                <h3>Manifest and trust</h3>
                <p>Create vision board to visualise what you want to achive in your life. Get super clear about it. This way you can take actions needed to go there.</p>
              </div>
            </div>
          </div>

          <div className="clarity-cta">
            <button className="get-started-btn">Get Started</button>
            <button className="play-btn">
              <span className="play-icon">▶</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClaritySection; 