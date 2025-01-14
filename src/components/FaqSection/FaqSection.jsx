import React, { useState } from 'react';
import './FaqSection.css';

const faqs = [
  {
    id: 1,
    question: 'Contrary to popular belief, Lorem Ipsum is not simply random text',
    answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum been the industry\'s standard dummy text ever since the'
  },
  {
    id: 2,
    question: 'How can I return an item purchased online?',
    answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum been the industry\'s standard dummy text ever since the',
    items: [
      'Listen to what they say about you',
      'Randomised words which.',
      'Internet tend to repeat predefined chunks',
      'Automate multiple scenarios'
    ]
  },
  {
    id: 3,
    question: 'Contrary to popular belief, Lorem?',
    answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum been the industry\'s standard dummy text ever since the'
  },
  {
    id: 4,
    question: 'Contrary to popular belief, Lorem Ipsum?',
    answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum been the industry\'s standard dummy text ever since the'
  },
  {
    id: 5,
    question: 'Lorem Ipsum is not simply random text?',
    answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum been the industry\'s standard dummy text ever since the'
  }
];

const FaqSection = () => {
  const [activeId, setActiveId] = useState(2);
  const [progress, setProgress] = useState(0);

  const handleClick = (id) => {
    setActiveId(activeId === id ? null : id);
    setProgress(Math.min(100, (id / faqs.length) * 100));
  };

  return (
    <div className="faq-section">
      <div className="faq-content">
        <div className="faq-header">
          <h2 className="faq-title">Frequently asked questions</h2>
          <p className="faq-description">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((faq) => (
            <div 
              key={faq.id}
              className={`faq-item ${activeId === faq.id ? 'active' : ''} ${faq.id <= activeId ? 'completed' : ''}`}
              style={{
                '--progress': `${progress}%`
              }}
            >
              <div className="faq-question" onClick={() => handleClick(faq.id)}>
                <div className="question-left">
                  <span className="question-number">{String(faq.id).padStart(2, '0')}</span>
                  <span className="question-text">{faq.question}</span>
                </div>
                <button 
                  className="toggle-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleClick(faq.id);
                  }}
                >
                  {activeId === faq.id ? '−' : '+'}
                </button>
              </div>
              
              <div className={`faq-answer ${activeId === faq.id ? 'show' : ''}`}>
                <p>{faq.answer}</p>
                {faq.items && (
                  <ul className="answer-list">
                    {faq.items.map((item, index) => (
                      <li key={index}>
                        <span className="check-icon">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqSection;