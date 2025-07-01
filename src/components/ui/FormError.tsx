import React from 'react';
import { AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FormErrorProps {
  error: string | null;
  className?: string;
  darkMode?: boolean;
}

export const FormError: React.FC<FormErrorProps> = ({ 
  error, 
  className = '',
  darkMode = false 
}) => {
  return (
    <AnimatePresence>
      {error && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className={`flex items-center gap-2 text-sm ${
            darkMode ? 'text-red-400' : 'text-red-500'
          } ${className}`}
          role="alert"
          aria-live="polite"
        >
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          <span>{error}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};