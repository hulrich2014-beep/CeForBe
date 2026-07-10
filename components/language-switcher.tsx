'use client';

import { Globe } from 'lucide-react';
import { useTranslation } from '@/hooks/use-translation';

export function LanguageSwitcher() {
  const { locale, setLocale } = useTranslation();

  return (
    <button
      onClick={() => setLocale?.(locale === 'fr' ? 'en' : 'fr')}
      className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-blue-900 text-white hover:bg-blue-800 transition-colors text-sm font-medium shadow-md"
      aria-label="Switch language"
    >
      <Globe size={18} />
      <span className="uppercase">{locale === 'fr' ? 'EN' : 'FR'}</span>
    </button>
  );
}