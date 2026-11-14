# Royce Digital Solutions — Backend Developer & AI Model Guide

> **To the Backend Engineering Model:**  
> This backend is configured for **Royce Digital Solutions**, founded by **Amuntum Royce Afegnui** in **Bamenda, Cameroon** (`amuntumroyce@gmail.com`).  
> The database is Google Cloud Firestore project: **`Royces-Digital-Solutions`**.

---

## 1. Core Responsibilities & Workflows

1. **Inbound Lead Processing (`/api/leads`):**
   * Validates client data (Name, Email, Phone/WhatsApp, Services, Budget in FCFA/USD).
   * Writes lead document to Firestore collection `leads` in project `Royces-Digital-Solutions`.
   * Automatically invokes `emailService.handleInboundLeadEmails(lead)` to:
     - Dispatch a professional HTML confirmation receipt to the client.
     - Send a high-priority alert email to `amuntumroyce@gmail.com`.
2. **Email Templates Engine (`/backend/templates/emailTemplates.js`):**
   * Ready-to-use HTML email templates with Amuntum Royce Afegnui's signature:
     - `clientInquiryReceipt(lead)`
     - `adminLeadAlert(lead)`
     - `proposalEmail(...)`
     - `projectKickoff(...)`
     - `milestoneReview(...)`
     - `invoiceEmail(...)` (supporting MTN Mobile Money, Orange Money, UBA Bank wire, and Visa/Mastercard).
3. **Admin Telemetry & Pipeline (`/api/admin/stats`):**
   * Feeds the executive dashboard with pipeline value in FCFA, active projects, and conversion rates.

---

## 2. Environment Variables (`.env`)

```ini
PORT=5000
FOUNDER_NAME="Amuntum Royce Afegnui"
FOUNDER_EMAIL="amuntumroyce@gmail.com"
AGENCY_LOCATION="Bamenda, North West Region, Cameroon"

FIREBASE_PROJECT_ID="Royces-Digital-Solutions"
FIREBASE_CLIENT_EMAIL="amuntumroyce@gmail.com"

# Gmail SMTP for sending client emails:
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=amuntumroyce@gmail.com
SMTP_PASS=your_app_password_here
ADMIN_NOTIFICATION_EMAIL=amuntumroyce@gmail.com
```

---

## 3. Recommended Next Steps for You

* **Step A:** If you want live Gmail SMTP delivery, add a 16-character Google App Password in `.env` under `SMTP_PASS` (or configure Resend/SendGrid). When `SMTP_PASS` is omitted, the service runs in safe simulation mode, logging dispatched emails to `backend/logs/sent_emails.log`.
* **Step B:** Connect webhook endpoints for **MTN Mobile Money** and **Orange Money** callbacks in `backend/routes/paymentRoutes.js` if you are extending the automated checkout engine.
