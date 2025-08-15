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
          <div className="text-left max-w-4xl mb-12">
            <div className="text-xs font-mono uppercase tracking-widest text-amber-400/60 mb-3">{"// What We Deliver"}</div>
            <h1 className="text-3xl md:text-7xl lg:text-8xl font-black leading-none mb-6 font-orbitron" style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #e5e5e5 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: `
                0 1px 0 rgba(255,255,255,0.1),
                0 4px 8px rgba(0,0,0,0.3),
                0 8px 16px rgba(0,0,0,0.2),
                0 0 40px rgba(255,255,255,0.05)
              `
            }}>
              Smart Solutions<br />
              <span style={{
                background: 'linear-gradient(135deg, #ffc107 0%, #ffb300 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: `
                  0 1px 0 rgba(255,193,7,0.1),
                  0 4px 8px rgba(0,0,0,0.3),
                  0 8px 16px rgba(0,0,0,0.2),
                  0 0 40px rgba(255,193,7,0.05)
                `
              }}>For Industry</span>
            </h1>
          </div>
          
          <div className="text-center mb-8">
            <p className="text-xl md:text-xl text-gray-300 font-medium max-w-3xl mx-auto">
              Modern intelligent applications that solve real problems.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8">
            {capabilities.map((capability) => (
              <CapabilityCard 
                key={capability.title} 
                title={capability.title} 
                bullets={capability.bullets} 
                icon={capability.icon} 
              />
            ))}
          </div>
          
          <div className="text-left">
            <p className="text-lg text-gray-400 font-medium">
              Trusted by forward-thinking leaders.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}