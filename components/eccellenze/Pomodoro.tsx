"use client";

import { motion } from "framer-motion";
import { Flame, Sun, Mountain } from "lucide-react";
import EccellenzaShell from "@/components/EccellenzaShell";
import { ECCELLENZE } from "@/lib/site";
import Reveal from "@/components/visual/Reveal";

const ecc = ECCELLENZE[4];

export default function PomodoroContent() {
  return (
    <EccellenzaShell ecc={ecc}>
      {/* STORIA */}
      <section className="mx-auto max-w-5xl px-6 py-20 text-center md:py-28">
        <h2 className="font-display text-5xl font-bold uppercase md:text-7xl">
          <Reveal testo="Un sapore che esplode." />
        </h2>
        <p className="mx-auto mt-8 max-w-3xl text-xl leading-relaxed text-mute md:text-2xl">
          Cresce su una terra nera, ricca e ardente. La sua buccia è spessa
          per proteggere la polpa dolce-acida. È l&apos;ingrediente segreto
          per uno spaghetto che non dimenticherete mai: quando lo schiacci in
          padella, libera un profumo di terra e fuoco unico al mondo.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-5">
          {[
            { icona: Mountain, testo: "Suolo vulcanico" },
            { icona: Sun, testo: "Pelle spessa" },
            { icona: Flame, testo: "DOP Vesuvio" },
          ].map((c) => (
            <div
              key={c.testo}
              className="flex items-center gap-3 rounded-2xl border-2 px-7 py-4"
              style={{
                borderColor: `${ecc.colore}55`,
                backgroundColor: ecc.coloreSoft,
              }}
            >
              <c.icona size={22} style={{ color: ecc.colore }} aria-hidden="true" />
              <span className="text-base font-bold uppercase tracking-wide">
                {c.testo}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* IMMAGINE GRANDE */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative h-[420px] overflow-hidden rounded-[2.5rem] border-2 border-line md:h-[560px]"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/pomodoro-terra.jpg"
            alt="I piennoli di pomodoro appesi"
            loading="lazy"
            className="h-full w-full object-cover"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"
            aria-hidden="true"
          />
          <span
            className="absolute bottom-8 left-8 rounded-full border-2 px-6 py-2.5 text-sm font-bold uppercase tracking-[0.2em] backdrop-blur-md"
            style={{ borderColor: `${ecc.colore}77`, color: ecc.colore }}
          >
            Grappoli appesi — i «piennoli»
          </span>
        </motion.div>
      </section>
    </EccellenzaShell>
  );
}
