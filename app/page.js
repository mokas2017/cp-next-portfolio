import Link from "next/link";

// Page d'accueil avec dashboard et accès rapide aux sections clés
export default function Home() {
  return (
    <section className="rounded-3xl bg-slate-900/80 p-6 sm:p-8 md:p-10 text-center shadow-lg shadow-cyan-500/10">
      {/* Titre du dashboard */}
      <h1 className="text-3xl sm:text-4xl font-bold text-cyan-400">Tableau de bord du portfolio</h1>
      <p className="mt-4 text-slate-300">
        Surveillez d’un coup d’œil les services actifs, les collaborations récentes et les solutions livrées.
      </p>
      {/* Cartes d'accès rapide, version responsive et fluide */}
      <div
        className="
          mt-8
          grid
          gap-6
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
        "
      >
        <article className="card bg-slate-800/70 border border-slate-700 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 transition flex flex-col focus-within:ring-2 focus-within:ring-cyan-400" tabIndex={0}>
          <Link
            href="/services"
            aria-describedby="carte-services"
            className="flex-1 flex flex-col"
          >
            <div className="card-body" id="carte-services">
              <h2 className="card-title text-cyan-300">Services</h2>
              <p className="text-sm text-slate-300">
                Découvrez les prestations offertes : audit technique, développement sur mesure et accompagnement agile.
              </p>
              <div className="card-actions justify-end">
                <span className="btn btn-outline btn-sm text-cyan-300 border-cyan-400">Voir plus</span>
              </div>
            </div>
          </Link>
        </article>
        <article className="card bg-slate-800/70 border border-slate-700 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 transition flex flex-col focus-within:ring-2 focus-within:ring-cyan-400" tabIndex={0}>
          <Link
            href="/users"
            aria-describedby="carte-clients"
            className="flex-1 flex flex-col"
          >
            <div className="card-body" id="carte-clients">
              <h2 className="card-title text-cyan-300">Clients</h2>
              <p className="text-sm text-slate-300">
                Parcourez les collaborations menées avec des entreprises innovantes dans la tech et l’industrie.
              </p>
              <div className="card-actions justify-end">
                <span className="btn btn-outline btn-sm text-cyan-300 border-cyan-400">Voir plus</span>
              </div>
            </div>
          </Link>
        </article>
        <article className="card bg-slate-800/70 border border-slate-700 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 transition flex flex-col focus-within:ring-2 focus-within:ring-cyan-400" tabIndex={0}>
          <Link
            href="/produits"
            aria-describedby="carte-produits"
            className="flex-1 flex flex-col"
          >
            <div className="card-body" id="carte-produits">
              <h2 className="card-title text-cyan-300">Produits</h2>
              <p className="text-sm text-slate-300">
                Explorez les solutions conçues : plateformes web, APIs et outils d’automatisation métier.
              </p>
              <div className="card-actions justify-end">
                <span className="btn btn-outline btn-sm text-cyan-300 border-cyan-400">Voir plus</span>
              </div>
            </div>
          </Link>
        </article>
      </div>
    </section>
  );
}