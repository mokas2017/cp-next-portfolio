// Pied de page du portfolio amélioré et toujours en bas de page
export default function Foooter() {
  return (
    <footer className="w-full border-t border-slate-800 bg-slate-900/90 py-8 text-center text-sm text-slate-400 mt-auto">
      <div className="container mx-auto flex flex-col items-center gap-2 px-4">
        {/* Nom et année */}
        <div className="font-semibold text-slate-200">
          © {new Date().getFullYear()} Med Karim Slouma. Tous droits réservés.
        </div>
        {/* Liens sociaux avec icônes */}
        <div className="flex gap-6 justify-center mt-2">
          <a
            href="mailto:medkarimslouma@gmail.com"
            className="hover:text-cyan-400 transition flex items-center gap-1"
            aria-label="Envoyer un email"
          >
            <svg width="18" height="18" fill="currentColor" className="inline">
              <path d="M2 4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4zm2-.5A.5.5 0 0 0 3.5 4v.217l6.5 4.55 6.5-4.55V4a.5.5 0 0 0-.5-.5H4zm11 2.383-5.803 4.063a1 1 0 0 1-1.194 0L3 5.883V14a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V5.883z" />
            </svg>
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/medkarimslouma"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition flex items-center gap-1"
            aria-label="LinkedIn"
          >
            <svg width="18" height="18" fill="currentColor" className="inline">
              <path d="M16 8a8 8 0 1 0-16 0 8 8 0 0 0 16 0zM5.5 13H3.5V7h2v6zm-1-7a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm8.5 7h-2v-2c0-.6-.4-1-1-1s-1 .4-1 1v2h-2V7h2v.8c.3-.5 1-1 2-1 1.3 0 2 1 2 2.5v3.7z" />
            </svg>
            LinkedIn
          </a>
          <a
            href="https://github.com/medkarimslouma"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition flex items-center gap-1"
            aria-label="GitHub"
          >
            <svg width="18" height="18" fill="currentColor" className="inline">
              <path d="M9 1.5A7.5 7.5 0 0 0 1.5 9c0 3.3 2.1 6.1 5.1 7.1.4.1.5-.2.5-.4v-1.3c-2.1.5-2.5-1-2.5-1-.4-1-1-1.3-1-1.3-.8-.6.1-.6.1-.6.9.1 1.3.9 1.3.9.8 1.3 2.1.9 2.6.7.1-.6.3-.9.6-1.1-1.7-.2-3.5-.8-3.5-3.6 0-.8.3-1.4.8-1.9-.1-.2-.3-.9.1-1.8 0 0 .7-.2 2.1.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.4-1 2.1-.8 2.1-.8.4.9.2 1.6.1 1.8.5.5.8 1.1.8 1.9 0 2.8-1.8 3.4-3.5 3.6.3.3.6.8.6 1.6v2.3c0 .2.1.5.5.4A7.5 7.5 0 0 0 16.5 9 7.5 7.5 0 0 0 9 1.5z" />
            </svg>
            GitHub
          </a>
        </div>
        {/* Mention de la technologie */}
        <div className="text-xs text-slate-600 mt-2">
          Réalisé avec{" "}
          <span className="text-cyan-400">Next.js</span> &amp;{" "}
          <span className="text-cyan-400">Tailwind CSS</span>
        </div>
      </div>
    </footer>
  );
}