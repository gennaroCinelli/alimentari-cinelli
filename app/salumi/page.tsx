"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Star, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { SALUMI, BRANDS } from "@/lib/salumi";
import Reveal from "@/components/visual/Reveal";
import Marquee from "@/components/visual/Marquee";

// Immagine con leggero parallasse verticale (movimento lento, mai invadente)
function FotoParallasse({ src, alt }: { src: string; alt: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <div
      ref={ref}
      className="relative h-[320px] overflow-hidden rounded-[2rem] border-2 border-line md:h-[460px]"
    >
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        style={{ y, scale: 1.15 }}
        className="absolute inset-0 h-full w-full object-cover"
      />
    </div>
  );
}

export default function SalumiPage() {
  return (
    <main className="overflow-hidden pt-32 md:pt-40">
      {/* HERO */}
      <section className="mx-auto max-w-7xl px-6 text-center">
        <div className="flex items-center justify-center gap-3 text-sm font-bold uppercase tracking-[0.3em]">
          <Link
            href="/"
            className="flex items-center gap-2 text-mute transition-colors hover:text-ink"
          >
            <ArrowLeft size={16} /> Home
          </Link>
          <span className="text-mute/50">/</span>
          <span className="text-accent">Salumi & Formaggi</span>
        </div>
        <h1 className="mx-auto mt-6 font-display text-5xl font-bold uppercase leading-[0.95] md:text-8xl">
          <Reveal testo="Salumi &" />{" "}
          <Reveal testo="Formaggi" className="italic text-accent" delay={0.12} />
        </h1>
        <p className="mx-auto mt-8 max-w-3xl text-xl font-light leading-relaxed text-mute md:text-2xl">
          Questa è solo un&apos;anteprima della nostra selezione. Il vero
          viaggio nel gusto continua in bottega, dove vi aspetta un
          assortimento ancora più ricco, scelto ogni giorno.
        </p>
      </section>

      {/* CATEGORIE */}
      <div className="mx-auto max-w-7xl space-y-28 px-6 py-24 md:py-32">
        {SALUMI.map((sezione) => (
          <div key={sezione.categoria} className="relative">
            <div className="relative mb-16 text-center">
              <span
                className="absolute left-0 top-1/2 h-px w-full bg-line"
                aria-hidden="true"
              />
              <h2 className="relative z-10 inline-block bg-noir px-8 font-display text-3xl font-bold text-accent md:text-4xl">
                <span className="mr-4 font-sans text-base italic text-mute/70">
                  {sezione.numero}
                </span>
                {sezione.categoria}
              </h2>
            </div>

            <div className="space-y-20 md:space-y-28">
              {sezione.items.map((item, index) => {
                const pari = index % 2 === 0;
                return (
                  <motion.div
                    key={item.nome}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className={`flex flex-col items-center gap-10 md:gap-16 ${
                      pari ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    <div className="w-full md:w-1/2">
                      <FotoParallasse src={item.foto} alt={item.nome} />
                    </div>
                    <div
                      className={`w-full md:w-1/2 ${
                        pari ? "md:text-left" : "md:text-right"
                      }`}
                    >
                      <span className="inline-flex items-center gap-2 rounded-full border-2 border-accent/40 bg-accent/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.25em] text-accent">
                        <Star size={13} fill="currentColor" aria-hidden="true" />{" "}
                        {item.badge}
                      </span>
                      <h3 className="mt-5 font-display text-4xl font-bold leading-tight md:text-5xl">
                        {item.nome}
                      </h3>
                      <p
                        className={`mt-5 max-w-xl text-xl leading-relaxed text-mute ${
                          pari ? "" : "md:ml-auto"
                        }`}
                      >
                        {item.descrizione}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* MARCHI */}
      <section className="border-y border-line bg-surface py-16">
        <div className="mb-10 text-center">
          <span className="text-sm font-bold uppercase tracking-[0.3em] text-accent">
            Qualità garantita
          </span>
          <h3 className="mt-2 font-display text-3xl font-bold md:text-4xl">
            I nostri partner d&apos;eccellenza
          </h3>
        </div>
        <Marquee
          voci={BRANDS}
          className="py-4 font-display text-3xl font-bold uppercase tracking-tight text-mute md:text-4xl"
        />
      </section>

      {/* CHIUSURA */}
      <section className="px-6 py-24 text-center">
        <h2 className="mx-auto max-w-3xl font-display text-4xl font-bold uppercase md:text-5xl">
          <Reveal testo="Il panino lo fai tu." />{" "}
          <Reveal
            testo="Il resto lo troviamo noi."
            className="italic text-accent"
            delay={0.15}
          />
        </h2>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/contatti"
            className="inline-flex min-h-16 items-center rounded-2xl bg-accent px-10 py-4 text-lg font-bold uppercase tracking-wide text-white transition-colors hover:bg-accent-deep"
          >
            Vieni a trovarci
          </Link>
          <a
            href="https://wa.me/393393022051?text=Salve%2C%20vorrei%20fare%20un%20ordine"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-16 items-center rounded-2xl border-2 border-wa/70 bg-wa/10 px-10 py-4 text-lg font-bold uppercase tracking-wide text-ink transition-colors hover:bg-wa hover:text-white"
          >
            Ordina su WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
