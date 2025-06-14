
import React from 'react';
import { AlertTriangle, TrendingDown, Clock, DollarSign, Target } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const ProblemSection = () => {
  const { t, language } = useLanguage();

  return (
    <section className="py-32 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_1px_1px,_theme(colors.slate.400)_1px,_transparent_0)] bg-[size:40px_40px]"></div>
      </div>
      
      <div className="container mx-auto px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-red-50 to-orange-50 border border-red-200/50 px-6 py-3 rounded-full text-red-600 font-semibold mb-8 shadow-sm">
              <AlertTriangle className="w-5 h-5" />
              <span>{language === 'fa' ? 'چالش بحرانی صنعت' : 'Industry Challenge'}</span>
            </div>
            
            <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-8 leading-tight">
              {t('problem.title')}
            </h2>
            <p className="text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light">
              {t('problem.subtitle')}
            </p>
          </div>

          {/* Enhanced Statistics Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
            {[
              { icon: TrendingDown, stat: t('problem.stat1'), label: t('problem.stat1Label'), color: 'red', gradient: 'from-red-500 to-red-600' },
              { icon: Clock, stat: t('problem.stat2'), label: t('problem.stat2Label'), color: 'amber', gradient: 'from-amber-500 to-amber-600' },
              { icon: DollarSign, stat: t('problem.stat3'), label: t('problem.stat3Label'), color: 'slate', gradient: 'from-slate-600 to-slate-700' },
              { icon: AlertTriangle, stat: t('problem.stat4'), label: t('problem.stat4Label'), color: 'red', gradient: 'from-red-500 to-red-600' }
            ].map((item, index) => (
              <div key={index} className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-slate-200 to-slate-300 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-white p-8 rounded-2xl shadow-lg border border-slate-100 text-center hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${item.gradient} rounded-2xl mb-6 shadow-lg`}>
                    <item.icon className="text-white w-8 h-8" />
                  </div>
                  <div className="text-4xl font-bold text-slate-900 mb-3">{item.stat}</div>
                  <div className="text-slate-600 font-medium leading-tight">{item.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced Problem Points */}
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h3 className="text-4xl font-bold text-slate-900 mb-12">
                {language === 'fa' ? 'چالش‌های حیاتی کارخانه‌ها' : 'Critical Manufacturing Challenges'}
              </h3>
              
              <div className="space-y-6">
                {[
                  { title: t('problem.pain1Title'), desc: t('problem.pain1Desc'), icon: '🧠' },
                  { title: t('problem.pain2Title'), desc: t('problem.pain2Desc'), icon: '⏰' },
                  { title: t('problem.pain3Title'), desc: t('problem.pain3Desc'), icon: '💸' },
                  { title: t('problem.pain4Title'), desc: t('problem.pain4Desc'), icon: '🔄' }
                ].map((pain, index) => (
                  <div key={index} className="group relative">
                    <div className="absolute -inset-2 bg-gradient-to-r from-slate-100 to-slate-200 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur"></div>
                    <div className="relative bg-white p-8 rounded-2xl shadow-md border border-slate-100 hover:shadow-lg transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <div className="text-3xl">{pain.icon}</div>
                        <div className="flex-1">
                          <h4 className="font-bold text-slate-900 mb-4 text-xl">{pain.title}</h4>
                          <p className="text-slate-600 leading-relaxed text-lg">{pain.desc}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced Visual */}
            <div className="relative">
              <div className="absolute -top-10 -left-10 -right-10 -bottom-10 bg-gradient-to-br from-red-100/50 to-orange-100/50 rounded-3xl blur-2xl"></div>
              <div className="relative bg-white p-16 rounded-3xl shadow-2xl border border-slate-200 text-center">
                <div className="text-8xl mb-8 animate-pulse">⚠️</div>
                <h3 className="text-3xl font-bold text-slate-900 mb-6 leading-tight">
                  {t('problem.crisisTitle')}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-8 text-lg">
                  {t('problem.crisisDesc')}
                </p>
                
                <div className="inline-flex items-center gap-3 bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-4 rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <Clock className="w-5 h-5 animate-pulse" />
                  <span>{language === 'fa' ? 'اقدام فوری لازم' : 'Urgent Action Required'}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced CTA */}
          <div className="text-center mt-24">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-slate-200 to-slate-300 rounded-3xl blur-xl opacity-50"></div>
              <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 text-white p-12 rounded-3xl max-w-4xl mx-auto shadow-2xl">
                <Target className="w-12 h-12 text-amber-400 mx-auto mb-6" />
                <h3 className="text-3xl font-bold mb-6">
                  {language === 'fa' ? 'راه‌حل هوشمند در ادامه...' : 'The Smart Solution Awaits...'}
                </h3>
                <p className="text-xl text-slate-300 leading-relaxed">
                  {language === 'fa' 
                    ? 'کشف کنید چگونه هوش مصنوعی می‌تواند این چالش‌ها را حل کند'
                    : 'Discover how AI can solve these challenges once and for all'
                  }
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
