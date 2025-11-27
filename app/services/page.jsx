import React from 'react'
import Link from 'next/link';

// Liste des services proposés
const SERVICES = [
  { title: "Conseil", description: "Diagnostic complet et feuille de route digitale." },
  { title: "Développement", description: "Applications web modernes et évolutives." },
  { title: "Maintenance", description: "Suivi continu, correctifs et évolutions rapides." },
  { title: "Formation", description: "Montée en compétence des équipes techniques." },
];

// Composant principal de la page Services
const ServicesPage = () => {
  return (
    // Section principale stylisée
    <section className="section-block" id="offres">
      {/* En-tête avec titre, description et bouton de contact */}
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="section-title mb-2">Services</h1>
          <p className="text-slate-300">Accompagnement complet, de l’audit initial à la livraison continue.</p>
        </div>
        {/* Lien vers la page de contact pour demander un devis */}
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-5 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
        >
          Demander un devis
        </Link>
      </div>
      {/* Grille responsive et fluide des services */}
      <div className="
        mt-8 
        grid 
        gap-6 
        grid-cols-1 
        sm:grid-cols-2 
        md:grid-cols-2 
        lg:grid-cols-3 
        xl:grid-cols-4
      ">
        {SERVICES.map((service) => (
          <article
            key={service.title}
            className="
              flex flex-col
              rounded-2xl 
              border border-slate-800 
              bg-slate-900/70 
              p-6 
              shadow-lg shadow-cyan-500/5
              transition
              hover:scale-[1.02]
              focus-within:ring-2 focus-within:ring-cyan-400
            "
            tabIndex={0}
          >
            {/* Titre du service */}
            <h2 className="text-xl font-semibold text-cyan-300">{service.title}</h2>
            {/* Description du service */}
            <p className="mt-2 text-sm text-slate-300 flex-1">{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ServicesPage;