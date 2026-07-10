'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useTranslation } from '@/hooks/use-translation';

export function ContactForm() {
  const { t, locale } = useTranslation();
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    sujet: '',
    message: '',
    website: '', // honeypot anti-robots : doit rester vide
  });
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e?.preventDefault?.();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, consentement: consent }),
      });

      if (response?.ok) {
        setStatus('success');
        setFormData({
          nom: '',
          email: '',
          telephone: '',
          sujet: '',
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
        {t?.contact?.form ?? 'Formulaire de Contact'}
      </h2>

      <div aria-live="polite" role="status">
        {status === 'success' && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-3">
            <CheckCircle className="text-green-600 flex-shrink-0" size={24} aria-hidden="true" />
            <p className="text-green-800">{t?.contact?.success ?? 'Message envoyé !'}</p>
          </div>
        )}
        {status === 'error' && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-3">
            <AlertCircle className="text-red-600 flex-shrink-0" size={24} aria-hidden="true" />
            <p className="text-red-800">{t?.contact?.error ?? 'Erreur'}</p>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Honeypot : invisible pour les humains, rempli par les robots */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="contact-website">Ne pas remplir ce champ</label>
          <input
            type="text"
            id="contact-website"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            value={formData?.website ?? ''}
            onChange={(e) => setFormData({ ...formData, website: e?.target?.value ?? '' })}
          />
        </div>

        <div>
          <label htmlFor="contact-nom" className="block text-sm font-medium text-gray-700 mb-2">
            {t?.contact?.name ?? 'Nom'} *
          </label>
          <input
            type="text"
            id="contact-nom"
            name="nom"
            autoComplete="name"
            required
            maxLength={120}
            value={formData?.nom ?? ''}
            onChange={(e) => setFormData({ ...formData, nom: e?.target?.value ?? '' })}
            className={inputClass}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <div>
            <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 mb-2">
              {t?.contact?.email ?? 'Email'} *
            </label>
            <input
              type="email"
              id="contact-email"
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
            <label htmlFor="contact-telephone" className="block text-sm font-medium text-gray-700 mb-2">
              {t?.contact?.phone ?? 'Téléphone'}
            </label>
            <input
              type="tel"
              id="contact-telephone"
              name="telephone"
              autoComplete="tel"
              inputMode="tel"
              maxLength={30}
              value={formData?.telephone ?? ''}
              onChange={(e) => setFormData({ ...formData, telephone: e?.target?.value ?? '' })}
              className={inputClass}
            />
          </div>
        </div>

        <div>
          <label htmlFor="contact-sujet" className="block text-sm font-medium text-gray-700 mb-2">
            {t?.contact?.subject ?? 'Sujet'} *
          </label>
          <input
            type="text"
            id="contact-sujet"
            name="sujet"
            required
            maxLength={200}
            value={formData?.sujet ?? ''}
            onChange={(e) => setFormData({ ...formData, sujet: e?.target?.value ?? '' })}
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700 mb-2">
            {t?.contact?.message ?? 'Message'} *
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={5}
            maxLength={5000}
            value={formData?.message ?? ''}
            onChange={(e) => setFormData({ ...formData, message: e?.target?.value ?? '' })}
            className={`${inputClass} resize-none`}
          />
        </div>

        <div className="flex items-start space-x-3">
          <input
            type="checkbox"
            id="contact-consentement"
            name="consentement"
            required
            checked={consent}
            onChange={(e) => setConsent(e?.target?.checked ?? false)}
            className="mt-1 h-4 w-4 flex-shrink-0 rounded border-gray-300 text-blue-900 focus:ring-blue-500"
          />
          <label htmlFor="contact-consentement" className="text-sm text-gray-600">
            {t?.contact?.consent ??
              "J'accepte que mes informations soient utilisées uniquement pour traiter ma demande."}{' '}
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
              : (t?.contact?.send ?? 'Envoyer')}
          </span>
        </button>
      </form>
    </div>
  );
}
