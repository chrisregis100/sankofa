"use client";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  ArrowDownRight,
  ArrowUpRight,
  Calendar,
  CheckCircle,
  Clock,
  Percent,
  Plus,
  Star,
  Target,
  TrendingUp,
  Wallet,
} from "lucide-react";
import { useState } from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import Card from "../../../components/Card";

// Mock data spécifique au prêteur
const portfolioStats = {
  totalInvested: 8750000, // sats
  activeLoans: 23,
  totalEarned: 685000, // sats
  averageAPY: 7.8,
  portfolioValue: 9435000, // sats (invested + earned)
  availableBalance: 1250000, // sats
  monthlyRevenue: 142000, // sats
  projectedYearlyRevenue: 1704000, // sats
};

// Évolution du portfolio sur 6 mois
const portfolioGrowth = [
  { month: "Avr", capital: 6000000, gains: 180000, total: 6180000 },
  { month: "Mai", capital: 7000000, gains: 320000, total: 7320000 },
  { month: "Juin", capital: 7800000, gains: 485000, total: 8285000 },
  { month: "Juil", capital: 8200000, gains: 590000, total: 8790000 },
  { month: "Août", capital: 8500000, gains: 655000, total: 9155000 },
  { month: "Sep", capital: 8750000, gains: 685000, total: 9435000 },
];

// Performance mensuelle (revenus des intérêts)
const monthlyPerformance = [
  { month: "Avr", revenue: 95000, target: 100000 },
  { month: "Mai", revenue: 118000, target: 110000 },
  { month: "Juin", revenue: 128000, target: 120000 },
  { month: "Juil", revenue: 135000, target: 130000 },
  { month: "Août", revenue: 138000, target: 135000 },
  { month: "Sep", revenue: 142000, target: 140000 },
];

// Distribution du portfolio par risque
const riskAllocation = [
  {
    name: "Faible Risque",
    value: 42,
    amount: 3675000,
    apy: 5.5,
    color: "#10b981",
  },
  {
    name: "Risque Moyen",
    value: 38,
    amount: 3325000,
    apy: 8.2,
    color: "#ff9900",
  },
  {
    name: "Risque Élevé",
    value: 20,
    amount: 1750000,
    apy: 12.5,
    color: "#ef4444",
  },
];

// Analyse de diversification (radar chart)
const diversificationData = [
  { category: "Secteur A", value: 75 },
  { category: "Secteur B", value: 65 },
  { category: "Secteur C", value: 85 },
  { category: "Secteur D", value: 55 },
  { category: "Secteur E", value: 70 },
];

// Prêts actifs avec détails complets
const activeLoans = [
  {
    id: 1,
    borrower: "Kofi M.",
    amount: 500000,
    rate: 6.5,
    duration: "3 mois",
    progress: 65,
    nextPayment: "2024-10-20",
    daysUntilPayment: 6,
    risk: "low",
    status: "on-time",
    earned: 18750,
    projected: 28850,
  },
  {
    id: 2,
    borrower: "Ama T.",
    amount: 750000,
    rate: 8.2,
    duration: "6 mois",
    progress: 40,
    nextPayment: "2024-10-18",
    daysUntilPayment: 4,
    risk: "medium",
    status: "on-time",
    earned: 22500,
    projected: 56250,
  },
  {
    id: 3,
    borrower: "Kwame D.",
    amount: 300000,
    rate: 5.5,
    duration: "2 mois",
    progress: 85,
    nextPayment: "2024-10-15",
    daysUntilPayment: 1,
    risk: "low",
    status: "on-time",
    earned: 12750,
    projected: 15000,
  },
  {
    id: 4,
    borrower: "Yaa S.",
    amount: 1000000,
    rate: 9.5,
    duration: "12 mois",
    progress: 20,
    nextPayment: "2024-10-22",
    daysUntilPayment: 8,
    risk: "high",
    status: "delayed",
    earned: 15000,
    projected: 95000,
  },
];

// Opportunités d'investissement disponibles
const investmentOpportunities = [
  {
    id: 1,
    borrower: "Abena K.",
    amount: 650000,
    rate: 7.2,
    duration: "4 mois",
    purpose: "Expansion commerce textile",
    risk: "low",
    creditScore: 92,
    repaymentHistory: "100% (12/12)",
    collateral: "Stock marchandises",
  },
  {
    id: 2,
    borrower: "Kwesi A.",
    amount: 1200000,
    rate: 9.8,
    duration: "8 mois",
    purpose: "Équipement agricole moderne",
    risk: "medium",
    creditScore: 78,
    repaymentHistory: "95% (19/20)",
    collateral: "Terrain agricole",
  },
  {
    id: 3,
    borrower: "Akua B.",
    amount: 400000,
    rate: 6.5,
    duration: "3 mois",
    purpose: "Stock marchandises saison",
    risk: "low",
    creditScore: 88,
    repaymentHistory: "100% (8/8)",
    collateral: "Inventaire",
  },
];

// Historique transactions récentes
const recentTransactions = [
  {
    id: 1,
    type: "payment",
    borrower: "Kofi M.",
    amount: 125000,
    date: "2024-10-12",
    status: "completed",
    category: "Intérêts + Principal",
  },
  {
    id: 2,
    type: "payment",
    borrower: "Ama T.",
    amount: 98000,
    date: "2024-10-10",
    status: "completed",
    category: "Intérêts",
  },
  {
    id: 3,
    type: "investment",
    borrower: "Nouveau prêt - Yaw K.",
    amount: -500000,
    date: "2024-10-08",
    status: "completed",
    category: "Investissement",
  },
  {
    id: 4,
    type: "payment",
    borrower: "Kwame D.",
    amount: 45000,
    date: "2024-10-05",
    status: "completed",
    category: "Principal",
  },
  {
    id: 5,
    type: "withdrawal",
    borrower: "Retrait vers wallet",
    amount: -200000,
    date: "2024-10-03",
    status: "completed",
    category: "Retrait",
  },
];

export default function LenderDashboard() {
  const [showOpportunities, setShowOpportunities] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [timeRange, setTimeRange] = useState("6m");

  return (
    <div className="space-y-6 p-6">
      {/* Header avec actions */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-[#ff9900] to-[#ff7700] bg-clip-text text-transparent">
            Mon Portfolio de Prêts
          </h1>
          <p className="text-gray-400 mt-1">
            Gérez vos investissements et maximisez vos rendements
          </p>
        </div>
        <div className="flex gap-3">
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="px-4 py-2 bg-[#1e1e1e] border border-white/10 rounded-lg text-sm hover:border-[#ff9900] transition-colors"
          >
            <option value="1m">1 mois</option>
            <option value="3m">3 mois</option>
            <option value="6m">6 mois</option>
            <option value="1y">1 an</option>
          </select>
          <button className="px-4 py-2 bg-[#1e1e1e] border border-white/10 rounded-lg hover:border-[#ff9900] transition-colors flex items-center gap-2">
            <Target className="w-4 h-4" />
            <span className="hidden md:inline">Stratégie Auto</span>
          </button>
          <button
            onClick={() => setShowOpportunities(true)}
            className="px-4 py-2 bg-gradient-to-r from-[#ff9900] to-[#ff7700] rounded-lg font-semibold hover:shadow-lg hover:shadow-[#ff9900]/50 transition-all flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            <span className="hidden md:inline">Investir</span>
          </button>
        </div>
      </div>

      {/* KPIs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="p-6 relative overflow-hidden border-l-4 border-l-[#ff9900]">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#ff9900]/5 rounded-full -mr-12 -mt-12"></div>
            <div className="relative">
              <div className="flex items-center justify-between mb-3">
                <div className="w-12 h-12 bg-[#ff9900]/10 rounded-xl flex items-center justify-center">
                  <Wallet className="w-6 h-6 text-[#ff9900]" />
                </div>
                <span className="text-xs text-gray-400">Valeur totale</span>
              </div>
              <div className="text-3xl font-bold mb-1">
                {(portfolioStats.portfolioValue / 1000000).toFixed(2)}M
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">sats</span>
                <span className="text-xs text-green-400">
                  ≈ ${(portfolioStats.portfolioValue * 0.00048).toFixed(0)}
                </span>
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-green-500/5 rounded-full -mr-12 -mt-12"></div>
            <div className="relative">
              <div className="flex items-center justify-between mb-3">
                <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-green-400" />
                </div>
                <div className="flex items-center gap-1 text-green-400 text-sm font-medium">
                  <ArrowUpRight className="w-4 h-4" />+
                  {portfolioStats.averageAPY}%
                </div>
              </div>
              <div className="text-3xl font-bold mb-1">
                {(portfolioStats.totalEarned / 1000).toFixed(0)}K
              </div>
              <div className="text-sm text-gray-400">Gains totaux (sats)</div>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-full -mr-12 -mt-12"></div>
            <div className="relative">
              <div className="flex items-center justify-between mb-3">
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-blue-400" />
                </div>
                <span className="text-xs text-gray-400">En cours</span>
              </div>
              <div className="text-3xl font-bold mb-1">
                {portfolioStats.activeLoans}
              </div>
              <div className="text-sm text-gray-400">Prêts actifs</div>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/5 rounded-full -mr-12 -mt-12"></div>
            <div className="relative">
              <div className="flex items-center justify-between mb-3">
                <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center">
                  <Percent className="w-6 h-6 text-purple-400" />
                </div>
                <span className="text-xs text-gray-400">Rendement</span>
              </div>
              <div className="text-3xl font-bold mb-1">
                {portfolioStats.averageAPY}%
              </div>
              <div className="text-sm text-gray-400">APY moyen</div>
            </div>
          </Card>
        </motion.div>
      </div>

      {/* Graphiques Portfolio */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Croissance Portfolio */}
        <Card className="p-6 lg:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold mb-1">
                Évolution du Portfolio
              </h3>
              <p className="text-sm text-gray-400">
                Capital investi vs Valeur totale (6 mois)
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 bg-[#ff9900] rounded"></div>
                <span className="text-xs text-gray-400">Capital</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 bg-green-500 rounded"></div>
                <span className="text-xs text-gray-400">Valeur totale</span>
              </div>
            </div>
          </div>
          <div style={{ height: 300 }}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={portfolioGrowth}>
                <defs>
                  <linearGradient
                    id="capitalGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="5%" stopColor="#ff9900" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#ff9900" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient
                    id="totalGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="month" stroke="#6b7280" />
                <YAxis
                  stroke="#6b7280"
                  tickFormatter={(value) => `${(value / 1000000).toFixed(0)}M`}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1e1e1e",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "8px",
                  }}
                  formatter={(value: number) =>
                    `${(value / 1000000).toFixed(2)}M sats`
                  }
                />
                <Area
                  type="monotone"
                  dataKey="capital"
                  stroke="#ff9900"
                  strokeWidth={2}
                  fill="url(#capitalGradient)"
                />
                <Area
                  type="monotone"
                  dataKey="total"
                  stroke="#10b981"
                  strokeWidth={2}
                  fill="url(#totalGradient)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Distribution Risque */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-6">Allocation par Risque</h3>
          <div style={{ height: 200 }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={riskAllocation}
                  cx="50%"
                  cy="50%"
                  innerRadius={55}
                  outerRadius={85}
                  paddingAngle={4}
                  dataKey="value"
                >
                  {riskAllocation.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1e1e1e",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "8px",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-3 mt-4">
            {riskAllocation.map((item) => (
              <div
                key={item.name}
                className="flex items-center justify-between p-2 bg-[#141414] rounded-lg"
              >
                <div className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <div>
                    <div className="text-sm font-medium">{item.name}</div>
                    <div className="text-xs text-gray-400">
                      {item.value}% • APY {item.apy}%
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-semibold">
                    {(item.amount / 1000000).toFixed(2)}M
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Performance mensuelle */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold mb-1">
              Performance Mensuelle
            </h3>
            <p className="text-sm text-gray-400">
              Revenus vs Objectif (6 derniers mois)
            </p>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-gray-400">Revenu mensuel moyen:</span>
            <span className="font-semibold text-green-400">
              {(portfolioStats.monthlyRevenue / 1000).toFixed(0)}K sats
            </span>
          </div>
        </div>
        <div style={{ height: 250 }}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={monthlyPerformance}>
              <XAxis dataKey="month" stroke="#6b7280" />
              <YAxis
                stroke="#6b7280"
                tickFormatter={(value) => `${(value / 1000).toFixed(0)}K`}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1e1e1e",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "8px",
                }}
                formatter={(value: number) =>
                  `${(value / 1000).toFixed(0)}K sats`
                }
              />
              <Bar
                dataKey="target"
                fill="#6b7280"
                radius={[8, 8, 0, 0]}
                opacity={0.3}
              />
              <Bar dataKey="revenue" fill="#10b981" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>

      {/* Mes Prêts Actifs */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold">
            Mes Prêts Actifs ({activeLoans.length})
          </h3>
          <div className="flex items-center gap-2">
            <select
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
              className="px-3 py-1 bg-[#141414] border border-white/10 rounded-lg text-sm"
            >
              <option value="all">Tous les prêts</option>
              <option value="on-time">À jour</option>
              <option value="delayed">En retard</option>
            </select>
            <button className="text-sm text-[#ff9900] hover:underline">
              Voir historique
            </button>
          </div>
        </div>
        <div className="space-y-4">
          {activeLoans.map((loan) => (
            <div
              key={loan.id}
              className="p-5 bg-[#141414] rounded-xl border border-white/5 hover:border-[#ff9900]/30 transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#ff9900] to-[#ff7700] rounded-full flex items-center justify-center font-bold text-lg">
                    {loan.borrower.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-lg mb-1">
                      {loan.borrower}
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-400">
                      <span>{(loan.amount / 1000).toFixed(0)}K sats</span>
                      <span>•</span>
                      <span className="text-[#ff9900] font-semibold">
                        {loan.rate}% APY
                      </span>
                      <span>•</span>
                      <span>{loan.duration}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span
                    className={`text-xs px-3 py-1 rounded-full font-medium ${
                      loan.risk === "low"
                        ? "bg-green-500/10 text-green-400 border border-green-500/20"
                        : loan.risk === "medium"
                        ? "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20"
                        : "bg-red-500/10 text-red-400 border border-red-500/20"
                    }`}
                  >
                    {loan.risk === "low"
                      ? "Faible risque"
                      : loan.risk === "medium"
                      ? "Risque moyen"
                      : "Haut risque"}
                  </span>
                  {loan.status === "delayed" && (
                    <span className="text-xs px-3 py-1 rounded-full bg-red-500/20 text-red-400 border border-red-500/30 flex items-center gap-1">
                      <AlertTriangle className="w-3 h-3" />
                      Retard
                    </span>
                  )}
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-gray-400">
                    Progression du remboursement
                  </span>
                  <span className="font-semibold">{loan.progress}%</span>
                </div>
                <div className="relative">
                  <div className="w-full bg-[#1e1e1e] rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-[#ff9900] to-[#ff7700] h-3 rounded-full transition-all duration-500 relative"
                      style={{ width: `${loan.progress}%` }}
                    >
                      <div className="absolute right-0 top-0 w-3 h-3 bg-white rounded-full shadow-lg shadow-[#ff9900]/50"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Details Grid */}
              <div className="grid grid-cols-4 gap-4 p-3 bg-[#1e1e1e] rounded-lg">
                <div>
                  <div className="text-xs text-gray-400 mb-1">
                    Prochain paiement
                  </div>
                  <div className="font-semibold text-sm flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-[#ff9900]" />
                    {loan.nextPayment}
                  </div>
                  <div className="text-xs text-gray-500">
                    Dans {loan.daysUntilPayment} jours
                  </div>
                </div>
                <div>
                  <div className="text-xs text-gray-400 mb-1">
                    Gains actuels
                  </div>
                  <div className="font-semibold text-sm text-green-400">
                    {(loan.earned / 1000).toFixed(1)}K sats
                  </div>
                </div>
                <div>
                  <div className="text-xs text-gray-400 mb-1">
                    Gains projetés
                  </div>
                  <div className="font-semibold text-sm">
                    {(loan.projected / 1000).toFixed(1)}K sats
                  </div>
                </div>
                <div className="flex justify-end">
                  <button className="px-4 py-2 bg-[#141414] border border-white/10 rounded-lg hover:border-[#ff9900] transition-colors text-sm">
                    Détails
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Transactions Récentes */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold">Transactions Récentes</h3>
          <button className="text-sm text-[#ff9900] hover:underline flex items-center gap-1">
            Historique complet <ArrowUpRight className="w-3 h-3" />
          </button>
        </div>
        <div className="space-y-3">
          {recentTransactions.map((tx) => (
            <div
              key={tx.id}
              className="flex items-center justify-between p-4 bg-[#141414] rounded-lg hover:bg-[#1a1a1a] transition-colors"
            >
              <div className="flex items-center gap-4">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    tx.type === "payment"
                      ? "bg-green-500/10"
                      : tx.type === "investment"
                      ? "bg-blue-500/10"
                      : "bg-purple-500/10"
                  }`}
                >
                  {tx.type === "payment" ? (
                    <ArrowDownRight className="w-5 h-5 text-green-400" />
                  ) : tx.type === "investment" ? (
                    <ArrowUpRight className="w-5 h-5 text-blue-400" />
                  ) : (
                    <ArrowUpRight className="w-5 h-5 text-purple-400" />
                  )}
                </div>
                <div>
                  <div className="font-medium mb-1">{tx.borrower}</div>
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <span>{tx.date}</span>
                    <span>•</span>
                    <span>{tx.category}</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div
                  className={`font-bold text-lg ${
                    tx.amount > 0 ? "text-green-400" : "text-gray-300"
                  }`}
                >
                  {tx.amount > 0 ? "+" : ""}
                  {(tx.amount / 1000).toFixed(0)}K
                </div>
                <div className="text-xs text-gray-500">sats</div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Modal Opportunités d'Investissement */}
      {showOpportunities && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-[#1e1e1e] rounded-2xl border border-white/10 p-6 max-w-5xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold mb-1">
                  Opportunités d'Investissement
                </h3>
                <p className="text-gray-400">
                  Sélectionnez les prêts qui correspondent à votre stratégie
                </p>
              </div>
              <button
                onClick={() => setShowOpportunities(false)}
                className="w-10 h-10 bg-[#141414] rounded-lg flex items-center justify-center hover:bg-[#252525] transition-colors text-xl"
              >
                ✕
              </button>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {investmentOpportunities.map((opp) => (
                <div
                  key={opp.id}
                  className="p-6 bg-[#141414] rounded-xl border border-white/5 hover:border-[#ff9900]/50 transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-[#ff9900] to-[#ff7700] rounded-full flex items-center justify-center font-bold text-xl">
                        {opp.borrower.charAt(0)}
                      </div>
                      <div>
                        <div className="font-semibold text-xl mb-1">
                          {opp.borrower}
                        </div>
                        <div className="text-sm text-gray-400">
                          {opp.purpose}
                        </div>
                      </div>
                    </div>
                    <span
                      className={`text-xs px-3 py-1.5 rounded-full font-medium ${
                        opp.risk === "low"
                          ? "bg-green-500/10 text-green-400 border border-green-500/20"
                          : "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20"
                      }`}
                    >
                      {opp.risk === "low" ? "Faible risque" : "Risque moyen"}
                    </span>
                  </div>

                  <div className="grid grid-cols-5 gap-6 mb-5 p-4 bg-[#1e1e1e] rounded-lg">
                    <div>
                      <div className="text-sm text-gray-400 mb-1">Montant</div>
                      <div className="font-bold text-lg">
                        {(opp.amount / 1000).toFixed(0)}K sats
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 mb-1">Taux APY</div>
                      <div className="font-bold text-lg text-[#ff9900]">
                        {opp.rate}%
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 mb-1">Durée</div>
                      <div className="font-bold text-lg">{opp.duration}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 mb-1">
                        Score crédit
                      </div>
                      <div className="font-bold text-lg text-green-400 flex items-center gap-1">
                        <Star className="w-4 h-4" />
                        {opp.creditScore}/100
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400 mb-1">
                        Historique
                      </div>
                      <div className="font-bold text-sm">
                        {opp.repaymentHistory}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 mb-4 p-3 bg-blue-500/5 rounded-lg border border-blue-500/20">
                    <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    <div className="text-sm">
                      <span className="text-gray-400">Garantie:</span>
                      <span className="font-medium ml-2">{opp.collateral}</span>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button className="flex-1 px-4 py-3 bg-[#1e1e1e] border border-white/10 rounded-lg hover:border-[#ff9900] transition-colors font-medium">
                      Voir profil complet
                    </button>
                    <button className="flex-1 px-4 py-3 bg-gradient-to-r from-[#ff9900] to-[#ff7700] rounded-lg font-semibold hover:shadow-lg hover:shadow-[#ff9900]/50 transition-all">
                      Investir maintenant
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
