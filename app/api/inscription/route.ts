import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { inscriptionSchema } from '@/lib/validation';
import { rateLimit, clientIp } from '@/lib/rate-limit';
import { sendMail, notificationRecipient } from '@/lib/mailer';

export const dynamic = 'force-dynamic';

const FORMATION_LABELS: Record<string, string> = {
  cfbp: 'CFBP - Formation pour Pasteurs (520h)',
  fbre: "FBRE - Formation pour Responsables d'Église (400h)",
  teleo_tier1: 'TELEO University - Niveau 1 (Tier 1)',
  teleo_tier2: 'TELEO University - Niveau 2 (Tier 2)',
  mfbap: 'MFB-A-P - Formation Agro-Pastoral',
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => null);
    if (!body) {
      return NextResponse.json({ error: 'Requête invalide' }, { status: 400 });
    }

    // Honeypot : le champ "website" est invisible pour un humain. S'il est
    // rempli, c'est un robot — on répond "succès" sans rien enregistrer.
    if (typeof body.website === 'string' && body.website.length > 0) {
      return NextResponse.json({ success: true }, { status: 201 });
    }

    if (!rateLimit(`inscription:${clientIp(request.headers)}`, 5)) {
      return NextResponse.json(
        { error: 'Trop de tentatives. Veuillez réessayer plus tard.' },
        { status: 429 }
      );
    }

    const parsed = inscriptionSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Champs manquants ou invalides' },
        { status: 400 }
      );
    }
    const data = parsed.data;

    await prisma.inscription.create({
      data: {
        prenom: data.prenom,
        nom: data.nom,
        email: data.email,
        telephone: data.telephone,
        formation: data.formation,
        message: data.message || '',
        langue: data.langue,
      },
    });

    const formationLabel = FORMATION_LABELS[data.formation] ?? data.formation;

    // Les échecs d'e-mail ne doivent pas faire échouer l'inscription déjà en base.
    try {
      await sendMail({
        to: notificationRecipient(),
        subject: `[CeForBE] Nouvelle inscription : ${data.prenom} ${data.nom}`,
        replyTo: data.email,
        text: [
          'Nouvelle inscription reçue sur le site CeForBE :',
          '',
          `Nom : ${data.nom}`,
          `Prénom : ${data.prenom}`,
          `Email : ${data.email}`,
          `Téléphone : ${data.telephone}`,
          `Formation : ${formationLabel}`,
          `Langue : ${data.langue}`,
          data.message ? `Message : ${data.message}` : '',
        ].join('\n'),
      });

      await sendMail({
        to: data.email,
        subject:
          data.langue === 'en'
            ? 'CeForBE — Your registration has been received'
            : 'CeForBE — Votre inscription a bien été reçue',
        text:
          data.langue === 'en'
            ? `Hello ${data.prenom},\n\nWe have received your registration for: ${formationLabel}.\nOur team will contact you shortly to confirm the next steps.\n\nCentre de Formation Biblique Esdras (CeForBE)\nSèkandji, Sèmé-Podji, Bénin\nPhone: +229 01 96 00 39 81`
            : `Bonjour ${data.prenom},\n\nNous avons bien reçu votre inscription pour : ${formationLabel}.\nNotre équipe vous contactera prochainement pour confirmer les prochaines étapes.\n\nCentre de Formation Biblique Esdras (CeForBE)\nSèkandji, Sèmé-Podji, Bénin\nTél : +229 01 96 00 39 81`,
      });
    } catch (mailError) {
      console.error("[inscription] Échec d'envoi e-mail :", mailError);
    }

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error('Error creating inscription:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
