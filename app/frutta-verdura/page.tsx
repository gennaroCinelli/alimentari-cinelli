"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Search, Star, X, ArrowLeft, Sparkles } from "lucide-react";
import { PRODOTTI, type Prodotto } from "@/lib/prodotti";
import Reveal from "@/components/visual/Reveal";

type Filtro = "tutti" | "frutta" | "verdura" | "specialita";

const FILTRI: { id: Filtro; label: string }[] = [
  { id: "tutti", label: "Tutti" },
  { id: "frutta", label: "Frutta" },
  { id: "verdura", label: "Verdura" },
  { id: "specialita", label: "✦ Specialità" },
];

function CardProdotto({ p, indice }: { p: Prodotto; indice: number }) {
  if (p.isSpecial) {
    return (
      <motion.div
        layout
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.94 }}
        transition={{ duration: 0.3 }}
        className="col-span-2 sm:col-span-1"
      >
        <Link
          href="/mela-annurca"
          className="group block h-full overflow-hidden rounded-[1.6rem] border-2 border-red-500/50 bg-[#161011] shadow-[0_0_60px_rgba(230,59,46,0.15)] transition-transform hover:scale-[1.02]"
          aria-label={`Scopri la storia della ${p.nome}`}
        >
          <div className="flex items-center justify-center gap-2 bg-gradient-to-r from-red-700 via-red-600 to-red-700 py-2 text-xs font-bold uppercase tracking-[0.3em] text-white">
            <Star size={12} fill="white" /> Specialità <Star size={12} fill="white" />
          </div>
          <div className="h-52 overflow-hidden bg-white/95 p-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={p.img}
              alt={p.nome}
              loading="lazy"
              className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-110"
            />
          </div>
          <div className="p-5">
            <p className="text-xs font-bold tracking-[0.2em] text-red-400 uppercase">
              {p.category}
            </p>
            <h3 className="mt-1 font-display text-2xl font-bold">{p.nome}</h3>
            <p className="mt-1 text-base text-mute">{p.descrizione}</p>
            <span className="mt-5 inline-flex items-center gap-2 rounded-xl bg-red-600 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-transform group-hover:scale-105">
              Scopri la storia
            </span>
          </div>
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.94 }}
      transition={{ duration: 0.3, delay: Math.min(indice * 0.02, 0.2) }}
    >
      <div className="h-full overflow-hidden rounded-[1.4rem] border border-line bg-surface transition-colors hover:border-accent/40">
        <div className="h-44 overflow-hidden bg-white/95 p-2 md:h-52 md:p-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={p.img}
            alt={p.nome}
            loading="lazy"
            className="h-full w-full object-contain"
          />
        </div>
        <div className="p-4 md:p-5">
          <p className="text-[11px] font-bold tracking-[0.2em] text-accent uppercase">
            {p.category}
          </p>
          <h3 className="mt-1 text-lg font-bold leading-tight md:text-xl">
            {p.nome}
          </h3>
          <p className="mt-1.5 hidden text-sm leading-snug text-mute md:line-clamp-2 md:block">
            {p.descrizione}
          </p>
          <p className="mt-4 flex items-center gap-2 border-t border-line pt-3 text-xs font-bold uppercase tracking-wide text-green-400">
            <span className="h-2 w-2 rounded-full bg-green-400" aria-hidden="true" />
            Di stagione
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function FruttaVerduraPage() {
  const [filtro, setFiltro] = useState<Filtro>("tutti");
  const [ricerca, setRicerca] = useState("");

  const lista = useMemo(() => {
    const q = ricerca.trim().toLowerCase();
    return PRODOTTI.filter((p) => {
      const passaFiltro =
        filtro === "tutti"
          ? true
          : filtro === "specialita"
            ? !!p.isSpecial
            : p.tipo === filtro;
      const passaRicerca =
        !q ||
        p.nome.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.descrizione.toLowerCase().includes(q);
      return passaFiltro && passaRicerca;
    });
  }, [filtro, ricerca]);

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
          <span className="text-accent">Vetrina</span>
        </div>
        <div className="mt-6 grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h1 className="font-display text-5xl font-bold uppercase leading-[0.95] md:text-7xl">
              <Reveal testo="Scelti per te" />
              <br />
              <Reveal testo="ogni mattina." className="italic text-accent" delay={0.15} />
            </h1>
            <p className="mt-6 max-w-lg text-xl leading-relaxed text-mute">
              Ecco il nostro catalogo: {PRODOTTI.length} prodotti tra frutta,
              verdura e specialità. Quello che vedi qui lo trovi in bottega —
              e se cerchi qualcosa di particolare, chiedici pure.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative h-[260px] overflow-hidden rounded-[2.5rem] border-2 border-line md:h-[380px]"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/hero-frutta.jpg"
              alt="Il banco della frutta"
              className="h-full w-full object-cover"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-noir/70 to-transparent"
              aria-hidden="true"
            />
          </motion.div>
        </div>
      </section>

      {/* RICERCA + FILTRI (fissi sotto la navbar) */}
      <section className="sticky top-20 z-40 mt-14 border-y border-line bg-noir/95 py-4 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-3 px-6">
          <div className="relative min-w-[240px] flex-1 md:max-w-sm">
            <Search
              size={20}
              className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-mute"
              aria-hidden="true"
            />
            <label htmlFor="cerca-prodotto" className="sr-only">
              Cerca un prodotto
            </label>
            <input
              id="cerca-prodotto"
              value={ricerca}
              onChange={(e) => setRicerca(e.target.value)}
              placeholder="Cerca un prodotto…"
              className="h-14 w-full rounded-2xl border-2 border-line bg-surface pl-14 pr-12 text-lg outline-none transition-colors placeholder:text-mute/70 focus:border-accent"
            />
            {ricerca && (
              <button
                onClick={() => setRicerca("")}
                aria-label="Cancella la ricerca"
                className="absolute right-4 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-mute hover:bg-white/10 hover:text-ink"
              >
                <X size={18} />
              </button>
            )}
          </div>

          <div className="flex flex-wrap gap-2.5" role="group" aria-label="Filtra i prodotti">
            {FILTRI.map((f) => (
              <button
                key={f.id}
                onClick={() => setFiltro(f.id)}
                aria-pressed={filtro === f.id}
                className={`relative min-h-12 rounded-2xl px-6 py-3 text-sm font-bold uppercase tracking-wide transition-colors ${
                  filtro === f.id
                    ? "text-white"
                    : "border-2 border-line text-mute hover:border-accent/50 hover:text-ink"
                }`}
              >
                {filtro === f.id && (
                  <motion.span
                    layoutId="filtro-pill"
                    className="absolute inset-0 rounded-2xl bg-accent"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative z-10">{f.label}</span>
              </button>
            ))}
          </div>

          <span className="ml-auto text-base text-mute" aria-live="polite">
            {lista.length} {lista.length === 1 ? "prodotto" : "prodotti"}
          </span>
        </div>
      </section>

      {/* GRIGLIA */}
      <section className="mx-auto max-w-7xl px-6 py-10 pb-28">
        {lista.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center gap-5 py-28 text-center"
          >
            <Sparkles size={44} className="text-accent" aria-hidden="true" />
            <h2 className="font-display text-4xl font-bold">
              Nessun prodotto trovato
            </h2>
            <p className="max-w-md text-lg text-mute">
              Non c&apos;è «{ricerca}» in vetrina adesso. Prova con un&apos;altra
              parola, oppure chiamaci: forse possiamo trovarlo per te.
            </p>
            <button
              onClick={() => {
                setRicerca("");
                setFiltro("tutti");
              }}
              className="mt-2 min-h-14 rounded-2xl bg-accent px-8 py-3 text-base font-bold uppercase tracking-wide text-white transition-colors hover:bg-accent-deep"
            >
              Mostra tutto
            </button>
          </motion.div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-5 lg:grid-cols-4 xl:grid-cols-5"
          >
            <AnimatePresence mode="popLayout">
              {lista.map((p, i) => (
                <CardProdotto key={p.nome} p={p} indice={i} />
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </section>
    </main>
  );
}
