// @ts-ignore: No types for emailjs-browser
import emailjs from '@emailjs/browser';

export interface FormSubmissionData {
  name: string;
  company: string;
  email: string;
  phone?: string;
  message?: string;
  challenge?: string;
  formType: 'pilot-modal' | 'pilot-cta' | 'contact-general' | 'contact-support';
  honeypot?: string;
  timestamp: number;
  userAgent: string;
}

interface RateLimitData {
  count: number;
  firstSubmission: number;
}

class EmailService {
  private readonly publicKey: string;
  private readonly serviceId: string = 'service_mo6z6fw';
  private readonly userTemplate: string;

  constructor() {
    this.publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    this.userTemplate = import.meta.env.VITE_EMAILJS_USER_TEMPLATE;

    if (!this.publicKey) {
      throw new Error('EmailJS Public Key missing in environment variables');
    }
    if (!this.userTemplate) {
      throw new Error('EmailJS User Template ID missing in environment variables');
    }
  }

  // Rate limiting: 3 submissions per 5 minutes
  private checkRateLimit(): boolean {
    const RATE_LIMIT_KEY = 'fabriktakt_form_rate_limit';
    const WINDOW_MS = 5 * 60 * 1000; // 5 minutes
    const MAX_SUBMISSIONS = 3;

    const now = Date.now();
    const stored = localStorage.getItem(RATE_LIMIT_KEY);
    const data: RateLimitData = stored ? JSON.parse(stored) : { count: 0, firstSubmission: now };

    // Reset if window expired
    if (now - data.firstSubmission > WINDOW_MS) {
      data.count = 0;
      data.firstSubmission = now;
    }

    // Check limit
    if (data.count >= MAX_SUBMISSIONS) {
      const timeLeft = Math.ceil((WINDOW_MS - (now - data.firstSubmission)) / 1000 / 60);
      throw new Error(`Rate limit exceeded. Please wait ${timeLeft} minutes before submitting again.`);
    }

    // Update count
    data.count++;
    localStorage.setItem(RATE_LIMIT_KEY, JSON.stringify(data));
    return true;
  }

  // Analytics tracking
  private trackSubmission(formType: string, success: boolean): void {
    // Google Analytics 4 (if available)
    if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
      (window as any).gtag('event', 'form_submission', {
        event_category: 'contact',
        event_label: formType,
        success: success,
        custom_parameter_method: 'emailjs'
      });
    }

    // Console logging for development
    console.log(`📧 Form submission: ${formType}, Success: ${success}, Method: EmailJS`);
  }

  // Format form type for display
  private getFormTypeDisplay(formType: string): string {
    const typeMap = {
      'pilot-modal': 'Pilot Program (Quick Signup)',
      'pilot-cta': 'Pilot Program (Detailed Application)',
      'contact-general': 'General Inquiry',
      'contact-support': 'Technical Support Request'
    };
    return typeMap[formType] || formType;
  }

  // Main submission method
  async submitForm(data: FormSubmissionData): Promise<{
    success: boolean;
    submissionId?: string;
    message: string;
    estimatedResponse?: string;
  }> {
    try {
      // Security checks
      this.checkRateLimit();

      // Honeypot validation
      if (data.honeypot && data.honeypot.trim() !== '') {
        throw new Error('Spam detected');
      }

      // Timing validation (prevent bot submissions)
      const submissionTime = Date.now() - data.timestamp;
      if (submissionTime < 3000) { // Less than 3 seconds
        throw new Error('Submission too fast');
      }

      // Prepare email data (all variables needed by user template)
      const emailData = {
        to_email: data.email,        // Recipient email (where to send the auto-reply)
        user_name: data.name,
        user_email: data.email,      // Keep for backward compatibility
        company: data.company,
        message: data.message || data.challenge || '',
        form_type: this.getFormTypeDisplay(data.formType)
      };

      // Send user confirmation (auto-reply)
      console.log('📤 Sending user confirmation...');
      await emailjs.send(
        this.serviceId,
        this.userTemplate,
        emailData,
        { publicKey: this.publicKey }
      );

      // Track success
      this.trackSubmission(data.formType, true);

      // Generate submission ID
      const submissionId = `emailjs_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

      return {
        success: true,
        submissionId,
        message: 'Thank you for your submission! We will respond within 24 hours.',
        estimatedResponse: '24 hours'
      };

    } catch (error) {
      // Track failure
      this.trackSubmission(data.formType, false);

      console.error('❌ EmailJS submission failed:', error);
      
      const errorMessage = error instanceof Error ? error.message : 'Failed to send message. Please try again.';
      
      return {
        success: false,
        message: errorMessage
      };
    }
  }

  // Health check method
  async healthCheck(): Promise<boolean> {
    try {
      // Simple test to verify EmailJS configuration
      return !!(this.publicKey && this.serviceId && this.userTemplate);
    } catch {
      return false;
    }
  }
}

// Export singleton instance
const emailService = new EmailService();
export default emailService;
