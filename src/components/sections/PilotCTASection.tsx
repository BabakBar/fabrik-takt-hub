
import React, { useState } from 'react';

const PilotCTASection = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    industry: '',
    companySize: '',
    challenge: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" dir="rtl">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            آینده کارخانه خود را امروز تضمین کنید
          </h2>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto">
            عضویت در برنامه آزمایشی محدود - تعداد جاهای باقی‌مانده محدود است
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <div className="bg-white text-slate-800 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-center" dir="rtl">
              فرم درخواست عضویت
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div dir="rtl">
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    نام *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    placeholder="نام شما"
                    required
                    dir="rtl"
                  />
                </div>

                <div dir="rtl">
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    شرکت *
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    placeholder="نام شرکت"
                    required
                    dir="rtl"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div dir="rtl">
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    ایمیل *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    placeholder="email@company.com"
                    required
                    dir="ltr"
                  />
                </div>

                <div dir="rtl">
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    تلفن
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    placeholder="09xxxxxxxxx"
                    dir="ltr"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div dir="rtl">
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    صنعت *
                  </label>
                  <select
                    name="industry"
                    value={formData.industry}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    required
                    dir="rtl"
                  >
                    <option value="">انتخاب کنید</option>
                    <option value="automotive">قطعه‌سازی خودرو</option>
                    <option value="machinery">ماشین‌آلات</option>
                    <option value="food">غذایی</option>
                    <option value="metals">فلزات</option>
                    <option value="other">سایر</option>
                  </select>
                </div>

                <div dir="rtl">
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    تعداد کارمندان *
                  </label>
                  <select
                    name="companySize"
                    value={formData.companySize}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                    required
                    dir="rtl"
                  >
                    <option value="">انتخاب کنید</option>
                    <option value="10-50">۱۰-۵۰ نفر</option>
                    <option value="50-200">۵۰-۲۰۰ نفر</option>
                    <option value="200+">بیش از ۲۰۰ نفر</option>
                  </select>
                </div>
              </div>

              <div dir="rtl">
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  چالش اصلی کارخانه شما *
                </label>
                <textarea
                  name="challenge"
                  value={formData.challenge}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  placeholder="لطفاً در چند جمله توضیح دهید که بزرگترین چالش شما در حفظ و انتقال دانش کارگران چیست..."
                  required
                  dir="rtl"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 px-8 rounded-lg transition-colors text-lg"
              >
                درخواست عضویت در پایلوت
              </button>

              <p className="text-sm text-slate-500 text-center" dir="rtl">
                🔒 اطلاعات شما محفوظ و مطابق GDPR محافظت می‌شود
              </p>
            </form>
          </div>

          {/* Benefits */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6" dir="rtl">
                مزایای برنامه آزمایشی:
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4" dir="rtl">
                  <div className="bg-green-500 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">دسترسی رایگان ۳ ماهه</h4>
                    <p className="text-slate-300">بدون هیچ هزینه‌ای تمام قابلیت‌ها را امتحان کنید</p>
                  </div>
                </div>

                <div className="flex items-start gap-4" dir="rtl">
                  <div className="bg-green-500 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">پشتیبانی اختصاصی</h4>
                    <p className="text-slate-300">کارشناس مخصوص شما در تمام مراحل کمک می‌کند</p>
                  </div>
                </div>

                <div className="flex items-start gap-4" dir="rtl">
                  <div className="bg-green-500 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">آموزش تیم شما</h4>
                    <p className="text-slate-300">جلسات آموزشی رایگان برای کارکنان</p>
                  </div>
                </div>

                <div className="flex items-start gap-4" dir="rtl">
                  <div className="bg-green-500 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">راه‌اندازی در کمتر از ۱ هفته</h4>
                    <p className="text-slate-300">شروع سریع بدون توقف تولید</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Urgency */}
            <div className="bg-gradient-to-r from-red-600 to-red-700 p-6 rounded-xl">
              <h4 className="text-xl font-bold mb-3" dir="rtl">
                ⏰ فرصت محدود!
              </h4>
              <p className="text-red-100" dir="rtl">
                فقط ۲۰ جای باقی‌مانده برای برنامه آزمایشی این ماه. 
                درخواست خود را همین امروز ثبت کنید.
              </p>
            </div>

            {/* Contact Alternative */}
            <div className="text-center">
              <p className="text-slate-300 mb-4" dir="rtl">
                سوال دارید؟ مستقیماً با تیم ما صحبت کنید
              </p>
              <button className="border-2 border-white text-white hover:bg-white hover:text-slate-800 px-6 py-3 rounded-lg font-semibold transition-colors">
                تماس با تیم فروش
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PilotCTASection;
