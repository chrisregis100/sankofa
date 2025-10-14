"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Card from "../../../components/Card";
import { loans } from "../../../lib/mock";

function LoanModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-[#1e1e1e] p-6 rounded-lg w-96">
        <h3 className="text-lg font-semibold text-gray-200">
          Demander un prêt
        </h3>
        <form className="mt-4 space-y-3">
          <input
            className="w-full p-2 bg-[#141414] rounded"
            placeholder="Montant (sats)"
          />
          <input
            className="w-full p-2 bg-[#141414] rounded"
            placeholder="Durée (mois)"
          />
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-3 py-1 bg-gray-600 rounded"
            >
              Annuler
            </button>
            <button
              type="button"
              className="px-3 py-1 bg-[#ff9900] rounded text-black"
            >
              Demander
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default function Loans() {
  const [open, setOpen] = useState(false);
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">Prêts</h2>
        <button
          onClick={() => setOpen(true)}
          className="px-4 py-2 bg-[#ff9900] rounded text-black"
        >
          Demander un prêt
        </button>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {loans.map((l) => (
          <Card key={l.id}>
            <div className="flex justify-between items-center">
              <div>
                <div className="text-sm text-gray-300">{l.status}</div>
                <div className="font-bold text-xl text-[#ff9900]">
                  {l.amount.toLocaleString()} sats
                </div>
                <div className="text-sm text-gray-400">
                  {l.duration} • {l.rate}%
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
      {open && <LoanModal onClose={() => setOpen(false)} />}
    </motion.div>
  );
}
