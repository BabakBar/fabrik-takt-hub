import SEO from '@/components/SEO';
import { useLanguage } from '@/contexts/LanguageContext';

export function Imprint() {
  const { copy } = useLanguage();
  const legal = copy.legal;

  return (
    <>
      <SEO
        title={legal.imprintSeoTitle}
        description={legal.editorialBody}
        path="/imprint"
      />
      <main id="main-content">
        <header className="page-hero legal-hero">
          <div className="site-shell page-hero-inner">
            <p className="eyebrow">{legal.imprintEyebrow}</p>
            <h1>{legal.imprintTitle}</h1>
          </div>
        </header>
        <section className="section legal-section section-light">
          <div className="site-shell legal-content">
            <section>
              <h2>{legal.providerTitle}</h2>
              {legal.providerLines.map((line) => <p key={line}>{line}</p>)}
            </section>
            <section>
              <h2>{legal.contactTitle}</h2>
              {legal.contactLines.map((line) => <p key={line}>{line}</p>)}
            </section>
            <section>
              <h2>{legal.editorialTitle}</h2>
              <p>{legal.editorialBody}</p>
            </section>
            <aside className="legal-warning">
              <h2>{legal.accuracyTitle}</h2>
              <p>{legal.accuracyBody}</p>
            </aside>
          </div>
        </section>
      </main>
    </>
  );
}

export function Privacy() {
  const { copy } = useLanguage();
  const legal = copy.legal;

  return (
    <>
      <SEO
        title={legal.privacySeoTitle}
        description={legal.privacySections[0].paragraphs[0]}
        path="/privacy"
      />
      <main id="main-content">
        <header className="page-hero legal-hero">
          <div className="site-shell page-hero-inner">
            <p className="eyebrow">{legal.privacyEyebrow}</p>
            <h1>{legal.privacyTitle}</h1>
            <p>{legal.privacyUpdated}</p>
          </div>
        </header>
        <section className="section legal-section section-light">
          <div className="site-shell legal-content">
            {legal.privacySections.map((section) => (
              <section key={section.title}>
                <h2>{section.title}</h2>
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </section>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
