# Sankofa Sats - Frontend Project

## ✅ Completed Setup

- [x] Next.js 14 with App Router initialized
- [x] TypeScript configuration
- [x] Tailwind CSS v4 configured
- [x] Dependencies installed: next-themes, framer-motion, lucide-react, recharts
- [x] Global layout with Sidebar and Topbar
- [x] Theme provider (dark mode default)
- [x] Mock data for UI testing
- [x] All pages created: Dashboard, Loans, Wallet, Analytics, Profile
- [x] Dev server running successfully on port 3001

## 🚀 Running the Project

```bash
npm run dev
```

Visit: http://localhost:3001

## 📁 Project Structure

```
/app
  ├── layout.tsx          # Root layout avec Sidebar + Topbar
  ├── page.tsx            # Dashboard (/)
  ├── loans/page.tsx      # Prêts
  ├── wallet/page.tsx     # Portefeuille Lightning
  ├── analytics/page.tsx  # Analytique
  └── profile/page.tsx    # Profil utilisateur
/components
  ├── ThemeProvider.tsx   # Provider dark/light mode
  ├── Sidebar.tsx         # Navigation latérale
  ├── Topbar.tsx          # Header avec notifications
  └── Card.tsx            # Composant Card réutilisable
/lib
  └── mock.ts             # Données fictives pour UI
```

## 🎨 Design System

- **Palette**: #141414 (bg), #1e1e1e (surface), #ff9900 (accent Bitcoin)
- **Composants**: shadcn/ui style (Card, Button)
- **Icônes**: lucide-react
- **Graphiques**: Recharts
- **Animations**: Framer Motion

## ⚠️ Notes Techniques

- Tailwind CSS v4 utilise `@import "tailwindcss"` au lieu de `@tailwind` directives
- React 18.2.0 et Next.js 14 pour compatibilité dépendances
- Installation avec `--legacy-peer-deps` pour éviter conflits
- next.config.js (pas .ts) requis pour Next 14

## 🔄 Next Steps (Backend Integration)

1. Connecter API Lightning Network
2. Implémenter authentification wallet (Alby, Phoenix, Mutiny)
3. Remplacer mock data par vrais appels API
4. Ajouter gestion d'état global (Zustand/Context)
5. Implémenter logique métier (création prêts, transactions Lightning)
