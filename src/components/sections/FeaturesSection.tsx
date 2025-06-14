
import React from 'react';
import { Mic, Search } from 'lucide-react';

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" dir="rtl">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-700 mb-6">
            ویژگی‌های طراحی شده برای کارخانه‌های ایرانی
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            هر ویژگی با درک عمیق از نیازهای واقعی تولیدکنندگان طراحی شده است
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Feature 1: Voice Capture */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center gap-4 mb-6" dir="rtl">
              <div className="bg-blue-100 p-3 rounded-full">
                <Mic className="text-blue-600" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-slate-700">ضبط آسان صدا و متن</h3>
            </div>
            
            <p className="text-slate-600 mb-6" dir="rtl">
              کارگران مثل WhatsApp با تلگرام صحبت می‌کنند - بدون نیاز به آموزش یا تغییر عادات
            </p>

            {/* Demo */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-3" dir="rtl">
                <span className="text-blue-500 font-semibold">✓ پشتیبانی کامل از زبان فارسی</span>
              </div>
              <div className="flex items-center gap-2 mb-3" dir="rtl">
                <span className="text-blue-500 font-semibold">✓ تشخیص اصطلاحات تخصصی</span>
              </div>
              <div className="flex items-center gap-2" dir="rtl">
                <span className="text-blue-500 font-semibold">✓ ضبط پیام‌های صوتی و متنی</span>
              </div>
            </div>
          </div>

          {/* Feature 2: AI Analysis */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center gap-4 mb-6" dir="rtl">
              <div className="bg-purple-100 p-3 rounded-full">
                <div className="text-purple-600 text-xl">🧠</div>
              </div>
              <h3 className="text-2xl font-bold text-slate-700">تحلیل هوشمند محتوا</h3>
            </div>
            
            <p className="text-slate-600 mb-6" dir="rtl">
              شناسایی خودکار دستگاه، نوع مشکل، و عوامل مرتبط برای دسته‌بندی و جستجوی بهتر
            </p>

            <div className="space-y-3">
              <div className="bg-purple-50 p-3 rounded-lg" dir="rtl">
                <div className="font-semibold text-purple-700">ورودی:</div>
                <div className="text-sm">"پرس شماره ۳ صدای عجیبی میده"</div>
              </div>
              <div className="text-center">⬇️</div>
              <div className="bg-green-50 p-3 rounded-lg" dir="rtl">
                <div className="font-semibold text-green-700">خروجی ساختاریافته:</div>
                <div className="text-sm space-y-1">
                  <div>🏭 دستگاه: Press-3</div>
                  <div>🔧 دسته: نگهداری پیشگیرانه</div>
                  <div>🎯 کلیدواژه: [صدا، پرس، ارتعاش]</div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 3: Instant Search */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center gap-4 mb-6" dir="rtl">
              <div className="bg-green-100 p-3 rounded-full">
                <Search className="text-green-600" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-slate-700">جستجوی فوری و دقیق</h3>
            </div>
            
            <p className="text-slate-600 mb-6" dir="rtl">
              یافتن هر راه‌حل در کمتر از ۲ ثانیه با جستجوی متنی کامل و هوشمند
            </p>

            {/* Search Demo */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="bg-white p-3 rounded border mb-3" dir="rtl">
                <div className="text-sm text-gray-500 mb-1">جستجو:</div>
                <div className="font-mono">CNC خطای E-77</div>
              </div>
              
              <div className="space-y-2">
                <div className="bg-green-100 p-2 rounded text-sm" dir="rtl">
                  <div className="font-semibold">✅ نتیجه ۱: دستگاه CNC-452</div>
                  <div>راه‌حل: بررسی سنسور دما</div>
                </div>
                <div className="bg-green-100 p-2 rounded text-sm" dir="rtl">
                  <div className="font-semibold">✅ نتیجه ۲: دستگاه CNC-301</div>
                  <div>راه‌حل: restart controller</div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 4: Cultural Design */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center gap-4 mb-6" dir="rtl">
              <div className="bg-amber-100 p-3 rounded-full">
                <div className="text-amber-600 text-xl">🇮🇷</div>
              </div>
              <h3 className="text-2xl font-bold text-slate-700">طراحی برای فرهنگ ایرانی</h3>
            </div>
            
            <p className="text-slate-600 mb-6" dir="rtl">
              تاریخ شمسی، زبان فارسی، و درک عمیق از فرهنگ کاری ایرانی
            </p>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                <span className="text-slate-600" dir="rtl">تاریخ ثبت:</span>
                <span className="font-bold text-slate-700">۱۴۰۳/۰۳/۲۵</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                <span className="text-slate-600" dir="rtl">شیفت کاری:</span>
                <span className="font-bold text-slate-700">صبح - یکشنبه</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                <span className="text-slate-600" dir="rtl">زبان رابط:</span>
                <span className="font-bold text-slate-700">فارسی کامل</span>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4" dir="rtl">
              آماده تجربه آینده مدیریت دانش هستید؟
            </h3>
            <p className="text-lg mb-6" dir="rtl">
              همین امروز با برنامه آزمایشی شروع کنید
            </p>
            <button className="bg-white text-amber-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
              شروع رایگان ۳ ماهه
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
