
import React from 'react';
import { ArrowDown, Mic, Sparkles, Zap, Brain } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const HeroSection = () => {
  const { t, language } = useLanguage();

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
      {/* Animated Background Effects */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-amber-400/20 to-orange-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Floating AI Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-400/30 rounded-full animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Content */}
          <div className="text-center lg:text-right space-y-8">
            {/* AI Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-400/30 px-6 py-3 rounded-full text-blue-200 font-semibold animate-fade-in">
              <Brain className="w-5 h-5" />
              <span>{language === 'fa' ? 'هوش مصنوعی پیشرفته' : 'Next-Gen AI Technology'}</span>
              <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
            </div>

            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-amber-400 bg-clip-text text-transparent animate-fade-in">
                  {t('hero.title')}
                </span>
                <br />
                <span className="text-amber-400 animate-fade-in delay-200">{t('hero.titleAccent')}</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed animate-fade-in delay-300">
                {t('hero.subtitle')}
              </p>
              
              <p className="text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 animate-fade-in delay-400">
                {t('hero.description')}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end animate-fade-in delay-500">
              <button className="group relative bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all duration-300 shadow-2xl hover:shadow-amber-500/25 transform hover:scale-105 hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-orange-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  {t('hero.ctaPrimary')}
                </div>
              </button>
              <button className="group border-2 border-blue-400/50 text-blue-200 hover:bg-blue-400/10 hover:border-blue-400 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 backdrop-blur-sm">
                {t('hero.ctaSecondary')}
              </button>
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-blue-400/20 animate-fade-in delay-700">
              <div className="text-center group hover:scale-105 transition-transform">
                <div className="text-3xl font-bold text-amber-400 mb-2">{t('hero.stat1')}</div>
                <div className="text-sm text-blue-200">{t('hero.stat1Label')}</div>
                <div className="w-full h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent mt-2 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="text-center group hover:scale-105 transition-transform">
                <div className="text-3xl font-bold text-blue-400 mb-2">{t('hero.stat2')}</div>
                <div className="text-sm text-blue-200">{t('hero.stat2Label')}</div>
                <div className="w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent mt-2 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="text-center group hover:scale-105 transition-transform">
                <div className="text-3xl font-bold text-purple-400 mb-2">{t('hero.stat3')}</div>
                <div className="text-sm text-blue-200">{t('hero.stat3Label')}</div>
                <div className="w-full h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent mt-2 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </div>
          </div>

          {/* Enhanced Visual */}
          <div className="relative animate-fade-in delay-600">
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl shadow-2xl p-8 max-w-md mx-auto border border-white/20">
              {/* Telegram Interface Mockup */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-4 rounded-t-2xl flex items-center gap-3">
                <div className="relative w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <Brain className="text-blue-500 w-6 h-6" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white animate-pulse"></div>
                </div>
                <div>
                  <div className="font-bold text-lg">{t('hero.botName')}</div>
                  <div className="text-xs text-blue-200 flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    {t('hero.botStatus')}
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-b from-slate-50 to-slate-100 p-6 space-y-4 h-80 overflow-hidden">
                {/* Voice Message */}
                <div className="flex justify-end animate-slide-in-right">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 rounded-2xl rounded-tr-md max-w-xs shadow-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <Mic size={16} className="animate-pulse" />
                      <span className="text-xs font-semibold">{t('hero.voiceMessage')}</span>
                    </div>
                    <div className="text-sm font-medium">
                      {t('hero.userMessage')}
                    </div>
                  </div>
                </div>

                {/* AI Thinking Animation */}
                <div className="flex justify-start">
                  <div className="bg-white p-4 rounded-2xl rounded-tl-md shadow-sm max-w-xs border">
                    <div className="flex items-center gap-2 text-slate-600">
                      <Brain className="w-4 h-4 text-blue-500 animate-pulse" />
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-100"></div>
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-200"></div>
                      </div>
                      <span className="text-xs font-medium">AI analyzing...</span>
                    </div>
                  </div>
                </div>

                {/* AI Response */}
                <div className="flex justify-start animate-slide-in-left delay-1000">
                  <div className="bg-white p-4 rounded-2xl rounded-tl-md shadow-lg max-w-xs border-l-4 border-blue-400">
                    <div className="text-sm text-slate-700 font-medium" style={{ whiteSpace: 'pre-line' }}>
                      {t('hero.botResponse')}
                    </div>
                  </div>
                </div>

                {/* Search Result */}
                <div className="flex justify-start animate-slide-in-left delay-1500">
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-400 p-4 rounded-2xl rounded-tl-md max-w-xs shadow-lg">
                    <div className="flex items-center gap-1 text-green-600 font-bold mb-1 text-xs">
                      <Sparkles className="w-3 h-3" />
                      {t('hero.solutionFound')}
                    </div>
                    <div className="text-sm text-slate-700 font-medium">
                      {t('hero.solutionText')}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 bg-gradient-to-r from-amber-500 to-orange-500 text-white p-4 rounded-full shadow-2xl animate-bounce">
              <Mic size={24} />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-green-500 to-emerald-500 text-white p-4 rounded-full shadow-2xl">
              <Brain size={24} className="animate-pulse" />
            </div>
            
            {/* Glow Effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-3xl blur-xl"></div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2 text-blue-200">
          <span className="text-sm font-medium">{language === 'fa' ? 'ادامه مطالب' : 'Explore More'}</span>
          <ArrowDown className="w-6 h-6" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
