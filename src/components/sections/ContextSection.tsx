import { useLanguage } from '@/contexts/LanguageContext';

export default function ContextSection() {
  const { copy } = useLanguage();
  const section = copy.home.context;

  return (
    <section className="section section-light" aria-labelledby="context-title">
      <div className="site-shell">
        <div className="context-heading">
          <p className="eyebrow">{section.eyebrow}</p>
          <h2 id="context-title">{section.title}</h2>
          <p>{section.intro}</p>
        </div>

        <div className="context-list">
          {section.items.map((item) => (
            <article key={item.number}>
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
