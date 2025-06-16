
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

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
    'hero.botName': 'فبریک‌تکت ربات',
    'hero.botStatus': 'آنلاین',
    'hero.voiceMessage': 'پیام صوتی 0:15',
    'hero.userMessage': 'دستگاه CNC شماره ۴۵۲ متوقف شده...',
    'hero.botResponse': '✅ دانش ثبت شد\n🔍 جستجوی مشابه: /search CNC E-77',
    'hero.solutionFound': 'راه‌حل یافت شد',
    'hero.solutionText': 'بررسی سنسور دما و restart controller',
    
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
    'solution.exampleInput': 'دستگاه CNC شماره ۴۵۲ متوقف شده و کد خطای E-77 میده',
    'solution.voiceMessage': 'پیام صوتی',
    'solution.analysisResult': 'نتیجه تحلیل AI:',
    'solution.equipment': '🏭 دستگاه: CNC-452',
    'solution.type': '⚠️ نوع: خرابی',
    'solution.errorCode': '🔧 کد خطا: E-77',
    'solution.searchQuery': 'جستجو: CNC E-77',
    'solution.searchResult': '✅ راه‌حل: بررسی سنسور دما و restart controller',
    'solution.solveTime': 'زمان حل: کمتر از ۲ ثانیه',
    'solution.aiTech': 'هوش مصنوعی پیشرفته',
    'solution.processingSpeed': 'سرعت پردازش',
    'solution.accuracy': 'تشخیص اصطلاحات فارسی',
    
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

    // Tech Stack
    'tech.title': 'ساخته شده با پیشرفته‌ترین تکنولوژی‌ها',
    'tech.subtitle': 'استفاده از آخرین نوآوری‌ها در هوش مصنوعی و پردازش زبان طبیعی',
    'tech.ai': 'هوش مصنوعی',
    'tech.aiDesc': 'Google Gemini 2.0 Pro برای تحلیل دقیق',
    'tech.voice': 'تشخیص گفتار', 
    'tech.voiceDesc': 'پردازش صدای فارسی با دقت بالا',
    'tech.nlp': 'پردازش زبان طبیعی',
    'tech.nlpDesc': 'درک عمیق متن و مفاهیم فنی',
    'tech.search': 'جستجوی هوشمند',
    'tech.searchDesc': 'الگوریتم‌های پیشرفته برای یافتن اطلاعات',

    // Examples
    'examples.title': 'نمونه‌هایی از کاربرد واقعی',
    'examples.subtitle': 'ببینید چگونه کارخانه‌ها از تکت استفاده می‌کنند',
    'examples.maintenance': 'نگهداری و تعمیرات',
    'examples.maintenanceDesc': 'ثبت و جستجوی راه‌حل‌های تعمیراتی',
    'examples.troubleshooting': 'عیب‌یابی',
    'examples.troubleshootingDesc': 'تشخیص سریع مشکلات و ارائه راه‌حل',
    'examples.training': 'آموزش کارکنان',
    'examples.trainingDesc': 'انتقال دانش به نیروهای جدید',

    // Social Proof
    'social.title': 'کارخانه‌ها به ما اعتماد می‌کنند',
    'social.subtitle': 'شرکت‌های پیشرو از تکت استفاده می‌کنند',
    'social.testimonial1': 'تکت زندگی کاری ما را متحول کرده است',
    'social.testimonial2': 'دیگر مشکلات تکراری نداریم',
    'social.testimonial3': 'کارکنان جدید سریع‌تر یاد می‌گیرند',

    // Pilot CTA
    'pilot.title': 'آینده کارخانه خود را امروز تضمین کنید',
    'pilot.subtitle': 'به برنامه آزمایشی محدود ما بپیوندید',
    'pilot.feature1': '۳ ماه استفاده رایگان',
    'pilot.feature2': 'پشتیبانی اختصاصی',
    'pilot.feature3': 'آموزش کامل تیم',
    'pilot.feature4': 'راه‌اندازی در کمتر از یک هفته',
    'pilot.cta': 'درخواست شرکت در برنامه آزمایشی',
    'pilot.limited': 'ظرفیت محدود - فقط ۱۰ کارخانه',

    // Footer
    'footer.product': 'محصول',
    'footer.features': 'ویژگی‌ها',
    'footer.pricing': 'قیمت‌گذاری',
    'footer.examples': 'نمونه‌ها',
    'footer.company': 'شرکت',
    'footer.about': 'درباره ما',
    'footer.careers': 'فرصت‌های شغلی',
    'footer.contact': 'تماس با ما',
    'footer.support': 'پشتیبانی',
    'footer.help': 'راهنما',
    'footer.docs': 'مستندات',
    'footer.api': 'API',
    'footer.legal': 'قوانین',
    'footer.privacy': 'حریم خصوصی',
    'footer.terms': 'شرایط استفاده',
    'footer.rights': 'تمام حقوق محفوظ است',
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
    'hero.botName': 'FabrikTakt Bot',
    'hero.botStatus': 'Online',
    'hero.voiceMessage': 'Voice message 0:15',
    'hero.userMessage': 'CNC machine #452 stopped working...',
    'hero.botResponse': '✅ Knowledge recorded\n🔍 Similar search: /search CNC E-77',
    'hero.solutionFound': 'Solution Found',
    'hero.solutionText': 'Check temperature sensor and restart controller',
    
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
    'solution.exampleInput': 'CNC machine #452 stopped and showing error code E-77',
    'solution.voiceMessage': 'Voice message',
    'solution.analysisResult': 'AI Analysis Result:',
    'solution.equipment': '🏭 Equipment: CNC-452',
    'solution.type': '⚠️ Type: Malfunction',
    'solution.errorCode': '🔧 Error Code: E-77',
    'solution.searchQuery': 'Search: CNC E-77',
    'solution.searchResult': '✅ Solution: Check temperature sensor and restart controller',
    'solution.solveTime': 'Resolution time: Under 2 seconds',
    'solution.aiTech': 'Advanced AI Technology',
    'solution.processingSpeed': 'Processing Speed',
    'solution.accuracy': 'Technical Term Recognition',
    
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

    // Tech Stack
    'tech.title': 'Built with Cutting-Edge Technology',
    'tech.subtitle': 'Leveraging the latest innovations in AI and natural language processing',
    'tech.ai': 'Artificial Intelligence',
    'tech.aiDesc': 'Google Gemini 2.0 Pro for precise analysis',
    'tech.voice': 'Speech Recognition',
    'tech.voiceDesc': 'High-accuracy multilingual voice processing',
    'tech.nlp': 'Natural Language Processing',
    'tech.nlpDesc': 'Deep understanding of text and technical concepts',
    'tech.search': 'Smart Search',
    'tech.searchDesc': 'Advanced algorithms for information retrieval',

    // Examples
    'examples.title': 'Real-World Application Examples',
    'examples.subtitle': 'See how factories are using Takt in practice',
    'examples.maintenance': 'Maintenance & Repair',
    'examples.maintenanceDesc': 'Record and search maintenance solutions',
    'examples.troubleshooting': 'Troubleshooting',
    'examples.troubleshootingDesc': 'Quick problem diagnosis and solutions',
    'examples.training': 'Employee Training',
    'examples.trainingDesc': 'Transfer knowledge to new workforce',

    // Social Proof
    'social.title': 'Trusted by Leading Manufacturers',
    'social.subtitle': 'Industry leaders rely on Takt for knowledge management',
    'social.testimonial1': 'Takt has transformed our operations',
    'social.testimonial2': 'No more recurring problems on our floor',
    'social.testimonial3': 'New employees learn faster than ever',

    // Pilot CTA
    'pilot.title': 'Secure Your Factory\'s Future Today',
    'pilot.subtitle': 'Join our exclusive pilot program',
    'pilot.feature1': '3 months free usage',
    'pilot.feature2': 'Dedicated support',
    'pilot.feature3': 'Complete team training',
    'pilot.feature4': 'Setup in under one week',
    'pilot.cta': 'Request Pilot Program Access',
    'pilot.limited': 'Limited capacity - Only 10 factories',

    // Footer
    'footer.product': 'Product',
    'footer.features': 'Features',
    'footer.pricing': 'Pricing',
    'footer.examples': 'Examples',
    'footer.company': 'Company',
    'footer.about': 'About Us',
    'footer.careers': 'Careers',
    'footer.contact': 'Contact',
    'footer.support': 'Support',
    'footer.help': 'Help Center',
    'footer.docs': 'Documentation',
    'footer.api': 'API',
    'footer.legal': 'Legal',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.rights': 'All rights reserved',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    return savedLanguage || 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
  }, [language]);

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
