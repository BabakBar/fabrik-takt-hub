
import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import TechStackSection from '../components/sections/TechStackSection';

export default function Technology() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center mb-8">
            Enterprise Technology Stack
          </h1>
          <TechStackSection />
          {/* Add detailed technical content here */}
        </div>
      </main>
      <Footer />
    </div>
  );
}
