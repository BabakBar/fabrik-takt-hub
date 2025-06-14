
import React from 'react';
import { ArrowDown, Mic, Sparkles, Brain } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const HeroSection = () => {
  const { t, language } = useLanguage();

  return (
    <section className="relative min-h-screen bg-white flex items-center">
      {/* Minimal Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white opacity-60"></div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="space-y-8">
              {/* AI Badge */}
              <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full text-sm font-medium text-slate-700 animate-gentle-fade">
                <Brain className="w-4 h-4 text-amber-500" />
                <span>{language === 'fa' ? 'هوش مصنوعی پیشرفته' : 'Advanced AI Technology'}</span>
              </div>

              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-bold text-slate-800 leading-tight animate-gentle-fade">
                  {t('hero.title')}
                  <br />
                  <span className="text-amber-500">{t('hero.titleAccent')}</span>
                </h1>
                
                <p className="text-xl text-slate-600 leading-relaxed max-w-xl animate-gentle-fade">
                  {t('hero.subtitle')}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 animate-gentle-fade">
                <button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  {t('hero.ctaPrimary')}
                </button>
                <button className="border-2 border-slate-300 text-slate-700 hover:border-slate-400 hover:bg-slate-50 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300">
                  {t('hero.ctaSecondary')}
                </button>
              </div>

              {/* Clean Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200 animate-gentle-fade">
                <div className="text-center">
                  <div className="text-2xl font-bold text-amber-500 mb-1">{t('hero.stat1')}</div>
                  <div className="text-sm text-slate-600">{t('hero.stat1Label')}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-700 mb-1">{t('hero.stat2')}</div>
                  <div className="text-sm text-slate-600">{t('hero.stat2Label')}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-slate-700 mb-1">{t('hero.stat3')}</div>
                  <div className="text-sm text-slate-600">{t('hero.stat3Label')}</div>
                </div>
              </div>
            </div>

            {/* Clean Interface Demo */}
            <div className="relative animate-gentle-fade">
              <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md mx-auto border border-gray-100">
                {/* Header */}
                <div className="bg-slate-700 text-white p-4 rounded-t-lg flex items-center gap-3 -mx-8 -mt-8 mb-8">
                  <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center">
                    <Brain className="text-white w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold">{t('hero.botName')}</div>
                    <div className="text-xs text-slate-300">{t('hero.botStatus')}</div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  {/* User Message */}
                  <div className="flex justify-end">
                    <div className="bg-amber-500 text-white p-4 rounded-lg rounded-tr-none max-w-xs">
                      <div className="flex items-center gap-2 mb-2">
                        <Mic size={14} />
                        <span className="text-xs font-medium">{t('hero.voiceMessage')}</span>
                      </div>
                      <div className="text-sm">{t('hero.userMessage')}</div>
                    </div>
                  </div>

                  {/* AI Response */}
                  <div className="flex justify-start">
                    <div className="bg-gray-100 text-slate-700 p-4 rounded-lg rounded-tl-none max-w-xs">
                      <div className="text-sm leading-relaxed">
                        {t('hero.botResponse')}
                      </div>
                    </div>
                  </div>

                  {/* Solution */}
                  <div className="flex justify-start">
                    <div className="bg-amber-50 border-l-4 border-amber-500 text-slate-700 p-4 rounded-lg max-w-xs">
                      <div className="flex items-center gap-1 text-amber-600 font-semibold mb-2 text-xs">
                        <Sparkles className="w-3 h-3" />
                        {t('hero.solutionFound')}
                      </div>
                      <div className="text-sm">{t('hero.solutionText')}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Simple Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2 text-slate-500">
          <span className="text-sm">{language === 'fa' ? 'ادامه مطالب' : 'Explore More'}</span>
          <ArrowDown className="w-5 h-5" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
