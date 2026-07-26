import { ArrowLeft } from 'lucide-react';
import { Link } from '@/router';
import SEO from '@/components/SEO';
import { localizedPath, useLanguage } from '@/contexts/LanguageContext';

export default function NotFound() {
  const { language, copy } = useLanguage();

  return (
    <>
      <SEO
        title={`404 — FabrikTakt`}
        description={copy.notFound.body}
        path="/404"
        noIndex
      />
      <main id="main-content" className="not-found">
        <div className="signal-grid" aria-hidden="true" />
        <div>
          <span>404</span>
          <h1>{copy.notFound.title}</h1>
          <p>{copy.notFound.body}</p>
          <Link className="button button-primary" to={localizedPath('/', language)}>
            <ArrowLeft className="icon-directional" aria-hidden="true" />
            {copy.notFound.cta}
          </Link>
        </div>
      </main>
    </>
  );
}
