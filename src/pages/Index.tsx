
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
    <div className="min-h-screen bg-white relative overflow-hidden">
      <Header />
      <div className="pt-20 relative">
        {/* Hero with gradient overlay */}
        <div className="relative">
          <HeroSection />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-slate-50 pointer-events-none"></div>
        </div>

        {/* Problem section with subtle background */}
        <div className="relative bg-slate-50">
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white to-transparent pointer-events-none"></div>
          <ProblemSection />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-white pointer-events-none"></div>
        </div>

        {/* Solution section with decorative elements */}
        <div className="relative bg-white">
          {/* Decorative shape */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-100/40 rounded-full blur-3xl pointer-events-none"></div>
          <SolutionSection />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-slate-50 pointer-events-none"></div>
        </div>

        {/* Features with overlapping background */}
        <div className="relative bg-slate-50">
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white to-transparent pointer-events-none"></div>
          {/* Subtle geometric pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-10 w-4 h-4 bg-amber-500 rotate-45"></div>
            <div className="absolute top-40 right-20 w-3 h-3 bg-blue-500 rounded-full"></div>
            <div className="absolute bottom-60 left-1/3 w-5 h-5 bg-green-500 rotate-12"></div>
            <div className="absolute bottom-40 right-1/3 w-4 h-4 bg-purple-500 rounded-full"></div>
          </div>
          <FeaturesSection />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-white pointer-events-none"></div>
        </div>

        {/* Tech Stack with dynamic background */}
        <div className="relative bg-white">
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-slate-50 to-transparent pointer-events-none"></div>
          {/* Tech-inspired decorative elements */}
          <div className="absolute top-1/4 left-0 w-64 h-1 bg-gradient-to-r from-transparent via-amber-200 to-transparent"></div>
          <div className="absolute bottom-1/3 right-0 w-64 h-1 bg-gradient-to-l from-transparent via-blue-200 to-transparent"></div>
          <TechStackSection />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-slate-900 pointer-events-none"></div>
        </div>

        {/* Examples section with dark transition */}
        <div className="relative bg-slate-900 text-white">
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white to-transparent pointer-events-none"></div>
          {/* Glowing accents */}
          <div className="absolute top-20 left-1/4 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-20 right-1/4 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
          <ExamplesSection />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-white pointer-events-none"></div>
        </div>

        {/* Social Proof with clean transition */}
        <div className="relative bg-white">
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-slate-900 to-transparent pointer-events-none"></div>
          <SocialProofSection />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-amber-50 pointer-events-none"></div>
        </div>

        {/* Final CTA with warm background */}
        <div className="relative bg-gradient-to-br from-amber-50 to-orange-50">
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white to-transparent pointer-events-none"></div>
          {/* Final decorative elements */}
          <div className="absolute top-10 right-10 w-24 h-24 bg-amber-200/30 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 left-10 w-32 h-32 bg-orange-200/20 rounded-full blur-xl"></div>
          <PilotCTASection />
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Index;
