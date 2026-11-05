"use client";

import { motion } from "framer-motion";
import EccellenzaShell from "@/components/EccellenzaShell";
import { ECCELLENZE } from "@/lib/site";

const ecc = ECCELLENZE[3];

const PASSI = [
  {
    n: "01",
    titolo: "L'impasto povero",
    testo:
      "La ricetta è quella di una volta, semplice e genuina: farina di grano duro, olio extravergine d'oliva locale e vino bianco. E il tocco segreto: i semi di finocchietto selvatico che donano quel profumo inconfondibile.",
  },
  {
    n: "02",
    titolo: "L'intreccio a mano",
    testo:
      "Ogni 'nfrennula è lavorata rigorosamente a mano. L'impasto viene steso e intrecciato nella tipica forma a «8» o a nodo. Non esistono stampi, solo l'abilità delle mani tramandata da generazioni.",
  },
  {
    n: "03",
    titolo: "Bollite e infornate",
    testo:
      "Prima vengono scottate in acqua bollente (la «scauratura»), poi passano in forno finché non diventano dorate e croccanti. È la doppia cottura che le rende friabili, perfette col vino.",
  },
];

export default function NfrennuleContent() {
  return (
    <EccellenzaShell ecc={ecc}>
      {/* PASSI con numeri giganti */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        {PASSI.map((p, i) => (
          <motion.div
            key={p.n}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className={`mb-20 grid items-center gap-8 border-b border-line pb-20 last:mb-0 last:border-0 last:pb-0 md:grid-cols-[auto_1fr] ${
              i % 2 === 1 ? "md:text-right" : ""
            }`}
          >
            <span
              className="select-none font-display text-8xl font-bold leading-none opacity-50 md:text-9xl"
              style={{ color: ecc.colore }}
              aria-hidden="true"
            >
              {p.n}
            </span>
            <div className={i % 2 === 1 ? "md:justify-self-end" : ""}>
              <h2 className="font-display text-4xl font-bold md:text-5xl">
                {p.titolo}
              </h2>
              <p
                className={`mt-5 max-w-2xl text-xl leading-relaxed text-mute ${
                  i % 2 === 1 ? "md:ml-auto" : ""
                }`}
              >
                {p.testo}
              </p>
            </div>
          </motion.div>
        ))}
      </section>

      {/* CHIUSURA CON SFONDO */}
      <section className="relative overflow-hidden py-36 text-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/nfrennule-bg.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" aria-hidden="true" />
        <div className="relative mx-auto max-w-3xl px-6">
          <span
            className="mb-6 block text-sm font-bold uppercase tracking-[0.3em]"
            style={{ color: ecc.colore }}
          >
            Il tarallo di Sant&apos;Agata
          </span>
          <h2 className="font-display text-5xl font-bold uppercase md:text-7xl">
            Friabili, profumate, uniche.
          </h2>
          <p className="mt-6 text-xl font-light text-stone-100 md:text-2xl">
            Passa in bottega a prendere il tuo sacchetto appena sfornato.
          </p>
        </div>
      </section>
    </EccellenzaShell>
  );
}
