import React from 'react';
import Header from '../components/layout/Header';
import HeroSection from '../components/sections/HeroSection';
import ProblemSection from '../components/sections/ProblemSection';
import SolutionSection from '../components/sections/SolutionSection';
import FeaturesSection from '../components/sections/FeaturesSection';
import TechStackSection from '../components/sections/TechStackSection';
import ExamplesSection from '../components/sections/ExamplesSection';
import SocialProofSection from '../components/sections/SocialProofSection';
import PilotCTASection from '../components/sections/PilotCTASection';
import Footer from '../components/layout/Footer';

const MinimalSeparator = ({ color = '#e2e8f0' }: { color?: string }) => (
  <div className="w-full flex items-center justify-center relative z-10">
    <svg width="100%" height="8" viewBox="0 0 1440 8" fill="none" className="min-h-[8px]">
      <line x1="0" y1="4" x2="1440" y2="4" stroke={color} strokeWidth="2" strokeDasharray="8 8" />
    </svg>
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-white relative">
      <Header />
      <div className="pt-20 relative">
        {/* Hero Section */}
        <div className="relative">
          <HeroSection />
        </div>

        {/* Minimal separator */}
        <div className="section-transition" />

        {/* Problem Section */}
        <div className="relative bg-slate-50 py-20">
          <ProblemSection />
        </div>

        <MinimalSeparator color="#F59E0B33" />

        {/* Solution Section */}
        <div className="relative bg-white py-20">
          <SolutionSection />
        </div>

        <MinimalSeparator color="#d1d5db" />

        {/* Features Section */}
        <div className="relative bg-slate-50 py-20">
          <FeaturesSection />
        </div>

        <MinimalSeparator color="#0f172a13" />

        {/* Tech Stack Section */}
        <div className="relative bg-white py-20">
          <TechStackSection />
        </div>

        {/* Examples Section, keep dark for strong contrast */}
        <div className="relative bg-slate-900 text-white py-20">
          <ExamplesSection />
        </div>

        <MinimalSeparator color="#fff3" />

        {/* Social Proof Section */}
        <div className="relative bg-white py-20">
          <SocialProofSection />
        </div>

        {/* Final CTA Section */}
        <div className="relative bg-gradient-to-br from-amber-50/50 to-orange-50/30 py-20">
          <PilotCTASection />
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Index;
