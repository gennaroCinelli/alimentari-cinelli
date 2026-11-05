import Hero from "@/components/home/Hero";
import ComeOrdinare from "@/components/home/ComeOrdinare";
import Reparti from "@/components/home/Reparti";
import EccellenzeScroll from "@/components/EccellenzeScroll";
import ChiSiamoTeaser from "@/components/home/ChiSiamoTeaser";
import ContattoCta from "@/components/home/ContattoCta";
import Marquee from "@/components/visual/Marquee";

// ---------------------------------------------------------------
// HOME — percorso semplice e lineare:
// chi siamo → come ordinare → cosa vendiamo → cosa c'è di speciale
// → dove e quando trovarci.
// ---------------------------------------------------------------
export default function Home() {
  return (
    <main>
      <Hero />

      <Marquee
        voci={[
          "Mela Annurca IGP",
          "Mozzarella fresca ogni mattina",
          "Pane cotto a legna",
          "Salumi DOP",
          "'Nfrennule di Sant'Agata",
          "Pomodoro del Piennolo",
          "Frutta di stagione",
        ]}
        className="border-y border-line bg-surface py-6 font-display text-2xl italic md:text-3xl"
      />

      <ComeOrdinare />
      <Reparti />
      <EccellenzeScroll />
      <ChiSiamoTeaser />
      <ContattoCta />
    </main>
  );
}
