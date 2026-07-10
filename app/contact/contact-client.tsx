'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useTranslation } from '@/hooks/use-translation';
import { useInView } from 'react-intersection-observer';
import { ContactForm } from '@/components/contact-form';

type ContactLine = { text: string; href?: string };

interface ContactInfoItem {
  icon: typeof MapPin;
  title: string;
  content: ContactLine[];
}

export function ContactClient() {
  const { t } = useTranslation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const contactInfo: ContactInfoItem[] = [
    {
      icon: MapPin,
      title: t?.contact?.address ?? 'Adresse',
      content: [
        { text: t?.contact?.addressText ?? '06 B.P. 2814 Akpakpa, Cotonou, République du Bénin' },
        { text: t?.contact?.locationText ?? '4ème VONS à droite après le marché Sèkandji' },
      ],
    },
    {
      icon: Phone,
      title: t?.contact?.phone1 ?? 'Téléphone',
      content: [
        { text: '+229 01 95 40 26 38', href: 'tel:+2290195402638' },
        { text: '+229 01 96 00 39 81', href: 'tel:+2290196003981' },
      ],
    },
    {
      icon: Mail,
      title: t?.contact?.emailLabel ?? 'Email',
      content: [
        {
          text: 'contact@ceforbe.com',
          href: 'mailto:contact@ceforbe.com',
        },
      ],
    },
    {
      icon: Clock,
      title: t?.contact?.hours ?? 'Horaires',
      content: [{ text: t?.contact?.hoursText ?? 'Lundi au Vendredi, 09h-12h et 15h-17h' }],
    },
  ];

  return (
    <div className="min-h-screen py-12 sm:py-16 lg:py-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10 sm:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-900 mb-4">
            {t?.contact?.title ?? 'Contactez-nous'}
          </h1>
          <p className="text-lg sm:text-xl text-gray-600">
            {t?.contact?.subtitle ?? 'Nous sommes à votre disposition'}
          </p>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <ContactForm />
          </motion.div>

          {/* Contact Info */}
          <div ref={ref} className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-blue-900 to-blue-700 text-white rounded-2xl p-6 sm:p-8 shadow-xl mb-6"
            >
              <h2 className="text-xl sm:text-2xl font-bold mb-6">{t?.contact?.info ?? 'Informations'}</h2>

              <div className="space-y-6">
                {contactInfo?.map?.((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="bg-white/20 p-3 rounded-lg flex-shrink-0">
                      <item.icon size={24} aria-hidden="true" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-bold text-lg mb-2">{item?.title ?? ''}</h3>
                      {item?.content?.map?.((line, idx) =>
                        line?.href ? (
                          <a
                            key={idx}
                            href={line.href}
                            className="block text-blue-100 hover:text-white transition-colors mb-1 break-all"
                          >
                            {line?.text ?? ''}
                          </a>
                        ) : (
                          <p key={idx} className="text-blue-100 mb-1">
                            {line?.text ?? ''}
                          </p>
                        )
                      ) ?? null}
                    </div>
                  </motion.div>
                )) ?? null}
              </div>
            </motion.div>

            {/* Google Maps Embed */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              <div className="aspect-video bg-gray-200 relative">
                <iframe
                  src="https://maps.google.com/maps?q=March%C3%A9%20S%C3%A8kandji%2C%20S%C3%A8m%C3%A9-Podji%2C%20B%C3%A9nin&z=15&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Carte : localisation du CeForBE près du marché Sèkandji, Sèmé-Podji"
                ></iframe>
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="font-bold text-gray-800 mb-2">{t?.contact?.location ?? 'Localisation'}</h3>
                <p className="text-gray-600">
                  4ème VONS à droite après le marché Sèkandji, Commune de Sèmé-Podji
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
