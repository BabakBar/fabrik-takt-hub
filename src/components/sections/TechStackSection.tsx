
import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const TechStackSection = () => {
  const { t, language } = useLanguage();

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-700 mb-6">
            {language === 'fa' 
              ? 'تکنولوژی سازمانی در سطح شرکت‌های بزرگ'
              : 'Enterprise-Grade Technology Stack'
            }
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {language === 'fa' 
              ? 'ترکیب پیشرفته‌ترین ابزارهای هوش مصنوعی با زیرساخت امن و مقیاس‌پذیر'
              : 'Combining cutting-edge AI tools with secure and scalable infrastructure'
            }
          </p>
        </div>

        {/* Architecture Diagram */}
        <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 mb-16">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* User Interface */}
            <div className="text-center">
              <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">M</span>
              </div>
              <h3 className="text-xl font-bold text-slate-700 mb-2">
                {language === 'fa' ? 'رابط کاربری' : 'User Interface'}
              </h3>
              <p className="text-slate-600 text-sm">
                {language === 'fa' ? 'پیام‌رسان - آشنا و ساده' : 'Messaging - Familiar & Simple'}
              </p>
              <div className="mt-4 bg-white p-4 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-blue-500">2B+</div>
                <div className="text-xs text-slate-500">
                  {language === 'fa' ? 'کاربر جهانی' : 'Global Users'}
                </div>
              </div>
            </div>

            {/* AI Processing */}
            <div className="text-center">
              <div className="bg-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🧠</span>
              </div>
              <h3 className="text-xl font-bold text-slate-700 mb-2">
                {language === 'fa' ? 'هوش مصنوعی' : 'Artificial Intelligence'}
              </h3>
              <p className="text-slate-600 text-sm">Google Gemini Pro</p>
              <div className="mt-4 bg-white p-4 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-purple-500">95%+</div>
                <div className="text-xs text-slate-500">
                  {language === 'fa' ? 'دقت تشخیص' : 'Recognition Accuracy'}
                </div>
              </div>
            </div>

            {/* Database */}
            <div className="text-center">
              <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🗄️</span>
              </div>
              <h3 className="text-xl font-bold text-slate-700 mb-2">
                {language === 'fa' ? 'پایگاه داده' : 'Database'}
              </h3>
              <p className="text-slate-600 text-sm">PostgreSQL + Supabase</p>
              <div className="mt-4 bg-white p-4 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-green-500">99.9%</div>
                <div className="text-xs text-slate-500">
                  {language === 'fa' ? 'در دسترس بودن' : 'Uptime'}
                </div>
              </div>
            </div>
          </div>

          {/* Flow Arrows */}
          <div className="hidden lg:block mt-8">
            <div className="flex justify-center items-center space-x-8">
              <div className="flex-1 h-0.5 bg-gradient-to-r from-blue-300 to-purple-300"></div>
              <span className="text-slate-400">➤</span>
              <div className="flex-1 h-0.5 bg-gradient-to-r from-purple-300 to-green-300"></div>
            </div>
          </div>
        </div>

        {/* Technical Details */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Google Gemini */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 text-center">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold">G</span>
            </div>
            <h4 className="font-bold text-slate-700 mb-2">Google Gemini Pro</h4>
            <p className="text-sm text-slate-600 mb-4">
              {language === 'fa' 
                ? 'پیشرفته‌ترین هوش مصنوعی برای تحلیل محتوا'
                : 'Most advanced AI for content analysis'
              }
            </p>
            <div className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
              Latest AI Model
            </div>
          </div>

          {/* Messaging Integration */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 text-center">
            <div className="bg-blue-500 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <h4 className="font-bold text-slate-700 mb-2">
              {language === 'fa' ? 'پیام‌رسان' : 'Messaging'}
            </h4>
            <p className="text-sm text-slate-600 mb-4">
              {language === 'fa' 
                ? 'واسط کاربری آشنا، بدون نیاز به آموزش'
                : 'Familiar interface, no training required'
              }
            </p>
            <div className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
              2 Billion Users
            </div>
          </div>

          {/* Supabase */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 text-center">
            <div className="bg-green-500 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <h4 className="font-bold text-slate-700 mb-2">Supabase</h4>
            <p className="text-sm text-slate-600 mb-4">
              {language === 'fa' 
                ? 'ذخیره‌سازی امن و مقیاس‌پذیر'
                : 'Secure and scalable storage'
              }
            </p>
            <div className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
              Enterprise Security
            </div>
          </div>

          {/* Performance */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 text-center">
            <div className="bg-amber-500 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-lg">⚡</span>
            </div>
            <h4 className="font-bold text-slate-700 mb-2">
              {language === 'fa' ? 'عملکرد بالا' : 'High Performance'}
            </h4>
            <p className="text-sm text-slate-600 mb-4">
              {language === 'fa' 
                ? 'سرعت و دقت در هر جستجو'
                : 'Speed and accuracy in every search'
              }
            </p>
            <div className="bg-amber-50 text-amber-700 px-3 py-1 rounded-full text-xs font-semibold">
              Sub-second Search
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="mt-16 bg-slate-800 text-white rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center mb-8">
            {language === 'fa' 
              ? 'شاخص‌های عملکرد واقعی'
              : 'Real Performance Metrics'
            }
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-amber-400 mb-2">99.9%</div>
              <div className="text-slate-300">
                {language === 'fa' ? 'زمان در دسترس بودن' : 'System Uptime'}
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-amber-400 mb-2">&lt;1s</div>
              <div className="text-slate-300">
                {language === 'fa' ? 'سرعت جستجو' : 'Search Speed'}
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-amber-400 mb-2">256-bit</div>
              <div className="text-slate-300">
                {language === 'fa' ? 'رمزگذاری امن' : 'Secure Encryption'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
