import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface FormSubmissionOptions {
  endpoint?: string;
  onSuccess?: () => void;
  onError?: (error: string) => void;
}

interface FormSubmissionState {
  isSubmitting: boolean;
  isSubmitted: boolean;
  submissionError: string | null;
  submitForm: (data: Record<string, any>) => Promise<void>;
  resetSubmission: () => void;
}

export const useFormSubmission = (options: FormSubmissionOptions = {}): FormSubmissionState => {
  const { language } = useLanguage();
  const { endpoint = '/api/apply', onSuccess, onError } = options;
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionError, setSubmissionError] = useState<string | null>(null);

  const submitForm = async (data: Record<string, any>) => {
    setIsSubmitting(true);
    setSubmissionError(null);
    
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSubmitted(true);
        onSuccess?.();
      } else {
        const errorData = await response.json();
        const errorMessage = errorData.message || (language === 'fa' 
          ? 'خطا در ارسال درخواست' 
          : 'Failed to submit application'
        );
        setSubmissionError(errorMessage);
        onError?.(errorMessage);
      }
    } catch (error) {
      console.error('Submission error:', error);
      const networkError = language === 'fa' 
        ? 'خطای شبکه. لطفا دوباره تلاش کنید.' 
        : 'Network error. Please try again.';
      setSubmissionError(networkError);
      onError?.(networkError);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetSubmission = () => {
    setIsSubmitted(false);
    setIsSubmitting(false);
    setSubmissionError(null);
  };

  return {
    isSubmitting,
    isSubmitted,
    submissionError,
    submitForm,
    resetSubmission,
  };
};