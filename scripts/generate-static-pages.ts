type Locale = 'de' | 'en' | 'fa';

type RouteMetadata = {
  route: string;
  locale: Locale;
  page: (typeof pages)[number];
  title: string;
  description: string;
};

const metadata = {
  de: {
    home: ['FabrikTakt — KI-Systeme für die Fertigung', 'FabrikTakt entwickelt praktische KI-, Daten- und Automatisierungssysteme für produzierende Unternehmen.'],
    capabilities: ['Leistungen — FabrikTakt', 'Produktionsintelligenz, KI-Wissenssysteme, Datenintegration und operative Anwendungen für die Fertigung.'],
    approach: ['Vorgehen — FabrikTakt', 'Ein evidenzbasiertes Vorgehen für KI- und Datenprojekte in der Fertigung.'],
    contact: ['Kontakt — FabrikTakt', 'Besprechen Sie einen konkreten KI-, Daten- oder Automatisierungsfall in Ihrer Fertigung.'],
    imprint: ['Impressum — FabrikTakt', 'Anbieter- und Kontaktinformationen von FabrikTakt.'],
    privacy: ['Datenschutz — FabrikTakt', 'Informationen zur Verarbeitung personenbezogener Daten durch FabrikTakt.'],
  },
  en: {
    home: ['FabrikTakt — AI systems for manufacturing', 'FabrikTakt builds practical AI, data, and automation systems for manufacturers.'],
    capabilities: ['Capabilities — FabrikTakt', 'Production intelligence, AI knowledge systems, data integration, and operational applications for manufacturing.'],
    approach: ['Approach — FabrikTakt', 'An evidence-led approach to AI and data projects in manufacturing.'],
    contact: ['Contact — FabrikTakt', 'Discuss a concrete manufacturing AI, data, or automation use case with FabrikTakt.'],
    imprint: ['Legal notice — FabrikTakt', 'Provider and contact information for FabrikTakt.'],
    privacy: ['Privacy — FabrikTakt', 'Information about personal-data processing by FabrikTakt.'],
  },
  fa: {
    home: ['FabrikTakt — سامانه‌های هوش مصنوعی برای تولید', 'FabrikTakt سامانه‌های کاربردی هوش مصنوعی، داده و اتوماسیون را برای شرکت‌های تولیدی پیاده‌سازی می‌کند.'],
    capabilities: ['توانمندی‌ها — FabrikTakt', 'هوشمندی تولید، سامانه‌های دانش هوشمند، یکپارچه‌سازی داده و نرم‌افزارهای عملیاتی.'],
    approach: ['روش کار — FabrikTakt', 'رویکرد مبتنی بر شواهد برای پروژه‌های هوش مصنوعی و داده در تولید.'],
    contact: ['تماس — FabrikTakt', 'درباره یک کاربرد مشخص هوش مصنوعی، داده یا اتوماسیون در تولید گفت‌وگو کنید.'],
    imprint: ['اطلاعات حقوقی — FabrikTakt', 'اطلاعات ارائه‌دهنده و تماس FabrikTakt.'],
    privacy: ['حریم خصوصی — FabrikTakt', 'اطلاعات پردازش داده‌های شخصی توسط FabrikTakt.'],
  },
} as const;

const locales: Locale[] = ['de', 'en', 'fa'];
const pages = ['home', 'capabilities', 'approach', 'contact', 'imprint', 'privacy'] as const;

const routeFor = (locale: Locale, page: (typeof pages)[number]) => {
  const prefix = locale === 'en' ? '' : `/${locale}`;
  return page === 'home' ? `${prefix}/` : `${prefix}/${page}/`;
};

const routes: RouteMetadata[] = locales.flatMap((locale) =>
  pages.map((page) => ({
    route: routeFor(locale, page),
    locale,
    page,
    title: metadata[locale][page][0],
    description: metadata[locale][page][1],
  })),
);

const template = await Bun.file('dist/index.html').text();
const siteUrl = 'https://fabriktakt.com';

const replaceMeta = (html: string, route: RouteMetadata) => {
  const canonical = `${siteUrl}${route.route}`;
  const direction = route.locale === 'fa' ? 'rtl' : 'ltr';
  const locale = route.locale === 'de' ? 'de_DE' : route.locale === 'fa' ? 'fa_IR' : 'en_US';
  const alternateUrl = (language: Locale) => `${siteUrl}${routeFor(language, route.page)}`;

  return html
    .replace(/<html lang="[^"]+" dir="[^"]+">/, `<html lang="${route.locale}" dir="${direction}">`)
    .replace(/<title data-rh="true">.*?<\/title>/, `<title data-rh="true">${route.title}</title>`)
    .replace(/<meta data-rh="true" name="description" content="[^"]*"\s*\/>/, `<meta data-rh="true" name="description" content="${route.description}" />`)
    .replace(/<link data-rh="true" rel="canonical" href="[^"]*"\s*\/>/, `<link data-rh="true" rel="canonical" href="${canonical}" />`)
    .replace(/<link data-rh="true" rel="alternate" hreflang="de" href="[^"]*"\s*\/>/, `<link data-rh="true" rel="alternate" hreflang="de" href="${alternateUrl('de')}" />`)
    .replace(/<link data-rh="true" rel="alternate" hreflang="en" href="[^"]*"\s*\/>/, `<link data-rh="true" rel="alternate" hreflang="en" href="${alternateUrl('en')}" />`)
    .replace(/<link data-rh="true" rel="alternate" hreflang="fa" href="[^"]*"\s*\/>/, `<link data-rh="true" rel="alternate" hreflang="fa" href="${alternateUrl('fa')}" />`)
    .replace(/<link data-rh="true" rel="alternate" hreflang="x-default" href="[^"]*"\s*\/>/, `<link data-rh="true" rel="alternate" hreflang="x-default" href="${alternateUrl('en')}" />`)
    .replace(/<meta data-rh="true" property="og:title" content="[^"]*"\s*\/>/, `<meta data-rh="true" property="og:title" content="${route.title}" />`)
    .replace(/<meta data-rh="true" property="og:description" content="[^"]*"\s*\/>/, `<meta data-rh="true" property="og:description" content="${route.description}" />`)
    .replace(/<meta data-rh="true" property="og:locale" content="[^"]*"\s*\/>/, `<meta data-rh="true" property="og:locale" content="${locale}" />`)
    .replace(/<meta data-rh="true" property="og:url" content="[^"]*"\s*\/>/, `<meta data-rh="true" property="og:url" content="${canonical}" />`)
    .replace(/<meta data-rh="true" name="twitter:title" content="[^"]*"\s*\/>/, `<meta data-rh="true" name="twitter:title" content="${route.title}" />`)
    .replace(/<meta data-rh="true" name="twitter:description" content="[^"]*"\s*\/>/, `<meta data-rh="true" name="twitter:description" content="${route.description}" />`);
};

for (const route of routes) {
  if (route.route === '/') continue;

  const outputPath = `dist${route.route}index.html`;
  await mkdir(dirname(outputPath), { recursive: true });
  await Bun.write(outputPath, replaceMeta(template, route));
}

const notFound = template
  .replace(/<meta data-rh="true" name="robots" content="[^"]*"\s*\/>/, '<meta data-rh="true" name="robots" content="noindex, nofollow" />')
  .replace(/<title data-rh="true">.*?<\/title>/, '<title data-rh="true">404 — FabrikTakt</title>');

await Bun.write('dist/404.html', notFound);
import { mkdir } from 'node:fs/promises';
import { dirname } from 'node:path';
