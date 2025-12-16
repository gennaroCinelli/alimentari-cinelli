import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

// Import dei componenti
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

// Configurazione Font
const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
  display: "swap" 
});

const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  variable: "--font-serif", 
  display: "swap" 
});

// Metadati del sito (SEO)
export const metadata: Metadata = {
  title: "Alimentari Cinelli | Dal 1986",
  description: "Alimentari e Frutta Cinelli Domenico - Qualità e Tradizione a Sant'Agata de' Goti. Salumi, formaggi e prodotti tipici campani.",
  icons: {
    icon: "/favicon.ico", // Assicurati di avere una favicon in public, altrimenti ignora questa riga
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} bg-[#0a0a0a] text-white antialiased flex flex-col min-h-screen`}>
        
        {/* BARRA DI NAVIGAZIONE */}
        <Navbar />
        
        {/* CONTENUTO PRINCIPALE */}
        {/* flex-grow assicura che questo blocco occupi tutto lo spazio disponibile spingendo il footer giù */}
        <div className="flex-grow">
          {children}
        </div>
        
        {/* PIÈ DI PAGINA */}
        <Footer />
        
        {/* BANNER COOKIE (Appare sopra tutto) */}
        <CookieBanner />
        
      </body>
    </html>
  );
}