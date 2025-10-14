"use client";
import { motion } from "framer-motion";
import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import Card from "../../../components/Card";
import { analytics } from "../../../lib/mock";

export default function Analytics() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h2 className="text-2xl font-bold mb-4">Analytique</h2>
      <div className="grid grid-cols-3 gap-4">
        <Card className="col-span-2">
          <h4 className="text-gray-300">Revenus</h4>
          <div style={{ height: 240 }} className="mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={analytics.revenue}>
                <XAxis dataKey="date" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#ff9900"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card>
          <h4 className="text-gray-300">Indicateurs clés</h4>
          <div className="mt-3">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Taux de remboursement</span>
              <span className="font-bold">{analytics.repayRate}%</span>
            </div>
          </div>
        </Card>
      </div>
    </motion.div>
  );
}
