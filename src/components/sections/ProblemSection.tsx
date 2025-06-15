
import React from 'react';
import { AlertTriangle, TrendingDown, Clock, DollarSign, Target } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const ProblemSection = () => {
  const { t, language } = useLanguage();

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-red-50 to-orange-50 border border-red-200/50 px-6 py-3 rounded-full text-red-600 font-semibold mb-6 shadow-sm">
              <AlertTriangle className="w-5 h-5" />
              <span>{language === 'fa' ? 'چالش بحرانی صنعت' : 'Industry Challenge'}</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              {language === 'fa' 
                ? 'کارخانه‌ها میلیون‌ها دلار از دست می‌دهند'
                : 'Factories lose millions to knowledge gaps'
              }
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              {language === 'fa'
                ? 'وقتی کارگران باتجربه بازنشسته می‌شوند، دانش آن‌ها نیز می‌رود'
                : 'When experienced workers retire, their knowledge walks out the door'
              }
            </p>
          </div>

          {/* Statistics Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { icon: TrendingDown, stat: '40%', label: language === 'fa' ? 'کاهش بهره‌وری' : 'Productivity Loss', color: 'red' },
              { icon: Clock, stat: '2-3h', label: language === 'fa' ? 'زمان حل مشکل' : 'Problem Resolution', color: 'amber' },
              { icon: DollarSign, stat: '$2M+', label: language === 'fa' ? 'هزینه توقف تولید' : 'Downtime Costs', color: 'slate' },
              { icon: AlertTriangle, stat: '65%', label: language === 'fa' ? 'مشکلات تکراری' : 'Recurring Issues', color: 'red' }
            ].map((item, index) => (
              <div key={index} className="group relative">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 text-center hover:shadow-md transition-all duration-300 hover:scale-105">
                  <div className={`inline-flex items-center justify-center w-12 h-12 ${
                    item.color === 'red' ? 'bg-red-500' :
                    item.color === 'amber' ? 'bg-amber-500' :
                    'bg-slate-600'
                  } rounded-xl mb-4`}>
                    <item.icon className="text-white w-6 h-6" />
                  </div>
                  <div className="text-3xl font-bold text-slate-900 mb-2">{item.stat}</div>
                  <div className="text-slate-600 font-medium text-sm">{item.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Problem Points */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-slate-900 mb-8">
                {language === 'fa' ? 'چالش‌های حیاتی کارخانه‌ها' : 'Critical Manufacturing Challenges'}
              </h3>
              
              <div className="space-y-4">
                {[
                  { 
                    title: language === 'fa' ? 'دانش محدود کارگران جوان' : 'Limited knowledge of new workers',
                    desc: language === 'fa' ? 'کارگران جدید نمی‌دانند مشکلات پیچیده را چگونه حل کنند' : 'New workers don\'t know how to solve complex problems',
                    icon: '🧠' 
                  },
                  { 
                    title: language === 'fa' ? 'زمان طولانی عیب‌یابی' : 'Long troubleshooting times',
                    desc: language === 'fa' ? 'ساعت‌ها جستجو در دفترچه‌ها و مشاوره با همکاران' : 'Hours spent searching manuals and consulting colleagues',
                    icon: '⏰' 
                  },
                  { 
                    title: language === 'fa' ? 'هزینه‌های توقف تولید' : 'Production downtime costs',
                    desc: language === 'fa' ? 'هر دقیقه توقف تولید هزاران دلار ضرر' : 'Every minute of downtime costs thousands of dollars',
                    icon: '💸' 
                  },
                  { 
                    title: language === 'fa' ? 'تکرار مشکلات حل‌شده' : 'Repeated solved problems',
                    desc: language === 'fa' ? 'همان مشکلات بارها و بارها حل می‌شوند' : 'Same problems get solved over and over again',
                    icon: '🔄' 
                  }
                ].map((pain, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="text-2xl">{pain.icon}</div>
                      <div className="flex-1">
                        <h4 className="font-bold text-slate-900 mb-2 text-lg">{pain.title}</h4>
                        <p className="text-slate-600 leading-relaxed">{pain.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual */}
            <div className="relative">
              <div className="bg-white p-12 rounded-2xl shadow-xl border border-slate-200 text-center">
                <div className="text-6xl mb-6">⚠️</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {language === 'fa' ? 'بحران دانش صنعتی' : 'Industrial Knowledge Crisis'}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {language === 'fa' 
                    ? 'با بازنشستگی نسل بیبی‌بومرز، میلیون‌ها سال تجربه از دست می‌رود'
                    : 'With baby boomer retirements, millions of years of experience are being lost'
                  }
                </p>
                
                <div className="inline-flex items-center gap-3 bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg">
                  <Clock className="w-5 h-5" />
                  <span>{language === 'fa' ? 'اقدام فوری لازم' : 'Urgent Action Required'}</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white p-8 rounded-2xl max-w-3xl mx-auto">
              <Target className="w-10 h-10 text-amber-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">
                {language === 'fa' ? 'راه‌حل هوشمند در ادامه...' : 'The Smart Solution Awaits...'}
              </h3>
              <p className="text-slate-300 leading-relaxed">
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
