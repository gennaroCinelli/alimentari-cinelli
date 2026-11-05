"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Leaf, Calendar, ShoppingBasket, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Counter from "@/components/visual/Counter";
import Reveal from "@/components/visual/Reveal";
import Marquee from "@/components/visual/Marquee";

const FOTO = ["/slider1.png", "/slider2.png", "/esterno.jpeg"];

const TAPPE = [
  {
    icona: Leaf,
    anno: "All'inizio",
    titolo: "La piccola stanza",
    testo:
      "Tutto inizia ben prima del 1986, in quella che all'epoca era solo una piccola stanza. Vendevamo ciò che le nostre mani coltivavano. Non c'erano intermediari, solo il sapore autentico della natura.",
  },
  {
    icona: Calendar,
    anno: "1986",
    titolo: "La svolta",
    testo:
      "Con l'ingresso della terza generazione, abbiamo sentito l'esigenza di crescere. Abbiamo affiancato all'ortofrutta un reparto alimentari completo, diventando un punto di riferimento quotidiano.",
  },
  {
    icona: ShoppingBasket,
    anno: "Oggi",
    titolo: "La bottega di adesso",
    testo:
      "Siamo un negozio moderno che non ha dimenticato da dove viene. Il nostro cuore pulsante resta la frutta e la verdura, unendo la comodità alla freschezza ineguagliabile.",
  },
];

export default function ChiSiamoPage() {
  const [indice, setIndice] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndice((p) => (p + 1) % FOTO.length), 4500);
    return () => clearInterval(t);
  }, []);

  return (
    <main className="pt-32 md:pt-40">
      {/* HERO */}
      <section className="mx-auto max-w-7xl px-6">
        <div className="flex items-center gap-3 text-sm font-bold uppercase tracking-[0.3em]">
          <Link
            href="/"
            className="flex items-center gap-2 text-mute transition-colors hover:text-ink"
          >
            <ArrowLeft size={16} /> Home
          </Link>
          <span className="text-mute/50">/</span>
          <span className="text-accent">Chi Siamo</span>
        </div>
        <h1 className="mt-6 font-display text-5xl font-bold uppercase leading-[0.95] md:text-8xl">
          <Reveal testo="Più di un negozio." />
          <br />
          <Reveal testo="Una famiglia." className="italic text-accent" delay={0.15} />
        </h1>
        <p className="mt-8 font-display text-2xl italic text-mute md:text-3xl">
          “Tutto nasce dalla terra.”
        </p>
      </section>

      {/* TIMELINE + FOTO */}
      <section className="mx-auto grid max-w-7xl gap-16 px-6 py-20 md:py-28 lg:grid-cols-[1fr_480px]">
        {/* Timeline */}
        <div className="relative">
          <div
            className="absolute bottom-0 left-[9px] top-2 w-0.5 bg-line"
            aria-hidden="true"
          />
          {TAPPE.map((t, i) => (
            <motion.div
              key={t.anno}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative pb-16 pl-14 last:pb-0"
            >
              <span
                className="absolute left-0 top-1 flex h-5 w-5 items-center justify-center rounded-full border-[3px] border-accent bg-noir"
                aria-hidden="true"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
              <span className="font-display text-2xl italic text-accent">
                {t.anno}
              </span>
              <h2 className="mt-1 flex flex-wrap items-center gap-3 font-display text-3xl font-bold md:text-5xl">
                {t.titolo}
                <t.icona size={28} className="text-accent/70" aria-hidden="true" />
              </h2>
              <p className="mt-5 max-w-2xl text-xl leading-relaxed text-mute">
                {t.testo}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Foto sticky */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <div className="relative aspect-[3/4] overflow-hidden rounded-[2.5rem] border-2 border-line">
            <AnimatePresence mode="wait">
              <motion.img
                key={indice}
                src={FOTO[indice]}
                alt="La bottega Cinelli"
                initial={{ opacity: 0, scale: 1.06 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </AnimatePresence>
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 to-transparent"
              aria-hidden="true"
            />
            <div className="absolute bottom-7 left-7">
              <p className="font-display text-3xl font-bold">Cinelli Domenico</p>
              <p className="mt-1 text-sm font-bold uppercase tracking-[0.25em] text-accent">
                Passione e dedizione
              </p>
            </div>
          </div>

          <div className="mt-5 flex justify-center gap-2" role="group" aria-label="Sfoglia le foto">
            {FOTO.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndice(i)}
                aria-label={`Vai alla foto ${i + 1}`}
                aria-pressed={i === indice}
                className={`h-4 rounded-full transition-all duration-500 ${
                  i === indice
                    ? "w-12 bg-accent"
                    : "w-4 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>

          {/* Numeri */}
          <div className="mt-10 grid grid-cols-3 gap-4">
            {[
              { n: 40, l: "Anni" },
              { n: 3, l: "Generazioni" },
              { n: 100, s: "+", l: "Prodotti" },
            ].map((c) => (
              <div
                key={c.l}
                className="rounded-3xl border border-line bg-surface p-5 text-center"
              >
                <p className="font-display text-4xl font-bold text-accent md:text-5xl">
                  <Counter finoA={c.n} suffisso={c.s ?? ""} />
                </p>
                <p className="mt-2 text-xs font-bold uppercase tracking-[0.15em] text-mute">
                  {c.l}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Marquee
        lento
        voci={[
          "Dal 1986",
          "Tre generazioni",
          "Fornitori selezionati",
          "Freschezza quotidiana",
          "Sant'Agata de' Goti",
        ]}
        className="border-y border-line py-6 font-display text-2xl italic text-mute md:text-3xl"
      />

      {/* CTA finale */}
      <section className="mx-auto max-w-7xl px-6 py-20 text-center">
        <h2 className="mx-auto max-w-3xl font-display text-4xl font-bold uppercase md:text-5xl">
          <Reveal testo="Vieni a conoscerci," />{" "}
          <Reveal
            testo="il caffè lo offriamo noi."
            className="italic text-accent"
            delay={0.15}
          />
        </h2>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/contatti"
            className="inline-flex min-h-16 items-center rounded-2xl bg-accent px-10 py-4 text-lg font-bold uppercase tracking-wide text-white transition-colors hover:bg-accent-deep"
          >
            Dove siamo
          </Link>
          <Link
            href="/frutta-verdura"
            className="inline-flex min-h-16 items-center rounded-2xl border-2 border-line px-10 py-4 text-lg font-bold uppercase tracking-wide text-ink transition-colors hover:border-accent hover:text-accent"
          >
            Guarda la vetrina
          </Link>
        </div>
      </section>
    </main>
  );
}
