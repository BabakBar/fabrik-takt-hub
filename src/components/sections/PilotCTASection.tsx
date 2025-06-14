
import React, { useState } from 'react';
import { Rocket, Shield, Clock, Users, Sparkles, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const PilotCTASection = () => {
  const { t, language } = useLanguage();
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
    console.log('Form submitted:', formData);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-amber-400/10 to-orange-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/20 to-orange-500/20 backdrop-blur-sm border border-amber-400/30 px-6 py-3 rounded-full text-amber-200 font-semibold mb-6 animate-fade-in">
            <Rocket className="w-5 h-5" />
            <span>{language === 'fa' ? 'فرصت محدود' : 'Limited Opportunity'}</span>
            <Sparkles className="w-4 h-4 animate-pulse" />
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-bold mb-8 animate-fade-in delay-200">
            <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
              {language === 'fa' 
                ? 'آینده کارخانه خود را امروز تضمین کنید'
                : 'Secure Your Factory\'s Future Today'
              }
            </span>
          </h2>
          <p className="text-xl text-blue-100 max-w-4xl mx-auto animate-fade-in delay-300">
            {language === 'fa'
              ? 'عضویت در برنامه آزمایشی محدود - تعداد جاهای باقی‌مانده محدود است'
              : 'Join our exclusive pilot program - Limited spots available for forward-thinking manufacturers'
            }
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Enhanced Form */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-white/20 animate-fade-in delay-400">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4 flex items-center justify-center gap-3">
                <Rocket className="w-8 h-8 text-amber-400" />
                {language === 'fa' ? 'فرم درخواست عضویت' : 'Pilot Application Form'}
              </h3>
              <p className="text-blue-200">
                {language === 'fa' 
                  ? 'اطلاعات خود را وارد کنید تا با شما تماس بگیریم'
                  : 'Share your details and we\'ll contact you within 24 hours'
                }
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-blue-200 mb-3">
                    {language === 'fa' ? 'نام *' : 'Name *'}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-white placeholder-blue-200 transition-all duration-300"
                    placeholder={language === 'fa' ? 'نام شما' : 'Your Name'}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-blue-200 mb-3">
                    {language === 'fa' ? 'شرکت *' : 'Company *'}
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-white placeholder-blue-200 transition-all duration-300"
                    placeholder={language === 'fa' ? 'نام شرکت' : 'Company Name'}
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-blue-200 mb-3">
                    {language === 'fa' ? 'ایمیل *' : 'Email *'}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-white placeholder-blue-200 transition-all duration-300"
                    placeholder="your@company.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-blue-200 mb-3">
                    {language === 'fa' ? 'تلفن' : 'Phone'}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-white placeholder-blue-200 transition-all duration-300"
                    placeholder={language === 'fa' ? '09xxxxxxxxx' : '+1 (555) 123-4567'}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-blue-200 mb-3">
                    {language === 'fa' ? 'صنعت *' : 'Industry *'}
                  </label>
                  <select
                    name="industry"
                    value={formData.industry}
                    onChange={handleInputChange}
                    className="w-full p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-white transition-all duration-300"
                    required
                  >
                    <option value="" className="bg-slate-800">
                      {language === 'fa' ? 'انتخاب کنید' : 'Select Industry'}
                    </option>
                    <option value="automotive" className="bg-slate-800">
                      {language === 'fa' ? 'قطعه‌سازی خودرو' : 'Automotive'}
                    </option>
                    <option value="machinery" className="bg-slate-800">
                      {language === 'fa' ? 'ماشین‌آلات' : 'Machinery'}
                    </option>
                    <option value="food" className="bg-slate-800">
                      {language === 'fa' ? 'غذایی' : 'Food & Beverage'}
                    </option>
                    <option value="metals" className="bg-slate-800">
                      {language === 'fa' ? 'فلزات' : 'Metals'}
                    </option>
                    <option value="other" className="bg-slate-800">
                      {language === 'fa' ? 'سایر' : 'Other'}
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-blue-200 mb-3">
                    {language === 'fa' ? 'تعداد کارمندان *' : 'Company Size *'}
                  </label>
                  <select
                    name="companySize"
                    value={formData.companySize}
                    onChange={handleInputChange}
                    className="w-full p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-white transition-all duration-300"
                    required
                  >
                    <option value="" className="bg-slate-800">
                      {language === 'fa' ? 'انتخاب کنید' : 'Select Size'}
                    </option>
                    <option value="10-50" className="bg-slate-800">
                      {language === 'fa' ? '۱۰-۵۰ نفر' : '10-50 employees'}
                    </option>
                    <option value="50-200" className="bg-slate-800">
                      {language === 'fa' ? '۵۰-۲۰۰ نفر' : '50-200 employees'}
                    </option>
                    <option value="200+" className="bg-slate-800">
                      {language === 'fa' ? 'بیش از ۲۰۰ نفر' : '200+ employees'}
                    </option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-blue-200 mb-3">
                  {language === 'fa' ? 'چالش اصلی کارخانه شما *' : 'Your Main Manufacturing Challenge *'}
                </label>
                <textarea
                  name="challenge"
                  value={formData.challenge}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full p-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-white placeholder-blue-200 transition-all duration-300 resize-none"
                  placeholder={language === 'fa' 
                    ? 'لطفاً در چند جمله توضیح دهید که بزرگترین چالش شما در حفظ و انتقال دانش کارگران چیست...'
                    : 'Describe your biggest challenge in capturing and sharing worker knowledge...'
                  }
                  required
                />
              </div>

              <button
                type="submit"
                className="group w-full bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 hover:from-amber-400 hover:via-orange-400 hover:to-red-400 text-white font-bold py-5 px-8 rounded-xl transition-all duration-300 text-lg shadow-2xl hover:shadow-amber-500/25 transform hover:scale-105 flex items-center justify-center gap-3"
              >
                <Rocket className="w-6 h-6 group-hover:animate-pulse" />
                {language === 'fa' ? 'درخواست عضویت در پایلوت' : 'Apply for Pilot Program'}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="text-sm text-blue-200 text-center flex items-center justify-center gap-2">
                <Shield className="w-4 h-4" />
                {language === 'fa' 
                  ? '🔒 اطلاعات شما محفوظ و مطابق GDPR محافظت می‌شود'
                  : '🔒 Your data is secure and GDPR compliant'
                }
              </p>
            </form>
          </div>

          {/* Enhanced Benefits */}
          <div className="space-y-8 animate-fade-in delay-600">
            <div>
              <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <Sparkles className="w-8 h-8 text-amber-400 animate-pulse" />
                {language === 'fa' ? 'مزایای برنامه آزمایشی:' : 'Exclusive Pilot Benefits:'}
              </h3>
              
              <div className="space-y-6">
                {[
                  {
                    icon: Clock,
                    title: language === 'fa' ? 'دسترسی رایگان ۳ ماهه' : '3-Month Free Access',
                    desc: language === 'fa' ? 'بدون هیچ هزینه‌ای تمام قابلیت‌ها را امتحان کنید' : 'Full feature access with zero cost'
                  },
                  {
                    icon: Users,
                    title: language === 'fa' ? 'پشتیبانی اختصاصی' : 'Dedicated Support',
                    desc: language === 'fa' ? 'کارشناس مخصوص شما در تمام مراحل کمک می‌کند' : 'Personal expert guides you through implementation'
                  },
                  {
                    icon: Rocket,
                    title: language === 'fa' ? 'آموزش تیم شما' : 'Team Training Included',
                    desc: language === 'fa' ? 'جلسات آموزشی رایگان برای کارکنان' : 'Free training sessions for your staff'
                  },
                  {
                    icon: Sparkles,
                    title: language === 'fa' ? 'راه‌اندازی در کمتر از ۱ هفته' : 'Setup in Under 1 Week',
                    desc: language === 'fa' ? 'شروع سریع بدون توقف تولید' : 'Quick start without production downtime'
                  }
                ].map((benefit, index) => (
                  <div key={index} className="group flex items-start gap-6 p-6 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm rounded-2xl border border-white/20 hover:border-amber-400/50 transition-all duration-300 hover:scale-105">
                    <div className="bg-gradient-to-br from-amber-500 to-orange-500 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                      <benefit.icon className="text-white w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl text-white mb-2 group-hover:text-amber-200 transition-colors">
                        {benefit.title}
                      </h4>
                      <p className="text-blue-200 leading-relaxed">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced Urgency */}
            <div className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 p-8 rounded-2xl shadow-2xl border border-red-500/50 animate-pulse">
              <h4 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Clock className="w-7 h-7 text-red-200" />
                {language === 'fa' ? '⏰ فرصت محدود!' : '⏰ Limited Time!'}
              </h4>
              <p className="text-red-100 text-lg leading-relaxed">
                {language === 'fa' 
                  ? 'فقط ۲۰ جای باقی‌مانده برای برنامه آزمایشی این ماه. درخواست خود را همین امروز ثبت کنید.'
                  : 'Only 20 spots remaining for this month\'s pilot program. Apply today to secure your position.'
                }
              </p>
            </div>

            {/* Contact Alternative */}
            <div className="text-center">
              <p className="text-blue-200 mb-6 text-lg">
                {language === 'fa' 
                  ? 'سوال دارید؟ مستقیماً با تیم ما صحبت کنید'
                  : 'Have questions? Speak directly with our team'
                }
              </p>
              <button className="group border-2 border-white/40 text-white hover:bg-white/10 hover:border-white px-8 py-4 rounded-xl font-bold transition-all duration-300 backdrop-blur-sm flex items-center gap-3 mx-auto">
                <Users className="w-5 h-5 group-hover:animate-pulse" />
                {language === 'fa' ? 'تماس با تیم فروش' : 'Contact Sales Team'}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PilotCTASection;
