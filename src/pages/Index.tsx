
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
        <div className="py-16">
          <ProblemSection />
        </div>

        <div className="py-16">
          <SolutionSection />
        </div>

        {/* Quick Social Proof */}
        <div className="py-16">
          <SocialProofSection />
        </div>



        <Footer />
      </main>
    </div>
  );
};

export default Index;
