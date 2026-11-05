import type { Metadata } from "next";
import PaneContent from "@/components/eccellenze/Pane";

export const metadata: Metadata = {
  title: "Pane cotto a legna — Crosta scura, mollica alta",
  description:
    "Pane vero con lievito madre e cottura a legna: crosta croccante, profumo di casa. Ogni giorno in bottega a Sant'Agata de' Goti.",
};

export default function PanePage() {
  return <PaneContent />;
}
