// Importation des hooks React nécessaires
"use client";
import { useEffect, useState } from "react";

// Page affichant la liste des clients (utilisateurs)
const UsersPage = () => {
  // State pour stocker les utilisateurs récupérés
  const [users, setUsers] = useState([]);
  // State pour gérer l'état de chargement
  const [loading, setLoading] = useState(true);
  // State pour gérer les erreurs éventuelles
  const [error, setError] = useState(null);

  // Effet pour charger les utilisateurs à l'affichage du composant
  useEffect(() => {
    const controller = new AbortController();

    // Fonction asynchrone pour récupérer les utilisateurs depuis l'API
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users", {
          signal: controller.signal,
        });
        // Vérifie si la réponse est correcte
        if (!response.ok) {
          throw new Error(`Requête échouée (${response.status})`);
        }
        // Récupère les données JSON
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        // Ignore l'erreur si la requête a été annulée
        if (err.name !== "AbortError") {
          console.error("Failed to load users", err);
          setError("Impossible de charger les Clients. Veuillez réessayer plus tard.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();

    // Nettoyage : annule la requête si le composant est démonté
    return () => controller.abort();
  }, []);

  return (
    // Section principale de la page clients
    <section className="section-block" id="contact">
      {/* Titre de la page */}
      <h1 className="section-title">Nos Clients</h1>
      {/* Affichage du loader pendant le chargement */}
      {loading && (
        <div className="flex items-center gap-3 text-sm text-slate-300" role="status" aria-live="polite">
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-cyan-400 border-t-transparent" />
          Chargement des clients...
        </div>
      )}
      {/* Affichage d'un message d'erreur si besoin */}
      {error && (
        <p className="rounded-md border border-red-600 bg-red-950/60 px-4 py-3 text-sm text-red-200" role="alert">
          {error}
        </p>
      )}
      {/* Affichage de la liste des clients si tout est OK */}
      {!loading && !error && (
        <ul className="space-y-3">
          {users.map((user) => (
            <li key={user.id} className="rounded-xl border border-slate-800 bg-slate-900/70 p-4">
              <p className="text-lg font-semibold text-cyan-300">{user.name}</p>
              <p className="text-sm text-slate-300">{user.email}</p>
              <p className="text-xs text-slate-500">{user.company?.name}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default UsersPage;