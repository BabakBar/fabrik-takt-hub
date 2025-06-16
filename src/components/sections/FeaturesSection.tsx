import React, { useState } from 'react';
import { motion } from 'motion/react';
import { BrainCircuit, ListChecks, LineChart, Wrench, Sparkles, Brain } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import PilotModal from '../modals/PilotModal';
import SectionCard from "../ui/SectionCard";
import { useRevealOnScroll, staggerVariants } from '../../hooks/useAnimations';

const FeaturesSection = () => {
  const { t, language } = useLanguage();
  const [isPilotModalOpen, setIsPilotModalOpen] = useState(false);
  const { ref, isInView } = useRevealOnScroll();

  const openPilotModal = () => setIsPilotModalOpen(true);
  const closePilotModal = () => setIsPilotModalOpen(false);

  const features = [
    {
      icon: BrainCircuit,
      title: language === 'fa' ? 'مرکز دانش متمرکز' : 'Centralized Knowledge Hub',
      desc: language === 'fa' ? 'یک حافظه زنده و قابل جستجو از هر راه‌حل، فرآیند و بهترین عملکرد از باتجربه‌ترین کارگران خود ایجاد کنید.' : 'Create a living, searchable memory of every fix, process, and best practice from your most experienced workers.',
      iconBg: 'bg-blue-500'
    },
    {
      icon: ListChecks,
      title: language === 'fa' ? 'دستورالعمل‌های کاری دیجیتال' : 'Dynamic Work Instructions',
      desc: language === 'fa' ? 'اپراتورها را با دستورالعمل‌های واضح و گام‌به‌گام راهنمایی کنید که با کار، ماشین و سطح مهارت خاص سازگار است.' : 'Guide operators with clear, step-by-step instructions that adapt to the specific job, machine, and skill level.',
      iconBg: 'bg-green-500'
    },
    {
      icon: LineChart,
      title: language === 'fa' ? 'دید آنی عملیاتی' : 'Real-Time Operational Visibility',
      desc: language === 'fa' ? 'وضعیت کار، زمان توقف و کیفیت را به صورت آنی نظارت کنید تا تصمیمات پیشگیرانه و مبتنی بر داده بگیرید.' : 'Monitor job status, downtime, and quality in real-time to make proactive, data-driven decisions.',
      iconBg: 'bg-amber-500'
    },
    {
      icon: Wrench,
      title: language === 'fa' ? 'هوشمندی نگهداری و تعمیرات' : 'AI-Powered Maintenance',
      desc: language === 'fa' ? 'فعالیت‌های نگهداری را به رویدادهای تولیدی مرتبط کنید. با بینش‌های حاصل از داده‌های تاریخی، مشکلات را پیش‌بینی کنید.' : 'Link maintenance activities to production events. Predict issues and reduce downtime with insights from historical data.',
      iconBg: 'bg-slate-700'
    }
  ];

  return (
    <>
      <motion.section 
        ref={ref}
        className="py-8 bg-slate-50 relative overflow-visible"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* SVG Pattern/Blob bridges with SolutionSection */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 z-0 pointer-events-none hidden md:block">
          <svg width="720" height="220" viewBox="0 0 720 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-20">
            <ellipse cx="360" cy="110" rx="320" ry="80" fill="#fbe3b6"/>
            <ellipse cx="430" cy="103" rx="140" ry="47" fill="#e0f2fe"/>
          </svg>
        </div>

        <div className="container mx-auto px-4 z-10 relative">
          <SectionCard floating overlapTop className="mb-20 shadow-2xl bg-white/95 backdrop-blur-[1.5px]">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 bg-amber-100 border border-amber-200/80 px-6 py-2.5 rounded-full text-amber-700 font-semibold mb-5 shadow-sm">
                <Sparkles className="w-5 h-5" />
                <span className="tracking-wide">{language === 'fa' ? 'قابلیت‌های کلیدی' : 'Core Capabilities'}</span>
              </div>
              <h2 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight leading-tight">
                {language === 'fa' ? 'یک هاب، کنترل کامل عملیاتی' : 'One Hub, Total Operational Control'}
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                {language === 'fa'
                  ? 'فابریک‌تکت چیزی فراتر از یک ابزار است - این سیستم عصبی مرکزی کارخانه شماست. ببینید چه کارهایی می‌توانید انجام دهید.'
                  : "FabrikTakt is more than a tool—it's your factory's central nervous system. Here’s what it empowers you to do."
                }
              </p>
            </div>

            <motion.div 
              className="grid lg:grid-cols-2 gap-8 mb-16"
              variants={staggerVariants.container}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {features.map((feature, index) => (
                <motion.div key={index} variants={staggerVariants.item}>
                  <SectionCard floating={false} className="bg-white/95 shadow-md border border-slate-100 p-7">
                    <div className="flex items-center gap-5 mb-4">
                      <div className={`p-3 rounded-lg shadow-md ${feature.iconBg}`}>
                        <feature.icon className="text-white w-7 h-7" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-800 tracking-tight">{feature.title}</h3>
                    </div>
                    <p className="text-slate-600 leading-relaxed min-h-[76px] text-base">{feature.desc}</p>
                  </SectionCard>
                </motion.div>
              ))}
            </motion.div>

            <SectionCard floating={false} className="bg-slate-900 text-white p-8 rounded-2xl max-w-4xl mx-auto shadow-lg mt-8">
              <h3 className="text-2xl font-bold mb-2 tracking-tight">
                {language === "fa" ? "آماده برای تحول عملیات خود هستید؟" : "Ready to Transform Your Operations?"}
              </h3>
              <p className="text-slate-300 mb-6 text-base">
                {language === "fa"
                  ? "به برنامه آزمایشی محدود ما بپیوندید و ببینید چگونه FabrikTakt می‌تواند کارخانه شما را متحول کند"
                  : "Join our limited pilot program and see how FabrikTakt can transform your factory"
                }
              </p>
              <button
                onClick={openPilotModal}
                className="bg-amber-500 text-white px-7 py-3 rounded-lg font-semibold hover:bg-amber-600 transition-colors flex items-center gap-3 mx-auto shadow-lg shadow-amber-500/25"
              >
                <Brain className="w-5 h-5" />
                {language === "fa" ? "شروع پایلوت رایگان" : "Start Free Pilot"}
              </button>
            </SectionCard>
          </SectionCard>
        </div>
      </motion.section>
      <PilotModal isOpen={isPilotModalOpen} onClose={closePilotModal} />
    </>
  );
};

export default FeaturesSection;
