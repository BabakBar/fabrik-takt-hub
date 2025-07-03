/**
 * Email Service - Centralized email handling for FabrikTakt forms
 * Routes form submissions to appropriate email addresses with proper validation
 */

export interface EmailEndpoint {
  to: string;
  subject: string;
  type: 'support' | 'info' | 'pilot';
}

export interface FormSubmissionData {
  // Core fields
  name: string;
  company: string;
  email: string;
  phone?: string;
  challenge?: string;
  
  // Form metadata
  formType: 'pilot-modal' | 'pilot-cta' | 'contact-general' | 'contact-support';
  
  // Security fields
  honeypot?: string;
  timestamp: number;
  userAgent: string;
  
  // Additional context
  source?: string;
  referrer?: string;
}

export interface EmailServiceConfig {
  baseURL: string;
  timeout?: number;
  retryAttempts?: number;
  retryDelay?: number;
}

class EmailService {
  private config: EmailServiceConfig;
  private emailRoutes: Map<string, EmailEndpoint>;

  constructor(config: EmailServiceConfig) {
    this.config = {
      timeout: 30000,
      retryAttempts: 3,
      retryDelay: 1000,
      ...config
    };
    
    this.setupEmailRoutes();
  }

  private setupEmailRoutes() {
    this.emailRoutes = new Map([
      // Pilot applications go to info@fabriktakt.com
      ['pilot-modal', {
        to: 'info@fabriktakt.com',
        subject: 'New Pilot Program Application (Quick Signup)',
        type: 'pilot'
      }],
      ['pilot-cta', {
        to: 'info@fabriktakt.com', 
        subject: 'New Pilot Program Application (Detailed)',
        type: 'pilot'
      }],
      
      // General contact forms go to info@fabriktakt.com
      ['contact-general', {
        to: 'info@fabriktakt.com',
        subject: 'General Inquiry from Website',
        type: 'info'
      }],
      
      // Support requests go to support@fabriktakt.com
      ['contact-support', {
        to: 'support@fabriktakt.com',
        subject: 'Technical Support Request',
        type: 'support'
      }]
    ]);
  }

  /**
   * Submit form data with automatic email routing
   */
  async submitForm(data: FormSubmissionData): Promise<{
    success: boolean;
    submissionId?: string;
    message: string;
    estimatedResponse?: string;
  }> {
    // Add security and metadata fields
    const enrichedData = this.enrichFormData(data);
    
    // Validate data before submission
    this.validateFormData(enrichedData);
    
    // Get routing information
    const route = this.emailRoutes.get(data.formType);
    if (!route) {
      throw new Error(`Unknown form type: ${data.formType}`);
    }

    // Submit with retry logic
    return this.submitWithRetry(enrichedData, route);
  }

  private enrichFormData(data: FormSubmissionData): FormSubmissionData {
    return {
      ...data,
      timestamp: data.timestamp || Date.now(),
      userAgent: data.userAgent || navigator.userAgent,
      source: data.source || window.location.href,
      referrer: data.referrer || document.referrer,
      honeypot: data.honeypot || '' // Should always be empty
    };
  }

  private validateFormData(data: FormSubmissionData): void {
    // Required fields validation
    if (!data.name?.trim()) throw new Error('Name is required');
    if (!data.company?.trim()) throw new Error('Company is required');
    if (!data.email?.trim()) throw new Error('Email is required');
    
    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      throw new Error('Invalid email format');
    }

    // Honeypot validation (anti-spam)
    if (data.honeypot && data.honeypot.trim() !== '') {
      throw new Error('Spam detected');
    }

    // Timing validation (prevent bot submissions)
    const submissionTime = Date.now() - data.timestamp;
    if (submissionTime < 5000) { // Less than 5 seconds
      throw new Error('Submission too fast');
    }

    // Form-specific validations
    if (['pilot-cta', 'contact-support'].includes(data.formType)) {
      if (!data.challenge?.trim()) {
        throw new Error('Challenge description is required');
      }
      if (data.challenge.trim().length < 10) {
        throw new Error('Challenge description too short');
      }
    }
  }

  private async submitWithRetry(
    data: FormSubmissionData, 
    route: EmailEndpoint,
    attempt: number = 1
  ): Promise<{
    success: boolean;
    submissionId?: string;
    message: string;
    estimatedResponse?: string;
  }> {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), this.config.timeout);

      const response = await fetch(`${this.config.baseURL}/api/apply`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Email-Route': route.to,
          'X-Form-Type': data.formType
        },
        body: JSON.stringify({
          ...data,
          emailRoute: route
        }),
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `HTTP ${response.status}: ${response.statusText}`);
      }

      const result = await response.json();
      
      // Log successful submission
      this.logSubmission('success', data, route, result);
      
      return {
        success: true,
        submissionId: result.submissionId,
        message: result.message || 'Application received successfully',
        estimatedResponse: this.getEstimatedResponse(data.formType)
      };

    } catch (error) {
      this.logSubmission('error', data, route, { error: error.message, attempt });

      // Retry logic
      if (attempt < (this.config.retryAttempts || 3) && this.isRetryableError(error)) {
        await this.delay((this.config.retryDelay || 1000) * attempt);
        return this.submitWithRetry(data, route, attempt + 1);
      }

      // Final failure
      throw new Error(
        attempt > 1 
          ? `Failed after ${attempt} attempts: ${error.message}`
          : error.message
      );
    }
  }

  private isRetryableError(error: Error | unknown): boolean {
    // Retry on network errors, timeouts, and 5xx server errors
    if (error instanceof Error) {
      return (
        error.name === 'AbortError' ||
        error.message.includes('fetch') ||
        error.message.includes('500') ||
        error.message.includes('502') ||
        error.message.includes('503') ||
        error.message.includes('504')
      );
    }
    return false;
  }

  private getEstimatedResponse(formType: string): string {
    switch (formType) {
      case 'pilot-modal':
      case 'pilot-cta':
        return '24 hours';
      case 'contact-support':
        return '4-8 hours';
      case 'contact-general':
        return '1-2 business days';
      default:
        return '24-48 hours';
    }
  }

  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  private logSubmission(
    type: 'success' | 'error', 
    data: FormSubmissionData, 
    route: EmailEndpoint, 
    details: Record<string, unknown>
  ): void {
    const logData = {
      timestamp: new Date().toISOString(),
      type,
      formType: data.formType,
      emailRoute: route.to,
      company: data.company,
      userAgent: data.userAgent,
      details
    };

    if (type === 'error') {
      console.error('Email submission failed:', logData);
    } else {
      console.info('Email submitted successfully:', logData);
    }

    // In production, this could send to analytics service
    if (typeof window !== 'undefined') {
      const gtag = (window as { gtag?: (...args: unknown[]) => void }).gtag;
      if (gtag) {
        gtag('event', 'form_submission', {
          event_category: 'email',
          event_label: data.formType,
          custom_parameter_status: type
        });
      }
    }
  }

  /**
   * Get email route information for a form type
   */
  getEmailRoute(formType: string): EmailEndpoint | undefined {
    return this.emailRoutes.get(formType);
  }

  /**
   * Get all available email routes
   */
  getAllRoutes(): Map<string, EmailEndpoint> {
    return new Map(this.emailRoutes);
  }
}

// Create singleton instance
const emailService = new EmailService({
  baseURL: process.env.NODE_ENV === 'production' 
    ? 'https://api.fabriktakt.com' 
    : 'http://localhost:8000',
  timeout: 30000,
  retryAttempts: 3,
  retryDelay: 1000
});

export default emailService;
