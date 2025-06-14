
import React from 'react';
import { AlertTriangle, TrendingDown, Clock, DollarSign } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const ProblemSection = () => {
  const { t, language } = useLanguage();

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 bg-red-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-orange-200 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200 px-6 py-3 rounded-full text-red-600 font-semibold mb-6 animate-fade-in">
            <AlertTriangle className="w-5 h-5" />
            <span>{language === 'fa' ? 'چالش بحرانی صنعت' : 'Critical Industry Challenge'}</span>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-bold text-slate-800 mb-8 animate-fade-in delay-200">
            <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
              {t('problem.title')}
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed animate-fade-in delay-300">
            {t('problem.subtitle')}
          </p>
        </div>

        {/* Enhanced Statistics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {[
            { icon: TrendingDown, stat: t('problem.stat1'), label: t('problem.stat1Label'), color: 'red' },
            { icon: Clock, stat: t('problem.stat2'), label: t('problem.stat2Label'), color: 'orange' },
            { icon: DollarSign, stat: t('problem.stat3'), label: t('problem.stat3Label'), color: 'amber' },
            { icon: AlertTriangle, stat: t('problem.stat4'), label: t('problem.stat4Label'), color: 'red' }
          ].map((item, index) => (
            <div 
              key={index}
              className={`group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-${item.color}-500 hover:scale-105 animate-fade-in`}
              style={{ animationDelay: `${(index + 4) * 100}ms` }}
            >
              <div className={`bg-${item.color}-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <item.icon className={`text-${item.color}-600 w-8 h-8`} />
              </div>
              <div className={`text-4xl font-bold text-${item.color}-600 mb-3 group-hover:scale-110 transition-transform`}>
                {item.stat}
              </div>
              <div className="text-slate-600 font-medium">{item.label}</div>
            </div>
          ))}
        </div>

        {/* Enhanced Pain Points */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fade-in delay-800">
            <h3 className="text-3xl font-bold text-slate-800 mb-8">
              {language === 'fa' ? 'چالش‌های حیاتی کارخانه‌ها' : 'Critical Manufacturing Challenges'}
            </h3>
            
            {[
              { title: t('problem.pain1Title'), desc: t('problem.pain1Desc') },
              { title: t('problem.pain2Title'), desc: t('problem.pain2Desc') },
              { title: t('problem.pain3Title'), desc: t('problem.pain3Desc') },
              { title: t('problem.pain4Title'), desc: t('problem.pain4Desc') }
            ].map((pain, index) => (
              <div 
                key={index}
                className="group flex items-start gap-6 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-red-200 animate-slide-in-left"
                style={{ animationDelay: `${(index + 8) * 150}ms` }}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                  <span className="text-white font-bold text-lg">✗</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 mb-3 text-lg group-hover:text-red-600 transition-colors">
                    {pain.title}
                  </h4>
                  <p className="text-slate-600 leading-relaxed">{pain.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced Visual */}
          <div className="relative animate-fade-in delay-1000">
            <div className="bg-gradient-to-br from-red-50 via-orange-50 to-amber-50 p-12 rounded-3xl shadow-2xl border border-red-100 relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 left-4 w-16 h-16 border-4 border-red-300 rounded-full"></div>
                <div className="absolute bottom-4 right-4 w-20 h-20 border-4 border-orange-300 rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 border-4 border-amber-300 rounded-full"></div>
              </div>
              
              <div className="text-center space-y-6 relative z-10">
                <div className="text-8xl animate-bounce">⚠️</div>
                <h3 className="text-3xl font-bold text-slate-800">
                  {t('problem.crisisTitle')}
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed max-w-md mx-auto">
                  {t('problem.crisisDesc')}
                </p>
                
                {/* Urgency Indicator */}
                <div className="inline-flex items-center gap-3 bg-red-500 text-white px-6 py-3 rounded-full font-bold shadow-lg animate-pulse">
                  <Clock className="w-5 h-5" />
                  <span>{language === 'fa' ? 'اقدام فوری لازم' : 'Urgent Action Required'}</span>
                </div>
              </div>
            </div>
            
            {/* Floating Alert Icons */}
            <div className="absolute -top-4 -right-4 bg-red-500 text-white p-3 rounded-full shadow-xl animate-bounce">
              <AlertTriangle size={20} />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-orange-500 text-white p-3 rounded-full shadow-xl animate-bounce delay-500">
              <TrendingDown size={20} />
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20 animate-fade-in delay-1200">
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white p-8 rounded-3xl shadow-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              {language === 'fa' ? 'راه‌حل هوشمند در ادامه...' : 'The Smart Solution Awaits...'}
            </h3>
            <p className="text-slate-300 mb-6">
              {language === 'fa' 
                ? 'کشف کنید چگونه هوش مصنوعی می‌تواند این چالش‌ها را حل کند'
                : 'Discover how AI can solve these challenges once and for all'
              }
            </p>
            <div className="flex items-center justify-center gap-2 text-amber-400">
              <span className="font-semibold">{language === 'fa' ? 'ادامه مطالعه' : 'Continue Reading'}</span>
              <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce delay-100"></div>
              <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce delay-200"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
