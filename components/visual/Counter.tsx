"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

// Numero che sale da 0 al valore quando entra in schermo
export default function Counter({
  finoA,
  suffisso = "",
  durata = 1600,
  className = "",
}: {
  finoA: number;
  suffisso?: string;
  durata?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [valore, setValore] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const inizio = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min((t - inizio) / durata, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValore(Math.round(eased * finoA));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, finoA, durata]);

  return (
    <span ref={ref} className={className}>
      {valore}
      {suffisso}
    </span>
  );
}
