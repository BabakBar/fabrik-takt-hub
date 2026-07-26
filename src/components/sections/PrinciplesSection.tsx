import { CircleCheck } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function PrinciplesSection() {
  const { copy } = useLanguage();
  const section = copy.home.principles;

  return (
    <section className="section section-light" aria-labelledby="principles-title">
      <div className="site-shell">
        <div className="section-heading">
          <p className="eyebrow">{section.eyebrow}</p>
          <h2 id="principles-title">{section.title}</h2>
        </div>

        <div className="principles-grid">
          {section.items.map((item) => (
            <article key={item.title}>
              <CircleCheck aria-hidden="true" />
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
