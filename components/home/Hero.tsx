"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, MessageCircle, Apple } from "lucide-react";
import Particles from "@/components/visual/Particles";
import LiveStatus from "@/components/visual/LiveStatus";
import Reveal from "@/components/visual/Reveal";

// Badge circolare rotante (testo su percorso SVG, puramente decorativo)
function BadgeRotante() {
  return (
    <div className="relative hidden h-40 w-40 items-center justify-center lg:flex" aria-hidden="true">
      <svg viewBox="0 0 100 100" className="absolute inset-0 animate-spin-slow">
        <defs>
          <path
            id="cerchio"
            d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
          />
        </defs>
        <text className="fill-mute" style={{ fontSize: 7.4, letterSpacing: 2.6 }}>
          <textPath href="#cerchio">
            ALIMENTARI CINELLI · DAL 1986 · SANT&apos;AGATA DE&apos; GOTI ·
          </textPath>
        </text>
      </svg>
      <span className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-accent/50 bg-accent/10 text-accent">
        <Apple size={26} />
      </span>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="vignette relative flex min-h-svh flex-col overflow-hidden">
      {/* Atmosfera: bagliore caldo + particelle morbide */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute left-1/2 top-[-20%] h-[70vh] w-[90vw] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(255,122,56,0.14),transparent)] blur-2xl" />
        <div className="absolute bottom-[-30%] left-[-10%] h-[50vh] w-[50vw] rounded-full bg-[radial-gradient(closest-side,rgba(255,122,56,0.06),transparent)] blur-2xl" />
      </div>
      <Particles />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-6 pb-14 pt-36 md:pt-44">
        {/* Occhiello */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="mb-7 flex items-center gap-4"
        >
          <span className="h-0.5 w-14 bg-accent" aria-hidden="true" />
          <span className="text-sm font-bold tracking-[0.35em] text-accent uppercase md:text-base">
            Tre generazioni di gusto
          </span>
        </motion.div>

        {/* Titolo */}
        <h1 className="font-display font-bold uppercase leading-[0.95] tracking-tight">
          <span className="block text-[11vw] md:text-[8.6vw]">
            <Reveal testo="Dal produttore" delay={0.15} stagger={0.035} />
          </span>
          <span className="block text-[11vw] md:text-[8.6vw]">
            <Reveal testo="direttamente" delay={0.28} stagger={0.035} />{" "}
            <Reveal
              testo="a te."
              delay={0.42}
              className="italic text-accent"
              stagger={0.06}
            />
          </span>
        </h1>

        {/* Sottotitolo: frasi brevi e chiare */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-8 max-w-2xl text-xl leading-relaxed text-mute md:text-2xl"
        >
          Frutta e verdura scelta ogni mattina, salumi DOP, pane cotto a legna
          e le eccellenze di Sant&apos;Agata de&apos; Goti.{" "}
          <span className="font-bold text-ink">Dal 1986</span>, senza
          intermediari.
        </motion.p>

        {/* CTA giganti: due azioni, zero dubbi */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.6 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center"
        >
          <Link
            href="/frutta-verdura"
            className="inline-flex min-h-16 items-center justify-center gap-3 rounded-2xl bg-accent px-10 py-4 text-lg font-bold uppercase tracking-wide text-white transition-colors hover:bg-accent-deep"
          >
            Guarda la vetrina
          </Link>
          <a
            href="https://wa.me/393393022051?text=Salve%2C%20vorrei%20fare%20un%20ordine"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-16 items-center justify-center gap-3 rounded-2xl border-2 border-wa/70 bg-wa/10 px-10 py-4 text-lg font-bold uppercase tracking-wide text-ink transition-colors hover:bg-wa hover:text-white"
          >
            <MessageCircle size={22} />
            Ordina su WhatsApp
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.95 }}
          className="mt-8"
        >
          <LiveStatus variante="big" />
        </motion.div>
      </div>

      {/* Fondo hero */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl items-end justify-between px-6 pb-10">
        <motion.a
          href="#ordinare"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="flex items-center gap-3 text-mute transition-colors hover:text-ink"
          aria-label="Scorri alla sezione come ordinare"
        >
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            aria-hidden="true"
          >
            <ArrowDown size={20} />
          </motion.span>
          <span className="text-sm font-bold uppercase tracking-[0.3em]">
            Scopri di più
          </span>
        </motion.a>
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.7 }}
        >
          <BadgeRotante />
        </motion.div>
      </div>
    </section>
  );
}
