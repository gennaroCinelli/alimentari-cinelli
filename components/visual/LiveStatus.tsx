"use client";

import { useEffect, useState } from "react";
import {
  statoBottega,
  countdownStato,
  type StatoBottega,
} from "@/lib/orari";

// ---------------------------------------------------------------
// STATO LIVE — calcolato dagli orari veri della bottega.
// Il primo render è neutro e identico tra server e client (niente
// errori di hydration): lo stato reale arriva subito dopo il mount.
// "pill": versione compatta per la navbar
// "big":  versione grande e leggibilissima per home/contatti/footer
// ---------------------------------------------------------------
export default function LiveStatus({
  variante = "pill",
}: {
  variante?: "pill" | "big";
}) {
  const [stato, setStato] = useState<StatoBottega | null>(null);
  const [countdown, setCountdown] = useState<string | null>(null);

  useEffect(() => {
    const aggiorna = () => {
      setStato(statoBottega());
      setCountdown(countdownStato());
    };
    aggiorna();
    const t = setInterval(aggiorna, 30_000);
    return () => clearInterval(t);
  }, []);

  // ---- Versione compatta (navbar) ----
  if (variante === "pill") {
    return (
      <span className="inline-flex items-center gap-2.5 rounded-full border border-line bg-white/[0.05] px-4 py-2">
        <span
          className={`h-2.5 w-2.5 rounded-full ${
            stato ? (stato.aperto ? "bg-green-400 animate-pulse-dot" : "bg-red-500") : "bg-mute"
          }`}
          aria-hidden="true"
        />
        <span
          className={`text-sm font-bold uppercase tracking-wide ${
            stato ? (stato.aperto ? "text-green-400" : "text-red-400") : "text-mute"
          }`}
        >
          {!stato ? "Orari" : stato.aperto ? "Aperto" : "Chiuso"}
        </span>
        <span className="hidden text-sm text-mute sm:inline">
          · {stato ? stato.messaggio : "in aggiornamento…"}
        </span>
      </span>
    );
  }

  // ---- Versione grande (home, contatti, footer) ----
  return (
    <div className="inline-flex flex-wrap items-center gap-x-5 gap-y-2 rounded-3xl border border-line bg-white/[0.04] px-7 py-5 backdrop-blur-md">
      <span
        className={`flex items-center gap-3 text-lg font-bold uppercase tracking-wide ${
          stato
            ? stato.aperto
              ? "text-green-400"
              : "text-red-400"
            : "text-mute"
        }`}
      >
        <span
          className={`h-3 w-3 rounded-full ${
            stato
              ? stato.aperto
                ? "bg-green-400 animate-pulse-dot"
                : "bg-red-500"
              : "bg-mute"
          }`}
          aria-hidden="true"
        />
        {!stato ? "Controllo orari…" : stato.aperto ? "Aperto adesso" : "Chiuso adesso"}
      </span>
      <span className="hidden h-5 w-px bg-white/15 sm:block" aria-hidden="true" />
      <span className="text-lg text-ink">
        {stato
          ? `${stato.messaggio}${countdown && stato.aperto ? ` · ${countdown}` : ""}`
          : "Un istante, verifichiamo gli orari di oggi."}
      </span>
    </div>
  );
}
