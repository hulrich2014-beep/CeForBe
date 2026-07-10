'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useTranslation } from '@/hooks/use-translation';

export function InscriptionForm() {
  const { t, locale } = useTranslation();
  const [formData, setFormData] = useState({
    prenom: '',
    nom: '',
    email: '',
    telephone: '',
    formation: '',
    message: '',
    website: '', // honeypot anti-robots : doit rester vide
  });
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const formations = [
    { value: 'cfbp', label: t?.inscription?.cfbp ?? 'CFBP - Formation pour Pasteurs (520h)' },
    { value: 'fbre', label: t?.inscription?.fbre ?? 'FBRE - Formation pour Responsables (400h)' },
    { value: 'teleo_tier1', label: t?.inscription?.teleoTier1 ?? 'TELEO University - Niveau 1' },
    { value: 'teleo_tier2', label: t?.inscription?.teleoTier2 ?? 'TELEO University - Niveau 2' },
    { value: 'mfbap', label: t?.inscription?.mfbap ?? 'MFB-A-P - Formation Agro-Pastoral' },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e?.preventDefault?.();
    setStatus('loading');

    try {
      const response = await fetch('/api/inscription', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, langue: locale, consentement: consent }),
      });

      if (response?.ok) {
        setStatus('success');
        setFormData({
          prenom: '',
          nom: '',
          email: '',
          telephone: '',
          formation: '',
          message: '',
          website: '',
        });
        setConsent(false);
        setTimeout(() => setStatus('idle'), 8000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 8000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 8000);
    }
  };

  const inputClass =
    'w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all';

  return (
    <div className="bg-white rounded-2xl shadow-xl p-5 sm:p-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-4 sm:mb-6">
        {t?.inscription?.title ?? 'Inscription en ligne'}
      </h2>
      <p className="text-gray-600 mb-6 sm:mb-8">
        {t?.inscription?.subtitle ?? 'Inscrivez-vous à nos formations'}
      </p>

      <div aria-live="polite" role="status">
        {status === 'success' && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-3">
            <CheckCircle className="text-green-600 flex-shrink-0" size={24} aria-hidden="true" />
            <p className="text-green-800">{t?.inscription?.success ?? 'Inscription réussie !'}</p>
          </div>
        )}
        {status === 'error' && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-3">
            <AlertCircle className="text-red-600 flex-shrink-0" size={24} aria-hidden="true" />
            <p className="text-red-800">{t?.inscription?.error ?? 'Erreur'}</p>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Honeypot : invisible pour les humains, rempli par les robots */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="inscription-website">Ne pas remplir ce champ</label>
          <input
            type="text"
            id="inscription-website"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            value={formData?.website ?? ''}
            onChange={(e) => setFormData({ ...formData, website: e?.target?.value ?? '' })}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <div>
            <label htmlFor="inscription-prenom" className="block text-sm font-medium text-gray-700 mb-2">
              {t?.inscription?.firstName ?? 'Prénom'} *
            </label>
            <input
              type="text"
              id="inscription-prenom"
              name="prenom"
              autoComplete="given-name"
              required
              maxLength={120}
              value={formData?.prenom ?? ''}
              onChange={(e) => setFormData({ ...formData, prenom: e?.target?.value ?? '' })}
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="inscription-nom" className="block text-sm font-medium text-gray-700 mb-2">
              {t?.inscription?.lastName ?? 'Nom'} *
            </label>
            <input
              type="text"
              id="inscription-nom"
              name="nom"
              autoComplete="family-name"
              required
              maxLength={120}
              value={formData?.nom ?? ''}
              onChange={(e) => setFormData({ ...formData, nom: e?.target?.value ?? '' })}
              className={inputClass}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <div>
            <label htmlFor="inscription-email" className="block text-sm font-medium text-gray-700 mb-2">
              {t?.inscription?.email ?? 'Email'} *
            </label>
            <input
              type="email"
              id="inscription-email"
              name="email"
              autoComplete="email"
              required
              maxLength={200}
              value={formData?.email ?? ''}
              onChange={(e) => setFormData({ ...formData, email: e?.target?.value ?? '' })}
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="inscription-telephone" className="block text-sm font-medium text-gray-700 mb-2">
              {t?.inscription?.phone ?? 'Téléphone'} *
            </label>
            <input
              type="tel"
              id="inscription-telephone"
              name="telephone"
              autoComplete="tel"
              inputMode="tel"
              required
              maxLength={30}
              value={formData?.telephone ?? ''}
              onChange={(e) => setFormData({ ...formData, telephone: e?.target?.value ?? '' })}
              className={inputClass}
            />
          </div>
        </div>

        <div>
          <label htmlFor="inscription-formation" className="block text-sm font-medium text-gray-700 mb-2">
            {t?.inscription?.formation ?? 'Formation'} *
          </label>
          <select
            id="inscription-formation"
            name="formation"
            required
            value={formData?.formation ?? ''}
            onChange={(e) => setFormData({ ...formData, formation: e?.target?.value ?? '' })}
            className={`${inputClass} bg-white`}
          >
            <option value="">{t?.inscription?.selectFormation ?? 'Sélectionnez'}</option>
            {formations?.map?.((f) => (
              <option key={f?.value ?? ''} value={f?.value ?? ''}>
                {f?.label ?? ''}
              </option>
            )) ?? null}
          </select>
        </div>

        <div>
          <label htmlFor="inscription-message" className="block text-sm font-medium text-gray-700 mb-2">
            {t?.inscription?.message ?? 'Message'}
          </label>
          <textarea
            id="inscription-message"
            name="message"
            rows={4}
            maxLength={5000}
            value={formData?.message ?? ''}
            onChange={(e) => setFormData({ ...formData, message: e?.target?.value ?? '' })}
            className={`${inputClass} resize-none`}
          />
        </div>

        <div className="flex items-start space-x-3">
          <input
            type="checkbox"
            id="inscription-consentement"
            name="consentement"
            required
            checked={consent}
            onChange={(e) => setConsent(e?.target?.checked ?? false)}
            className="mt-1 h-4 w-4 flex-shrink-0 rounded border-gray-300 text-blue-900 focus:ring-blue-500"
          />
          <label htmlFor="inscription-consentement" className="text-sm text-gray-600">
            {t?.inscription?.consent ??
              "J'accepte que mes informations soient utilisées uniquement pour traiter mon inscription."}{' '}
            <Link href="/politique-de-confidentialite" className="text-blue-900 underline hover:text-blue-700">
              {locale === 'en' ? 'Privacy policy' : 'Politique de confidentialité'}
            </Link>
          </label>
        </div>

        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full bg-gradient-to-r from-blue-900 to-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-3 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Send size={20} aria-hidden="true" />
          <span>
            {status === 'loading'
              ? locale === 'en'
                ? 'Sending…'
                : 'Envoi en cours…'
              : (t?.inscription?.submit ?? 'S\'inscrire')}
          </span>
        </button>
      </form>
    </div>
  );
}
