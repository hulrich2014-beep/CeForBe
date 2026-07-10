'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useTranslation } from '@/hooks/use-translation';
import { LanguageSwitcher } from './language-switcher';

export function Header() {
  const pathname = usePathname();
  const { t, locale } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Fermeture du menu mobile à la touche Échap (accessibilité clavier).
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [mobileMenuOpen]);

  const navItems = [
    { href: '/', label: t?.nav?.home ?? 'Accueil' },
    { href: '/historique', label: t?.nav?.history ?? 'Historique' },
    { href: '/a-propos', label: t?.nav?.about ?? 'À Propos' },
    { href: '/formations', label: t?.nav?.formations ?? 'Formations' },
    { href: '/planning', label: t?.nav?.planning ?? 'Planning 2026' },
    { href: '/contact', label: t?.nav?.contact ?? 'Contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname?.startsWith?.(href) ?? false;
  };

  const menuLabel =
    locale === 'en'
      ? mobileMenuOpen
        ? 'Close menu'
        : 'Open menu'
      : mobileMenuOpen
        ? 'Fermer le menu'
        : 'Ouvrir le menu';

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <div className="relative w-14 h-14 sm:w-16 sm:h-16">
              <Image
                src="/logo.png"
                alt="Logo du Centre de Formation Biblique Esdras (CeForBE)"
                fill
                sizes="64px"
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-bold text-blue-900 leading-tight">CeForBE</span>
              <span className="text-xs text-gray-600 hidden sm:block">Formation Biblique</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Navigation principale">
            {navItems?.map?.((item) => (
              <Link
                key={item?.href ?? ''}
                href={item?.href ?? '/'}
                aria-current={isActive(item?.href ?? '') ? 'page' : undefined}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(item?.href ?? '')
                    ? 'bg-blue-900 text-white shadow-md'
                    : 'text-gray-700 hover:bg-blue-50 hover:text-blue-900'
                }`}
              >
                {item?.label ?? ''}
              </Link>
            )) ?? null}
            <LanguageSwitcher />
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-3 lg:hidden">
            <LanguageSwitcher />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-700 hover:bg-blue-50 transition-colors"
              aria-label={menuLabel}
              aria-expanded={mobileMenuOpen}
              aria-controls="menu-mobile"
            >
              {mobileMenuOpen ? (
                <X size={24} aria-hidden="true" />
              ) : (
                <Menu size={24} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav id="menu-mobile" className="lg:hidden py-4 border-t border-gray-200" aria-label="Navigation principale">
            {navItems?.map?.((item) => (
              <Link
                key={item?.href ?? ''}
                href={item?.href ?? '/'}
                onClick={() => setMobileMenuOpen(false)}
                aria-current={isActive(item?.href ?? '') ? 'page' : undefined}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                  isActive(item?.href ?? '')
                    ? 'bg-blue-900 text-white'
                    : 'text-gray-700 hover:bg-blue-50'
                }`}
              >
                {item?.label ?? ''}
              </Link>
            )) ?? null}
          </nav>
        )}
      </div>
    </header>
  );
}
