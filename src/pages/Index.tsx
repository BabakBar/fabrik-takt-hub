
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
  <div className="section-miniseparator" style={{ background: color ? color : undefined }} aria-hidden="true" />
);

const Index = () => {
  return (
    <div className="min-h-screen bg-white relative">
      <Header />
      <div className="pt-14 relative">
        {/* Hero Section */}
        <div className="relative py-8">
          <HeroSection />
        </div>

        <MinimalSeparator color="#e2e8f0" />

        {/* Problem Section */}
        <div className="relative bg-slate-50 py-8">
          <ProblemSection />
        </div>

        <MinimalSeparator color="#fef3c7" />

        {/* Solution Section */}
        <div className="relative bg-white py-8">
          <SolutionSection />
        </div>

        <MinimalSeparator color="#f1f5f9" />

        {/* Features Section */}
        <div className="relative bg-slate-50 py-8">
          <FeaturesSection />
        </div>

        <MinimalSeparator color="#ffe6ba" />

        {/* Tech Stack Section */}
        <div className="relative bg-white py-8">
          <TechStackSection />
        </div>

        <MinimalSeparator color="#0f172a10" />

        {/* Examples Section */}
        <div className="relative bg-slate-900 text-white py-8">
          <ExamplesSection />
        </div>

        <MinimalSeparator color="#fff4" />

        {/* Social Proof Section */}
        <div className="relative bg-white py-8">
          <SocialProofSection />
        </div>

        <MinimalSeparator color="#fde68a" />

        {/* Final CTA Section */}
        <div className="relative bg-gradient-to-br from-amber-50/50 to-orange-50/30 py-8">
          <PilotCTASection />
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Index;

