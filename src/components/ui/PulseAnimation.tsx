import { motion, useReducedMotion } from 'motion/react';
import { cn } from '@/lib/utils';

interface PulseAnimationProps {
  className?: string;
}

export function PulseAnimation({ className }: PulseAnimationProps) {
  const prefersReducedMotion = useReducedMotion();

  // Don't animate if user prefers reduced motion
  if (prefersReducedMotion) {
    return (
      <svg
        className={cn('absolute inset-0 w-full h-full pointer-events-none z-10', className)}
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <path
          d="M-100,540 Q400,440 960,540 T2020,540"
          fill="none"
          stroke="var(--pulse-primary)"
          strokeWidth="2"
          opacity="0.3"
        />
      </svg>
    );
  }

  return (
    <svg
      className={cn('absolute inset-0 w-full h-full pointer-events-none z-10', className)}
      viewBox="0 0 1920 1080"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <filter id="pulse-glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Main pulse line */}
      <motion.path
        d="M-100,540 Q400,440 960,540 T2020,540"
        fill="none"
        stroke="var(--pulse-primary)"
        strokeWidth="2"
        filter="url(#pulse-glow)"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{
          pathLength: [0, 1, 1],
          opacity: [0, 0.8, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
          times: [0, 0.5, 1],
        }}
      />

      {/* Secondary pulse */}
      <motion.path
        d="M-100,560 Q400,480 960,560 T2020,560"
        fill="none"
        stroke="var(--pulse-primary)"
        strokeWidth="1"
        opacity="0.2"
        filter="url(#pulse-glow)"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.5,
        }}
      />
    </svg>
  );
}
