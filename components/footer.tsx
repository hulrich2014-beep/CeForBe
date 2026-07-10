'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useTranslation } from '@/hooks/use-translation';

export function Footer() {
  const { t, locale } = useTranslation();
  const currentYear = new Date()?.getFullYear?.() ?? 2026;

  return (
    <footer className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t?.footer?.about ?? 'À propos'}</h3>
            <p className="text-blue-100 text-sm leading-relaxed">
              {t?.footer?.aboutText ?? 'Centre de référence pour la formation biblique et ministérielle au Bénin.'}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Navigation</h3>
            <nav className="space-y-2" aria-label="Navigation de pied de page">
              <Link href="/" className="block text-blue-100 hover:text-white transition-colors text-sm">
                {t?.nav?.home ?? 'Accueil'}
              </Link>
              <Link href="/formations" className="block text-blue-100 hover:text-white transition-colors text-sm">
                {t?.nav?.formations ?? 'Formations'}
              </Link>
              <Link href="/planning" className="block text-blue-100 hover:text-white transition-colors text-sm">
                {t?.nav?.planning ?? 'Planning 2026'}
              </Link>
              <Link href="/contact" className="block text-blue-100 hover:text-white transition-colors text-sm">
                {t?.nav?.contact ?? 'Contact'}
              </Link>
              <Link href="/mentions-legales" className="block text-blue-100 hover:text-white transition-colors text-sm">
                {locale === 'en' ? 'Legal notice' : 'Mentions légales'}
              </Link>
              <Link href="/politique-de-confidentialite" className="block text-blue-100 hover:text-white transition-colors text-sm">
                {locale === 'en' ? 'Privacy policy' : 'Politique de confidentialité'}
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t?.footer?.contact ?? 'Contact'}</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="mt-1 flex-shrink-0" aria-hidden="true" />
                <p className="text-blue-100">
                  06 B.P. 2814 Akpakpa, Cotonou, Bénin
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="flex-shrink-0" aria-hidden="true" />
                <a href="tel:+2290195402638" className="text-blue-100 hover:text-white transition-colors">
                  +229 01 95 40 26 38
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Mail size={18} className="mt-1 flex-shrink-0" aria-hidden="true" />
                <a
                  href="mailto:contact@ceforbe.com"
                  className="text-blue-100 hover:text-white transition-colors break-all"
                >
                  contact@ceforbe.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-blue-700 text-center">
          <p className="text-sm text-blue-200">
            © {currentYear} Centre de Formation Biblique Esdras (CeForBE). {t?.footer?.rights ?? 'Tous droits réservés'}.
          </p>
        </div>
      </div>
    </footer>
  );
}
