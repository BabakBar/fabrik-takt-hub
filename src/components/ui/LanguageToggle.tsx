
import React, { useEffect, useRef, useState } from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { cn } from '@/lib/utils';

const LANGUAGE_OPTIONS = [
  { value: 'de', shortLabel: 'DE', labelKey: 'language.de' },
  { value: 'en', shortLabel: 'EN', labelKey: 'language.en' },
  { value: 'fa', shortLabel: 'FA', labelKey: 'language.fa' },
] as const;

const highlightPosition = {
  de: 'translate-x-0',
  en: 'translate-x-full',
  fa: 'translate-x-[200%]',
} as const;

const LanguageToggle = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isExpanded, setIsExpanded] = useState(false);
  const [canHover, setCanHover] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const media = window.matchMedia('(hover: hover) and (pointer: fine)');
    const update = () => setCanHover(media.matches);
    update();
    if (media.addEventListener) {
      media.addEventListener('change', update);
      return () => media.removeEventListener('change', update);
    }
    media.addListener(update);
    return () => media.removeListener(update);
  }, []);

  useEffect(() => {
    if (canHover || !isExpanded) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setIsExpanded(false);
      }
    };

    document.addEventListener('pointerdown', handlePointerDown);
    return () => document.removeEventListener('pointerdown', handlePointerDown);
  }, [canHover, isExpanded]);

  const handleBlur = (event: React.FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
      setIsExpanded(false);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Escape') {
      setIsExpanded(false);
      triggerRef.current?.focus();
    }
  };

  return (
    <div
      ref={containerRef}
      className="inline-flex items-center gap-2 rounded-full border border-[--glass-border] bg-[--glass-bg] p-1 shadow-[0_12px_30px_-20px_rgba(0,0,0,0.85)] backdrop-blur-xl transition-colors hover:border-[--glass-border-hover]"
      dir="ltr"
      onMouseEnter={() => {
        if (canHover) setIsExpanded(true);
      }}
      onMouseLeave={() => {
        if (canHover) setIsExpanded(false);
      }}
      onFocusCapture={() => setIsExpanded(true)}
      onBlurCapture={handleBlur}
      onKeyDown={handleKeyDown}
    >
      <button
        ref={triggerRef}
        type="button"
        aria-label={t('language.label')}
        aria-expanded={isExpanded}
        onClick={() => setIsExpanded((prev) => (canHover ? true : !prev))}
        className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-[--pulse-primary] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)] transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--pulse-primary]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[--bg-primary]"
      >
        <Globe className="h-4 w-4" />
      </button>
      <div
        role="group"
        aria-label={t('language.label')}
        aria-hidden={!isExpanded}
        className={cn(
          "relative grid grid-cols-3 items-center overflow-hidden rounded-full bg-white/5 p-1 transition-[max-width,opacity,transform] duration-300 ease-out",
          isExpanded
            ? "max-w-[220px] opacity-100 scale-100"
            : "max-w-0 opacity-0 scale-95 pointer-events-none"
        )}
      >
        <span
          className={cn(
            "pointer-events-none absolute inset-y-1 left-1 w-[calc((100%-0.5rem)/3)] rounded-full bg-[--pulse-primary]/20 shadow-[0_0_18px_rgba(0,212,255,0.25)] transition-transform duration-300 ease-out",
            highlightPosition[language]
          )}
        />
        {LANGUAGE_OPTIONS.map((option) => (
          <button
            key={option.value}
            type="button"
            onClick={() => {
              setLanguage(option.value);
              if (!canHover) setIsExpanded(false);
            }}
            aria-pressed={language === option.value}
            aria-label={t(option.labelKey)}
            title={t(option.labelKey)}
            className={cn(
              "relative z-10 inline-flex items-center justify-center rounded-full px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-[--text-muted] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--pulse-primary]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[--bg-primary]",
              "hover:text-[--text-primary]",
              language === option.value && "text-[--pulse-primary]"
            )}
            tabIndex={isExpanded ? 0 : -1}
          >
            <span aria-hidden="true">{option.shortLabel}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default LanguageToggle;
