import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, HeadphonesIcon, MessageSquare } from 'lucide-react';
import { ContactForm } from '../components/forms/ContactForm';
import { useLanguage } from '../contexts/LanguageContext';

const ContactPage = () => {
  const { language } = useLanguage();
  const [selectedForm, setSelectedForm] = useState<'general' | 'support'>('general');

  const contactInfo = [
    {
      icon: Mail,
      title: language === 'fa' ? 'ایمیل' : 'Email',
      content: 'info@fabriktakt.com',
      subContent: language === 'fa' ? 'پاسخ ظرف 24 ساعت' : 'Response within 24 hours'
    },
    {
      icon: Phone,
      title: language === 'fa' ? 'تلفن پشتیبانی' : 'Support Phone',
      content: '+49 15144830587',
      subContent: language === 'fa' ? '9 صبح تا 6 عصر (روزهای کاری)' : '9 AM - 6 PM (Business Days)'
    },
    {
      icon: MapPin,
      title: language === 'fa' ? 'آدرس' : 'Address',
      content: language === 'fa' ? 'تهران، ایران' : 'Hannover, Germany',
      subContent: language === 'fa' ? 'قابلیت ملاقات حضوری' : 'In-person meetings available'
    },
    {
      icon: Clock,
      title: language === 'fa' ? 'ساعات کاری' : 'Business Hours',
      content: language === 'fa' ? 'شنبه تا چهارشنبه' : 'Monday - Wednesday',
      subContent: '9:00 AM - 6:00 PM (CET)'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              {language === 'fa' ? 'تماس با ما' : 'Get in Touch'}
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              {language === 'fa'
                ? 'سوال دارید یا آماده شروع هستید؟ تیم ما اینجاست تا کمک کند.'
                : 'Have questions or ready to get started? Our team is here to help.'
              }
            </p>
            
            {/* Form Type Selector */}
            <div className="flex justify-center mb-8">
              <div className="bg-white/10 backdrop-blur-sm p-2 rounded-xl border border-white/20">
                <button
                  type="button"
                  onClick={() => setSelectedForm('general')}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all flex items-center gap-2 ${
                    selectedForm === 'general'
                      ? 'bg-white text-slate-900'
                      : 'text-white hover:bg-white/10'
                  }`}
                >
                  <MessageSquare className="w-4 h-4" />
                  {language === 'fa' ? 'پیام عمومی' : 'General Inquiry'}
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedForm('support')}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all flex items-center gap-2 ${
                    selectedForm === 'support'
                      ? 'bg-white text-slate-900'
                      : 'text-white hover:bg-white/10'
                  }`}
                >
                  <HeadphonesIcon className="w-4 h-4" />
                  {language === 'fa' ? 'پشتیبانی فنی' : 'Technical Support'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <ContactForm 
              variant={selectedForm}
              className="bg-white rounded-2xl shadow-2xl p-8 lg:p-12 border border-slate-200"
            />
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">
                {language === 'fa' ? 'راه‌های ارتباط' : 'Contact Information'}
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                {language === 'fa'
                  ? 'روش‌های مختلف برای برقراری ارتباط با تیم ما'
                  : 'Multiple ways to reach our team for support and inquiries'
                }
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactInfo.map((info, index) => (
                <div 
                  key={`contact-${info.title}-${index}`}
                  className="bg-slate-50 rounded-xl p-6 text-center border border-slate-200 hover:shadow-lg transition-shadow"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <info.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">{info.title}</h3>
                  <p className="text-slate-600 font-medium mb-1">{info.content}</p>
                  <p className="text-sm text-slate-500">{info.subContent}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">
                {language === 'fa' ? 'سوالات متداول' : 'Frequently Asked Questions'}
              </h2>
              <p className="text-lg text-slate-600">
                {language === 'fa'
                  ? 'پاسخ‌های سریع به سوالات رایج'
                  : 'Quick answers to common questions'
                }
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: language === 'fa' ? 'چقدر طول می‌کشد تا پاسخ دریافت کنم؟' : 'How long does it take to get a response?',
                  answer: language === 'fa' 
                    ? 'برای سوالات عمومی ظرف 24 ساعت و برای پشتیبانی فنی ظرف 4-8 ساعت پاسخ می‌دهیم.'
                    : 'We respond to general inquiries within 24 hours and technical support within 4-8 hours.'
                },
                {
                  question: language === 'fa' ? 'آیا می‌توانم نسخه آزمایشی دریافت کنم؟' : 'Can I get a free trial?',
                  answer: language === 'fa'
                    ? 'بله! برنامه آزمایشی 3 ماهه ما شامل دسترسی کامل و پشتیبانی اختصاصی است.'
                    : 'Yes! Our 3-month pilot program includes full access and dedicated support.'
                },
                {
                  question: language === 'fa' ? 'آیا از پیاده‌سازی پشتیبانی می‌کنید؟' : 'Do you provide implementation support?',
                  answer: language === 'fa'
                    ? 'حتماً. تیم کارشناسان ما در تمام مراحل پیاده‌سازی و آموزش تیم شما کمک می‌کند.'
                    : 'Absolutely. Our expert team assists with implementation and training your staff.'
                }
              ].map((faq) => (
                <div 
                  key={faq.question}
                  className="bg-white rounded-xl p-6 border border-slate-200"
                >
                  <h3 className="font-semibold text-slate-900 mb-3">{faq.question}</h3>
                  <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              {language === 'fa' ? 'آماده شروع هستید؟' : 'Ready to Get Started?'}
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              {language === 'fa'
                ? 'به هزاران شرکتی بپیوندید که با FabrikTakt دانش خود را حفظ می‌کنند.'
                : 'Join thousands of companies preserving their knowledge with FabrikTakt.'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                type="button"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl font-semibold transition-colors"
              >
                {language === 'fa' ? 'تماس با ما' : 'Contact Us'}
              </button>
              <a 
                href="/pilot"
                className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-xl font-semibold transition-colors border-2 border-blue-500"
              >
                {language === 'fa' ? 'شروع آزمایشی رایگان' : 'Start Free Trial'}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
