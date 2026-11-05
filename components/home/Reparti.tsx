"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/visual/Reveal";

const REPARTI = [
  {
    href: "/frutta-verdura",
    img: "/slider2.png",
    titolo: "Frutta & Verdura",
    sotto: "Il banco dei freschi",
    testo: "Scelta ogni mattina, col ritmo delle stagioni.",
  },
  {
    href: "/salumi",
    img: "/banco 2.jpeg",
    titolo: "Salumi & Formaggi",
    sotto: "Il banco del gusto",
    testo: "DOP e stagionati tra le migliori case italiane.",
  },
];

export default function Reparti() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
      <div className="mb-14 text-center">
        <span className="text-sm font-bold tracking-[0.35em] text-accent uppercase">
          Cosa vendemo
        </span>
        <h2 className="mt-4 font-display text-4xl font-bold uppercase md:text-6xl">
          <Reveal testo="Due banchi," />{" "}
          <Reveal testo="una sola cura." className="italic text-accent" delay={0.12} />
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {REPARTI.map((r, i) => (
          <motion.div
            key={r.href}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: i * 0.12, ease: "easeOut" }}
          >
            <Link
              href={r.href}
              className="group relative block h-[62vh] overflow-hidden rounded-[2.5rem] border-2 border-line transition-colors hover:border-accent/60"
              aria-label={`Vai alla vetrina: ${r.titolo}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={r.img}
                alt={r.titolo}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.6s] ease-out group-hover:scale-[1.05]"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent"
                aria-hidden="true"
              />

              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-6 p-8 md:p-11">
                <div>
                  <span className="text-sm font-bold uppercase tracking-[0.3em] text-accent">
                    {r.sotto}
                  </span>
                  <h3 className="mt-2 font-display text-4xl font-bold uppercase md:text-5xl">
                    {r.titolo}
                  </h3>
                  <p className="mt-3 max-w-sm text-lg leading-relaxed text-stone-200">
                    {r.testo}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-accent px-7 py-3.5 text-base font-bold uppercase tracking-wide text-white transition-transform group-hover:scale-105">
                    Sfoglia i prodotti
                  </span>
                </div>
                <span
                  className="hidden h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-white/30 backdrop-blur-md transition-all duration-500 group-hover:rotate-45 group-hover:border-accent group-hover:bg-accent md:flex"
                  aria-hidden="true"
                >
                  <ArrowUpRight size={24} />
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
