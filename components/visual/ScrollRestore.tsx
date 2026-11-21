"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// ---------------------------------------------------------------
// SCROLL INTELLIGENTE — la regola che l'utente si aspetta:
//   · clicchi su un link          → la pagina nuova parte SEMPRE in cima
//   · premi il tasto "indietro"   → ritorni esattamente dove eri
//   · anchor (#sezione)           → il browser porta alla sezione
//
// Come funziona: al click su un link interno salviamo la posizione
// della pagina corrente (fase di cattura, prima che Next azzeri lo
// scroll). Al "popstate" (indietro/avanti) ripristiniamo quella
// posizione; su navigazione normale ripartiamo dall'alto.
// ---------------------------------------------------------------
const chiave = (pathname: string) => `cinelli-scroll:${pathname}`;

declare global {
  interface Window {
    __cinelliPopAt?: number;
  }
}

export default function ScrollRestore() {
  const pathname = usePathname();

  // Segna il momento esatto in cui avviene un indietro/avanti.
  // Il flag ha durata breve: se il popstate non porta a un cambio
  // pagina (es. solo hash), non inquina le navigazioni successive.
  useEffect(() => {
    const onPop = () => {
      window.__cinelliPopAt = Date.now();
    };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  useEffect(() => {
    const eIndietro =
      window.__cinelliPopAt !== undefined &&
      Date.now() - window.__cinelliPopAt < 1500;
    window.__cinelliPopAt = undefined;

    const salvaPosizione = () => {
      try {
        sessionStorage.setItem(chiave(pathname), String(window.scrollY));
      } catch {
        /* sessionStorage non disponibile: ignoriamo */
      }
    };

    // click su un link interno → salva la posizione attuale per il futuro "indietro"
    const onClick = (e: MouseEvent) => {
      const ancoraggio = (e.target as HTMLElement)?.closest?.("a");
      const href = ancoraggio?.getAttribute("href");
      if (!href || !href.startsWith("/")) return;
      salvaPosizione();
    };
    const onPageHide = () => salvaPosizione();

    // --- RIPRISTINO / TOP all'arrivo su questa pagina -----------
    let raf = 0;
    let tentativi = 0;
    let annullato = false;

    const vaiATop = () =>
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });

    const ripristina = () => {
      if (annullato) return;
      const salvata = sessionStorage.getItem(chiave(pathname));
      const y = salvata !== null ? parseInt(salvata, 10) : 0;
      const bersaglio = !Number.isNaN(y) && y > 0 ? y : 0;

      const max =
        document.documentElement.scrollHeight - window.innerHeight;
      if (bersaglio === 0) {
        vaiATop();
        return;
      }
      if (bersaglio > max && tentativi < 15) {
        // la pagina sta ancora crescendo (immagini, animazioni): aspetta
        tentativi++;
        raf = requestAnimationFrame(ripristina);
        return;
      }
      window.scrollTo({
        top: Math.min(bersaglio, Math.max(max, 0)),
        behavior: "instant" as ScrollBehavior,
      });
    };

    if (window.location.hash) {
      // lasciamo fare al browser: deve raggiungere l'ancora
    } else if (eIndietro) {
      raf = requestAnimationFrame(ripristina);
    } else {
      vaiATop();
    }

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
