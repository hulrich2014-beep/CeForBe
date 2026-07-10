import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Politique de confidentialité',
  description:
    'Politique de confidentialité du CeForBE : données collectées via les formulaires, finalités, durée de conservation et droits des personnes (loi n°2017-20 du Bénin, APDP).',
  alternates: { canonical: '/politique-de-confidentialite' },
  robots: { index: false, follow: true },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="min-h-screen py-12 sm:py-16 lg:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-8 sm:mb-12">
          Politique de confidentialité
        </h1>

        <div className="space-y-8 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-blue-900 mb-3">
              Qui sommes-nous ?
            </h2>
            <p>
              Le présent site est édité par le Centre de Formation Biblique Esdras (CeForBE),
              situé à Sèkandji, Commune de Sèmé-Podji, République du Bénin. Le CeForBE est
              responsable du traitement des données collectées sur ce site.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-blue-900 mb-3">
              Données collectées
            </h2>
            <p>Nous collectons uniquement les données que vous nous transmettez volontairement :</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>
                <strong>Formulaire d&apos;inscription</strong> : nom, prénom, adresse e-mail,
                numéro de téléphone, formation choisie et message éventuel.
              </li>
              <li>
                <strong>Formulaire de contact</strong> : nom, adresse e-mail, numéro de téléphone
                (facultatif), sujet et message.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-blue-900 mb-3">Finalités</h2>
            <p>
              Ces données sont utilisées exclusivement pour traiter votre demande : gestion des
              inscriptions aux formations, réponse à vos messages et suivi administratif. Elles ne
              sont ni vendues, ni cédées, ni utilisées à des fins publicitaires.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-blue-900 mb-3">
              Durée de conservation
            </h2>
            <p>
              Les données d&apos;inscription sont conservées pendant la durée de votre parcours de
              formation, puis archivées au maximum trois (3) ans. Les messages de contact sont
              conservés au maximum un (1) an après leur traitement.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-blue-900 mb-3">Vos droits</h2>
            <p>
              Conformément à la loi n°2017-20 du 20 avril 2018 portant code du numérique en
              République du Bénin, et sous le contrôle de l&apos;Autorité de Protection des
              Données à caractère Personnel (APDP), vous disposez d&apos;un droit d&apos;accès, de
              rectification, d&apos;opposition et de suppression de vos données. Pour l&apos;exercer,
              écrivez-nous à{' '}
              <a
                href="mailto:contact@ceforbe.com"
                className="text-blue-900 underline break-all"
              >
                contact@ceforbe.com
              </a>{' '}
              ou par courrier au 06 B.P. 2814 Akpakpa, Cotonou, Bénin.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-blue-900 mb-3">Cookies et tiers</h2>
            <p>
              Ce site n&apos;utilise pas de cookies publicitaires. Certaines fonctionnalités
              peuvent faire appel à des services tiers (carte Google Maps, assistant de
              conversation) ; ces services peuvent déposer leurs propres cookies, régis par leurs
              politiques respectives.
            </p>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-bold text-blue-900 mb-3">Sécurité</h2>
            <p>
              Les données transmises via les formulaires sont stockées dans une base de données à
              accès restreint. Le site applique des mesures de protection contre les envois
              automatisés et limite strictement les informations collectées au nécessaire.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
