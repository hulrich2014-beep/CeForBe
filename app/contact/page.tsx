import type { Metadata } from 'next';
import { ContactClient } from './contact-client';

export const metadata: Metadata = {
  title: 'Contact et localisation',
  description:
    'Contactez le Centre de Formation Biblique Esdras : formulaire, téléphone, WhatsApp, e-mail. Situé au 4ème VONS après le marché Sèkandji, Commune de Sèmé-Podji, Bénin.',
  alternates: { canonical: '/contact' },
};

export default function Page() {
  return <ContactClient />;
}
