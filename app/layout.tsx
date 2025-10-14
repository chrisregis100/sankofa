import { Inter } from "next/font/google";
import ThemeProvider from "../components/ThemeProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sankofa Sats - Bitcoin Lightning Lending",
  description:
    "Plateforme de prêt P2P décentralisée sur Bitcoin Lightning Network. Prêtez, empruntez et gagnez avec Bitcoin.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
