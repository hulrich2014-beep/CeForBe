import nodemailer from 'nodemailer';

// Envoi d'e-mails transactionnels (notifications de formulaires).
// Si le SMTP n'est pas configuré dans .env, l'envoi est ignoré avec un
// avertissement en console : l'enregistrement en base reste garanti.

function smtpConfigured(): boolean {
  return Boolean(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS);
}

interface MailOptions {
  to: string;
  subject: string;
  text: string;
  replyTo?: string;
}

export async function sendMail({ to, subject, text, replyTo }: MailOptions): Promise<boolean> {
  if (!smtpConfigured()) {
    console.warn(
      '[mailer] SMTP non configuré (SMTP_HOST/SMTP_USER/SMTP_PASS manquants) — e-mail non envoyé :',
      subject
    );
    return false;
  }

  const port = Number(process.env.SMTP_PORT ?? 465);
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port,
    secure: port === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  await transporter.sendMail({
    from: process.env.MAIL_FROM ?? process.env.SMTP_USER,
    to,
    subject,
    text,
    replyTo,
  });
  return true;
}

/** Adresse du secrétariat qui reçoit les notifications. */
export function notificationRecipient(): string {
  return process.env.MAIL_TO ?? 'contact@ceforbe.com';
}
