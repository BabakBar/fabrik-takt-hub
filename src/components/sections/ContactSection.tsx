import { useState, type FormEvent } from 'react';
import { AlertCircle, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from '@/router';
import { localizedPath, useLanguage } from '@/contexts/LanguageContext';
import submitContact, { type SubmissionErrorCode } from '@/services/emailService';

type FormStatus =
  | { state: 'idle' }
  | { state: 'submitting' }
  | { state: 'success' }
  | { state: 'error'; code: SubmissionErrorCode };

export default function ContactSection() {
  const { language, copy } = useLanguage();
  const formCopy = copy.contact.form;
  const [status, setStatus] = useState<FormStatus>({ state: 'idle' });
  const [startedAt, setStartedAt] = useState(() => Date.now());

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.reportValidity()) return;

    const formData = new FormData(form);
    setStatus({ state: 'submitting' });

    const result = await submitContact({
      name: String(formData.get('name') ?? '').trim(),
      email: String(formData.get('email') ?? '').trim(),
      company: String(formData.get('company') ?? '').trim(),
      message: String(formData.get('message') ?? '').trim(),
      website: String(formData.get('website') ?? ''),
      startedAt,
      locale: language,
    });

    if (result.success) {
      form.reset();
      setStartedAt(Date.now());
      setStatus({ state: 'success' });
      return;
    }

    setStatus({ state: 'error', code: result.code });
  };

  const errorMessage =
    status.state === 'error'
      ? status.code === 'rate-limit'
        ? formCopy.rateLimit
        : status.code === 'configuration'
          ? formCopy.configuration
          : status.code === 'spam'
            ? formCopy.spam
            : formCopy.retry
      : null;

  return (
    <div className="contact-form-panel">
      {status.state === 'success' ? (
        <div className="form-success" role="status">
          <CheckCircle2 aria-hidden="true" />
          <h2>{formCopy.successTitle}</h2>
          <p>{formCopy.successBody}</p>
          <button type="button" className="text-link" onClick={() => setStatus({ state: 'idle' })}>
            {copy.contact.title}
            <ArrowRight aria-hidden="true" />
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="honeypot" aria-hidden="true">
            <label htmlFor="website">Website</label>
            <input
              id="website"
              name="website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          {errorMessage && (
            <div className="form-error" role="alert">
              <AlertCircle aria-hidden="true" />
              <p>{errorMessage}</p>
            </div>
          )}

          <div className="form-grid">
            <div className="field">
              <label htmlFor="name">{formCopy.name}</label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                minLength={2}
                maxLength={120}
                required
                placeholder={formCopy.namePlaceholder}
              />
            </div>
            <div className="field">
              <label htmlFor="email">{formCopy.email}</label>
              <input
                id="email"
                name="email"
                type="email"
                inputMode="email"
                autoComplete="email"
                maxLength={180}
                required
                placeholder={formCopy.emailPlaceholder}
              />
            </div>
          </div>

          <div className="field">
            <label htmlFor="company">{formCopy.company}</label>
            <input
              id="company"
              name="company"
              type="text"
              autoComplete="organization"
              maxLength={180}
              placeholder={formCopy.companyPlaceholder}
            />
          </div>

          <div className="field">
            <label htmlFor="message">{formCopy.message}</label>
            <textarea
              id="message"
              name="message"
              rows={7}
              minLength={20}
              maxLength={3_000}
              required
              placeholder={formCopy.messagePlaceholder}
            />
          </div>

          <label className="consent-field">
            <input name="consent" type="checkbox" required />
            <span>
              {formCopy.consentLead}{' '}
              <Link to={localizedPath('/privacy', language)}>{formCopy.consentLink}</Link>{' '}
              {formCopy.consentTail}
            </span>
          </label>

          <button
            className="button button-primary form-submit"
            type="submit"
            disabled={status.state === 'submitting'}
          >
            {status.state === 'submitting' ? formCopy.submitting : formCopy.submit}
            <ArrowRight aria-hidden="true" />
          </button>
        </form>
      )}
    </div>
  );
}
