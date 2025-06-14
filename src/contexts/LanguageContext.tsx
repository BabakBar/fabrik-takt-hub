
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
    'problem.pain1Title': 'دانش حیاتی فقط در ذهن کارگران موجود است',
    'problem.pain1Desc': 'تجربیات ارزشمند هنگام بازنشستگی از بین می‌رود',
    'problem.pain2Title': 'مشکلات مشابه بارها توسط شیفت‌های مختلف حل می‌شود',
    'problem.pain2Desc': 'عدم اشتراک‌گذاری راه‌حل‌ها منجر به اتلاف وقت می‌شود',
    'problem.pain3Title': 'کارمندان جدید ماه‌ها طول می‌کشد تا مولد شوند',
    'problem.pain3Desc': 'عدم دسترسی به دانش تجربی سرعت یادگیری را کاهش می‌دهد',
    'problem.pain4Title': 'راه‌حل‌ها در دفترچه‌ها و مکالمات غیررسمی پراکنده است',
    'problem.pain4Desc': 'عدم مرکزیت اطلاعات دسترسی سریع را غیرممکن می‌کند',
    'problem.crisisTitle': 'بحران دانش در صنعت',
    'problem.crisisDesc': 'هر روز که می‌گذرد، دانش ارزشمند از کارخانه شما خارج می‌شود',
    
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
    'features.title': 'ویژگی‌های طراحی شده برای کارخانه‌های ایرانی',
    'features.subtitle': 'هر ویژگی با درک عمیق از نیازهای واقعی تولیدکنندگان طراحی شده است',
    'features.voiceTitle': 'ضبط آسان صدا و متن',
    'features.voiceDesc': 'کارگران مثل WhatsApp با تلگرام صحبت می‌کنند - بدون نیاز به آموزش یا تغییر عادات',
    'features.aiTitle': 'تحلیل هوشمند محتوا',
    'features.aiDesc': 'شناسایی خودکار دستگاه، نوع مشکل، و عوامل مرتبط برای دسته‌بندی و جستجوی بهتر',
    'features.searchTitle': 'جستجوی فوری و دقیق',
    'features.searchDesc': 'یافتن هر راه‌حل در کمتر از ۲ ثانیه با جستجوی متنی کامل و هوشمند',
    'features.culturalTitle': 'طراحی برای فرهنگ ایرانی',
    'features.culturalDesc': 'تاریخ شمسی، زبان فارسی، و درک عمیق از فرهنگ کاری ایرانی',
    'features.ctaTitle': 'آماده تجربه آینده مدیریت دانش هستید؟',
    'features.ctaDesc': 'همین امروز با برنامه آزمایشی شروع کنید',
    'features.ctaButton': 'شروع رایگان ۳ ماهه',
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
    'hero.stat1Label': 'Recognition Accuracy',
    'hero.stat2': '2-3s',
    'hero.stat2Label': 'Processing Speed',
    'hero.stat3': '1000+',
    'hero.stat3Label': 'Knowledge Entries',
    
    // Problem Section
    'problem.title': 'Is Your Most Valuable Knowledge Walking Out the Door?',
    'problem.subtitle': 'Manufacturers lose billions annually due to knowledge drain when experienced workers retire',
    'problem.stat1': '41%',
    'problem.stat1Label': 'Workforce approaching retirement',
    'problem.stat2': '30%',
    'problem.stat2Label': 'Technician time spent searching',
    'problem.stat3': '6',
    'problem.stat3Label': 'Months average replacement training',
    'problem.stat4': 'Billions',
    'problem.stat4Label': 'Annual losses from knowledge drain',
    'problem.pain1Title': 'Critical knowledge exists only in workers\' minds',
    'problem.pain1Desc': 'Valuable experience is lost when workers retire',
    'problem.pain2Title': 'Same problems solved repeatedly by different shifts',
    'problem.pain2Desc': 'Lack of solution sharing leads to wasted time',
    'problem.pain3Title': 'New employees take months to become productive',
    'problem.pain3Desc': 'No access to experiential knowledge slows learning',
    'problem.pain4Title': 'Solutions scattered across notebooks and informal conversations',
    'problem.pain4Desc': 'Decentralized information makes quick access impossible',
    'problem.crisisTitle': 'Knowledge Crisis in Manufacturing',
    'problem.crisisDesc': 'Every day that passes, valuable knowledge leaves your factory',
    
    // Solution Section
    'solution.title': 'Meet Takt: Your Factory\'s AI Assistant',
    'solution.subtitle': 'Simple yet powerful system that captures and makes worker knowledge searchable in 3 easy steps',
    'solution.step1Title': 'Capture',
    'solution.step1Desc': 'Worker sends voice or text via messaging app',
    'solution.step2Title': 'Analyze',
    'solution.step2Desc': 'AI analyzes and categorizes the information',
    'solution.step3Title': 'Retrieve',
    'solution.step3Desc': 'Other workers instantly find the solution',
    'solution.techTitle': 'Built on Cutting-Edge Technology',
    
    // Features
    'features.title': 'Features Designed for Modern Manufacturing',
    'features.subtitle': 'Every feature built with deep understanding of real manufacturing needs',
    'features.voiceTitle': 'Effortless Voice & Text Capture',
    'features.voiceDesc': 'Workers communicate naturally through familiar messaging - no training or habit changes required',
    'features.aiTitle': 'Intelligent Content Analysis',
    'features.aiDesc': 'Automatic identification of equipment, problem type, and related factors for better categorization and search',
    'features.searchTitle': 'Instant Smart Search',
    'features.searchDesc': 'Find any solution in under 2 seconds with comprehensive full-text intelligent search',
    'features.culturalTitle': 'Built for Global Manufacturing',
    'features.culturalDesc': 'Multi-language support, cultural adaptation, and deep understanding of manufacturing workflows',
    'features.ctaTitle': 'Ready to Experience the Future of Knowledge Management?',
    'features.ctaDesc': 'Start with our pilot program today',
    'features.ctaButton': 'Start Free 3-Month Trial',
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
