import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from '@/router';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import {
  localizedPath,
  type Language,
  useLanguage,
} from '@/contexts/LanguageContext';

const languages: Language[] = ['en', 'de', 'fa'];

const Brand = () => (
  <span className="brand-lockup" aria-label="FabrikTakt">
    <img src="/brand-mark.svg" alt="" width="32" height="32" />
    <span className="brand-wordmark">
      Fabrik<span>Takt</span>
    </span>
  </span>
);

export default function Header() {
  const { language, setLanguage, copy } = useLanguage();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const navigation = [
    { label: copy.nav.capabilities, path: '/capabilities' },
    { label: copy.nav.approach, path: '/approach' },
    { label: copy.nav.contact, path: '/contact' },
  ];

  useEffect(() => {
    document.body.classList.toggle('menu-open', isMenuOpen);
    return () => document.body.classList.remove('menu-open');
  }, [isMenuOpen]);

  return (
    <>
      <a className="skip-link" href="#main-content">
        {copy.skipLink}
      </a>
      <header className="site-header">
        <div className="site-shell header-inner">
          <Link className="brand-link" to={localizedPath('/', language)}>
            <Brand />
          </Link>

          <nav className="desktop-nav" aria-label={copy.footer.navigate}>
            {navigation.map((item) => {
              const destination = localizedPath(item.path, language);
              const isActive = location.pathname.replace(/\/+$/, '') === destination.replace(/\/+$/, '');

              return (
                <Link key={item.path} to={destination} aria-current={isActive ? 'page' : undefined}>
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="header-actions">
            <div className="language-switcher" aria-label={copy.languageLabel}>
              {languages.map((locale) => (
                <button
                  key={locale}
                  type="button"
                  onClick={() => {
                    setIsMenuOpen(false);
                    setLanguage(locale);
                  }}
                  aria-pressed={language === locale}
                  lang={locale}
                >
                  {locale.toUpperCase()}
                </button>
              ))}
            </div>

            <Link className="header-cta" to={localizedPath('/contact', language)}>
              {copy.nav.contact}
              <ArrowUpRight aria-hidden="true" />
            </Link>

            <button
              ref={menuButtonRef}
              type="button"
              className="menu-button"
              onClick={() => setIsMenuOpen((open) => !open)}
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? copy.nav.menuClose : copy.nav.menuOpen}
            >
              {isMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div id="mobile-navigation" className="mobile-navigation" data-open="true">
            <nav className="site-shell" aria-label={copy.footer.navigate}>
              <Link to={localizedPath('/', language)} onClick={() => setIsMenuOpen(false)}>
                {copy.nav.home}
              </Link>
              {navigation.map((item) => (
                <Link
                  key={item.path}
                  to={localizedPath(item.path, language)}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
