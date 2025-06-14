
import React from 'react';

const SocialProofSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" dir="rtl">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-700 mb-6">
            اعتماد کارخانه‌های پیشرو
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            مدیران تولید در سراسر ایران به فبریک‌تکت اعتماد کرده‌اند
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Testimonial 1 */}
          <div className="bg-slate-50 p-8 rounded-2xl">
            <div className="flex items-start gap-4 mb-6" dir="rtl">
              <div className="bg-amber-500 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-lg">ا</span>
              </div>
              <div>
                <h4 className="font-bold text-slate-700">احمد رضایی</h4>
                <p className="text-slate-500 text-sm">مدیر تولید، فولاد تهران</p>
              </div>
            </div>
            
            <blockquote className="text-slate-600 text-lg leading-relaxed mb-6" dir="rtl">
              "فبریک‌تکت کمک کرد تا ۱۵ سال تجربه تکنسین ارشد ما را قبل از بازنشستگی حفظ کنیم. حالا تمام تیم می‌تواند فوراً به راه‌حل‌های او دسترسی داشته باشد."
            </blockquote>
            
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-amber-400 text-xl">⭐</span>
              ))}
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-slate-50 p-8 rounded-2xl">
            <div className="flex items-start gap-4 mb-6" dir="rtl">
              <div className="bg-blue-500 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-lg">م</span>
              </div>
              <div>
                <h4 className="font-bold text-slate-700">مریم حسینی</h4>
                <p className="text-slate-500 text-sm">مدیر عملیات، صنایع غذایی پارسیان</p>
              </div>
            </div>
            
            <blockquote className="text-slate-600 text-lg leading-relaxed mb-6" dir="rtl">
              "زمان حل مشکلات ما ۸۰٪ کاهش یافت. کارگران دیگر ساعت‌ها وقت تلف نمی‌کنند تا راه‌حل مشکلات تکراری را پیدا کنند."
            </blockquote>
            
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-amber-400 text-xl">⭐</span>
              ))}
            </div>
          </div>
        </div>

        {/* Industry Recognition */}
        <div className="bg-gradient-to-r from-slate-700 to-slate-800 text-white rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-center mb-8" dir="rtl">
            شناخته شده در صنعت
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl mb-3">🏆</div>
              <h4 className="font-bold mb-2" dir="rtl">برنده جایزه نوآوری تولید ایران ۲۰۲۴</h4>
              <p className="text-slate-300 text-sm" dir="rtl">بهترین راه‌حل هوش مصنوعی</p>
            </div>
            
            <div>
              <div className="text-4xl mb-3">📢</div>
              <h4 className="font-bold mb-2" dir="rtl">ارائه در کنفرانس صنعت ۴.۰ خاورمیانه</h4>
              <p className="text-slate-300 text-sm" dir="rtl">انقلاب دیجیتال در تولید</p>
            </div>
            
            <div>
              <div className="text-4xl mb-3">✅</div>
              <h4 className="font-bold mb-2" dir="rtl">تأیید استاندارد امنیت ISO 27001</h4>
              <p className="text-slate-300 text-sm" dir="rtl">حفاظت کامل اطلاعات</p>
            </div>
          </div>
        </div>

        {/* Usage Statistics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-amber-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-amber-600 text-2xl font-bold">50+</span>
            </div>
            <h4 className="font-bold text-slate-700 mb-2" dir="rtl">اصطلاح تخصصی فارسی</h4>
            <p className="text-slate-500 text-sm" dir="rtl">شناسایی شده و ثبت</p>
          </div>

          <div className="text-center">
            <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-blue-600 text-2xl font-bold">1K+</span>
            </div>
            <h4 className="font-bold text-slate-700 mb-2" dir="rtl">مورد دانش ثبت شده</h4>
            <p className="text-slate-500 text-sm" dir="rtl">و در حال رشد</p>
          </div>

          <div className="text-center">
            <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-green-600 text-2xl font-bold">80%</span>
            </div>
            <h4 className="font-bold text-slate-700 mb-2" dir="rtl">کاهش زمان حل مشکل</h4>
            <p className="text-slate-500 text-sm" dir="rtl">متوسط در تمام کارخانه‌ها</p>
          </div>

          <div className="text-center">
            <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-purple-600 text-2xl font-bold">24/7</span>
            </div>
            <h4 className="font-bold text-slate-700 mb-2" dir="rtl">در دسترس بودن</h4>
            <p className="text-slate-500 text-sm" dir="rtl">پشتیبانی و سیستم</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-slate-700 mb-4" dir="rtl">
              آماده پیوستن به کارخانه‌های موفق هستید؟
            </h3>
            <p className="text-lg text-slate-600 mb-6" dir="rtl">
              با برنامه آزمایشی رایگان شروع کنید
            </p>
            <button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              شروع رایگان
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
