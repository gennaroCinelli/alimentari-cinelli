"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Bottone WhatsApp globale: ben visibile, sempre nello stesso punto.
export default function WhatsAppButton() {
  const [mostraTooltip, setMostraTooltip] = useState(false);

  // la prima volta, dopo qualche secondo, spieghiamo a cosa serve
  useEffect(() => {
    if (sessionStorage.getItem("cinelli-wa-tip")) return;
    const show = setTimeout(() => setMostraTooltip(true), 2500);
    const hide = setTimeout(() => {
      setMostraTooltip(false);
      sessionStorage.setItem("cinelli-wa-tip", "1");
    }, 9000);
    return () => {
      clearTimeout(show);
      clearTimeout(hide);
    };
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-[130] flex items-center gap-3">
      <AnimatePresence>
        {mostraTooltip && (
          <motion.span
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 12 }}
            className="hidden rounded-2xl border border-line bg-elev px-5 py-3 text-base font-bold text-ink shadow-2xl sm:block"
          >
            Tocca qui per ordinare su WhatsApp 👋
          </motion.span>
        )}
      </AnimatePresence>

      <a
        href="https://wa.me/393393022051?text=Salve%2C%20vorrei%20fare%20un%20ordine"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Ordina su WhatsApp"
        className="group relative flex h-16 w-16 items-center justify-center rounded-full bg-wa text-white shadow-2xl shadow-green-900/50 transition-transform duration-300 hover:scale-110"
      >
        {/* anello pulsante */}
        <span className="absolute inset-0 rounded-full bg-wa opacity-60 [animation:wa-ping_2.4s_cubic-bezier(0,0,0.2,1)_infinite]" />
        <svg
          className="relative z-10 h-8 w-8 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
        </svg>
        <style>{`@keyframes wa-ping { 0% { transform: scale(1); opacity: .6 } 80%, 100% { transform: scale(1.6); opacity: 0 } }`}</style>
      </a>
    </div>
  );
}
