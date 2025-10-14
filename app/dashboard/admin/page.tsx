"use client";
import { motion } from "framer-motion";
import {
  Activity,
  AlertCircle,
  ArrowUpRight,
  CheckCircle2,
  CreditCard,
  DollarSign,
  Download,
  Eye,
  Filter,
  Settings,
  Shield,
  TrendingUp,
  Users,
} from "lucide-react";
import { useState } from "react";
import {
  Bar,
  BarChart,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import Card from "../../../components/Card";

// Mock data optimisé pour le super admin
const platformStats = {
  totalUsers: 15234,
  growthRate: 8.2,
  totalLoans: 8456,
  loanGrowth: 12.5,
  totalVolume: 45600000,
  volumeGrowth: 15.8,
  platformRevenue: 2280000,
  revenueGrowth: 18.3,
};

const userMetrics = [
  { month: "Mai", lenders: 4200, borrowers: 5100, total: 9300 },
  { month: "Juin", lenders: 5100, borrowers: 6300, total: 11400 },
  { month: "Juil", lenders: 5800, borrowers: 7200, total: 13000 },
  { month: "Août", lenders: 6400, borrowers: 7900, total: 14300 },
  { month: "Sep", lenders: 6789, borrowers: 8445, total: 15234 },
];

const revenueData = [
  { month: "Mai", revenue: 1200000, fees: 180000 },
  { month: "Juin", revenue: 1450000, fees: 220000 },
  { month: "Juil", revenue: 1720000, fees: 260000 },
  { month: "Août", revenue: 1980000, fees: 300000 },
  { month: "Sep", revenue: 2280000, fees: 340000 },
];

const loanStatusData = [
  { name: "Actifs", value: 5234, count: 5234, color: "#ff9900" },
  { name: "Remboursés", value: 2890, count: 2890, color: "#10b981" },
  { name: "En retard", value: 232, count: 232, color: "#f59e0b" },
  { name: "Défaut", value: 100, count: 100, color: "#ef4444" },
];

const riskDistribution = [
  { risk: "Faible", loans: 3890, volume: 18500000, color: "#10b981" },
  { risk: "Moyen", loans: 3200, volume: 19800000, color: "#ff9900" },
  { risk: "Élevé", loans: 1366, volume: 7300000, color: "#ef4444" },
];

const systemAlerts = [
  {
    id: 1,
    type: "warning",
    message: "15 prêts arrivent à échéance cette semaine",
    severity: "medium",
    time: "Il y a 5 min",
  },
  {
    id: 2,
    type: "error",
    message: "3 comptes suspects détectés - vérification requise",
    severity: "high",
    time: "Il y a 12 min",
  },
  {
    id: 3,
    type: "info",
    message: "Nouveau pic d'inscriptions: +245 utilisateurs aujourd'hui",
    severity: "low",
    time: "Il y a 1h",
  },
  {
    id: 4,
    type: "warning",
    message: "Capacité de liquidité à 78% - surveillance recommandée",
    severity: "medium",
    time: "Il y a 2h",
  },
];

const topPerformers = [
  {
    id: 1,
    name: "Kwame A.",
    type: "lender",
    volume: 12500000,
    loans: 45,
    rate: 98.2,
    status: "verified",
  },
  {
    id: 2,
    name: "Amara B.",
    type: "lender",
    volume: 10200000,
    loans: 38,
    rate: 97.5,
    status: "verified",
  },
  {
    id: 3,
    name: "Yaw K.",
    type: "borrower",
    borrowed: 2800000,
    repaid: 2750000,
    score: 95,
    status: "excellent",
  },
  {
    id: 4,
    name: "Ama D.",
    type: "lender",
    volume: 7600000,
    loans: 28,
    rate: 96.8,
    status: "verified",
  },
  {
    id: 5,
    name: "Kofi M.",
    type: "borrower",
    borrowed: 1900000,
    repaid: 1900000,
    score: 98,
    status: "excellent",
  },
];

const recentActivities = [
  {
    id: 1,
    action: "Nouveau prêt créé",
    user: "Alice M. → Bob K.",
    amount: 500000,
    time: "Il y a 3 min",
    status: "success",
  },
  {
    id: 2,
    action: "Remboursement",
    user: "Charlie D.",
    amount: 125000,
    time: "Il y a 8 min",
    status: "success",
  },
  {
    id: 3,
    action: "Inscription",
    user: "Diana L. (Prêteur)",
    amount: null,
    time: "Il y a 15 min",
    status: "info",
  },
  {
    id: 4,
    action: "Paiement retard",
    user: "Edward S.",
    amount: 75000,
    time: "Il y a 22 min",
    status: "warning",
  },
  {
    id: 5,
    action: "Retrait wallet",
    user: "Fiona T.",
    amount: 200000,
    time: "Il y a 35 min",
    status: "success",
  },
  {
    id: 6,
    action: "Compte vérifié",
    user: "George P.",
    amount: null,
    time: "Il y a 48 min",
    status: "info",
  },
];

export default function SuperAdminDashboard() {
  const [timeRange, setTimeRange] = useState("30d");
  const [alertFilter, setAlertFilter] = useState("all");

  return (
    <div className="space-y-6 p-6">
      {/* Header avec actions */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Tableau de Bord Administrateur
          </h1>
          <p className="text-gray-400 mt-1">
            Surveillance et gestion de la plateforme Sankofa Sats
          </p>
        </div>
        <div className="flex gap-3">
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="px-4 py-2 bg-[#1e1e1e] border border-white/10 rounded-lg text-sm hover:border-[#ff9900] transition-colors"
          >
            <option value="7d">7 derniers jours</option>
            <option value="30d">30 derniers jours</option>
            <option value="90d">90 derniers jours</option>
          </select>
          <button className="px-4 py-2 bg-[#1e1e1e] border border-white/10 rounded-lg hover:border-[#ff9900] transition-colors flex items-center gap-2">
            <Settings className="w-4 h-4" />
            <span className="hidden md:inline">Paramètres</span>
          </button>
          <button className="px-4 py-2 bg-gradient-to-r from-[#ff9900] to-[#ff7700] rounded-lg font-semibold hover:shadow-lg hover:shadow-[#ff9900]/50 transition-all flex items-center gap-2">
            <Download className="w-4 h-4" />
            <span className="hidden md:inline">Exporter</span>
          </button>
        </div>
      </div>

      {/* Alertes Système */}
      <Card className="p-6 border-l-4 border-l-yellow-500">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-yellow-500/10 rounded-lg flex items-center justify-center">
              <AlertCircle className="w-5 h-5 text-yellow-500" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Alertes Système</h3>
              <p className="text-sm text-gray-400">
                {systemAlerts.length} notifications actives
              </p>
            </div>
          </div>
          <select
            value={alertFilter}
            onChange={(e) => setAlertFilter(e.target.value)}
            className="px-3 py-1 bg-[#141414] border border-white/10 rounded-lg text-sm"
          >
            <option value="all">Toutes</option>
            <option value="high">Priorité haute</option>
            <option value="medium">Priorité moyenne</option>
          </select>
        </div>
        <div className="space-y-2">
          {systemAlerts.map((alert) => (
            <div
              key={alert.id}
              className="flex items-center justify-between p-3 bg-[#141414] rounded-lg hover:bg-[#1a1a1a] transition-colors"
            >
              <div className="flex items-center gap-3 flex-1">
                <div
                  className={`w-2 h-2 rounded-full ${
                    alert.severity === "high"
                      ? "bg-red-500"
                      : alert.severity === "medium"
                      ? "bg-yellow-500"
                      : "bg-blue-500"
                  }`}
                ></div>
                <span className="text-sm">{alert.message}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs text-gray-500">{alert.time}</span>
                <button className="text-xs text-[#ff9900] hover:underline">
                  Traiter
                </button>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Stats principales */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full -mr-16 -mt-16"></div>
            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-blue-400" />
                </div>
                <div className="flex items-center gap-1 text-green-400 text-sm font-medium">
                  <ArrowUpRight className="w-4 h-4" />+
                  {platformStats.growthRate}%
                </div>
              </div>
              <div className="text-3xl font-bold mb-1">
                {platformStats.totalUsers.toLocaleString()}
              </div>
              <div className="text-sm text-gray-400">Utilisateurs totaux</div>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff9900]/5 rounded-full -mr-16 -mt-16"></div>
            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-[#ff9900]/10 rounded-xl flex items-center justify-center">
                  <CreditCard className="w-6 h-6 text-[#ff9900]" />
                </div>
                <div className="flex items-center gap-1 text-green-400 text-sm font-medium">
                  <ArrowUpRight className="w-4 h-4" />+
                  {platformStats.loanGrowth}%
                </div>
              </div>
              <div className="text-3xl font-bold mb-1">
                {platformStats.totalLoans.toLocaleString()}
              </div>
              <div className="text-sm text-gray-400">Prêts créés</div>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/5 rounded-full -mr-16 -mt-16"></div>
            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-green-400" />
                </div>
                <div className="flex items-center gap-1 text-green-400 text-sm font-medium">
                  <ArrowUpRight className="w-4 h-4" />+
                  {platformStats.volumeGrowth}%
                </div>
              </div>
              <div className="text-3xl font-bold mb-1">
                {(platformStats.totalVolume / 1000000).toFixed(1)}M
              </div>
              <div className="text-sm text-gray-400">Volume total (sats)</div>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full -mr-16 -mt-16"></div>
            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-purple-400" />
                </div>
                <div className="flex items-center gap-1 text-green-400 text-sm font-medium">
                  <ArrowUpRight className="w-4 h-4" />+
                  {platformStats.revenueGrowth}%
                </div>
              </div>
              <div className="text-3xl font-bold mb-1">
                {(platformStats.platformRevenue / 1000000).toFixed(2)}M
              </div>
              <div className="text-sm text-gray-400">Revenus plateforme</div>
            </div>
          </Card>
        </motion.div>
      </div>

      {/* Graphiques principaux */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Croissance utilisateurs */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold mb-1">
                Croissance Utilisateurs
              </h3>
              <p className="text-sm text-gray-400">
                Prêteurs vs Emprunteurs (5 mois)
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 bg-[#ff9900] rounded"></div>
                <span className="text-xs text-gray-400">Prêteurs</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 bg-blue-500 rounded"></div>
                <span className="text-xs text-gray-400">Emprunteurs</span>
              </div>
            </div>
          </div>
          <div style={{ height: 280 }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={userMetrics}>
                <XAxis dataKey="month" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1e1e1e",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "8px",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="lenders"
                  stroke="#ff9900"
                  strokeWidth={3}
                  dot={{ fill: "#ff9900", r: 4 }}
                />
                <Line
                  type="monotone"
                  dataKey="borrowers"
                  stroke="#3b82f6"
                  strokeWidth={3}
                  dot={{ fill: "#3b82f6", r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Revenus plateforme */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold mb-1">Revenus Plateforme</h3>
              <p className="text-sm text-gray-400">
                Revenus totaux et frais (5 mois)
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 bg-green-500 rounded"></div>
                <span className="text-xs text-gray-400">Revenus</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 bg-purple-500 rounded"></div>
                <span className="text-xs text-gray-400">Frais</span>
              </div>
            </div>
          </div>
          <div style={{ height: 280 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={revenueData}>
                <XAxis dataKey="month" stroke="#6b7280" />
                <YAxis
                  stroke="#6b7280"
                  tickFormatter={(value) => `${(value / 1000000).toFixed(1)}M`}
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
                <Bar dataKey="revenue" fill="#10b981" radius={[8, 8, 0, 0]} />
                <Bar dataKey="fees" fill="#a855f7" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      {/* Section Analytics détaillée */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Distribution des prêts par statut */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-6">Statut des Prêts</h3>
          <div style={{ height: 200 }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={loanStatusData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={3}
                  dataKey="value"
                >
                  {loanStatusData.map((entry, index) => (
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
          <div className="space-y-2 mt-4">
            {loanStatusData.map((item) => (
              <div
                key={item.name}
                className="flex items-center justify-between p-2 bg-[#141414] rounded"
              >
                <div className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <span className="text-sm">{item.name}</span>
                </div>
                <span className="text-sm font-semibold">
                  {item.count.toLocaleString()}
                </span>
              </div>
            ))}
          </div>
        </Card>

        {/* Distribution par risque */}
        <Card className="p-6 lg:col-span-2">
          <h3 className="text-lg font-semibold mb-6">
            Distribution par Niveau de Risque
          </h3>
          <div className="space-y-4">
            {riskDistribution.map((risk) => {
              const percentage = (risk.loans / platformStats.totalLoans) * 100;
              return (
                <div key={risk.risk}>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-4 h-4 rounded"
                        style={{ backgroundColor: risk.color }}
                      ></div>
                      <span className="font-medium">{risk.risk} Risque</span>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold">
                        {risk.loans.toLocaleString()} prêts
                      </div>
                      <div className="text-xs text-gray-400">
                        {(risk.volume / 1000000).toFixed(1)}M sats
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="w-full bg-[#1e1e1e] rounded-full h-3">
                      <div
                        className="h-3 rounded-full transition-all duration-500"
                        style={{
                          width: `${percentage}%`,
                          backgroundColor: risk.color,
                        }}
                      ></div>
                    </div>
                    <span className="absolute right-2 top-0 text-xs font-medium text-white/80">
                      {percentage.toFixed(1)}%
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>
      </div>

      {/* Top Performers & Activité récente */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Performers */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <Shield className="w-5 h-5 text-[#ff9900]" />
              Top Performers
            </h3>
            <button className="text-sm text-[#ff9900] hover:underline flex items-center gap-1">
              Voir tous <ArrowUpRight className="w-3 h-3" />
            </button>
          </div>
          <div className="space-y-3">
            {topPerformers.map((user, index) => (
              <div
                key={user.id}
                className="flex items-center gap-3 p-3 bg-[#141414] rounded-lg hover:bg-[#1a1a1a] transition-colors"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-[#ff9900] to-[#ff7700] rounded-full flex items-center justify-center font-bold">
                  #{index + 1}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium">{user.name}</span>
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full ${
                        user.type === "lender"
                          ? "bg-green-500/10 text-green-400"
                          : "bg-blue-500/10 text-blue-400"
                      }`}
                    >
                      {user.type === "lender" ? "Prêteur" : "Emprunteur"}
                    </span>
                  </div>
                  <div className="text-xs text-gray-400">
                    {user.type === "lender"
                      ? `${((user.volume ?? 0) / 1000000).toFixed(1)}M sats • ${
                          user.loans
                        } prêts • ${user.rate}% taux`
                      : `${((user.borrowed ?? 0) / 1000000).toFixed(
                          1
                        )}M emprunté • Score ${user.score}/100`}
                  </div>
                </div>
                <button className="text-[#ff9900] hover:text-[#ff7700]">
                  <Eye className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </Card>

        {/* Activité récente */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <Activity className="w-5 h-5 text-blue-400" />
              Activité en Temps Réel
            </h3>
            <button className="w-8 h-8 bg-[#141414] rounded-lg flex items-center justify-center hover:bg-[#1a1a1a] transition-colors">
              <Filter className="w-4 h-4" />
            </button>
          </div>
          <div className="space-y-2 max-h-[400px] overflow-y-auto">
            {recentActivities.map((activity) => (
              <div
                key={activity.id}
                className="flex items-center gap-3 p-3 bg-[#141414] rounded-lg hover:bg-[#1a1a1a] transition-colors"
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    activity.status === "success"
                      ? "bg-green-500/10"
                      : activity.status === "warning"
                      ? "bg-yellow-500/10"
                      : "bg-blue-500/10"
                  }`}
                >
                  {activity.status === "success" ? (
                    <CheckCircle2 className="w-4 h-4 text-green-400" />
                  ) : activity.status === "warning" ? (
                    <AlertCircle className="w-4 h-4 text-yellow-400" />
                  ) : (
                    <Activity className="w-4 h-4 text-blue-400" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium truncate">
                    {activity.action}
                  </div>
                  <div className="text-xs text-gray-400 flex items-center gap-2">
                    <span className="truncate">{activity.user}</span>
                    {activity.amount && (
                      <>
                        <span>•</span>
                        <span className="text-[#ff9900]">
                          {(activity.amount / 1000).toFixed(0)}K sats
                        </span>
                      </>
                    )}
                  </div>
                </div>
                <span className="text-xs text-gray-500 flex-shrink-0">
                  {activity.time}
                </span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
