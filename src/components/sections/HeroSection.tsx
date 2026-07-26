import { ArrowDownRight, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from '@/router';
import { localizedPath, useLanguage } from '@/contexts/LanguageContext';

export default function HeroSection() {
  const { language, copy } = useLanguage();
  const hero = copy.home.hero;

  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <img
        className="hero-image"
        src="/images/fabriktakt-manufacturing-intelligence-hero.webp"
        alt=""
        width="1855"
        height="848"
        fetchPriority="high"
        decoding="async"
      />
      <div className="hero-wash" aria-hidden="true" />
      <div className="signal-grid" aria-hidden="true" />

      <div className="site-shell hero-layout">
        <div className="hero-copy">
          <p className="eyebrow">{hero.eyebrow}</p>
          <h1 id="hero-title">
            {hero.titleLead}{' '}
            <span>{hero.titleAccent}</span>
          </h1>
          <p className="hero-intro">{hero.intro}</p>
          <div className="hero-actions">
            <Link className="button button-primary" to={localizedPath('/contact', language)}>
              {hero.primary}
              <ArrowRight aria-hidden="true" />
            </Link>
            <Link className="button button-secondary" to={localizedPath('/capabilities', language)}>
              {hero.secondary}
              <ArrowDownRight aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="hero-system-card" aria-label={`${hero.signalLabel}: ${hero.signalValue}`}>
          <div className="system-card-row">
            <span className="system-dot" aria-hidden="true" />
            <div>
              <span>{hero.signalLabel}</span>
              <strong>{hero.signalValue}</strong>
            </div>
            <span className="system-state">LIVE</span>
          </div>
          <div className="system-path" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <div className="system-card-row">
            <CheckCircle2 aria-hidden="true" />
            <div>
              <span>{hero.systemLabel}</span>
              <strong>{hero.systemValue}</strong>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-index" aria-hidden="true">
        <span>FT / MANUFACTURING SYSTEMS</span>
        <span>51.1657° N · 10.4515° E</span>
      </div>
    </section>
  );
}
