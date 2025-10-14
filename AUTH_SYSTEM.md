# 🔐 Système d'Authentification - Sankofa Sats

## ✅ Pages Implémentées

### 1. Page de Connexion (`/auth/login`)

**Fonctionnalités:**

- Formulaire email + mot de passe
- Toggle affichage mot de passe (Eye/EyeOff icon)
- Case "Se souvenir de moi"
- Lien "Mot de passe oublié"
- Boutons connexion wallet Lightning (Alby, Phoenix)
- Lien vers inscription
- Animation background + glassmorphism
- Simulation authentification (1.5s)

**Redirection:** → `/dashboard` après connexion réussie

---

### 2. Page d'Inscription (`/auth/register`)

**Process en 2 étapes:**

#### Étape 1: Sélection de Profil

Choix entre 2 profils:

**Prêteur** (Lender)

- Icône: TrendingUp (vert)
- Avantages:
  - Jusqu'à 8% APY
  - Paiements automatiques
  - Garanties Bitcoin

**Emprunteur** (Borrower)

- Icône: Wallet (orange)
- Avantages:
  - Taux dès 4%
  - Transfert instantané
  - Remboursement flexible

#### Étape 2: Formulaire d'Inscription

Champs requis:

- Nom complet
- Email
- Mot de passe (min 8 caractères)
- Confirmation mot de passe
- Acceptation CGU + Politique confidentialité

**Stockage localStorage:**

- `isAuthenticated`: "true"
- `userEmail`: email utilisateur
- `userProfile`: "lender" ou "borrower"

**Redirection:** → `/dashboard` après inscription

---

### 3. Mot de Passe Oublié (`/auth/forgot-password`)

**Fonctionnalités:**

- Input email
- Simulation envoi email (1.5s)
- Page de confirmation avec icône CheckCircle
- Bouton retour connexion

---

## 🎨 Design System Auth

### Layout

- Fond gradient dark (#0a0a0a → #141414 → #1e1e1e)
- Cercles animés background (orange + bleu)
- Cards glassmorphism (#1e1e1e + border white/10)
- Logo Sankofa Sats cliquable (retour accueil)

### Inputs

```css
background: #141414
border: white/10
focus:border: #ff9900
padding: py-3 px-11 (avec icône)
rounded: lg
```

### Buttons

**Primary CTA:**

```css
bg-gradient-to-r from-[#ff9900] to-[#ff7700]
shadow-lg shadow-[#ff9900]/50
hover:scale-1.05
```

**Secondary:**

```css
bg-[#141414]
border: white/10
hover:border-[#ff9900]
```

### Animations

- Entrance: `initial={{ opacity: 0, y: 20 }}`
- Hover cards: `scale-1.02, y: -5`
- Loading spinner: border animation

---

## 📁 Structure des Fichiers

```
/app/auth
  ├── layout.tsx              # Layout standalone (sans sidebar)
  ├── login/page.tsx          # Page connexion
  ├── register/page.tsx       # Page inscription (2 steps)
  └── forgot-password/page.tsx # Récupération mdp
```

---

## 🔗 Flux de Navigation

### Landing Page (`/`)

```
Header Nav:
  - "Se connecter" → /auth/login
  - "S'inscrire" → /auth/register

Hero CTAs:
  - "Commencer maintenant" → /auth/register
  - "Comment ça marche ?" → #how-it-works (scroll)

Bottom CTA:
  - "Créer mon compte gratuitement" → /auth/register
```

### Login Page (`/auth/login`)

```
Links:
  - "Mot de passe oublié ?" → /auth/forgot-password
  - "Créer un compte" → /auth/register
  - "← Retour à l'accueil" → /
  - Logo → /
```

### Register Page (`/auth/register`)

```
Links:
  - "Se connecter" (step 1) → /auth/login
  - "← Retour" (step 2) → Retour step 1
  - "← Retour à l'accueil" → /
  - Logo → /

Actions:
  - Choix profil → Step 2
  - Soumission formulaire → /dashboard
```

### Forgot Password (`/auth/forgot-password`)

```
Links:
  - "← Retour à la connexion" → /auth/login
  - "Retour à la connexion" (après envoi) → /auth/login
  - Logo → /
```

### Dashboard (`/dashboard`)

```
Sidebar:
  - Logo → / (landing page)
  - "Déconnexion" → / + clear localStorage
```

---

## 💾 Gestion d'État (Demo)

### localStorage Keys

```javascript
// Après connexion/inscription réussie
localStorage.setItem("isAuthenticated", "true");
localStorage.setItem("userEmail", "user@example.com");
localStorage.setItem("userProfile", "lender"); // ou "borrower"

// À la déconnexion
localStorage.clear();
```

### Future: Backend Integration

Remplacer par:

- JWT tokens (httpOnly cookies)
- Session management
- Refresh tokens
- OAuth Lightning wallets (Alby, Phoenix)

---

## 🔒 Sécurité (Production TODO)

### À Implémenter

- [ ] Rate limiting (anti brute-force)
- [ ] CSRF protection
- [ ] Password strength meter
- [ ] Email verification
- [ ] 2FA (TOTP)
- [ ] OAuth wallets (Alby, Phoenix, Mutiny)
- [ ] Password hashing (bcrypt)
- [ ] Session expiration
- [ ] Logout all devices
- [ ] Login history

---

## 🎯 Validation Formulaires

### Login

- Email: `type="email"` + `required`
- Password: `required`

### Register

- Name: `type="text"` + `required`
- Email: `type="email"` + `required`
- Password: `minLength={8}` + `required`
- Confirm Password: Match avec password
- Terms: `type="checkbox"` + `required`

### Forgot Password

- Email: `type="email"` + `required`

---

## 🚀 Prochaines Étapes Backend

### 1. API Routes Next.js

```typescript
// app/api/auth/login/route.ts
POST / api / auth / login;
body: {
  email, password;
}
response: {
  token, user;
}

// app/api/auth/register/route.ts
POST / api / auth / register;
body: {
  name, email, password, profile;
}
response: {
  token, user;
}

// app/api/auth/logout/route.ts
POST / api / auth / logout;
response: {
  success;
}

// app/api/auth/forgot-password/route.ts
POST / api / auth / forgot - password;
body: {
  email;
}
response: {
  message;
}
```

### 2. Middleware Protection

```typescript
// middleware.ts
export function middleware(request: NextRequest) {
  const token = request.cookies.get("token");

  if (!token && request.nextUrl.pathname.startsWith("/dashboard")) {
    return NextResponse.redirect("/auth/login");
  }
}
```

### 3. Lightning Wallet Auth

- Alby OAuth
- Phoenix wallet connect
- Mutiny wallet connect
- LNURL-auth

---

## 📊 Analytics & Tracking

### Events à Tracker

- `auth_page_view`: Page visitée
- `auth_method_selected`: Email vs Wallet
- `profile_selected`: Lender vs Borrower
- `registration_started`: Étape 1 complétée
- `registration_completed`: Compte créé
- `login_success`: Connexion réussie
- `login_failed`: Erreur connexion
- `password_reset_requested`: Email oublié envoyé

---

## 🎨 Responsive Design

### Breakpoints

- Mobile: < 768px
  - Stack vertical
  - Profil cards full width
  - Texte réduit
- Tablet: 768px - 1024px

  - Grid 2 colonnes
  - Navigation compact

- Desktop: > 1024px
  - Layout optimal
  - Hover effects actifs

---

## ✅ Checklist Complète

- [x] Page Login créée
- [x] Page Register créée (2 steps)
- [x] Sélection profil (Lender/Borrower)
- [x] Page Forgot Password créée
- [x] Layout auth standalone
- [x] Navigation header sur landing
- [x] Liens CTAs mis à jour
- [x] Animations Framer Motion
- [x] Glassmorphism design
- [x] Responsive mobile/desktop
- [x] Validation formulaires basique
- [x] localStorage demo auth
- [ ] Backend API routes
- [ ] Middleware protection
- [ ] Lightning wallet OAuth
- [ ] Email verification
- [ ] 2FA

---

**Status:** ✅ **Frontend Auth Complet** - Prêt pour intégration backend!

**Test URLs:**

- Landing: http://localhost:3001/
- Login: http://localhost:3001/auth/login
- Register: http://localhost:3001/auth/register
- Forgot: http://localhost:3001/auth/forgot-password
- Dashboard: http://localhost:3001/dashboard
