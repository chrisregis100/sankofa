# Sankofa Sats - Frontend (Next.js)

Plateforme de prêt P2P décentralisée sur Bitcoin Lightning Network. Frontend moderne construit avec Next.js (App Router), TypeScript, Tailwind CSS, Recharts et Framer Motion.

## 🚀 Démarrage Rapide

```bash
# Installation
npm install --legacy-peer-deps

# Lancement serveur dev
npm run dev
```

**URLs disponibles:**

- 🏠 Dashboard: http://localhost:3001/
- ✨ Landing Page: http://localhost:3001/landing
- 💳 Prêts: http://localhost:3001/loans
- 💰 Wallet: http://localhost:3001/wallet
- 📊 Analytics: http://localhost:3001/analytics
- 👤 Profile: http://localhost:3001/profile

## 📁 Structure du Projet

```
/app
  ├── landing/          # ✨ Landing page marketing (NEW!)
  ├── loans/            # Gestion des prêts
  ├── wallet/           # Portefeuille Lightning
  ├── analytics/        # Métriques et KPIs
  ├── profile/          # Profil utilisateur
  ├── layout.tsx        # Layout principal (Sidebar + Topbar)
  └── page.tsx          # Dashboard

/components
  ├── AnimatedCounter.tsx  # Compteur animé (NEW!)
  ├── Card.tsx            # Composant Card
  ├── Sidebar.tsx         # Navigation
  ├── Topbar.tsx          # Header
  └── ThemeProvider.tsx   # Dark mode provider

/lib
  └── mock.ts           # Données fictives pour tests UI
```

## ✨ Features Principales

### Landing Page Interactive (/landing)

- Hero section avec animations Framer Motion
- 4 features cards avec hover effects
- Section "How it works" en 3 étapes
- Trust section (sécurité Bitcoin)
- CTA avec glassmorphism design
- Background animé avec cercles gradient

### Dashboard Application

- Solde en temps réel (sats + USD)
- Graphiques Recharts (Area + Line)
- Navigation fluide entre pages
- Dark mode par défaut
- Mock data pour développement

## 🎨 Design System

```css
/* Palette principale */
--bg: #141414
--surface: #1e1e1e
--accent: #ff9900 (Bitcoin Orange)
--text: #f4f4f4

/* Gradients */
from-[#ff9900] to-[#ff7700]  /* Primary CTA */
from-yellow-500 to-orange-500 /* Feature cards */
```

## 🛠️ Stack Technique

- **Framework**: Next.js 14.2.33 (App Router)
- **Language**: TypeScript 5.x
- **Styling**: Tailwind CSS 4.x
- **Animations**: Framer Motion
- **Charts**: Recharts
- **Icons**: Lucide React
- **Theme**: next-themes (dark/light)

## 📚 Documentation

- **LANDING_PAGE.md** - Guide complet landing page
- **IMPLEMENTATION.md** - Détails techniques features
- **PROJECT_COMPLETE.md** - Résumé projet complet

## Getting Started

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
