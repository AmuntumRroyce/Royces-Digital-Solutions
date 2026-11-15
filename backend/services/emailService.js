import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import { emailTemplates } from '../templates/emailTemplates.js';

dotenv.config();

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
    console.error('Nodemailer could not initialize the SMTP transport:', err.message);
  }
}

/**
 * Send an email through the configured SMTP server
 */
export const sendEmail = async ({ to, subject, html, text }) => {
  if (!transporter) {
    throw new Error('SMTP is not configured. Set SMTP_USER and SMTP_PASS on the backend.');
  }

  const emailPayload = {
    from: process.env.EMAIL_FROM || '"Royce Digital Solutions" <amuntumroyce@gmail.com>',
    to,
    subject,
    html,
    text: text || 'Please view this email in an HTML-compatible client.',
  };

  try {
    const info = await transporter.sendMail(emailPayload);
    console.log(`✉️ [Email Sent] To: ${to} | ID: ${info.messageId}`);
    return { success: true, messageId: info.messageId, mode: 'smtp' };
  } catch (error) {
    console.error(`❌ [SMTP Send Error] To: ${to}:`, error.message);
    throw new Error(`SMTP delivery failed for ${to}: ${error.message}`);
  }
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
