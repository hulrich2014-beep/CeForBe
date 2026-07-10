import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Mentions légales',
  description:
    'Mentions légales du site du Centre de Formation Biblique Esdras (CeForBE) : éditeur, direction de publication, hébergement et propriété intellectuelle.',
  alternates: { canonical: '/mentions-legales' },
  robots: { index: false, follow: true },
};

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen py-12 sm:py-16 lg:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-8 sm:mb-12">
          Mentions légales
        </h1>

        <div className="space-y-8 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-blue-900 mb-3">Éditeur du site</h2>
            <p>
              Centre de Formation Biblique Esdras (CeForBE)
              <br />
              06 B.P. 2814 Akpakpa, Cotonou, République du Bénin
              <br />
              4ème VONS à droite après le marché Sèkandji, Commune de Sèmé-Podji
              <br />
              Téléphone :{' '}
              <a href="tel:+2290195402638" className="text-blue-900 underline">
                +229 01 95 40 26 38
              </a>
              <br />
              E-mail :{' '}
              <a
                href="mailto:contact@ceforbe.com"
                className="text-blue-900 underline break-all"
              >
                contact@ceforbe.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-blue-900 mb-3">
              Directeur de la publication
            </h2>
            <p>Pasteur HOUNGBEME Augustin, Directeur du CeForBE.</p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-blue-900 mb-3">Hébergement</h2>
            <p>
              [Nom et coordonnées de l&apos;hébergeur à compléter lors de la mise en ligne —
              par exemple : Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis.]
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-blue-900 mb-3">
              Propriété intellectuelle
            </h2>
            <p>
              L&apos;ensemble des contenus de ce site (textes, images, logo, structure) est la
              propriété du Centre de Formation Biblique Esdras, sauf mention contraire. Toute
              reproduction, même partielle, est soumise à autorisation préalable.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-blue-900 mb-3">Données personnelles</h2>
            <p>
              Les modalités de collecte et de traitement des données personnelles sont décrites
              dans notre{' '}
              <Link href="/politique-de-confidentialite" className="text-blue-900 underline">
                politique de confidentialité
              </Link>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
