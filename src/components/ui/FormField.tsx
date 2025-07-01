import React from 'react';
import { AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FormFieldProps {
  label: string;
  name: string;
  type?: 'text' | 'email' | 'tel' | 'textarea';
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  placeholder?: string;
  required?: boolean;
  error?: string;
  touched?: boolean;
  rows?: number;
  className?: string;
  darkMode?: boolean;
}

export const FormField: React.FC<FormFieldProps> = ({
  label,
  name,
  type = 'text',
  value,
  onChange,
  onBlur,
  placeholder,
  required = false,
  error,
  touched,
  rows,
  className = '',
  darkMode = false,
}) => {
  const hasError = error && touched;
  
  const baseInputClasses = `w-full p-3 border rounded-lg transition-all duration-200 focus:ring-2 focus:outline-none ${
    hasError 
      ? 'border-red-500 focus:border-red-500 focus:ring-red-200' 
      : darkMode
        ? 'border-white/20 focus:border-amber-500 bg-white/10 text-white placeholder-slate-400'
        : 'border-slate-200 focus:border-amber-500 focus:ring-amber-200'
  }`;

  const inputElement = type === 'textarea' ? (
    <textarea
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      placeholder={placeholder}
      required={required}
      rows={rows || 4}
      className={`${baseInputClasses} resize-none ${className}`}
    />
  ) : (
    <input
      id={name}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      placeholder={placeholder}
      required={required}
      className={`${baseInputClasses} ${className}`}
    />
  );

  return (
    <motion.div layout>
      <label 
        htmlFor={name} 
        className={`text-sm font-semibold mb-2 block ${
          darkMode ? 'text-slate-300' : 'text-slate-700'
        }`}
      >
        {label}
      </label>
      <motion.div
        animate={hasError ? { x: [-2, 2, -2, 0] } : {}}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {inputElement}
      </motion.div>
      <AnimatePresence>
        {hasError && (
          <motion.div
            initial={{ opacity: 0, y: -10, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -10, height: 0 }}
            transition={{ duration: 0.2 }}
            className={`flex items-center gap-2 mt-2 text-sm ${
              darkMode ? 'text-red-400' : 'text-red-500'
            }`}
            role="alert"
            aria-live="polite"
          >
            <AlertCircle className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
            <span>{error}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};