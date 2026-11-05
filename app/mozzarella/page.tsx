import type { Metadata } from "next";
import MozzarellaContent from "@/components/eccellenze/Mozzarella";

export const metadata: Metadata = {
  title: "Mozzarella di Bufala — Oro bianco, ogni mattina",
  description:
    "Mozzarella di bufala campana che arriva fresca ogni mattina, ancora tiepida nel suo siero. Anche ricotta e provola affumicata.",
};

export default function MozzarellaPage() {
  return <MozzarellaContent />;
}
