"use client";

import { useEffect, useRef } from "react";

// ---------------------------------------------------------------
// CAMPO DI PARTICELLE — braci calde che salgono lentamente,
// reagiscono alla position del mouse (leggera repulsione).
// Canvas DPR-aware, pausa quando la scheda è nascosta.
// ---------------------------------------------------------------
type Particella = {
  x: number;
  y: number;
  r: number;
  vx: number;
  vy: number;
  alpha: number;
  hue: number;
};

export default function Particles({ densita = 1 }: { densita?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0;
    let h = 0;
    let raf = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const mouse = { x: -9999, y: -9999 };
    let particelle: Particella[] = [];

    const crea = () => {
      const area = (w * h) / 12000;
      const n = Math.min(90, Math.floor(area * densita));
      particelle = Array.from({ length: n }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: 0.6 + Math.random() * 2.2,
        vx: (Math.random() - 0.5) * 0.12,
        vy: -(0.08 + Math.random() * 0.28),
        alpha: 0.12 + Math.random() * 0.5,
        hue: 14 + Math.random() * 26, // dal rosso all'arancio
      }));
    };

    const resize = () => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      w = rect?.width ?? window.innerWidth;
      h = rect?.height ?? window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      crea();
    };

    const onMouse = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const disegna = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of particelle) {
        // repulsione morbida dal mouse
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const d2 = dx * dx + dy * dy;
        if (d2 < 120 * 120) {
          const d = Math.sqrt(d2) || 1;
          const f = ((120 - d) / 120) * 0.35;
          p.vx += (dx / d) * f * 0.06;
          p.vy += (dy / d) * f * 0.04;
        }
        p.vx *= 0.985;
        p.vy = p.vy * 0.985 - 0.0018; // tende a risalire
        p.x += p.vx;
        p.y += p.vy;

        // riciclo ai bordi
        if (p.y < -10) {
          p.y = h + 10;
          p.x = Math.random() * w;
          p.vy = -(0.08 + Math.random() * 0.28);
        }
        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;

        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 3);
        g.addColorStop(0, `hsla(${p.hue}, 100%, 62%, ${p.alpha})`);
        g.addColorStop(1, "hsla(20, 100%, 55%, 0)");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 3, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(disegna);
    };

    const onVisibilita = () => {
      if (document.hidden) cancelAnimationFrame(raf);
      else raf = requestAnimationFrame(disegna);
    };

    resize();
    raf = requestAnimationFrame(disegna);
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMouse, { passive: true });
    document.addEventListener("visibilitychange", onVisibilita);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouse);
      document.removeEventListener("visibilitychange", onVisibilita);
    };
  }, [densita]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0"
    />
  );
}
