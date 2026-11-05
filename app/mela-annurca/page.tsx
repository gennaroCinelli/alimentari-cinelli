import type { Metadata } from "next";
import AnnurcaContent from "@/components/eccellenze/Annurca";

export const metadata: Metadata = {
  title: "Mela Annurca IGP — L'oro rosso della Campania",
  description:
    "La regina delle mele, raccolta verde e arrossata al sole nei melai. Mela Annurca Campana IGP fresca in bottega a Sant'Agata de' Goti.",
};

export default function MelaAnnurcaPage() {
  return <AnnurcaContent />;
}
