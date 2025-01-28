import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <main className="flex flex-col items-center justify-center text-center py-16 px-8">
        {/* Titre principal */}
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
          Bienvenue sur mon application Next.js !
        </h1>
        {/* Description */}
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          C'est un projet avec <span className="font-bold">Tailwind CSS</span> et Next.js, où je vais créer des interfaces modernes.
        </p>

        {/* Liste des fonctionnalités */}
        <ul className="mt-8 list-inside list-disc text-left text-gray-700 dark:text-gray-200 font-mono">
          <Link href="/login">
            <li className="mb-4">Page de <strong>connexion</strong> pour accéder à votre compte.</li>
          </Link>
          <Link href= "/forgot_password">
           <li className="mb-4">Page de <strong>mot de passe oublié</strong> pour récupérer votre mot de passe.</li>
          </Link>
          <Link href = "#">
            <li className="mb-4">Page d'<strong>information</strong> avec des détails sur l'application.</li>
          </Link>
        </ul>

        {/* Liens pour la documentation et le déploiement */}
        <div className="mt-8 flex gap-4 items-center justify-center sm:flex-row flex-col">
          {/* Déployer maintenant */}
          <a
            className="rounded-full border border-transparent bg-foreground text-background px-6 py-3 text-sm sm:text-base transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Déployer maintenant
          </a>
          {/* Lire la documentation */}
          <a
            className="rounded-full border border-black/[.08] dark:border-white/[.145] px-6 py-3 text-sm sm:text-base transition-colors hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lire la documentation
          </a>
        </div>
      </main>

      {/* Pied de page */}
      <footer className="flex justify-center py-4 bg-gray-800 text-white dark:bg-gray-900">
        <p className="text-sm">
          Powered by <a href="https://nextjs.org" className="text-blue-400">Next.js</a> and <a href="https://tailwindcss.com" className="text-blue-400">Tailwind CSS</a>.
        </p>
      </footer>
    </div>
  );
}

