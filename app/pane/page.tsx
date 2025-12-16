"use client";
import { motion } from "framer-motion";
import { Flame, Wheat, Clock } from "lucide-react";

export default function PanePage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-amber-600 selection:text-white pt-20">
      
      {/* HERO SECTION */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/hero-pane.jpg" 
            className="w-full h-full object-cover opacity-60 scale-105"
            alt="Pane Cotto a Legna"
            onError={(e) => { (e.target as HTMLImageElement).src = "/placeholder-food.jpg"; }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-black/40"></div>
        </div>

        <motion.div 
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1 }}
           className="relative z-10 text-center max-w-4xl px-6"
        >
           <h1 className="text-5xl md:text-8xl font-serif font-bold mb-4 text-amber-500 drop-shadow-lg">
             Pane a Legna
           </h1>
           <p className="text-xl md:text-3xl font-light text-stone-200">
             Crosta scura, mollica alta, profumo di casa.
           </p>
        </motion.div>
      </section>

      {/* I SEGRETI (3 Icone) */}
      <section className="py-24 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center border-b border-white/5">
         
         <div className="space-y-4">
           <Wheat size={40} className="text-amber-600 mx-auto" />
           <h3 className="text-xl font-bold">Grani Antichi</h3>
           <p className="text-stone-400 text-sm leading-relaxed">
             Solo farine selezionate e non raffinate, per un sapore vero che nutre e sazia.
           </p>
         </div>

         <div className="space-y-4">
           <Clock size={40} className="text-amber-600 mx-auto" />
           <h3 className="text-xl font-bold">Lievitazione Lenta</h3>
           <p className="text-stone-400 text-sm leading-relaxed">
             Usiamo solo Lievito Madre naturale. L'impasto riposa per ore, diventando leggero e digeribile.
           </p>
         </div>

         <div className="space-y-4">
           <Flame size={40} className="text-amber-600 mx-auto" />
           <h3 className="text-xl font-bold">Forno a Legna</h3>
           <p className="text-stone-400 text-sm leading-relaxed">
             La cottura a fuoco vivo dona quella crosta spessa e croccante che protegge il cuore morbido.
           </p>
         </div>

      </section>

      {/* SEZIONE VISIVA E TESTUALE */}
      <section className="py-32 max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
         
         <div className="w-full md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Come una volta.
            </h2>
            <p className="text-stone-400 text-lg leading-relaxed mb-6">
              Il nostro pane non è gommoso, non è bianco pallido. È pane vero. 
              Quando lo spezzi, senti il "crack" della crosta e il profumo ti riporta indietro nel tempo, alle domeniche a pranzo dai nonni.
            </p>
            <p className="text-stone-400 text-lg leading-relaxed">
              Perfetto per la scarpetta al sugo, sublime con un filo d'olio e pomodoro, eterno compagno dei nostri salumi.
            </p>
         </div>

         <div className="w-full md:w-1/2 h-[500px] relative rounded-t-full overflow-hidden border border-white/10">
            <img 
               src="/pane-dettaglio.jpg" 
               className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000"
               alt="Dettaglio Pane"
               onError={(e) => { (e.target as HTMLImageElement).src = "/placeholder-food.jpg"; }}
            />
         </div>

      </section>

      {/* FOOTER DI SEZIONE */}
      <section className="pb-20 text-center">
         <p className="text-amber-500 font-serif italic text-2xl">
           "Il pane è la prima forma di felicità."
         </p>
      </section>

    </main>
  );
}