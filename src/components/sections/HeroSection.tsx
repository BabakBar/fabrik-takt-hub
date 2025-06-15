
import React, { useState } from 'react';
import { ArrowDown, Mic, Sparkles, Brain, Play, ArrowRight, BarChart3, Cog, Users, CheckCircle } from 'lucide-react';
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
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 text-white min-h-screen flex items-center">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

        <div className="container relative mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8">
              {/* AI-Powered Badge */}
              <div className="inline-flex items-center rounded-full bg-amber-600/20 px-4 py-2 text-sm font-medium text-amber-300 ring-1 ring-amber-500/30">
                <div className="w-5 h-5 bg-amber-500 rounded-full flex items-center justify-center mr-2">
                  <Brain className="w-3 h-3 text-white" />
                </div>
                AI-Powered Intelligence Hub
                <div className="w-2 h-2 bg-green-400 rounded-full ml-2 animate-pulse"></div>
              </div>

              {/* Main Headlines */}
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-white">
                  Your Factory's AI Brain.
                </h1>
                <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-amber-400">
                  Turn Chaos into Clarity.
                </h2>
                <p className="text-xl text-slate-300 max-w-2xl leading-relaxed">
                  FabrikTakt captures hidden knowledge and real-time data, providing actionable insights to empower your team, boost efficiency, and reduce downtime.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={openPilotModal}
                  size="lg" 
                  className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 text-lg font-medium rounded-xl"
                >
                  <Sparkles className="mr-2 h-5 w-5" />
                  Join Pilot Program
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-slate-500 text-slate-300 hover:bg-slate-800 px-8 py-4 text-lg font-medium rounded-xl"
                >
                  See How It Works
                </Button>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-amber-400 mb-1">95%+</div>
                  <div className="text-sm text-slate-400">Recognition Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-amber-400 mb-1">2-3s</div>
                  <div className="text-sm text-slate-400">Processing Speed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-amber-400 mb-1">1000+</div>
                  <div className="text-sm text-slate-400">Knowledge Entries</div>
                </div>
              </div>
            </div>

            {/* Right Column - Interactive Chat Demo */}
            <div className="relative">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-600 rounded-2xl p-6 space-y-4">
                {/* Chat Header */}
                <div className="flex items-center gap-3 pb-4 border-b border-slate-700">
                  <div className="w-10 h-10 bg-amber-500 rounded-2xl flex items-center justify-center">
                    <Brain className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">FabrikTakt Bot</h3>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-sm text-green-400">Online</span>
                    </div>
                  </div>
                </div>

                {/* Voice Message Bubble */}
                <div className="flex justify-end">
                  <div className="bg-amber-500 rounded-2xl rounded-tr-sm p-4 max-w-xs">
                    <div className="flex items-center gap-2 text-white text-sm mb-2">
                      <Mic className="w-4 h-4" />
                      Voice message 0:15
                    </div>
                    <p className="text-white font-medium">
                      CNC machine #452 stopped working
                    </p>
                  </div>
                </div>

                {/* Processing Indicator */}
                <div className="flex items-center gap-2 text-slate-400 px-4">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                  <span className="text-sm">Processing...</span>
                </div>

                {/* AI Response */}
                <div className="bg-slate-700/50 rounded-2xl rounded-bl-sm p-4 space-y-3">
                  <div className="flex items-center gap-2 text-green-400 text-sm font-medium">
                    <CheckCircle className="w-4 h-4" />
                    Solution Found
                  </div>
                  <p className="text-slate-200 text-sm leading-relaxed">
                    Likely issue: Spindle motor failure. Check: Power cable, fuse, and temperature sensor
                  </p>
                  <div className="flex items-center justify-between pt-2 border-t border-slate-600">
                    <div className="flex items-center gap-2 text-green-400 text-sm">
                      <CheckCircle className="w-4 h-4" />
                      Solved in 0.8s
                    </div>
                    <span className="text-slate-400 text-sm">98% match</span>
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
