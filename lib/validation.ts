import { z } from 'zod';

// Schémas de validation serveur des formulaires publics.
// Les longueurs maximales bornent le stockage ; trim() neutralise le padding.

const emailField = z.string().trim().email().max(200);
const phoneField = z
  .string()
  .trim()
  .min(6)
  .max(30)
  .regex(/^[0-9+\s().-]+$/, 'Numéro de téléphone invalide');

export const contactSchema = z.object({
  nom: z.string().trim().min(2).max(120),
  email: emailField,
  telephone: phoneField.optional().or(z.literal('')),
  sujet: z.string().trim().min(2).max(200),
  message: z.string().trim().min(5).max(5000),
  consentement: z.literal(true),
});

export const FORMATIONS_VALIDES = [
  'cfbp',
  'fbre',
  'teleo_tier1',
  'teleo_tier2',
  'mfbap',
] as const;

// Les 12 départements de la République du Bénin.
export const DEPARTEMENTS_BENIN = [
  'Alibori',
  'Atacora',
  'Atlantique',
  'Borgou',
  'Collines',
  'Couffo',
  'Donga',
  'Littoral',
  'Mono',
  'Ouémé',
  'Plateau',
  'Zou',
] as const;

export const inscriptionSchema = z.object({
  prenom: z.string().trim().min(2).max(120),
  nom: z.string().trim().min(2).max(120),
  email: emailField,
  telephone: phoneField,
  formation: z.enum(FORMATIONS_VALIDES),
  localite: z.enum(DEPARTEMENTS_BENIN),
  message: z.string().trim().max(5000).optional().or(z.literal('')),
  langue: z.enum(['fr', 'en']).default('fr'),
  consentement: z.literal(true),
});

export type ContactInput = z.infer<typeof contactSchema>;
export type InscriptionInput = z.infer<typeof inscriptionSchema>;
