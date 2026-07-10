import type { Metadata } from 'next';
import { PlanningClient } from './planning-client';

export const metadata: Metadata = {
  title: 'Planning 2026 – Calendrier des activités',
  description:
    'Calendrier 2026 du CeForBE : inscriptions et démarrage des cours CFBP, formations agro-pastorales, conférences et première graduation du MFB-A-P le 14 février 2026.',
  alternates: { canonical: '/planning' },
};

export default function Page() {
  return <PlanningClient />;
}
