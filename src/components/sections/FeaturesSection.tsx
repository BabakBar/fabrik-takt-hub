
import React from 'react';
import { Mic, Search, Brain, Globe } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const FeaturesSection = () => {
  const { t, language } = useLanguage();

  const features = [
    {
      icon: Mic,
      title: t('features.voiceTitle'),
      desc: t('features.voiceDesc'),
      color: 'amber'
    },
    {
      icon: Brain,
      title: t('features.aiTitle'),
      desc: t('features.aiDesc'),
      color: 'slate'
    },
    {
      icon: Search,
      title: t('features.searchTitle'),
      desc: t('features.searchDesc'),
      color: 'green'
    },
    {
      icon: Globe,
      title: t('features.culturalTitle'),
      desc: t('features.culturalDesc'),
      color: 'blue'
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 px-4 py-2 rounded-full text-amber-700 font-medium mb-6">
              <Brain className="w-4 h-4" />
              <span>{language === 'fa' ? 'قابلیت‌های پیشرفته' : 'Core Capabilities'}</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
              {t('features.title')}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              {t('features.subtitle')}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-20">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`bg-${feature.color === 'amber' ? 'amber-500' : feature.color === 'slate' ? 'slate-700' : feature.color === 'green' ? 'green-500' : 'blue-500'} p-3 rounded-lg shadow-sm`}>
                    <feature.icon className="text-white w-6 h-6" />
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

          {/* Performance Stats */}
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { stat: '<1s', label: 'Response Time' },
              { stat: '99.9%', label: 'Uptime' },
              { stat: '50+', label: 'Languages' },
              { stat: '95%', label: 'Accuracy' }
            ].map((item, index) => (
              <div key={index} className="bg-white text-center p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="text-2xl font-bold text-amber-500 mb-2">{item.stat}</div>
                <div className="text-slate-600 font-medium">{item.label}</div>
              </div>
            ))}
          </div>

          {/* Simple CTA */}
          <div className="text-center mt-16">
            <div className="bg-slate-800 text-white p-8 rounded-2xl max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">
                {t('features.ctaTitle')}
              </h3>
              <p className="text-slate-300 mb-6">
                {t('features.ctaDesc')}
              </p>
              <button className="bg-amber-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-600 transition-colors flex items-center gap-2 mx-auto">
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
