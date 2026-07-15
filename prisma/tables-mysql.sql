-- Tables du site CeForBE pour MySQL (LWS).
-- Option A (recommandée) : ne pas utiliser ce fichier — remplir DATABASE_URL
--   dans .env puis exécuter :  npx prisma db push
-- Option B (manuelle) : importer ce fichier dans phpMyAdmin (onglet SQL ou Importer),
--   après avoir sélectionné votre base.

CREATE TABLE IF NOT EXISTS `inscriptions` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nom` VARCHAR(191) NOT NULL,
  `prenom` VARCHAR(191) NOT NULL,
  `email` VARCHAR(191) NOT NULL,
  `telephone` VARCHAR(191) NOT NULL,
  `formation` VARCHAR(191) NOT NULL,
  `localite` VARCHAR(191) NULL,
  `message` TEXT NULL,
  `date_inscription` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `langue` VARCHAR(191) NOT NULL DEFAULT 'fr',
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS `contacts` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nom` VARCHAR(191) NOT NULL,
  `email` VARCHAR(191) NOT NULL,
  `telephone` VARCHAR(191) NULL,
  `sujet` VARCHAR(191) NOT NULL,
  `message` TEXT NOT NULL,
  `date_contact` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
