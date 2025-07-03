import { motion, AnimatePresence } from 'motion/react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AlertCircle } from 'lucide-react';

interface FormInputProps {
  label: string;
  name: string;
  type?: 'text' | 'email' | 'tel';
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  error?: string;
  touched?: boolean;
  className?: string;
}

export const FormInput: React.FC<FormInputProps> = ({
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
  className = ''
}) => {
  const hasError = error && touched;
  
  return (
    <motion.div layout className={className}>
      <Label htmlFor={name} className="text-sm font-semibold text-slate-700 mb-2 block">
        {label}
      </Label>
      <motion.div
        animate={hasError ? { x: [-2, 2, -2, 0] } : {}}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <Input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          required={required}
          className={`border-2 py-3 text-lg rounded-xl transition-all duration-200 focus:ring-2 focus:outline-none ${
            hasError 
              ? 'border-red-500 focus:border-red-500 focus:ring-red-200' 
              : 'border-slate-200 focus:border-amber-500 focus:ring-amber-200'
          }`}
        />
      </motion.div>
      <AnimatePresence>
        {hasError && (
          <motion.div
            initial={{ opacity: 0, y: -10, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -10, height: 0 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-2 mt-2"
            role="alert"
            aria-live="polite"
          >
            <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0" aria-hidden="true" />
            <span className="text-sm text-red-500">{error}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
