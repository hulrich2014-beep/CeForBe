import type { Metadata } from 'next';
import { AProposClient } from './a-propos-client';

export const metadata: Metadata = {
  title: 'À propos – Équipe et infrastructure',
  description:
    'Direction, équipes du CFBP/FBRE et du MFB-A-P, infrastructure du campus de Sèkandji : découvrez le Centre de Formation Biblique Esdras et ses coordonnées.',
  alternates: { canonical: '/a-propos' },
};

export default function Page() {
  return <AProposClient />;
}
