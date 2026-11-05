"use client";

import { motion } from "framer-motion";
import { MessageCircle, ShoppingBasket, Store, Truck } from "lucide-react";
import Reveal from "@/components/visual/Reveal";
import { SITE } from "@/lib/site";

// ---------------------------------------------------------------
// COME ORDINARE — tre passi giganti, spiegati in modo semplice.
// Chi non ama la tecnologia può sempre chiamare o venire direttamente.
// ---------------------------------------------------------------
const PASSI = [
  {
    numero: "1",
    icona: MessageCircle,
    colore: "text-wa",
    sfondo: "bg-wa/10 border-wa/30",
    titolo: "Ci scrivi o ci chiami",
    testo:
      "Mandaci un messaggio su WhatsApp con quello che ti serve, oppure chiamaci. Se preferisci, passa semplicemente in bottega.",
    azione: {
      label: "Scrivici su WhatsApp",
      href: SITE.whatsappOrdine,
      esterno: true,
      stile: "bg-wa text-white hover:bg-[#1fb457]",
    },
  },
  {
    numero: "2",
    icona: ShoppingBasket,
    colore: "text-accent",
    sfondo: "bg-accent/10 border-accent/30",
    titolo: "Prepariamo il pacchetto",
    testo:
      "Scegliamo per te i prodotti migliori del giorno, come se li scegliessimo per la nostra famiglia.",
    azione: null,
  },
  {
    numero: "3",
    icona: Store,
    colore: "text-accent",
    sfondo: "bg-accent/10 border-accent/30",
    titolo: "Passi e ritiri in bottega",
    testo:
      "Trovi il tuo ordine pronto in Via Caudina, 10. Nessuna attesa: entri, saluti e via.",
    azione: {
      label: "Dove siamo",
      href: "/contatti",
      esterno: false,
      stile: "bg-accent text-white hover:bg-accent-deep",
    },
  },
];

export default function ComeOrdinare() {
  return (
    <section id="ordinare" className="mx-auto max-w-7xl scroll-mt-28 px-6 py-24 md:py-32">
      <div className="mb-14 max-w-3xl">
        <span className="text-sm font-bold tracking-[0.35em] text-accent uppercase">
          Come ordinare
        </span>
        <h2 className="mt-4 font-display text-4xl font-bold uppercase leading-[1.05] md:text-6xl">
          <Reveal testo="Ordinare è facilissimo:" />{" "}
          <Reveal testo="bastano 3 passi." className="italic text-accent" delay={0.12} />
        </h2>
        <p className="mt-6 text-xl text-mute">
          E se non ti va scrivere, nessun problema:{" "}
          <span className="font-bold text-ink">
            chiama il {SITE.telefono}
          </span>{" "}
          o vieni direttamente in bottega.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PASSI.map((p, i) => (
          <motion.div
            key={p.numero}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
            className="flex flex-col rounded-[2rem] border border-line bg-surface p-8 md:p-9"
          >
            <div className="flex items-center justify-between">
              <span
                className={`flex h-16 w-16 items-center justify-center rounded-2xl border-2 ${p.sfondo}`}
              >
                <p.icona size={30} className={p.colore} />
              </span>
              <span
                className="select-none font-display text-7xl font-bold leading-none text-white/10"
                aria-hidden="true"
              >
                {p.numero}
              </span>
            </div>

            <h3 className="mt-6 font-display text-3xl font-bold">{p.titolo}</h3>
            <p className="mt-3 flex-grow text-lg leading-relaxed text-mute">
              {p.testo}
            </p>

            {p.azione && (
              <a
                href={p.azione.href}
                {...(p.azione.esterno
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className={`mt-7 inline-flex min-h-14 items-center justify-center gap-3 rounded-2xl px-7 py-3 text-base font-bold uppercase tracking-wide transition-colors ${p.azione.stile}`}
              >
                {p.azione.label}
              </a>
            )}
          </motion.div>
        ))}
      </div>

      {/* Spedizioni: per chi è lontano */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className="mt-8 flex flex-col items-center justify-between gap-6 rounded-[2rem] border border-wa/25 bg-wa/[0.06] p-8 md:flex-row md:p-10"
      >
        <div className="flex items-start gap-5">
          <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-wa/15 text-wa">
            <Truck size={28} />
          </span>
          <div>
            <h3 className="font-display text-2xl font-bold md:text-3xl">
              Sei lontano? Spediamo in tutta Italia.
            </h3>
            <p className="mt-2 max-w-xl text-lg text-mute">
              Salumi, formaggi e le nostre specialità possono arrivare a casa
              tua. Scrivici per saperne di più.
            </p>
          </div>
        </div>
        <a
          href={SITE.whatsappSpedizioni}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-14 shrink-0 items-center justify-center gap-3 rounded-2xl border-2 border-wa px-8 py-3 text-base font-bold uppercase tracking-wide text-wa transition-colors hover:bg-wa hover:text-white"
        >
          <MessageCircle size={20} />
          Chiedi info
        </a>
      </motion.div>
    </section>
  );
}
