import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../../contexts/LanguageContext';
import { GlassCard } from '../ui/GlassCard';
import { useRevealOnScroll } from '../../hooks/useAnimations';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import emailService from '../../services/emailService';

const ContactSection = () => {
  const { t } = useLanguage();
  const { ref, isInView } = useRevealOnScroll();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formTimestamp, setFormTimestamp] = useState(Date.now());
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    honeypot: '', // Spam protection
  });

  // Reset timestamp when form is shown
  useEffect(() => {
    if (!isSubmitted) {
      setFormTimestamp(Date.now());
    }
  }, [isSubmitted]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const result = await emailService.submitForm({
        name: formData.name,
        email: formData.email,
        company: 'Website Contact', // Default for general contact
        message: formData.message,
        formType: 'contact-general',
        honeypot: formData.honeypot,
        timestamp: formTimestamp,
        userAgent: navigator.userAgent,
      });

      if (result.success) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '', honeypot: '' });
      } else {
        setError(result.message);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to send message');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="py-24 bg-bg-secondary"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-text-primary mb-4">
              {t('contact.heading')}
            </h2>
            <p className="text-xl text-text-secondary">
              {t('contact.description')}
            </p>
          </div>

          <GlassCard className="p-8">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <CheckCircle className="w-16 h-16 text-[--pulse-primary] mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-text-primary mb-2">
                  {t('contact.successHeading')}
                </h3>
                <p className="text-text-secondary">
                  {t('contact.successMessage')}
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot field - hidden from users */}
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={handleChange}
                  className="absolute -left-[9999px] opacity-0"
                  tabIndex={-1}
                  autoComplete="off"
                />

                {error && (
                  <div className="flex items-center gap-2 p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    {error}
                  </div>
                )}

                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-text-primary mb-2"
                  >
                    {t('contact.nameLabel')}
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t('contact.namePlaceholder')}
                    className="bg-bg-primary/50 border-white/10 focus:border-[--pulse-primary]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-text-primary mb-2"
                  >
                    {t('contact.emailLabel')}
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    className="bg-bg-primary/50 border-white/10 focus:border-[--pulse-primary]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-text-primary mb-2"
                  >
                    {t('contact.messageLabel')}
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t('contact.messagePlaceholder')}
                    className="bg-bg-primary/50 border-white/10 focus:border-[--pulse-primary] resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[--pulse-primary] hover:bg-[--pulse-secondary] text-[--bg-primary] font-semibold py-3 transition-all hover:shadow-[0_0_30px_var(--pulse-glow)]"
                >
                  {isSubmitting ? (
                    t('contact.submittingButton')
                  ) : (
                    <>
                      {t('contact.submitButton')}
                      <Send className="ms-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </GlassCard>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactSection;
