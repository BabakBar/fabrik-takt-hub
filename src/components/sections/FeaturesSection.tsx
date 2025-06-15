
import React from 'react';
import { Mic, Search, Brain, Globe, ArrowRight, Sparkles } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const FeaturesSection = () => {
  const { t, language } = useLanguage();

  const features = [
    {
      icon: Mic,
      title: t('features.voiceTitle'),
      desc: t('features.voiceDesc'),
      iconBg: 'bg-amber-500'
    },
    {
      icon: Brain,
      title: t('features.aiTitle'),
      desc: t('features.aiDesc'),
      iconBg: 'bg-slate-700'
    },
    {
      icon: Search,
      title: t('features.searchTitle'),
      desc: t('features.searchDesc'),
      iconBg: 'bg-green-500'
    },
    {
      icon: Globe,
      title: t('features.culturalTitle'),
      desc: t('features.culturalDesc'),
      iconBg: 'bg-blue-500'
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 bg-amber-100 border border-amber-200/80 px-6 py-3 rounded-full text-amber-700 font-semibold mb-6 shadow-sm">
              <Sparkles className="w-5 h-5" />
              <span>{language === 'fa' ? 'قابلیت‌های کلیدی' : 'Core Capabilities'}</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              {t('features.title')}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              {t('features.subtitle')}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-20">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-md border border-slate-100 hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-5 mb-5">
                  <div className={`p-3 rounded-lg shadow-md ${feature.iconBg}`}>
                    <feature.icon className="text-white w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">
                    {feature.title}
                  </h3>
                </div>
                
                <p className="text-slate-600 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
          
          {/* Simple CTA */}
          <div className="text-center">
            <div className="bg-slate-900 text-white p-10 rounded-2xl max-w-4xl mx-auto shadow-2xl">
              <h3 className="text-3xl font-bold mb-4">
                {t('features.ctaTitle')}
              </h3>
              <p className="text-slate-300 mb-8 text-lg">
                {t('features.ctaDesc')}
              </p>
              <button className="bg-amber-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-amber-600 transition-colors flex items-center gap-3 mx-auto shadow-lg shadow-amber-500/25">
                <Brain className="w-5 h-5" />
                {t('features.ctaButton')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
