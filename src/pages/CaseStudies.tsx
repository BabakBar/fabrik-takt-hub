
import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import SocialProofSection from '../components/sections/SocialProofSection';

export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center mb-8">
            Success Stories & Case Studies
          </h1>
          <SocialProofSection />
          {/* Add detailed case study content here */}
        </div>
      </main>
      <Footer />
    </div>
  );
}
