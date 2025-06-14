
import React from 'react';
import { Mic, Search, Brain, Sparkles, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const SolutionSection = () => {
  const { t, language } = useLanguage();

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 px-4 py-2 rounded-full text-amber-700 font-medium mb-6">
              <Brain className="w-4 h-4" />
              <span>{language === 'fa' ? 'راه‌حل هوشمند' : 'AI Solution'}</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
              {t('solution.title')}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              {t('solution.subtitle')}
            </p>
          </div>

          {/* Clean 3-Step Process */}
          <div className="grid lg:grid-cols-3 gap-12 mb-20">
            {/* Step 1 */}
            <div className="text-center">
              <div className="bg-amber-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Mic className="text-white w-8 h-8" />
              </div>
              <div className="absolute -top-2 -right-2 bg-amber-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
                1
              </div>
              
              <h3 className="text-xl font-bold text-slate-800 mb-4">
                {t('solution.step1Title')}
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {t('solution.step1Desc')}
              </p>
              
              <div className="bg-gray-50 border border-gray-200 p-4 rounded-lg">
                <div className="flex items-center gap-2 justify-center mb-3">
                  <Mic size={14} className="text-amber-500" />
                  <span className="text-sm font-medium text-slate-700">{t('solution.voiceMessage')}</span>
                </div>
                <p className="text-sm text-slate-700 bg-white p-3 rounded border">
                  "{t('solution.exampleInput')}"
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="text-center relative">
              <div className="bg-slate-700 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Brain className="text-white w-8 h-8" />
              </div>
              <div className="absolute -top-2 -right-2 bg-slate-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
                2
              </div>
              
              <h3 className="text-xl font-bold text-slate-800 mb-4">
                {t('solution.step2Title')}
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {t('solution.step2Desc')}
              </p>
              
              <div className="bg-gray-50 border border-gray-200 p-4 rounded-lg">
                <div className="flex items-center gap-2 text-slate-700 font-medium mb-3">
                  <Brain className="w-4 h-4" />
                  {t('solution.analysisResult')}
                </div>
                <div className="space-y-2">
                  <div className="bg-white p-2 rounded text-sm">{t('solution.equipment')}</div>
                  <div className="bg-white p-2 rounded text-sm">{t('solution.type')}</div>
                  <div className="bg-white p-2 rounded text-sm">{t('solution.errorCode')}</div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="text-center relative">
              <div className="bg-green-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Search className="text-white w-8 h-8" />
              </div>
              <div className="absolute -top-2 -right-2 bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
                3
              </div>
              
              <h3 className="text-xl font-bold text-slate-800 mb-4">
                {t('solution.step3Title')}
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {t('solution.step3Desc')}
              </p>
              
              <div className="bg-gray-50 border border-gray-200 p-4 rounded-lg">
                <div className="flex items-center gap-2 text-green-600 font-medium mb-3">
                  <Sparkles className="w-4 h-4" />
                  {t('solution.searchQuery')}
                </div>
                <div className="bg-white p-3 rounded border-l-4 border-green-400 text-sm text-slate-700">
                  {t('solution.searchResult')}
                </div>
                <div className="flex items-center justify-between mt-2">
                  <div className="text-xs text-green-600 font-medium">{t('solution.solveTime')}</div>
                  <div className="text-xs text-green-600">98% Match</div>
                </div>
              </div>
            </div>
          </div>

          {/* Tech Showcase */}
          <div className="bg-slate-800 rounded-2xl p-12 text-center">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center justify-center gap-3">
              <Brain className="w-6 h-6 text-amber-500" />
              {t('solution.techTitle')}
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl mb-2">🤖</div>
                <div className="font-bold text-white mb-1">Google Gemini 2.0 Pro</div>
                <div className="text-slate-300 text-sm">{t('solution.aiTech')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">⚡</div>
                <div className="font-bold text-white mb-1">{t('hero.stat2')}</div>
                <div className="text-slate-300 text-sm">{t('solution.processingSpeed')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🎯</div>
                <div className="font-bold text-white mb-1">{t('hero.stat1')}</div>
                <div className="text-slate-300 text-sm">{t('solution.accuracy')}</div>
              </div>
            </div>
          </div>

          {/* Simple CTA */}
          <div className="text-center mt-16">
            <div className="bg-amber-500 text-white p-8 rounded-2xl max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">
                {language === 'fa' ? 'آماده تجربه آینده؟' : 'Ready to Experience the Future?'}
              </h3>
              <p className="text-amber-100 mb-6">
                {language === 'fa' 
                  ? 'ببینید چگونه این فناوری کارخانه شما را متحول می‌کند'
                  : 'See how this technology transforms your manufacturing operations'
                }
              </p>
              <button className="bg-white text-amber-600 px-6 py-3 rounded-lg font-semibold hover:bg-amber-50 transition-colors flex items-center gap-2 mx-auto">
                {language === 'fa' ? 'مشاهده نمونه‌ها' : 'See Live Examples'}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
