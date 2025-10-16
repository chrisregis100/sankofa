"use client";
import {
  CreditCard,
  Home,
  LogOut,
  PieChart,
  Pocket,
  Shield,
  TrendingUp,
  User,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Sidebar() {
  const pathname = usePathname();
  const [userRole, setUserRole] = useState<
    "admin" | "lender" | "borrower" | null
  >(null);

  useEffect(() => {
    // Récupérer le rôle de l'utilisateur depuis localStorage
    const profile = localStorage.getItem("userProfile");
    if (profile === "admin") setUserRole("admin");
    else if (profile === "lender") setUserRole("lender");
    else if (profile === "borrower") setUserRole("borrower");
    else setUserRole("borrower"); // Par défaut
  }, []);

  // Items communs à tous les utilisateurs
  const commonItems = [
    { href: "/dashboard/wallet", label: "Portefeuille", icon: Pocket },
    { href: "/dashboard/profile", label: "Profil", icon: User },
  ];

  // Items spécifiques au rôle
  const roleItems = {
    admin: [
      { href: "/dashboard/admin", label: "Super Admin", icon: Shield },
      { href: "/dashboard/analytics", label: "Analytique", icon: PieChart },
      { href: "/dashboard/loans", label: "Tous les Prêts", icon: CreditCard },
    ],
    lender: [
      { href: "/dashboard/lender", label: "Mon Dashboard", icon: TrendingUp },
      { href: "/dashboard/loans", label: "Mes Prêts", icon: CreditCard },
      { href: "/dashboard/analytics", label: "Analytique", icon: PieChart },
    ],
    borrower: [
      { href: "/dashboard", label: "Dashboard", icon: Home },
      { href: "/dashboard/loans", label: "Mes Prêts", icon: CreditCard },
      { href: "/dashboard/analytics", label: "Analytique", icon: PieChart },
    ],
  };

  const items = userRole
    ? [...roleItems[userRole], ...commonItems]
    : commonItems;

  return (
    <aside className="w-72 min-h-screen border-r border-gray-800 p-4 bg-[#141414]">
      <Link
        href="/"
        className="block mb-8 text-center hover:opacity-80 transition-opacity"
      >
        <div className="text-2xl font-bold text-[#ff9900]">Sankofa Sats</div>
        <div className="text-sm text-gray-400">Bitcoin Lightning Lending</div>
      </Link>

      {/* Role Badge */}
      {userRole && (
        <div className="mb-6 p-3 bg-[#1e1e1e] border border-white/10 rounded-lg">
          <div className="flex items-center gap-2 mb-1">
            {userRole === "admin" && (
              <Shield className="w-4 h-4 text-purple-400" />
            )}
            {userRole === "lender" && (
              <TrendingUp className="w-4 h-4 text-green-400" />
            )}
            {userRole === "borrower" && (
              <User className="w-4 h-4 text-blue-400" />
            )}
            <span className="text-sm font-semibold capitalize">
              {userRole === "admin"
                ? "Super Admin"
                : userRole === "lender"
                ? "Prêteur"
                : "Emprunteur"}
            </span>
          </div>
          <div className="text-xs text-gray-400">
            {userRole === "admin" && "Gestion complète de la plateforme"}
            {userRole === "lender" && "Investisseur vérifié"}
            {userRole === "borrower" && "Compte emprunteur"}
          </div>
        </div>
      )}
      <div className="flex flex-col  justify-between">
        <nav className="space-y-2">
          {items.map((it) => {
            const isActive = pathname === it.href;
            return (
              <Link
                key={it.href}
                href={it.href}
                className={`flex items-center gap-3 p-3 rounded-lg transition-all ${
                  isActive
                    ? "bg-gradient-to-r from-[#ff9900]/20 to-[#ff7700]/20 border border-[#ff9900]/50 text-[#ff9900]"
                    : "hover:bg-[#1e1e1e] hover:border hover:border-white/10"
                }`}
              >
                <it.icon
                  className={isActive ? "text-[#ff9900]" : "text-gray-400"}
                />
                <span className={isActive ? "font-semibold" : ""}>
                  {it.label}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* Logout Button */}
        <div className=" bottom-6 left-4 right-4">
          <Link
            href="/"
            onClick={() => {
              localStorage.clear();
            }}
            className="flex items-center gap-3 p-3 rounded-lg bg-red-600/10 hover:bg-red-600/20 border border-red-600/30 transition-colors"
          >
            <LogOut className="text-red-400" />
            <span className="text-red-400 font-medium">Déconnexion</span>
          </Link>
        </div>
      </div>
    </aside>
  );
}
