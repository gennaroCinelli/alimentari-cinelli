"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { SITE } from "@/lib/site";
import LiveStatus from "./visual/LiveStatus";

// ---------------------------------------------------------------
// NAVBAR — piatta e intuitiva: 5 voci, nessun sottomenù.
// Link grandi, voce attiva ben evidenziata, stato del negozio a vista.
// ---------------------------------------------------------------
const LINKS = [
  { href: "/", label: "Home" },
  { href: "/frutta-verdura", label: "Vetrina" },
  { href: "/salumi", label: "Salumi & Formaggi" },
  { href: "/chi-siamo", label: "Chi Siamo" },
  { href: "/contatti", label: "Dove Siamo" },
];

export default function Navbar() {
  const [aperto, setAperto] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // blocco lo scroll col menu aperto + chiudo cambiando pagina
  useEffect(() => {
    document.body.style.overflow = aperto ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [aperto]);
  useEffect(() => setAperto(false), [pathname]);

  const voce = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[120] transition-all duration-500 ${
          scrolled
            ? "border-b border-line bg-noir/95 backdrop-blur-xl"
            : "border-b border-transparent bg-noir/70 backdrop-blur-md"
        }`}
      >
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8">
          {/* Brand */}
          <Link href="/" className="group flex items-center gap-3" aria-label="Torna alla home">
            <span className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-accent/70 font-display text-xl font-bold text-accent transition-colors group-hover:bg-accent group-hover:text-white">
              C
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-display text-lg font-bold uppercase tracking-tight md:text-xl">
                Alimentari <span className="text-accent">Cinelli</span>
              </span>
              <span className="mt-1.5 text-[11px] font-bold tracking-[0.25em] text-mute uppercase">
                Sant&apos;Agata de&apos; Goti · 1986
              </span>
            </span>
          </Link>

          {/* Link desktop — grandi e leggibili */}
          <div className="hidden items-center gap-7 lg:flex">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                aria-current={voce(l.href) ? "page" : undefined}
                className={`relative rounded-lg px-1 py-2 text-[15px] font-bold transition-colors ${
                  voce(l.href)
                    ? "text-accent"
                    : "text-ink hover:text-accent"
                }`}
              >
                {l.label}
                {voce(l.href) && (
                  <motion.span
                    layoutId="nav-dot"
                    className="absolute -bottom-0.5 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-accent"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Destra: stato live + telefono rapido + hamburger */}
          <div className="flex items-center gap-3">
            <span className="hidden xl:inline-flex">
              <LiveStatus variante="pill" />
            </span>
            <a
              href={SITE.telefonoHref}
              aria-label={`Chiamaci al ${SITE.telefono}`}
              className="hidden h-12 w-12 items-center justify-center rounded-full border border-line text-accent transition-colors hover:border-accent hover:bg-accent hover:text-white md:flex"
            >
              <Phone size={20} />
            </a>
            <button
              onClick={() => setAperto(!aperto)}
              aria-label={aperto ? "Chiudi il menu" : "Apri il menu"}
              aria-expanded={aperto}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-line text-ink lg:hidden"
            >
              {aperto ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Menu mobile a schermo intero: scritte enormi, tocchi facili */}
      <AnimatePresence>
        {aperto && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at 92% 6%)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 92% 6%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 92% 6%)" }}
            transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[110] flex flex-col justify-between overflow-y-auto bg-noir px-8 pb-10 pt-28"
          >
            <div className="flex flex-col">
              {LINKS.map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.06, duration: 0.4 }}
                >
                  <Link
                    href={l.href}
                    aria-current={voce(l.href) ? "page" : undefined}
                    className={`block border-b border-line py-4 font-display text-4xl font-bold uppercase transition-colors ${
                      voce(l.href) ? "text-accent" : "text-ink"
                    }`}
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-10 flex flex-col gap-4"
            >
              <LiveStatus variante="big" />
              <a
                href={SITE.telefonoHref}
                className="flex items-center justify-center gap-3 rounded-2xl bg-accent py-5 text-lg font-bold uppercase tracking-wide text-white"
              >
                <Phone size={22} /> Chiama: {SITE.telefono}
              </a>
              <p className="text-center text-base text-mute">
                {SITE.indirizzo.via} · {SITE.indirizzo.citta}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
