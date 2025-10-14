"use client";
import { motion } from "framer-motion";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import Card from "../../components/Card";
import { balance, transactions } from "../../lib/mock";

export default function Dashboard() {
  const data = transactions.map((t, i) => ({
    name: t.date,
    value: Math.abs(t.amount) / 1000,
  }));

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="grid grid-cols-3 gap-6">
        <Card className="col-span-2">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm text-gray-300">Solde total</h3>
              <div className="text-3xl font-bold text-[#ff9900]">
                {balance.sats.toLocaleString()} sats
              </div>
              <div className="text-sm text-gray-400">≈ ${balance.fiat}</div>
            </div>
          </div>
          <div style={{ height: 200 }} className="mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ff9900" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#ff9900" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#ff9900"
                  fillOpacity={1}
                  fill="url(#colorUv)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card>
          <h4 className="text-gray-300 font-semibold">Dernières activités</h4>
          <ul className="mt-3 space-y-2">
            {transactions.map((t) => (
              <li
                key={t.id}
                className="flex justify-between text-sm text-gray-300"
              >
                <span>{t.type}</span>
                <span
                  className={t.amount > 0 ? "text-green-400" : "text-red-400"}
                >
                  {t.amount > 0 ? "+" : ""}
                  {(t.amount / 1000).toLocaleString()}k sats
                </span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </motion.div>
  );
}
