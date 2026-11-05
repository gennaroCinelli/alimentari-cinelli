"use client";

import { motion } from "framer-motion";
import type { CSSProperties } from "react";

// Rivelazione parola-per-parola con maschera (le parole salgono da sotto)
export default function Reveal({
  testo,
  className = "",
  delay = 0,
  stagger = 0.045,
  once = true,
  style,
}: {
  testo: string;
  className?: string;
  delay?: number;
  stagger?: number;
  once?: boolean;
  style?: CSSProperties;
}) {
  const parole = testo.split(" ");
  return (
    <motion.span
      className={`inline-block ${className}`}
      style={style}
      initial="nascosto"
      whileInView="visibile"
      viewport={{ once, margin: "-60px" }}
      aria-label={testo}
    >
      {parole.map((parola, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden pb-[0.12em] -mb-[0.12em] align-bottom"
          aria-hidden="true"
        >
          <motion.span
            className="inline-block will-change-transform"
            variants={{
              nascosto: { y: "115%", rotate: 4 },
              visibile: { y: "0%", rotate: 0 },
            }}
            transition={{
              duration: 0.75,
              ease: [0.22, 1, 0.36, 1],
              delay: delay + i * stagger,
            }}
          >
            {parola}
            {i < parole.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
