import { cn } from '@/lib/utils';
import { HTMLAttributes, forwardRef } from 'react';

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'interactive';
  glow?: boolean;
  noPadding?: boolean;
}

const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, variant = 'default', glow = false, noPadding = false, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          // Base glass styles
          'bg-[--glass-bg] backdrop-blur-xl border border-[--glass-border] rounded-lg',
          'shadow-lg transition-all duration-300',

          // Padding
          !noPadding && 'p-6 md:p-8',

          // Variants
          variant === 'elevated' && 'bg-bg-tertiary/80',
          variant === 'interactive' && 'hover:border-[--glass-border-hover] hover:shadow-xl hover:shadow-[0_0_20px_var(--pulse-glow)] cursor-pointer',

          // Glow
          glow && 'animate-pulse-glow',

          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

GlassCard.displayName = 'GlassCard';

export { GlassCard };
