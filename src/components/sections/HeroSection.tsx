import { motion } from 'motion/react';
import { ArrowRight, MessageSquare } from 'lucide-react';
import { Button } from '../ui/button';
import { PulseAnimation } from '../ui/PulseAnimation';
import { useLanguage } from '@/contexts/LanguageContext';

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-[--bg-primary]">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,212,255,0.45)_1px,transparent_1px),linear-gradient(90deg,rgba(0,212,255,0.45)_1px,transparent_1px)] bg-[length:60px_60px]" />
      </div>

      {/* Illustration background */}
      <div className="absolute inset-0 opacity-[0.3]">
        <img
          src="/Factory%20Images/Fabrik-Icons3.png"
          alt=""
          aria-hidden="true"
          className="absolute right-[-15%] top-1/2 w-[140%] max-w-none -translate-y-1/2 drop-shadow-[0_40px_120px_rgba(0,0,0,0.7)] filter invert brightness-110 contrast-110 md:right-[-5%] md:w-[120%] lg:right-0 lg:w-[110%]"
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[--bg-primary] via-[--bg-primary]/92 to-[--bg-secondary]/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-[--bg-primary]/95 via-[--bg-primary]/70 to-transparent" />

      {/* Pulse Animation - anchored to AI brain */}
      <div className="opacity-50">
        <PulseAnimation origin={{ x: 1180, y: 520 }} />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-20 py-20 md:py-32">
        <div className="grid gap-12 items-center">
          {/* Text Content */}
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
              <a href="#contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[--pulse-primary]/50 text-[--pulse-primary] hover:bg-[--pulse-primary]/10 font-semibold px-8 py-3 text-base transition-all"
                >
                  <MessageSquare className="me-2 h-5 w-5" />
                  {t('hero.ctaSecondary')}
                </Button>
              </a>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
