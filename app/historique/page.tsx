import type { Metadata } from 'next';
import { HistoriqueClient } from './historique-client';

export const metadata: Metadata = {
  title: 'Historique du Centre',
  description:
    'De l\'appel au ministère en 1990 à l\'inauguration du centre le 8 juin 2024 à Sèkandji (Sèmé-Podji) : découvrez l\'histoire du Centre de Formation Biblique Esdras.',
  alternates: { canonical: '/historique' },
};

export default function Page() {
  return <HistoriqueClient />;
}
