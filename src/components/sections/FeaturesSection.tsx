
import React from 'react';
import { Mic, Search } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const FeaturesSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-700 mb-6">
            {t('features.title')}
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            {t('features.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Feature 1: Voice Capture */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-blue-100 p-3 rounded-full">
                <Mic className="text-blue-600" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-slate-700">{t('features.voiceTitle')}</h3>
            </div>
            
            <p className="text-slate-600 mb-6">
              {t('features.voiceDesc')}
            </p>

            {/* Demo */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-blue-500 font-semibold">✓ Multi-language support</span>
              </div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-blue-500 font-semibold">✓ Technical terminology recognition</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-blue-500 font-semibold">✓ Voice and text messaging</span>
              </div>
            </div>
          </div>

          {/* Feature 2: AI Analysis */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-purple-100 p-3 rounded-full">
                <div className="text-purple-600 text-xl">🧠</div>
              </div>
              <h3 className="text-2xl font-bold text-slate-700">{t('features.aiTitle')}</h3>
            </div>
            
            <p className="text-slate-600 mb-6">
              {t('features.aiDesc')}
            </p>

            <div className="space-y-3">
              <div className="bg-purple-50 p-3 rounded-lg">
                <div className="font-semibold text-purple-700">Input:</div>
                <div className="text-sm">"Press #3 making weird noise"</div>
              </div>
              <div className="text-center">⬇️</div>
              <div className="bg-green-50 p-3 rounded-lg">
                <div className="font-semibold text-green-700">Structured Output:</div>
                <div className="text-sm space-y-1">
                  <div>🏭 Equipment: Press-3</div>
                  <div>🔧 Category: Preventive Maintenance</div>
                  <div>🎯 Keywords: [noise, press, vibration]</div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 3: Instant Search */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-green-100 p-3 rounded-full">
                <Search className="text-green-600" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-slate-700">{t('features.searchTitle')}</h3>
            </div>
            
            <p className="text-slate-600 mb-6">
              {t('features.searchDesc')}
            </p>

            {/* Search Demo */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="bg-white p-3 rounded border mb-3">
                <div className="text-sm text-gray-500 mb-1">Search:</div>
                <div className="font-mono">CNC error E-77</div>
              </div>
              
              <div className="space-y-2">
                <div className="bg-green-100 p-2 rounded text-sm">
                  <div className="font-semibold">✅ Result 1: CNC-452</div>
                  <div>Solution: Check temperature sensor</div>
                </div>
                <div className="bg-green-100 p-2 rounded text-sm">
                  <div className="font-semibold">✅ Result 2: CNC-301</div>
                  <div>Solution: Restart controller</div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 4: Global Design */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-amber-100 p-3 rounded-full">
                <div className="text-amber-600 text-xl">🌍</div>
              </div>
              <h3 className="text-2xl font-bold text-slate-700">{t('features.culturalTitle')}</h3>
            </div>
            
            <p className="text-slate-600 mb-6">
              {t('features.culturalDesc')}
            </p>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                <span className="text-slate-600">Date Format:</span>
                <span className="font-bold text-slate-700">Local Standards</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                <span className="text-slate-600">Work Shifts:</span>
                <span className="font-bold text-slate-700">Morning - Monday</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                <span className="text-slate-600">Interface:</span>
                <span className="font-bold text-slate-700">Multi-language</span>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">
              {t('features.ctaTitle')}
            </h3>
            <p className="text-lg mb-6">
              {t('features.ctaDesc')}
            </p>
            <button className="bg-white text-amber-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
              {t('features.ctaButton')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
