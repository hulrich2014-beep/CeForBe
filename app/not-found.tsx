import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4 py-16">
      <div className="text-center max-w-lg">
        <p className="text-6xl sm:text-7xl font-bold text-blue-900 mb-4">404</p>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
          Page introuvable
        </h1>
        <p className="text-gray-600 mb-8">
          La page que vous recherchez n&apos;existe pas ou a été déplacée.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-block bg-blue-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-800 transition-colors"
          >
            Retour à l&apos;accueil
          </Link>
          <Link
            href="/formations"
            className="inline-block border-2 border-blue-900 text-blue-900 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors"
          >
            Voir nos formations
          </Link>
        </div>
      </div>
    </div>
  );
}
