"use client";

import Link from "next/link";
import {
  Instagram,
  Facebook,
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
} from "lucide-react";
import { SITE } from "@/lib/site";
import Marquee from "./visual/Marquee";
import LiveStatus from "./visual/LiveStatus";
import Reveal from "./visual/Reveal";

export default function Footer() {
  const ore = [
    { giorni: "Martedì – Sabato", fasce: "07:30 – 13:20 · 15:30 – 20:30" },
    { giorni: "Domenica", fasce: "07:30 – 13:20" },
    { giorni: "Lunedì", fasce: "Chiuso" },
  ];

  return (
    <footer className="relative mt-auto overflow-hidden border-t border-line bg-[#08080a]">
      <Marquee
        lento
        voci={[
          "Dal produttore direttamente a te",
          "Frutta di stagione",
          "Salumi DOP",
          "Pane a legna",
          "Mozzarella fresca ogni mattina",
          "Spedizioni in tutta Italia",
        ]}
        className="border-b border-line py-6 font-display text-xl italic text-mute md:text-2xl"
      />

      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 md:pt-20">
        {/* CTA gigante */}
        <div className="mb-14 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <h2 className="font-display text-5xl font-bold uppercase leading-[0.95] md:text-7xl">
            <Reveal testo="Vieni in" />
            <br />
            <Reveal testo="bottega" className="italic text-accent" delay={0.1} />
          </h2>
          <Link
            href="/contatti"
            className="group inline-flex min-h-16 shrink-0 items-center gap-3 rounded-2xl bg-accent px-10 py-4 text-lg font-bold uppercase tracking-wide text-white transition-colors hover:bg-accent-deep"
          >
            Indicazioni stradali
            <ArrowUpRight
              size={22}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* Colonne informative: 1 su mobile, 2 su tablet, 4 su desktop */}
        <div className="grid grid-cols-1 gap-12 border-t border-line pt-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <p className="font-display text-3xl font-bold">
              Alimentari <span className="text-accent">Cinelli</span>
            </p>
            <p className="mt-4 text-lg leading-relaxed text-mute">
              Dal {SITE.dal} portiamo sulla tua tavola solo il meglio della
              tradizione. Qualità, freschezza e cortesia ogni giorno.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Seguici su Instagram"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-accent hover:bg-accent hover:text-white"
              >
                <Instagram size={20} />
              </a>
              <a
                href={SITE.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Seguici su Facebook"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-accent hover:bg-accent hover:text-white"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Contatti */}
          <div>
            <h3 className="mb-5 text-sm font-bold tracking-[0.3em] text-accent uppercase">
              Contatti
            </h3>
            <ul className="space-y-4 text-lg text-ink">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="mt-1 shrink-0 text-accent" aria-hidden="true" />
                <span>
                  {SITE.indirizzo.via}
                  <br />
                  {SITE.indirizzo.cap} {SITE.indirizzo.citta} (
                  {SITE.indirizzo.provincia})
                </span>
              </li>
              <li>
                <a
                  href={SITE.telefonoHref}
                  className="flex items-center gap-3 transition-colors hover:text-accent"
                >
                  <Phone size={20} className="shrink-0 text-accent" aria-hidden="true" />
                  {SITE.telefono}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-start gap-3 transition-colors hover:text-accent"
                >
                  <Mail size={20} className="mt-1 shrink-0 text-accent" aria-hidden="true" />
                  <span className="break-all">{SITE.email}</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Orari */}
          <div>
            <h3 className="mb-5 text-sm font-bold tracking-[0.3em] text-accent uppercase">
              Orari
            </h3>
            <ul className="space-y-4 text-lg">
              {ore.map((r) => (
                <li key={r.giorni} className="flex flex-col">
                  <span className="font-bold text-ink">{r.giorni}</span>
                  <span className={r.fasce === "Chiuso" ? "font-bold text-red-400" : "text-mute"}>
                    {r.fasce}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Stato live */}
          <div>
            <h3 className="mb-5 text-sm font-bold tracking-[0.3em] text-accent uppercase">
              Adesso in bottega
            </h3>
            <LiveStatus variante="big" />
            <p className="mt-4 text-base leading-relaxed text-mute">
              Lo stato si aggiorna da solo in base agli orari reali del
              negozio, giorno per giorno.
            </p>
          </div>
        </div>

        {/* Wordmark gigante decorativo, sempre dentro i bordi */}
        <div
          className="mt-16 select-none overflow-hidden border-t border-line pt-10"
          aria-hidden="true"
        >
          <p className="text-outline whitespace-nowrap text-center font-display text-[clamp(3rem,12vw,10rem)] font-bold uppercase leading-none">
            Cinelli 1986
          </p>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center gap-3 border-t border-line pt-8 text-center text-base text-mute lg:flex-row lg:justify-between lg:pr-24 lg:text-left">
          <p>
            © {new Date().getFullYear()} {SITE.brand}. Tutti i diritti
            riservati.
          </p>
          <p className="flex items-center gap-1.5">
            Designed &amp; developed con ♥ da{" "}
            <span className="font-bold tracking-wide text-ink">
              {SITE.developer}
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
