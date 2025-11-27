"use client";
import { useState } from "react";

// Page de contact avec formulaire accessible et feedback utilisateur
const ContactPage = () => {
  const [status, setStatus] = useState({ type: "idle", message: "" });

  // Gestion de l'envoi du formulaire
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    setStatus({ type: "loading", message: "Envoi..." });

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: form.get("name"),
        email: form.get("email"),
        message: form.get("message"),
      }),
    });

    if (res.ok) {
      setStatus({ type: "success", message: "Message envoyé avec succès." });
      event.currentTarget.reset();
    } else {
      const { error } = await res.json();
      setStatus({ type: "error", message: error ?? "Erreur inconnue." });
    }
  };

  return (
    <section className="section-block space-y-8">
      <header className="space-y-2">
        <h1 className="section-title text-4xl">Contact</h1>
        <p className="text-slate-300">
          Joignez Med Karim Slouma pour toute collaboration ou mission freelance.
        </p>
      </header>
      <div className="grid gap-6 md:grid-cols-2">
        {/* Coordonnées dans un bloc <address> pour l'accessibilité */}
        <article className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
          <h2 className="text-xl font-semibold text-cyan-300">Coordonnées</h2>
          <address className="not-italic space-y-2 text-sm text-slate-300">
            <div>
              <span className="font-semibold text-slate-100">Adresse :</span> Lac 1
            </div>
            <div>
              <span className="font-semibold text-slate-100">Téléphone :</span>{" "}
              <a
                href="tel:+21651523392"
                className="underline focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                51 523 392
              </a>
            </div>
            <div>
              <span className="font-semibold text-slate-100">Email :</span>{" "}
              <a
                href="mailto:medkarimslouma@gmail.com"
                className="underline focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                medkarimslouma@gmail.com
              </a>
            </div>
          </address>
        </article>
        {/* Formulaire de contact aligné et accessible */}
        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 space-y-4"
        >
          <h2 className="text-xl font-semibold text-cyan-300">
            Écrire un message
          </h2>
          <div className="flex flex-col gap-4">
            <div className="form-control w-full">
              <label className="label" htmlFor="name">
                Nom complet
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="input input-bordered w-full bg-slate-950/60 placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none"
                placeholder="Votre nom"
                required
              />
            </div>
            <div className="form-control w-full">
              <label className="label" htmlFor="email">
                Adresse email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="input input-bordered w-full bg-slate-950/60 placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none"
                placeholder="vous@example.com"
                required
              />
            </div>
            <div className="form-control w-full">
              <label className="label" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="textarea textarea-bordered w-full h-36 bg-slate-950/60 placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none"
                placeholder="Votre message"
                required
              />
            </div>
          </div>
          {/* Bouton aligné à droite */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="btn btn-primary btn-wide mt-2 md:ml-4"
              disabled={status.type === "loading"}
            >
              {status.type === "loading" ? "Envoi..." : "Envoyer"}
            </button>
          </div>
          {/* Message de feedback accessible */}
          {status.type !== "idle" && (
            <div
              className={
                status.type === "success"
                  ? "alert alert-success mt-4 text-sm"
                  : "alert alert-error mt-4 text-sm"
              }
              role="status"
              aria-live="polite"
            >
              {status.message}
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactPage;