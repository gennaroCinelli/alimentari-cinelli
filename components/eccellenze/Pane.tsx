"use client";

import { motion } from "framer-motion";
import { Wheat, Clock, Flame } from "lucide-react";
import EccellenzaShell from "@/components/EccellenzaShell";
import { ECCELLENZE } from "@/lib/site";
import Reveal from "@/components/visual/Reveal";

const ecc = ECCELLENZE[2];

const SEGRETI = [
  {
    icona: Wheat,
    titolo: "Grani antichi",
    testo:
      "Solo farine selezionate e non raffinate, per un sapore vero che nutre e sazia.",
  },
  {
    icona: Clock,
    titolo: "Lievitazione lenta",
    testo:
      "Solo lievito madre naturale. L'impasto riposa per ore, diventando leggero e digeribile.",
  },
  {
    icona: Flame,
    titolo: "Forno a legna",
    testo:
      "La cottura a fuoco vivo dona quella crosta spessa e croccante che protegge il cuore morbido.",
  },
];

export default function PaneContent() {
  return (
    <EccellenzaShell ecc={ecc}>
      {/* I TRE SEGRETI */}
      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-20 text-center md:grid-cols-3 md:py-28">
        {SEGRETI.map((s, i) => (
          <motion.div
            key={s.titolo}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="flex flex-col items-center gap-5"
          >
            <span
              className="flex h-20 w-20 items-center justify-center rounded-full border-2"
              style={{
                borderColor: `${ecc.colore}66`,
                color: ecc.colore,
                backgroundColor: ecc.coloreSoft,
              }}
              aria-hidden="true"
            >
              <s.icona size={32} />
            </span>
            <h3 className="font-display text-3xl font-bold">{s.titolo}</h3>
            <p className="max-w-sm text-lg leading-relaxed text-mute">{s.testo}</p>
          </motion.div>
        ))}
      </section>

      {/* COME UNA VOLTA */}
      <section className="mx-auto grid max-w-6xl items-center gap-14 px-6 pb-24 md:grid-cols-2">
        <div>
          <h2 className="font-display text-5xl font-bold uppercase md:text-6xl">
            <Reveal testo="Come una volta." />
          </h2>
          <p className="mt-7 text-xl leading-relaxed text-mute">
            Il nostro pane non è gommoso, non è bianco pallido. È pane vero.
            Quando lo spezzi senti il «crack» della crosta e il profumo ti
            riporta indietro nel tempo, alle domeniche a pranzo dai nonni.
          </p>
          <p className="mt-5 text-xl leading-relaxed text-mute">
            Perfetto per la scarpetta al sugo, sublime con un filo d&apos;olio
            e pomodoro, eterno compagno dei nostri salumi.
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative h-[420px] overflow-hidden rounded-t-full border-2 border-line md:h-[540px]"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/pane-dettaglio.jpg"
            alt="Il dettaglio del pane cotto a legna"
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </motion.div>
      </section>

      <section className="pb-8 text-center">
        <p className="font-display text-3xl italic md:text-4xl" style={{ color: ecc.colore }}>
          “Il pane è la prima forma di felicità.”
        </p>
      </section>
    </EccellenzaShell>
  );
}
