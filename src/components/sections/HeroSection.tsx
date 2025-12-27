import { motion } from 'motion/react';
import { ArrowRight, Calendar } from 'lucide-react';
import { Button } from '../ui/button';
import { PulseAnimation } from '../ui/PulseAnimation';
import { useLanguage } from '@/contexts/LanguageContext';

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-[--bg-primary]">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(0,212,255,0.5) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(0,212,255,0.5) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[--bg-primary] via-[--bg-primary]/95 to-[--bg-secondary]/80" />

      {/* Pulse Animation - reduced opacity */}
      <div className="opacity-40">
        <PulseAnimation />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-20 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="max-w-2xl">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6"
            >
              <span className="font-mono text-xs md:text-sm tracking-[0.2em] uppercase text-[--pulse-primary]">
                // {t('hero.eyebrow')}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.05] mb-8"
            >
              <span className="block text-white">{t('hero.title.line1')}</span>
              <span className="block bg-gradient-to-r from-[--pulse-primary] to-[--pulse-secondary] bg-clip-text text-transparent">
                {t('hero.title.line2')}
              </span>
            </motion.h1>

            {/* Subtitle - no glass card */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-[--text-secondary] mb-10 max-w-lg"
            >
              {t('hero.subtitle')}
            </motion.p>

            {/* Dual CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a href="#services">
                <Button
                  size="lg"
                  className="bg-[--pulse-primary] hover:bg-[--pulse-secondary] text-[--bg-primary] font-semibold px-8 py-3 text-base transition-all hover:shadow-[0_0_30px_var(--pulse-glow)]"
                >
                  {t('hero.cta')}
                  <ArrowRight className="ms-2 h-5 w-5 icon-arrow-right" />
                </Button>
              </a>
              <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[--pulse-primary]/50 text-[--pulse-primary] hover:bg-[--pulse-primary]/10 font-semibold px-8 py-3 text-base transition-all"
                >
                  <Calendar className="me-2 h-5 w-5" />
                  {t('hero.ctaSecondary')}
                </Button>
              </a>
            </motion.div>
          </div>

          {/* Right: Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:flex justify-center items-center"
          >
            <div className="relative">
              {/* Glow behind illustration */}
              <div className="absolute inset-0 bg-[--pulse-primary]/10 blur-[80px] rounded-full" />
              <img
                src="/Factory%20Images/Fabrik-Icons3.png"
                alt="AI-powered industrial technology"
                className="relative w-full max-w-lg xl:max-w-xl drop-shadow-2xl"
                style={{
                  filter: 'invert(1) hue-rotate(180deg) brightness(1.1) contrast(1.1)'
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
