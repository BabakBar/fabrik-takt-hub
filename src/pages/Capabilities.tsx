import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import SEO from '../components/SEO';
import CapabilityCard from '../components/CapabilityCard';
import { capabilities } from '../data/capabilities';

export default function Capabilities() {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Capabilities — FabrikTakt"
        description="Six core capabilities: AI/ML, Computer Vision, Data & Analytics, Cloud & DevOps, ERP & Integration, and Custom Applications."
        canonical="https://fabriktakt.com/capabilities"
      />
      <Header />
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-8">
            <div className="text-sm font-medium text-primary/80 mb-2">Our Core Services</div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">Capabilities</h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              AI applications for operations—built fast, built right.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {capabilities.map((capability) => (
              <CapabilityCard 
                key={capability.title} 
                title={capability.title} 
                bullets={capability.bullets} 
                icon={capability.icon} 
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}