
import React, { useState } from 'react';
import { ArrowDown, Mic, Sparkles, Brain, Play, ArrowRight, BarChart3, Cog, Users } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import PilotModal from '../modals/PilotModal';
import { Button } from '../ui/button';
import { Card } from '../ui/card';

const HeroSection = () => {
  const { t, language } = useLanguage();
  const [isPilotModalOpen, setIsPilotModalOpen] = useState(false);

  const openPilotModal = () => setIsPilotModalOpen(true);
  const closePilotModal = () => setIsPilotModalOpen(false);

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

        <div className="container relative mx-auto px-4 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8">
              {/* Problem */}
              <div className="space-y-4">
                <div className="inline-flex items-center rounded-full bg-red-500/10 px-3 py-1 text-sm font-medium text-red-300 ring-1 ring-red-500/20">
                  ❌ Manufacturing Challenge
                </div>
                <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                  Turn Manufacturing
                  <span className="text-orange-400"> Chaos </span>
                  into
                  <span className="text-green-400"> Clarity</span>
                </h1>
                <p className="text-xl text-slate-300 max-w-2xl">
                  {language === 'fa' 
                    ? 'از دست دادن دانش حیاتی هنگام ترک کارگران باتجربه را متوقف کنید. بینش‌های عملیاتی را فوراً ثبت، ساختار و بازیابی کنید.'
                    : 'Stop losing critical knowledge when experienced workers leave. Capture, structure, and retrieve operational insights instantly.'
                  }
                </p>
              </div>

              {/* Solution Preview */}
              <div className="grid grid-cols-3 gap-4">
                <Card className="bg-slate-800/50 border-slate-700 p-4 text-center">
                  <Users className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                  <p className="text-sm text-slate-300">Voice-First</p>
                  <p className="text-xs text-slate-400">Natural input</p>
                </Card>
                <Card className="bg-slate-800/50 border-slate-700 p-4 text-center">
                  <Cog className="h-8 w-8 text-purple-400 mx-auto mb-2" />
                  <p className="text-sm text-slate-300">AI-Powered</p>
                  <p className="text-xs text-slate-400">Smart analysis</p>
                </Card>
                <Card className="bg-slate-800/50 border-slate-700 p-4 text-center">
                  <BarChart3 className="h-8 w-8 text-green-400 mx-auto mb-2" />
                  <p className="text-sm text-slate-300">Instant ROI</p>
                  <p className="text-xs text-slate-400">Proven results</p>
                </Card>
              </div>

              {/* Outcome Metrics */}
              <div className="grid grid-cols-3 gap-6 py-6 border-t border-slate-700">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">100%</div>
                  <div className="text-sm text-slate-400">ROI in 6 months</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">2-3x</div>
                  <div className="text-sm text-slate-400">Productivity boost</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">90%</div>
                  <div className="text-sm text-slate-400">Knowledge retention</div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={openPilotModal}
                  size="lg" 
                  className="bg-orange-500 hover:bg-orange-600 text-white"
                >
                  Get Free AI Audit
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800">
                  Watch 2-Min Demo
                </Button>
              </div>
            </div>

            {/* Right Column - Interactive Visual */}
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-orange-500/20 to-purple-500/20 p-8 backdrop-blur-sm border border-slate-700">
                {/* Interactive Dashboard Preview */}
                <div className="h-full w-full rounded-lg bg-slate-900/80 p-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold">Knowledge Dashboard</h3>
                      <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></div>
                    </div>

                    {/* Simulated Data */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-800/50">
                        <div className="h-8 w-8 rounded-full bg-orange-500/20 flex items-center justify-center">
                          🔧
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-slate-300">Machine M-401 Issue</p>
                          <p className="text-xs text-slate-500">Solved in 15 min</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-800/50">
                        <div className="h-8 w-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                          ⚡
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-slate-300">Quality Check Protocol</p>
                          <p className="text-xs text-slate-500">Updated automatically</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-800/50">
                        <div className="h-8 w-8 rounded-full bg-green-500/20 flex items-center justify-center">
                          📊
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-slate-300">Productivity Report</p>
                          <p className="text-xs text-slate-500">+23% this week</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pilot Modal */}
      <PilotModal isOpen={isPilotModalOpen} onClose={closePilotModal} />
    </>
  );
};

export default HeroSection;
