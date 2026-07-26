import { ArrowRight, Check } from 'lucide-react';
import { Link } from '@/router';
import SEO from '@/components/SEO';
import { localizedPath, useLanguage } from '@/contexts/LanguageContext';

export default function Capabilities() {
  const { language, copy } = useLanguage();
  const page = copy.capabilities;

  return (
    <>
      <SEO title={page.seoTitle} description={page.seoDescription} path="/capabilities" />
      <main id="main-content">
        <header className="page-hero">
          <div className="signal-grid" aria-hidden="true" />
          <div className="site-shell page-hero-inner">
            <p className="eyebrow">{page.eyebrow}</p>
            <h1>{page.title}</h1>
            <p>{page.intro}</p>
          </div>
        </header>

        <section className="section section-light">
          <div className="site-shell service-list">
            {page.items.map((item) => (
              <article key={item.index} className="service-detail">
                <div className="service-detail-heading">
                  <span>{item.index}</span>
                  <div>
                    <h2>{item.title}</h2>
                    <p>{item.summary}</p>
                  </div>
                </div>
                <div className="service-detail-body">
                  <div>
                    <h3>{page.deliverablesLabel}</h3>
                    <ul>
                      {item.deliverables.map((deliverable) => (
                        <li key={deliverable}>
                          <Check aria-hidden="true" />
                          {deliverable}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="fit-note">
                    <span>{page.fitLabel}</span>
                    <p>{item.fit}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section cta-section">
          <div className="site-shell cta-panel">
            <div>
              <h2>{page.closingTitle}</h2>
              <p>{page.closingBody}</p>
            </div>
            <Link className="button button-primary" to={localizedPath('/contact', language)}>
              {page.closingCta}
              <ArrowRight aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
