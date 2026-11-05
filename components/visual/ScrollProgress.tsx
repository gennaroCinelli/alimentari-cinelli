"use client";

import { motion, useScroll, useSpring } from "framer-motion";

// Filo arancione in cima: quanto hai letto della pagina
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[150] h-[3px] origin-left bg-gradient-to-r from-accent via-accent to-amber-400"
    />
  );
}
