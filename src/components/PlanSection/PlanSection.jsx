import React from 'react';
import './PlanSection.css';

const PlanSection = () => {
  return (
    <div className="plan-section">
      <div className="plan-content">
        <div className="plan-left">
          <div className="tag">The Solutions</div>
          <h2 className="plan-title">
            Plan for <span className="highlight">Success</span>
          </h2>
          <p className="plan-description">
            Building an enterprise level site doesn't need nightmare or cost your
            thousands. Felix is purpose built for ease of use and complete
            flexibility to create even the most powerful of products.
          </p>

          <div className="plan-features">
            <div className="plan-feature">
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" stroke="#56CCF2" strokeWidth="2"/>
                  <path d="M16 2V6M8 2V6M3 10H21" stroke="#56CCF2" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="feature-text">
                <h3>Plan your Week</h3>
                <p>Create a weekly plan to design the entire week so that you manage your time wisely and do not forget any important tasks to finish. If you create the weekly plan before the week starts, you will see how much more you can accomplish just in a week.</p>
              </div>
            </div>

            <div className="plan-feature">
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2Z" stroke="#56CCF2" strokeWidth="2"/>
                  <path d="M14 2V8H20" stroke="#56CCF2" strokeWidth="2"/>
                  <path d="M16 13H8M16 17H8" stroke="#56CCF2" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="feature-text">
                <h3>Write Business plans</h3>
                <p>If you have an idea of a business, write it down. It will help you focus on the specific steps and actions you need to turn the idea into a real successful business. A business plan is an essential tool for entrepreneurs. It is the first step to kickstart your business.</p>
              </div>
            </div>

            <div className="plan-feature">
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15M9 5C9 6.10457 9.89543 7 11 7H13C14.1046 7 15 6.10457 15 5M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5" stroke="#56CCF2" strokeWidth="2"/>
                  <path d="M9 12L11 14L15 10" stroke="#56CCF2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="feature-text">
                <h3>Manage Projects</h3>
                <p>Don't waste time looking for information instead of focusing on the creative work you do best. Focus gives you a central hub to organize all your internal work. When all information is in one place, executing projects becomes far easier.</p>
              </div>
            </div>
          </div>

          <div className="plan-cta">
            <button className="get-started-btn">Get Started</button>
            <button className="play-btn">
              <span className="play-icon">▶</span>
            </button>
          </div>
        </div>

        <div className="plan-right">
          <img src="/solution-3.png" alt="Planning Solution" className="plan-image" />
        </div>
      </div>
    </div>
  );
};

export default PlanSection; 