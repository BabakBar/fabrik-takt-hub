import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from '@/router';
import SEO from '@/components/SEO';
import { localizedPath, useLanguage } from '@/contexts/LanguageContext';

export default function Approach() {
  const { language, copy } = useLanguage();
  const page = copy.approach;

  return (
    <>
      <SEO title={page.seoTitle} description={page.seoDescription} path="/approach" />
      <main id="main-content">
        <header className="page-hero">
          <div className="signal-grid" aria-hidden="true" />
          <div className="site-shell page-hero-inner">
            <p className="eyebrow">{page.eyebrow}</p>
            <h1>{page.title}</h1>
            <p>{page.intro}</p>
          </div>
        </header>

        <section className="section approach-section section-light">
          <div className="site-shell approach-phases">
            {page.phases.map((phase) => (
              <article key={phase.index}>
                <div className="approach-index">
                  <span>{phase.index}</span>
                  <small>{phase.duration}</small>
                </div>
                <div className="approach-content">
                  <h2>{phase.title}</h2>
                  <p>{phase.body}</p>
                  <ul>
                    {phase.outputs.map((output) => (
                      <li key={output}>
                        <CheckCircle2 aria-hidden="true" />
                        {output}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section section-dark">
          <div className="site-shell question-grid">
            <div>
              <p className="eyebrow">FabrikTakt / 05</p>
              <h2>{page.questionsTitle}</h2>
            </div>
            <ol>
              {page.questions.map((question, index) => (
                <li key={question}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  {question}
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="section section-blueprint">
          <div className="site-shell standards-layout">
            <h2>{page.standardsTitle}</h2>
            <ul>
              {page.standards.map((standard) => (
                <li key={standard}>{standard}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section cta-section">
          <div className="site-shell cta-panel">
            <div>
              <h2>{page.ctaTitle}</h2>
              <p>{page.ctaBody}</p>
            </div>
            <Link className="button button-primary" to={localizedPath('/contact', language)}>
              {page.cta}
              <ArrowRight aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
