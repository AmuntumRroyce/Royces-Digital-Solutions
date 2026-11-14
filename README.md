# Royce Digital Solutions — Modern Digital Agency Platform

**Founder & Principal Software Architect:** Amuntum Royce Afegnui  
**Headquarters:** Commercial Avenue, Bamenda, North West Region, Cameroon  
**Direct Contact:** `amuntumroyce@gmail.com`  
**Database:** Cloud Firestore (`Royces-Digital-Solutions`)  

---

## 🌍 Overview

Royce Digital Solutions is a premium digital agency and executive SaaS platform engineered to bring Silicon Valley & Apple-quality design standards to **Cameroon, Central Africa, and international clients**.

### Key Highlights
* **Optimized African & International Pricing:** Transparent tiers in **FCFA (XAF)** and **USD ($)**.
* **Native Cameroonian Payment Gateways:** Automated integration for **MTN Mobile Money (MoMo)**, **Orange Money (OM)**, UBA Bank Wire, plus International Visa/Mastercard & Crypto.
* **Automated Client Email Engine:** Dispatches branded confirmation emails to clients and instant lead alerts to `amuntumroyce@gmail.com`.
* **High-Speed Architecture:** Sub-second response times on mobile networks, offline caching with Flutter, and serverless Google Cloud / Firebase backends.

---

## ⚡ Two Ways to Test Run Right Now

### Option 1: Instant Zero-Install Test Run (Fastest)
1. Open [`preview/test-run.html`](file:///C:/Users/ROYCE%20PC/Documents/Royce's%20Digital%20Solutions/preview/test-run.html) in your browser.
2. Experience all 9 pages, Dark/Light mode toggle, Cameroonian pricing in FCFA, and the live executive dashboard with **zero setup**.

### Option 2: Full React + Express Dev Server
```powershell
cd "C:\Users\ROYCE PC\Documents\Royce's Digital Solutions"

# 1. Install all dependencies (Frontend React + Backend Express + Nodemailer)
npm install

# 2. Run the Vite frontend (http://localhost:3000)
npm run dev

# 3. Run the Express backend server with email & Firebase (http://localhost:5000)
npm run server

# Or run both simultaneously:
npm run dev:all
```

---

## 💰 Optimized Cameroonian & Global Pricing Structure

| Package | FCFA (Cameroon) | USD (International) | Ideal For |
| :--- | :--- | :--- | :--- |
| **Starter Launch** | **175,000 FCFA** | ~$290 USD | SMEs, clinics, schools, portfolios (WhatsApp chat, domain, emails, 30-day support) |
| **Growth & E-Commerce** | **480,000 FCFA** | ~$790 USD | High-converting web stores with **automated MTN MoMo & Orange Money checkout** + Admin dashboard |
| **Enterprise & Mobile** | **1,450,000 FCFA+** | ~$2,380+ USD | Cross-platform **iOS & Android Flutter App**, AI agents, multi-branch cloud backend |

---

## 📧 Automated Client Email Messaging Suite

Located in [`backend/templates/emailTemplates.js`](file:///C:/Users/ROYCE%20PC/Documents/Royce's%20Digital%20Solutions/backend/templates/emailTemplates.js) & [`backend/services/emailService.js`](file:///C:/Users/ROYCE%20PC/Documents/Royce's%20Digital%20Solutions/backend/services/emailService.js):

1. **Client Inbound Confirmation:** Automatically dispatched to client acknowledging their brief with Amuntum Royce Afegnui's signature and 4-hr turnaround guarantee.
2. **Admin Alert:** Instant notification to `amuntumroyce@gmail.com` with client details, phone/WhatsApp, and project scope.
3. **Formal Project Proposal:** Scope highlights, delivery schedule, and pricing in FCFA/USD.
4. **Project Kickoff / Onboarding:** Welcoming client with private staging link and sprint schedule.
5. **Sprint Milestone Review:** Link to staging demo and approval request.
6. **Invoice & Payment Instructions:** Milestone invoice with MTN MoMo, Orange Money, UBA Wire, and international card payment instructions.

---

## 📁 Repository Structure

```
Royce's Digital Solutions/
│
├── preview/
│   └── test-run.html             # Standalone instant browser runner
│
├── src/                          # FRONTEND (React 19 + Tailwind CSS)
│   ├── components/               # Navbar, Footer, ContactForm, GlassCard, ThemeToggle
│   ├── pages/                    # Home, About, Services, Portfolio, Pricing, Testimonials, Blog, Contact, Admin
│   └── services/                 # api.js, firebase.js (Royces-Digital-Solutions)
│
├── backend/                      # BACKEND (Node.js + Express + Firebase Admin + Email)
│   ├── server.js                 # API entrypoint (Port 5000)
│   ├── config/firebaseAdmin.js   # Firebase Admin initialization
│   ├── services/emailService.js  # Automated email dispatcher
│   ├── templates/emailTemplates.js# 6 Responsive HTML email templates
│   ├── controllers/              # leadController.js, analyticsController.js
│   ├── models/                   # Lead.js schema validator
│   └── routes/                   # /api/leads, /api/admin/stats
│
├── .env                          # Configured for amuntumroyce@gmail.com & Royces-Digital-Solutions
├── firestore.rules               # Production Firestore rules
├── tailwind.config.js            # Custom design tokens
└── package.json                  # Dependencies & scripts
```
