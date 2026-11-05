import type { Metadata } from "next";
import NfrennuleContent from "@/components/eccellenze/Nfrennule";

export const metadata: Metadata = {
  title: "'Nfrennule — Il tarallo di Sant'Agata de' Goti",
  description:
    "Le 'nfrennule: acqua, farina, olio e vino, intrecciate a mano e cotte al forno. Il sapore antico della festa sannita.",
};

export default function NfrennulePage() {
  return <NfrennuleContent />;
}
