
import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const ProblemSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-700 mb-6">
            {t('problem.title')}
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {t('problem.subtitle')}
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <div className="text-4xl font-bold text-red-500 mb-3">{t('problem.stat1')}</div>
            <div className="text-slate-600">{t('problem.stat1Label')}</div>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <div className="text-4xl font-bold text-red-500 mb-3">{t('problem.stat2')}</div>
            <div className="text-slate-600">{t('problem.stat2Label')}</div>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <div className="text-4xl font-bold text-red-500 mb-3">{t('problem.stat3')}</div>
            <div className="text-slate-600">{t('problem.stat3Label')}</div>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <div className="text-4xl font-bold text-red-500 mb-3">{t('problem.stat4')}</div>
            <div className="text-slate-600">{t('problem.stat4Label')}</div>
          </div>
        </div>

        {/* Pain Points */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                <span className="text-red-500 font-bold">✗</span>
              </div>
              <div>
                <h3 className="font-semibold text-slate-700 mb-2">{t('problem.pain1Title')}</h3>
                <p className="text-slate-600">{t('problem.pain1Desc')}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                <span className="text-red-500 font-bold">✗</span>
              </div>
              <div>
                <h3 className="font-semibold text-slate-700 mb-2">{t('problem.pain2Title')}</h3>
                <p className="text-slate-600">{t('problem.pain2Desc')}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                <span className="text-red-500 font-bold">✗</span>
              </div>
              <div>
                <h3 className="font-semibold text-slate-700 mb-2">{t('problem.pain3Title')}</h3>
                <p className="text-slate-600">{t('problem.pain3Desc')}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                <span className="text-red-500 font-bold">✗</span>
              </div>
              <div>
                <h3 className="font-semibold text-slate-700 mb-2">{t('problem.pain4Title')}</h3>
                <p className="text-slate-600">{t('problem.pain4Desc')}</p>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-2xl">
              <div className="text-center space-y-4">
                <div className="text-6xl">⚠️</div>
                <h3 className="text-2xl font-bold text-slate-700">
                  {t('problem.crisisTitle')}
                </h3>
                <p className="text-slate-600">
                  {t('problem.crisisDesc')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
