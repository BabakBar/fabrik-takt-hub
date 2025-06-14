
import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const ExamplesSection = () => {
  const { t, language } = useLanguage();

  const examples = {
    fa: [
      {
        type: 'خرابی دستگاه',
        status: 'فوری',
        equipment: 'CNC-452',
        problem: 'کد خطای E-77 و توقف تولید',
        solution: 'بررسی سنسور دما و restart controller',
        impact: '۳ ساعت کاهش زمان تعمیر',
        date: '۱۴۰۳/۰۳/۲۰'
      },
      {
        type: 'مشکل کیفیت',
        status: 'کیفیت',
        equipment: 'خط تولید A',
        problem: 'کیفیت پایین محصول در شیفت صبح',
        solution: 'تنظیم دمای فر قبل از شروع تولید',
        impact: '۲۰٪ کاهش ضایعات',
        date: '۱۴۰۳/۰۳/۱۸'
      },
      {
        type: 'نگهداری پیشگیرانه',
        status: 'روتین',
        equipment: 'کمپرسور اصلی',
        problem: 'تعویض فیلتر هوای کمپرسور',
        solution: 'هر ۱۵ روز یکبار',
        impact: '۴۰٪ کاهش خرابی',
        date: '۱۴۰۳/۰۳/۱۵'
      }
    ],
    en: [
      {
        type: 'Equipment Breakdown',
        status: 'Urgent',
        equipment: 'CNC-452',
        problem: 'Error code E-77 and production halt',
        solution: 'Check temperature sensor and restart controller',
        impact: '3 hours repair time reduction',
        date: '2024/06/12'
      },
      {
        type: 'Quality Issue',
        status: 'Quality',
        equipment: 'Production Line A',
        problem: 'Low product quality during morning shift',
        solution: 'Adjust oven temperature before production start',
        impact: '20% waste reduction',
        date: '2024/06/10'
      },
      {
        type: 'Preventive Maintenance',
        status: 'Routine',
        equipment: 'Main Compressor',
        problem: 'Air filter replacement process',
        solution: 'Every 15 days schedule',
        impact: '40% breakdown reduction',
        date: '2024/06/07'
      }
    ]
  };

  const currentExamples = examples[language];
  const statusColors = {
    'فوری': 'bg-red-500',
    'کیفیت': 'bg-amber-500',
    'روتین': 'bg-blue-500',
    'Urgent': 'bg-red-500',
    'Quality': 'bg-amber-500',
    'Routine': 'bg-blue-500'
  };

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-700 mb-6">
            {language === 'fa' ? 'نمونه‌هایی از دانش ثبت شده' : 'Examples of Captured Knowledge'}
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {language === 'fa' 
              ? 'مثال‌های واقعی از دانش کارگران که در سیستم ثبت و قابل جستجو شده است'
              : 'Real examples of worker knowledge captured and made searchable in the system'
            }
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {currentExamples.map((example, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className={`${statusColors[example.status]} text-white p-4`}>
                <div className="flex items-center justify-between">
                  <h3 className="font-bold">{example.type}</h3>
                  <span className={`${statusColors[example.status].replace('500', '600')} px-2 py-1 rounded text-sm`}>
                    {example.status}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="space-y-4">
                  <div>
                    <span className="text-slate-500 text-sm">
                      {language === 'fa' ? 'دستگاه:' : 'Equipment:'}
                    </span>
                    <div className="font-semibold text-slate-700">{example.equipment}</div>
                  </div>
                  
                  <div>
                    <span className="text-slate-500 text-sm">
                      {language === 'fa' ? 'مشکل:' : 'Problem:'}
                    </span>
                    <div className="font-semibold text-slate-700">{example.problem}</div>
                  </div>
                  
                  <div>
                    <span className="text-slate-500 text-sm">
                      {language === 'fa' ? 'راه‌حل:' : 'Solution:'}
                    </span>
                    <div className="font-semibold text-slate-700">{example.solution}</div>
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between">
                      <span className="text-green-600 font-semibold">{example.impact}</span>
                      <span className="text-slate-400 text-sm">{example.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Search Demo */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-slate-700 text-center mb-8">
            {language === 'fa' ? 'جستجوی زنده - امتحان کنید!' : 'Live Search - Try It Out!'}
          </h3>
          
          <div className="max-w-2xl mx-auto">
            <div className="relative mb-6">
              <input 
                type="text" 
                placeholder={language === 'fa' 
                  ? 'مثال: CNC خرابی، کیفیت محصول، تعمیر کمپرسور...' 
                  : 'Example: CNC breakdown, product quality, compressor repair...'
                }
                className="w-full p-4 pr-12 border border-gray-300 rounded-lg text-lg"
                dir={language === 'fa' ? 'rtl' : 'ltr'}
              />
              <div className={`absolute ${language === 'fa' ? 'right-4' : 'left-4'} top-1/2 transform -translate-y-1/2`}>
                <span className="text-gray-400">🔍</span>
              </div>
            </div>
            
            {/* Sample Results */}
            <div className="space-y-3">
              <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                <div className="font-semibold text-green-700 mb-1">
                  {language === 'fa' ? 'نتیجه ۱: دستگاه CNC-452' : 'Result 1: CNC-452 Equipment'}
                </div>
                <div className="text-sm text-slate-600">
                  {language === 'fa' 
                    ? 'کد خطای E-77 - راه‌حل: بررسی سنسور دما'
                    : 'Error code E-77 - Solution: Check temperature sensor'
                  }
                </div>
                <div className="text-xs text-green-600 mt-1">
                  {language === 'fa' ? 'تطابق: ۹۵٪' : 'Match: 95%'}
                </div>
              </div>
              
              <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                <div className="font-semibold text-green-700 mb-1">
                  {language === 'fa' ? 'نتیجه ۲: دستگاه CNC-301' : 'Result 2: CNC-301 Equipment'}
                </div>
                <div className="text-sm text-slate-600">
                  {language === 'fa' 
                    ? 'مشکل مشابه - راه‌حل: restart کنترلر'
                    : 'Similar issue - Solution: Restart controller'
                  }
                </div>
                <div className="text-xs text-green-600 mt-1">
                  {language === 'fa' ? 'تطابق: ۸۷٪' : 'Match: 87%'}
                </div>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                <div className="font-semibold text-blue-700 mb-1">
                  {language === 'fa' ? 'نتیجه ۳: راهنمای عمومی CNC' : 'Result 3: General CNC Guide'}
                </div>
                <div className="text-sm text-slate-600">
                  {language === 'fa' 
                    ? 'کدهای خطای رایج و راه‌حل‌های استاندارد'
                    : 'Common error codes and standard solutions'
                  }
                </div>
                <div className="text-xs text-blue-600 mt-1">
                  {language === 'fa' ? 'تطابق: ۷۲٪' : 'Match: 72%'}
                </div>
              </div>
            </div>
            
            <div className="text-center mt-6">
              <div className="text-sm text-slate-500">
                {language === 'fa' 
                  ? '⚡ جستجو در کمتر از ۱ ثانیه • ۱۰۰۰+ مورد دانش ثبت شده'
                  : '⚡ Search in under 1 second • 1000+ knowledge entries recorded'
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExamplesSection;
