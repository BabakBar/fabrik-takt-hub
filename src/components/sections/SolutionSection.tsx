
import React from 'react';
import { Microphone, Search, ArrowDown } from 'lucide-react';

const SolutionSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" dir="rtl">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-700 mb-6">
            آشنایی با تکت: دستیار هوشمند کارخانه شما
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            سیستم ساده و قدرتمند که دانش کارگران را در ۳ گام ساده حفظ و قابل جستجو می‌کند
          </p>
        </div>

        {/* 3-Step Process */}
        <div className="relative">
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-1/2 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 transform -translate-y-1/2"></div>
          
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Step 1: Capture */}
            <div className="text-center relative">
              <div className="bg-amber-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Microphone className="text-white" size={32} />
              </div>
              <div className="absolute -top-4 -right-4 bg-amber-100 text-amber-600 w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg">
                1
              </div>
              
              <h3 className="text-2xl font-bold text-slate-700 mb-4" dir="rtl">ضبط</h3>
              <p className="text-slate-600 mb-6" dir="rtl">
                کارگر از طریق تلگرام صدا یا متن ارسال می‌کند
              </p>
              
              {/* Example */}
              <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg" dir="rtl">
                <div className="flex items-center gap-2 justify-center mb-2">
                  <Microphone size={16} className="text-blue-500" />
                  <span className="text-sm text-blue-600">پیام صوتی</span>
                </div>
                <p className="text-sm text-slate-700">
                  "دستگاه CNC شماره ۴۵۲ متوقف شده و کد خطای E-77 میده"
                </p>
              </div>
            </div>

            {/* Step 2: Structure */}
            <div className="text-center relative">
              <div className="bg-purple-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <div className="text-white text-2xl">🧠</div>
              </div>
              <div className="absolute -top-4 -right-4 bg-purple-100 text-purple-600 w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg">
                2
              </div>
              
              <h3 className="text-2xl font-bold text-slate-700 mb-4" dir="rtl">تجزیه و تحلیل</h3>
              <p className="text-slate-600 mb-6" dir="rtl">
                هوش مصنوعی اطلاعات را تحلیل و دسته‌بندی می‌کند
              </p>
              
              {/* Analysis Result */}
              <div className="bg-purple-50 border border-purple-200 p-4 rounded-lg space-y-2" dir="rtl">
                <div className="text-xs text-purple-600 font-semibold">نتیجه تحلیل AI:</div>
                <div className="text-sm space-y-1">
                  <div>🏭 دستگاه: CNC-452</div>
                  <div>⚠️ نوع: خرابی</div>
                  <div>🔧 کد خطا: E-77</div>
                </div>
              </div>
            </div>

            {/* Step 3: Retrieve */}
            <div className="text-center relative">
              <div className="bg-green-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Search className="text-white" size={32} />
              </div>
              <div className="absolute -top-4 -right-4 bg-green-100 text-green-600 w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg">
                3
              </div>
              
              <h3 className="text-2xl font-bold text-slate-700 mb-4" dir="rtl">بازیابی</h3>
              <p className="text-slate-600 mb-6" dir="rtl">
                کارگران دیگر راه‌حل را فوراً پیدا می‌کنند
              </p>
              
              {/* Search Result */}
              <div className="bg-green-50 border border-green-200 p-4 rounded-lg" dir="rtl">
                <div className="text-xs text-green-600 font-semibold mb-2">جستجو: CNC E-77</div>
                <div className="text-sm text-slate-700">
                  ✅ راه‌حل: بررسی سنسور دما و restart controller
                </div>
                <div className="text-xs text-green-500 mt-1">زمان حل: کمتر از ۲ ثانیه</div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Details */}
        <div className="mt-16 bg-slate-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-slate-700 text-center mb-8" dir="rtl">
            مبتنی بر پیشرفته‌ترین تکنولوژی‌ها
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-2xl mb-2">🤖</div>
                <div className="font-semibold text-slate-700">Google Gemini 2.0 Pro</div>
                <div className="text-sm text-slate-500" dir="rtl">هوش مصنوعی پیشرفته</div>
              </div>
            </div>
            <div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-2xl mb-2">⚡</div>
                <div className="font-semibold text-slate-700">2-3 ثانیه</div>
                <div className="text-sm text-slate-500" dir="rtl">سرعت پردازش</div>
              </div>
            </div>
            <div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-2xl mb-2">🎯</div>
                <div className="font-semibold text-slate-700">95%+ دقت</div>
                <div className="text-sm text-slate-500" dir="rtl">تشخیص اصطلاحات فارسی</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
