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
CLIENT_URL=https://your-live-site.example
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
SMTP_PASS=your_gmail_app_password
EMAIL_FROM="Royce Digital Solutions <amuntumroyce@gmail.com>"
ADMIN_NOTIFICATION_EMAIL=amuntumroyce@gmail.com
```

---

## 3. Recommended Next Steps for You

For local development, put backend settings in the root `.env` file. For deployment, configure them as private environment variables on the backend hosting service. Do not commit the real SMTP password or put it in a `VITE_` variable. For Gmail, use a Google App Password with 2-Step Verification enabled.

Set `VITE_API_URL` in the Vercel project's build environment variables to the backend's origin, for example `https://your-backend.example.com` (no trailing slash or `/api`). Redeploy the frontend after setting it. Set `CLIENT_URL` on the backend to the exact live site origin, such as `https://your-site.vercel.app`, so the browser can call the API.

The inquiry form only shows the successful email-confirmation state when the backend accepts the submission and both emails are accepted by SMTP. If the backend records the inquiry but email delivery fails, the form reports that distinction instead of claiming an email was sent.

* **Step A:** Deploy the Express backend as a Node.js service with start command `npm run server`, then add its SMTP settings as private environment variables.
* **Step B:** Set `VITE_API_URL` on Vercel to the deployed backend origin and `CLIENT_URL` on the backend to the live frontend origin. Redeploy after changing frontend build variables.
* **Step C:** Connect webhook endpoints for **MTN Mobile Money** and **Orange Money** callbacks in `backend/routes/paymentRoutes.js` if you are extending the automated checkout engine.
