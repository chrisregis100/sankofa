# 🧪 Guide de Test - Dashboards Sankofa Sats

## Démarrage Rapide

Le serveur est lancé sur **http://localhost:3002** (ou 3001)

---

## 🎭 Test des 3 Dashboards

### 1️⃣ Dashboard Super Admin

#### Étape 1 : Configurer le rôle

Ouvrez la console navigateur (F12) et exécutez :

```javascript
localStorage.setItem("userProfile", "admin");
localStorage.setItem("isAuthenticated", "true");
```

#### Étape 2 : Accéder au dashboard

Naviguez vers : **http://localhost:3002/dashboard/admin**

#### Ce que vous devez voir :

- ✅ Header "Dashboard Super Admin"
- ✅ 4 cartes de statistiques (Utilisateurs, Prêts, Volume, Revenus)
- ✅ Graphique AreaChart "Volume des Transactions"
- ✅ PieChart "Statut des Prêts"
- ✅ Section "Activité Récente" avec 5 événements
- ✅ "Top Prêteurs" classement avec badges
- ✅ BarChart "Croissance Utilisateurs"
- ✅ Sidebar avec badge "Super Admin" (icône Shield)

#### Features à tester :

- [ ] Bouton "Paramètres"
- [ ] Bouton "Export Data"
- [ ] Hover sur les cartes d'activité
- [ ] Tooltip sur les graphiques
- [ ] Navigation vers autres pages

---

### 2️⃣ Dashboard Prêteur

#### Étape 1 : Configurer le rôle

```javascript
localStorage.setItem("userProfile", "lender");
localStorage.setItem("isAuthenticated", "true");
```

#### Étape 2 : Accéder au dashboard

Naviguez vers : **http://localhost:3002/dashboard/lender**

#### Ce que vous devez voir :

- ✅ Header "Dashboard Prêteur"
- ✅ 4 cartes KPI (Portfolio, Gains, Prêts actifs, APY)
- ✅ AreaChart double "Évolution du Portfolio" (orange + vert)
- ✅ PieChart "Distribution Risque"
- ✅ Section "Mes Prêts Actifs" avec 4 prêts
- ✅ Barres de progression pour chaque prêt
- ✅ Section "Transactions Récentes"
- ✅ Sidebar avec badge "Prêteur" (icône TrendingUp)

#### Features à tester :

- [ ] Bouton "Investir" → Ouvre modal opportunités
- [ ] Modal affiche 3 opportunités d'investissement
- [ ] Bouton "Stratégies"
- [ ] Hover sur les cartes de prêts
- [ ] Fermer modal avec ✕ ou clic extérieur
- [ ] Progression bars animées

---

### 3️⃣ Dashboard Emprunteur (Existant)

#### Étape 1 : Configurer le rôle

```javascript
localStorage.setItem("userProfile", "borrower");
localStorage.setItem("isAuthenticated", "true");
```

#### Étape 2 : Accéder au dashboard

Naviguez vers : **http://localhost:3002/dashboard**

#### Ce que vous devez voir :

- ✅ Dashboard standard avec balance
- ✅ Graphique des transactions
- ✅ Liste des activités récentes
- ✅ Sidebar avec badge "Emprunteur" (icône User)

---

## 🎯 Test Navigation Dynamique

### Vérifier la Sidebar adaptative

1. **Mode Admin**

   ```javascript
   localStorage.setItem("userProfile", "admin");
   ```

   Recharger → Sidebar devrait afficher :

   - 🛡️ Super Admin
   - 📊 Analytique
   - 💳 Tous les Prêts
   - 👛 Portefeuille
   - 👤 Profil

2. **Mode Lender**

   ```javascript
   localStorage.setItem("userProfile", "lender");
   ```

   Recharger → Sidebar devrait afficher :

   - 📈 Mon Dashboard
   - 💳 Mes Prêts
   - 📊 Analytique
   - 👛 Portefeuille
   - 👤 Profil

3. **Mode Borrower**
   ```javascript
   localStorage.setItem("userProfile", "borrower");
   ```
   Recharger → Sidebar devrait afficher :
   - 🏠 Dashboard
   - 💳 Mes Prêts
   - 📊 Analytique
   - 👛 Portefeuille
   - 👤 Profil

### Test État Actif

- Cliquer sur différents liens
- Vérifier que le lien actif a :
  - ✅ Background dégradé orange
  - ✅ Bordure orange
  - ✅ Texte en gras
  - ✅ Icône orange

---

## 🎨 Test Design & Responsive

### Desktop (> 1024px)

- [ ] Toutes les grids affichent 4 colonnes (stats)
- [ ] Graphiques prennent 2/3 de largeur
- [ ] Sidebar visible (272px)
- [ ] Spacing cohérent

### Tablet (768px - 1024px)

- [ ] Grids passent à 2 colonnes
- [ ] Graphiques empilés verticalement
- [ ] Sidebar peut être cachée

### Mobile (< 768px)

- [ ] Grids passent à 1 colonne
- [ ] Toutes les cartes empilées
- [ ] Boutons responsive
- [ ] Modal plein écran

---

## 🔍 Test Interactions

### Dashboard Admin

1. **Hover Activité Récente**
   - Background change de `#141414` à `#1a1a1a`
2. **Tooltip Graphiques**

   - Hover sur AreaChart → Affiche valeur exacte
   - Hover sur PieChart → Affiche pourcentage
   - Hover sur BarChart → Affiche données

3. **Top Prêteurs**
   - Badges numérotés (1-5) avec gradient orange

### Dashboard Lender

1. **Modal Opportunités**
   - Clic "Investir" → Modal s'ouvre avec animation
   - Affiche 3 opportunités
   - Bouton ✕ ferme le modal
   - Clic extérieur ferme le modal
2. **Prêts Actifs**

   - Vérifier badges de risque (vert/orange/rouge)
   - Badge "Retard" sur le prêt #4 (Yaa S.)
   - Barres de progression différentes (20%, 40%, 65%, 85%)

3. **Transactions**
   - Icônes différentes pour paiements (↓) vs investissements (↑)
   - Montants positifs en vert, négatifs en gris

---

## 🐛 Vérification Erreurs

### Console Navigateur

Vérifier qu'il n'y a pas de :

- ❌ Erreurs JavaScript
- ❌ Erreurs de chargement
- ⚠️ Les warnings TypeScript sur Framer Motion sont normaux

### Network Tab

- [ ] Toutes les ressources chargent (200 OK)
- [ ] Pas de 404
- [ ] Pas de requêtes bloquées

---

## 🔄 Test Flow Complet

### Scénario 1 : Inscription Prêteur → Dashboard

1. Aller sur http://localhost:3002/
2. Clic "S'inscrire"
3. Sélectionner "Prêteur" (carte verte)
4. Remplir formulaire
5. Submit → Devrait rediriger vers `/dashboard/lender`
6. Vérifier badge "Prêteur" dans sidebar

### Scénario 2 : Switch de rôle

```javascript
// Passer de Borrower à Lender
localStorage.setItem("userProfile", "lender");
location.reload();
```

- Vérifier changement sidebar
- Vérifier accès `/dashboard/lender`

### Scénario 3 : Déconnexion

1. Clic bouton "Déconnexion" (rouge en bas sidebar)
2. Devrait rediriger vers `/` (landing page)
3. localStorage devrait être vidé
4. Accès `/dashboard/*` devrait afficher erreur

---

## 📊 Checklist Complète

### Dashboard Admin

- [ ] Affichage 4 stats cards
- [ ] AreaChart volume (gradient orange)
- [ ] PieChart status (4 couleurs)
- [ ] 5 activités récentes avec icônes
- [ ] Top 5 prêteurs avec ranking
- [ ] BarChart croissance (2 barres)
- [ ] Boutons actions (Paramètres, Export)
- [ ] Animations Framer Motion

### Dashboard Lender

- [ ] Affichage 4 KPI cards
- [ ] AreaChart double ligne (orange + vert)
- [ ] PieChart risques (3 segments)
- [ ] 4 prêts actifs avec progression
- [ ] 4 transactions récentes
- [ ] Modal opportunités (3 offres)
- [ ] Bouton "Investir" fonctionnel
- [ ] Bouton "Stratégies"

### Sidebar Dynamique

- [ ] Badge rôle s'affiche
- [ ] Menu adapté au rôle
- [ ] État actif fonctionne
- [ ] Icônes correctes
- [ ] Déconnexion fonctionnelle

---

## 🎉 Test Réussi Si...

✅ Les 3 dashboards s'affichent sans erreur  
✅ La sidebar change selon le rôle  
✅ Les graphiques sont interactifs  
✅ Les animations sont fluides  
✅ Le modal s'ouvre/ferme correctement  
✅ Pas d'erreurs dans la console  
✅ Responsive fonctionne sur mobile/tablet

---

## 🚨 Problèmes Connus

### Warnings TypeScript

```
Property 'className' does not exist on type 'IntrinsicAttributes...'
```

**Solution** : Warnings Framer Motion cosmétiques, n'affectent pas le fonctionnement

### Port déjà utilisé

Si port 3001 occupé, Next.js utilise automatiquement 3002, 3003, etc.

### localStorage non persistant

En mode incognito, localStorage est vidé à la fermeture → Utiliser mode normal

---

**Happy Testing! 🚀**
