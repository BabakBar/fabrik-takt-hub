
import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/sections/HeroSection';
import ProblemSection from '../components/sections/ProblemSection';
import SolutionSection from '../components/sections/SolutionSection';
import SocialProofSection from '../components/sections/SocialProofSection';





const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Enhanced Hero - Main focal point */}
        <HeroSection />

        {/* Core Problem/Solution Flow */}
        <ProblemSection />

        <SolutionSection />

        {/* Quick Social Proof */}
        <SocialProofSection />



        <Footer />
      </main>
    </div>
  );
};

export default Index;
