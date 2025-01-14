import React from 'react';
import './FeaturesSection.css';

const features = [
  {
    icon: '♻️',
    title: 'Natural Language Interaction',
    description: 'Lorem ipsum dolor sit amet consectetur. Varius ornare id nullam massa lectus est in convallis. Urna etiam ut massa.',
    bgColor: '#FFF',
    borderColor: 'rgba(255, 155, 155, 0.2)',
    iconBg: 'linear-gradient(135deg, #FF9B9B, #FF7070)',
    iconBoxShadow: '0 8px 24px rgba(255, 155, 155, 0.25)'
  },
  {
    icon: '💡',
    title: 'Idea Storage and Management',
    description: 'Lorem ipsum dolor sit amet consectetur. Varius ornare id nullam massa lectus est in convallis. Urna etiam ut massa.',
    bgColor: '#FFF',
    borderColor: 'rgba(139, 127, 232, 0.2)',
    iconBg: 'linear-gradient(135deg, #8B7FE8, #7667D0)',
    iconBoxShadow: '0 8px 24px rgba(139, 127, 232, 0.25)'
  },
  {
    icon: '📈',
    title: 'Achievement Tracking',
    description: 'Lorem ipsum dolor sit amet consectetur. Varius ornare id nullam massa lectus est in convallis. Urna etiam ut massa.',
    bgColor: '#FFF',
    borderColor: 'rgba(100, 200, 255, 0.2)',
    iconBg: 'linear-gradient(135deg, #64C8FF, #50A5FF)',
    iconBoxShadow: '0 8px 24px rgba(100, 200, 255, 0.25)'
  },
  {
    icon: '⚙️',
    title: 'Goal Settings',
    description: 'Lorem ipsum dolor sit amet consectetur. Varius ornare id nullam massa lectus est in convallis. Urna etiam ut massa.',
    bgColor: '#FFF',
    borderColor: 'rgba(255, 150, 255, 0.2)',
    iconBg: 'linear-gradient(135deg, #FF96FF, #FF70FF)',
    iconBoxShadow: '0 8px 24px rgba(255, 150, 255, 0.25)'
  },
  {
    icon: '😊',
    title: 'Daily Diary',
    description: 'Lorem ipsum dolor sit amet consectetur. Varius ornare id nullam massa lectus est in convallis. Urna etiam ut massa.',
    bgColor: '#FFF',
    borderColor: 'rgba(150, 255, 150, 0.2)',
    iconBg: 'linear-gradient(135deg, #96FF96, #70FF70)',
    iconBoxShadow: '0 8px 24px rgba(150, 255, 150, 0.25)'
  },
  {
    icon: '👥',
    title: 'Projects',
    description: 'Lorem ipsum dolor sit amet consectetur. Varius ornare id nullam massa lectus est in convallis. Urna etiam ut massa.',
    bgColor: '#FFF',
    borderColor: 'rgba(255, 181, 107, 0.2)',
    iconBg: 'linear-gradient(135deg, #FFB56B, #FF9B4D)',
    iconBoxShadow: '0 8px 24px rgba(255, 181, 107, 0.25)'
  }
];

const FeaturesSection = () => {
  return (
    <section className="features-section">
      <div className="features-content">
        <div className="features-header">
          <div className="features-left">
            <div className="features-tag">Our Facilitations</div>
            <div className="features-title">
              Take your <span className="highlight">"crazy ideas"</span> seriously,
              <br />write them down in focus.
            </div>
          </div>
          <div className="features-cta">
            <span>We have 15+ other services</span>
            <button className="discover-btn">
              Discover more
              <span className="arrow">→</span>
            </button>
          </div>
        </div>

        <div className="features-decorative">
          <div className="features-shape circle-decor circle-1"></div>
          <div className="features-shape circle-decor circle-2"></div>
          <div className="features-shape dots-grid dots-1">
            {[...Array(9)].map((_, i) => <div key={i} className="dot"></div>)}
          </div>
          <div className="features-shape dots-grid dots-2">
            {[...Array(9)].map((_, i) => <div key={i} className="dot"></div>)}
          </div>
        </div>

        <div className="features-floating-shapes">
          <div className="feature-shape feature-dot feature-dot-1"></div>
          <div className="feature-shape feature-dot feature-dot-2"></div>
          <div className="feature-shape feature-dot feature-dot-3"></div>
          <div className="feature-shape feature-line feature-line-1"></div>
          <div className="feature-shape feature-line feature-line-2"></div>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card"
              style={{ 
                background: feature.bgColor,
                border: `1px solid ${feature.borderColor}`
              }}
            >
              <div 
                className="feature-icon"
                style={{ 
                  background: feature.iconBg,
                  boxShadow: feature.iconBoxShadow
                }}
              >
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection; 