import { motion } from 'motion/react';
import { useLanguage } from '../../contexts/LanguageContext';
import { GlassCard } from '../ui/GlassCard';
import { useRevealOnScroll, staggerVariants } from '../../hooks/useAnimations';
import { Brain, Database, Globe, Cloud } from 'lucide-react';

const ServicesSection = () => {
  const { t } = useLanguage();
  const { ref, isInView } = useRevealOnScroll();

  const services = [
    {
      icon: Brain,
      titleKey: 'services.ai.title',
      descKey: 'services.ai.desc',
    },
    {
      icon: Database,
      titleKey: 'services.data.title',
      descKey: 'services.data.desc',
    },
    {
      icon: Globe,
      titleKey: 'services.web.title',
      descKey: 'services.web.desc',
    },
    {
      icon: Cloud,
      titleKey: 'services.cloud.title',
      descKey: 'services.cloud.desc',
    },
  ];

  return (
    <motion.section
      id="services"
      ref={ref}
      className="py-24 bg-bg-primary"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            {t('services.heading')}
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            {t('services.description')}
          </p>
        </div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerVariants.container}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div key={index} variants={staggerVariants.item}>
                <GlassCard
                  variant="interactive"
                  className="p-8 h-full transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="bg-gradient-to-br from-[--pulse-primary] to-[--pulse-secondary] w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-[0_0_20px_var(--pulse-glow)]">
                    <Icon className="text-bg-primary w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-text-primary mb-3">
                    {t(service.titleKey)}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {t(service.descKey)}
                  </p>
                </GlassCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ServicesSection;
