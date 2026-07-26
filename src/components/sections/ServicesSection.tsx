import { ArrowUpRight } from 'lucide-react';
import { Link } from '@/router';
import { localizedPath, useLanguage } from '@/contexts/LanguageContext';

export default function ServicesSection() {
  const { language, copy } = useLanguage();
  const section = copy.home.capabilities;

  return (
    <section className="section section-dark" aria-labelledby="capabilities-title">
      <div className="site-shell">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow">{section.eyebrow}</p>
            <h2 id="capabilities-title">{section.title}</h2>
          </div>
          <p>{section.intro}</p>
        </div>

        <div className="capability-grid">
          {section.items.map((item) => (
            <article className="capability-card" key={item.code}>
              <span className="capability-code">{item.code}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              <div className="capability-outcome">
                <span aria-hidden="true" />
                {item.outcome}
              </div>
            </article>
          ))}
        </div>

        <Link className="text-link" to={localizedPath('/capabilities', language)}>
          {section.explore}
          <ArrowUpRight aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
