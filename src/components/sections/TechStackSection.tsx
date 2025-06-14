
import React from 'react';

const TechStackSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" dir="rtl">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-700 mb-6">
            تکنولوژی سازمانی در سطح شرکت‌های بزرگ
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            ترکیب پیشرفته‌ترین ابزارهای هوش مصنوعی با زیرساخت امن و مقیاس‌پذیر
          </p>
        </div>

        {/* Architecture Diagram */}
        <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 mb-16">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* User Interface */}
            <div className="text-center">
              <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">T</span>
              </div>
              <h3 className="text-xl font-bold text-slate-700 mb-2" dir="rtl">رابط کاربری</h3>
              <p className="text-slate-600 text-sm" dir="rtl">تلگرام - آشنا و ساده</p>
              <div className="mt-4 bg-white p-4 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-blue-500">2B+</div>
                <div className="text-xs text-slate-500" dir="rtl">کاربر جهانی</div>
              </div>
            </div>

            {/* AI Processing */}
            <div className="text-center">
              <div className="bg-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🧠</span>
              </div>
              <h3 className="text-xl font-bold text-slate-700 mb-2" dir="rtl">هوش مصنوعی</h3>
              <p className="text-slate-600 text-sm" dir="rtl">Google Gemini 2.0 Pro</p>
              <div className="mt-4 bg-white p-4 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-purple-500">95%+</div>
                <div className="text-xs text-slate-500" dir="rtl">دقت فارسی</div>
              </div>
            </div>

            {/* Database */}
            <div className="text-center">
              <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🗄️</span>
              </div>
              <h3 className="text-xl font-bold text-slate-700 mb-2" dir="rtl">پایگاه داده</h3>
              <p className="text-slate-600 text-sm" dir="rtl">PostgreSQL + Supabase</p>
              <div className="mt-4 bg-white p-4 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-green-500">99.9%</div>
                <div className="text-xs text-slate-500" dir="rtl">در دسترس بودن</div>
              </div>
            </div>
          </div>

          {/* Flow Arrows */}
          <div className="hidden lg:block mt-8">
            <div className="flex justify-center items-center space-x-8">
              <div className="flex-1 h-0.5 bg-gradient-to-r from-blue-300 to-purple-300"></div>
              <span className="text-slate-400">➤</span>
              <div className="flex-1 h-0.5 bg-gradient-to-r from-purple-300 to-green-300"></div>
            </div>
          </div>
        </div>

        {/* Technical Details */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Google Gemini */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 text-center">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold">G</span>
            </div>
            <h4 className="font-bold text-slate-700 mb-2" dir="rtl">Google Gemini 2.0</h4>
            <p className="text-sm text-slate-600 mb-4" dir="rtl">
              پیشرفته‌ترین هوش مصنوعی برای تحلیل محتوا
            </p>
            <div className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
              Latest AI Model
            </div>
          </div>

          {/* Telegram Integration */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 text-center">
            <div className="bg-blue-500 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-lg">T</span>
            </div>
            <h4 className="font-bold text-slate-700 mb-2" dir="rtl">تلگرام</h4>
            <p className="text-sm text-slate-600 mb-4" dir="rtl">
              واسط کاربری آشنا، بدون نیاز به آموزش
            </p>
            <div className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
              2 Billion Users
            </div>
          </div>

          {/* Supabase */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 text-center">
            <div className="bg-green-500 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <h4 className="font-bold text-slate-700 mb-2" dir="rtl">Supabase</h4>
            <p className="text-sm text-slate-600 mb-4" dir="rtl">
              ذخیره‌سازی امن و مقیاس‌پذیر
            </p>
            <div className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
              Enterprise Security
            </div>
          </div>

          {/* Performance */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 text-center">
            <div className="bg-amber-500 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-lg">⚡</span>
            </div>
            <h4 className="font-bold text-slate-700 mb-2" dir="rtl">عملکرد بالا</h4>
            <p className="text-sm text-slate-600 mb-4" dir="rtl">
              سرعت و دقت در هر جستجو
            </p>
            <div className="bg-amber-50 text-amber-700 px-3 py-1 rounded-full text-xs font-semibold">
              Sub-second Search
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="mt-16 bg-slate-800 text-white rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center mb-8" dir="rtl">
            شاخص‌های عملکرد واقعی
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-amber-400 mb-2">99.9%</div>
              <div className="text-slate-300" dir="rtl">زمان در دسترس بودن</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-amber-400 mb-2">&lt;1s</div>
              <div className="text-slate-300" dir="rtl">سرعت جستجو</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-amber-400 mb-2">Military</div>
              <div className="text-slate-300" dir="rtl">رمزگذاری نظامی</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
