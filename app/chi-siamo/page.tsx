"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Leaf, Calendar, ShoppingBasket } from "lucide-react";

export default function ChiSiamoPage() {
  
  // --- FOTO SLIDER ---
  const immagini = [
    "/slider1.png", 
    "/slider2.png"
  ];

  const [indiceFoto, setIndiceFoto] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndiceFoto((prev) => (prev === immagini.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, [immagini.length]);

  return (
    <main className="min-h-screen bg-[#111] text-white font-sans selection:bg-orange-500 selection:text-white pt-48">
      
      {/* --- CONTENUTO PAGINA --- */}
      <section className="max-w-7xl mx-auto px-6 pb-20 flex flex-col lg:flex-row gap-16 items-start">
        
        {/* COLONNA SINISTRA: La Storia */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 space-y-10"
        >
          <div>
            {/* 1. DATA MODIFICATA QUI SOTTO */}
            <span className="text-orange-500 text-sm font-bold tracking-widest uppercase mb-2 block">
              Dal 1986 ad Oggi
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-6">
              Più di un negozio. <br />
              Una famiglia.
            </h1>
            <p className="text-xl text-stone-300 italic border-l-4 border-orange-500 pl-4">
              "Tutto nasce dalla terra."
            </p>
          </div>

          <div className="space-y-10 text-stone-300 leading-relaxed">
            
            {/* PARAGRAFO 1 */}
            <div className="relative pl-8 border-l border-stone-800">
              <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-stone-800 border-2 border-orange-500"></span>
              <h3 className="text-white text-xl font-serif mb-2 flex items-center gap-2 text-orange-400">
                <Leaf size={20} /> Le Origini
              </h3>
              {/* 2. DATA MODIFICATA QUI SOTTO */}
              <p>
                Tutto inizia ben prima del 1986, in quella che all'epoca era solo una piccola stanza. 
                Vendevamo ciò che le nostre mani coltivavano. Non c’erano intermediari, solo il sapore autentico della natura.
              </p>
            </div>

            {/* PARAGRAFO 2 */}
            <div className="relative pl-8 border-l border-stone-800">
              <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-stone-800 border-2 border-orange-500"></span>
              {/* 3. DATA MODIFICATA QUI SOTTO */}
              <h3 className="text-white text-xl font-serif mb-2 flex items-center gap-2 text-orange-400">
                <Calendar size={20} /> 1986: La Svolta
              </h3>
              <p>
                Con l'ingresso della terza generazione, abbiamo sentito l'esigenza di crescere.
                Abbiamo affiancato all'ortofrutta un reparto alimentari completo, diventando un punto di riferimento quotidiano.
              </p>
            </div>

            {/* PARAGRAFO 3 */}
            <div className="relative pl-8 border-l border-stone-800">
              <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-stone-800 border-2 border-orange-500"></span>
              <h3 className="text-white text-xl font-serif mb-2 flex items-center gap-2 text-orange-400">
                <ShoppingBasket size={20} /> Oggi
              </h3>
              <p>
                Siamo un negozio moderno che non ha dimenticato da dove viene.
                Il nostro cuore pulsante resta la frutta e la verdura, unendo la comodità alla freschezza ineguagliabile.
              </p>
            </div>

          </div>
        </motion.div>

        {/* COLONNA DESTRA: Slider Foto */}
        <div className="w-full lg:w-[500px] sticky top-40">
          
          <div className="relative h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl shadow-orange-900/20 border border-white/10 bg-stone-900">
              
              <AnimatePresence mode="wait">
                <motion.img 
                  key={indiceFoto} 
                  src={immagini[indiceFoto]} 
                  alt="Il Titolare" 
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0 w-full h-full object-cover" 
                />
              </AnimatePresence>
              
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black via-black/60 to-transparent z-10 pointer-events-none"></div>

              <div className="absolute bottom-8 left-8 z-20">
                <p className="text-white font-serif text-3xl font-bold">Il Titolare</p>
                <p className="text-orange-400 text-sm tracking-widest uppercase mt-1">Passione e Dedizione</p>
              </div>
          </div>

          <div className="mt-6 flex justify-center gap-3">
            {immagini.map((_, i) => (
              <button 
                key={i} 
                onClick={() => setIndiceFoto(i)}
                className={`h-2 rounded-full transition-all duration-500 ${i === indiceFoto ? "w-10 bg-orange-500" : "w-2 bg-stone-700 hover:bg-stone-500"}`} 
              />
            ))}
          </div>

        </div>

      </section>
    </main>
  );
}