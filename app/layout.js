// Import du CSS global, de la barre de navigation et du pied de page
import "./globals.css";
import NavBarre from "./components/NavBarre";
import Foooter from "./components/Foooter"; // Ajout de l'import du footer

// Métadonnées pour le SEO et les réseaux sociaux
export const metadata = {
  title: "Med Karim Slouma | Ingénieur Informatique",
  description:
    "Portfolio de Med Karim Slouma, ingénieur informatique senior spécialisé en développement web, produits digitaux et accompagnement technique.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Med Karim Slouma | Ingénieur Informatique",
    description:
      "Découvrez les services, produits et collaborations de Med Karim Slouma, 12 ans d’expertise en solutions digitales.",
    url: "https://www.votre-domaine.com",
    siteName: "Portfolio Med Karim Slouma",
    locale: "fr_FR",
    type: "website",
  },
};

// Layout principal de l'application
export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      {/* Ajout de flex et min-h-screen pour coller le footer en bas */}
      <body className="flex flex-col min-h-screen bg-slate-950 text-slate-100">
        {/* Lien d'accessibilité pour passer directement au contenu */}
        <a href="#contenu-principal" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 btn btn-primary">
          Aller au contenu principal
        </a>
        <NavBarre />
        {/* Le main prend toute la hauteur restante */}
        <main id="contenu-principal" className="flex-1">{children}</main>
        {/* Footer reste en bas */}
        <Foooter />
      </body>
    </html>
  );
}