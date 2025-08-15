import { useState, useEffect } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import SEO from '../components/SEO';
import emailService, { type FormSubmissionData } from '../services/emailService';

const ContactPage = () => {
  const [emailCopied, setEmailCopied] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [formStartTime] = useState(Date.now());
  
  // Form data
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  });
  
  // Email validation
  const [emailValid, setEmailValid] = useState<boolean | null>(null);
  const [emailTouched, setEmailTouched] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('info@fabriktakt.com');
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  // Real-time email validation
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    setFormData(prev => ({ ...prev, email }));
    setEmailTouched(true);
    
    if (email.length > 0) {
      setEmailValid(validateEmail(email));
    } else {
      setEmailValid(null);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('sending');
    
    try {
      const submissionData: FormSubmissionData = {
        name: formData.name,
        company: formData.company,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        formType: 'contact-general',
        timestamp: formStartTime,
        userAgent: navigator.userAgent
      };

      const result = await emailService.submitForm(submissionData);
      
      if (result.success) {
        setFormStatus('success');
        // Reset form after 4 seconds
        setTimeout(() => {
          setFormStatus('idle');
          setFormData({ name: '', company: '', email: '', phone: '', message: '' });
          setEmailValid(null);
          setEmailTouched(false);
        }, 4000);
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setFormStatus('error');
      setTimeout(() => setFormStatus('idle'), 3000);
    }
  };
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Contact — FabrikTakt"
        description="Get in touch for AI/ML, Computer Vision, Data, Cloud/DevOps, ERP integration, or custom applications."
        canonical="https://fabriktakt.com/contact"
      />
      <Header />
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-left max-w-4xl mb-12">
            <div className="text-xs font-mono uppercase tracking-widest text-amber-400/60 mb-3">{"// Get In Touch"}</div>
            <h1 className="text-3xl md:text-7xl lg:text-8xl font-black leading-none mb-6 font-orbitron" style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #e5e5e5 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: `
                0 1px 0 rgba(255,255,255,0.1),
                0 4px 8px rgba(0,0,0,0.3),
                0 8px 16px rgba(0,0,0,0.2),
                0 0 40px rgba(255,255,255,0.05)
              `
            }}>
              Let's Build<br />
              <span style={{
                background: 'linear-gradient(135deg, #ffc107 0%, #ffb300 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: `
                  0 1px 0 rgba(255,193,7,0.1),
                  0 4px 8px rgba(0,0,0,0.3),
                  0 8px 16px rgba(0,0,0,0.2),
                  0 0 40px rgba(255,193,7,0.05)
                `
              }}>Together</span>
            </h1>
          </div>
          
          <div className="text-center mb-8">
            <p className="text-xl md:text-xl text-gray-300 font-medium max-w-3xl mx-auto">
              Ready to transform your operations?
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {/* Direct Email CTA */}
            <div className="bg-slate-800/40 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/10 text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 font-orbitron">
                Skip the form. Let's talk directly.
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Send us an email with your ideas. We'll respond within 24 hours with a clear path forward.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a 
                  href="mailto:info@fabriktakt.com?subject=Project Discussion&body=Hi FabrikTakt team,%0D%0A%0D%0AI'd like to discuss a project:%0D%0A%0D%0ACompany: %0D%0AIndustry: %0D%0AChallenge: %0D%0A%0D%0ABest regards"
                  className="inline-flex items-center gap-3 bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold px-8 py-4 rounded-xl text-lg transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-amber-500/25"
                >
                  <span>info@fabriktakt.com</span>
                  <span className="text-slate-700">→</span>
                </a>
                <button 
                  type="button"
                  onClick={handleCopyEmail}
                  className={`inline-flex items-center gap-3 font-medium px-6 py-4 rounded-xl text-lg transition-all border ${
                    emailCopied 
                      ? 'bg-green-600 border-green-500 text-white' 
                      : 'bg-slate-700 hover:bg-slate-600 text-white border-white/10'
                  }`}
                >
                  <span>{emailCopied ? 'Email Copied!' : 'Copy Email'}</span>
                  <span className="text-gray-400">{emailCopied ? '✓' : '📋'}</span>
                </button>
              </div>
            </div>

            {/* Alternative: Traditional Form */}
            <div className="text-center mb-6">
              <p className="text-sm text-gray-400 font-mono">
                {"// Or use the traditional form below"}
              </p>
            </div>
            
            <div className="bg-slate-800/20 backdrop-blur-md rounded-2xl p-8 border border-white/5">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-3 font-orbitron">Traditional Contact Form</h3>
                <p className="text-gray-300">Prefer forms? Fill this out and we'll get back to you.</p>
              </div>
              
              <form onSubmit={handleFormSubmit} className="space-y-6 max-w-2xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Full Name *</label>
                    <input 
                      id="name"
                      name="name"
                      type="text" 
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      className="w-full px-4 py-3 bg-slate-900/50 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50 transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">Company *</label>
                    <input 
                      id="company"
                      name="company"
                      type="text" 
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Company name"
                      className="w-full px-4 py-3 bg-slate-900/50 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50 transition-all"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email *</label>
                    <input 
                      id="email"
                      name="email"
                      type="email" 
                      value={formData.email}
                      onChange={handleEmailChange}
                      placeholder="your@company.com"
                      className={`w-full px-4 py-3 bg-slate-900/50 border rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all ${
                        emailTouched 
                          ? emailValid 
                            ? 'border-green-500/50 focus:ring-green-500/50 focus:border-green-500/50' 
                            : 'border-red-500/50 focus:ring-red-500/50 focus:border-red-500/50'
                          : 'border-white/10 focus:ring-amber-500/50 focus:border-amber-500/50'
                      }`}
                      required
                    />
                    {emailTouched && (
                      <div className="absolute right-3 top-10 text-sm">
                        {emailValid ? (
                          <span className="text-green-400" title="Valid email">✓</span>
                        ) : (
                          <span className="text-red-400" title="Invalid email format">✗</span>
                        )}
                      </div>
                    )}
                    {emailTouched && !emailValid && formData.email.length > 0 && (
                      <p className="text-red-400 text-xs mt-1">Please enter a valid email address</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">Phone</label>
                    <input 
                      id="phone"
                      name="phone"
                      type="tel" 
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+1 (555) 123-4567"
                      className="w-full px-4 py-3 bg-slate-900/50 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50 transition-all"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Your Message *</label>
                  <textarea 
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your challenge, industry, and what you're looking to achieve..."
                    className="w-full px-4 py-3 bg-slate-900/50 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50 transition-all resize-none"
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  disabled={formStatus === 'sending'}
                  className={`w-full font-bold py-4 rounded-xl text-lg transition-all transform ${
                    formStatus === 'success'
                      ? 'bg-green-600 text-white'
                      : formStatus === 'sending'
                      ? 'bg-gray-600 text-gray-300 cursor-not-allowed'
                      : 'bg-amber-500 hover:bg-amber-600 text-slate-900 hover:scale-[1.02] hover:shadow-lg hover:shadow-amber-500/25'
                  }`}
                >
                  {formStatus === 'sending' && 'Sending...'}
                  {formStatus === 'success' && 'Message Sent! ✓'}
                  {formStatus === 'idle' && 'Send Message →'}
                  {formStatus === 'error' && 'Try Again'}
                </button>
                
                {formStatus === 'success' && (
                  <div className="text-center mt-4">
                    <p className="text-green-400 font-medium">
                      Thanks! We'll get back to you within 24 hours.
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
