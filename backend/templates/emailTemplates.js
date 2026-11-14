/**
 * ROYCE DIGITAL SOLUTIONS — EMAIL TEMPLATES SUITE
 * 
 * Location: Bamenda, Cameroon
 * Founder: Amuntum Royce Afegnui (amuntumroyce@gmail.com)
 * Phone & MTN Mobile Money: +237 651 094 432
 */

const BRAND_COLOR = "#2563EB";
const ACCENT_COLOR = "#06B6D4";
const DARK_BG = "#020617";
const WHATSAPP_NUMBER = "+237 651 094 432";
const WHATSAPP_URL = "https://wa.me/237651094432?text=Hello%20Amuntum%20Royce";

const baseLayout = (content, previewText = "") => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Royce Digital Solutions</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f1f5f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1e293b;">
  <div style="display: none; max-height: 0px; overflow: hidden;">${previewText}</div>
  
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color: #f1f5f9; padding: 40px 10px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" style="max-width: 600px; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.06); border: 1px solid #e2e8f0;">
          
          <!-- Header -->
          <tr>
            <td style="background-color: ${DARK_BG}; padding: 32px 40px; text-align: left;">
              <table width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td>
                    <span style="font-size: 22px; font-weight: 800; color: #ffffff; letter-spacing: -0.5px;">Royce Digital</span>
                    <span style="font-size: 11px; font-weight: 700; color: ${ACCENT_COLOR}; text-transform: uppercase; letter-spacing: 2px; display: block;">Solutions • Bamenda, Cameroon</span>
                  </td>
                  <td align="right">
                    <span style="display: inline-block; padding: 4px 10px; border-radius: 9999px; background-color: rgba(6,182,212,0.15); color: ${ACCENT_COLOR}; font-size: 11px; font-weight: 600;">Direct Engineering</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Content Body -->
          <tr>
            <td style="padding: 40px 40px 32px 40px; font-size: 15px; line-height: 1.6; color: #334155;">
              ${content}
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f8fafc; padding: 28px 40px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #64748b; text-align: center;">
              <p style="margin: 0 0 6px 0; font-weight: 700; color: #0f172a;">Royce Digital Solutions</p>
              <p style="margin: 0 0 8px 0;">Commercial Avenue, Bamenda, North West Region, Cameroon</p>
              <p style="margin: 0 0 6px 0;">WhatsApp & MoMo: <a href="${WHATSAPP_URL}" style="color: #059669; font-weight: 700; text-decoration: none;">${WHATSAPP_NUMBER}</a></p>
              <p style="margin: 0;">Email: <a href="mailto:amuntumroyce@gmail.com" style="color: ${BRAND_COLOR}; text-decoration: none;">amuntumroyce@gmail.com</a></p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;

export const emailTemplates = {

  /**
   * 1. Automated Receipt to Client on Inquiry Submission
   */
  clientInquiryReceipt: (lead) => {
    const preview = `Thank you for contacting Royce Digital Solutions. We have received your inquiry.`;
    const servicesList = Array.isArray(lead.services) ? lead.services.join(', ') : lead.services;

    const body = `
      <div style="display: inline-block; padding: 4px 10px; background-color: #ecfdf5; border: 1px solid #a7f3d0; border-radius: 6px; color: #065f46; font-size: 11px; font-weight: 700; margin-bottom: 12px;">
        🎉 20% FIRST-TIME DISCOUNT ACTIVE
      </div>
      <h2 style="font-size: 22px; font-weight: 800; color: #0f172a; margin-top: 0; margin-bottom: 16px;">
        Hello ${lead.fullName || 'Partner'},
      </h2>
      <p style="margin-bottom: 16px;">
        Thank you for reaching out to <strong>Royce Digital Solutions</strong>. We have received your project parameters and our team is already reviewing your requirements.
      </p>

      <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-left: 4px solid ${BRAND_COLOR}; border-radius: 8px; padding: 20px; margin: 24px 0;">
        <h4 style="margin: 0 0 12px 0; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; color: #475569;">Received Project Scope:</h4>
        <p style="margin: 4px 0; font-size: 14px;"><strong>Company / Project:</strong> ${lead.company || 'Not Specified'}</p>
        <p style="margin: 4px 0; font-size: 14px;"><strong>Target Capabilities:</strong> ${servicesList || 'Web/Mobile Solutions'}</p>
        <p style="margin: 4px 0; font-size: 14px;"><strong>Target Budget Range:</strong> ${lead.budget || 'Custom Scope'}</p>
      </div>

      <p style="margin-bottom: 16px;">
        <strong>What happens next?</strong><br>
        I personally review every technical brief. You will receive an initial feasibility evaluation and roadmap recommendation within <strong>4 business hours</strong>.
      </p>

      <div style="background-color: #eff6ff; border: 1px solid #bfdbfe; border-radius: 10px; padding: 16px; margin: 20px 0;">
        <p style="margin: 0 0 6px 0; font-size: 13px; font-weight: 700; color: #1e3a8a;">Prefer Instant WhatsApp Follow-up?</p>
        <p style="margin: 0; font-size: 13px; color: #3b82f6;">
          You can reach me directly on WhatsApp at <strong>${WHATSAPP_NUMBER}</strong> to discuss any urgent milestones.
        </p>
      </div>

      <table role="presentation" cellspacing="0" cellpadding="0">
        <tr>
          <td style="border-radius: 10px; background-color: #059669; text-align: center;">
            <a href="${WHATSAPP_URL}" style="background-color: #059669; color: #ffffff; padding: 12px 24px; text-decoration: none; font-size: 14px; font-weight: 700; display: inline-block; border-radius: 10px;">
              Chat on WhatsApp (${WHATSAPP_NUMBER}) &rarr;
            </a>
          </td>
        </tr>
      </table>

      <div style="margin-top: 36px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
        <p style="margin: 0; font-weight: 700; color: #0f172a;">Amuntum Royce Afegnui</p>
        <p style="margin: 2px 0 0 0; font-size: 13px; color: #64748b;">Founder & Lead Software Architect<br>Royce Digital Solutions — Bamenda, Cameroon</p>
      </div>
    `;

    return {
      subject: `Inquiry Received: Technical Review Underway — Royce Digital Solutions`,
      html: baseLayout(body, preview),
    };
  },

  /**
   * 2. Alert Sent to Amuntum Royce Afegnui (Admin)
   */
  adminLeadAlert: (lead) => {
    const servicesList = Array.isArray(lead.services) ? lead.services.join(', ') : lead.services;
    const body = `
      <div style="padding: 6px 12px; background-color: #ecfdf5; border: 1px solid #a7f3d0; border-radius: 6px; color: #065f46; font-size: 12px; font-weight: 700; display: inline-block; margin-bottom: 16px;">
        🔔 NEW INBOUND CLIENT INQUIRY
      </div>
      <h2 style="font-size: 20px; font-weight: 800; color: #0f172a; margin: 0 0 16px 0;">
        New Lead: ${lead.fullName} (${lead.company || 'Direct Client'})
      </h2>

      <table width="100%" cellspacing="0" cellpadding="8" style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; font-size: 14px; margin-bottom: 20px;">
        <tr>
          <td width="35%" style="color: #64748b; font-weight: 600;">Client Email:</td>
          <td><a href="mailto:${lead.workEmail}" style="color: ${BRAND_COLOR}; font-weight: 700;">${lead.workEmail}</a></td>
        </tr>
        <tr>
          <td style="color: #64748b; font-weight: 600;">WhatsApp / Phone:</td>
          <td><a href="https://wa.me/${(lead.phone || '').replace(/[^0-9]/g, '')}" style="color: #059669; font-weight: 700;">${lead.phone || 'Not provided'}</a></td>
        </tr>
        <tr>
          <td style="color: #64748b; font-weight: 600;">Capabilities:</td>
          <td><strong>${servicesList}</strong></td>
        </tr>
        <tr>
          <td style="color: #64748b; font-weight: 600;">Budget Tier:</td>
          <td style="color: #059669; font-weight: 700;">${lead.budget}</td>
        </tr>
      </table>

      <h4 style="margin: 0 0 8px 0; font-size: 13px; text-transform: uppercase; color: #475569;">Project Message:</h4>
      <div style="background-color: #ffffff; border: 1px solid #cbd5e1; border-radius: 8px; padding: 14px; font-size: 14px; line-height: 1.5; color: #1e293b; margin-bottom: 24px;">
        ${lead.message ? lead.message.replace(/\n/g, '<br>') : '<em>No additional brief provided.</em>'}
      </div>

      <table role="presentation" cellspacing="0" cellpadding="0">
        <tr>
          <td style="border-radius: 8px; background-color: ${BRAND_COLOR}; text-align: center;">
            <a href="mailto:${lead.workEmail}?subject=Re:%20Royce%20Digital%20Solutions%20-%20Project%20Roadmap" style="background-color: ${BRAND_COLOR}; color: #ffffff; padding: 12px 22px; text-decoration: none; font-size: 13px; font-weight: 700; display: inline-block; border-radius: 8px;">
              Reply to Client &rarr;
            </a>
          </td>
        </tr>
      </table>
    `;

    return {
      subject: `🚨 [New Lead] ${lead.fullName} — ${lead.budget} (${lead.company || 'Cameroon/Global'})`,
      html: baseLayout(body, `New lead from ${lead.fullName}`),
    };
  },

  /**
   * 3. Invoice & Payment Instructions (with Mobile Money +237 651 094 432)
   */
  invoiceEmail: ({ clientName, invoiceNumber, amountFCFA, amountUSD, dueDate }) => {
    const body = `
      <h2 style="font-size: 22px; font-weight: 800; color: #0f172a; margin-top: 0;">
        Invoice #${invoiceNumber} — Royce Digital Solutions
      </h2>
      <p>Dear ${clientName},</p>
      <p>Please find below the invoice details for your project milestone.</p>

      <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 22px; margin: 24px 0;">
        <div style="font-size: 13px; color: #64748b; margin-bottom: 4px;">Amount Due:</div>
        <div style="font-size: 26px; font-weight: 800; color: #0f172a;">
          ${amountFCFA} FCFA <span style="font-size: 15px; color: #64748b; font-weight: 500;">(~${amountUSD} USD)</span>
        </div>
        <div style="font-size: 12px; color: #94a3b8; margin-top: 4px;">Due Date: ${dueDate || 'Within 5 Business Days'}</div>
      </div>

      <h4 style="margin: 20px 0 10px 0; font-size: 13px; text-transform: uppercase; color: #475569;">Accepted Payment Channels:</h4>
      
      <div style="background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; margin-bottom: 12px; font-size: 13px;">
        <strong style="color: #059669; font-size: 14px;">🇨🇲 MTN Mobile Money (Direct Transfer):</strong>
        <p style="margin: 6px 0 2px 0;">• <strong>MoMo Number:</strong> <span style="font-family: monospace; font-size: 14px; font-weight: 700; color: #0f172a;">+237 651 094 432</span></p>
        <p style="margin: 2px 0;">• <strong>Account Name:</strong> Amuntum Royce Afegnui</p>
        <p style="margin: 2px 0;">• <strong>Location:</strong> Bamenda, Cameroon</p>
      </div>

      <div style="background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; margin-bottom: 12px; font-size: 13px;">
        <strong style="color: #ea580c; font-size: 14px;">🇨🇲 Orange Money (OM):</strong>
        <p style="margin: 6px 0 2px 0;">• <strong>Number:</strong> <span style="font-family: monospace; font-size: 14px; font-weight: 700; color: #0f172a;">+237 651 094 432</span></p>
        <p style="margin: 2px 0;">• <strong>Account Name:</strong> Amuntum Royce Afegnui</p>
      </div>

      <div style="background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; font-size: 13px;">
        <strong style="color: #2563eb; font-size: 14px;">🌍 International & Wire Transfer:</strong>
        <p style="margin: 6px 0 2px 0;">• <strong>Bank Wire:</strong> UBA Cameroon (Details provided on commercial invoice)</p>
        <p style="margin: 2px 0;">• <strong>Visa / Mastercard / PayPal</strong></p>
        <p style="margin: 2px 0;">• <strong>USDT / Crypto Gateway</strong></p>
      </div>

      <p style="margin-top: 24px; font-size: 13px; color: #64748b;">
        Upon settlement, please WhatsApp or reply with your transaction reference to <strong>${WHATSAPP_NUMBER}</strong>.
      </p>

      <div style="margin-top: 36px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
        <p style="margin: 0; font-weight: 700; color: #0f172a;">Amuntum Royce Afegnui</p>
        <p style="margin: 2px 0 0 0; font-size: 13px; color: #64748b;">amuntumroyce@gmail.com • +237 651 094 432</p>
      </div>
    `;

    return {
      subject: `Invoice #${invoiceNumber}: ${amountFCFA} FCFA — Royce Digital Solutions`,
      html: baseLayout(body, `Invoice #${invoiceNumber}`),
    };
  }

};
