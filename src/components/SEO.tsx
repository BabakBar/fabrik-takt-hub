import { Helmet } from "react-helmet-async";

type SEOProps = {
  title?: string;
  description?: string;
  canonical?: string;
};

export default function SEO({ title, description, canonical }: SEOProps) {
  return (
    <Helmet prioritizeSeoTags>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {canonical && <link rel="canonical" href={canonical} />}
    </Helmet>
  );
}