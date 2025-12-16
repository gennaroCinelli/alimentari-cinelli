"use client";
import { motion } from "framer-motion";
import { Wheat, Flame } from "lucide-react";

export default function NfrennulePage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-yellow-500 selection:text-black pt-20">
      
      {/* HERO */}
      <section className="relative h-[80vh] w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="/hero-nfrennule.jpg" 
            className="w-full h-full object-cover opacity-50 scale-105 sepia-[0.2]"
            alt="Nfrennule Sfondo"
            onError={(e) => { (e.target as HTMLImageElement).src = "/placeholder-food.jpg"; }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/60 via-transparent to-[#0a0a0a]"></div>
        </div>

        <motion.div 
           initial={{ opacity: 0, y: 50 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1 }}
           className="relative z-10 text-center px-4 max-w-4xl"
        >
          <span className="inline-block py-1 px-4 border border-yellow-600/50 rounded-full text-yellow-500 text-xs font-bold tracking-[0.4em] uppercase mb-6 bg-yellow-900/10 backdrop-blur-md">
            Tradizione Sannita
          </span>
          <h1 className="text-6xl md:text-9xl font-serif font-bold leading-none mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white to-stone-400">
            'Nfrennule.
          </h1>
          <p className="text-xl md:text-2xl text-stone-300 font-light max-w-2xl mx-auto leading-relaxed">
            Acqua, farina, olio e vino. <br />
            <span className="text-yellow-500 font-serif italic">Il sapore antico della festa.</span>
          </p>
        </motion.div>
      </section>


      {/* STORIA */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        
        {/* Step 1: Impasto */}
        <div className="flex flex-col md:flex-row gap-10 items-center mb-24 border-b border-white/5 pb-20">
          <div className="flex-1 text-right md:text-left">
            <span className="text-yellow-600 font-serif text-5xl opacity-50 mb-2 block">01</span>
            <h3 className="text-3xl font-bold mb-4 text-white">L'Impasto Povero</h3>
            <p className="text-stone-400 text-lg leading-relaxed">
              La ricetta è quella di una volta, semplice e genuina. Farina di grano duro, olio extravergine d'oliva locale e vino bianco. 
              E poi il tocco segreto: i semi di <strong>finocchietto selvatico</strong> che donano quel profumo inconfondibile.
            </p>
          </div>
          <div className="flex-1 flex justify-center">
             <Wheat size={100} className="text-stone-700" />
          </div>
        </div>

        {/* Step 2: La forma */}
        <div className="flex flex-col md:flex-row-reverse gap-10 items-center mb-24 border-b border-white/5 pb-20">
          <div className="flex-1 text-left md:text-right">
            <span className="text-yellow-600 font-serif text-5xl opacity-50 mb-2 block">02</span>
            <h3 className="text-3xl font-bold mb-4 text-white">L'Intreccio a mano</h3>
            <p className="text-stone-400 text-lg leading-relaxed">
              Ogni 'nfrennula è lavorata rigorosamente a mano. L'impasto viene steso e intrecciato nella tipica forma a "8" o a nodo. 
              Non esistono stampi, solo l'abilità delle mani che si tramanda da generazioni.
            </p>
          </div>
          <div className="flex-1 flex justify-center">
             <div className="text-stone-700 text-9xl font-serif">8</div>
          </div>
        </div>

        {/* Step 3: Cottura */}
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="flex-1 text-right md:text-left">
            <span className="text-yellow-600 font-serif text-5xl opacity-50 mb-2 block">03</span>
            <h3 className="text-3xl font-bold mb-4 text-white">Bollite e Infornate</h3>
            <p className="text-stone-400 text-lg leading-relaxed">
              Prima vengono scottate in acqua bollente (la "scauratura"), poi passano in forno finché non diventano dorate e croccanti. 
              È questa doppia cottura che le rende friabili e perfette per accompagnare un bicchiere di vino.
            </p>
          </div>
          <div className="flex-1 flex justify-center">
             <Flame size={100} className="text-stone-700 animate-pulse" />
          </div>
        </div>

      </section>


      {/* CONCLUSIONE CON SFONDO (Modificata) */}
      <section className="relative py-40 text-center px-4 overflow-hidden">
        
        {/* Immagine di Sfondo */}
        <div className="absolute inset-0 z-0">
           <img 
             src="/nfrennule-bg.jpg" // <-- Assicurati che questo file esista in public
             alt="Sfondo Nfrennule" 
             className="w-full h-full object-cover"
             onError={(e) => { (e.target as HTMLImageElement).src = "/placeholder-food.jpg"; }}
           />
           {/* Velo scuro per leggere il testo */}
           <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
        </div>

        {/* Testo sopra l'immagine */}
        <div className="relative z-10 max-w-3xl mx-auto">
            <span className="text-yellow-500 text-xs font-bold tracking-[0.3em] uppercase mb-6 block">
                Il Tarallo di Sant'Agata
            </span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-white drop-shadow-xl">
              Friabili, profumate, uniche.
            </h2>
            <p className="text-stone-200 text-lg md:text-xl font-light leading-relaxed drop-shadow-md">
              Passa in bottega per prendere il tuo sacchetto appena sfornato.
            </p>
        </div>

      </section>

    </main>
  );
}