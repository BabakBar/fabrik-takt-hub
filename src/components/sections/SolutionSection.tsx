import React from 'react';
import { motion } from 'motion/react';
import { Mic, Search, Brain, Sparkles } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import SectionCard from "../ui/SectionCard";
import { useRevealOnScroll, staggerVariants } from '../../hooks/useAnimations';

const SolutionSection = () => {
  const { t, language } = useLanguage();
  const { ref, isInView } = useRevealOnScroll();

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
        <div className="bg-white border border-slate-200 p-4 rounded-lg text-left shadow-sm">
          <div className="flex items-center gap-2 text-slate-800 font-medium mb-3">
            <Brain className="w-4 h-4" />
            {t('solution.analysisResult')}
          </div>
          <div className="space-y-2 text-sm text-slate-700">
            <div className="bg-slate-50 p-2 rounded-md border border-slate-200">{t('solution.equipment')}</div>
            <div className="bg-slate-50 p-2 rounded-md border border-slate-200">{t('solution.type')}</div>
            <div className="bg-slate-50 p-2 rounded-md border border-slate-200">{t('solution.errorCode')}</div>
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
        <div className="bg-white border border-slate-200 p-4 rounded-lg text-left shadow-sm">
          <div className="flex items-center gap-2 text-green-700 font-medium mb-3">
            <Sparkles className="w-4 h-4" />
            {t('solution.searchQuery')}
          </div>
          <div className="bg-slate-50 p-3 rounded-md border-l-4 border-green-400 text-sm text-slate-700">
            {t('solution.searchResult')}
          </div>
          <div className="flex items-center justify-between mt-2 text-xs font-medium">
            <div className="text-green-700">{t('solution.solveTime')}</div>
            <div className="text-slate-600">98% Match</div>
          </div>
        </div>
      )
    }
  ];

  return (
    <motion.section 
      ref={ref}
      className="py-16 bg-surface relative"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* SVG "bridge" shape for narrative connection, only on large screens */}
      <div className="absolute -top-36 left-1/2 -translate-x-1/2 z-0 pointer-events-none hidden md:block">
        <svg width="750" height="180" viewBox="0 0 750 150" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-15">
          <ellipse cx="390" cy="75" rx="350" ry="60" fill="#dbeafe"/>
          <ellipse cx="450" cy="80" rx="160" ry="48" fill="#fef3c7"/>
        </svg>
      </div>
      <div className="container mx-auto px-4 z-10 relative">
        <SectionCard floating overlapTop className="mb-16 bg-white/95 backdrop-blur-[1.5px] shadow-2xl">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-3 bg-amber-100 border border-amber-200/80 px-6 py-2.5 rounded-full text-amber-700 font-semibold mb-4 shadow-sm">
              <Sparkles className="w-5 h-5" />
              <span className="tracking-wide">{language === 'fa' ? 'راه حل ۳ مرحله‌ای' : 'The 3-Step Solution'}</span>
            </div>
            <h2 className="text-4xl font-extrabold text-slate-900 mb-3 tracking-tight">
              {language === 'fa' ? 'از آشفتگی به شفافیت در چند دقیقه' : 'From Chaos to Clarity in Minutes'}
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              {language === 'fa'
                ? 'فابریک‌تکت واقعیت خام کارگاه شما را ثبت و آن را به هوش ساختاریافته و عملی تبدیل می‌کند که تیم شما را راهنمایی می‌کند.'
                : "FabrikTakt captures raw shop floor reality and transforms it into structured, actionable intelligence that guides your team."
              }
            </p>
          </div>

          <motion.div 
            className="grid lg:grid-cols-3 gap-8 mb-16"
            variants={staggerVariants.container}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {steps.map((step, index) => (
              <motion.div key={index} variants={staggerVariants.item}>
                <SectionCard floating={false} className="bg-white/95 shadow-sm border border-slate-100 p-6">
                  <div className="relative inline-block mb-6">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mx-auto ${step.iconBg} shadow-md`}>
                      <step.icon className="text-white w-7 h-7" />
                    </div>
                    <div className="absolute -top-2 -right-2 bg-slate-800 text-white w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs shadow-md border-2 border-white">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2 tracking-tight">{step.title}</h3>
                  <p className="text-slate-500 mb-5 leading-relaxed min-h-[96px] text-base">{step.desc}</p>
                  {step.demo}
                </SectionCard>
              </motion.div>
            ))}
          </motion.div>


        </SectionCard>
      </div>
    </motion.section>
  );
};

export default SolutionSection;
