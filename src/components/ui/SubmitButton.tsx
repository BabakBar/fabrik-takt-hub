import React from 'react';
import { Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface SubmitButtonProps {
  isSubmitting: boolean;
  disabled?: boolean;
  children: React.ReactNode;
  submittingText: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: 'submit' | 'button';
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({
  isSubmitting,
  disabled = false,
  children,
  submittingText,
  className = '',
  onClick,
  type = 'submit',
}) => {
  const isDisabled = isSubmitting || disabled;
  
  return (
    <motion.button
      type={type}
      disabled={isDisabled}
      onClick={onClick}
      className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 ${
        isDisabled 
          ? 'opacity-50 cursor-not-allowed' 
          : 'hover:opacity-90'
      } ${className}`}
      whileHover={!isDisabled ? { scale: 1.02 } : undefined}
      whileTap={!isDisabled ? { scale: 0.98 } : undefined}
    >
      <AnimatePresence mode="wait">
        {isSubmitting ? (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-2"
          >
            <Loader2 className="w-5 h-5 animate-spin" />
            {submittingText}
          </motion.div>
        ) : (
          <motion.div
            key="submit"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-2"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
};