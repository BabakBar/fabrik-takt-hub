import { useState, useCallback } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface ValidationRule {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  custom?: (value: string) => string | null;
}

interface ValidationRules {
  [fieldName: string]: ValidationRule;
}

interface FormValidationState {
  errors: Record<string, string>;
  touched: Record<string, boolean>;
  isValid: boolean;
  validateField: (name: string, value: string) => string;
  validateForm: (formData: Record<string, unknown>) => boolean;
  handleInputBlur: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void
  ) => void;
  setAllTouched: () => void;
  resetValidation: () => void;
}

export const useFormValidation = (
  validationRules: ValidationRules,
  formData: Record<string, unknown>
): FormValidationState => {
  const { language } = useLanguage();
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const getErrorMessage = useCallback((fieldName: string, rule: string, value?: number): string => {
    const messages = {
      fa: {
        required: {
          name: 'نام الزامی است',
          company: 'نام شرکت الزامی است',
          email: 'ایمیل الزامی است',
          challenge: 'توضیح چالش الزامی است',
          default: 'این فیلد الزامی است'
        },
        minLength: {
          name: 'نام باید حداقل 2 کاراکتر باشد',
          challenge: 'توضیح باید حداقل 10 کاراکتر باشد',
          default: `حداقل ${value} کاراکتر مورد نیاز است`
        },
        pattern: {
          email: 'ایمیل نامعتبر است',
          default: 'فرمت نامعتبر است'
        }
      },
      en: {
        required: {
          name: 'Name is required',
          company: 'Company name is required',
          email: 'Email is required',
          challenge: 'Challenge description is required',
          default: 'This field is required'
        },
        minLength: {
          name: 'Name must be at least 2 characters',
          challenge: 'Description must be at least 10 characters',
          default: `Minimum ${value} characters required`
        },
        pattern: {
          email: 'Invalid email address',
          default: 'Invalid format'
        }
      }
    };

    const lang = language as 'fa' | 'en';
    const ruleMessages = messages[lang][rule as keyof typeof messages.fa] as Record<string, string>;
    return ruleMessages[fieldName] || ruleMessages.default;
  }, [language]);

  const validateField = useCallback((name: string, value: string): string => {
    const rule = validationRules[name];
    if (!rule) return '';

    // Required validation
    if (rule.required && !value.trim()) {
      return getErrorMessage(name, 'required');
    }

    // Skip other validations if field is empty and not required
    if (!value.trim()) return '';

    // Min length validation
    if (rule.minLength && value.trim().length < rule.minLength) {
      return getErrorMessage(name, 'minLength', rule.minLength);
    }

    // Max length validation
    if (rule.maxLength && value.length > rule.maxLength) {
      return getErrorMessage(name, 'maxLength', rule.maxLength);
    }

    // Pattern validation
    if (rule.pattern && !rule.pattern.test(value)) {
      return getErrorMessage(name, 'pattern');
    }

    // Custom validation
    if (rule.custom) {
      const customError = rule.custom(value);
      if (customError) return customError;
    }

    return '';
  }, [validationRules, getErrorMessage]);

  const validateForm = useCallback((data: Record<string, unknown>): boolean => {
    const newErrors: Record<string, string> = {};
    
    Object.keys(validationRules).forEach(key => {
      const error = validateField(key, data[key] || '');
      if (error) newErrors[key] = error;
    });
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [validateField, validationRules]);

  const handleInputBlur = useCallback((e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  }, [validateField]);

  const handleInputChange = useCallback((
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void
  ) => {
    const { name, value } = e.target;
    onChange(e);
    
    // Real-time validation for touched fields
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  }, [touched, validateField]);

  const setAllTouched = useCallback(() => {
    const allTouched = Object.keys(validationRules).reduce((acc, key) => {
      acc[key] = true;
      return acc;
    }, {} as Record<string, boolean>);
    setTouched(allTouched);
  }, [validationRules]);

  const resetValidation = useCallback(() => {
    setErrors({});
    setTouched({});
  }, []);

  const isValid = Object.keys(errors).every(key => !errors[key]);

  return {
    errors,
    touched,
    isValid,
    validateField,
    validateForm,
    handleInputBlur,
    handleInputChange,
    setAllTouched,
    resetValidation,
  };
};