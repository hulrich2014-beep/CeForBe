import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

// Initialisation paresseuse : le client n'est créé qu'au premier appel réel.
// Sans cela, l'import du module suffirait à instancier PrismaClient, ce qui
// fait échouer le build (collecte des routes API) quand DATABASE_URL n'est pas
// encore disponible dans l'environnement de build.
function getClient(): PrismaClient {
  if (!globalForPrisma.prisma) {
    globalForPrisma.prisma = new PrismaClient()
  }
  return globalForPrisma.prisma
}

export const prisma = new Proxy({} as PrismaClient, {
  get(_target, prop) {
    const client = getClient()
    const value = Reflect.get(client, prop)
    return typeof value === 'function' ? value.bind(client) : value
  },
})
