import { useEffect, type ReactNode } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Approach from '@/pages/Approach';
import Capabilities from '@/pages/Capabilities';
import Contact from '@/pages/Contact';
import Index from '@/pages/Index';
import { Imprint, Privacy } from '@/pages/Legal';
import NotFound from '@/pages/NotFound';
import { useLocation } from '@/router';

const routeWithoutLocale = (pathname: string) => {
  const route = pathname.replace(/^\/(en|fa)(?=\/|$)/, '').replace(/\/+$/, '');
  return route || '/';
};

function ScrollManager() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const target = document.querySelector(location.hash);
      target?.scrollIntoView();
      return;
    }

    window.scrollTo({ top: 0 });
  }, [location.pathname, location.hash]);

  return null;
}

function CurrentPage() {
  const { pathname } = useLocation();
  const route = routeWithoutLocale(pathname);
  const pages: Record<string, ReactNode> = {
    '/': <Index />,
    '/capabilities': <Capabilities />,
    '/approach': <Approach />,
    '/contact': <Contact />,
    '/imprint': <Imprint />,
    '/privacy': <Privacy />,
  };

  return pages[route] ?? <NotFound />;
}

export default function App() {
  return (
    <HelmetProvider>
      <LanguageProvider>
        <ScrollManager />
        <Header />
        <CurrentPage />
        <Footer />
      </LanguageProvider>
    </HelmetProvider>
  );
}
