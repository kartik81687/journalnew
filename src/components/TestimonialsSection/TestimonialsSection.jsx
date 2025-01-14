import React, { useState } from 'react';
import './TestimonialsSection.css';

const testimonials = [
  {
    id: 1,
    name: 'Mick G.',
    role: 'Head of Sales and Marketing',
    rating: 4.5,
    image: '/avatars/avatar1.png',
    text: 'Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry\'s standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
  },
  {
    id: 2,
    name: 'Sarah L.',
    role: 'Product Designer',
    rating: 5,
    image: '/avatars/avatar2.png',
    text: 'Incredible tool that has transformed how we handle our daily tasks. The interface is intuitive, and the features are exactly what we needed. Highly recommend for any team looking to improve their productivity.'
  },
  {
    id: 3,
    name: 'John D.',
    role: 'Tech Lead',
    rating: 4.5,
    image: '/avatars/avatar3.png',
    text: 'We\'ve tried many productivity tools, but this one stands out. The natural language processing is impressive, and the integration with our existing workflow was seamless. Great job!'
  },
  {
    id: 4,
    name: 'Emma W.',
    role: 'Project Manager',
    rating: 5,
    image: '/avatars/avatar4.png',
    text: 'This tool has significantly improved our team\'s efficiency. The ability to track achievements and set goals has made a real difference in how we approach our projects.'
  }
];

const ProfileIcon = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="64" height="64" rx="32" fill="currentColor" fillOpacity="0.1"/>
    <path d="M32 32C37.5228 32 42 27.5228 42 22C42 16.4772 37.5228 12 32 12C26.4772 12 22 16.4772 22 22C22 27.5228 26.4772 32 32 32Z" fill="currentColor"/>
    <path d="M32 36C23.7157 36 17 42.7157 17 51C17 51.5523 17.4477 52 18 52H46C46.5523 52 47 51.5523 47 51C47 42.7157 40.2843 36 32 36Z" fill="currentColor"/>
  </svg>
);

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageError, setImageError] = useState({});

  const handleImageError = (id) => {
    setImageError(prev => ({...prev, [id]: true}));
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="testimonials-section">
      <div className="decorative-shapes">
        <div className="shape circle circle-1"></div>
        <div className="shape circle circle-2"></div>
        <div className="shape circle circle-3"></div>
        
        <div className="shape dots-group dots-1">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="dot-item"></div>
          ))}
        </div>
        
        <div className="shape dots-group dots-2">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="dot-item"></div>
          ))}
        </div>
        
        <div className="shape floating-card card-1">
          <div className="card-content"></div>
        </div>
        
        <div className="shape floating-card card-2">
          <div className="card-content"></div>
        </div>
        
        <div className="shape sparkle sparkle-1"></div>
        <div className="shape sparkle sparkle-2"></div>
        <div className="shape sparkle sparkle-3"></div>
        
        <div className="shape line line-1"></div>
        <div className="shape line line-2"></div>
      </div>

      <div className="testimonials-content">
        <div className="testimonials-header">
          <div className="tag">Why Us?</div>
          <h2 className="testimonials-title">Our happy family</h2>
        </div>

        <div className="testimonials-slider">
          <div className="testimonial-card">
            <div className="quote-icon">"</div>
            <div className="testimonial-profile">
              <div className="profile-image-wrapper">
                {testimonials[currentIndex].image && !imageError[testimonials[currentIndex].id] ? (
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].name} 
                    className="profile-image"
                    onError={() => handleImageError(testimonials[currentIndex].id)}
                  />
                ) : (
                  <ProfileIcon />
                )}
              </div>
              <div className="profile-info">
                <h3>{testimonials[currentIndex].name}</h3>
                <p>{testimonials[currentIndex].role}</p>
                <div className="rating">
                  {[...Array(5)].map((_, i) => (
                    <span 
                      key={i} 
                      className={`star ${i < Math.floor(testimonials[currentIndex].rating) ? 'filled' : ''} 
                        ${i === Math.floor(testimonials[currentIndex].rating) && 
                        testimonials[currentIndex].rating % 1 !== 0 ? 'half-filled' : ''}`}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <p className="testimonial-text">{testimonials[currentIndex].text}</p>
          </div>

          <div className="slider-controls">
            <button 
              className="slider-btn prev" 
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
            >
              ←
            </button>
            <div className="slider-dots">
              {testimonials.map((_, index) => (
                <span 
                  key={index}
                  className={`dot ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
            <button 
              className="slider-btn next" 
              onClick={nextTestimonial}
              aria-label="Next testimonial"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 