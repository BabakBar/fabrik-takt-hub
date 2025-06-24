import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import PilotModal from '../modals/PilotModal';

const SocialProofSection = () => {
  const { language } = useLanguage();
  const [pilotModal, setPilotModal] = useState(false);

  const testimonials = {
    fa: [
      {
        name: 'احمد رضایی',
        title: 'مدیر تولید، فولاد تهران',
        content: 'فبریک‌تکت کمک کرد تا ۱۵ سال تجربه تکنسین ارشد ما را قبل از بازنشستگی حفظ کنیم. حالا تمام تیم می‌تواند فوراً به راه‌حل‌های او دسترسی داشته باشد.',
        initial: 'ا'
      },
      {
        name: 'مریم حسینی',
        title: 'مدیر عملیات، صنایع غذایی پارسیان',
        content: 'زمان حل مشکلات ما ۸۰٪ کاهش یافت. کارگران دیگر ساعت‌ها وقت تلف نمی‌کنند تا راه‌حل مشکلات تکراری را پیدا کنند.',
        initial: 'م'
      }
    ],
    en: [
      {
        name: 'Ahmad Rezaei',
        title: 'Production Manager, Tehran Steel Works',
        content: 'FabrikTakt helped us preserve 15 years of our senior technician\'s knowledge before his retirement. Now the entire team can access his solutions instantly.',
        initial: 'A'
      },
      {
        name: 'Maryam Hosseini',
        title: 'Operations Manager, Parsian Food Industries',
        content: 'Our problem resolution time decreased by 80%. Workers no longer waste hours searching for solutions to recurring problems.',
        initial: 'M'
      }
    ]
  };

  const currentTestimonials = testimonials[language];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-700 mb-6">
            {language === 'fa' 
              ? 'اعتماد کارخانه‌های پیشرو'
              : 'Trusted by Leading Manufacturers'
            }
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {language === 'fa' 
              ? 'مدیران تولید در سراسر ایران به فبریک‌تکت اعتماد کرده‌اند'
              : 'Production managers worldwide trust FabrikTakt for their knowledge management needs'
            }
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {currentTestimonials.map((testimonial, index) => (
            <div key={index} className="bg-slate-50 p-8 rounded-2xl">
              <div className="flex items-start gap-4 mb-6">
                <div className={`${index === 0 ? 'bg-amber-500' : 'bg-blue-500'} w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0`}>
                  <span className="text-white font-bold text-lg">{testimonial.initial}</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-700">{testimonial.name}</h4>
                  <p className="text-slate-500 text-sm">{testimonial.title}</p>
                </div>
              </div>
              
              <blockquote className="text-slate-600 text-lg leading-relaxed mb-6">
                "{testimonial.content}"
              </blockquote>
              
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-amber-400 text-xl">⭐</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Industry Recognition */}
        <div className="bg-gradient-to-r from-slate-700 to-slate-800 text-white rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">
            {language === 'fa' 
              ? 'شناخته شده در صنعت'
              : 'Industry Recognition'
            }
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl mb-3">🏆</div>
              <h4 className="font-bold mb-2">
                {language === 'fa' 
                  ? 'برنده جایزه نوآوری تولید ایران ۲۰۲۶'
                  : 'Winner: Manufacturing Innovation Award 2026'
                }
              </h4>
              <p className="text-slate-300 text-sm">
                {language === 'fa' ? 'بهترین راه‌حل هوش مصنوعی' : 'Best AI Solution'}
              </p>
            </div>
            
            <div>
              <div className="text-4xl mb-3">📢</div>
              <h4 className="font-bold mb-2">
                {language === 'fa' 
                  ? 'ارائه در کنفرانس صنعت ۴.۰ خاورمیانه'
                  : 'Featured at Industry 4.0 Middle East Conference'
                }
              </h4>
              <p className="text-slate-300 text-sm">
                {language === 'fa' ? 'انقلاب دیجیتال در تولید' : 'Digital Revolution in Manufacturing'}
              </p>
            </div>
            
            <div>
              <div className="text-4xl mb-3">✅</div>
              <h4 className="font-bold mb-2">
                {language === 'fa' 
                  ? 'تأیید استاندارد امنیت ISO 27001'
                  : 'ISO 27001 Security Standard Certified'
                }
              </h4>
              <p className="text-slate-300 text-sm">
                {language === 'fa' ? 'حفاظت کامل اطلاعات' : 'Complete Data Protection'}
              </p>
            </div>
          </div>
        </div>

        {/* Usage Statistics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-amber-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-amber-600 text-2xl font-bold">50+</span>
            </div>
            <h4 className="font-bold text-slate-700 mb-2">
              {language === 'fa' ? 'اصطلاح تخصصی' : 'Technical Terms'}
            </h4>
            <p className="text-slate-500 text-sm">
              {language === 'fa' ? 'شناسایی شده و ثبت' : 'Recognized & Recorded'}
            </p>
          </div>

          <div className="text-center">
            <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-blue-600 text-2xl font-bold">1K+</span>
            </div>
            <h4 className="font-bold text-slate-700 mb-2">
              {language === 'fa' ? 'مورد دانش ثبت شده' : 'Knowledge Entries'}
            </h4>
            <p className="text-slate-500 text-sm">
              {language === 'fa' ? 'و در حال رشد' : 'And Growing'}
            </p>
          </div>

          <div className="text-center">
            <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-green-600 text-2xl font-bold">80%</span>
            </div>
            <h4 className="font-bold text-slate-700 mb-2">
              {language === 'fa' ? 'کاهش زمان حل مشکل' : 'Problem Resolution Time Reduction'}
            </h4>
            <p className="text-slate-500 text-sm">
              {language === 'fa' ? 'متوسط در تمام کارخانه‌ها' : 'Average Across All Factories'}
            </p>
          </div>

          <div className="text-center">
            <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-purple-600 text-2xl font-bold">24/7</span>
            </div>
            <h4 className="font-bold text-slate-700 mb-2">
              {language === 'fa' ? 'در دسترس بودن' : 'Availability'}
            </h4>
            <p className="text-slate-500 text-sm">
              {language === 'fa' ? 'پشتیبانی و سیستم' : 'Support & System'}
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-slate-700 mb-4">
              {language === 'fa' 
                ? 'آماده پیوستن به کارخانه‌های موفق هستید؟'
                : 'Ready to Join Successful Manufacturers?'
              }
            </h3>
            <p className="text-lg text-slate-600 mb-6">
              {language === 'fa' 
                ? 'با برنامه آزمایشی رایگان شروع کنید'
                : 'Start with our free pilot program'
              }
            </p>
            <button
              className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              onClick={() => setPilotModal(true)}
            >
              {language === 'fa' ? 'شروع رایگان' : 'Start Free Trial'}
            </button>
          </div>
        </div>

        <PilotModal isOpen={pilotModal} onClose={() => setPilotModal(false)} />
      </div>
    </section>
  );
};

export default SocialProofSection;
