
import React from 'react';
import { motion } from 'motion/react';
import { AlertTriangle, TrendingDown, Clock, DollarSign, BrainCircuit, Users, EyeOff, GitFork, Target } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { useRevealOnScroll, staggerVariants } from '../../hooks/useAnimations';

const ProblemSection = () => {
  const { t, language } = useLanguage();
  const { ref, isInView } = useRevealOnScroll();

  const painPoints = [
    {
      title: language === 'fa' ? 'دانش پراکنده' : 'Fragmented Knowledge',
      desc: language === 'fa' ? 'راه‌حل‌های حیاتی در دفترچه‌ها و حافظه‌ها گم شده و تیم شما را مجبور به حل مکرر مشکلات می‌کند.' : 'Critical fixes get lost in notebooks and memory, forcing your team to solve the same problems repeatedly.',
      icon: BrainCircuit,
      iconColor: 'text-red-500'
    },
    {
      title: language === 'fa' ? 'نقاط کور عملیاتی' : 'Operational Blind Spots',
      desc: language === 'fa' ? 'عدم دید آنی منجر به توقف‌های غیرمنتظره، زمان‌بندی ناکارآمد و مشکلات کیفیتی ردیابی‌ناپذیر می‌شود.' : 'Lack of real-time visibility leads to surprise downtime, inefficient scheduling, and quality issues that are hard to trace.',
      icon: EyeOff,
      iconColor: 'text-amber-500'
    },
    {
      title: language === 'fa' ? 'موانع آموزشی' : 'Training Bottlenecks',
      desc: language === 'fa' ? 'آموزش اپراتورهای جدید کند و ناهماهنگ است زیرا دانش عملی و تجربی به راحتی در دسترس نیست.' : 'Onboarding new operators is slow and inconsistent when practical, experience-based knowledge isn\'t easily accessible.',
      icon: Users,
      iconColor: 'text-blue-500'
    }
  ];

  return (
    <motion.section 
      ref={ref}
      className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 bg-red-100 border border-red-200/80 px-6 py-3 rounded-full text-red-600 font-semibold mb-6 shadow-sm">
              <AlertTriangle className="w-5 h-5" />
              <span>{language === 'fa' ? 'چالش اصلی صنعت' : 'The Core Industry Challenge'}</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              {language === 'fa' 
                ? 'هزینه‌های پنهانی که سودآوری شما را از بین می‌برد'
                : 'The Hidden Costs Draining Your Factory\'s Profitability'
              }
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              {language === 'fa'
                ? 'مشکل فراتر از بازنشستگی متخصصان است. داده‌های پراکنده، ارتباطات جزیره‌ای و نقاط کور عملیاتی روزانه باعث ناکارآمدی می‌شوند.'
                : 'It\'s more than just retiring experts. Fragmented data, communication silos, and operational blind spots create daily inefficiencies.'
              }
            </p>
          </div>

          {/* Statistics Grid */}
          <motion.div
            className="grid md:grid-cols-3 gap-8 mb-24"
            variants={staggerVariants.container}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {[
              { icon: TrendingDown, stat: '40%', label: language === 'fa' ? 'کاهش بهره‌وری' : 'Productivity Loss', color: 'red' },
              { icon: Clock, stat: '2-3h', label: language === 'fa' ? 'زمان حل مشکل' : 'Problem Resolution', color: 'amber' },
              { icon: DollarSign, stat: '$2M+', label: language === 'fa' ? 'هزینه توقف تولید' : 'Downtime Costs', color: 'slate' }
            ].map((item, index) => (
              <motion.div key={index} variants={staggerVariants.item}>
                <div className="bg-white p-8 rounded-2xl shadow-md border border-slate-100 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
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
              </motion.div>
            ))}
          </motion.div>

          {/* Problem Points */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-slate-900">
                {language === 'fa' ? 'چرا کارخانه شما کارایی لازم را ندارد؟' : 'Why Your Factory is Leaking Efficiency'}
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
    </motion.section>
  );
};

export default ProblemSection;
