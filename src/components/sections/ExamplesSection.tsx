
import React from 'react';

const ExamplesSection = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" dir="rtl">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-700 mb-6">
            نمونه‌هایی از دانش ثبت شده
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            مثال‌های واقعی از دانش کارگران که در سیستم ثبت و قابل جستجو شده است
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Example 1: CNC Machine Issue */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-red-500 text-white p-4">
              <div className="flex items-center justify-between" dir="rtl">
                <h3 className="font-bold">خرابی دستگاه</h3>
                <span className="bg-red-600 px-2 py-1 rounded text-sm">فوری</span>
              </div>
            </div>
            
            <div className="p-6" dir="rtl">
              <div className="space-y-4">
                <div>
                  <span className="text-slate-500 text-sm">دستگاه:</span>
                  <div className="font-semibold text-slate-700">CNC-452</div>
                </div>
                
                <div>
                  <span className="text-slate-500 text-sm">مشکل:</span>
                  <div className="font-semibold text-slate-700">کد خطای E-77 و توقف تولید</div>
                </div>
                
                <div>
                  <span className="text-slate-500 text-sm">راه‌حل:</span>
                  <div className="font-semibold text-slate-700">بررسی سنسور دما و restart controller</div>
                </div>
                
                <div className="border-t pt-4">
                  <div className="flex items-center justify-between">
                    <span className="text-green-600 font-semibold">۳ ساعت کاهش زمان تعمیر</span>
                    <span className="text-slate-400 text-sm">۱۴۰۳/۰۳/۲۰</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Example 2: Quality Issue */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-amber-500 text-white p-4">
              <div className="flex items-center justify-between" dir="rtl">
                <h3 className="font-bold">مشکل کیفیت</h3>
                <span className="bg-amber-600 px-2 py-1 rounded text-sm">کیفیت</span>
              </div>
            </div>
            
            <div className="p-6" dir="rtl">
              <div className="space-y-4">
                <div>
                  <span className="text-slate-500 text-sm">خط تولید:</span>
                  <div className="font-semibold text-slate-700">خط تولید A</div>
                </div>
                
                <div>
                  <span className="text-slate-500 text-sm">مشکل:</span>
                  <div className="font-semibold text-slate-700">کیفیت پایین محصول در شیفت صبح</div>
                </div>
                
                <div>
                  <span className="text-slate-500 text-sm">راه‌حل:</span>
                  <div className="font-semibold text-slate-700">تنظیم دمای فر قبل از شروع تولید</div>
                </div>
                
                <div className="border-t pt-4">
                  <div className="flex items-center justify-between">
                    <span className="text-green-600 font-semibold">۲۰٪ کاهش ضایعات</span>
                    <span className="text-slate-400 text-sm">۱۴۰۳/۰۳/۱۸</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Example 3: Preventive Maintenance */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-blue-500 text-white p-4">
              <div className="flex items-center justify-between" dir="rtl">
                <h3 className="font-bold">نگهداری پیشگیرانه</h3>
                <span className="bg-blue-600 px-2 py-1 rounded text-sm">روتین</span>
              </div>
            </div>
            
            <div className="p-6" dir="rtl">
              <div className="space-y-4">
                <div>
                  <span className="text-slate-500 text-sm">تجهیز:</span>
                  <div className="font-semibold text-slate-700">کمپرسور اصلی</div>
                </div>
                
                <div>
                  <span className="text-slate-500 text-sm">فرآیند:</span>
                  <div className="font-semibold text-slate-700">تعویض فیلتر هوای کمپرسور</div>
                </div>
                
                <div>
                  <span className="text-slate-500 text-sm">زمان‌بندی:</span>
                  <div className="font-semibold text-slate-700">هر ۱۵ روز یکبار</div>
                </div>
                
                <div className="border-t pt-4">
                  <div className="flex items-center justify-between">
                    <span className="text-green-600 font-semibold">۴۰٪ کاهش خرابی</span>
                    <span className="text-slate-400 text-sm">۱۴۰۳/۰۳/۱۵</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Search Demo */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-slate-700 text-center mb-8" dir="rtl">
            جستجوی زنده - امتحان کنید!
          </h3>
          
          <div className="max-w-2xl mx-auto">
            <div className="relative mb-6">
              <input 
                type="text" 
                placeholder="مثال: CNC خرابی، کیفیت محصول، تعمیر کمپرسور..." 
                className="w-full p-4 pr-12 border border-gray-300 rounded-lg text-lg"
                dir="rtl"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <span className="text-gray-400">🔍</span>
              </div>
            </div>
            
            {/* Sample Results */}
            <div className="space-y-3">
              <div className="bg-green-50 border border-green-200 p-4 rounded-lg" dir="rtl">
                <div className="font-semibold text-green-700 mb-1">نتیجه ۱: دستگاه CNC-452</div>
                <div className="text-sm text-slate-600">کد خطای E-77 - راه‌حل: بررسی سنسور دما</div>
                <div className="text-xs text-green-600 mt-1">تطابق: ۹۵٪</div>
              </div>
              
              <div className="bg-green-50 border border-green-200 p-4 rounded-lg" dir="rtl">
                <div className="font-semibold text-green-700 mb-1">نتیجه ۲: دستگاه CNC-301</div>
                <div className="text-sm text-slate-600">مشکل مشابه - راه‌حل: restart کنترلر</div>
                <div className="text-xs text-green-600 mt-1">تطابق: ۸۷٪</div>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg" dir="rtl">
                <div className="font-semibold text-blue-700 mb-1">نتیجه ۳: راهنمای عمومی CNC</div>
                <div className="text-sm text-slate-600">کدهای خطای رایج و راه‌حل‌های استاندارد</div>
                <div className="text-xs text-blue-600 mt-1">تطابق: ۷۲٪</div>
              </div>
            </div>
            
            <div className="text-center mt-6">
              <div className="text-sm text-slate-500" dir="rtl">
                ⚡ جستجو در کمتر از ۱ ثانیه • ۱۰۰۰+ مورد دانش ثبت شده
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExamplesSection;
