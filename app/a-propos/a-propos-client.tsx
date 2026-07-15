'use client';

import { motion } from 'framer-motion';
import { User, Building2, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useTranslation } from '@/hooks/use-translation';
import { useInView } from 'react-intersection-observer';

export function AProposClient() {
  const { t } = useTranslation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const leadershipTeam = [
    { role: t?.about?.director ?? 'Directeur', name: t?.about?.directorName ?? 'Pasteur HOUNGBEME Augustin' },
    { role: t?.about?.deputyDirector ?? 'Directeur Adjoint', name: t?.about?.deputyDirectorName ?? 'HOUNGBEME Ezéchiel' },
  ];

  const cfbpTeam = [
    { role: t?.about?.coordinator ?? 'Coordonnateur', name: 'HOUNGBEME Augustin' },
    { role: t?.about?.secretary ?? 'Secrétaire Général', name: 'MARTIN Julios' },
    { role: t?.about?.treasurer ?? 'Trésorier Général', name: 'ASSOGBA Z. Eric' },
    { role: t?.about?.organizer ?? 'Organisateur', name: 'ZANMENOU Ulrich' },
  ];

  const mfbapTeam = [
    { role: t?.about?.president ?? 'Président', name: 'HOUNGBEME Augustin' },
    { role: t?.about?.vicePresident ?? 'Vice Président', name: 'AHLONSOU Joseph' },
    { role: t?.about?.secretary ?? 'Secrétaire Général', name: 'LOKO Adam' },
    { role: t?.about?.secretaryAdj ?? 'Secrétaire Général Adjoint', name: 'PEDRO Odile' },
    { role: t?.about?.treasurer ?? 'Trésorier Général', name: 'GNIGBE Bernard' },
    { role: t?.about?.treasurerAdj ?? 'Trésorier Général Adjoint', name: 'AHLONSOU Madeleine' },
  ];

  const infrastructure = [
    { icon: Building2, text: t?.about?.infra1 ?? 'Secrétariat' },
    { icon: Building2, text: t?.about?.infra2 ?? 'Bureau CFBP/FBRE' },
    { icon: Building2, text: t?.about?.infra3 ?? 'Bureau T-Net / TELEO University' },
    { icon: Building2, text: t?.about?.infra4 ?? 'Bureau MFB-A-P' },
    { icon: Building2, text: t?.about?.infra5 ?? 'Bureau CeForBE' },
    { icon: Building2, text: t?.about?.infra6 ?? 'Salle de conférence' },
    { icon: Building2, text: t?.about?.infra7 ?? 'Jardin et Poulailler' },
    { icon: Building2, text: t?.about?.infra8 ?? 'Dortoirs' },
  ];

  return (
    <div className="min-h-screen py-8 sm:py-12 lg:py-16">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-6 sm:mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-900 mb-4">
            {t?.about?.title ?? 'À Propos du CeForBE'}
          </h1>
          <p className="text-lg sm:text-xl text-gray-600">
            {t?.about?.subtitle ?? 'Notre Équipe et Infrastructure'}
          </p>
        </motion.div>
      </div>

      {/* Leadership */}
      <section ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-5 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 text-center mb-5 sm:mb-8">
          {t?.about?.leadership ?? 'Direction du Centre'}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 max-w-3xl mx-auto">
          {leadershipTeam?.map?.((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gradient-to-br from-blue-900 to-blue-700 text-white p-6 sm:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-white/20 p-4 rounded-full flex-shrink-0">
                  <User size={32} aria-hidden="true" />
                </div>
                <div>
                  <p className="text-blue-100 text-sm mb-1">{member?.role ?? ''}</p>
                  <h3 className="text-lg sm:text-xl font-bold">{member?.name ?? ''}</h3>
                </div>
              </div>
            </motion.div>
          )) ?? null}
        </div>
      </section>

      {/* CFBP Team */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-5 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 text-center mb-5 sm:mb-8">
          {t?.about?.cfbpTeam ?? 'Équipe CFBP/FBRE'}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {cfbpTeam?.map?.((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow text-center"
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="text-blue-900" size={28} aria-hidden="true" />
              </div>
              <p className="text-blue-600 text-sm font-semibold mb-2">{member?.role ?? ''}</p>
              <h3 className="text-gray-800 font-bold">{member?.name ?? ''}</h3>
            </motion.div>
          )) ?? null}
        </div>
      </section>

      {/* MFB-AP Team */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-5 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 text-center mb-5 sm:mb-8">
          {t?.about?.mfbapTeam ?? 'Équipe MFB-AP'}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {mfbapTeam?.map?.((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-amber-50 to-amber-100 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow text-center"
            >
              <div className="bg-amber-200 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="text-amber-900" size={24} aria-hidden="true" />
              </div>
              <p className="text-amber-700 text-sm font-semibold mb-2">{member?.role ?? ''}</p>
              <h3 className="text-gray-800 font-bold">{member?.name ?? ''}</h3>
            </motion.div>
          )) ?? null}
        </div>
      </section>

      {/* Infrastructure */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-5 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 text-center mb-5 sm:mb-8">
          {t?.about?.infrastructure ?? 'Infrastructure'}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {infrastructure?.map?.((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-5 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow flex items-center space-x-4"
            >
              <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                <item.icon className="text-blue-900" size={24} aria-hidden="true" />
              </div>
              <p className="text-gray-700 font-medium">{item?.text ?? ''}</p>
            </motion.div>
          )) ?? null}
        </div>
      </section>

      {/* Contact Info */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-blue-900 to-blue-700 text-white rounded-2xl p-6 sm:p-8 shadow-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">
            {t?.about?.contact ?? 'Coordonnées'}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4">
              <MapPin size={24} className="flex-shrink-0 mt-1" aria-hidden="true" />
              <div>
                <h3 className="font-bold mb-2">{t?.about?.address ?? 'Adresse'}</h3>
                <p className="text-blue-100">{t?.about?.addressText ?? ''}</p>
                <p className="text-blue-100 mt-2">{t?.about?.locationText ?? ''}</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Phone size={24} className="flex-shrink-0 mt-1" aria-hidden="true" />
              <div>
                <h3 className="font-bold mb-2">Contact</h3>
                <a href="tel:+2290196003981" className="block text-blue-100 hover:text-white transition-colors">
                  +229 01 96 00 39 81
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Mail size={24} className="flex-shrink-0 mt-1" aria-hidden="true" />
              <div>
                <h3 className="font-bold mb-2">Email</h3>
                <a
                  href="mailto:contact@ceforbe.com"
                  className="text-blue-100 hover:text-white transition-colors break-all"
                >
                  contact@ceforbe.com
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Clock size={24} className="flex-shrink-0 mt-1" aria-hidden="true" />
              <div>
                <h3 className="font-bold mb-2">{t?.about?.hours ?? 'Horaires'}</h3>
                <p className="text-blue-100">{t?.about?.hoursText ?? ''}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
