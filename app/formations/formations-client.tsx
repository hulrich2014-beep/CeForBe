'use client';

import { motion } from 'framer-motion';
import { BookOpen, GraduationCap, Users, Award, Clock, CheckCircle, ExternalLink } from 'lucide-react';
import { useTranslation } from '@/hooks/use-translation';
import { useInView } from 'react-intersection-observer';
import { InscriptionForm } from '@/components/inscription-form';

export function FormationsClient() {
  const { t } = useTranslation();
  const [cfbpRef, cfbpInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [teleoRef, teleoInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [mfbapRef, mfbapInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const cfbpModules = [
    { num: 1, title: t?.formations?.module1 ?? 'Module 1', hours: 40 },
    { num: 2, title: t?.formations?.module2 ?? 'Module 2', hours: 60 },
    { num: 3, title: t?.formations?.module3 ?? 'Module 3', hours: 60 },
    { num: 4, title: t?.formations?.module4 ?? 'Module 4', hours: 40 },
    { num: 5, title: t?.formations?.module5 ?? 'Module 5', hours: 40 },
    { num: 6, title: t?.formations?.module6 ?? 'Module 6', hours: 40 },
    { num: 7, title: t?.formations?.module7 ?? 'Module 7', hours: 40 },
    { num: 8, title: t?.formations?.module8 ?? 'Module 8', hours: 40 },
    { num: 9, title: t?.formations?.module9 ?? 'Module 9', hours: 60 },
    { num: 10, title: t?.formations?.module10 ?? 'Module 10', hours: 60 },
  ];

  const teleoTier1 = [
    t?.formations?.teleoCert1 ?? 'Certificat de formation en Ministère Pastoral (CMP)',
    t?.formations?.teleoDip1 ?? 'Diplôme de formation en Ministère Pastoral (DMP)',
    t?.formations?.teleoLic1 ?? 'Licence en Ministère Pastoral (LMP)',
    t?.formations?.teleoMaster1 ?? 'Master en Théologie Pratique (MTP)',
  ];

  const teleoTier2 = [
    t?.formations?.teleoDip2 ?? 'Diplôme en croissance de l\'église',
    t?.formations?.teleoLic2 ?? 'Licence du Ministère en croissance',
    t?.formations?.teleoDipAdv ?? 'Diplôme d\'études supérieures avancées',
    t?.formations?.teleoMaster2 ?? 'Master du Ministère en croissance',
    t?.formations?.teleoDoc ?? 'Doctorat du Ministère (DMin)',
  ];

  const teleoBase = [
    t?.formations?.teleoCertBase ?? 'Certificat en ministère chrétien (CMC)',
    t?.formations?.teleoDipBase ?? 'Diplôme en ministère chrétien (DMC)',
  ];

  const mfbapOthers = [
    t?.formations?.mfbapOther1 ?? 'Évangélisation',
    t?.formations?.mfbapOther2 ?? 'Former conseil église',
    t?.formations?.mfbapOther3 ?? 'Dons spirituels',
    t?.formations?.mfbapOther4 ?? 'Formation moniteurs',
    t?.formations?.mfbapOther5 ?? 'Sermon biblique',
    t?.formations?.mfbapOther6 ?? 'Conseiller conjugal',
    t?.formations?.mfbapOther7 ?? 'Formation musicale',
    t?.formations?.mfbapOther8 ?? 'Formation agro-pastorale',
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
            {t?.formations?.title ?? 'Nos Formations'}
          </h1>
          <p className="text-lg sm:text-xl text-gray-600">
            {t?.formations?.subtitle ?? 'Trois entités de formation'}
          </p>
        </motion.div>
      </div>

      {/* CFBP/FBRE Section */}
      <section id="cfbp" ref={cfbpRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-20 scroll-mt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={cfbpInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-5 sm:p-8 md:p-12 shadow-2xl"
        >
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
            <div className="bg-blue-900 p-4 rounded-2xl self-start">
              <BookOpen className="text-white" size={40} aria-hidden="true" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-900">{t?.formations?.cfbpTitle ?? 'CFBP / FBRE'}</h2>
              <p className="text-gray-600 text-base sm:text-lg">{t?.formations?.cfbpFull ?? ''}</p>
            </div>
          </div>

          <div className="bg-white/50 p-5 sm:p-6 rounded-xl mb-6">
            <p className="text-gray-700 mb-2">
              <strong>{t?.formations?.cfbpFounder ?? 'Fondateur:'}</strong> Dr. Dennis J. Mock (USA)
            </p>
            <p className="text-gray-600 text-sm">
              Pasteur responsable de la formation à la First Baptist Church d'Atlanta (1985-1995).
              Fondateur et directeur du CFBP, actuellement pasteur de la Genesis Bible Church.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-4">{t?.formations?.cfbpGoal ?? 'But du CFBP/FBRE'}</h3>
            <p className="text-gray-700 leading-relaxed">
              {t?.formations?.cfbpGoalText ?? ''}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6">
            <div className="bg-white p-5 sm:p-6 rounded-xl shadow-lg">
              <h4 className="text-lg sm:text-xl font-bold text-blue-900 mb-3">{t?.formations?.cfbpProg1 ?? 'Formation Pasteurs'}</h4>
              <p className="text-gray-600 mb-3">{t?.formations?.cfbpProg1Desc ?? ''}</p>
              <div className="flex items-center space-x-2 text-blue-700 font-semibold">
                <Clock size={20} aria-hidden="true" />
                <span>520 {t?.formations?.hours ?? 'heures'}</span>
              </div>
            </div>

            <div className="bg-white p-5 sm:p-6 rounded-xl shadow-lg">
              <h4 className="text-lg sm:text-xl font-bold text-blue-900 mb-3">{t?.formations?.cfbpProg2 ?? 'Formation Responsables'}</h4>
              <p className="text-gray-600 mb-3">{t?.formations?.cfbpProg2Desc ?? ''}</p>
              <div className="flex items-center space-x-2 text-blue-700 font-semibold">
                <Clock size={20} aria-hidden="true" />
                <span>400 {t?.formations?.hours ?? 'heures'}</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg sm:text-xl font-bold text-blue-900 mb-4">{t?.formations?.cfbpModules ?? 'Modules du CFBP'}</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
              {cfbpModules?.map?.((module, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg shadow flex items-center justify-between gap-3 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center space-x-3 min-w-0">
                    <div className="bg-blue-100 w-10 h-10 rounded-full flex items-center justify-center font-bold text-blue-900 flex-shrink-0">
                      {module?.num ?? ''}
                    </div>
                    <p className="text-gray-700 font-medium text-sm">{module?.title ?? ''}</p>
                  </div>
                  <span className="text-blue-900 font-bold flex-shrink-0">{module?.hours ?? ''}h</span>
                </div>
              )) ?? null}
            </div>
          </div>
        </motion.div>
      </section>

      {/* TELEO University Section */}
      <section id="teleo" ref={teleoRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-20 scroll-mt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={teleoInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-3xl p-5 sm:p-8 md:p-12 shadow-2xl"
        >
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
            <div className="bg-amber-900 p-4 rounded-2xl self-start">
              <GraduationCap className="text-white" size={40} aria-hidden="true" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-amber-900">{t?.formations?.teleoTitle ?? 'T-Net / TELEO University'}</h2>
              <p className="text-gray-600 text-base sm:text-lg">{t?.formations?.teleoFounder ?? 'Fondé en 1991'}</p>
            </div>
          </div>

          <div className="bg-white/50 p-5 sm:p-6 rounded-xl mb-6">
            <h3 className="text-xl sm:text-2xl font-bold text-amber-900 mb-4">{t?.formations?.teleoMission ?? 'Mission'}</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              {t?.formations?.teleoMissionText ?? ''}
            </p>
            <div className="bg-amber-200/50 p-4 rounded-lg">
              <p className="text-gray-700 italic mb-2">{t?.formations?.teleoVerse ?? ''}</p>
              <p className="text-amber-900 font-semibold">{t?.formations?.teleoVerseRef ?? '2 Timothée 2:2'}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6">
            <div className="bg-white p-5 sm:p-6 rounded-xl shadow-lg">
              <h4 className="text-lg sm:text-xl font-bold text-amber-900 mb-4">{t?.formations?.teleoTier1 ?? 'Niveau 1'}</h4>
              <ul className="space-y-2">
                {teleoTier1?.map?.((item, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <CheckCircle size={20} className="text-amber-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-gray-700 text-sm">{item ?? ''}</span>
                  </li>
                )) ?? null}
              </ul>
            </div>

            <div className="bg-white p-5 sm:p-6 rounded-xl shadow-lg">
              <h4 className="text-lg sm:text-xl font-bold text-amber-900 mb-4">{t?.formations?.teleoTier2 ?? 'Niveau 2'}</h4>
              <p className="text-xs text-gray-600 mb-3 italic">{t?.formations?.teleoTier2Req ?? ''}</p>
              <ul className="space-y-2">
                {teleoTier2?.map?.((item, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <CheckCircle size={20} className="text-amber-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-gray-700 text-sm">{item ?? ''}</span>
                  </li>
                )) ?? null}
              </ul>
            </div>

            <div className="bg-white p-5 sm:p-6 rounded-xl shadow-lg">
              <h4 className="text-lg sm:text-xl font-bold text-amber-900 mb-4">{t?.formations?.teleoBase ?? 'Programmes de Base'}</h4>
              <ul className="space-y-2">
                {teleoBase?.map?.((item, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <CheckCircle size={20} className="text-amber-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-gray-700 text-sm">{item ?? ''}</span>
                  </li>
                )) ?? null}
              </ul>
            </div>
          </div>

          <div className="bg-white p-5 sm:p-6 rounded-xl shadow-lg">
            <h4 className="text-lg sm:text-xl font-bold text-amber-900 mb-4">{t?.formations?.teleoAccred ?? 'Accréditations'}</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center space-x-3">
                <Award size={24} className="text-amber-600 flex-shrink-0" aria-hidden="true" />
                <span className="text-gray-700 font-medium">{t?.formations?.teleoAccred1 ?? 'AEM'}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Award size={24} className="text-amber-600 flex-shrink-0" aria-hidden="true" />
                <span className="text-gray-700 font-medium">{t?.formations?.teleoAccred2 ?? 'ATA'}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Award size={24} className="text-amber-600 flex-shrink-0" aria-hidden="true" />
                <span className="text-gray-700 font-medium">{t?.formations?.teleoAccred3 ?? 'ICETE'}</span>
              </div>
            </div>
            <a
              href="https://www.finishprojectzero.com/transform"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center space-x-2 text-amber-900 hover:text-amber-700 font-semibold break-all"
            >
              <ExternalLink size={20} className="flex-shrink-0" aria-hidden="true" />
              <span>{t?.formations?.teleoWebsite ?? 'www.finishprojectzero.com/transform'}</span>
            </a>
          </div>
        </motion.div>
      </section>

      {/* MFB-A-P Section */}
      <section id="mfbap" ref={mfbapRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-20 scroll-mt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={mfbapInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-5 sm:p-8 md:p-12 shadow-2xl"
        >
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
            <div className="bg-green-900 p-4 rounded-2xl self-start">
              <Users className="text-white" size={40} aria-hidden="true" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-900">{t?.formations?.mfbapTitle ?? 'MFB-A-P'}</h2>
              <p className="text-gray-600 text-base sm:text-lg">{t?.formations?.mfbapFull ?? ''}</p>
            </div>
          </div>

          <div className="bg-white/50 p-5 sm:p-6 rounded-xl mb-6">
            <p className="text-gray-700 mb-4">
              <strong>{t?.formations?.mfbapCreated ?? 'Créé en 2005'}</strong>
            </p>
            <h3 className="text-xl sm:text-2xl font-bold text-green-900 mb-3">{t?.formations?.mfbapVision ?? 'Vision'}</h3>
            <p className="text-gray-700 leading-relaxed">
              {t?.formations?.mfbapVisionText ?? 'Former les Serviteurs de Dieu pour plus d\'efficacité'}
            </p>
          </div>

          <div className="bg-white p-5 sm:p-6 rounded-xl shadow-lg mb-6">
            <h4 className="text-lg sm:text-xl font-bold text-green-900 mb-4">{t?.formations?.mfbapTarget ?? 'Public Cible'}</h4>
            <p className="text-gray-700">
              {t?.formations?.mfbapTargetText ?? ''}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6">
            <div className="bg-white p-5 sm:p-6 rounded-xl shadow-lg">
              <h4 className="text-lg sm:text-xl font-bold text-green-900 mb-4">{t?.formations?.mfbapPrograms ?? 'Nos Programmes'}</h4>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <CheckCircle size={20} className="text-green-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-gray-700">{t?.formations?.mfbapProg1 ?? 'Manuels CFBP'}</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle size={20} className="text-green-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-gray-700">{t?.formations?.mfbapProg2 ?? 'Modules T-Net'}</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle size={20} className="text-green-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-gray-700">{t?.formations?.mfbapProg3 ?? 'Le cœur du mariage'}</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-5 sm:p-6 rounded-xl shadow-lg">
              <h4 className="text-lg sm:text-xl font-bold text-green-900 mb-4">{t?.formations?.mfbapOther ?? 'Autres Formations'}</h4>
              <ul className="space-y-1">
                {mfbapOthers?.map?.((item, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <CheckCircle size={18} className="text-green-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-gray-700 text-sm">{item ?? ''}</span>
                  </li>
                )) ?? null}
              </ul>
            </div>
          </div>

          <div className="bg-green-900 text-white p-5 sm:p-6 rounded-xl shadow-lg text-center">
            <p className="text-lg sm:text-xl font-bold">
              {t?.formations?.mfbapGrad ?? 'Première graduation : 14 Février 2026'}
            </p>
          </div>
        </motion.div>
      </section>

      {/* Inscription Form */}
      <section id="inscription" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <InscriptionForm />
      </section>
    </div>
  );
}
