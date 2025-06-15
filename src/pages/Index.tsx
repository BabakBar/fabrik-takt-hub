
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

const Index = () => {
  return (
    <div className="min-h-screen bg-white relative">
      <Header />
      
      <div className="pt-20 relative">
        {/* Hero Section */}
        <div className="relative">
          <HeroSection />
          {/* Subtle wave separator */}
          <div className="absolute bottom-0 left-0 right-0 h-16">
            <svg className="w-full h-full" viewBox="0 0 1440 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 32L60 37.3C120 43 240 53 360 48C480 43 600 21 720 16C840 11 960 21 1080 26.7C1200 32 1320 32 1380 32L1440 32V64H1380C1320 64 1200 64 1080 64C960 64 840 64 720 64C600 64 480 64 360 64C240 64 120 64 60 64H0V32Z" fill="#f8fafc"/>
            </svg>
          </div>
        </div>

        {/* Problem Section */}
        <div className="relative bg-slate-50 py-24">
          <ProblemSection />
          {/* Minimal geometric separator */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
        </div>

        {/* Solution Section */}
        <div className="relative bg-white py-24">
          {/* Subtle floating elements */}
          <div className="absolute top-20 left-1/4 w-2 h-2 bg-amber-400/30 rounded-full animate-pulse"></div>
          <div className="absolute bottom-32 right-1/3 w-1 h-8 bg-blue-400/20 rounded-full animate-drift"></div>
          <SolutionSection />
        </div>

        {/* Clean diagonal separator */}
        <div className="relative h-24 bg-gradient-to-br from-white to-slate-50">
          <div className="absolute top-0 left-0 w-full h-full">
            <svg className="w-full h-full" viewBox="0 0 1440 96" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0L1440 32V96H0V0Z" fill="#f8fafc"/>
            </svg>
          </div>
        </div>

        {/* Features Section */}
        <div className="relative bg-slate-50 py-24">
          {/* Minimal accent dots */}
          <div className="absolute top-16 right-20 w-1 h-1 bg-amber-500/40 rounded-full"></div>
          <div className="absolute bottom-20 left-16 w-1 h-1 bg-blue-500/40 rounded-full"></div>
          <FeaturesSection />
        </div>

        {/* Tech Stack transition */}
        <div className="relative h-16 bg-gradient-to-b from-slate-50 to-white">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-px bg-gradient-to-r from-transparent via-slate-400/30 to-transparent"></div>
        </div>

        {/* Tech Stack Section */}
        <div className="relative bg-white py-24">
          {/* Subtle tech lines */}
          <div className="absolute top-1/3 left-0 w-16 h-px bg-gradient-to-r from-transparent to-amber-300/40"></div>
          <div className="absolute bottom-1/2 right-0 w-20 h-px bg-gradient-to-l from-transparent to-blue-300/40"></div>
          <TechStackSection />
        </div>

        {/* Modern dark transition */}
        <div className="relative h-32 bg-gradient-to-b from-white via-slate-100 to-slate-900">
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-amber-500/10 rounded-full blur-xl animate-pulse"></div>
        </div>

        {/* Examples Section */}
        <div className="relative bg-slate-900 text-white py-24">
          {/* Subtle glowing accents */}
          <div className="absolute top-24 left-1/5 w-6 h-6 bg-amber-400/20 rounded-full blur-sm animate-float"></div>
          <div className="absolute bottom-32 right-1/4 w-4 h-4 bg-blue-400/20 rounded-full blur-sm animate-float delay-1000"></div>
          <ExamplesSection />
        </div>

        {/* Clean light transition */}
        <div className="relative h-20 bg-gradient-to-b from-slate-900 to-white">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-2 h-2 bg-white/20 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Social Proof Section */}
        <div className="relative bg-white py-24">
          <SocialProofSection />
        </div>

        {/* Final CTA transition */}
        <div className="relative h-12 bg-gradient-to-b from-white to-amber-50/50">
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-40 h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent"></div>
        </div>

        {/* Final CTA Section */}
        <div className="relative bg-gradient-to-br from-amber-50/50 to-orange-50/30 py-24">
          {/* Minimal floating accents */}
          <div className="absolute top-12 right-12 w-3 h-3 bg-amber-300/20 rounded-full blur-sm"></div>
          <div className="absolute bottom-12 left-12 w-2 h-2 bg-orange-300/20 rounded-full blur-sm"></div>
          <PilotCTASection />
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Index;
