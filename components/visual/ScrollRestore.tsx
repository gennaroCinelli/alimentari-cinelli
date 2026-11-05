"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// ---------------------------------------------------------------
// MEMORIA DELLA POSIZIONE — per ogni pagina ricordiamo dove era
// lo scroll. Quando l'utente torna su una pagina già visitata,
// ritrova esattamente il punto in cui si trovava.
//
// Strategia a prova di gara: Next.js azzera lo scroll DOPO il click
// su un link, quindi salviamo la posizione:
//   1. al click su un link interno (fase di cattura: lo scroll è
//      ancora esattamente dove lo vede l'utente);
//   2. al "pagehide" (refresh/chiusura).
// Nessun listener di scroll che possa salvare 0 per errore.
// ---------------------------------------------------------------
const chiave = (pathname: string) => `cinelli-scroll:${pathname}`;

export default function ScrollRestore() {
  const pathname = usePathname();

  useEffect(() => {
    const salvaPosizione = () => {
      try {
        sessionStorage.setItem(chiave(pathname), String(window.scrollY));
      } catch {
        /* sessionStorage non disponibile: ignoriamo */
      }
    };

    // 1. click su un link interno → salva subito la posizione attuale
    const onClick = (e: MouseEvent) => {
      const ancoraggio = (e.target as HTMLElement)?.closest?.("a");
      const href = ancoraggio?.getAttribute("href");
      if (!href || !href.startsWith("/")) return;
      salvaPosizione();
    };

    // 2. refresh o chiusura → salva (vale anche per il tasto F5)
    const onPageHide = () => salvaPosizione();

    // --- RIPRISTINO all'arrivo su questa pagina ----------------
    let raf = 0;
    let tentativi = 0;
    let annullato = false;

    const salvata = sessionStorage.getItem(chiave(pathname));
    const ySalvata = salvata !== null ? parseInt(salvata, 10) : 0;
    // se l'arrivo è via anchor (#sezione) rispettiamo l'ancora
    const bersaglio =
      !Number.isNaN(ySalvata) && ySalvata > 0 && !window.location.hash
        ? ySalvata
        : 0;

    const ripristina = () => {
      if (annullato) return;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (bersaglio === 0) {
        window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
        return;
      }
      // la pagina può ancora crescere (immagini, animazioni): aspetta
      if (bersaglio > max && tentativi < 15) {
        tentativi++;
        raf = requestAnimationFrame(ripristina);
        return;
      }
      window.scrollTo({
        top: Math.min(bersaglio, Math.max(max, 0)),
        behavior: "instant" as ScrollBehavior,
      });
    };
    raf = requestAnimationFrame(ripristina);

    window.addEventListener("click", onClick, true);
    window.addEventListener("pagehide", onPageHide);

    return () => {
      annullato = true;
      cancelAnimationFrame(raf);
      window.removeEventListener("click", onClick, true);
      window.removeEventListener("pagehide", onPageHide);
    };
  }, [pathname]);

  return null;
}
