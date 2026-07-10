import type { Metadata } from 'next';
import { HomeClient } from './home-client';

export const metadata: Metadata = {
  title: {
    absolute:
      'Centre de Formation Biblique Esdras (CeForBE) – Formation biblique et agro-pastorale au Bénin',
  },
  description:
    'Le CeForBE forme pasteurs, responsables d\'église et serviteurs de Dieu au Bénin : CFBP/FBRE (520 h et 400 h), TELEO University (du certificat au doctorat) et formations agro-pastorales du MFB-A-P. Inscription en ligne.',
  alternates: { canonical: '/' },
};

export default function Page() {
  return <HomeClient />;
}
