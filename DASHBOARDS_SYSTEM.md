# 🎛️ Système de Dashboards - Sankofa Sats

## Vue d'ensemble

Le système de dashboards de Sankofa Sats propose **3 interfaces distinctes** adaptées aux différents rôles utilisateurs :

1. **Super Admin** - Gestion et surveillance complète de la plateforme
2. **Prêteur (Lender)** - Gestion de portefeuille et investissements
3. **Emprunteur (Borrower)** - Dashboard existant pour les demandes de prêts

---

## 🛡️ Dashboard Super Admin

**Route:** `/dashboard/admin`

### Features Principales

#### 📊 Statistiques Globales

- **Utilisateurs totaux** - Croissance des inscriptions (+8.2%)
- **Prêts créés** - Nombre total de prêts sur la plateforme (+12.5%)
- **Volume total** - Montant total transigé en sats (+15.8%)
- **Revenus plateforme** - Commissions et frais générés

#### 📈 Graphiques Analytiques

1. **Volume des Transactions** (AreaChart)

   - Évolution mensuelle du volume en sats
   - Gradient orange (#ff9900)
   - Données sur 4 mois

2. **Statut des Prêts** (PieChart)

   - Actifs (orange) - 5,234 prêts
   - Remboursés (vert) - 2,890 prêts
   - En retard (rouge) - 232 prêts
   - Défaut (gris) - 100 prêts

3. **Croissance Utilisateurs** (BarChart)
   - Comparaison utilisateurs vs prêts par mois
   - Double barre (orange + vert)

#### 🔔 Activité Récente

- **Nouveaux utilisateurs** - Inscriptions en temps réel
- **Prêts créés** - Alertes de nouveaux prêts
- **Paiements** - Remboursements effectués
- **Alertes** - Retards de paiement
- **Prêts clôturés** - Remboursements complets

#### 🏆 Top Prêteurs

- Classement par volume prêté
- Nombre de prêts actifs
- Taux de remboursement
- Top 5 avec badges de rang

#### 🔧 Actions Admin

- **Paramètres** - Configuration plateforme
- **Export Data** - Extraction données CSV/JSON

---

## 💰 Dashboard Prêteur

**Route:** `/dashboard/lender`

### Features Principales

#### 📊 Statistiques Portfolio

- **Valeur portfolio** - Total investi + gains (9.43M sats)
- **Gains totaux** - Revenus cumulés (685K sats)
- **Prêts actifs** - Nombre de prêts en cours (23)
- **APY moyen** - Rendement annuel (7.8%)

#### 📈 Graphiques Performance

1. **Évolution du Portfolio** (AreaChart double)

   - Ligne orange : Montant investi
   - Ligne verte : Gains accumulés
   - Historique 6 mois
   - Gradients pour meilleure lisibilité

2. **Distribution Risque** (PieChart)
   - Faible risque (vert) - 45%
   - Moyen risque (orange) - 35%
   - Haut risque (rouge) - 20%
   - Visualisation équilibre portfolio

#### 📋 Mes Prêts Actifs

Chaque carte de prêt affiche :

- **Avatar emprunteur** - Initiale colorée
- **Montant prêté** - En sats
- **Taux APY** - Rendement du prêt
- **Durée** - Période du prêt
- **Barre de progression** - % remboursé (gradient orange)
- **Prochain paiement** - Date échéance
- **Badge risque** - Niveau de risque (vert/orange/rouge)
- **Statut** - "À jour" ou "Retard" avec badge rouge

#### 💳 Transactions Récentes

- **Paiements reçus** (vert) - Remboursements emprunteurs
- **Investissements** (bleu) - Nouveaux prêts financés
- Date et montant en sats
- Statut "Complété"

#### 🎯 Opportunités d'Investissement (Modal)

Système de découverte de prêts :

- **Bouton "Investir"** dans le header
- **Modal interactif** avec liste d'opportunités
- Pour chaque opportunité :
  - Avatar et nom emprunteur
  - Objet du prêt (ex: "Expansion commerce")
  - Montant demandé (sats)
  - Taux APY proposé
  - Durée du prêt
  - Score de crédit (/100)
  - Badge niveau de risque
  - Actions : "Voir détails" ou "Investir"

#### 🎯 Actions Prêteur

- **Stratégies** - Configuration allocation automatique
- **Investir** - Ouvre modal opportunités

---

## 🔄 Système de Rôles

### Configuration Rôles

Les rôles sont définis lors de l'inscription et stockés dans `localStorage` :

```typescript
// Après inscription
localStorage.setItem("userProfile", "lender"); // ou "borrower"

// Pour tester le mode admin
localStorage.setItem("userProfile", "admin");
```

### Navigation Dynamique

La **Sidebar** s'adapte automatiquement selon le rôle :

#### Super Admin

```
🛡️ Super Admin
📊 Analytique
💳 Tous les Prêts
👛 Portefeuille
👤 Profil
```

#### Prêteur

```
📈 Mon Dashboard
💳 Mes Prêts
📊 Analytique
👛 Portefeuille
👤 Profil
```

#### Emprunteur

```
🏠 Dashboard
💳 Mes Prêts
📊 Analytique
👛 Portefeuille
👤 Profil
```

### Badge de Rôle

La sidebar affiche un badge avec :

- **Icône** selon le rôle (Shield/TrendingUp/User)
- **Titre du rôle** (Super Admin/Prêteur/Emprunteur)
- **Description** courte du statut

### État Actif

Le lien actif est mis en évidence avec :

- Background dégradé orange (#ff9900/20 → #ff7700/20)
- Bordure orange (#ff9900/50)
- Texte et icône orange
- Font-weight semibold

---

## 🎨 Design System

### Palette Couleurs

- **Background principal** : `#141414`
- **Surface/Cards** : `#1e1e1e`
- **Accent Bitcoin** : `#ff9900` → `#ff7700` (gradient)
- **Succès/Gains** : `#10b981` (vert)
- **Alerte/Risque** : `#ef4444` (rouge)
- **Info** : `#3b82f6` (bleu)
- **Warning** : `#f59e0b` (jaune)

### Composants Réutilisables

- **Card** : Container avec background #1e1e1e, border-radius, padding
- **Stat Card** : Icône colorée (w-12 h-12, rounded-xl, bg-color/10)
- **Progress Bar** : Gradient orange, rounded-full, transition-all
- **Badge** : rounded-full, bg-color/10, text-color, padding px-3 py-1
- **Modal** : backdrop-blur-sm, rounded-2xl, border white/10

### Animations Framer Motion

- **Cards Stats** : `opacity: 0 → 1`, `y: 20 → 0`, stagger 0.1s
- **Activity Items** : `opacity: 0 → 1`, `x: -20 → 0`, delay based on index
- **Modal** : `opacity: 0 → 1`, `scale: 0.95 → 1`
- **Hover Effects** : scale, translateY, shadow

---

## 📊 Données Mock

### Admin Stats

```typescript
{
  totalUsers: 15234,
  totalLoans: 8456,
  activeLenders: 6789,
  activeBorrowers: 8445,
  totalVolume: 45600000, // sats
  platformRevenue: 2280000,
  averageRate: 6.2,
  repaymentRate: 96.5
}
```

### Lender Stats

```typescript
{
  totalInvested: 8750000, // sats
  activeLoans: 23,
  totalEarned: 685000,
  averageAPY: 7.8,
  portfolioValue: 9435000,
  availableBalance: 1250000
}
```

---

## 🔐 Sécurité & Permissions

### Accès Dashboards

- `/dashboard/admin` → **Réservé role "admin"**
- `/dashboard/lender` → **Réservé role "lender"**
- `/dashboard` → **Accessible role "borrower"**

### Future: Middleware Protection

```typescript
// middleware.ts (à implémenter)
export function middleware(req: NextRequest) {
  const role = req.cookies.get("userRole")?.value;
  const path = req.nextUrl.pathname;

  if (path.startsWith("/dashboard/admin") && role !== "admin") {
    return NextResponse.redirect("/dashboard");
  }

  if (path.startsWith("/dashboard/lender") && role !== "lender") {
    return NextResponse.redirect("/dashboard");
  }
}
```

---

## 🚀 Prochaines Étapes

### Backend Integration

1. **API Endpoints**

   - `GET /api/admin/stats` - Statistiques globales
   - `GET /api/lender/portfolio` - Portfolio prêteur
   - `GET /api/lender/opportunities` - Prêts disponibles
   - `POST /api/lender/invest` - Créer investissement

2. **Authentification JWT**

   - Middleware protection routes
   - Vérification rôle côté serveur
   - Refresh token système

3. **Real-time Updates**
   - WebSocket pour activité récente
   - Notifications push nouveaux prêts
   - Mise à jour stats en temps réel

### Features Avancées

- **Auto-invest** - Stratégies automatiques pour prêteurs
- **Dashboard personnalisable** - Drag & drop widgets
- **Export rapports** - PDF/CSV génération
- **Alertes configurables** - Email/SMS notifications
- **Analytics avancées** - Prédictions ML, scoring risque

---

## 🎯 Test Rapide

### Tester le Dashboard Admin

```typescript
// Dans la console navigateur
localStorage.setItem("userProfile", "admin");
// Recharger la page → Aller à /dashboard/admin
```

### Tester le Dashboard Prêteur

```typescript
localStorage.setItem("userProfile", "lender");
// Recharger la page → Aller à /dashboard/lender
```

### Tester le Dashboard Emprunteur

```typescript
localStorage.setItem("userProfile", "borrower");
// Recharger la page → Aller à /dashboard
```

---

## 📱 Responsive Design

Tous les dashboards sont **fully responsive** :

- **Mobile** (< 768px) : Grid 1 colonne, sidebar cachée
- **Tablet** (768px - 1024px) : Grid 2 colonnes
- **Desktop** (> 1024px) : Grid 3-4 colonnes, sidebar visible

### Breakpoints Tailwind

- `md:` → 768px
- `lg:` → 1024px
- `xl:` → 1280px

---

**Fait avec ❤️ pour Sankofa Sats - Empowering Africa with Bitcoin**
