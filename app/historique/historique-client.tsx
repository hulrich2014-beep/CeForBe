'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Building, Award } from 'lucide-react';
import { useTranslation } from '@/hooks/use-translation';
import { useInView } from 'react-intersection-observer';

export function HistoriqueClient() {
  const { t } = useTranslation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const timeline = [
    {
      year: '1990',
      title: t?.history?.year1990 ?? '1990',
      desc: t?.history?.desc1990 ?? 'Appel au ministère',
      icon: Award,
    },
    {
      year: '1994',
      title: t?.history?.year1994 ?? '1994',
      desc: t?.history?.desc1994 ?? 'Acquisition parcelle',
      icon: Building,
    },
    {
      year: '27 Décembre 2020',
      title: t?.history?.year2020 ?? '27 Décembre 2020',
      desc: t?.history?.desc2020 ?? 'Démarrage travaux',
      icon: CheckCircle,
    },
    {
      year: '8 Juin 2024',
      title: t?.history?.year2024 ?? '8 Juin 2024',
      desc: t?.history?.desc2024 ?? 'Inauguration',
      icon: CheckCircle,
    },
  ];

  const steps = [
    {
      title: t?.history?.step1 ?? 'Étape 1',
      status: t?.history?.step1status ?? '',
    },
    {
      title: t?.history?.step2 ?? 'Étape 2',
      status: t?.history?.step2status ?? '',
    },
    {
      title: t?.history?.step3 ?? 'Étape 3',
      status: t?.history?.step3status ?? '',
    },
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
            {t?.history?.title ?? 'Historique du Centre'}
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 italic">
            {t?.history?.subtitle ?? 'Dieu nous a fait grâce'}
          </p>
        </motion.div>
      </div>

      {/* Timeline */}
      <section ref={ref} className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-5 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 text-center mb-5 sm:mb-8">
          {t?.history?.journey ?? 'Notre Parcours'}
        </h2>

        <div className="relative">
          {/* Ligne verticale : à gauche sur mobile, centrée sur desktop */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-blue-200 transform md:-translate-x-1/2" aria-hidden="true"></div>

          {timeline?.map?.((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex items-center mb-6 sm:mb-10 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* pl-12 sur mobile pour dégager la carte de la ligne et du point */}
              <div
                className={`w-full pl-12 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pl-12' : 'md:pl-0 md:pr-12'
                }`}
              >
                <div className="bg-white p-5 sm:p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                      <item.icon className="text-blue-900" size={24} aria-hidden="true" />
                    </div>
                    <span className="text-xl sm:text-2xl font-bold text-blue-900">{item?.year ?? ''}</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{item?.desc ?? ''}</p>
                </div>
              </div>

              {/* Point central : aligné sur la ligne */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-blue-900 rounded-full transform -translate-x-1/2 md:-translate-x-1/2 border-4 border-white" aria-hidden="true"></div>
            </motion.div>
          )) ?? null}
        </div>
      </section>

      {/* Three Steps */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-5 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-900 text-center mb-5 sm:mb-8">
          {t?.history?.threeSteps ?? 'Nos Trois Étapes'}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
          {steps?.map?.((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-blue-900 text-white rounded-full font-bold text-xl mb-4">
                {index + 1}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-blue-900 mb-4">{step?.title ?? ''}</h3>
              <p className="text-gray-700">{step?.status ?? ''}</p>
            </motion.div>
          )) ?? null}
        </div>
      </section>
    </div>
  );
}
