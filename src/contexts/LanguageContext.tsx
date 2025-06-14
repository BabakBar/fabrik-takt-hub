
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'fa' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  fa: {
    // Navigation
    'nav.features': 'ویژگی‌ها',
    'nav.howItWorks': 'نحوه کارکرد',
    'nav.examples': 'نمونه‌ها',
    'nav.pricing': 'قیمت‌گذاری',
    
    // Hero Section
    'hero.title': 'مغز هوشمند',
    'hero.titleAccent': 'کارخانه شما',
    'hero.subtitle': 'دانش ۲۰ ساله کارگران خود را در ۲ دقیقه جستجو کنید',
    'hero.description': 'سیستم هوش مصنوعی که تجربه کارگران بازنشسته را حفظ و قابل جستجو می‌کند',
    'hero.ctaPrimary': 'عضویت در برنامه آزمایشی',
    'hero.ctaSecondary': 'مشاهده نحوه کارکرد',
    'hero.stat1': '95%+',
    'hero.stat1Label': 'دقت تشخیص فارسی',
    'hero.stat2': '2-3s',
    'hero.stat2Label': 'سرعت پردازش',
    'hero.stat3': '1000+',
    'hero.stat3Label': 'دانش ثبت شده',
    
    // Problem Section
    'problem.title': 'آیا ارزشمندترین دانش شما در حال ترک کارخانه است؟',
    'problem.subtitle': 'کارخانه‌های ایرانی سالانه میلیاردها تومان به دلیل از دست رفتن دانش متحمل خسارت می‌شوند',
    'problem.stat1': '41%',
    'problem.stat1Label': 'نیروی کار در آستانه بازنشستگی',
    'problem.stat2': '30%',
    'problem.stat2Label': 'وقت تکنسین‌ها صرف جستجو',
    'problem.stat3': '6',
    'problem.stat3Label': 'ماه متوسط آموزش جایگزین',
    'problem.stat4': 'میلیاردها',
    'problem.stat4Label': 'تومان خسارت سالانه',
    
    // Solution Section
    'solution.title': 'آشنایی با تکت: دستیار هوشمند کارخانه شما',
    'solution.subtitle': 'سیستم ساده و قدرتمند که دانش کارگران را در ۳ گام ساده حفظ و قابل جستجو می‌کند',
    'solution.step1Title': 'ضبط',
    'solution.step1Desc': 'کارگر از طریق تلگرام صدا یا متن ارسال می‌کند',
    'solution.step2Title': 'تجزیه و تحلیل',
    'solution.step2Desc': 'هوش مصنوعی اطلاعات را تحلیل و دسته‌بندی می‌کند',
    'solution.step3Title': 'بازیابی',
    'solution.step3Desc': 'کارگران دیگر راه‌حل را فوراً پیدا می‌کنند',
    'solution.techTitle': 'مبتنی بر پیشرفته‌ترین تکنولوژی‌ها',
    
    // Features
    'features.title': 'ویژگی‌های کلیدی سیستم',
    'features.subtitle': 'طراحی شده خصوصاً برای کارخانه‌های ایرانی',
    
    // And more translations...
  },
  en: {
    // Navigation
    'nav.features': 'Features',
    'nav.howItWorks': 'How It Works',
    'nav.examples': 'Examples',
    'nav.pricing': 'Pricing',
    
    // Hero Section
    'hero.title': 'Your Factory\'s',
    'hero.titleAccent': 'AI Brain',
    'hero.subtitle': 'Search 20 years of worker knowledge in 2 minutes',
    'hero.description': 'AI-powered system that preserves retiring workers\' expertise and makes it instantly searchable',
    'hero.ctaPrimary': 'Join Pilot Program',
    'hero.ctaSecondary': 'See How It Works',
    'hero.stat1': '95%+',
    'hero.stat1Label': 'Persian Recognition Accuracy',
    'hero.stat2': '2-3s',
    'hero.stat2Label': 'Processing Speed',
    'hero.stat3': '1000+',
    'hero.stat3Label': 'Knowledge Entries',
    
    // Problem Section
    'problem.title': 'Is Your Most Valuable Knowledge Walking Out the Door?',
    'problem.subtitle': 'Iranian manufacturers lose billions annually due to knowledge drain when experienced workers retire',
    'problem.stat1': '41%',
    'problem.stat1Label': 'Workforce approaching retirement',
    'problem.stat2': '30%',
    'problem.stat2Label': 'Technician time spent searching',
    'problem.stat3': '6',
    'problem.stat3Label': 'Months average replacement training',
    'problem.stat4': 'Billions',
    'problem.stat4Label': 'Annual losses from knowledge drain',
    
    // Solution Section
    'solution.title': 'Meet Takt: Your Shop Floor\'s AI Assistant',
    'solution.subtitle': 'Simple yet powerful system that captures and makes worker knowledge searchable in 3 easy steps',
    'solution.step1Title': 'Capture',
    'solution.step1Desc': 'Worker sends voice or text via Telegram',
    'solution.step2Title': 'Analyze',
    'solution.step2Desc': 'AI analyzes and categorizes the information',
    'solution.step3Title': 'Retrieve',
    'solution.step3Desc': 'Other workers instantly find the solution',
    'solution.techTitle': 'Built on Cutting-Edge Technology',
    
    // Features
    'features.title': 'Key System Features',
    'features.subtitle': 'Designed specifically for Iranian manufacturers',
    
    // And more translations...
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fa');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <div dir={language === 'fa' ? 'rtl' : 'ltr'} className={language === 'fa' ? 'font-persian' : 'font-sans'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
