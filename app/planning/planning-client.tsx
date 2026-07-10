'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, Star } from 'lucide-react';
import { useTranslation } from '@/hooks/use-translation';
import { useInView } from 'react-intersection-observer';

export function PlanningClient() {
  const { t } = useTranslation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const planning = [
    {
      month: t?.planning?.january ?? 'Janvier',
      color: 'from-blue-500 to-blue-600',
      activities: [
        t?.planning?.january1 ?? '1-15: Inscriptions CFBP',
        t?.planning?.january2 ?? '20: Démarrage cours',
      ],
    },
    {
      month: t?.planning?.february ?? 'Février',
      color: 'from-pink-500 to-pink-600',
      activities: [
        t?.planning?.february1 ?? '18: Intimité dans le couple',
        t?.planning?.february2 ?? '28: Réunion Bureau',
      ],
    },
    {
      month: t?.planning?.march ?? 'Mars',
      color: 'from-green-500 to-green-600',
      activities: [
        t?.planning?.march1 ?? '7: Fabrication savons',
      ],
    },
    {
      month: t?.planning?.april ?? 'Avril',
      color: 'from-yellow-500 to-yellow-600',
      activities: [
        t?.planning?.april1 ?? '4: Réunion conseil',
        t?.planning?.april2 ?? '18: Animation école dimanche',
      ],
    },
    {
      month: t?.planning?.may ?? 'Mai',
      color: 'from-red-500 to-red-600',
      activities: [
        t?.planning?.may1 ?? '9: Formation Agro',
        t?.planning?.may2 ?? '25: Conférence dons spirituels',
      ],
    },
    {
      month: t?.planning?.june ?? 'Juin',
      color: 'from-purple-500 to-purple-600',
      activities: [
        t?.planning?.juneFree ?? 'Libre',
      ],
    },
    {
      month: t?.planning?.july ?? 'Juillet',
      color: 'from-indigo-500 to-indigo-600',
      activities: [
        t?.planning?.july1 ?? '25: Formation Directeurs culte',
      ],
    },
    {
      month: t?.planning?.august ?? 'Août',
      color: 'from-orange-500 to-orange-600',
      activities: [
        t?.planning?.august1 ?? '1: Orientation élèves',
        t?.planning?.august2 ?? '26: Formation langue goun',
      ],
    },
    {
      month: t?.planning?.september ?? 'Septembre',
      color: 'from-teal-500 to-teal-600',
      activities: [
        t?.planning?.september1 ?? '12: Réunion Bureau',
      ],
    },
    {
      month: t?.planning?.october ?? 'Octobre',
      color: 'from-cyan-500 to-cyan-600',
      activities: [
        t?.planning?.october1 ?? '31: Réunion conseil',
      ],
    },
    {
      month: t?.planning?.november ?? 'Novembre',
      color: 'from-amber-500 to-amber-600',
      activities: [
        t?.planning?.novemberFree ?? 'Libre',
      ],
    },
    {
      month: t?.planning?.december ?? 'Décembre',
      color: 'from-rose-500 to-rose-600',
      activities: [
        t?.planning?.december1 ?? '26: AG et retrouvailles',
      ],
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
            {t?.planning?.title ?? 'Planning 2026'}
          </h1>
          <p className="text-lg sm:text-xl text-gray-600">
            {t?.planning?.subtitle ?? 'Calendrier des activités'}
          </p>
        </motion.div>
      </div>

      {/* Graduation Highlight */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-white rounded-3xl p-6 sm:p-8 shadow-2xl text-center"
        >
          <div className="flex justify-center mb-4">
            <Star size={48} className="animate-pulse" aria-hidden="true" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">
            {t?.planning?.graduation ?? 'Première graduation du MFB-AP'}
          </h2>
          <p className="text-lg sm:text-xl font-semibold">14 Février 2026</p>
        </motion.div>
      </div>

      {/* Monthly Calendar */}
      <section ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {planning?.map?.((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: Math.min(index * 0.1, 0.5) }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow group"
            >
              <div className={`bg-gradient-to-r ${item?.color ?? 'from-gray-500 to-gray-600'} p-5 sm:p-6`}>
                <div className="flex items-center justify-between text-white">
                  <h3 className="text-xl sm:text-2xl font-bold">{item?.month ?? ''}</h3>
                  <Calendar size={32} className="group-hover:rotate-12 transition-transform" aria-hidden="true" />
                </div>
              </div>
              <div className="p-5 sm:p-6">
                <ul className="space-y-3">
                  {item?.activities?.map?.((activity, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <div className="bg-blue-100 w-2 h-2 rounded-full mt-2 flex-shrink-0" aria-hidden="true"></div>
                      <p className="text-gray-700 text-sm leading-relaxed">{activity ?? ''}</p>
                    </li>
                  )) ?? null}
                </ul>
              </div>
            </motion.div>
          )) ?? null}
        </div>
      </section>

      {/* CTA */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gradient-to-r from-blue-900 to-blue-700 text-white rounded-2xl p-6 sm:p-8 shadow-2xl text-center"
        >
          <h2 className="text-xl sm:text-2xl font-bold mb-4">
            {t?.inscription?.title ?? 'Inscrivez-vous maintenant'}
          </h2>
          <p className="text-blue-100 mb-6">
            {t?.inscription?.subtitle ?? 'Rejoignez nos formations'}
          </p>
          <Link
            href="/formations#inscription"
            className="inline-block bg-white text-blue-900 px-6 sm:px-8 py-3 rounded-full font-bold hover:bg-amber-400 hover:text-gray-900 transition-colors shadow-lg"
          >
            {t?.formations?.register ?? 'S\'inscrire'}
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
