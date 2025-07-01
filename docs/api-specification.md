# FabrikTakt Form Submission API Specification

## Overview
This document defines the API specification for handling form submissions from the FabrikTakt website, including security measures, validation, and response formats.

## Endpoint: POST /api/apply

### Purpose
Handles pilot program applications and contact form submissions with comprehensive validation and spam prevention.

### Request Format

#### Headers
```
Content-Type: application/json
Origin: https://yourdomain.com (validated)
User-Agent: <browser-user-agent>
```

#### Request Body
```typescript
interface FormSubmissionRequest {
  // Core form data
  name: string;           // Required, 2-100 characters
  company: string;        // Required, 2-100 characters  
  email: string;          // Required, valid email format
  phone?: string;         // Optional, valid phone format
  challenge?: string;     // Optional for modal, required for CTA form, 10-1000 characters
  
  // Form metadata
  formType: 'pilot-modal' | 'pilot-cta';  // Required, identifies form source
  
  // Security fields
  honeypot?: string;      // Should be empty, hidden field for spam detection
  timestamp: number;      // Client-side timestamp for rate limiting
  userAgent: string;      // Browser fingerprinting
}
```

#### Example Request
```json
{
  "name": "John Smith",
  "company": "ABC Manufacturing",
  "email": "john@abcmfg.com",
  "phone": "+1-555-123-4567",
  "challenge": "We struggle with capturing knowledge from our experienced machinists before they retire.",
  "formType": "pilot-cta",
  "honeypot": "",
  "timestamp": 1703875200000,
  "userAgent": "Mozilla/5.0..."
}
```

### Response Format

#### Success Response (200 OK)
```json
{
  "success": true,
  "message": "Application received successfully",
  "submissionId": "uuid-v4-string",
  "estimatedResponse": "24 hours"
}
```

#### Validation Error (400 Bad Request)
```json
{
  "success": false,
  "error": "VALIDATION_ERROR",
  "message": "Invalid input data",
  "details": [
    {
      "field": "email",
      "message": "Invalid email format"
    },
    {
      "field": "name",
      "message": "Name must be at least 2 characters"
    }
  ]
}
```

#### Rate Limit Error (429 Too Many Requests)
```json
{
  "success": false,
  "error": "RATE_LIMIT_EXCEEDED",
  "message": "Too many submissions. Please try again later.",
  "retryAfter": 3600
}
```

#### Spam Detection (422 Unprocessable Entity)
```json
{
  "success": false,
  "error": "SPAM_DETECTED",
  "message": "Submission flagged as potential spam"
}
```

#### Server Error (500 Internal Server Error)
```json
{
  "success": false,
  "error": "INTERNAL_ERROR",
  "message": "Unable to process submission. Please try again later.",
  "supportId": "uuid-v4-string"
}
```

## Security Measures

### 1. Rate Limiting
- **Per IP**: 3 submissions per hour
- **Per Email**: 1 submission per 24 hours
- **Global**: 100 submissions per minute
- **Reset Window**: Rolling window, not fixed intervals

### 2. Spam Detection
- **Honeypot Field**: Hidden field that should remain empty
- **Timing Analysis**: Reject submissions completed too quickly (<5 seconds)
- **Content Analysis**: Basic keyword filtering for spam content
- **IP Reputation**: Check against known spam IP lists
- **User-Agent Validation**: Reject suspicious or missing user agents

### 3. Input Validation
- **Sanitization**: HTML entities, SQL injection prevention
- **Length Limits**: Enforce maximum field lengths
- **Format Validation**: Email, phone number patterns
- **Character Set**: Only allow safe Unicode characters

### 4. CORS Policy
```
Access-Control-Allow-Origin: https://yourdomain.com
Access-Control-Allow-Methods: POST
Access-Control-Allow-Headers: Content-Type
Access-Control-Max-Age: 86400
```

## Data Processing

### 1. Email Notification
```typescript
interface EmailNotification {
  to: "your-email@company.com";
  subject: `New ${formType} Application - ${company}`;
  template: "pilot-application";
  data: {
    applicantName: string;
    company: string;
    email: string;
    phone?: string;
    challenge?: string;
    submissionTime: Date;
    formSource: string;
  };
}
```

### 2. Database Storage
```sql
CREATE TABLE form_submissions (
  id UUID PRIMARY KEY,
  form_type VARCHAR(50) NOT NULL,
  name VARCHAR(100) NOT NULL,
  company VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20),
  challenge TEXT,
  ip_address INET,
  user_agent TEXT,
  submitted_at TIMESTAMP DEFAULT NOW(),
  processed_at TIMESTAMP,
  status VARCHAR(20) DEFAULT 'pending'
);

CREATE INDEX idx_submissions_email ON form_submissions(email);
CREATE INDEX idx_submissions_ip ON form_submissions(ip_address);
CREATE INDEX idx_submissions_submitted_at ON form_submissions(submitted_at);
```

### 3. Logging Requirements
```typescript
interface SubmissionLog {
  level: 'info' | 'warn' | 'error';
  timestamp: Date;
  event: 'submission_received' | 'validation_failed' | 'spam_detected' | 'rate_limited' | 'email_sent' | 'database_stored';
  submissionId: string;
  ipAddress: string;
  userAgent: string;
  formType: string;
  processingTime: number; // milliseconds
  details?: any;
}
```

## Implementation Notes

### Environment Variables
```bash
# Email Service
EMAIL_SERVICE_PROVIDER=sendgrid|mailgun|ses
EMAIL_API_KEY=your_api_key
EMAIL_FROM_ADDRESS=noreply@yourdomain.com
EMAIL_TO_ADDRESS=applications@yourdomain.com

# Security
CORS_ORIGIN=https://yourdomain.com
RATE_LIMIT_WINDOW=3600
RATE_LIMIT_MAX_REQUESTS=3
HONEYPOT_FIELD_NAME=website

# Database
DATABASE_URL=postgresql://user:pass@host:port/db
REDIS_URL=redis://host:port (for rate limiting)

# Monitoring
SENTRY_DSN=your_sentry_dsn
LOG_LEVEL=info
```

### Deployment Checklist
- [ ] Environment variables configured
- [ ] Database migrations applied
- [ ] Redis instance for rate limiting
- [ ] Email service API keys validated
- [ ] CORS origins configured
- [ ] Monitoring/logging setup
- [ ] Load testing completed
- [ ] Security scanning passed

### Monitoring Metrics
- Submission success rate
- Average response time
- Rate limit violations
- Spam detection accuracy
- Email delivery success rate
- Database query performance