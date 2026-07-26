import { Helmet } from 'react-helmet-async';
import { localizedPath, useLanguage } from '@/contexts/LanguageContext';

const SITE_URL = 'https://fabriktakt.com';
const SOCIAL_IMAGE_URL = `${SITE_URL}/images/fabriktakt-social.jpg`;

type SEOProps = {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
};

export default function SEO({ title, description, path, noIndex = false }: SEOProps) {
  const { language } = useLanguage();
  const canonicalPath = localizedPath(path, language);
  const canonical = `${SITE_URL}${canonicalPath}`;
  const locale = language === 'de' ? 'de_DE' : language === 'fa' ? 'fa_IR' : 'en_US';
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'FabrikTakt',
    url: SITE_URL,
    logo: `${SITE_URL}/brand-mark.svg`,
    email: 'info@fabriktakt.com',
    description,
    areaServed: 'Europe',
    knowsAbout: [
      'Manufacturing intelligence',
      'Industrial artificial intelligence',
      'Manufacturing data integration',
      'Operational software',
    ],
  };

  return (
    <Helmet prioritizeSeoTags htmlAttributes={{ lang: language, dir: language === 'fa' ? 'rtl' : 'ltr' }}>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={noIndex ? 'noindex, nofollow' : 'index, follow'} />
      <link rel="canonical" href={canonical} />
      <link rel="alternate" hrefLang="de" href={`${SITE_URL}${localizedPath(path, 'de')}`} />
      <link rel="alternate" hrefLang="en" href={`${SITE_URL}${localizedPath(path, 'en')}`} />
      <link rel="alternate" hrefLang="fa" href={`${SITE_URL}${localizedPath(path, 'fa')}`} />
      <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}${localizedPath(path, 'en')}`} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="FabrikTakt" />
      <meta property="og:locale" content={locale} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={SOCIAL_IMAGE_URL} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Connected manufacturing systems in a modern production environment" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={SOCIAL_IMAGE_URL} />

      {!noIndex && (
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      )}
    </Helmet>
  );
}
