"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Link from "next/link"; 

// --- COMPONENTE HERO (Foto Negozio) ---
function HeroSection() {
  return (
    <section className="relative w-full h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      
      {/* 1. L'IMMAGINE DI SFONDO */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/negozio-esterno.jpg" 
          className="w-full h-full object-cover scale-105"
          alt="Esterno Alimentari Cinelli"
          // --- MODIFICHE PER IL CARICAMENTO IMMEDIATO ---
          loading="eager"        // Forza il download immediato
          decoding="sync"        // Decodifica subito l'immagine
          fetchPriority="high"   // Massima priorità per il browser
          // ---------------------------------------------
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "/negozio-esterno.png"; 
          }}
        />
        {/* Velo scuro per leggere il testo */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>
      </div>

      {/* 2. IL TESTO SOPRA */}
      <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-20 text-center px-4 mt-20"
      >
          <span className="text-orange-500 text-xs md:text-sm font-bold tracking-[0.3em] uppercase mb-6 block font-sans">
            Eccellenza Quotidiana
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white leading-tight drop-shadow-2xl">
            Dal produttore <br />
            <span className="italic font-light">direttamente a te.</span>
          </h1>
          {/* Puntini rossi */}
          <div className="flex justify-center gap-2 mt-8">
             <span className="w-2 h-2 rounded-full bg-red-600"></span>
             <span className="w-2 h-2 rounded-full bg-red-600"></span>
             <span className="w-2 h-2 rounded-full bg-red-600"></span>
          </div>
      </motion.div>

    </section>
  );
}

// --- PAGINA PRINCIPALE ---
export default function Home() {
  
  // --- FOTO SLIDER ---
  const fotoLocale = [
    "/locale1.jpg.jpeg", 
    "/locale2.jpg.jpeg", 
    "/locale3.jpg.jpeg", 
    "/locale4.jpg.jpeg",
    "/locale5.jpg.jpeg", 
    "/locale6.jpg.jpeg", 
    "/locale7.jpg.jpeg"
  ];

  const [index, setIndex] = useState(0);
  
  const nextStep = () => setIndex((prev) => (prev + 1 === fotoLocale.length ? 0 : prev + 1));
  const prevStep = () => setIndex((prev) => (prev - 1 < 0 ? fotoLocale.length - 1 : prev - 1));

  useEffect(() => {
    const timer = setInterval(nextStep, 3000);
    return () => clearInterval(timer);
  }, []);

  const getIndex = (i: number) => {
    const len = fotoLocale.length;
    return ((i % len) + len) % len;
  };

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white font-sans overflow-hidden selection:bg-orange-500 selection:text-white">
      
      {/* HERO SECTION IN ALTO */}
      <HeroSection />
      
      {/* SECONDA SEZIONE (CAROUSEL) */}
      <section className="relative py-32 flex flex-col items-center justify-center z-10">
        
        {/* TESTO */}
        <div className="text-center mb-20 px-4 max-w-3xl mx-auto">
           <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
             Il nostro locale
           </h2>
           
           <p className="text-orange-500 font-bold uppercase tracking-widest text-xs mb-4">
             Un tuffo nella tradizione
           </p>

           <p className="text-stone-300 text-lg leading-relaxed">
             Quella che vedi online è solo una piccola anteprima. 
             <br className="hidden md:block" />
             Vieni a trovarci in negozio per scoprire l'<strong>assortimento completo</strong>: 
             dai prodotti freschi di giornata alle chicche introvabili che selezioniamo con cura ogni mattina.
           </p>
        </div>

        <div className="relative w-full max-w-6xl h-[350px] md:h-[500px] flex items-center justify-center perspective-1000">
          
          {/* Foto Precedente */}
          <motion.div 
            className="absolute left-4 md:left-20 w-[40%] md:w-[30%] h-[60%] rounded-2xl overflow-hidden opacity-30 grayscale brightness-50 z-10 blur-[1px]"
            animate={{ x: -50, scale: 0.8 }}
            transition={{ duration: 0.5 }}
          >
            <img src={fotoLocale[getIndex(index - 1)]} className="w-full h-full object-cover" alt="prev" />
          </motion.div>

          {/* Foto Centrale (Principale) */}
          <motion.div 
            className="absolute w-[85%] md:w-[55%] h-[80%] md:h-[100%] rounded-3xl overflow-hidden shadow-2xl shadow-orange-900/40 z-20 border border-white/10 cursor-pointer"
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.5 }}
          >
             <img src={fotoLocale[getIndex(index)]} className="w-full h-full object-cover" alt="main" />
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80"></div>
             
             <div className="absolute bottom-6 left-6 text-left">
               <h3 className="text-xl md:text-2xl font-serif font-bold">Vieni a trovarci</h3>
             </div>
          </motion.div>

          {/* Foto Successiva */}
          <motion.div 
            className="absolute right-4 md:right-20 w-[40%] md:w-[30%] h-[60%] rounded-2xl overflow-hidden opacity-30 grayscale brightness-50 z-10 blur-[1px]"
            animate={{ x: 50, scale: 0.8 }}
            transition={{ duration: 0.5 }}
          >
            <img src={fotoLocale[getIndex(index + 1)]} className="w-full h-full object-cover" alt="next" />
          </motion.div>

          {/* Pulsanti Frecce */}
          <button onClick={prevStep} className="absolute left-4 md:left-10 z-30 p-2 md:p-3 bg-white/10 hover:bg-orange-500 rounded-full text-white transition-all backdrop-blur-md border border-white/10">
            <ArrowLeft size={20} />
          </button>
          <button onClick={nextStep} className="absolute right-4 md:right-10 z-30 p-2 md:p-3 bg-white/10 hover:bg-orange-500 rounded-full text-white transition-all backdrop-blur-md border border-white/10">
            <ArrowRight size={20} />
          </button>
        </div>

      </section>
    </main>
  );
}