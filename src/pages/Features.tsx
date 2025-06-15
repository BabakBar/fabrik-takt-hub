
import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import FeaturesSection from '../components/sections/FeaturesSection';

export default function Features() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center mb-8">
            Complete Feature Overview
          </h1>
          <FeaturesSection />
          {/* Add detailed feature content here */}
        </div>
      </main>
      <Footer />
    </div>
  );
}
