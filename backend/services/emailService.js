import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { emailTemplates } from '../templates/emailTemplates.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configure transporter
let transporter = null;

if (process.env.SMTP_USER && process.env.SMTP_PASS) {
  try {
    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '465'),
      secure: process.env.SMTP_SECURE !== 'false',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
    console.log('✅ Nodemailer SMTP Transporter initialized successfully.');
  } catch (err) {
    console.warn('⚠️ Nodemailer configuration error, running in simulation mode:', err.message);
  }
}

/**
 * Send an email using SMTP or fallback to simulated log delivery
 */
export const sendEmail = async ({ to, subject, html, text }) => {
  const emailPayload = {
    from: process.env.EMAIL_FROM || '"Royce Digital Solutions" <amuntumroyce@gmail.com>',
    to,
    subject,
    html,
    text: text || 'Please view this email in an HTML-compatible client.',
  };

  if (transporter) {
    try {
      const info = await transporter.sendMail(emailPayload);
      console.log(`✉️ [Email Sent] To: ${to} | ID: ${info.messageId}`);
      return { success: true, messageId: info.messageId, mode: 'smtp' };
    } catch (error) {
      console.error(`❌ [SMTP Send Error] To: ${to}:`, error.message);
    }
  }

  // Development / Simulation Fallback
  console.log(`\n======================================================`);
  console.log(`📧 [SIMULATED EMAIL DISPATCH]`);
  console.log(`📍 To: ${to}`);
  console.log(`📋 Subject: ${subject}`);
  console.log(`👤 From: ${emailPayload.from}`);
  console.log(`======================================================\n`);

  // Log to local file for review
  try {
    const logDir = path.join(__dirname, '../logs');
    if (!fs.existsSync(logDir)) fs.mkdirSync(logDir, { recursive: true });
    
    const logEntry = {
      timestamp: new Date().toISOString(),
      to,
      subject,
      contentSnippet: subject,
    };
    fs.appendFileSync(path.join(logDir, 'sent_emails.log'), JSON.stringify(logEntry) + '\n');
  } catch (fsErr) {
    // Ignore logging errors
  }

  return { success: true, mode: 'simulated_log' };
};

/**
 * Automated Workflow: Send confirmation to client AND alert to Amuntum Royce Afegnui
 */
export const handleInboundLeadEmails = async (lead) => {
  // 1. Client Receipt
  const clientEmailData = emailTemplates.clientInquiryReceipt(lead);
  await sendEmail({
    to: lead.workEmail,
    subject: clientEmailData.subject,
    html: clientEmailData.html,
  });

  // 2. Admin Alert to Amuntum Royce Afegnui
  const adminAlertData = emailTemplates.adminLeadAlert(lead);
  await sendEmail({
    to: process.env.ADMIN_NOTIFICATION_EMAIL || 'amuntumroyce@gmail.com',
    subject: adminAlertData.subject,
    html: adminAlertData.html,
  });
};

export { emailTemplates };
