
import React from 'react';
import { Mic, Search, ArrowDown } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const SolutionSection = () => {
  const { t, language } = useLanguage();

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-700 mb-6">
            {t('solution.title')}
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {t('solution.subtitle')}
          </p>
        </div>

        {/* 3-Step Process */}
        <div className="relative">
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-1/2 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 transform -translate-y-1/2"></div>
          
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Step 1: Capture */}
            <div className="text-center relative">
              <div className="bg-amber-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Mic className="text-white" size={32} />
              </div>
              <div className="absolute -top-4 -right-4 bg-amber-100 text-amber-600 w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg">
                1
              </div>
              
              <h3 className="text-2xl font-bold text-slate-700 mb-4">{t('solution.step1Title')}</h3>
              <p className="text-slate-600 mb-6">
                {t('solution.step1Desc')}
              </p>
              
              {/* Example */}
              <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                <div className="flex items-center gap-2 justify-center mb-2">
                  <Mic size={16} className="text-blue-500" />
                  <span className="text-sm text-blue-600">{t('solution.voiceMessage')}</span>
                </div>
                <p className="text-sm text-slate-700">
                  "{t('solution.exampleInput')}"
                </p>
              </div>
            </div>

            {/* Step 2: Structure */}
            <div className="text-center relative">
              <div className="bg-purple-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <div className="text-white text-2xl">🧠</div>
              </div>
              <div className="absolute -top-4 -right-4 bg-purple-100 text-purple-600 w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg">
                2
              </div>
              
              <h3 className="text-2xl font-bold text-slate-700 mb-4">{t('solution.step2Title')}</h3>
              <p className="text-slate-600 mb-6">
                {t('solution.step2Desc')}
              </p>
              
              {/* Analysis Result */}
              <div className="bg-purple-50 border border-purple-200 p-4 rounded-lg space-y-2">
                <div className="text-xs text-purple-600 font-semibold">{t('solution.analysisResult')}</div>
                <div className="text-sm space-y-1">
                  <div>{t('solution.equipment')}</div>
                  <div>{t('solution.type')}</div>
                  <div>{t('solution.errorCode')}</div>
                </div>
              </div>
            </div>

            {/* Step 3: Retrieve */}
            <div className="text-center relative">
              <div className="bg-green-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Search className="text-white" size={32} />
              </div>
              <div className="absolute -top-4 -right-4 bg-green-100 text-green-600 w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg">
                3
              </div>
              
              <h3 className="text-2xl font-bold text-slate-700 mb-4">{t('solution.step3Title')}</h3>
              <p className="text-slate-600 mb-6">
                {t('solution.step3Desc')}
              </p>
              
              {/* Search Result */}
              <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                <div className="text-xs text-green-600 font-semibold mb-2">{t('solution.searchQuery')}</div>
                <div className="text-sm text-slate-700">
                  {t('solution.searchResult')}
                </div>
                <div className="text-xs text-green-500 mt-1">{t('solution.solveTime')}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Details */}
        <div className="mt-16 bg-slate-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-slate-700 text-center mb-8">
            {t('solution.techTitle')}
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-2xl mb-2">🤖</div>
                <div className="font-semibold text-slate-700">Google Gemini 2.0 Pro</div>
                <div className="text-sm text-slate-500">{t('solution.aiTech')}</div>
              </div>
            </div>
            <div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-2xl mb-2">⚡</div>
                <div className="font-semibold text-slate-700">{t('hero.stat2')}</div>
                <div className="text-sm text-slate-500">{t('solution.processingSpeed')}</div>
              </div>
            </div>
            <div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-2xl mb-2">🎯</div>
                <div className="font-semibold text-slate-700">{t('hero.stat1')}</div>
                <div className="text-sm text-slate-500">{t('solution.accuracy')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
