"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Counter from "@/components/visual/Counter";
import Reveal from "@/components/visual/Reveal";

export default function ChiSiamoTeaser() {
  return (
    <section className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 md:grid-cols-2 md:py-32">
      {/* Immagine con badge fluttuante */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative"
      >
        <div className="overflow-hidden rounded-[2.5rem] border-2 border-line">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/slider1.png"
            alt="Il titolare al banco che taglia il prosciutto"
            loading="lazy"
            className="aspect-[4/5] w-full object-cover"
          />
        </div>
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          className="absolute -right-3 top-8 rounded-3xl border-2 border-line bg-elev px-7 py-5 shadow-2xl md:-right-8"
          aria-hidden="true"
        >
          <p className="font-display text-5xl font-bold text-accent">
            <Counter finoA={40} />
          </p>
          <p className="mt-1 text-xs font-bold uppercase tracking-[0.2em] text-mute">
            Anni di bottega
          </p>
        </motion.div>
      </motion.div>

      {/* Testo */}
      <div>
        <span className="text-sm font-bold tracking-[0.35em] text-accent uppercase">
          Chi siamo
        </span>
        <h2 className="mt-4 font-display text-4xl font-bold uppercase leading-[1.05] md:text-6xl">
          <Reveal testo="Più di un negozio." />{" "}
          <Reveal testo="Una famiglia." className="italic text-accent" delay={0.15} />
        </h2>
        <p className="mt-7 max-w-xl text-xl leading-relaxed text-mute">
          Tutto nasce dalla terra, molto prima del 1986: una piccola stanza e
          ciò che le nostre mani coltivavano. Oggi siamo tre generazioni dopo,
          e quell&apos;idea non è cambiata.
        </p>

        {/* Contatori */}
        <div className="mt-10 grid grid-cols-3 gap-6 border-t border-line pt-8">
          {[
            { n: 40, label: "Anni di attività" },
            { n: 3, label: "Generazioni" },
            { n: 100, s: "+", label: "Prodotti in vetrina" },
          ].map((c) => (
            <div key={c.label}>
              <p className="font-display text-5xl font-bold text-ink md:text-6xl">
                <Counter finoA={c.n} suffisso={c.s ?? ""} />
              </p>
              <p className="mt-2 text-xs font-bold uppercase tracking-[0.15em] text-mute">
                {c.label}
              </p>
            </div>
          ))}
        </div>

        <Link
          href="/chi-siamo"
          className="mt-10 inline-flex min-h-14 items-center gap-3 rounded-2xl border-2 border-accent px-8 py-3 text-base font-bold uppercase tracking-wide text-accent transition-colors hover:bg-accent hover:text-white"
        >
          Scopri la nostra storia
          <ArrowRight size={20} />
        </Link>
      </div>
    </section>
  );
}
