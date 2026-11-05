"use client";

import { motion } from "framer-motion";
import { Droplets } from "lucide-react";
import EccellenzaShell from "@/components/EccellenzaShell";
import { ECCELLENZE } from "@/lib/site";
import Reveal from "@/components/visual/Reveal";

const ecc = ECCELLENZE[1];

const PRODOTTI = [
  {
    nome: "La Bufala",
    foto: "/mozzarella-1.jpg",
    testo:
      "Pelle sottile che scrocchia sotto i denti, cuore succoso che rilascia latte al taglio.",
  },
  {
    nome: "La Ricotta",
    foto: "/ricotta.jpg",
    testo:
      "Dolce, cremosa e delicatissima. Perfetta da spalmare sul pane caldo o per i dolci della tradizione.",
  },
  {
    nome: "La Provola Affumicata",
    foto: "/provola.jpg",
    testo:
      "Affumicata naturalmente con paglia di grano. Un sapore intenso e rustico che conquista al primo morso.",
  },
];

export default function MozzarellaContent() {
  return (
    <EccellenzaShell ecc={ecc}>
      {/* COLLEZIONE */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="grid gap-8 md:grid-cols-2">
          {PRODOTTI.slice(0, 2).map((p, i) => (
            <motion.div
              key={p.nome}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              className="group relative h-[440px] overflow-hidden rounded-[2.5rem] border-2 border-line md:h-[540px]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.foto}
                alt={p.nome}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover opacity-90 transition-all duration-[1.4s] group-hover:scale-105 group-hover:opacity-100"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent p-8 md:p-10">
                <h3 className="font-display text-4xl font-bold">{p.nome}</h3>
                <p className="mt-3 max-w-lg text-lg leading-relaxed text-stone-200">
                  {p.testo}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="group relative mx-auto mt-8 h-[420px] overflow-hidden rounded-[2.5rem] border-2 border-line md:w-3/4"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={PRODOTTI[2].foto}
            alt={PRODOTTI[2].nome}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover opacity-90 transition-all duration-[1.4s] group-hover:scale-105 group-hover:opacity-100"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent p-8 text-center md:p-10">
            <h3 className="font-display text-4xl font-bold">{PRODOTTI[2].nome}</h3>
            <p className="mx-auto mt-3 max-w-xl text-lg leading-relaxed text-stone-200">
              {PRODOTTI[2].testo}
            </p>
          </div>
        </motion.div>
      </section>

      {/* CHIUSURA */}
      <section className="px-6 py-20 text-center">
        <Droplets
          className="mx-auto mb-6"
          size={36}
          style={{ color: ecc.colore }}
          aria-hidden="true"
        />
        <h2 className="mx-auto max-w-4xl font-display text-4xl font-bold leading-tight md:text-6xl">
          <Reveal testo="Latte, sale, caglio." />{" "}
          <Reveal
            testo="La perfezione non ha bisogno di altro."
            className="italic"
            delay={0.15}
            style={{ color: ecc.colore }}
          />
        </h2>
        <p className="mt-6 text-sm font-bold uppercase tracking-[0.3em] text-mute">
          Disponibile fresca tutti i giorni
        </p>
      </section>
    </EccellenzaShell>
  );
}
