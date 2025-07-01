
import React, { useState } from 'react';
import { Rocket, Shield, Clock, Users, Sparkles, ArrowRight, Loader2, AlertCircle, CheckCircle } from 'lucide-react';
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionError, setSubmissionError] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  // Validation function
  const validateField = (name: string, value: string) => {
    switch (name) {
      case 'name':
        if (!value.trim()) return language === 'fa' ? 'نام الزامی است' : 'Name is required';
        if (value.trim().length < 2) return language === 'fa' ? 'نام باید حداقل 2 کاراکتر باشد' : 'Name must be at least 2 characters';
        return '';
      case 'company':
        if (!value.trim()) return language === 'fa' ? 'نام شرکت الزامی است' : 'Company name is required';
        return '';
      case 'email':
        if (!value.trim()) return language === 'fa' ? 'ایمیل الزامی است' : 'Email is required';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) return language === 'fa' ? 'ایمیل نامعتبر است' : 'Invalid email address';
        return '';
      case 'challenge':
        if (!value.trim()) return language === 'fa' ? 'توضیح چالش الزامی است' : 'Challenge description is required';
        if (value.trim().length < 10) return language === 'fa' ? 'توضیح باید حداقل 10 کاراکتر باشد' : 'Description must be at least 10 characters';
        return '';
      default:
        return '';
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    const requiredFields = ['name', 'company', 'email', 'challenge'];
    requiredFields.forEach(key => {
      const error = validateField(key, formData[key as keyof typeof formData]);
      if (error) newErrors[key] = error;
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Real-time validation
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({
        ...prev,
        [name]: error
      }));
    }
  };

  const handleInputBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mark all required fields as touched
    setTouched({ name: true, company: true, email: true, challenge: true, phone: true });
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmissionError(null);
    
    try {
      const response = await fetch('/api/apply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        const errorData = await response.json();
        setSubmissionError(errorData.message || (language === 'fa' ? 'خطا در ارسال درخواست' : 'Failed to submit application'));
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSubmissionError(language === 'fa' ? 'خطای شبکه. لطفا دوباره تلاش کنید.' : 'Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setIsSubmitting(false);
    setFormData({ name: '', company: '', email: '', phone: '', industry: '', companySize: '', challenge: '' });
    setErrors({});
    setTouched({});
    setSubmissionError(null);
  };

  return (
    <section className="py-24 bg-slate-800 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/30 px-4 py-2 rounded-full text-amber-300 font-medium mb-6">
              <Rocket className="w-4 h-4" />
              <span>{language === 'fa' ? 'فرصت محدود' : 'Limited Opportunity'}</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              {language === 'fa' 
                ? 'آینده کارخانه خود را امروز تضمین کنید'
                : 'Secure Your Factory\'s Future Today'
              }
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              {language === 'fa'
                ? 'عضویت در برنامه آزمایشی محدود - تعداد جاهای باقی‌مانده محدود است'
                : 'Join our exclusive pilot program - Limited spots available'
              }
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Clean Form */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-12 h-12 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {language === 'fa' ? 'درخواست شما ثبت شد!' : 'Application Received!'}
                  </h3>
                  <p className="text-slate-300 mb-8 text-lg">
                    {language === 'fa' 
                      ? 'تیم ما ظرف 24 ساعت با شما تماس خواهد گرفت'
                      : 'Our team will contact you within 24 hours to get started'
                    }
                  </p>
                  <button 
                    onClick={resetForm} 
                    className="bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-semibold"
                  >
                    {language === 'fa' ? 'ارسال درخواست دیگر' : 'Submit Another Application'}
                  </button>
                </div>
              ) : (
              <>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4">
                  {language === 'fa' ? 'فرم درخواست عضویت' : 'Pilot Application'}
                </h3>
                <p className="text-slate-300">
                  {language === 'fa' 
                    ? 'اطلاعات خود را وارد کنید تا با شما تماس بگیریم'
                    : 'Share your details and we\'ll contact you within 24 hours'
                  }
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      {language === 'fa' ? 'نام *' : 'Name *'}
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      onBlur={handleInputBlur}
                      className={`w-full p-3 bg-white/10 border rounded-lg text-white placeholder-slate-400 ${
                        errors.name && touched.name 
                          ? 'border-red-500 focus:border-red-500' 
                          : 'border-white/20 focus:border-amber-500'
                      }`}
                      placeholder={language === 'fa' ? 'نام شما' : 'Your Name'}
                      required
                    />
                    {errors.name && touched.name && (
                      <div className="flex items-center gap-2 text-red-400 text-sm mt-1">
                        <AlertCircle className="w-4 h-4" />
                        <span>{errors.name}</span>
                      </div>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      {language === 'fa' ? 'شرکت *' : 'Company *'}
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      onBlur={handleInputBlur}
                      className={`w-full p-3 bg-white/10 border rounded-lg text-white placeholder-slate-400 ${
                        errors.company && touched.company 
                          ? 'border-red-500 focus:border-red-500' 
                          : 'border-white/20 focus:border-amber-500'
                      }`}
                      placeholder={language === 'fa' ? 'نام شرکت' : 'Company Name'}
                      required
                    />
                    {errors.company && touched.company && (
                      <div className="flex items-center gap-2 text-red-400 text-sm mt-1">
                        <AlertCircle className="w-4 h-4" />
                        <span>{errors.company}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      {language === 'fa' ? 'ایمیل *' : 'Email *'}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      onBlur={handleInputBlur}
                      className={`w-full p-3 bg-white/10 border rounded-lg text-white placeholder-slate-400 ${
                        errors.email && touched.email 
                          ? 'border-red-500 focus:border-red-500' 
                          : 'border-white/20 focus:border-amber-500'
                      }`}
                      placeholder="your@company.com"
                      required
                    />
                    {errors.email && touched.email && (
                      <div className="flex items-center gap-2 text-red-400 text-sm mt-1">
                        <AlertCircle className="w-4 h-4" />
                        <span>{errors.email}</span>
                      </div>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      {language === 'fa' ? 'تلفن' : 'Phone'}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-400"
                      placeholder={language === 'fa' ? '09xxxxxxxxx' : '+1 (555) 123-4567'}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    {language === 'fa' ? 'چالش اصلی کارخانه شما *' : 'Your Main Challenge *'}
                  </label>
                  <textarea
                    name="challenge"
                    value={formData.challenge}
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                    rows={4}
                    className={`w-full p-3 bg-white/10 border rounded-lg text-white placeholder-slate-400 resize-none ${
                      errors.challenge && touched.challenge 
                        ? 'border-red-500 focus:border-red-500' 
                        : 'border-white/20 focus:border-amber-500'
                    }`}
                    placeholder={language === 'fa' 
                      ? 'لطفاً در چند جمله توضیح دهید که بزرگترین چالش شما در حفظ و انتقال دانش کارگران چیست...'
                      : 'Describe your biggest challenge in capturing and sharing worker knowledge...'
                    }
                    required
                  />
                  {errors.challenge && touched.challenge && (
                    <div className="flex items-center gap-2 text-red-400 text-sm mt-1">
                      <AlertCircle className="w-4 h-4" />
                      <span>{errors.challenge}</span>
                    </div>
                  )}
                </div>

                {submissionError && (
                  <div className="flex items-center gap-2 text-red-400 text-sm">
                    <AlertCircle className="w-4 h-4" />
                    <span>{submissionError}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-amber-500 hover:bg-amber-600 disabled:bg-amber-300 text-white font-semibold py-4 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      {language === 'fa' ? 'در حال ارسال...' : 'Submitting...'}
                    </>
                  ) : (
                    <>
                      <Rocket className="w-5 h-5" />
                      {language === 'fa' ? 'درخواست عضویت در پایلوت' : 'Apply for Pilot Program'}
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>

                <p className="text-sm text-slate-400 text-center flex items-center justify-center gap-2">
                  <Shield className="w-4 h-4" />
                  {language === 'fa' 
                    ? '🔒 اطلاعات شما محفوظ و مطابق GDPR محافظت می‌شود'
                    : '🔒 Your data is secure and GDPR compliant'
                  }
                </p>
              </form>
              </>
              )}
            </div>

            {/* Benefits */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold mb-6">
                {language === 'fa' ? 'مزایای برنامه آزمایشی:' : 'Pilot Benefits:'}
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
                  <div key={index} className="flex items-start gap-4 p-6 bg-white/5 rounded-xl border border-white/10">
                    <div className="bg-amber-500 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="text-white w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">{benefit.title}</h4>
                      <p className="text-slate-300 text-sm leading-relaxed">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Urgency */}
              <div className="bg-red-600/20 border border-red-500/30 p-6 rounded-xl">
                <h4 className="text-lg font-bold mb-3 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-red-400" />
                  {language === 'fa' ? '⏰ فرصت محدود!' : '⏰ Limited Time!'}
                </h4>
                <p className="text-red-200 leading-relaxed">
                  {language === 'fa' 
                    ? 'فقط ۲۰ جای باقی‌مانده برای برنامه آزمایشی این ماه. درخواست خود را همین امروز ثبت کنید.'
                    : 'Only 20 spots remaining for this month\'s pilot program. Apply today to secure your position.'
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PilotCTASection;
