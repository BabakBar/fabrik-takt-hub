import type { ReactNode } from "react";

type Props = {
  title: string;
  bullets: string[];
  icon?: ReactNode;
};

export default function CapabilityCard({ title, bullets, icon }: Props) {
  return (
    <article
      aria-label={`Capability: ${title}`}
      className="relative group flex h-full flex-col rounded-lg p-4 md:p-5 bg-transparent transition-colors hover:bg-white/[0.03] focus-within:bg-white/[0.04] focus-within:outline-none focus-within:ring-1 focus-within:ring-primary/40"
    >
      {/* Hover accent bar */}
      <div className="absolute left-0 top-0 h-full w-px bg-primary/30 opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <header className="mb-2 flex items-baseline gap-2.5">
        {icon && (
          <span
            aria-hidden
            className="self-baseline text-muted-foreground group-hover:text-primary transition-colors [&>svg]:h-5 [&>svg]:w-5 [&>svg]:shrink-0 translate-y-1.5"
          >
            {icon}
          </span>
        )}
        <h3 className="text-lg font-semibold leading-tight tracking-tight text-white">{title}</h3>
      </header>
      <ul className="mt-1 grid gap-1.5 text-sm leading-relaxed">
        {bullets.map((bullet) => (
          <li key={bullet} className="text-gray-300">
            {bullet}
          </li>
        ))}
      </ul>
    </article>
  );
}