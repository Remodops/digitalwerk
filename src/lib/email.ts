import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

// SES Client konfigurieren
const sesClient = new SESClient({
  region: process.env.SES_REGION!,
  credentials: {
    accessKeyId: process.env.SES_ACCESS_KEY_ID!,
    secretAccessKey: process.env.SES_SECRET_ACCESS_KEY!,
  },
});

export async function sendContactEmail(data: ContactFormData): Promise<void> {
  const { name, email, phone, subject, message } = data;
  
  // E-Mail Inhalt erstellen
  const htmlBody = `
    <h2>Neue Kontaktanfrage von der Website</h2>
    <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
      <tr>
        <td style="border: 1px solid #ddd; padding: 12px; background-color: #f9f9f9; font-weight: bold; width: 120px;">Name:</td>
        <td style="border: 1px solid #ddd; padding: 12px;">${escapeHtml(name)}</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 12px; background-color: #f9f9f9; font-weight: bold;">E-Mail:</td>
        <td style="border: 1px solid #ddd; padding: 12px;"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td>
      </tr>
      ${phone ? `
      <tr>
        <td style="border: 1px solid #ddd; padding: 12px; background-color: #f9f9f9; font-weight: bold;">Telefon:</td>
        <td style="border: 1px solid #ddd; padding: 12px;">${escapeHtml(phone)}</td>
      </tr>
      ` : ''}
      <tr>
        <td style="border: 1px solid #ddd; padding: 12px; background-color: #f9f9f9; font-weight: bold;">Betreff:</td>
        <td style="border: 1px solid #ddd; padding: 12px;">${escapeHtml(subject)}</td>
      </tr>
      <tr>
        <td style="border: 1px solid #ddd; padding: 12px; background-color: #f9f9f9; font-weight: bold;">Nachricht:</td>
        <td style="border: 1px solid #ddd; padding: 12px;">${escapeHtml(message).replace(/\n/g, '<br>')}</td>
      </tr>
    </table>
    
    <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;">
    <p style="color: #666; font-size: 12px;">
      Diese E-Mail wurde automatisch über das Kontaktformular der Website gesendet.<br>
      Zeitpunkt: ${new Date().toLocaleString('de-DE', { timeZone: 'Europe/Berlin' })}
    </p>
  `;

  const textBody = `
Neue Kontaktanfrage von der Website

Name: ${name}
E-Mail: ${email}
${phone ? `Telefon: ${phone}` : ''}
Betreff: ${subject}

Nachricht:
${message}

---
Diese E-Mail wurde automatisch über das Kontaktformular der Website gesendet.
Zeitpunkt: ${new Date().toLocaleString('de-DE', { timeZone: 'Europe/Berlin' })}
  `.trim();

  const command = new SendEmailCommand({
    Source: process.env.SES_FROM!,
    Destination: {
      ToAddresses: [process.env.SES_TO!],
    },
    Message: {
      Subject: {
        Data: `[Kontakt] ${subject}`,
        Charset: 'UTF-8',
      },
      Body: {
        Html: {
          Data: htmlBody,
          Charset: 'UTF-8',
        },
        Text: {
          Data: textBody,
          Charset: 'UTF-8',
        },
      },
    },
    ReplyToAddresses: [email], // Ermöglicht direktes Antworten an den Absender
  });

  try {
    await sesClient.send(command);
    console.log('Contact email sent successfully');
  } catch (error) {
    console.error('Failed to send contact email:', error);
    throw new Error('E-Mail konnte nicht gesendet werden');
  }
}

// HTML-Escaping für Sicherheit
function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}
