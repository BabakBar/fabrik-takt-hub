import { Mail } from 'lucide-react';
import SEO from '@/components/SEO';
import ContactSection from '@/components/sections/ContactSection';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Contact() {
  const { copy } = useLanguage();
  const page = copy.contact;

  return (
    <>
      <SEO title={page.seoTitle} description={page.seoDescription} path="/contact" />
      <main id="main-content">
        <header className="page-hero contact-hero">
          <div className="signal-grid" aria-hidden="true" />
          <div className="site-shell page-hero-inner">
            <p className="eyebrow">{page.eyebrow}</p>
            <h1>{page.title}</h1>
            <p>{page.intro}</p>
          </div>
        </header>

        <section className="section contact-section section-light">
          <div className="site-shell contact-layout">
            <div className="contact-aside">
              <div>
                <Mail aria-hidden="true" />
                <h2>{page.directTitle}</h2>
                <p>{page.directBody}</p>
                <a href="mailto:info@fabriktakt.com">info@fabriktakt.com</a>
              </div>
              <p className="response-note">{page.response}</p>
            </div>
            <ContactSection />
          </div>
        </section>
      </main>
    </>
  );
}
