"use client";
import { Bell, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function Topbar() {
  const { theme, setTheme } = useTheme();
  return (
    <header className="flex items-center justify-between p-4 border-b border-gray-800 bg-[#141414]">
      <div className="text-sm text-gray-300">
        Welcome back, <strong>Abena</strong>
      </div>
      <div className="flex items-center gap-4">
        <Bell className="text-gray-300" />
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-2 rounded bg-[#1e1e1e]"
        >
          {theme === "dark" ? (
            <Sun className="text-[#ff9900]" />
          ) : (
            <Moon className="text-[#ff9900]" />
          )}
        </button>
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-500 to-orange-600 flex items-center justify-center text-black font-bold">
          A
        </div>
      </div>
    </header>
  );
}
