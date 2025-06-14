
import React from 'react';
import { ArrowDown, Mic, Sparkles, Brain, Play } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const HeroSection = () => {
  const { t, language } = useLanguage();

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Enhanced Content */}
            <div className="space-y-10">
              {/* AI Badge with glow effect */}
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-500/20 to-orange-500/20 backdrop-blur-sm border border-amber-500/30 px-6 py-3 rounded-full text-amber-300 font-medium animate-gentle-fade shadow-lg shadow-amber-500/20">
                <Brain className="w-5 h-5 text-amber-400" />
                <span className="text-sm">{language === 'fa' ? 'هوش مصنوعی پیشرفته' : 'Advanced AI Technology'}</span>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>

              <div className="space-y-8">
                <h1 className="text-6xl lg:text-7xl font-bold text-white leading-tight animate-gentle-fade">
                  {t('hero.title')}
                  <br />
                  <span className="bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 bg-clip-text text-transparent">
                    {t('hero.titleAccent')}
                  </span>
                </h1>
                
                <p className="text-2xl text-slate-300 leading-relaxed max-w-2xl animate-gentle-fade font-light">
                  {t('hero.subtitle')}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 animate-gentle-fade">
                <button className="group bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-10 py-5 rounded-2xl text-lg font-semibold transition-all duration-300 shadow-2xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-105 flex items-center justify-center gap-3">
                  <Sparkles className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                  {t('hero.ctaPrimary')}
                  <div className="w-0 group-hover:w-6 transition-all duration-300 overflow-hidden">
                    <Play className="w-6 h-6" />
                  </div>
                </button>
                <button className="group border-2 border-slate-600 text-slate-300 hover:border-amber-500 hover:bg-amber-500/10 hover:text-white px-10 py-5 rounded-2xl text-lg font-semibold transition-all duration-300 backdrop-blur-sm">
                  {t('hero.ctaSecondary')}
                </button>
              </div>

              {/* Enhanced Stats */}
              <div className="grid grid-cols-3 gap-10 pt-12 border-t border-slate-700/50 animate-gentle-fade">
                {[
                  { value: t('hero.stat1'), label: t('hero.stat1Label'), color: 'amber' },
                  { value: t('hero.stat2'), label: t('hero.stat2Label'), color: 'blue' },
                  { value: t('hero.stat3'), label: t('hero.stat3Label'), color: 'green' }
                ].map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className={`text-3xl font-bold mb-2 bg-gradient-to-r ${
                      stat.color === 'amber' ? 'from-amber-400 to-amber-600' :
                      stat.color === 'blue' ? 'from-blue-400 to-blue-600' :
                      'from-green-400 to-green-600'
                    } bg-clip-text text-transparent group-hover:scale-110 transition-transform`}>
                      {stat.value}
                    </div>
                    <div className="text-sm text-slate-400 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Modern Interface Demo */}
            <div className="relative animate-gentle-fade">
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/20 to-blue-500/20 rounded-3xl blur-xl"></div>
                
                <div className="relative bg-slate-800/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-slate-700/50 overflow-hidden">
                  {/* Modern Header */}
                  <div className="bg-gradient-to-r from-slate-700 to-slate-800 px-8 py-6 border-b border-slate-600/50">
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center shadow-lg">
                          <Brain className="text-white w-6 h-6" />
                        </div>
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-slate-800 animate-pulse"></div>
                      </div>
                      <div>
                        <div className="font-bold text-white text-lg">{t('hero.botName')}</div>
                        <div className="text-sm text-slate-400 flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                          {t('hero.botStatus')}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-8 space-y-8 max-h-96 overflow-hidden">
                    {/* User Message with voice indicator */}
                    <div className="flex justify-end">
                      <div className="max-w-sm">
                        <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-white p-6 rounded-3xl rounded-tr-lg shadow-lg">
                          <div className="flex items-center gap-3 mb-3 text-amber-100">
                            <div className="relative">
                              <Mic size={16} />
                              <div className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full animate-ping"></div>
                            </div>
                            <span className="text-xs font-medium">{t('hero.voiceMessage')}</span>
                          </div>
                          <div className="text-sm leading-relaxed">{t('hero.userMessage')}</div>
                        </div>
                      </div>
                    </div>

                    {/* AI Thinking indicator */}
                    <div className="flex justify-start">
                      <div className="bg-slate-700/50 backdrop-blur-sm border border-slate-600/50 text-slate-300 p-4 rounded-2xl flex items-center gap-3">
                        <div className="flex gap-1">
                          <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce delay-100"></div>
                          <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce delay-200"></div>
                        </div>
                        <span className="text-sm">Processing...</span>
                      </div>
                    </div>

                    {/* AI Response */}
                    <div className="flex justify-start">
                      <div className="max-w-sm bg-slate-700/50 backdrop-blur-sm border border-slate-600/50 text-white p-6 rounded-3xl rounded-tl-lg shadow-lg">
                        <div className="text-sm leading-relaxed mb-4">
                          {t('hero.botResponse')}
                        </div>
                      </div>
                    </div>

                    {/* Solution with enhanced styling */}
                    <div className="flex justify-start">
                      <div className="max-w-sm bg-gradient-to-br from-green-900/30 to-emerald-900/30 backdrop-blur-sm border border-green-500/30 text-white p-6 rounded-3xl shadow-lg">
                        <div className="flex items-center gap-2 text-green-400 font-semibold mb-3 text-sm">
                          <Sparkles className="w-4 h-4 animate-pulse" />
                          {t('hero.solutionFound')}
                        </div>
                        <div className="text-sm leading-relaxed">{t('hero.solutionText')}</div>
                        <div className="mt-3 text-xs text-green-300 font-medium">
                          ⚡ Solved in 0.8s
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center gap-4 text-slate-400 group cursor-pointer">
          <span className="text-sm font-medium group-hover:text-amber-400 transition-colors">
            {language === 'fa' ? 'ادامه مطالب' : 'Explore More'}
          </span>
          <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center group-hover:border-amber-500 transition-colors">
            <div className="w-1 h-3 bg-slate-500 rounded-full mt-2 animate-bounce group-hover:bg-amber-400"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
