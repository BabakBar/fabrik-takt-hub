# TODO: Pilot Program & Analytics Features

## 1. Pilot Program Application

- [ ] Integrate email receiving/sending for pilot program applications
  - [ ] Decide on method: third-party (Formspree, EmailJS) or custom backend (FastAPI)
  - [ ] If using backend, create an API endpoint in FastAPI to receive form data and send emails
  - [ ] Update frontend to POST form data to backend or third-party service
  - [ ] (Optional) Send confirmation email to applicant
  
## 3. Backend Integration (if needed)

- [ ] Set up FastAPI backend for handling form submissions and sending emails
  - [ ] Create API endpoint for pilot applications
  - [ ] Configure email sending (SMTP or service like SendGrid)
  - [ ] Secure the endpoint (rate limiting, validation, etc.)

---

**Note:**  
- If you want a no-backend solution, you can use Formspree or EmailJS directly from the frontend.
- For more control and security, use your FastAPI backend to handle form submissions and email sending.