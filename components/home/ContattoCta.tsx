"use client";

import Link from "next/link";
import { Phone, Navigation, MessageCircle } from "lucide-react";
import Reveal from "@/components/visual/Reveal";
import LiveStatus from "@/components/visual/LiveStatus";
import { SITE } from "@/lib/site";

// ---------------------------------------------------------------
// CHIUSURA HOME — dove siamo, quando siamo aperti, come contattarci.
// Tre azioni grandi e inequivocabili.
// ---------------------------------------------------------------
export default function ContattoCta() {
  return (
    <section className="px-4 pb-28 md:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-line bg-surface px-6 py-16 text-center md:py-24">
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
        >
          <div className="absolute left-1/2 top-0 h-64 w-[70vw] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(255,122,56,0.16),transparent)] blur-2xl" />
        </div>

        <div className="relative">
          <span className="text-sm font-bold tracking-[0.35em] text-accent uppercase">
            Ti aspettiamo
          </span>
          <h2 className="mx-auto mt-4 max-w-3xl font-display text-4xl font-bold uppercase leading-[1.05] md:text-6xl">
            <Reveal testo="Il profumo del pane fresco" />{" "}
            <Reveal
              testo="non manda messaggi."
              className="italic text-accent"
              delay={0.15}
            />
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-mute">
            Devi proprio venire a sentirlo. Ci trovi in {SITE.indirizzo.via},{" "}
            {SITE.indirizzo.citta}.
          </p>

          <div className="mt-8 flex justify-center">
            <LiveStatus variante="big" />
          </div>

          <div className="mt-10 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href={SITE.telefonoHref}
              className="inline-flex min-h-16 items-center justify-center gap-3 rounded-2xl bg-accent px-9 py-4 text-lg font-bold uppercase tracking-wide text-white transition-colors hover:bg-accent-deep"
            >
              <Phone size={22} /> Chiama ora
            </a>
            <a
              href={SITE.whatsappOrdine}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-16 items-center justify-center gap-3 rounded-2xl border-2 border-wa/70 bg-wa/10 px-9 py-4 text-lg font-bold uppercase tracking-wide text-ink transition-colors hover:bg-wa hover:text-white"
            >
              <MessageCircle size={22} /> WhatsApp
            </a>
            <Link
              href="/contatti"
              className="inline-flex min-h-16 items-center justify-center gap-3 rounded-2xl border-2 border-line px-9 py-4 text-lg font-bold uppercase tracking-wide text-ink transition-colors hover:border-accent hover:text-accent"
            >
              <Navigation size={22} /> Dove siamo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
