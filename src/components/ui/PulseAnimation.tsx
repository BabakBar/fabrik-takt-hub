import { motion, useReducedMotion } from 'motion/react';
import { cn } from '@/lib/utils';

interface PulseAnimationProps {
  className?: string;
  origin?: { x: number; y: number };
}

export function PulseAnimation({ className, origin }: PulseAnimationProps) {
  const prefersReducedMotion = useReducedMotion();
  const anchor = origin ?? { x: 1180, y: 520 };
  const baseY = anchor.y;
  const controlX = anchor.x - 520;
  const controlY = anchor.y - 90;
  const mainPath = `M-120,${baseY} Q${controlX},${controlY} ${anchor.x},${anchor.y} T2040,${baseY}`;
  const echoPath = `M-120,${baseY + 30} Q${controlX},${controlY + 40} ${anchor.x},${anchor.y + 30} T2040,${baseY + 30}`;

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
          d={mainPath}
          fill="none"
          stroke="var(--pulse-primary)"
          strokeWidth="2"
          opacity="0.2"
        />
        <circle
          cx={anchor.x}
          cy={anchor.y}
          r="10"
          fill="var(--pulse-primary)"
          opacity="0.2"
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
        <linearGradient id="pulse-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="var(--pulse-primary)" stopOpacity="0" />
          <stop offset="40%" stopColor="var(--pulse-primary)" stopOpacity="0.9" />
          <stop offset="60%" stopColor="var(--pulse-primary)" stopOpacity="0.9" />
          <stop offset="100%" stopColor="var(--pulse-primary)" stopOpacity="0" />
        </linearGradient>
        <filter id="pulse-glow">
          <feGaussianBlur stdDeviation="6" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <radialGradient id="pulse-core" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--pulse-primary)" stopOpacity="0.9" />
          <stop offset="100%" stopColor="var(--pulse-primary)" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Base signal line */}
      <path
        d={mainPath}
        fill="none"
        stroke="var(--pulse-primary)"
        strokeWidth="1.5"
        opacity="0.18"
      />

      {/* Core pulse */}
      <motion.circle
        cx={anchor.x}
        cy={anchor.y}
        r="14"
        fill="url(#pulse-core)"
        filter="url(#pulse-glow)"
        animate={{ scale: [1, 1.15, 1], opacity: [0.45, 0.9, 0.45] }}
        transition={{
          duration: 2.6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.circle
        cx={anchor.x}
        cy={anchor.y}
        r="18"
        fill="none"
        stroke="var(--pulse-primary)"
        strokeWidth="1"
        opacity="0.4"
        animate={{ r: [18, 110], opacity: [0.5, 0] }}
        transition={{
          duration: 3.6,
          repeat: Infinity,
          ease: 'easeOut',
        }}
      />
      <motion.circle
        cx={anchor.x}
        cy={anchor.y}
        r="26"
        fill="none"
        stroke="var(--pulse-primary)"
        strokeWidth="0.8"
        opacity="0.35"
        animate={{ r: [26, 160], opacity: [0.4, 0] }}
        transition={{
          duration: 4.4,
          repeat: Infinity,
          ease: 'easeOut',
          delay: 1.1,
        }}
      />

      {/* Traveling pulse glow */}
      <motion.path
        d={mainPath}
        fill="none"
        stroke="url(#pulse-gradient)"
        strokeWidth="4"
        strokeLinecap="round"
        filter="url(#pulse-glow)"
        strokeDasharray="180 2000"
        initial={{ strokeDashoffset: 0, opacity: 0.35 }}
        animate={{ strokeDashoffset: -2180, opacity: [0.35, 0.9, 0.35] }}
        transition={{
          duration: 5.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Secondary faint echo */}
      <motion.path
        d={echoPath}
        fill="none"
        stroke="var(--pulse-primary)"
        strokeWidth="1"
        opacity="0.12"
        strokeDasharray="120 1400"
        initial={{ strokeDashoffset: 0 }}
        animate={{ strokeDashoffset: -1520 }}
        transition={{
          duration: 6.5,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    </svg>
  );
}
