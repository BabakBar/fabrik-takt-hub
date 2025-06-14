
import React from 'react';
import { Mic, Search, Brain, Zap, Sparkles, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const SolutionSection = () => {
  const { t, language } = useLanguage();

  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-blue-300/20 to-purple-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-amber-300/20 to-orange-300/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 px-6 py-3 rounded-full text-blue-600 font-semibold mb-6 animate-fade-in">
            <Brain className="w-5 h-5 animate-pulse" />
            <span>{language === 'fa' ? 'راه‌حل هوشمند' : 'AI-Powered Solution'}</span>
            <Sparkles className="w-4 h-4 text-amber-500" />
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-bold text-slate-800 mb-8 animate-fade-in delay-200">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-amber-600 bg-clip-text text-transparent">
              {t('solution.title')}
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed animate-fade-in delay-300">
            {t('solution.subtitle')}
          </p>
        </div>

        {/* Enhanced 3-Step Process */}
        <div className="relative mb-20">
          {/* Animated Connection Lines */}
          <div className="hidden lg:block absolute top-1/2 left-1/4 right-1/4 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent transform -translate-y-1/2">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 animate-pulse"></div>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Step 1: Capture */}
            <div className="text-center relative group animate-fade-in delay-400">
              <div className="relative bg-gradient-to-br from-amber-500 to-orange-500 w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl group-hover:scale-110 transition-all duration-300">
                <Mic className="text-white w-10 h-10 animate-pulse" />
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-orange-400 rounded-3xl blur opacity-75 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="absolute -top-2 -right-2 bg-gradient-to-r from-amber-400 to-orange-400 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                1
              </div>
              
              <h3 className="text-2xl font-bold text-slate-800 mb-6 group-hover:text-amber-600 transition-colors">
                {t('solution.step1Title')}
              </h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                {t('solution.step1Desc')}
              </p>
              
              {/* Enhanced Example */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 p-6 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-3 justify-center mb-4">
                  <div className="bg-blue-500 p-2 rounded-full">
                    <Mic size={16} className="text-white animate-pulse" />
                  </div>
                  <span className="text-sm font-bold text-blue-700 flex items-center gap-1">
                    {t('solution.voiceMessage')}
                    <div className="flex gap-1">
                      <div className="w-1 h-3 bg-blue-400 rounded animate-pulse"></div>
                      <div className="w-1 h-4 bg-blue-500 rounded animate-pulse delay-75"></div>
                      <div className="w-1 h-2 bg-blue-400 rounded animate-pulse delay-150"></div>
                    </div>
                  </span>
                </div>
                <p className="text-sm text-slate-700 font-medium bg-white p-3 rounded-lg shadow-sm">
                  "{t('solution.exampleInput')}"
                </p>
              </div>
            </div>

            {/* Step 2: Structure */}
            <div className="text-center relative group animate-fade-in delay-600">
              <div className="relative bg-gradient-to-br from-purple-500 to-indigo-500 w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl group-hover:scale-110 transition-all duration-300">
                <Brain className="text-white w-10 h-10 animate-pulse" />
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-indigo-400 rounded-3xl blur opacity-75 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="absolute -top-2 -right-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                2
              </div>
              
              <h3 className="text-2xl font-bold text-slate-800 mb-6 group-hover:text-purple-600 transition-colors">
                {t('solution.step2Title')}
              </h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                {t('solution.step2Desc')}
              </p>
              
              {/* Enhanced Analysis Result */}
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 border border-purple-200 p-6 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 space-y-4">
                <div className="flex items-center gap-2 text-purple-700 font-bold mb-3">
                  <Brain className="w-4 h-4 animate-pulse" />
                  {t('solution.analysisResult')}
                </div>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded-lg shadow-sm flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-sm font-medium">{t('solution.equipment')}</span>
                  </div>
                  <div className="bg-white p-3 rounded-lg shadow-sm flex items-center gap-3">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                    <span className="text-sm font-medium">{t('solution.type')}</span>
                  </div>
                  <div className="bg-white p-3 rounded-lg shadow-sm flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-sm font-medium">{t('solution.errorCode')}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3: Retrieve */}
            <div className="text-center relative group animate-fade-in delay-800">
              <div className="relative bg-gradient-to-br from-green-500 to-emerald-500 w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl group-hover:scale-110 transition-all duration-300">
                <Search className="text-white w-10 h-10" />
                <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-400 rounded-3xl blur opacity-75 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="absolute -top-2 -right-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                3
              </div>
              
              <h3 className="text-2xl font-bold text-slate-800 mb-6 group-hover:text-green-600 transition-colors">
                {t('solution.step3Title')}
              </h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                {t('solution.step3Desc')}
              </p>
              
              {/* Enhanced Search Result */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 p-6 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-2 text-green-700 font-bold mb-4">
                  <Sparkles className="w-4 h-4" />
                  {t('solution.searchQuery')}
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-green-400 mb-3">
                  <div className="text-sm text-slate-700 font-medium">
                    {t('solution.searchResult')}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-xs text-green-600 font-bold flex items-center gap-1">
                    <Zap className="w-3 h-3" />
                    {t('solution.solveTime')}
                  </div>
                  <div className="flex items-center gap-1 text-green-500">
                    <span className="text-xs font-bold">98% Match</span>
                    <Sparkles className="w-3 h-3" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Technical Details */}
        <div className="bg-gradient-to-br from-slate-800 via-slate-900 to-blue-900 rounded-3xl p-12 shadow-2xl relative overflow-hidden animate-fade-in delay-1000">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-4 right-4 w-32 h-32 border border-blue-400 rounded-full"></div>
            <div className="absolute bottom-4 left-4 w-24 h-24 border border-purple-400 rounded-full"></div>
          </div>
          
          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-white text-center mb-12 flex items-center justify-center gap-3">
              <Brain className="w-8 h-8 text-blue-400 animate-pulse" />
              {t('solution.techTitle')}
              <Sparkles className="w-6 h-6 text-amber-400" />
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="group text-center">
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/20 group-hover:scale-105 transition-all duration-300">
                  <div className="text-4xl mb-4">🤖</div>
                  <div className="font-bold text-white text-xl mb-2">Google Gemini 2.0 Pro</div>
                  <div className="text-blue-200 mb-4">{t('solution.aiTech')}</div>
                  <div className="bg-blue-500/20 border border-blue-400/30 px-4 py-2 rounded-full text-blue-300 text-sm font-semibold">
                    Latest AI Model
                  </div>
                </div>
              </div>
              
              <div className="group text-center">
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/20 group-hover:scale-105 transition-all duration-300">
                  <div className="text-4xl mb-4">⚡</div>
                  <div className="font-bold text-white text-xl mb-2">{t('hero.stat2')}</div>
                  <div className="text-purple-200 mb-4">{t('solution.processingSpeed')}</div>
                  <div className="bg-purple-500/20 border border-purple-400/30 px-4 py-2 rounded-full text-purple-300 text-sm font-semibold">
                    Ultra Fast
                  </div>
                </div>
              </div>
              
              <div className="group text-center">
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/20 group-hover:scale-105 transition-all duration-300">
                  <div className="text-4xl mb-4">🎯</div>
                  <div className="font-bold text-white text-xl mb-2">{t('hero.stat1')}</div>
                  <div className="text-amber-200 mb-4">{t('solution.accuracy')}</div>
                  <div className="bg-amber-500/20 border border-amber-400/30 px-4 py-2 rounded-full text-amber-300 text-sm font-semibold">
                    Precision AI
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in delay-1200">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-3xl shadow-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 flex items-center justify-center gap-2">
              <Zap className="w-6 h-6 text-amber-400" />
              {language === 'fa' ? 'آماده تجربه آینده؟' : 'Ready to Experience the Future?'}
            </h3>
            <p className="text-blue-100 mb-6 text-lg">
              {language === 'fa' 
                ? 'ببینید چگونه این فناوری کارخانه شما را متحول می‌کند'
                : 'See how this technology transforms your manufacturing operations'
              }
            </p>
            <button className="group bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-amber-500/25 transform hover:scale-105 flex items-center gap-2 mx-auto">
              {language === 'fa' ? 'مشاهده نمونه‌ها' : 'See Live Examples'}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
