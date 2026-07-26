import { ArrowUpRight } from 'lucide-react';
import { Link } from '@/router';
import { localizedPath, useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const { language, copy } = useLanguage();

  return (
    <footer className="site-footer">
      <div className="site-shell footer-grid">
        <div className="footer-intro">
          <Link className="brand-link" to={localizedPath('/', language)}>
            <span className="brand-lockup">
              <img src="/brand-mark.svg" alt="" width="36" height="36" />
              <span className="brand-wordmark">
                Fabrik<span>Takt</span>
              </span>
            </span>
          </Link>
          <p>{copy.footer.statement}</p>
          <a className="footer-email" href="mailto:info@fabriktakt.com">
            info@fabriktakt.com
            <ArrowUpRight aria-hidden="true" />
          </a>
        </div>

        <div className="footer-links">
          <div>
            <h2>{copy.footer.navigate}</h2>
            <Link to={localizedPath('/capabilities', language)}>{copy.nav.capabilities}</Link>
            <Link to={localizedPath('/approach', language)}>{copy.nav.approach}</Link>
            <Link to={localizedPath('/contact', language)}>{copy.nav.contact}</Link>
          </div>
          <div>
            <h2>{copy.footer.legal}</h2>
            <Link to={localizedPath('/imprint', language)}>{copy.footer.imprint}</Link>
            <Link to={localizedPath('/privacy', language)}>{copy.footer.privacy}</Link>
          </div>
        </div>
      </div>

      <div className="site-shell footer-bottom">
        <p>© {new Date().getFullYear()} FabrikTakt. {copy.footer.rights}</p>
        <p>Germany · Europe</p>
      </div>
    </footer>
  );
}
