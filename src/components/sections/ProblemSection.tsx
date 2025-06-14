
import React from 'react';

const ProblemSection = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" dir="rtl">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-700 mb-6">
            آیا ارزشمندترین دانش شما در حال ترک کارخانه است؟
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            کارخانه‌های ایرانی سالانه میلیاردها تومان به دلیل از دست رفتن دانش متحمل خسارت می‌شوند
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <div className="text-4xl font-bold text-red-500 mb-3">41%</div>
            <div className="text-slate-600" dir="rtl">نیروی کار در آستانه بازنشستگی</div>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <div className="text-4xl font-bold text-red-500 mb-3">30%</div>
            <div className="text-slate-600" dir="rtl">وقت تکنسین‌ها صرف جستجو</div>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <div className="text-4xl font-bold text-red-500 mb-3">6</div>
            <div className="text-slate-600" dir="rtl">ماه متوسط آموزش جایگزین</div>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg text-center">
            <div className="text-4xl font-bold text-red-500 mb-3">میلیاردها</div>
            <div className="text-slate-600" dir="rtl">تومان خسارت سالانه</div>
          </div>
        </div>

        {/* Pain Points */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6" dir="rtl">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                <span className="text-red-500 font-bold">✗</span>
              </div>
              <div>
                <h3 className="font-semibold text-slate-700 mb-2">دانش حیاتی فقط در ذهن کارگران موجود است</h3>
                <p className="text-slate-600">تجربیات ارزشمند هنگام بازنشستگی از بین می‌رود</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                <span className="text-red-500 font-bold">✗</span>
              </div>
              <div>
                <h3 className="font-semibold text-slate-700 mb-2">مشکلات مشابه بارها توسط شیفت‌های مختلف حل می‌شود</h3>
                <p className="text-slate-600">عدم اشتراک‌گذاری راه‌حل‌ها منجر به اتلاف وقت می‌شود</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                <span className="text-red-500 font-bold">✗</span>
              </div>
              <div>
                <h3 className="font-semibold text-slate-700 mb-2">کارمندان جدید ماه‌ها طول می‌کشد تا مولد شوند</h3>
                <p className="text-slate-600">عدم دسترسی به دانش تجربی سرعت یادگیری را کاهش می‌دهد</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                <span className="text-red-500 font-bold">✗</span>
              </div>
              <div>
                <h3 className="font-semibold text-slate-700 mb-2">راه‌حل‌ها در دفترچه‌ها و مکالمات غیررسمی پراکنده است</h3>
                <p className="text-slate-600">عدم مرکزیت اطلاعات دسترسی سریع را غیرممکن می‌کند</p>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-2xl">
              <div className="text-center space-y-4">
                <div className="text-6xl">⚠️</div>
                <h3 className="text-2xl font-bold text-slate-700" dir="rtl">
                  بحران دانش در صنعت
                </h3>
                <p className="text-slate-600" dir="rtl">
                  هر روز که می‌گذرد، دانش ارزشمند از کارخانه شما خارج می‌شود
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
