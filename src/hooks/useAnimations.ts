import { useInView, useMotionValue, useSpring } from 'motion/react';
import { useRef, useEffect } from 'react';

/**
 * Reusable intersection observer hook for scroll-triggered animations
 * @param threshold - Intersection threshold (0-1), optimized for 0.15 default
 * @param margin - Root margin for intersection observer  
 * @returns ref and isInView state
 */
export const useRevealOnScroll = (threshold = 0.15, margin = '-5%') => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: margin as any });
  return { ref, isInView };
};

/**
 * Reusable counter animation hook using Motion for React
 * @param end - Target number to count to
 * @param duration - Animation duration in seconds
 * @param isVisible - Trigger to start animation
 * @returns animated motion value
 */
export const useCountUp = (end: number, duration = 2, isVisible = false) => {
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { 
    duration: duration,
    bounce: 0.1
  });
  
  useEffect(() => {
    if (isVisible) {
      motionValue.set(end);
    }
  }, [isVisible, end, motionValue]);
  
  return springValue;
};

/**
 * Reusable animation variants for consistent hover behaviors
 */
export const hoverVariants = {
  button: {
    rest: { 
      scale: 1, 
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)' 
    },
    hover: { 
      scale: 1.02, 
      boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
      transition: { duration: 0.2 }
    },
    tap: { 
      scale: 0.98,
      transition: { duration: 0.1 }
    }
  },
  
  secondaryButton: {
    rest: { 
      scale: 1,
      borderColor: '#576071',
      color: '#d4dbe2'
    },
    hover: { 
      scale: 1.02,
      borderColor: '#F9A825',
      color: '#F9A825',
      transition: { duration: 0.18 }
    },
    tap: { 
      scale: 0.98,
      transition: { duration: 0.1 }
    }
  },
  
  icon: {
    rest: { 
      rotate: 0, 
      scale: 1 
    },
    hover: { 
      rotate: [0, -5, 5, -3, 0], 
      scale: 1.1,
      transition: { 
        duration: 0.6,
        ease: [0.34, 1.56, 0.64, 1]
      }
    }
  },
  
  sparkle: {
    rest: { 
      rotate: 0, 
      scale: 1,
      opacity: 1
    },
    hover: { 
      rotate: [0, -8, 12, -6, 8, -4, 0], 
      scale: [1, 1.15, 1.25, 1.2, 1.15, 1.1, 1.05],
      opacity: [1, 0.8, 1, 0.9, 1, 0.95, 1],
      transition: { 
        duration: 0.8,
        type: "spring" as const,
        stiffness: 250,
        damping: 12,
        times: [0, 0.15, 0.3, 0.45, 0.6, 0.8, 1]
      }
    }
  }
};

/**
 * Enhanced focus variants for accessibility
 */
export const focusVariants = {
  button: {
    rest: { 
      boxShadow: '0 0 0 0px rgba(249, 168, 37, 0)' 
    },
    focus: { 
      boxShadow: '0 0 0 4px rgba(249, 168, 37, 0.2)',
      transition: { duration: 0.2 }
    }
  }
};

/**
 * Staggered animation variants for lists and grids
 */
export const staggerVariants = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  },
  
  item: {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  }
};

/**
 * Page transition variants
 */
export const pageVariants = {
  initial: { 
    opacity: 0, 
    y: 20 
  },
  in: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  },
  out: { 
    opacity: 0, 
    y: -20,
    transition: {
      duration: 0.3,
      ease: 'easeIn'
    }
  }
};