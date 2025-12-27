import { lazy, Suspense, useEffect, useRef, useState, type ReactNode } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/sections/HeroSection';

const ServicesSection = lazy(() => import('../components/sections/ServicesSection'));
const ContactSection = lazy(() => import('../components/sections/ContactSection'));

type LazySectionProps = {
  children: ReactNode;
  minHeight?: string;
  rootMargin?: string;
};

const SectionSkeleton = ({ minHeight = '320px' }: { minHeight?: string }) => (
  <div className="w-full" style={{ minHeight }}>
    <div className="h-full w-full rounded-3xl border border-white/5 bg-white/5 animate-pulse" />
  </div>
);

const LazySection = ({ children, minHeight = '320px', rootMargin = '320px' }: LazySectionProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (shouldRender) return;

    const node = containerRef.current;
    if (!node) return;

    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setShouldRender(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldRender(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [rootMargin, shouldRender]);

  return (
    <div ref={containerRef} className="w-full">
      <Suspense fallback={<SectionSkeleton minHeight={minHeight} />}>
        {shouldRender ? children : <SectionSkeleton minHeight={minHeight} />}
      </Suspense>
    </div>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen bg-bg-primary">
      <Header />
      <main>
        {/* Hero */}
        <HeroSection />

        {/* Services */}
        <LazySection minHeight="480px" rootMargin="400px">
          <ServicesSection />
        </LazySection>

        {/* Contact */}
        <LazySection minHeight="480px" rootMargin="400px">
          <ContactSection />
        </LazySection>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
