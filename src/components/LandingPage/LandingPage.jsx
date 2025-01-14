import React from 'react';
import Navbar from '../Navbar/Navbar';
import HeroSection from '../HeroSection/HeroSection';
import FeaturesSection from '../FeaturesSection/FeaturesSection';
import ScrollingSections from '../ScrollingSections/ScrollingSections';
import SolutionsSection from '../SolutionsSection/SolutionsSection';
import ClaritySection from '../ClaritySection/ClaritySection';
import PlanSection from '../PlanSection/PlanSection';
import WhyUsSection from '../WhyUsSection/WhyUsSection';
import TestimonialsSection from '../TestimonialsSection/TestimonialsSection';
import FaqSection from '../FaqSection/FaqSection';
import Footer from '../Footer/Footer';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="background-pattern"></div>
      <Navbar />
      <ScrollingSections>
        <HeroSection />
        <FeaturesSection />
        <SolutionsSection />
        <ClaritySection />
        <PlanSection />
        <WhyUsSection />
        <TestimonialsSection />
        <FaqSection />
        <Footer />
      </ScrollingSections>
    </div>
  );
};

export default LandingPage; 