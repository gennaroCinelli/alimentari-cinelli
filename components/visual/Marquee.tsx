"use client";

import { Asterisk } from "lucide-react";

// Nastro infinito — contenuto duplicato e loop CSS seamless
export default function Marquee({
  voci,
  className = "",
  lento = false,
}: {
  voci: string[];
  className?: string;
  lento?: boolean;
}) {
  const riga = (ariaNascosta: boolean) => (
    <div
      aria-hidden={ariaNascosta}
      className="flex shrink-0 items-center gap-8 pr-8"
    >
      {voci.map((voce, i) => (
        <span key={i} className="flex items-center gap-8">
          <span className="whitespace-nowrap">{voce}</span>
          <Asterisk className="size-5 shrink-0 text-accent" />
        </span>
      ))}
    </div>
  );

  return (
    <div className={`mask-fade-x flex overflow-hidden ${className}`}>
      <div
        className={`flex w-max ${
          lento ? "animate-marquee-slow" : "animate-marquee"
        }`}
      >
        {riga(false)}
        {riga(true)}
      </div>
    </div>
  );
}
