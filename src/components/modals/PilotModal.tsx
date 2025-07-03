import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FormInput } from "@/components/ui/FormInput";
import { Rocket, CheckCircle, Clock, Shield, Loader2, AlertCircle } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import emailService, { type FormSubmissionData } from '../../services/emailService';

interface PilotModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PilotModal: React.FC<PilotModalProps> = ({ isOpen, onClose }) => {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: ''
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
      default:
        return '';
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key as keyof typeof formData]);
      if (error) newErrors[key] = error;
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

  const handleInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mark all fields as touched
    setTouched({ name: true, company: true, email: true });
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmissionError(null);
    
    try {
      const submissionData: FormSubmissionData = {
        ...formData,
        formType: 'pilot-modal',
        honeypot,
        timestamp: formStartTime,
        userAgent: navigator.userAgent
      };

      const result = await emailService.submitForm(submissionData);
      
      if (result.success) {
        setIsSubmitted(true);
      } else {
        setSubmissionError(result.message || (language === 'fa' ? 'خطا در ارسال درخواست' : 'Failed to submit application'));
      }
    } catch (error) {
      console.error('Submission error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      setSubmissionError(language === 'fa' ? 'خطای شبکه. لطفا دوباره تلاش کنید.' : `Network error: ${errorMessage}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetModal = () => {
    setIsSubmitted(false);
    setIsSubmitting(false);
    setFormData({ name: '', company: '', email: '' });
    setErrors({});
    setTouched({});
    onClose();
  };

  if (isSubmitted) {
    return (
      <Dialog open={isOpen} onOpenChange={resetModal}>
        <DialogContent className="max-w-md bg-white border-2 border-green-200 shadow-2xl rounded-xl">
          <motion.div 
            className="text-center py-8"
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
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.4, type: "spring", stiffness: 300 }}
              >
                <CheckCircle className="w-12 h-12 text-green-600" />
              </motion.div>
            </motion.div>
            
            <motion.h3 
              className="text-2xl font-bold text-slate-900 mb-3"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {language === 'fa' ? 'درخواست شما ثبت شد!' : 'Application Received!'}
            </motion.h3>
            
            <motion.p 
              className="text-slate-600 mb-8 text-lg"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {language === 'fa' 
                ? 'تیم ما ظرف 24 ساعت با شما تماس خواهد گرفت'
                : 'Our team will contact you within 24 hours to get started'
              }
            </motion.p>
            
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Button onClick={resetModal} className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl">
                {language === 'fa' ? 'بستن' : 'Close'}
              </Button>
            </motion.div>
          </motion.div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-xl bg-white border-2 border-amber-200 shadow-2xl rounded-xl">
        <DialogHeader className="pb-4">
          <DialogTitle className="flex items-center gap-3 text-2xl font-bold text-slate-900">
            <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center shadow-lg">
              <Rocket className="w-6 h-6 text-white" />
            </div>
            {language === 'fa' ? 'عضویت در برنامه آزمایشی' : 'Join Pilot Program'}
          </DialogTitle>
          <DialogDescription className="text-lg text-amber-700 font-semibold pt-2">
            {language === 'fa'
              ? 'فرصت محدود - تنها 20 جا باقی مانده است'
              : 'Limited opportunity - Only 20 spots remaining'
            }
          </DialogDescription>
        </DialogHeader>

        {/* Enhanced Pilot Benefits */}
        <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-6 rounded-xl mb-6 border border-slate-200">
          <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2 text-lg">
            <Shield className="w-5 h-5 text-green-600" />
            {language === 'fa' ? 'مزایای برنامه آزمایشی:' : 'Pilot Program Benefits:'}
          </h4>
          <div className="grid grid-cols-1 gap-3">
            <div className="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
              <span className="text-slate-800 font-medium">{language === 'fa' ? '3 ماه دسترسی رایگان کامل' : '3-month free full access'}</span>
            </div>
            <div className="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
              <span className="text-slate-800 font-medium">{language === 'fa' ? 'کاهش 20% زمان توقف' : 'Reduce downtime by 20%'}</span>
            </div>
            <div className="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
              <span className="text-slate-800 font-medium">{language === 'fa' ? 'پشتیبانی اختصاصی و آموزش تیم' : 'Dedicated support & team training'}</span>
            </div>
            <div className="flex items-center gap-3 bg-amber-50 p-3 rounded-xl border border-amber-200">
              <Clock className="w-5 h-5 text-amber-600 flex-shrink-0" />
              <span className="text-amber-800 font-medium">{language === 'fa' ? 'راه‌اندازی در کمتر از 1 هفته' : 'Setup in under 1 week'}</span>
            </div>
          </div>
        </div>

        <motion.form 
          onSubmit={handleSubmit} 
          className="space-y-5"
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

          <FormInput
            label={language === 'fa' ? 'ایمیل *' : 'Email *'}
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            placeholder={language === 'fa' ? 'ایمیل شما' : 'Your email'}
            required
            error={errors.email}
            touched={touched.email}
          />

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

          <motion.div 
            className="flex gap-3 pt-4"
            layout
          >
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              disabled={isSubmitting}
              className="flex-1 py-3 text-lg border-2 rounded-xl"
            >
              {language === 'fa' ? 'لغو' : 'Cancel'}
            </Button>
            <motion.div className="flex-1">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-amber-500 hover:bg-amber-600 disabled:bg-amber-300 text-white py-3 text-lg font-semibold rounded-xl"
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
                      {language === 'fa' ? 'در حال ارسال...' : 'Submitting...'}
                    </motion.div>
                  ) : (
                    <motion.span
                      key="submit"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      {language === 'fa' ? 'ارسال درخواست' : 'Apply Now'}
                    </motion.span>
                  )}
                </AnimatePresence>
              </Button>
            </motion.div>
          </motion.div>
        </motion.form>
      </DialogContent>
    </Dialog>
  );
};

export default PilotModal;
