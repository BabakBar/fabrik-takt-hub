
import React from 'react';
import { ArrowDown, Mic } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23374151' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Content */}
          <div className="text-center lg:text-right" dir="rtl">
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-700 mb-6 leading-tight">
              مغز هوشمند
              <span className="text-amber-500 block">کارخانه شما</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-slate-600 mb-8 leading-relaxed">
              دانش ۲۰ ساله کارگران خود را در ۲ دقیقه جستجو کنید
            </p>
            
            <p className="text-lg text-slate-500 mb-10 max-w-2xl mx-auto lg:mx-0">
              سیستم هوش مصنوعی که تجربه کارگران بازنشسته را حفظ و قابل جستجو می‌کند
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end">
              <button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                عضویت در برنامه آزمایشی
              </button>
              <button className="border-2 border-slate-400 text-slate-600 hover:bg-slate-50 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300">
                مشاهده نحوه کارکرد
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-500">95%+</div>
                <div className="text-sm text-slate-500">دقت تشخیص فارسی</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-500">2-3s</div>
                <div className="text-sm text-slate-500">سرعت پردازش</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-amber-500">1000+</div>
                <div className="text-sm text-slate-500">دانش ثبت شده</div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md mx-auto">
              {/* Telegram Interface Mockup */}
              <div className="bg-blue-500 text-white p-4 rounded-t-lg flex items-center gap-3">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <span className="text-blue-500 font-bold text-sm">T</span>
                </div>
                <div>
                  <div className="font-semibold">FabrikTakt Bot</div>
                  <div className="text-xs opacity-75">آنلاین</div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-4 space-y-4 h-64">
                {/* Voice Message */}
                <div className="flex justify-end">
                  <div className="bg-blue-500 text-white p-3 rounded-lg max-w-xs" dir="rtl">
                    <div className="flex items-center gap-2 mb-1">
                      <Mic size={16} />
                      <span className="text-xs">پیام صوتی 0:15</span>
                    </div>
                    <div className="text-sm">
                      دستگاه CNC شماره ۴۵۲ متوقف شده...
                    </div>
                  </div>
                </div>

                {/* AI Response */}
                <div className="flex justify-start">
                  <div className="bg-white p-3 rounded-lg shadow-sm max-w-xs" dir="rtl">
                    <div className="text-sm text-slate-700">
                      ✅ دانش ثبت شد
                      <br />
                      🔍 جستجوی مشابه: /search CNC E-77
                    </div>
                  </div>
                </div>

                {/* Search Result */}
                <div className="flex justify-start">
                  <div className="bg-green-50 border border-green-200 p-3 rounded-lg max-w-xs" dir="rtl">
                    <div className="text-xs text-green-600 font-semibold mb-1">راه‌حل یافت شد</div>
                    <div className="text-sm text-slate-700">
                      بررسی سنسور دما و restart controller
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-amber-500 text-white p-3 rounded-full animate-pulse">
              <Mic size={20} />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-green-500 text-white p-3 rounded-full">
              <ArrowDown size={20} />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-slate-400" size={24} />
      </div>
    </section>
  );
};

export default HeroSection;
