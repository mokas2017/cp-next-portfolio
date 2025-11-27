"use client";
import React, { useState } from "react";
import Image from "next/image";

// Tableau des produits à afficher
const produits = [
  {
    title: "Suite digitale",
    description: "Outils intégrés pour accélérer votre croissance.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
  },
  {
    title: "Dashboard analytics",
    description: "Visualisez vos indicateurs clés en temps réel.",
    image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d",
  },
  // Ajoutez d'autres produits ici si besoin
];

const ProduitsPage = () => {
  // State pour gérer les images qui échouent au chargement
  const [errored, setErrored] = useState({});

  return (
    // Section principale du catalogue produits
    <section className="section-block" id="catalogue">
      {/* Titre de la page */}
      <h1 className="section-title">Produits</h1>
      {/* Grille responsive des produits */}
      <div
        className="
          grid 
          gap-6 
          sm:grid-cols-2 
          md:grid-cols-2 
          lg:grid-cols-3 
          xl:grid-cols-4
          "
      >
        {produits.map((produit) => {
          // Si l'image échoue, on affiche une image de secours
          const imageSrc = errored[produit.title] ? "/images/produit-fallback.jpg" : produit.image;

          return (
            <article
              key={produit.title}
              className="
                flex flex-col
                rounded-2xl 
                border border-slate-800 
                bg-slate-900/70 
                shadow-lg shadow-cyan-500/5
                overflow-hidden
                transition
                hover:scale-[1.02]
                focus-within:ring-2 focus-within:ring-cyan-400
              "
              tabIndex={0}
            >
              {/* Image du produit avec gestion d'erreur */}
              <div className="relative w-full aspect-[16/9]">
                <Image
                  src={imageSrc}
                  alt={produit.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority
                  onError={() =>
                    setErrored((prev) => ({
                      ...prev,
                      [produit.title]: true,
                    }))
                  }
                />
              </div>
              {/* Détails du produit */}
              <div className="flex flex-1 flex-col p-6">
                <h2 className="text-xl font-semibold text-cyan-300">{produit.title}</h2>
                <p className="mt-2 text-sm text-slate-300 flex-1">{produit.description}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default ProduitsPage;