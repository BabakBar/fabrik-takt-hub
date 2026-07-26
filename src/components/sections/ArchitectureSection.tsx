import { ArrowLeftRight, Check } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ArchitectureSection() {
  const { copy } = useLanguage();
  const section = copy.home.architecture;

  return (
    <section className="section architecture-section" aria-labelledby="architecture-title">
      <div className="site-shell architecture-layout">
        <div className="architecture-copy">
          <p className="eyebrow">{section.eyebrow}</p>
          <h2 id="architecture-title">{section.title}</h2>
          <p>{section.intro}</p>
          <ul>
            {section.notes.map((note) => (
              <li key={note}>
                <Check aria-hidden="true" />
                {note}
              </li>
            ))}
          </ul>
        </div>

        <div className="architecture-map" aria-label={section.nodes.join(' to ')}>
          {section.nodes.map((node, index) => (
            <div className="architecture-node-group" key={node}>
              <div className="architecture-node" data-layer={index + 1}>
                <span>0{index + 1}</span>
                <strong>{node}</strong>
              </div>
              {index < section.nodes.length - 1 && (
                <ArrowLeftRight className="architecture-arrow" aria-hidden="true" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
