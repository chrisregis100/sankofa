"use client";
import { useState } from "react";
import Card from "../../../components/Card";
import { balance, transactions } from "../../../lib/mock";

export default function Wallet() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-2xl font-bold">Portefeuille Lightning</h2>
          <div className="text-gray-300">
            {balance.sats.toLocaleString()} sats • ≈ ${balance.fiat}
          </div>
        </div>
        <div className="flex gap-2">
          <button className="px-3 py-1 bg-[#1e1e1e] rounded">Déposer</button>
          <button className="px-3 py-1 bg-[#ff9900] rounded text-black">
            Retirer
          </button>
        </div>
      </div>

      <Card>
        <h4 className="text-gray-300 font-semibold">Historique Lightning</h4>
        <ul className="mt-3 space-y-2 text-sm text-gray-300">
          {transactions.map((t) => (
            <li key={t.id} className="flex justify-between">
              <span>{t.date}</span>
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
  );
}
