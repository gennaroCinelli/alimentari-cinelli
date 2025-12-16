"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Controlla se l'utente ha già accettato i cookie
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      // Aspetta 1 secondo prima di apparire per non essere aggressivo
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accettaCookie = () => {
    localStorage.setItem("cookieConsent", "true");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-[400px] z-[9999]"
        >
          <div className="bg-[#141414] border border-white/10 rounded-2xl p-6 shadow-2xl backdrop-blur-xl relative">
            
            {/* Tasto Chiudi (X) */}
            <button 
              onClick={() => setIsVisible(false)}
              className="absolute top-4 right-4 text-stone-500 hover:text-white transition-colors"
            >
              <X size={16} />
            </button>

            <div className="flex items-start gap-4">
              <div className="bg-orange-500/10 p-3 rounded-full text-orange-500 shrink-0">
                <Cookie size={24} />
              </div>
              
              <div>
                <h4 className="font-serif font-bold text-white mb-2">Utilizzo dei Cookie</h4>
                <p className="text-stone-400 text-xs leading-relaxed mb-4">
                  Utilizziamo i cookie per migliorare la tua esperienza e per le funzionalità come la mappa e i social. 
                  Continuando a navigare, accetti il loro utilizzo.
                </p>
                
                <div className="flex gap-3">
                  <button 
                    onClick={accettaCookie}
                    className="bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold py-2 px-6 rounded-full transition-all"
                  >
                    ACCETTA
                  </button>
                  <button 
                    onClick={() => setIsVisible(false)}
                    className="text-stone-400 hover:text-white text-xs font-bold py-2 px-2 transition-colors underline decoration-stone-600 underline-offset-4"
                  >
                    Chiudi
                  </button>
                </div>
              </div>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}