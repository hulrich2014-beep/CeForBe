import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { contactSchema } from '@/lib/validation';
import { rateLimit, clientIp } from '@/lib/rate-limit';
import { sendMail, notificationRecipient } from '@/lib/mailer';

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => null);
    if (!body) {
      return NextResponse.json({ error: 'Requête invalide' }, { status: 400 });
    }

    // Honeypot : champ invisible pour un humain — rempli = robot.
    if (typeof body.website === 'string' && body.website.length > 0) {
      return NextResponse.json({ success: true }, { status: 201 });
    }

    if (!rateLimit(`contact:${clientIp(request.headers)}`, 5)) {
      return NextResponse.json(
        { error: 'Trop de tentatives. Veuillez réessayer plus tard.' },
        { status: 429 }
      );
    }

    const parsed = contactSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Champs manquants ou invalides' },
        { status: 400 }
      );
    }
    const data = parsed.data;

    await prisma.contact.create({
      data: {
        nom: data.nom,
        email: data.email,
        telephone: data.telephone || '',
        sujet: data.sujet,
        message: data.message,
      },
    });

    // L'échec d'e-mail ne doit pas faire échouer le message déjà en base.
    try {
      await sendMail({
        to: notificationRecipient(),
        subject: `[CeForBE] Nouveau message : ${data.sujet}`,
        replyTo: data.email,
        text: [
          'Nouveau message reçu via le formulaire de contact du site CeForBE :',
          '',
          `Nom : ${data.nom}`,
          `Email : ${data.email}`,
          data.telephone ? `Téléphone : ${data.telephone}` : '',
          `Sujet : ${data.sujet}`,
          '',
          data.message,
        ].join('\n'),
      });
    } catch (mailError) {
      console.error("[contact] Échec d'envoi e-mail :", mailError);
    }

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error('Error creating contact:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
