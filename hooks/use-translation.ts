'use client';

import { useLanguage } from '@/lib/i18n/context';
import { translations } from '@/lib/i18n/translations';

export function useTranslation() {
  const { locale, setLocale } = useLanguage();
  const t = translations?.[locale] ?? translations.fr;
  
  return { t, locale, setLocale };
}