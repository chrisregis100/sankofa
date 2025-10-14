"use client";
import { motion } from "framer-motion";
import { ArrowRight, Bitcoin, CheckCircle, Mail } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulation d'envoi d'email
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#141414] to-[#1e1e1e] flex items-center justify-center px-6 relative overflow-hidden">
      {/* Background Effects */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute top-20 right-20 w-96 h-96 bg-[#ff9900] opacity-10 rounded-full blur-3xl"
      />

      <div className="relative z-10 w-full max-w-md">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <Link href="/" className="inline-block">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Bitcoin className="w-8 h-8 text-[#ff9900]" />
              <span className="text-3xl font-bold text-[#ff9900]">
                Sankofa Sats
              </span>
            </div>
          </Link>
        </motion.div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-[#1e1e1e] border border-white/10 rounded-2xl p-8"
        >
          {!isSuccess ? (
            <>
              <div className="mb-6">
                <h1 className="text-2xl font-bold mb-2">
                  Mot de passe oublié ?
                </h1>
                <p className="text-gray-400">
                  Entrez votre email pour recevoir un lien de réinitialisation
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-11 pr-4 py-3 bg-[#141414] border border-white/10 rounded-lg focus:border-[#ff9900] focus:outline-none transition-colors"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <motion.button
                  type="submit"
                  disabled={isLoading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 bg-gradient-to-r from-[#ff9900] to-[#ff7700] rounded-lg font-semibold flex items-center justify-center gap-2 shadow-lg shadow-[#ff9900]/50 disabled:opacity-50"
                >
                  {isLoading ? (
                    <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      Envoyer le lien
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </motion.button>
              </form>
            </>
          ) : (
            <div className="text-center py-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", duration: 0.5 }}
              >
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              </motion.div>
              <h2 className="text-2xl font-bold mb-2">Email envoyé !</h2>
              <p className="text-gray-400 mb-6">
                Vérifiez votre boîte mail. Nous vous avons envoyé un lien pour
                réinitialiser votre mot de passe.
              </p>
              <Link href="/login">
                <button className="px-6 py-2 bg-[#141414] border border-white/10 rounded-lg hover:border-[#ff9900] transition-colors">
                  Retour à la connexion
                </button>
              </Link>
            </div>
          )}

          <div className="mt-6 text-center text-sm">
            <Link
              href="/login"
              className="text-gray-400 hover:text-white transition-colors"
            >
              ← Retour à la connexion
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
