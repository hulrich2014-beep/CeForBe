'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BookOpen, Users, GraduationCap, ChevronRight, Award, Building2 } from 'lucide-react';
import { useTranslation } from '@/hooks/use-translation';
import { useInView } from 'react-intersection-observer';

export function HomeClient() {
  const { t, locale } = useTranslation();

  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [missionRef, missionInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [entitiesRef, entitiesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [galleryRef, galleryInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const photos =
    locale === 'en'
      ? [
          { src: '/photo1.jpg', alt: 'Ribbon-cutting ceremony at the inauguration of the CeForBE center, June 8, 2024' },
          { src: '/photo2.jpg', alt: 'Guests and church leaders at the CeForBE inauguration, June 8, 2024' },
          { src: '/photo3.jpg', alt: 'Dedication service during the CeForBE inauguration, June 8, 2024' },
          { src: '/photo4.jpg', alt: 'The CeForBE community gathered for the inauguration, June 8, 2024' },
        ]
      : [
          { src: '/photo1.jpg', alt: 'Coupure du ruban lors de l\'inauguration du centre CeForBE, le 8 juin 2024' },
          { src: '/photo2.jpg', alt: 'Invités et responsables d\'église à l\'inauguration du CeForBE, le 8 juin 2024' },
          { src: '/photo3.jpg', alt: 'Culte de dédicace pendant l\'inauguration du CeForBE, le 8 juin 2024' },
          { src: '/photo4.jpg', alt: 'La communauté du CeForBE réunie pour l\'inauguration, le 8 juin 2024' },
        ];

  const entities = [
    {
      icon: BookOpen,
      title: t?.home?.entity1 ?? 'CFBP/FBRE',
      desc: t?.home?.entity1desc ?? '',
      link: '/formations#cfbp',
    },
    {
      icon: GraduationCap,
      title: t?.home?.entity2 ?? 'TELEO University',
      desc: t?.home?.entity2desc ?? '',
      link: '/formations#teleo',
    },
    {
      icon: Users,
      title: t?.home?.entity3 ?? 'MFB-A-P',
      desc: t?.home?.entity3desc ?? '',
      link: '/formations#mfbap',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section ref={heroRef} className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-14 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <div className="absolute inset-0 bg-[url('/logo.png')] bg-center bg-no-repeat bg-contain"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {t?.home?.title ?? 'Centre de Formation Biblique Esdras'}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              {t?.home?.subtitle ?? 'Former les serviteurs de Dieu'}
            </p>
            <div className="bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-2xl p-4 sm:p-6 max-w-2xl mx-auto mb-8">
              <p className="text-base sm:text-lg md:text-xl italic mb-2">
                "{t?.home?.verse ?? 'Esdras avait appliqué son cœur'}"
              </p>
              <p className="text-blue-200">{t?.home?.verseRef ?? 'Esdras 7:10'}</p>
            </div>
            <p className="text-amber-300 font-semibold mb-8 text-base sm:text-lg">
              {t?.home?.inaugurated ?? 'Inauguré le 8 Juin 2024'}
            </p>
            <Link
              href="/formations"
              className="inline-flex items-center space-x-2 bg-white text-blue-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold hover:bg-amber-300 hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <span>{t?.home?.discover ?? 'Découvrir nos formations'}</span>
              <ChevronRight size={20} aria-hidden="true" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section ref={missionRef} className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={missionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow"
            >
              <div className="flex items-center space-x-3 mb-4">
                <Award className="text-blue-900 flex-shrink-0" size={32} aria-hidden="true" />
                <h2 className="text-2xl sm:text-3xl font-bold text-blue-900">{t?.home?.mission ?? 'Notre Mission'}</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                {t?.home?.missionText ?? 'Former les pasteurs et responsables'}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={missionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-amber-50 to-amber-100 p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow"
            >
              <div className="flex items-center space-x-3 mb-4">
                <Building2 className="text-amber-900 flex-shrink-0" size={32} aria-hidden="true" />
                <h2 className="text-2xl sm:text-3xl font-bold text-amber-900">{t?.home?.vision ?? 'Notre Vision'}</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                {t?.home?.visionText ?? 'Construire un Centre de référence'}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Three Entities */}
      <section ref={entitiesRef} className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={entitiesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-900 mb-4">
              {t?.home?.threeEntities ?? 'Trois Entités de Formation'}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {entities?.map?.((entity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={entitiesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Link href={entity?.link ?? '/formations'}>
                  <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 h-full group cursor-pointer transform hover:-translate-y-2">
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-900 transition-colors">
                      <entity.icon className="text-blue-900 group-hover:text-white transition-colors" size={32} aria-hidden="true" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-blue-900 mb-4 group-hover:text-amber-600 transition-colors">
                      {entity?.title ?? ''}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">{entity?.desc ?? ''}</p>
                    <div className="flex items-center text-blue-900 font-semibold group-hover:text-amber-600 transition-colors">
                      <span>{t?.home?.learnMore ?? 'En savoir plus'}</span>
                      <ChevronRight size={20} className="ml-1 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            )) ?? null}
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-900 mb-4">
              {t?.home?.infrastructure ?? 'Infrastructure Moderne'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 sm:p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-4">{t?.home?.level1 ?? '1er Niveau'}</h3>
              <p className="text-gray-700">{t?.home?.level1items ?? ''}</p>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-6 sm:p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl sm:text-2xl font-bold text-amber-900 mb-4">{t?.home?.level2 ?? '2ème Niveau'}</h3>
              <p className="text-gray-700">{t?.home?.level2items ?? ''}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section ref={galleryRef} className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={galleryInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-900 mb-4">
              {t?.home?.gallery ?? 'Galerie Photos'}
            </h2>
            <p className="text-gray-600 text-base sm:text-lg">{t?.home?.gallerySubtitle ?? 'Inauguration du 8 Juin 2024'}</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {photos?.map?.((photo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={galleryInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative aspect-[4/3] bg-gray-200 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow group"
              >
                <Image
                  src={photo?.src ?? ''}
                  alt={photo?.alt ?? 'Photo'}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </motion.div>
            )) ?? null}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
            {t?.home?.ctaTitle ?? 'Inscrivez-vous dès aujourd\'hui'}
          </h2>
          <p className="text-lg sm:text-xl text-blue-100 mb-8">
            {t?.home?.ctaSubtitle ?? 'Rejoignez nos formations bibliques et ministérielles'}
          </p>
          <Link
            href="/formations#inscription"
            className="inline-flex items-center space-x-2 bg-white text-blue-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold hover:bg-amber-300 hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            <span>{t?.formations?.register ?? 'S\'inscrire'}</span>
            <ChevronRight size={20} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}
