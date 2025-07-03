import { useState, useId } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FormInput } from "@/components/ui/FormInput";
import { Button } from "@/components/ui/button";
import { Mail, Send, CheckCircle, Loader2, AlertCircle } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import emailService, { type FormSubmissionData } from '../../services/emailService';

interface ContactFormProps {
  className?: string;
  variant?: 'general' | 'support';
  title?: string;
  description?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  className = '',
  variant = 'general',
  title,
  description
}) => {
  const { language } = useLanguage();
  const messageId = useId();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submissionError, setSubmissionError] = useState<string | null>(null);
  const [honeypot, setHoneypot] = useState('');
  const [formStartTime] = useState(Date.now());

  // Validation function
  const validateField = (name: string, value: string) => {
    switch (name) {
      case 'name':
        if (!value.trim()) return language === 'fa' ? 'نام الزامی است' : 'Name is required';
        if (value.trim().length < 2) return language === 'fa' ? 'نام باید حداقل 2 کاراکتر باشد' : 'Name must be at least 2 characters';
        return '';
      case 'company':
        if (!value.trim()) return language === 'fa' ? 'نام شرکت الزامی است' : 'Company name is required';
        return '';
      case 'email': {
        if (!value.trim()) return language === 'fa' ? 'ایمیل الزامی است' : 'Email is required';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) return language === 'fa' ? 'ایمیل نامعتبر است' : 'Invalid email address';
        return '';
      }
      case 'message':
        if (!value.trim()) return language === 'fa' ? 'پیام الزامی است' : 'Message is required';
        if (value.trim().length < 10) return language === 'fa' ? 'پیام باید حداقل 10 کاراکتر باشد' : 'Message must be at least 10 characters';
        return '';
      default:
        return '';
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    const requiredFields = ['name', 'company', 'email', 'message'];
    requiredFields.forEach(key => {
      const error = validateField(key, formData[key as keyof typeof formData]);
      if (error) newErrors[key] = error;
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Real-time validation
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({
        ...prev,
        [name]: error
      }));
    }
  };

  const handleInputBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mark all required fields as touched
    setTouched({ name: true, company: true, email: true, message: true });
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmissionError(null);
    
    try {
      const submissionData: FormSubmissionData = {
        ...formData,
        challenge: formData.message, // Map message to challenge field for backend compatibility
        formType: variant === 'support' ? 'contact-support' : 'contact-general',
        honeypot,
        timestamp: formStartTime,
        userAgent: navigator.userAgent
      };

      const result = await emailService.submitForm(submissionData);
      
      if (result.success) {
        setIsSubmitted(true);
      } else {
        setSubmissionError(result.message || (language === 'fa' ? 'خطا در ارسال پیام' : 'Failed to send message'));
      }
    } catch (error) {
      console.error('Contact form submission error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      setSubmissionError(language === 'fa' ? 'خطای شبکه. لطفا دوباره تلاش کنید.' : `Network error: ${errorMessage}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setIsSubmitting(false);
    setFormData({ name: '', company: '', email: '', phone: '', message: '' });
    setErrors({});
    setTouched({});
    setSubmissionError(null);
  };

  const getDefaultTitle = () => {
    if (variant === 'support') {
      return language === 'fa' ? 'پشتیبانی فنی' : 'Technical Support';
    }
    return language === 'fa' ? 'تماس با ما' : 'Contact Us';
  };

  const getDefaultDescription = () => {
    if (variant === 'support') {
      return language === 'fa' 
        ? 'مشکل فنی دارید؟ تیم پشتیبانی ما آماده کمک است.'
        : 'Having technical issues? Our support team is ready to help.';
    }
    return language === 'fa'
      ? 'سوال یا پیشنهادی دارید؟ با ما در تماس باشید.'
      : 'Have a question or suggestion? Get in touch with us.';
  };

  if (isSubmitted) {
    return (
      <motion.div 
        className={`text-center py-12 ${className}`}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <motion.div 
          className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 500 }}
        >
          <CheckCircle className="w-12 h-12 text-green-600" />
        </motion.div>
        
        <motion.h3 
          className="text-2xl font-bold text-slate-900 mb-3"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {language === 'fa' ? 'پیام شما ارسال شد!' : 'Message Sent Successfully!'}
        </motion.h3>
        
        <motion.p 
          className="text-slate-600 mb-8 text-lg"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {variant === 'support' 
            ? (language === 'fa' 
                ? 'تیم پشتیبانی ما ظرف 4-8 ساعت پاسخ خواهد داد'
                : 'Our support team will respond within 4-8 hours'
              )
            : (language === 'fa' 
                ? 'ظرف 1-2 روز کاری با شما تماس می‌گیریم'
                : 'We\'ll get back to you within 1-2 business days'
              )
          }
        </motion.p>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Button 
            onClick={resetForm} 
            className="bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-xl"
          >
            {language === 'fa' ? 'ارسال پیام جدید' : 'Send Another Message'}
          </Button>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <div className={`max-w-2xl mx-auto ${className}`}>
      {/* Header */}
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Mail className="w-8 h-8 text-blue-600" />
        </div>
        <h2 className="text-3xl font-bold text-slate-900 mb-3">
          {title || getDefaultTitle()}
        </h2>
        <p className="text-lg text-slate-600">
          {description || getDefaultDescription()}
        </p>
      </div>

      {/* Form */}
      <motion.form 
        onSubmit={handleSubmit} 
        className="space-y-6"
        layout
      >
        {/* Honeypot field for spam prevention */}
        <input
          type="text"
          name="website"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
          style={{ display: 'none' }}
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />

        <div className="grid md:grid-cols-2 gap-6">
          <FormInput
            label={language === 'fa' ? 'نام *' : 'Full Name *'}
            name="name"
            type="text"
            value={formData.name}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            placeholder={language === 'fa' ? 'نام شما' : 'Your name'}
            required
            error={errors.name}
            touched={touched.name}
          />

          <FormInput
            label={language === 'fa' ? 'شرکت *' : 'Company *'}
            name="company"
            type="text"
            value={formData.company}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            placeholder={language === 'fa' ? 'نام شرکت' : 'Company name'}
            required
            error={errors.company}
            touched={touched.company}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <FormInput
            label={language === 'fa' ? 'ایمیل *' : 'Email *'}
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            placeholder={language === 'fa' ? 'ایمیل شما' : 'your@company.com'}
            required
            error={errors.email}
            touched={touched.email}
          />

          <FormInput
            label={language === 'fa' ? 'تلفن' : 'Phone'}
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            placeholder={language === 'fa' ? '09xxxxxxxxx' : '+1 (555) 123-4567'}
            error={errors.phone}
            touched={touched.phone}
          />
        </div>

        <div>
          <label htmlFor={messageId} className="block text-sm font-semibold text-slate-700 mb-2">
            {variant === 'support' 
              ? (language === 'fa' ? 'توضیح مشکل *' : 'Describe Your Issue *')
              : (language === 'fa' ? 'پیام شما *' : 'Your Message *')
            }
          </label>
          <motion.div
            animate={errors.message && touched.message ? { x: [-2, 2, -2, 0] } : {}}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <textarea
              id={messageId}
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              rows={5}
              className={`w-full p-4 border-2 rounded-xl transition-all duration-200 focus:ring-2 focus:outline-none resize-none ${
                errors.message && touched.message
                  ? 'border-red-500 focus:border-red-500 focus:ring-red-200' 
                  : 'border-slate-200 focus:border-blue-500 focus:ring-blue-200'
              }`}
              placeholder={
                variant === 'support'
                  ? (language === 'fa' 
                      ? 'لطفا مشکل خود را به تفصیل شرح دهید...'
                      : 'Please describe your technical issue in detail...'
                    )
                  : (language === 'fa' 
                      ? 'پیام خود را اینجا بنویسید...'
                      : 'Write your message here...'
                    )
              }
              required
            />
          </motion.div>
          <AnimatePresence>
            {errors.message && touched.message && (
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
                <span className="text-sm text-red-500">{errors.message}</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {submissionError && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-sm text-red-500"
            role="alert"
          >
            <AlertCircle className="w-4 h-4 flex-shrink-0" />
            <span>{submissionError}</span>
          </motion.div>
        )}

        <motion.div className="pt-4">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white py-4 text-lg font-semibold rounded-xl"
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
                  {language === 'fa' ? 'در حال ارسال...' : 'Sending...'}
                </motion.div>
              ) : (
                <motion.div
                  key="submit"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  {language === 'fa' ? 'ارسال پیام' : 'Send Message'}
                </motion.div>
              )}
            </AnimatePresence>
          </Button>
        </motion.div>
      </motion.form>
    </div>
  );
};
