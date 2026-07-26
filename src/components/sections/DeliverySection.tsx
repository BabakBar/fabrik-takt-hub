import { useLanguage } from '@/contexts/LanguageContext';

export default function DeliverySection() {
  const { copy } = useLanguage();
  const section = copy.home.model;

  return (
    <section className="section section-blueprint" aria-labelledby="delivery-title">
      <div className="site-shell">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow">{section.eyebrow}</p>
            <h2 id="delivery-title">{section.title}</h2>
          </div>
          <p>{section.intro}</p>
        </div>

        <ol className="delivery-steps">
          {section.phases.map((phase) => (
            <li key={phase.step}>
              <span>{phase.step}</span>
              <div>
                <h3>{phase.title}</h3>
                <p>{phase.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
