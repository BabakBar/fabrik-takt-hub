
import React from 'react';
import { Mic, Search, Brain, Globe, Zap, Shield, Clock, Users } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const FeaturesSection = () => {
  const { t, language } = useLanguage();

  const features = [
    {
      icon: Mic,
      title: t('features.voiceTitle'),
      desc: t('features.voiceDesc'),
      color: 'blue',
      highlights: ['Multi-language support', 'Technical terminology recognition', 'Voice and text messaging']
    },
    {
      icon: Brain,
      title: t('features.aiTitle'),
      desc: t('features.aiDesc'),
      color: 'purple',
      demo: true
    },
    {
      icon: Search,
      title: t('features.searchTitle'),
      desc: t('features.searchDesc'),
      color: 'green',
      searchDemo: true
    },
    {
      icon: Globe,
      title: t('features.culturalTitle'),
      desc: t('features.culturalDesc'),
      color: 'amber',
      cultural: true
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-amber-400/10 to-orange-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-400/30 px-6 py-3 rounded-full text-blue-200 font-semibold mb-6 animate-fade-in">
            <Zap className="w-5 h-5 animate-pulse" />
            <span>{language === 'fa' ? 'قابلیت‌های پیشرفته' : 'Advanced Capabilities'}</span>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-8 animate-fade-in delay-200">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-amber-400 bg-clip-text text-transparent">
              {t('features.title')}
            </span>
          </h2>
          <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed animate-fade-in delay-300">
            {t('features.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 hover:border-white/40 transition-all duration-500 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${(index + 4) * 200}ms` }}
            >
              <div className="flex items-center gap-6 mb-8">
                <div className={`bg-gradient-to-br from-${feature.color}-500 to-${feature.color}-600 p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform`}>
                  <feature.icon className="text-white w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-blue-200 transition-colors">
                  {feature.title}
                </h3>
              </div>
              
              <p className="text-blue-100 mb-8 leading-relaxed text-lg">
                {feature.desc}
              </p>

              {/* Feature-specific content */}
              {feature.highlights && (
                <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 p-6 rounded-2xl border border-blue-400/30">
                  {feature.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-center gap-3 mb-3 last:mb-0">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-blue-200 font-medium">{highlight}</span>
                    </div>
                  ))}
                </div>
              )}

              {feature.demo && (
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-purple-500/20 to-indigo-500/20 p-4 rounded-2xl border border-purple-400/30">
                    <div className="font-semibold text-purple-200 mb-2">Input:</div>
                    <div className="text-sm text-white bg-white/10 p-3 rounded-lg">"Press #3 making weird noise"</div>
                  </div>
                  <div className="text-center">
                    <div className="inline-flex items-center gap-2 text-amber-400">
                      <div className="w-1 h-1 bg-amber-400 rounded-full animate-bounce"></div>
                      <div className="w-1 h-1 bg-amber-400 rounded-full animate-bounce delay-100"></div>
                      <div className="w-1 h-1 bg-amber-400 rounded-full animate-bounce delay-200"></div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 p-4 rounded-2xl border border-green-400/30">
                    <div className="font-semibold text-green-200 mb-2">Structured Output:</div>
                    <div className="space-y-2">
                      <div className="text-sm text-white flex items-center gap-2">
                        <span>🏭</span> Equipment: Press-3
                      </div>
                      <div className="text-sm text-white flex items-center gap-2">
                        <span>🔧</span> Category: Preventive Maintenance
                      </div>
                      <div className="text-sm text-white flex items-center gap-2">
                        <span>🎯</span> Keywords: [noise, press, vibration]
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {feature.searchDemo && (
                <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 p-6 rounded-2xl border border-green-400/30">
                  <div className="bg-white/10 p-4 rounded-lg border mb-4">
                    <div className="text-sm text-green-200 mb-2">Search Query:</div>
                    <div className="font-mono text-white">CNC error E-77</div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="bg-green-400/20 p-3 rounded-lg border border-green-400/40">
                      <div className="font-semibold text-green-200 text-sm">✅ Result 1: CNC-452</div>
                      <div className="text-xs text-green-100">Solution: Check temperature sensor</div>
                    </div>
                    <div className="bg-green-400/20 p-3 rounded-lg border border-green-400/40">
                      <div className="font-semibold text-green-200 text-sm">✅ Result 2: CNC-301</div>
                      <div className="text-xs text-green-100">Solution: Restart controller</div>
                    </div>
                  </div>
                </div>
              )}

              {feature.cultural && (
                <div className="space-y-4">
                  {[
                    { label: 'Date Format:', value: 'Local Standards' },
                    { label: 'Work Shifts:', value: 'Morning - Monday' },
                    { label: 'Interface:', value: 'Multi-language' }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-4 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-lg border border-amber-400/30">
                      <span className="text-amber-200">{item.label}</span>
                      <span className="font-bold text-white">{item.value}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Enhanced Performance Stats */}
        <div className="grid md:grid-cols-4 gap-8 mb-20">
          {[
            { icon: Clock, stat: '<1s', label: 'Response Time', color: 'blue' },
            { icon: Shield, stat: '99.9%', label: 'Uptime', color: 'green' },
            { icon: Users, stat: '50+', label: 'Languages', color: 'purple' },
            { icon: Zap, stat: '95%', label: 'Accuracy', color: 'amber' }
          ].map((item, index) => (
            <div 
              key={index}
              className={`group text-center bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-8 rounded-2xl shadow-xl border border-white/20 hover:border-${item.color}-400/50 transition-all duration-300 hover:scale-105 animate-fade-in`}
              style={{ animationDelay: `${(index + 8) * 100}ms` }}
            >
              <div className={`bg-gradient-to-br from-${item.color}-500 to-${item.color}-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                <item.icon className="text-white w-8 h-8" />
              </div>
              <div className={`text-3xl font-bold text-${item.color}-400 mb-2 group-hover:scale-110 transition-transform`}>
                {item.stat}
              </div>
              <div className="text-blue-200 font-medium">{item.label}</div>
            </div>
          ))}
        </div>

        {/* Enhanced Call to Action */}
        <div className="text-center animate-fade-in delay-1000">
          <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 p-12 rounded-3xl shadow-2xl relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-4 right-4 w-16 h-16 border-2 border-white rounded-full animate-spin"></div>
              <div className="absolute bottom-4 left-4 w-12 h-12 border-2 border-white rounded-full animate-pulse"></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-6 text-white flex items-center justify-center gap-3">
                <Zap className="w-8 h-8 animate-pulse" />
                {t('features.ctaTitle')}
              </h3>
              <p className="text-xl mb-8 text-orange-100 max-w-2xl mx-auto">
                {t('features.ctaDesc')}
              </p>
              <button className="group bg-white text-orange-600 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-orange-50 transition-all duration-300 shadow-2xl hover:shadow-white/25 transform hover:scale-105 flex items-center gap-3 mx-auto">
                <Brain className="w-6 h-6 group-hover:animate-pulse" />
                {t('features.ctaButton')}
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce group-hover:animate-pulse"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
