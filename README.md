# Portfolio Next.js – Med Karim Slouma

Ce projet est un site web de portfolio développé avec [Next.js](https://nextjs.org/) et [Tailwind CSS](https://tailwindcss.com/). Il présente les compétences, services, produits, clients et informations de contact de Med Karim Slouma, ingénieur informatique senior.

## Fonctionnalités

- **Accueil** : Dashboard avec accès rapide aux sections clés.
- **À propos** : Présentation du profil et des compétences.
- **Services** : Liste des prestations proposées.
- **Produits** : Catalogue de solutions et outils réalisés.
- **Clients** : Liste dynamique des clients (exemple avec API).
- **Contact** : Formulaire de contact (API route Next.js).
- **Navigation** : Barre de navigation réactive.
- **Pied de page** : Footer adaptatif avec liens sociaux.
- **Responsive** : Affichage fluide et adaptatif sur mobile/tablette/desktop.
- **Images optimisées** : Utilisation du composant `Image` de Next.js.
- **Routage par page** : Système de pages basé sur la structure des dossiers.

## Structure du projet

```
app/
  globals.css           # Styles globaux (Tailwind CSS)
  layout.js             # Layout principal (NavBarre, Foooter)
  page.js               # Page d'accueil (dashboard)
  api/contact/route.js  # API route pour le formulaire de contact
  apropos/page.jsx      # Page À propos
  contact/page.jsx      # Page Contact
  produits/page.jsx     # Page Produits
  services/page.jsx     # Page Services
  users/page.jsx        # Page Clients
  components/
    Foooter.jsx         # Composant pied de page
    NavBarre.jsx        # Composant barre de navigation
```

## Installation & Lancement

1. **Cloner le dépôt**
   ```bash
   git clone <url-du-repo>
   cd cp-nextjs
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Lancer le serveur de développement**
   ```bash
   npm run dev
   ```

4. **Accéder à l’application**
   Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## Déploiement

Ce projet est déployé  sur [Vercel](cp-next-portfolio-ng3d3cwc6-mokas2017s-projects.vercel.app)

## Personnalisation

- Remplacez les contenus, images et liens par vos propres informations.
- Modifiez les styles dans `globals.css` ou via les classes Tailwind.
- Ajoutez de nouvelles pages ou sections selon vos besoins.

## Auteur

Med Karim Slouma  
[LinkedIn](https://www.linkedin.com/in/medkarimslouma) – [GitHub](https://github.com/medkarimslouma)

---

© {année en cours} Med Karim Slouma. Tous droits réservés.
