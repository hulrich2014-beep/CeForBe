import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import { LanguageProvider } from '@/lib/i18n/context';
import { MotionProvider } from '@/components/motion-provider';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { WhatsAppButton } from '@/components/whatsapp-button';

const inter = Inter({ subsets: ['latin'] });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.ceforbe.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Centre de Formation Biblique Esdras (CeForBE) – Bénin',
    template: '%s | CeForBE',
  },
  description:
    'Centre de référence pour la formation biblique, ministérielle et agro-pastorale au Bénin. Trois entités de formation : CFBP/FBRE, TELEO University et MFB-A-P.',
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
  openGraph: {
    title: 'Centre de Formation Biblique Esdras (CeForBE)',
    description:
      'Formation biblique, ministérielle et agro-pastorale de référence au Bénin.',
    url: siteUrl,
    siteName: 'CeForBE',
    images: ['/og-image.png'],
    locale: 'fr_BJ',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'Centre de Formation Biblique Esdras (CeForBE)',
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  email: 'contact@ceforbe.com',
  telephone: '+2290196003981',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Sèkandji, 4ème VONS après le marché',
    addressLocality: 'Sèmé-Podji',
    postalCode: '06 BP 2814',
    addressRegion: 'Ouémé',
    addressCountry: 'BJ',
  },
  foundingDate: '2024-06-08',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <LanguageProvider>
          <MotionProvider>
            <a href="#contenu-principal" className="skip-link">
              Aller au contenu principal
            </a>
            <div className="flex flex-col min-h-screen">
              <Header />
              <main id="contenu-principal" className="flex-grow">
                {children}
              </main>
              <Footer />
            </div>
            <WhatsAppButton />
          </MotionProvider>
        </LanguageProvider>
        <Script
          src="https://apps.abacus.ai/chatllm/appllm-lib.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
