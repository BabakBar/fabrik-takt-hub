
import React from 'react';
import { AlertTriangle, TrendingDown, Clock, DollarSign, Target, BrainCircuit, Timer, Repeat } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const ProblemSection = () => {
  const { t, language } = useLanguage();

  const painPoints = [
    { 
      title: language === 'fa' ? 'دانش محدود کارگران جوان' : 'Limited knowledge of new workers',
      desc: language === 'fa' ? 'کارگران جدید نمی‌دانند مشکلات پیچیده را چگونه حل کنند' : 'New workers don\'t know how to solve complex problems',
      icon: BrainCircuit,
      iconColor: 'text-red-500' 
    },
    { 
      title: language === 'fa' ? 'زمان طولانی عیب‌یابی' : 'Long troubleshooting times',
      desc: language === 'fa' ? 'ساعت‌ها جستجو در دفترچه‌ها و مشاوره با همکاران' : 'Hours spent searching manuals and consulting colleagues',
      icon: Timer,
      iconColor: 'text-amber-500'
    },
    { 
      title: language === 'fa' ? 'هزینه‌های توقف تولید' : 'Production downtime costs',
      desc: language === 'fa' ? 'هر دقیقه توقف تولید هزاران دلار ضرر' : 'Every minute of downtime costs thousands of dollars',
      icon: DollarSign,
      iconColor: 'text-slate-500'
    },
    { 
      title: language === 'fa' ? 'تکرار مشکلات حل‌شده' : 'Repeated solved problems',
      desc: language === 'fa' ? 'همان مشکلات بارها و بارها حل می‌شوند' : 'Same problems get solved over and over again',
      icon: Repeat,
      iconColor: 'text-blue-500'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 bg-red-100 border border-red-200/80 px-6 py-3 rounded-full text-red-600 font-semibold mb-6 shadow-sm">
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
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
            {[
              { icon: TrendingDown, stat: '40%', label: language === 'fa' ? 'کاهش بهره‌وری' : 'Productivity Loss', color: 'red' },
              { icon: Clock, stat: '2-3h', label: language === 'fa' ? 'زمان حل مشکل' : 'Problem Resolution', color: 'amber' },
              { icon: DollarSign, stat: '$2M+', label: language === 'fa' ? 'هزینه توقف تولید' : 'Downtime Costs', color: 'slate' },
              { icon: AlertTriangle, stat: '65%', label: language === 'fa' ? 'مشکلات تکراری' : 'Recurring Issues', color: 'red' }
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-md border border-slate-100 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className={`inline-flex items-center justify-center w-16 h-16 ${
                  item.color === 'red' ? 'bg-red-500' :
                  item.color === 'amber' ? 'bg-amber-500' :
                  'bg-slate-700'
                } rounded-2xl mb-6`}>
                  <item.icon className="text-white w-8 h-8" />
                </div>
                <div className="text-4xl font-bold text-slate-800 mb-2">{item.stat}</div>
                <div className="text-slate-500">{item.label}</div>
              </div>
            ))}
          </div>

          {/* Problem Points */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-slate-900">
                {language === 'fa' ? 'چالش‌های حیاتی کارخانه‌ها' : 'Critical Manufacturing Challenges'}
              </h3>
              
              <div className="space-y-6">
                {painPoints.map((pain, index) => (
                  <div key={index} className="bg-white p-6 rounded-2xl shadow-md border border-slate-100 transition-all duration-300 hover:shadow-xl hover:border-slate-200 hover:-translate-y-1">
                    <div className="flex items-start gap-5">
                       <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center bg-slate-100`}>
                        <pain.icon className={`w-6 h-6 ${pain.iconColor}`} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-slate-800 text-lg mb-1">{pain.title}</h4>
                        <p className="text-slate-500 leading-relaxed">{pain.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual */}
            <div className="relative">
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-200 text-center">
                <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-red-100 mb-6">
                    <AlertTriangle className="w-8 h-8 text-red-500" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">
                  {language === 'fa' ? 'بحران دانش صنعتی' : 'Industrial Knowledge Crisis'}
                </h3>
                <p className="text-slate-500 leading-relaxed mb-8 max-w-sm mx-auto">
                  {language === 'fa' 
                    ? 'با بازنشستگی نسل بیبی‌بومرز، میلیون‌ها سال تجربه از دست می‌رود'
                    : 'With baby boomer retirements, millions of years of experience are being lost'
                  }
                </p>
                
                <button className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold shadow-lg shadow-red-500/30 transition-all duration-300">
                  <Clock className="w-5 h-5" />
                  <span>{language === 'fa' ? 'اقدام فوری لازم' : 'Urgent Action Required'}</span>
                </button>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-24">
            <div className="bg-slate-900 text-white p-10 rounded-2xl max-w-4xl mx-auto shadow-2xl">
              <Target className="w-10 h-10 text-amber-400 mx-auto mb-5" />
              <h3 className="text-3xl font-bold mb-4">
                {language === 'fa' ? 'راه‌حل هوشمند در ادامه...' : 'The Smart Solution Awaits...'}
              </h3>
              <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mx-auto">
                {language === 'fa' 
                  ? 'کشف کنید چگونه هوش مصنوعی می‌تواند این چالش‌ها را یک بار برای همیشه حل کند'
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
