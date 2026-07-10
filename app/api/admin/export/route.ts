import { NextRequest, NextResponse } from 'next/server';
import { timingSafeEqual } from 'crypto';
import { prisma } from '@/lib/db';

// Export CSV des inscriptions et messages, protégé par jeton.
// Usage : /api/admin/export?type=inscriptions&token=VOTRE_JETON
//         /api/admin/export?type=contacts&token=VOTRE_JETON
// Le jeton est défini dans .env (ADMIN_EXPORT_TOKEN). Vide = export désactivé.

export const dynamic = 'force-dynamic';

function tokenIsValid(provided: string | null): boolean {
  const expected = process.env.ADMIN_EXPORT_TOKEN;
  if (!expected || !provided) return false;
  const a = Buffer.from(provided);
  const b = Buffer.from(expected);
  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
}

function csvCell(value: string | null | undefined): string {
  const text = (value ?? '').replace(/"/g, '""');
  return `"${text}"`;
}

function toCsv(headers: string[], rows: (string | null | undefined)[][]): string {
  const lines = [headers.map(csvCell).join(';')];
  for (const row of rows) {
    lines.push(row.map(csvCell).join(';'));
  }
  // BOM UTF-8 pour un affichage correct des accents dans Excel.
  return '\uFEFF' + lines.join('\r\n');
}

export async function GET(request: NextRequest) {
  const provided =
    request.headers.get('x-admin-token') ?? request.nextUrl.searchParams.get('token');
  if (!tokenIsValid(provided)) {
    return NextResponse.json({ error: 'Non autorisé' }, { status: 401 });
  }

  const type = request.nextUrl.searchParams.get('type') ?? 'inscriptions';

  try {
    let csv: string;
    let filename: string;

    if (type === 'contacts') {
      const contacts = await prisma.contact.findMany({
        orderBy: { date_contact: 'desc' },
      });
      csv = toCsv(
        ['Date', 'Nom', 'Email', 'Téléphone', 'Sujet', 'Message'],
        contacts.map((c) => [
          c.date_contact.toISOString(),
          c.nom,
          c.email,
          c.telephone,
          c.sujet,
          c.message,
        ])
      );
      filename = 'contacts-ceforbe.csv';
    } else {
      const inscriptions = await prisma.inscription.findMany({
        orderBy: { date_inscription: 'desc' },
      });
      csv = toCsv(
        ['Date', 'Nom', 'Prénom', 'Email', 'Téléphone', 'Formation', 'Langue', 'Message'],
        inscriptions.map((i) => [
          i.date_inscription.toISOString(),
          i.nom,
          i.prenom,
          i.email,
          i.telephone,
          i.formation,
          i.langue,
          i.message,
        ])
      );
      filename = 'inscriptions-ceforbe.csv';
    }

    return new NextResponse(csv, {
      status: 200,
      headers: {
        'Content-Type': 'text/csv; charset=utf-8',
        'Content-Disposition': `attachment; filename="${filename}"`,
        'Cache-Control': 'no-store',
      },
    });
  } catch (error) {
    console.error('[export] Erreur :', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
