"use client";
import { motion } from "framer-motion";
import { ArrowRight, Bitcoin, Eye, EyeOff, Lock, Mail } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulation d'authentification
    setTimeout(() => {
      // Stocker l'état de connexion (localStorage pour demo)
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("userEmail", formData.email);
      router.push("/dashboard");
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
      <motion.div
        animate={{ scale: [1, 1.3, 1], rotate: [0, -90, 0] }}
        transition={{ duration: 25, repeat: Infinity }}
        className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500 opacity-10 rounded-full blur-3xl"
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
            <p className="text-gray-400 text-sm">Bitcoin Lightning Lending</p>
          </Link>
        </motion.div>

        {/* Login Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-[#1e1e1e] border border-white/10 rounded-2xl p-8 backdrop-blur-sm"
        >
          <div className="mb-6">
            <h1 className="text-2xl font-bold mb-2">Connexion</h1>
            <p className="text-gray-400">Accédez à votre compte Sankofa Sats</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
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
            </div>

            {/* Remember & Forgot */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-white/10 bg-[#141414]"
                />
                <span className="text-gray-400">Se souvenir de moi</span>
              </label>
              <Link
                href="/auth/forgot-password"
                className="text-[#ff9900] hover:underline"
              >
                Mot de passe oublié ?
              </Link>
            </div>

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
                  Se connecter
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </motion.button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-[#1e1e1e] text-gray-400">OU</span>
            </div>
          </div>

          {/* Wallet Login Options */}
          <div className="space-y-3">
            <button className="w-full py-3 bg-[#141414] border border-white/10 rounded-lg hover:border-[#ff9900] transition-colors flex items-center justify-center gap-2">
              <Bitcoin className="w-5 h-5 text-[#ff9900]" />
              <span>Connecter avec Alby</span>
            </button>
            <button className="w-full py-3 bg-[#141414] border border-white/10 rounded-lg hover:border-[#ff9900] transition-colors flex items-center justify-center gap-2">
              <Bitcoin className="w-5 h-5 text-[#ff9900]" />
              <span>Connecter avec Phoenix</span>
            </button>
          </div>

          {/* Sign Up Link */}
          <div className="mt-6 text-center text-sm">
            <span className="text-gray-400">Pas encore de compte ? </span>
            <Link
              href="/register"
              className="text-[#ff9900] font-semibold hover:underline"
            >
              Créer un compte
            </Link>
          </div>
        </motion.div>

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
