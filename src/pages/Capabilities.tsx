import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import SEO from '../components/SEO';
import CapabilityCard from '../components/CapabilityCard';
import { Brain, Camera, Database, Cloud, Workflow, Code } from 'lucide-react';

const capabilities = [
  { 
    title: "AI/ML", 
    bullets: [
      "Model design & evaluation", 
      "LLM orchestration for ops", 
      "MLOps pipelines"
    ], 
    icon: <Brain /> 
  },
  { 
    title: "Computer Vision", 
    bullets: [
      "Visual inspection & detection", 
      "OCR / doc intelligence", 
      "Edge and on‑prem deployment"
    ], 
    icon: <Camera /> 
  },
  { 
    title: "Data & Analytics", 
    bullets: [
      "Pipelines & warehousing", 
      "BI dashboards & metrics", 
      "Governance & data quality"
    ], 
    icon: <Database /> 
  },
  { 
    title: "Cloud & DevOps", 
    bullets: [
      "Cloud architecture", 
      "Containers, CI/CD", 
      "Reliability & cost optimization"
    ], 
    icon: <Cloud /> 
  },
  { 
    title: "ERP & Integration", 
    bullets: [
      "Implementation & migration", 
      "Workflow automation", 
      "API & data synchronization"
    ], 
    icon: <Workflow /> 
  },
  { 
    title: "Custom Applications", 
    bullets: [
      "Web/mobile applications", 
      "Integrations & tooling", 
      "Secure, scalable design"
    ], 
    icon: <Code /> 
  }
];

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
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">Capabilities</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              High‑tech services that turn chaos into clarity. From AI/ML and Computer Vision 
              to Data, Cloud, and ERP integration—built fast, built right.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
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