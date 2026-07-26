import emailjs from '@emailjs/browser';

type ContactSubmission = {
  name: string;
  email: string;
  company: string;
  message: string;
  website: string;
  startedAt: number;
  locale: 'de' | 'en' | 'fa';
};

export type SubmissionErrorCode = 'configuration' | 'rate-limit' | 'spam' | 'delivery';

type SubmissionResult =
  | { success: true; submissionId: string }
  | { success: false; code: SubmissionErrorCode };

type RateLimitRecord = {
  successfulSubmissions: number;
  windowStartedAt: number;
};

const RATE_LIMIT_KEY = 'fabriktakt_contact_rate_limit';
const RATE_LIMIT_WINDOW_MS = 5 * 60 * 1000;
const RATE_LIMIT_MAX = 3;
const MIN_COMPLETION_MS = 2_000;

const readRateLimit = (): RateLimitRecord => {
  const fallback = { successfulSubmissions: 0, windowStartedAt: Date.now() };

  try {
    const stored = localStorage.getItem(RATE_LIMIT_KEY);
    if (!stored) return fallback;

    const parsed = JSON.parse(stored) as Partial<RateLimitRecord>;
    if (
      typeof parsed.successfulSubmissions !== 'number' ||
      typeof parsed.windowStartedAt !== 'number'
    ) {
      return fallback;
    }

    if (Date.now() - parsed.windowStartedAt >= RATE_LIMIT_WINDOW_MS) {
      return fallback;
    }

    return {
      successfulSubmissions: parsed.successfulSubmissions,
      windowStartedAt: parsed.windowStartedAt,
    };
  } catch {
    return fallback;
  }
};

const recordSuccessfulSubmission = () => {
  const current = readRateLimit();
  localStorage.setItem(
    RATE_LIMIT_KEY,
    JSON.stringify({
      successfulSubmissions: current.successfulSubmissions + 1,
      windowStartedAt: current.windowStartedAt,
    }),
  );
};

const submitContact = async (data: ContactSubmission): Promise<SubmissionResult> => {
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID ?? 'service_mo6z6fw';
  const adminTemplate = import.meta.env.VITE_EMAILJS_ADMIN_TEMPLATE;
  const userTemplate = import.meta.env.VITE_EMAILJS_USER_TEMPLATE;

  if (!publicKey || !serviceId || !adminTemplate) {
    return { success: false, code: 'configuration' };
  }

  if (data.website.trim() || Date.now() - data.startedAt < MIN_COMPLETION_MS) {
    return { success: false, code: 'spam' };
  }

  if (readRateLimit().successfulSubmissions >= RATE_LIMIT_MAX) {
    return { success: false, code: 'rate-limit' };
  }

  const templateData = {
    to_email: 'info@fabriktakt.com',
    reply_to: data.email,
    user_name: data.name,
    user_email: data.email,
    company: data.company || 'Not provided',
    message: data.message,
    form_type: 'Website project inquiry',
    locale: data.locale,
    submitted_at: new Intl.DateTimeFormat('en-GB', {
      dateStyle: 'medium',
      timeStyle: 'short',
      timeZone: 'Europe/Berlin',
    }).format(new Date()),
  };

  try {
    await emailjs.send(serviceId, adminTemplate, templateData, { publicKey });
    recordSuccessfulSubmission();

    if (userTemplate) {
      void emailjs
        .send(
          serviceId,
          userTemplate,
          {
            to_email: data.email,
            user_name: data.name,
            company: data.company || 'Not provided',
            message: data.message,
            form_type: 'Website project inquiry',
          },
          { publicKey },
        )
        .catch(() => undefined);
    }

    return {
      success: true,
      submissionId: crypto.randomUUID(),
    };
  } catch {
    return { success: false, code: 'delivery' };
  }
};

export default submitContact;
