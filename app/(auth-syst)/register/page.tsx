"use client";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Bitcoin,
  Eye,
  EyeOff,
  Lock,
  Mail,
  TrendingUp,
  User,
  Wallet,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

type ProfileType = "lender" | "borrower" | null;

export default function RegisterPage() {
  const router = useRouter();
  const [step, setStep] = useState<1 | 2>(1);
  const [profileType, setProfileType] = useState<ProfileType>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleProfileSelect = (type: ProfileType) => {
    setProfileType(type);
    setStep(2);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Les mots de passe ne correspondent pas");
      return;
    }

    setIsLoading(true);

    // Simulation d'inscription
    setTimeout(() => {
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("userEmail", formData.email);
      localStorage.setItem("userProfile", profileType || "");
      router.push("/dashboard");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#141414] to-[#1e1e1e] flex items-center justify-center px-6 py-12 relative overflow-hidden">
      {/* Background Effects */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute top-20 right-20 w-96 h-96 bg-[#ff9900] opacity-10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ scale: [1, 1.3, 1], rotate: [0, -90, 0] }}
        transition={{ duration: 25, repeat: Infinity }}
        className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500 opacity-10 rounded-full blur-3xl"
      />

      <div className="relative z-10 w-full max-w-4xl">
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
            <p className="text-gray-400 text-sm">Bitcoin Lightning Lending</p>
          </Link>
        </motion.div>

        {/* Progress Indicator */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div
            className={`flex items-center gap-2 ${
              step === 1 ? "text-[#ff9900]" : "text-gray-400"
            }`}
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${
                step === 1
                  ? "border-[#ff9900] bg-[#ff9900]/20"
                  : "border-gray-600"
              }`}
            >
              1
            </div>
            <span className="text-sm font-medium hidden sm:inline">
              Choisir un profil
            </span>
          </div>
          <div className="w-12 h-0.5 bg-gray-700"></div>
          <div
            className={`flex items-center gap-2 ${
              step === 2 ? "text-[#ff9900]" : "text-gray-400"
            }`}
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${
                step === 2
                  ? "border-[#ff9900] bg-[#ff9900]/20"
                  : "border-gray-600"
              }`}
            >
              2
            </div>
            <span className="text-sm font-medium hidden sm:inline">
              Créer un compte
            </span>
          </div>
        </div>

        {/* Step 1: Profile Selection */}
        {step === 1 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-2">
                Choisissez votre profil
              </h1>
              <p className="text-gray-400">
                Comment souhaitez-vous utiliser Sankofa Sats ?
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Lender Card */}
              <motion.button
                onClick={() => handleProfileSelect("lender")}
                whileHover={{ scale: 1.02, y: -5 }}
                whileTap={{ scale: 0.98 }}
                className="group relative p-8 bg-[#1e1e1e] border-2 border-white/10 hover:border-green-500 rounded-2xl text-left transition-all"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Prêteur</h3>
                <p className="text-gray-400 mb-4">
                  Je veux prêter mes sats et gagner des intérêts attractifs sur
                  mes bitcoins.
                </p>
                <ul className="space-y-2 text-sm text-gray-300 mb-6">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                    Jusqu'à 8% APY
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                    Paiements automatiques
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                    Garanties Bitcoin
                  </li>
                </ul>
                <div className="flex items-center gap-2 text-green-500 font-semibold">
                  Devenir prêteur
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.button>

              {/* Borrower Card */}
              <motion.button
                onClick={() => handleProfileSelect("borrower")}
                whileHover={{ scale: 1.02, y: -5 }}
                whileTap={{ scale: 0.98 }}
                className="group relative p-8 bg-[#1e1e1e] border-2 border-white/10 hover:border-[#ff9900] rounded-2xl text-left transition-all"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#ff9900] to-[#ff7700] rounded-2xl flex items-center justify-center mb-6">
                  <Wallet className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Emprunteur</h3>
                <p className="text-gray-400 mb-4">
                  Je veux emprunter des sats rapidement avec des taux
                  compétitifs et flexibles.
                </p>
                <ul className="space-y-2 text-sm text-gray-300 mb-6">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#ff9900]"></div>
                    Taux compétitifs dès 4%
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#ff9900]"></div>
                    Transfert instantané
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#ff9900]"></div>
                    Remboursement flexible
                  </li>
                </ul>
                <div className="flex items-center gap-2 text-[#ff9900] font-semibold">
                  Devenir emprunteur
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.button>
            </div>

            <div className="mt-8 text-center text-sm">
              <span className="text-gray-400">Déjà inscrit ? </span>
              <Link
                href="/auth/login"
                className="text-[#ff9900] font-semibold hover:underline"
              >
                Se connecter
              </Link>
            </div>
          </motion.div>
        )}

        {/* Step 2: Registration Form */}
        {step === 2 && profileType && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-md mx-auto"
          >
            <div className="bg-[#1e1e1e] border border-white/10 rounded-2xl p-8">
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <button
                    onClick={() => setStep(1)}
                    className="text-gray-400 hover:text-white"
                  >
                    ←
                  </button>
                  <div>
                    <h2 className="text-2xl font-bold">Créer votre compte</h2>
                    <p className="text-gray-400 text-sm">
                      Profil :{" "}
                      <span
                        className={
                          profileType === "lender"
                            ? "text-green-500"
                            : "text-[#ff9900]"
                        }
                      >
                        {profileType === "lender" ? "Prêteur" : "Emprunteur"}
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Nom complet
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full pl-11 pr-4 py-3 bg-[#141414] border border-white/10 rounded-lg focus:border-[#ff9900] focus:outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full pl-11 pr-4 py-3 bg-[#141414] border border-white/10 rounded-lg focus:border-[#ff9900] focus:outline-none transition-colors"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Mot de passe
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type={showPassword ? "text" : "password"}
                      required
                      value={formData.password}
                      onChange={(e) =>
                        setFormData({ ...formData, password: e.target.value })
                      }
                      className="w-full pl-11 pr-12 py-3 bg-[#141414] border border-white/10 rounded-lg focus:border-[#ff9900] focus:outline-none transition-colors"
                      placeholder="••••••••"
                      minLength={8}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                  <p className="text-xs text-gray-400 mt-1">
                    Minimum 8 caractères
                  </p>
                </div>

                {/* Confirm Password */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Confirmer le mot de passe
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type={showPassword ? "text" : "password"}
                      required
                      value={formData.confirmPassword}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          confirmPassword: e.target.value,
                        })
                      }
                      className="w-full pl-11 pr-4 py-3 bg-[#141414] border border-white/10 rounded-lg focus:border-[#ff9900] focus:outline-none transition-colors"
                      placeholder="••••••••"
                    />
                  </div>
                </div>

                {/* Terms */}
                <label className="flex items-start gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    className="mt-1 w-4 h-4 rounded border-white/10 bg-[#141414]"
                  />
                  <span className="text-sm text-gray-400">
                    J'accepte les{" "}
                    <Link
                      href="/terms"
                      className="text-[#ff9900] hover:underline"
                    >
                      conditions d'utilisation
                    </Link>{" "}
                    et la{" "}
                    <Link
                      href="/privacy"
                      className="text-[#ff9900] hover:underline"
                    >
                      politique de confidentialité
                    </Link>
                  </span>
                </label>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isLoading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 bg-gradient-to-r from-[#ff9900] to-[#ff7700] rounded-lg font-semibold flex items-center justify-center gap-2 shadow-lg shadow-[#ff9900]/50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      Créer mon compte
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        )}

        {/* Back to Home */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-center"
        >
          <Link
            href="/"
            className="text-gray-400 hover:text-white text-sm transition-colors"
          >
            ← Retour à l'accueil
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
