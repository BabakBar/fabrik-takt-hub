import { ReactNode } from "react";

type Props = {
  title: string;
  bullets: string[];
  icon?: ReactNode;
};

export default function CapabilityCard({ title, bullets, icon }: Props) {
  return (
    <article
      aria-label={title}
      className="flex h-full flex-col rounded-xl border border-border/60 bg-background/60 p-5 transition-shadow hover:shadow-lg focus-within:shadow-lg"
    >
      <header className="mb-3 flex items-center gap-3">
        {icon && <div aria-hidden className="text-primary">{icon}</div>}
        <h3 className="text-lg font-semibold leading-tight">{title}</h3>
      </header>
      <ul className="mt-1 grid gap-2 text-sm">
        {bullets.map((b, i) => (
          <li key={i} className="flex items-start gap-2">
            <span aria-hidden className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-primary/70" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}