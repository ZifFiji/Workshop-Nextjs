# 🚀 Portfolio Personnel - Guide de Développement

Un portfolio moderne et élégant construit avec **React**, **TypeScript**, **Tailwind CSS** et **shadcn/ui**.

## ✨ Fonctionnalités

### 🏠 Header & Navigation
- **Logo personnalisé** avec nom/marque personnelle
- **Menu de navigation** fluide (Accueil, À propos, Projets, Contact)
- **Basculeur thème** sombre/clair avec shadcn Toggle

### 👤 Page À Propos
- **Biographie personnelle** engageante et professionnelle
- **Compétences techniques** mises en valeur avec shadcn Badge
- **Timeline de parcours** interactive utilisant shadcn Card
- Présentation chronologique des expériences

### 💼 Galerie de Projets
- **Minimum 3 projets** présentés (réels ou conceptuels)
- **Cards élégantes** powered by shadcn Card
- **Visuels attractifs** avec images de démonstration
- **Descriptions détaillées** et technologies utilisées
- **Liens GitHub & démos** avec shadcn Button

### 🛠️ Section Compétences
- **Technologies maîtrisées** clairement organisées
- **Indicateurs visuels** : barres de progression ou badges
- Utilisation de shadcn Progress et Badge components
- Catégorisation par domaines (Frontend, Backend, Tools, etc.)

### 📧 Formulaire de Contact
- **Formulaire validé** avec shadcn Form
- **Champs requis** : nom, email, message
- **Components shadcn** : Input et Textarea
- **Gestion d'erreurs** élégante avec shadcn Alert
- Feedback utilisateur en temps réel

### 🦶 Footer Professionnel
- **Liens réseaux sociaux** (GitHub, LinkedIn, Twitter, etc.)
- **Copyright** et informations légales
- **Navigation rapide** vers les sections principales
- Design minimaliste et informatif

### Animations & Interactions
- **Effets hover** sophistiqués sur les cards
- **Transitions fluides** entre les états
- **shadcn Hover Card** pour les détails de projets
- Micro-interactions pour améliorer l'engagement

### Accessibilité
- **Contraste élevé** pour une lisibilité optimale
- **Navigation clavier** complète
- **Screen reader friendly**
- Respect des standards WCAG

## 🎨 Stack Technique

```bash
- React 18+ avec TypeScript
- Tailwind CSS pour le styling
- shadcn/ui pour les components
- Animations CSS natives
```

## 🔧 Composants shadcn/ui Utilisés

| Composant | Usage |
|-----------|-------|
| `Toggle` | Basculeur thème sombre/clair |
| `Card` | Timeline, projets, sections |
| `Badge` | Compétences, technologies |
| `Button` | CTAs, liens, navigation |
| `Form` | Formulaire de contact |
| `Input` | Champs de saisie |
| `Textarea` | Zone de message |
| `Alert` | Messages d'erreur/succès |
| `Progress` | Barres de compétences |
| `Sheet` | Menu mobile |
| `HoverCard` | Détails projets |

## 🚨 Page 404 Personnalisée

- **Design cohérent** avec l'identité du site
- **Message d'erreur convivial** et rassurant
- **Bouton de retour** élégant avec shadcn Button
- **Suggestions de navigation** alternatives

## 🎯 Objectifs du Projet

Ce portfolio vise à :
- **Présenter professionnellement** vos compétences et réalisations
- **Démontrer votre maîtrise** des technologies modernes
- **Créer une première impression** mémorable
- **Faciliter le contact** avec les recruteurs/clients
- **Servir de vitrine** pour vos projets

## Créer un projet Next.js

Pour démarrer avec Next.js, suivez ces étapes :

### 1. Installer Node.js
Assurez-vous que Node.js est installé sur votre machine. Vous pouvez le télécharger depuis [nodejs.org](https://nodejs.org/).

### 2. Créer une application Next.js
Exécutez la commande suivante dans votre terminal :

```bash
npx create-next-app@latest nom-du-projet
✔ Would you like to use TypeScript? … No / Yes <- 
✔ Would you like to use ESLint? … No <- / Yes
✔ Would you like to use Tailwind CSS? … No / Yes <-
✔ Would you like your code inside a `src/` directory? … No <- / Yes
✔ Would you like to use App Router? (recommended) … No / Yes <-
✔ Would you like to use Turbopack for `next dev`? … No <- / Yes
✔ Would you like to customize the import alias (`@/*` by default)? … No <- / Yes
```

Remplacez `nom-du-projet` par le nom de votre application.

### 3. Naviguer dans le répertoire du projet
Une fois l'installation terminée, accédez au répertoire du projet :

```bash
cd nom-du-projet
```

### 4. Démarrer le serveur de développement
Lancez votre application en mode développement :

```bash
npm run dev
```

Votre application sera accessible à l'adresse [http://localhost:3000](http://localhost:3000).

### 5. Modifier votre projet
Commencez à éditer les fichiers dans le répertoire `app` pour personnaliser votre application.

### 6. Ajouter des dépendances
Ajoutez les dépendances nécessaires pour votre projet, comme Tailwind CSS ou shadcn/ui, en suivant leurs guides d'installation respectifs.

### Ressources supplémentaires
- [Documentation officielle Next.js](https://nextjs.org/docs)
- [Tutoriels Next.js](https://nextjs.org/learn)
- [Exemples de projets Next.js](https://github.com/vercel/next.js/tree/canary/examples)
