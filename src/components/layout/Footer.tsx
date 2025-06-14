
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div dir="rtl">
            <h3 className="text-2xl font-bold text-amber-400 mb-4">فبریک‌تکت</h3>
            <p className="text-slate-300 mb-4">
              هوش مصنوعی برای حفظ و جستجوی دانش کارگران در کارخانه‌های ایرانی
            </p>
            <div className="flex items-center gap-4">
              <span className="bg-amber-500 p-2 rounded">📧</span>
              <span>info@fabriktakt.com</span>
            </div>
          </div>

          {/* Quick Links */}
          <div dir="rtl">
            <h4 className="font-bold text-lg mb-4">لینک‌های سریع</h4>
            <ul className="space-y-2 text-slate-300">
              <li><a href="#features" className="hover:text-amber-400 transition-colors">ویژگی‌ها</a></li>
              <li><a href="#how-it-works" className="hover:text-amber-400 transition-colors">نحوه کارکرد</a></li>
              <li><a href="#examples" className="hover:text-amber-400 transition-colors">نمونه‌ها</a></li>
              <li><a href="#pricing" className="hover:text-amber-400 transition-colors">قیمت‌گذاری</a></li>
            </ul>
          </div>

          {/* Industries */}
          <div dir="rtl">
            <h4 className="font-bold text-lg mb-4">صنایع</h4>
            <ul className="space-y-2 text-slate-300">
              <li>قطعه‌سازی خودرو</li>
              <li>ماشین‌آلات</li>
              <li>صنایع غذایی</li>
              <li>فلزات</li>
            </ul>
          </div>

          {/* Contact */}
          <div dir="rtl">
            <h4 className="font-bold text-lg mb-4">تماس با ما</h4>
            <div className="space-y-3 text-slate-300">
              <div className="flex items-center gap-3">
                <span>📧</span>
                <span>support@fabriktakt.com</span>
              </div>
              <div className="flex items-center gap-3">
                <span>📱</span>
                <span>تلگرام: @FabrikTaktSupport</span>
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
            <div className="text-slate-400 text-sm" dir="rtl">
              © ۱۴۰۳ فبریک‌تکت. تمامی حقوق محفوظ است.
            </div>
            
            <div className="flex items-center gap-6 text-sm">
              <a href="/privacy" className="text-slate-400 hover:text-amber-400 transition-colors" dir="rtl">
                حریم خصوصی
              </a>
              <a href="/terms" className="text-slate-400 hover:text-amber-400 transition-colors" dir="rtl">
                شرایط استفاده
              </a>
              <div className="flex items-center gap-2">
                <span className="text-green-400">●</span>
                <span className="text-slate-400">سیستم آنلاین</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
