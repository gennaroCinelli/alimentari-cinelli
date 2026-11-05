"use client";

import { motion } from "framer-motion";
import { Sun, Package, Leaf, Award } from "lucide-react";
import EccellenzaShell from "@/components/EccellenzaShell";
import { ECCELLENZE } from "@/lib/site";

const ecc = ECCELLENZE[0];

const PASSI = [
  {
    n: "01",
    titolo: "Verde e acerba",
    img: "/annurca-verde.jpg",
    didascalia: "La raccolta a ottobre",
    testo:
      "A differenza delle altre mele, l'Annurca viene raccolta quando è ancora verde, acerba e dura. Non è pronta per essere mangiata: qui inizia il viaggio speciale che la rende unica al mondo.",
  },
  {
    n: "02",
    titolo: "Dormire sulla paglia",
    img: "/annurca-melaio.jpg",
    didascalia: "Il “melaio”",
    testo:
      "Le mele vengono stese a terra nei melai, su letti di paglia o aghi di pino. Restano lì per settimane: i contadini le girano a mano, una per una, per farle prendere il sole su tutti i lati.",
  },
  {
    n: "03",
    titolo: "Dalla terra alla cassetta",
    img: "/annurca-cassetta.jpg",
    didascalia: "Pronte per voi",
    testo:
      "Una volta raggiunto quel rosso perfetto e uniforme, vengono raccolte di nuovo da terra, pulite, selezionate e adagiate con cura nelle cassette di legno, pronte ad arrivare freschissime da noi.",
  },
];

const SPECS = [
  { icona: Sun, titolo: "Arrossamento", testo: "Naturale al sole nei melai, 15–20 giorni" },
  { icona: Leaf, titolo: "IGP Campania", testo: "Riconoscimento europeo di origine" },
  { icona: Award, titolo: "Polpa", testo: "Crocante, succosa, profumatissima" },
  { icona: Package, titolo: "Conservazione", testo: "Tiene fino a primavera se al fresco" },
];

export default function AnnurcaContent() {
  return (
    <EccellenzaShell ecc={ecc}>
      {/* PASSI */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        {PASSI.map((p, i) => (
          <motion.div
            key={p.n}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className={`mb-24 grid items-center gap-10 last:mb-0 md:grid-cols-2 md:gap-16 ${
              i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
            }`}
          >
            <div>
              <span
                className="font-display text-7xl italic opacity-50 md:text-8xl"
                style={{ color: ecc.colore }}
                aria-hidden="true"
              >
                {p.n}
              </span>
              <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">
                {p.titolo}
              </h2>
              <p className="mt-5 max-w-xl text-xl leading-relaxed text-mute">
                {p.testo}
              </p>
            </div>
            <div className="relative h-[360px] overflow-hidden rounded-[2rem] border-2 border-line md:h-[460px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.img}
                alt={p.titolo}
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <span className="absolute bottom-5 left-5 rounded-full border border-white/20 bg-black/70 px-5 py-2 text-sm font-bold uppercase tracking-[0.2em] backdrop-blur-md">
                {p.didascalia}
              </span>
            </div>
          </motion.div>
        ))}
      </section>

      {/* IN FORMA BREVE */}
      <section className="border-y border-line bg-surface py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 px-6 sm:grid-cols-2 lg:grid-cols-4">
          {SPECS.map((s, i) => (
            <motion.div
              key={s.titolo}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="rounded-[1.6rem] border-2 border-line bg-noir p-8 transition-colors hover:border-red-500/50"
            >
              <s.icona className="mb-5" size={30} style={{ color: ecc.colore }} aria-hidden="true" />
              <h3 className="text-xl font-bold">{s.titolo}</h3>
              <p className="mt-2 text-lg leading-relaxed text-mute">{s.testo}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </EccellenzaShell>
  );
}
