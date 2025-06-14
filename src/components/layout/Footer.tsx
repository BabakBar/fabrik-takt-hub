
import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const Footer = () => {
  const { language } = useLanguage();

  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-amber-400 mb-4">FabrikTakt</h3>
            <p className="text-slate-300 mb-4">
              {language === 'fa' 
                ? 'هوش مصنوعی برای حفظ و جستجوی دانش کارگران در کارخانه‌های ایرانی'
                : 'AI-powered knowledge management for manufacturing workers worldwide'
              }
            </p>
            <div className="flex items-center gap-4">
              <span className="bg-amber-500 p-2 rounded">📧</span>
              <span>info@fabriktakt.com</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">
              {language === 'fa' ? 'لینک‌های سریع' : 'Quick Links'}
            </h4>
            <ul className="space-y-2 text-slate-300">
              <li>
                <a href="#features" className="hover:text-amber-400 transition-colors">
                  {language === 'fa' ? 'ویژگی‌ها' : 'Features'}
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-amber-400 transition-colors">
                  {language === 'fa' ? 'نحوه کارکرد' : 'How It Works'}
                </a>
              </li>
              <li>
                <a href="#examples" className="hover:text-amber-400 transition-colors">
                  {language === 'fa' ? 'نمونه‌ها' : 'Examples'}
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-amber-400 transition-colors">
                  {language === 'fa' ? 'قیمت‌گذاری' : 'Pricing'}
                </a>
              </li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="font-bold text-lg mb-4">
              {language === 'fa' ? 'صنایع' : 'Industries'}
            </h4>
            <ul className="space-y-2 text-slate-300">
              <li>{language === 'fa' ? 'قطعه‌سازی خودرو' : 'Automotive Parts'}</li>
              <li>{language === 'fa' ? 'ماشین‌آلات' : 'Machinery'}</li>
              <li>{language === 'fa' ? 'صنایع غذایی' : 'Food & Beverage'}</li>
              <li>{language === 'fa' ? 'فلزات' : 'Metal Processing'}</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">
              {language === 'fa' ? 'تماس با ما' : 'Contact Us'}
            </h4>
            <div className="space-y-3 text-slate-300">
              <div className="flex items-center gap-3">
                <span>📧</span>
                <span>support@fabriktakt.com</span>
              </div>
              <div className="flex items-center gap-3">
                <span>📱</span>
                <span>
                  {language === 'fa' ? 'تلگرام: @FabrikTaktSupport' : 'Support: @FabrikTaktSupport'}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span>🌐</span>
                <span>www.fabriktakt.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-slate-400 text-sm">
              {language === 'fa' 
                ? '© ۱۴۰۳ فبریک‌تکت. تمامی حقوق محفوظ است.'
                : '© 2024 FabrikTakt. All rights reserved.'
              }
            </div>
            
            <div className="flex items-center gap-6 text-sm">
              <a href="/privacy" className="text-slate-400 hover:text-amber-400 transition-colors">
                {language === 'fa' ? 'حریم خصوصی' : 'Privacy Policy'}
              </a>
              <a href="/terms" className="text-slate-400 hover:text-amber-400 transition-colors">
                {language === 'fa' ? 'شرایط استفاده' : 'Terms of Service'}
              </a>
              <div className="flex items-center gap-2">
                <span className="text-green-400">●</span>
                <span className="text-slate-400">
                  {language === 'fa' ? 'سیستم آنلاین' : 'System Online'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
