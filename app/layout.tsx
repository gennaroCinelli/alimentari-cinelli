import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Playfair_Display } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import ScrollProgress from "@/components/visual/ScrollProgress";
import ScrollRestore from "@/components/visual/ScrollRestore";
import WhatsAppButton from "@/components/WhatsAppButton";

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.alimentaricinelli.it"),
  title: {
    default:
      "Alimentari Cinelli · Frutta, verdura e salumi a Sant'Agata de' Goti dal 1986",
    template: "%s | Alimentari Cinelli",
  },
  description:
    "Alimentari e Frutta Cinelli Domenico. Dal 1986 il meglio della tradizione a Sant'Agata de' Goti: frutta e verdura di stagione, salumi DOP, pane a legna, mozzarelle e le eccellenze campane. Ordina anche su WhatsApp.",
  keywords: [
    "alimentari Sant'Agata de' Goti",
    "frutta e verdura Sant'Agata de' Goti",
    "mela annurca",
    "mozzarella di bufala",
    "salumi DOP",
    "Cinelli",
  ],
  openGraph: {
    title: "Alimentari Cinelli · Dal 1986",
    description:
      "Dal produttore, direttamente a te. Frutta, verdura, salumi e le eccellenze di Sant'Agata de' Goti.",
    images: ["/esterno.jpeg"],
    locale: "it_IT",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0b",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="it" className="scroll-smooth">
      <body
        className={`${grotesk.variable} ${playfair.variable} grain bg-noir font-sans text-ink antialiased`}
      >
        <ScrollProgress />
        <ScrollRestore />

        <Navbar />
        <div className="flex min-h-screen flex-col">
          <div className="flex-grow">{children}</div>
          <Footer />
        </div>

        <WhatsAppButton />
        <CookieBanner />
      </body>
    </html>
  );
}
