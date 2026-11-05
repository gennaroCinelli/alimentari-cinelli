"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { ECCELLENZE } from "@/lib/site";
import Reveal from "@/components/visual/Reveal";

// ---------------------------------------------------------------
// LE CINQUE ECCELLENZE — una dopo l'altra, grandi e leggibili.
// Ognuna col suo colore e un bottone enorme per scoprirne la storia.
// ---------------------------------------------------------------
export default function EccellenzeScroll() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
      <div className="mb-14 max-w-3xl">
        <span className="text-sm font-bold tracking-[0.35em] text-accent uppercase">
          Le cinque meraviglie
        </span>
        <h2 className="mt-4 font-display text-4xl font-bold uppercase leading-[1.05] md:text-6xl">
          <Reveal testo="Cinque eccellenze" />{" "}
          <Reveal
            testo="che non trovi altrove"
            className="italic text-accent"
            delay={0.12}
          />
        </h2>
        <p className="mt-6 text-xl text-mute">
          Sono l&apos;orgoglio della nostra terra. Tocca quella che ti incuriosisce
          per scoprirne la storia.
        </p>
      </div>

      <div className="flex flex-col gap-8">
        {ECCELLENZE.map((e, i) => (
          <motion.article
            key={e.slug}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className={`grid overflow-hidden rounded-[2.5rem] border border-line bg-surface md:grid-cols-2 ${
              i % 2 === 1 ? "md:[&>a]:order-2" : ""
            }`}
          >
            {/* Foto */}
            <Link
              href={e.slug}
              className="group relative block h-64 overflow-hidden md:h-auto md:min-h-[380px]"
              aria-label={`Scopri ${e.nome}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={e.img}
                alt={e.nome}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-105"
              />
              <div
                className="absolute inset-0 opacity-25 mix-blend-overlay"
                style={{
                  background: `radial-gradient(80% 70% at 60% 40%, ${e.colore}, transparent)`,
                }}
                aria-hidden="true"
              />
            </Link>

            {/* Testo */}
            <div className="flex flex-col justify-center p-8 md:p-12">
              <span
                className="inline-flex items-center gap-2 self-start rounded-full border px-5 py-2 text-xs font-bold uppercase tracking-[0.25em]"
                style={{
                  borderColor: `${e.colore}66`,
                  color: e.colore,
                  backgroundColor: e.coloreSoft,
                }}
              >
                Eccellenza {i + 1} di {ECCELLENZE.length} · {e.breve}
              </span>
              <h3 className="mt-5 font-display text-4xl font-bold uppercase leading-none md:text-6xl">
                {e.nome}
              </h3>
              <p className="mt-4 font-display text-xl italic text-stone-300 md:text-2xl">
                “{e.claim}”
              </p>
              <Link
                href={e.slug}
                className="mt-8 inline-flex min-h-14 items-center justify-center gap-3 self-start rounded-2xl px-9 py-3 text-base font-bold uppercase tracking-wide text-white transition-transform hover:scale-105"
                style={{ backgroundColor: e.colore }}
              >
                Scopri la storia
                <ArrowUpRight size={20} />
              </Link>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
