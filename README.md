# Test Frontend Sandra Rampal

Application front développée pour le test sur React - Typescript

## Fonctionnalités

### Côté User

- **Catalogue de produits** : Navigation et recherche de produits
- **Détails produit** : Informations complètes avec images et spécifications
- **Panier d'achat** : Ajout, modification et suppression d'articles
- **Authentification** : Inscription et connexion utilisateur
- **Commandes** : Processus de commande et suivi
- **Paiement** : Interface de paiement sécurisée
- **Profil utilisateur** : Gestion des informations personnelles

### Côté Administration

- **Interface admin** : Gestion des produits et commandes
- **Suivi des commandes** : Changement de statut de livraison

## Technologies utilisées

### Framework & Build

- **React 19.2.0** - Bibliothèque UI
- **TypeScript** - Typage statique
- **Vite 7.3.1** - Build tool et dev server

### Routing & State Management

- **React Router** - Navigation
- **Zustand** - Gestion d'état globale
- **TanStack Query** - Gestion des requêtes API

### UI & Styling

- **Tailwind CSS** - Framework CSS
- **React Icons** - Icônes
- **React Loading Indicators** - Indicateurs de chargement
- **Hello Pangea DnD** - Drag & drop

### HTTP & Utils

- **Axios** - Client HTTP
- **JS Cookie** - Gestion des cookies

## Structure du projet

```
src/
├── actions/           # Actions serveur (create order, user, login)
├── assets/           # Images et ressources statiques
├── components/       # Composants réutilisables
│   ├── buttons/      # Composants boutons
│   └── ...          # Autres composants UI
├── context/          # Contexts React
│   ├── hooks/        # Custom hooks pour context
│   └── providers/    # Context providers
├── mutations/        # Mutations TanStack Query
├── pages/           # Composants de pages
├── queries/         # Queries TanStack Query
├── types/           # Types TypeScript
└── zustand/         # Store Zustand
```

## Pages principales

| Route           | Component  | Description                |
| --------------- | ---------- | -------------------------- |
| `/`             | Home       | Page d'accueil             |
| `/products`     | Products   | Liste des produits         |
| `/products/:id` | OneProduct | Détail d'un produit        |
| `/cart`         | Cart       | Panier d'achat             |
| `/payment`      | Payment    | Processus de paiement      |
| `/user/login`   | Login      | Connexion utilisateur      |
| `/user/signup`  | Signup     | Inscription utilisateur    |
| `/admin`        | Admin      | Interface d'administration |
