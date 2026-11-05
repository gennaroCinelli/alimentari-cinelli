"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie } from "lucide-react";

export default function CookieBanner() {
  const [visibile, setVisibile] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("cinelli-cookie")) {
      const t = setTimeout(() => setVisibile(true), 2000);
      return () => clearTimeout(t);
    }
  }, []);

  const scegli = (scelta: string) => {
    localStorage.setItem("cinelli-cookie", scelta);
    setVisibile(false);
  };

  return (
    <AnimatePresence>
      {visibile && (
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 60 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          role="dialog"
          aria-label="Informativa cookie"
          className="fixed bottom-28 left-4 right-4 z-[140] rounded-3xl border-2 border-line bg-elev p-7 shadow-2xl sm:bottom-5 sm:left-5 sm:right-auto sm:max-w-sm"
        >
          <div className="flex items-start gap-4">
            <span
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent"
              aria-hidden="true"
            >
              <Cookie size={22} />
            </span>
            <div>
              <h3 className="text-lg font-bold">Un momento 🍪</h3>
              <p className="mt-2 text-base leading-relaxed text-mute">
                Usiamo solo cookie tecnici per ricordare le tue preferenze.
                Nessun tracciamento, promesso.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <button
                  onClick={() => scegli("accettati")}
                  className="min-h-12 rounded-2xl bg-accent px-7 py-2.5 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-accent-deep"
                >
                  Va bene
                </button>
                <button
                  onClick={() => scegli("rifiutati")}
                  className="min-h-12 rounded-2xl border-2 border-line px-7 py-2.5 text-sm font-bold uppercase tracking-wide text-ink transition-colors hover:border-accent"
                >
                  No grazie
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
