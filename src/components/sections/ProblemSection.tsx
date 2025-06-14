
import React from 'react';
import { AlertTriangle, TrendingDown, Clock, DollarSign } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const ProblemSection = () => {
  const { t, language } = useLanguage();

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200 px-4 py-2 rounded-full text-red-600 font-medium mb-6">
              <AlertTriangle className="w-4 h-4" />
              <span>{language === 'fa' ? 'چالش بحرانی صنعت' : 'Industry Challenge'}</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
              {t('problem.title')}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              {t('problem.subtitle')}
            </p>
          </div>

          {/* Clean Statistics */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {[
              { icon: TrendingDown, stat: t('problem.stat1'), label: t('problem.stat1Label'), color: 'red' },
              { icon: Clock, stat: t('problem.stat2'), label: t('problem.stat2Label'), color: 'amber' },
              { icon: DollarSign, stat: t('problem.stat3'), label: t('problem.stat3Label'), color: 'slate' },
              { icon: AlertTriangle, stat: t('problem.stat4'), label: t('problem.stat4Label'), color: 'red' }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
                <div className="bg-gray-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <item.icon className="text-slate-600 w-6 h-6" />
                </div>
                <div className="text-3xl font-bold text-slate-800 mb-2">{item.stat}</div>
                <div className="text-slate-600 font-medium">{item.label}</div>
              </div>
            ))}
          </div>

          {/* Problem Points */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-slate-800 mb-8">
                {language === 'fa' ? 'چالش‌های حیاتی کارخانه‌ها' : 'Critical Manufacturing Challenges'}
              </h3>
              
              {[
                { title: t('problem.pain1Title'), desc: t('problem.pain1Desc') },
                { title: t('problem.pain2Title'), desc: t('problem.pain2Desc') },
                { title: t('problem.pain3Title'), desc: t('problem.pain3Desc') },
                { title: t('problem.pain4Title'), desc: t('problem.pain4Desc') }
              ].map((pain, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h4 className="font-semibold text-slate-800 mb-3 text-lg">{pain.title}</h4>
                  <p className="text-slate-600 leading-relaxed">{pain.desc}</p>
                </div>
              ))}
            </div>

            {/* Clean Visual */}
            <div className="relative">
              <div className="bg-white p-12 rounded-2xl shadow-lg border border-gray-100 text-center">
                <div className="text-6xl mb-6">⚠️</div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">
                  {t('problem.crisisTitle')}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {t('problem.crisisDesc')}
                </p>
                
                <div className="inline-flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-lg font-medium">
                  <Clock className="w-4 h-4" />
                  <span>{language === 'fa' ? 'اقدام فوری لازم' : 'Urgent Action Required'}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Simple CTA */}
          <div className="text-center mt-16">
            <div className="bg-slate-800 text-white p-8 rounded-2xl max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">
                {language === 'fa' ? 'راه‌حل هوشمند در ادامه...' : 'The Smart Solution Awaits...'}
              </h3>
              <p className="text-slate-300">
                {language === 'fa' 
                  ? 'کشف کنید چگونه هوش مصنوعی می‌تواند این چالش‌ها را حل کند'
                  : 'Discover how AI can solve these challenges once and for all'
                }
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
