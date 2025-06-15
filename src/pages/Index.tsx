
import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/sections/HeroSection';
import ProblemSection from '../components/sections/ProblemSection';
import SolutionSection from '../components/sections/SolutionSection';
import SocialProofSection from '../components/sections/SocialProofSection';
import PilotCTASection from '../components/sections/PilotCTASection';
import { CollapsibleSection } from '../components/ui/CollapsibleSection';
import { Button } from '../components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const MinimalSeparator = ({ color = '#e2e8f0' }: { color?: string }) => (
  <div className="section-miniseparator" style={{ background: color ? color : undefined }} aria-hidden="true" />
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Enhanced Hero - Main focal point */}
        <HeroSection />

        <MinimalSeparator color="#e2e8f0" />

        {/* Core Problem/Solution Flow */}
        <div className="relative bg-slate-50 py-8">
          <ProblemSection />
        </div>

        <MinimalSeparator color="#fef3c7" />

        <div className="relative bg-white py-8">
          <SolutionSection />
        </div>

        <MinimalSeparator color="#f1f5f9" />

        {/* Quick Social Proof */}
        <section className="py-12 bg-slate-50">
          <div className="container mx-auto px-4">
            <SocialProofSection />
          </div>
        </section>

        <MinimalSeparator color="#ffe6ba" />

        {/* Progressive Disclosure Sections */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12">
              Explore More Details
            </h2>

            <div className="space-y-6">
              <CollapsibleSection title="🔧 Complete Feature Overview">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Voice-First Interface</h4>
                    <p className="text-sm text-muted-foreground">
                      Workers can capture knowledge through natural speech in Persian or English
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">AI-Powered Analysis</h4>
                    <p className="text-sm text-muted-foreground">
                      Advanced ML models structure unstructured operational data
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <Link to="/features">
                    <Button variant="outline" size="sm">
                      View All Features <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CollapsibleSection>

              <CollapsibleSection title="🏗️ Enterprise Technology Stack">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-slate-50 rounded-lg">
                    <div className="text-2xl mb-2">🧠</div>
                    <h4 className="font-medium">Google Gemini AI</h4>
                    <p className="text-xs text-muted-foreground">Advanced language processing</p>
                  </div>
                  <div className="text-center p-4 bg-slate-50 rounded-lg">
                    <div className="text-2xl mb-2">🗄️</div>
                    <h4 className="font-medium">Supabase</h4>
                    <p className="text-xs text-muted-foreground">Scalable database & storage</p>
                  </div>
                  <div className="text-center p-4 bg-slate-50 rounded-lg">
                    <div className="text-2xl mb-2">🚀</div>
                    <h4 className="font-medium">FastAPI</h4>
                    <p className="text-xs text-muted-foreground">High-performance backend</p>
                  </div>
                </div>
                <div className="mt-4">
                  <Link to="/technology">
                    <Button variant="outline" size="sm">
                      Technical Deep Dive <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CollapsibleSection>

              <CollapsibleSection title="📈 Success Stories & Case Studies">
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                    <h4 className="font-semibold text-green-800">Manufacturing Plant A</h4>
                    <p className="text-sm text-green-700">
                      Reduced equipment downtime by 40% through better knowledge retention
                    </p>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-semibold text-blue-800">Factory B</h4>
                    <p className="text-sm text-blue-700">
                      Improved training efficiency by 60% with structured knowledge base
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <Link to="/case-studies">
                    <Button variant="outline" size="sm">
                      Read Full Case Studies <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </CollapsibleSection>
            </div>
          </div>
        </section>

        <MinimalSeparator color="#fde68a" />

        {/* Final CTA */}
        <div className="relative bg-gradient-to-br from-amber-50/60 to-orange-50/30 py-8">
          <PilotCTASection />
        </div>

        <Footer />
      </main>
    </div>
  );
};

export default Index;
