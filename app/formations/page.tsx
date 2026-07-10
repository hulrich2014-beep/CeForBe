import type { Metadata } from 'next';
import { FormationsClient } from './formations-client';

export const metadata: Metadata = {
  title: 'Formations bibliques et agro-pastorales',
  description:
    'CFBP/FBRE (520 h et 400 h), TELEO University (du certificat au doctorat, accrédité AEM, ATA, ICETE) et formations agro-pastorales du MFB-A-P. Programmes détaillés et inscription en ligne.',
  alternates: { canonical: '/formations' },
};

export default function Page() {
  return <FormationsClient />;
}
