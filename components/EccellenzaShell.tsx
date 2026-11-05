"use client";

import { useRef, type ReactNode } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, ArrowRight, MessageCircle } from "lucide-react";
import { ECCELLENZE, SITE, type Eccellenza } from "@/lib/site";
import Reveal from "@/components/visual/Reveal";

// ---------------------------------------------------------------
// GUSCIO DELLE ECCELLENZE — hero cinematografico a tema colore +
// CTA grandi e chiare + passaggio alla prossima eccellenza.
// ---------------------------------------------------------------
export default function EccellenzaShell({
  ecc,
  children,
}: {
  ecc: Eccellenza;
  children: ReactNode;
}) {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const yImg = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const scalaImg = useTransform(scrollYProgress, [0, 1], [1.05, 1.15]);
  const opacitaTitolo = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const indice = ECCELLENZE.findIndex((e) => e.slug === ecc.slug);
  const prossima = ECCELLENZE[(indice + 1) % ECCELLENZE.length];

  return (
    <main>
      {/* HERO parallasse */}
      <div ref={heroRef} className="relative h-[88svh] overflow-hidden">
        <motion.div style={{ y: yImg, scale: scalaImg }} className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={ecc.img} alt={ecc.nome} className="h-full w-full object-cover" />
        </motion.div>
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(10,10,11,0.55) 0%, rgba(10,10,11,0.25) 40%, #0a0a0b 100%)",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 opacity-30 mix-blend-overlay"
          style={{
            background: `radial-gradient(70% 55% at 65% 35%, ${ecc.colore}, transparent)`,
          }}
          aria-hidden="true"
        />

        <motion.div
          style={{ opacity: opacitaTitolo }}
          className="absolute inset-0 flex flex-col justify-end pb-24"
        >
          <div className="mx-auto w-full max-w-7xl px-6">
            <div className="mb-6 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.3em]">
              <Link
                href="/"
                className="flex items-center gap-2 text-stone-300 transition-colors hover:text-white"
              >
                <ArrowLeft size={16} /> Home
              </Link>
              <span className="text-stone-500">/</span>
              <span style={{ color: ecc.colore }}>Eccellenze</span>
            </div>

            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-5 inline-block rounded-full border-2 px-6 py-2.5 text-sm font-bold uppercase tracking-[0.25em] backdrop-blur-md"
              style={{
                borderColor: `${ecc.colore}88`,
                color: ecc.colore,
                backgroundColor: ecc.coloreSoft,
              }}
            >
              {ecc.breve}
            </motion.span>

            <h1 className="font-display text-6xl font-bold uppercase leading-[0.9] md:text-9xl">
              <Reveal testo={ecc.nome} delay={0.3} stagger={0.05} />
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-6 max-w-2xl font-display text-2xl italic text-stone-100 md:text-3xl"
            >
              “{ecc.claim}”
            </motion.p>
          </div>
        </motion.div>
      </div>

      {/* Contenuto specifico */}
      {children}

      {/* CTA finale + prossima eccellenza */}
      <section className="mx-auto max-w-7xl px-6 pb-28">
        <div className="flex flex-col items-center gap-9 rounded-[2.5rem] border border-line bg-surface p-10 text-center md:p-16">
          <h2 className="max-w-3xl font-display text-4xl font-bold uppercase md:text-5xl">
            <Reveal testo="Lo trovi in bottega," />{" "}
            <Reveal
              testo="appena fatto."
              className="italic"
              delay={0.12}
              style={{ color: ecc.colore }}
            />
          </h2>
          <p className="max-w-xl text-xl text-mute">
            {SITE.indirizzo.via}, {SITE.indirizzo.citta}. Passa a scegliere il
            tuo, oppure scrivici su WhatsApp: te lo teniamo da parte.
          </p>
          <a
            href={SITE.whatsappOrdine}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-16 items-center justify-center gap-3 rounded-2xl px-10 py-4 text-lg font-bold uppercase tracking-wide text-white transition-transform hover:scale-105"
            style={{ backgroundColor: ecc.colore }}
          >
            <MessageCircle size={22} /> Ordina su WhatsApp
          </a>
        </div>

        {/* Prossima eccellenza */}
        <Link
          href={prossima.slug}
          className="group mt-8 flex items-center justify-between gap-6 rounded-[2.5rem] border-2 border-line bg-surface p-8 transition-colors hover:border-white/25 md:p-10"
          aria-label={`Prossima eccellenza: ${prossima.nome}`}
        >
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.3em] text-mute">
              Prossima eccellenza
            </span>
            <p className="mt-2 font-display text-4xl font-bold uppercase md:text-6xl">
              {prossima.nome}
            </p>
          </div>
          <span
            className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-line transition-all duration-500 group-hover:rotate-[-45deg] group-hover:border-accent group-hover:bg-accent group-hover:text-white"
            style={{ color: prossima.colore }}
            aria-hidden="true"
          >
            <ArrowRight size={24} />
          </span>
        </Link>
      </section>
    </main>
  );
}
