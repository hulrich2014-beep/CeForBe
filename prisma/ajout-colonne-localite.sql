-- ⚠️ À EXÉCUTER UNE FOIS dans phpMyAdmin (Panel LWS), sur la base cefor2828956,
-- AVANT que la nouvelle version du site ne soit en ligne.
-- Ajoute la colonne "localite" (département du Bénin) à la table des inscriptions.
-- Sans cette colonne, les nouvelles inscriptions échoueraient.

ALTER TABLE `inscriptions`
  ADD COLUMN `localite` VARCHAR(191) NULL AFTER `formation`;
