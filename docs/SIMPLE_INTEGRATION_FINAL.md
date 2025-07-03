# FINAL: Simple Contact Form Integration

## ✅ Summary: What You Need to Do (Simple!)

Since your **backend is already deployed and working**, you just need to add **one simple endpoint** to receive emails from visitors.

## 🎯 Frontend Status: COMPLETE ✅

The frontend is **100% done and deployed**. It sends contact form data to your backend at `/api/apply`.

## 🔧 Backend: Add One Endpoint (15 minutes)

Add this to your existing FastAPI app:

```python
@app.post("/api/apply")
async def receive_contact_form(request: dict):
    """Receive contact forms and forward as emails"""
    try:
        # Get form data
        form_type = request.get('formType')  # 'pilot', 'support', or 'general'
        name = request.get('name')
        email = request.get('email')
        company = request.get('company', '')
        message = request.get('message', '')
        
        # Route emails
        if form_type == 'support':
            to_email = 'support@fabriktakt.com'
        else:  # pilot or general
            to_email = 'info@fabriktakt.com'
        
        # Send email (use your server's mail system)
        subject = f"New {form_type} form from {name}"
        body = f"""
New contact form submission:

Name: {name}
Email: {email}
Company: {company}
Type: {form_type}

Message: {message}

Reply to: {email}
"""
        
        # Send email using your server (sendmail, SMTP, etc.)
        send_email(to_email, subject, body)
        
        return {"success": True, "message": "Form submitted successfully"}
        
    except Exception as e:
        return {"success": False, "error": str(e)}

def send_email(to_email, subject, body):
    """Use your server's email method - sendmail, SMTP, etc."""
    # Use whatever email method your server has
    # Could be sendmail, postfix, your hosting provider's API, etc.
    pass
```

## 📧 What Happens

1. **Visitor fills out contact form** on your website
2. **Frontend sends data** to your backend at `/api/apply`
3. **Your backend receives data** and sends email to:
   - `info@fabriktakt.com` (for pilot applications and general inquiries)
   - `support@fabriktakt.com` (for support requests)
4. **You get the email** and can respond directly to the visitor

## 🧪 Testing

```bash
# Test the endpoint
curl -X POST https://your-domain.com/api/apply \
  -H "Content-Type: application/json" \
  -d '{
    "formType": "general",
    "name": "Test User", 
    "email": "test@example.com",
    "message": "Test message"
  }'

# Should return: {"success": true, "message": "Form submitted successfully"}
```

## 📋 Form Types Your Frontend Sends

- **`"pilot"`** - Pilot program applications → `info@fabriktakt.com`
- **`"support"`** - Technical support → `support@fabriktakt.com` 
- **`"general"`** - General inquiries → `info@fabriktakt.com`

## 🎉 That's All!

No databases, no Redis, no SendGrid, no complex setup. Just:
1. Add one endpoint to receive form data
2. Send emails to your inbox
3. Done!

Your frontend is already complete and working. This is the simplest possible integration.

## 📄 Files

- **Simple implementation**: `docs/SIMPLE_EMAIL_INTEGRATION.md`
- **Quick checklist**: `docs/BACKEND_IMPLEMENTATION_CHECKLIST.md`
- **Frontend code**: Already complete and deployed
