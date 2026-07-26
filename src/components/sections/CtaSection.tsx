import { ArrowRight } from 'lucide-react';
import { Link } from '@/router';
import { localizedPath, useLanguage } from '@/contexts/LanguageContext';

export default function CtaSection() {
  const { language, copy } = useLanguage();
  const section = copy.home.cta;

  return (
    <section className="section cta-section" aria-labelledby="cta-title">
      <div className="site-shell cta-panel">
        <div>
          <p className="eyebrow">{section.eyebrow}</p>
          <h2 id="cta-title">{section.title}</h2>
          <p>{section.body}</p>
        </div>
        <div className="cta-actions">
          <Link className="button button-primary" to={localizedPath('/contact', language)}>
            {section.primary}
            <ArrowRight aria-hidden="true" />
          </Link>
          <Link className="button button-quiet" to={localizedPath('/approach', language)}>
            {section.secondary}
          </Link>
        </div>
      </div>
    </section>
  );
}
