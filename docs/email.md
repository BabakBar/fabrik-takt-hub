# Contact Delivery

The website has one contact form implementation:

- UI: `src/components/sections/ContactSection.tsx`
- delivery boundary: `src/services/emailService.ts`

## Delivery contract

The form reports success only after the admin EmailJS template sends successfully. The optional user confirmation is best-effort: a confirmation failure does not tell the visitor that the already-delivered enquiry failed.

Expected EmailJS variables:

```text
to_email
reply_to
user_name
user_email
company
message
form_type
locale
submitted_at
```

The admin template should route only to the controlled FabrikTakt inbox. EmailJS origin restrictions, rate limits, and template controls must remain enabled in the provider dashboard.

## Local behavior

When required configuration is missing, the application loads normally and the form returns a localized configuration error with a direct `mailto:` fallback. It does not crash the entire site.

The browser test suite deliberately does not send real email. Delivery must be verified after deployment using a clearly marked test enquiry and the real inbox.
