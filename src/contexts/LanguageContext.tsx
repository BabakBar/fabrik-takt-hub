
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

type Language = 'de' | 'en' | 'fa';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  fa: {
    // Navigation
    'nav.services': 'خدمات',
    'nav.contact': 'تماس',
    'nav.capabilities': 'قابلیت‌ها',

    // Hero Section - Agency
    'hero.eyebrow': 'آژانس هوش مصنوعی و فناوری',
    'hero.title.line1': 'می‌سازیم آنچه',
    'hero.title.line2': 'صنعت نیاز دارد.',
    'hero.subtitle': 'اپلیکیشن‌های هوش مصنوعی، خطوط داده، زیرساخت ابری و پلتفرم‌های وب. دقت آلمانی، تحویل جهانی.',
    'hero.cta': 'خدمات ما',
    'hero.ctaSecondary': 'رزرو مشاوره',

    // Services Section
    'services.heading': 'خدمات ما',
    'services.description': 'راه‌حل‌های فناوری سرتاسری برای صنعت و تولید',
    'services.ai.title': 'اپلیکیشن‌های هوش مصنوعی',
    'services.ai.desc': 'راه‌حل‌های سفارشی AI، ادغام LLM، اتوماسیون هوشمند',
    'services.data.title': 'داده و یادگیری ماشین',
    'services.data.desc': 'خطوط داده، تحلیل‌ها، مدل‌های ML، زیرساخت داده',
    'services.web.title': 'وب و اپلیکیشن',
    'services.web.desc': 'اپلیکیشن‌های وب مدرن، داشبوردها، ابزارهای داخلی',
    'services.cloud.title': 'ابر و DevOps',
    'services.cloud.desc': 'زیرساخت، استقرار، مقیاس‌پذیری، مانیتورینگ',

    // Contact Section
    'contact.heading': 'بیایید صحبت کنیم',
    'contact.description': 'پروژه‌تان را با ما در میان بگذارید',
    'contact.nameLabel': 'نام',
    'contact.namePlaceholder': 'نام شما',
    'contact.emailLabel': 'ایمیل',
    'contact.messageLabel': 'پیام',
    'contact.messagePlaceholder': 'درباره پروژه‌تان بگویید...',
    'contact.submitButton': 'ارسال پیام',
    'contact.submittingButton': 'در حال ارسال...',
    'contact.successHeading': 'پیام ارسال شد!',
    'contact.successMessage': 'به زودی با شما تماس می‌گیریم.',

    // Footer - Minimal
    'footer.tagline': 'فناوری صنعتی',
    'footer.services': 'خدمات',
    'footer.contact': 'تماس',
    'footer.rights': 'تمام حقوق محفوظ است',
  },
  en: {
    // Navigation
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    'nav.capabilities': 'Capabilities',

    // Hero Section - Agency
    'hero.eyebrow': 'AI & Technology Agency',
    'hero.title.line1': 'We build what',
    'hero.title.line2': 'industries need.',
    'hero.subtitle': 'AI applications, data pipelines, cloud infrastructure, and web platforms. German precision, delivered.',
    'hero.cta': 'Our Services',
    'hero.ctaSecondary': 'Book a Call',

    // Services Section
    'services.heading': 'What We Build',
    'services.description': 'End-to-end technology solutions for industry and manufacturing',
    'services.ai.title': 'AI Applications',
    'services.ai.desc': 'Custom AI solutions, LLM integration, intelligent automation',
    'services.data.title': 'Data & ML',
    'services.data.desc': 'Pipelines, analytics, ML models, data infrastructure',
    'services.web.title': 'Web & Apps',
    'services.web.desc': 'Modern web applications, dashboards, internal tools',
    'services.cloud.title': 'Cloud & DevOps',
    'services.cloud.desc': 'Infrastructure, deployment, scalability, monitoring',

    // Contact Section
    'contact.heading': 'Let\'s Talk',
    'contact.description': 'Tell us about your project',
    'contact.nameLabel': 'Name',
    'contact.namePlaceholder': 'Your name',
    'contact.emailLabel': 'Email',
    'contact.messageLabel': 'Message',
    'contact.messagePlaceholder': 'Tell us about your project...',
    'contact.submitButton': 'Send Message',
    'contact.submittingButton': 'Sending...',
    'contact.successHeading': 'Message Sent!',
    'contact.successMessage': 'We\'ll get back to you soon.',

    // Footer - Minimal
    'footer.tagline': 'Industrial-grade technology',
    'footer.services': 'Services',
    'footer.contact': 'Contact',
    'footer.rights': 'All rights reserved',
  },
  de: {
    // Navigation
    'nav.services': 'Leistungen',
    'nav.contact': 'Kontakt',
    'nav.capabilities': 'Lösungen',

    // Hero Section - Agency
    'hero.eyebrow': 'KI & Technologie-Agentur',
    'hero.title.line1': 'Wir bauen, was',
    'hero.title.line2': 'Industrie braucht.',
    'hero.subtitle': 'KI-Anwendungen, Datenpipelines, Cloud-Infrastruktur und Webplattformen. Deutsche Präzision, geliefert.',
    'hero.cta': 'Unsere Leistungen',
    'hero.ctaSecondary': 'Gespräch buchen',

    // Services Section
    'services.heading': 'Was wir bauen',
    'services.description': 'End-to-End-Technologielösungen für Industrie und Fertigung',
    'services.ai.title': 'KI-Anwendungen',
    'services.ai.desc': 'Maßgeschneiderte KI-Lösungen, LLM-Integration, intelligente Automatisierung',
    'services.data.title': 'Daten & ML',
    'services.data.desc': 'Pipelines, Analytics, ML-Modelle, Dateninfrastruktur',
    'services.web.title': 'Web & Apps',
    'services.web.desc': 'Moderne Webanwendungen, Dashboards, interne Tools',
    'services.cloud.title': 'Cloud & DevOps',
    'services.cloud.desc': 'Infrastruktur, Deployment, Skalierbarkeit, Monitoring',

    // Contact Section
    'contact.heading': 'Lassen Sie uns sprechen',
    'contact.description': 'Erzählen Sie uns von Ihrem Projekt',
    'contact.nameLabel': 'Name',
    'contact.namePlaceholder': 'Ihr Name',
    'contact.emailLabel': 'E-Mail',
    'contact.messageLabel': 'Nachricht',
    'contact.messagePlaceholder': 'Erzählen Sie uns von Ihrem Projekt...',
    'contact.submitButton': 'Nachricht senden',
    'contact.submittingButton': 'Wird gesendet...',
    'contact.successHeading': 'Nachricht gesendet!',
    'contact.successMessage': 'Wir melden uns bald bei Ihnen.',

    // Footer - Minimal
    'footer.tagline': 'Industrietechnologie',
    'footer.services': 'Leistungen',
    'footer.contact': 'Kontakt',
    'footer.rights': 'Alle Rechte vorbehalten',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    return savedLanguage || 'de';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'fa' ? 'rtl' : 'ltr';
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
