import React from 'react';
import { ArrowDown, Mic, Sparkles, Brain, Play } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const HeroSection = () => {
  const { t, language } = useLanguage();

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="space-y-8">
              {/* AI Badge */}
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-500/20 to-orange-500/20 backdrop-blur-sm border border-amber-500/30 px-6 py-3 rounded-full text-amber-300 font-medium animate-gentle-fade shadow-lg shadow-amber-500/20">
                <Brain className="w-5 h-5 text-amber-400" />
                <span className="text-sm">{language === 'fa' ? 'هوش مصنوعی پیشرفته' : 'Advanced AI Technology'}</span>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>

              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                  {language === 'fa' ? 'جستجوی 20 سال دانش کارگری در 2 دقیقه' : 'Search 20 years of worker knowledge in 2 minutes'}
                </h1>
                
                <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
                  {language === 'fa' 
                    ? 'با هوش مصنوعی پیشرفته، مشکلات فنی کارخانه را با گفتار حل کنید'
                    : 'Solve manufacturing problems instantly with voice-powered AI that understands your factory'
                  }
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-105 flex items-center justify-center gap-3">
                  <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  {language === 'fa' ? 'شروع پایلوت رایگان' : 'Join Pilot Program'}
                </button>
                <button className="group border-2 border-slate-600 text-slate-300 hover:border-amber-500 hover:bg-amber-500/10 hover:text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 backdrop-blur-sm">
                  {language === 'fa' ? 'مشاهده نحوه کار' : 'See How It Works'}
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-slate-700/50">
                {[
                  { value: '95%+', label: language === 'fa' ? 'دقت تشخیص' : 'Recognition Accuracy' },
                  { value: '2-3s', label: language === 'fa' ? 'سرعت پردازش' : 'Processing Speed' },
                  { value: '1000+', label: language === 'fa' ? 'مدخل دانش' : 'Knowledge Entries' }
                ].map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="text-3xl font-bold text-amber-400 group-hover:scale-110 transition-transform mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-slate-400 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Chat Interface Demo */}
            <div className="relative">
              <div className="relative bg-slate-900/50 backdrop-blur-sm ring-1 ring-white/10 rounded-2xl shadow-2xl overflow-hidden max-w-md mx-auto">
                {/* Header */}
                <div className="bg-slate-800/70 px-4 py-3 flex items-center gap-3 border-b border-white/10">
                  <div className="relative">
                    <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center">
                      <Brain className="text-white w-5 h-5" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-slate-800/70"></div>
                  </div>
                  <div>
                    <div className="font-semibold text-white">FabrikTakt Bot</div>
                    <div className="text-xs text-slate-400 flex items-center gap-1.5">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      Online
                    </div>
                  </div>
                </div>
                
                {/* Messages */}
                <div className="p-4 space-y-4 bg-slate-800/50 min-h-[400px]">
                  {/* User Message */}
                  <div className="flex justify-end">
                    <div className="max-w-xs">
                      <div className="bg-amber-500 text-white p-3 rounded-xl rounded-br-none">
                        <div className="flex items-center gap-2 text-amber-100 mb-1 text-xs font-medium">
                          <Mic size={14} />
                          <span>Voice message 0:15</span>
                        </div>
                        <div className="text-sm">
                          {language === 'fa' 
                            ? 'دستگاه سی‌ان‌سی شماره 452 خراب شده'
                            : 'CNC machine #452 stopped working'
                          }
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Processing */}
                  <div className="flex justify-start">
                    <div className="bg-slate-700/80 border border-slate-600 p-3 rounded-xl flex items-center gap-2 shadow-sm">
                      <div className="flex gap-1.5">
                        <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                        <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                      </div>
                      <span className="text-sm text-slate-300">Processing...</span>
                    </div>
                  </div>

                  {/* AI Response */}
                  <div className="flex justify-start">
                    <div className="max-w-xs bg-white/90 backdrop-blur-sm border border-slate-200/50 p-4 rounded-xl rounded-bl-none shadow-lg">
                      <div className="flex items-center gap-2 text-green-600 font-bold mb-2 text-sm">
                        <Sparkles size={16} className="text-green-500" />
                        Solution Found
                      </div>
                      <div className="text-sm text-slate-800 mb-3 leading-relaxed">
                        {language === 'fa'
                          ? 'مشکل احتمالی: خرابی موتور اسپیندل. بررسی کنید: کابل برق، فیوز، و سنسور دما'
                          : 'Likely issue: Spindle motor failure. Check: Power cable, fuse, and temperature sensor'
                        }
                      </div>
                      <div className="flex items-center justify-between text-xs font-medium border-t border-slate-200 pt-2">
                        <span className="text-green-600 flex items-center gap-1"><Sparkles size={12} /> Solved in 0.8s</span>
                        <span className="text-slate-500">98% match</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 text-slate-400 group cursor-pointer" onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}>
          <span className="text-sm font-medium group-hover:text-amber-400 transition-colors">
            {language === 'fa' ? 'ادامه مطالب' : 'Explore More'}
          </span>
          <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center group-hover:border-amber-500 transition-colors">
            <div className="w-1 h-3 bg-slate-500 rounded-full mt-2 animate-bounce group-hover:bg-amber-400"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
