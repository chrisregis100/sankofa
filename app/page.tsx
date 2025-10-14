"use client";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Bitcoin,
  Globe,
  Lock,
  Shield,
  Sparkles,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const stats = [
  { label: "Prêts accordés", value: "2.4M", suffix: " SATS" },
  { label: "Utilisateurs actifs", value: "12K", suffix: "+" },
  { label: "Taux de remboursement", value: "98", suffix: "%" },
  { label: "Pays couverts", value: "15", suffix: "" },
];

const features = [
  {
    icon: Zap,
    title: "Paiements Instantanés",
    description:
      "Transactions Lightning ultra-rapides avec frais minimaux. Recevez votre prêt en quelques secondes.",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Shield,
    title: "Sécurité Maximale",
    description:
      "Smart contracts Bitcoin, garanties cryptographiques et audit trail complet de chaque transaction.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: TrendingUp,
    title: "Rendements Attractifs",
    description:
      "Prêteurs gagnent jusqu'à 8% APY. Emprunteurs accèdent à des taux compétitifs sans banque.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Users,
    title: "P2P Décentralisé",
    description:
      "Pas d'intermédiaire. Connectez directement prêteurs et emprunteurs via Lightning Network.",
    color: "from-purple-500 to-pink-500",
  },
];

const howItWorks = [
  {
    step: "01",
    title: "Connectez votre Wallet",
    description:
      "Alby, Phoenix, Mutiny... Choisissez votre wallet Lightning préféré.",
  },
  {
    step: "02",
    title: "Déposez ou Empruntez",
    description:
      "Prêteurs déposent des sats. Emprunteurs demandent un prêt avec garantie.",
  },
  {
    step: "03",
    title: "Gagnez ou Remboursez",
    description: "Remboursements automatiques. Intérêts versés en temps réel.",
  },
];

export default function LandingPage() {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] via-[#141414] to-[#1e1e1e] text-white overflow-hidden">
      {/* Top Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#141414]/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Bitcoin className="w-6 h-6 text-[#ff9900]" />
            <span className="text-xl font-bold text-[#ff9900]">
              Sankofa Sats
            </span>
          </Link>
          <div className="flex items-center gap-4">
            <Link
              href="/login"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Se connecter
            </Link>
            <Link href="/register">
              <button className="px-5 py-2 bg-gradient-to-r from-[#ff9900] to-[#ff7700] rounded-full font-semibold hover:shadow-lg hover:shadow-[#ff9900]/50 transition-all">
                S'inscrire
              </button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        {/* Animated Background Circles */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-20 right-10 w-96 h-96 bg-[#ff9900] opacity-10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500 opacity-10 rounded-full blur-3xl"
        />

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-[#ff9900]/10 border border-[#ff9900]/30 rounded-full"
          >
            <Sparkles className="w-4 h-4 text-[#ff9900]" />
            <span className="text-sm text-[#ff9900]">
              Powered by Bitcoin Lightning Network
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-[#ff9900] to-white bg-clip-text text-transparent"
          >
            Sankofa Sats
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-4"
          >
            Le futur du crédit décentralisé en Afrique
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto"
          >
            Prêtez, empruntez et gagnez avec Bitcoin. Transactions instantanées,
            frais minimaux, sécurité maximale. Bienvenue dans la finance
            décentralisée.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/register">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-gradient-to-r from-[#ff9900] to-[#ff7700] rounded-full font-semibold flex items-center gap-2 shadow-lg shadow-[#ff9900]/50"
              >
                Commencer maintenant
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
            <Link href="#how-it-works">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full font-semibold hover:bg-white/10 transition-colors"
              >
                Comment ça marche ?
              </motion.button>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl"
              >
                <div className="text-3xl md:text-4xl font-bold text-[#ff9900] mb-2">
                  {stat.value}
                  <span className="text-xl">{stat.suffix}</span>
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 bg-white/50 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-32 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Pourquoi choisir{" "}
              <span className="text-[#ff9900]">Sankofa Sats</span> ?
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              La première plateforme de prêt P2P sur Lightning Network conçue
              pour l'Afrique
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onHoverStart={() => setHoverIndex(index)}
                onHoverEnd={() => setHoverIndex(null)}
                className="group relative p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-white/30 transition-all duration-300"
              >
                <motion.div
                  animate={{
                    scale: hoverIndex === index ? 1.1 : 1,
                    rotate: hoverIndex === index ? 5 : 0,
                  }}
                  className={`w-16 h-16 mb-6 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center`}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section
        id="how-it-works"
        className="py-32 px-6 bg-gradient-to-b from-transparent to-[#0a0a0a]"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Simple en <span className="text-[#ff9900]">3 étapes</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Commencez à prêter ou emprunter en quelques minutes
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {howItWorks.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                <div className="text-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="inline-flex items-center justify-center w-20 h-20 mb-6 bg-gradient-to-br from-[#ff9900] to-[#ff7700] rounded-full text-3xl font-bold shadow-lg shadow-[#ff9900]/50"
                  >
                    {item.step}
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
                {index < howItWorks.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-[#ff9900] to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Sécurité et <span className="text-[#ff9900]">Transparence</span>{" "}
                avant tout
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                Votre confiance est notre priorité. Sankofa Sats utilise les
                technologies les plus avancées pour garantir la sécurité de vos
                fonds.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#ff9900]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Bitcoin className="w-6 h-6 text-[#ff9900]" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Bitcoin Native</h4>
                    <p className="text-sm text-gray-400">
                      Construit sur la blockchain la plus sécurisée au monde
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Lock className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">
                      Smart Contracts Audités
                    </h4>
                    <p className="text-sm text-gray-400">
                      Code open-source vérifié par des experts en sécurité
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Réseau Décentralisé</h4>
                    <p className="text-sm text-gray-400">
                      Pas de point central de défaillance, disponible 24/7
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative w-full h-96 bg-gradient-to-br from-[#ff9900]/20 to-blue-500/20 rounded-3xl overflow-hidden">
                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0 bg-gradient-to-br from-[#ff9900]/30 to-transparent"
                />
                <div className="absolute inset-0 backdrop-blur-3xl flex items-center justify-center">
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <Bitcoin className="w-32 h-32 text-[#ff9900]" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="p-12 bg-gradient-to-br from-[#ff9900]/20 to-blue-500/20 rounded-3xl border border-white/10 backdrop-blur-sm">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Prêt à rejoindre la révolution ?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Rejoignez des milliers d'utilisateurs qui font déjà confiance à
              Sankofa Sats
            </p>
            <Link href="/auth/register">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-10 py-5 bg-gradient-to-r from-[#ff9900] to-[#ff7700] rounded-full font-bold text-lg flex items-center gap-3 mx-auto shadow-2xl shadow-[#ff9900]/50"
              >
                Créer mon compte gratuitement
                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </motion.button>
            </Link>
            <p className="mt-6 text-sm text-gray-400">
              Sans engagement • Installation en 2 minutes • Aucune carte
              bancaire requise
            </p>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-2xl font-bold text-[#ff9900]">Sankofa Sats</div>
          <div className="flex gap-6 text-sm text-gray-400">
            <Link href="#" className="hover:text-white transition-colors">
              À propos
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Documentation
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Support
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Legal
            </Link>
          </div>
          <div className="text-sm text-gray-400">
            © 2025 Sankofa Sats. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
