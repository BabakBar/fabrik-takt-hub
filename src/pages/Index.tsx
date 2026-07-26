import SEO from '@/components/SEO';
import ArchitectureSection from '@/components/sections/ArchitectureSection';
import ContextSection from '@/components/sections/ContextSection';
import CtaSection from '@/components/sections/CtaSection';
import DeliverySection from '@/components/sections/DeliverySection';
import HeroSection from '@/components/sections/HeroSection';
import PrinciplesSection from '@/components/sections/PrinciplesSection';
import ServicesSection from '@/components/sections/ServicesSection';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Index() {
  const { copy } = useLanguage();

  return (
    <>
      <SEO
        title={copy.home.seoTitle}
        description={copy.home.seoDescription}
        path="/"
      />
      <main id="main-content">
        <HeroSection />
        <ContextSection />
        <ServicesSection />
        <DeliverySection />
        <ArchitectureSection />
        <PrinciplesSection />
        <CtaSection />
      </main>
    </>
  );
}
