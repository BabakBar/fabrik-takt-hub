import React from 'react';
import { Mic, Search, Brain, Sparkles, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const SolutionSection = () => {
  const { t, language } = useLanguage();

  const steps = [
    {
      icon: Mic,
      iconBg: 'bg-amber-500',
      title: t('solution.step1Title'),
      desc: language === 'fa' ? 'اپراتورها و تکنسین‌ها مشکلات، راه‌حل‌ها و به‌روزرسانی‌ها را با استفاده از صدا یا متن ساده ثبت می‌کنند.' : 'Operators and technicians log issues, fixes, and updates using simple voice or text. No complex forms, no workflow disruption.',
      demo: (
        <div className="bg-slate-50 border border-slate-200 p-4 rounded-lg text-left">
          <div className="flex items-center gap-2 mb-3">
            <Mic size={14} className="text-amber-600" />
            <span className="text-sm font-medium text-slate-700">{t('solution.voiceMessage')}</span>
          </div>
          <p className="text-sm text-slate-700 bg-white p-3 rounded-md border border-slate-200">
            "{t('solution.exampleInput')}"
          </p>
        </div>
      )
    },
    {
      icon: Brain,
      iconBg: 'bg-slate-700',
      title: t('solution.step2Title'),
      desc: language === 'fa' ? 'هوش مصنوعی فوراً اطلاعات را درک، ساختاربندی و به ماشین و فرآیند صحیح مرتبط کرده و حافظه کارخانه شما را می‌سازد.' : 'Our AI instantly understands, structures, and links the information to the right machine and process, building your factory\'s memory.',
      demo: (
        <div className="bg-slate-50 border border-slate-200 p-4 rounded-lg text-left">
          <div className="flex items-center gap-2 text-slate-700 font-medium mb-3">
            <Brain className="w-4 h-4" />
            {t('solution.analysisResult')}
          </div>
          <div className="space-y-2 text-sm text-slate-700">
            <div className="bg-white p-2 rounded-md border border-slate-200">{t('solution.equipment')}</div>
            <div className="bg-white p-2 rounded-md border border-slate-200">{t('solution.type')}</div>
            <div className="bg-white p-2 rounded-md border border-slate-200">{t('solution.errorCode')}</div>
          </div>
        </div>
      )
    },
    {
      icon: Search,
      iconBg: 'bg-green-500',
      title: t('solution.step3Title'),
      desc: language === 'fa' ? 'هر کسی می‌تواند با زبان طبیعی از سیستم سؤال کند تا پاسخ‌های فوری و راهنمایی‌های عملی برای حل سریع‌تر مشکلات دریافت کند.' : 'Anyone can query the system in natural language to get immediate answers and actionable guidance for faster problem-solving.',
      demo: (
        <div className="bg-slate-50 border border-slate-200 p-4 rounded-lg text-left">
          <div className="flex items-center gap-2 text-green-600 font-medium mb-3">
            <Sparkles className="w-4 h-4" />
            {t('solution.searchQuery')}
          </div>
          <div className="bg-white p-3 rounded-md border-l-4 border-green-400 text-sm text-slate-700">
            {t('solution.searchResult')}
          </div>
          <div className="flex items-center justify-between mt-2 text-xs font-medium">
            <div className="text-green-600">{t('solution.solveTime')}</div>
            <div className="text-slate-500">98% Match</div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 bg-amber-100 border border-amber-200/80 px-6 py-3 rounded-full text-amber-700 font-semibold mb-6 shadow-sm">
              <Sparkles className="w-5 h-5" />
              <span>{language === 'fa' ? 'راه حل ۳ مرحله‌ای' : 'The 3-Step Solution'}</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              {language === 'fa' ? 'از آشفتگی به شفافیت در چند دقیقه' : 'From Chaos to Clarity in Minutes'}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              {language === 'fa' 
                ? 'فابریک‌تکت واقعیت خام کارگاه شما را ثبت و آن را به هوش ساختاریافته و عملی تبدیل می‌کند که تیم شما را راهنمایی می‌کند.'
                : 'FabrikTakt captures raw shop floor reality and transforms it into structured, actionable intelligence that guides your team.'
              }
            </p>
          </div>

          {/* Clean 3-Step Process */}
          <div className="grid lg:grid-cols-3 gap-8 mb-24">
            {steps.map((step, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-md border border-slate-100">
                <div className="relative inline-block mb-6">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto ${step.iconBg} shadow-lg`}>
                    <step.icon className="text-white w-8 h-8" />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-slate-800 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shadow-md border-2 border-white">
                    {index + 1}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-500 mb-6 leading-relaxed min-h-[120px]">
                  {step.desc}
                </p>
                {step.demo}
              </div>
            ))}
          </div>

          {/* Simple CTA */}
          <div className="text-center">
            <div className="bg-amber-500 text-white p-10 rounded-2xl max-w-4xl mx-auto shadow-2xl shadow-amber-500/30">
              <h3 className="text-3xl font-bold mb-4">
                {language === 'fa' ? 'آماده تجربه آینده؟' : 'Ready to Experience the Future?'}
              </h3>
              <p className="text-amber-100 mb-6 text-lg">
                {language === 'fa' 
                  ? 'ببینید چگونه این فناوری کارخانه شما را متحول می‌کند'
                  : 'See how this technology transforms your manufacturing operations'
                }
              </p>
              <button className="bg-white text-amber-600 px-8 py-3 rounded-lg font-semibold hover:bg-amber-50 transition-colors flex items-center gap-2 mx-auto shadow-md">
                {language === 'fa' ? 'مشاهده نمونه‌ها' : 'See Live Examples'}
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
