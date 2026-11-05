"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Navigation,
  Truck,
  MessageCircle,
  Instagram,
  Facebook,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";
import { SITE } from "@/lib/site";
import Reveal from "@/components/visual/Reveal";
import LiveStatus from "@/components/visual/LiveStatus";

const ORARI_SETTIMANA = [
  {
    giorni: "Martedì – Sabato",
    fasce: "07:30 – 13:20 · 15:30 – 20:30",
    chiuso: false,
  },
  { giorni: "Domenica", fasce: "07:30 – 13:20", chiuso: false },
  { giorni: "Lunedì", fasce: "Chiuso", chiuso: true },
];

export default function ContattiPage() {
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
          <span className="text-accent">Dove Siamo</span>
        </div>
        <h1 className="mt-6 font-display text-5xl font-bold uppercase leading-[0.95] md:text-8xl">
          <Reveal testo="Vieni a" />{" "}
          <Reveal testo="trovarci." className="italic text-accent" delay={0.15} />
        </h1>
        <p className="mt-6 max-w-2xl text-xl leading-relaxed text-mute md:text-2xl">
          Il profumo del pane fresco e la cortesia di una volta ti aspettano in
          bottega. E se preferisci, un messaggio WhatsApp basta per ordinare.
        </p>
      </section>

      {/* GRIGLIA INFO + MAPPA */}
      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-16 lg:grid-cols-2">
        {/* Colonna sinistra */}
        <div className="flex flex-col gap-6">
          {/* Indirizzo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="rounded-[2rem] border-2 border-line bg-surface p-8 transition-colors hover:border-accent/50"
          >
            <div className="flex items-start gap-5">
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                <MapPin size={26} />
              </span>
              <div className="flex-1">
                <h2 className="font-display text-2xl font-bold md:text-3xl">
                  Dove siamo
                </h2>
                <p className="mt-3 text-xl text-ink">
                  {SITE.indirizzo.via}
                  <br />
                  {SITE.indirizzo.cap} {SITE.indirizzo.citta} (
                  {SITE.indirizzo.provincia})
                </p>
                <a
                  href={SITE.mapsDir}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex min-h-14 items-center gap-3 rounded-2xl bg-accent px-7 py-3 text-base font-bold uppercase tracking-wide text-white transition-colors hover:bg-accent-deep"
                >
                  <Navigation size={20} /> Apri il navigatore
                </a>
              </div>
            </div>
          </motion.div>

          {/* Orari con stato live */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="rounded-[2rem] border-2 border-line bg-surface p-8"
          >
            <div className="flex items-start gap-5">
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                <Clock size={26} />
              </span>
              <div className="flex-1">
                <h2 className="font-display text-2xl font-bold md:text-3xl">
                  Orari di apertura
                </h2>
                <div className="mt-5">
                  <LiveStatus variante="big" />
                </div>
                <div className="mt-6 space-y-4 text-lg">
                  {ORARI_SETTIMANA.map((r) => (
                    <div
                      key={r.giorni}
                      className="flex flex-wrap items-center justify-between gap-2 border-b border-line pb-4 last:border-0 last:pb-0"
                    >
                      <span className="font-bold text-ink">{r.giorni}</span>
                      <span
                        className={
                          r.chiuso ? "font-bold text-red-400" : "text-mute"
                        }
                      >
                        {r.fasce}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Telefono / Email / Social */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-1 gap-5 sm:grid-cols-2"
          >
            <a
              href={SITE.telefonoHref}
              className="group flex flex-col justify-between rounded-[2rem] border-2 border-line bg-surface p-7 transition-all hover:-translate-y-1 hover:border-accent/50"
            >
              <Phone className="text-accent" size={24} />
              <div className="mt-8">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-mute">
                  Telefono
                </p>
                <p className="mt-1 text-xl font-bold">{SITE.telefono}</p>
              </div>
            </a>
            <a
              href={`mailto:${SITE.email}`}
              className="group flex flex-col justify-between rounded-[2rem] border-2 border-line bg-surface p-7 transition-all hover:-translate-y-1 hover:border-accent/50"
            >
              <Mail className="text-accent" size={24} />
              <div className="mt-8">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-mute">
                  Email (PEC)
                </p>
                <p className="mt-1 break-all text-lg font-bold">{SITE.email}</p>
              </div>
            </a>
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between rounded-[2rem] border-2 border-line bg-surface p-7 transition-all hover:-translate-y-1 hover:border-accent/50"
            >
              <Instagram className="text-accent" size={24} />
              <div className="mt-8">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-mute">
                  Instagram
                </p>
                <p className="mt-1 text-lg font-bold">
                  @alimentariefrutta_cinelli
                </p>
              </div>
            </a>
            <a
              href={SITE.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between rounded-[2rem] border-2 border-line bg-surface p-7 transition-all hover:-translate-y-1 hover:border-accent/50"
            >
              <Facebook className="text-accent" size={24} />
              <div className="mt-8">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-mute">
                  Facebook
                </p>
                <p className="mt-1 text-lg font-bold">Alimentari Cinelli</p>
              </div>
            </a>
          </motion.div>

          {/* Spedizioni */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="relative overflow-hidden rounded-[2rem] border-2 border-wa/30 bg-wa/[0.06] p-8"
          >
            <Truck
              size={130}
              className="absolute -bottom-8 -right-6 rotate-12 text-white/[0.05]"
              aria-hidden="true"
            />
            <div className="flex items-start gap-5">
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-wa/15 text-wa">
                <Truck size={26} />
              </span>
              <div>
                <h2 className="font-display text-2xl font-bold md:text-3xl">
                  Spedizioni in tutta Italia
                </h2>
                <p className="mt-3 max-w-md text-lg leading-relaxed text-mute">
                  Vuoi ricevere i nostri prodotti a casa? Scrivici per info su
                  costi e tempi di consegna.
                </p>
                <a
                  href={SITE.whatsappSpedizioni}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex min-h-14 items-center gap-3 rounded-2xl bg-wa px-7 py-3 text-base font-bold uppercase tracking-wide text-white transition-colors hover:bg-[#1fb457]"
                >
                  <MessageCircle size={20} /> Chiedi info su WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mappa */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.25, duration: 0.7 }}
          className="relative min-h-[480px] overflow-hidden rounded-[2.5rem] border-2 border-line lg:sticky lg:top-28 lg:h-[calc(100vh-14rem)]"
        >
          <iframe
            src={SITE.mapsEmbed}
            width="100%"
            height="100%"
            style={{
              border: 0,
              filter:
                "grayscale(100%) invert(92%) contrast(88%) hue-rotate(180deg) brightness(0.95)",
            }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mappa: Alimentari Cinelli, Via Caudina 10, Sant'Agata de' Goti"
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center pb-6">
            <span className="flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-bold uppercase tracking-wide text-white shadow-xl">
              <MapPin size={16} /> {SITE.indirizzo.citta} · {SITE.indirizzo.via}
            </span>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
