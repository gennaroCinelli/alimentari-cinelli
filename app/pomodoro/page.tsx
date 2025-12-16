"use client";
import { motion } from "framer-motion";
import { Flame, Sun } from "lucide-react";

export default function PomodoroPage() {
  return (
    <main className="min-h-screen bg-[#0f0505] text-white font-sans selection:bg-red-600 selection:text-white pt-20">
      
      {/* HERO SPLIT */}
      <section className="flex flex-col md:flex-row h-screen">
         
         {/* Lato Testo */}
         <div className="w-full md:w-1/2 flex items-center justify-center p-10 bg-[#0f0505] z-10">
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="max-w-md"
            >
               <span className="text-red-600 text-xs font-bold tracking-[0.4em] uppercase mb-4 block">
                 Dalle pendici del Vesuvio
               </span>
               <h1 className="text-6xl md:text-8xl font-serif font-bold leading-none mb-8">
                 Il <br/> Piennolo.
               </h1>
               <p className="text-stone-400 text-lg leading-relaxed mb-8">
                 Piccolo, dalla forma a ciliegia e con la punta inconfondibile. 
                 Non marcisce mai. Appeso nei grappoli ("piennoli"), conserva il sole dell'estate per tutto l'inverno.
               </p>
               <div className="flex gap-4">
                  <div className="bg-red-900/20 p-4 rounded-lg text-center border border-red-900/30">
                     <Flame className="text-red-500 mx-auto mb-2" />
                     <span className="text-xs uppercase tracking-widest text-red-400">Suolo Vulcanico</span>
                  </div>
                  <div className="bg-red-900/20 p-4 rounded-lg text-center border border-red-900/30">
                     <Sun className="text-red-500 mx-auto mb-2" />
                     <span className="text-xs uppercase tracking-widest text-red-400">Pelle Spessa</span>
                  </div>
               </div>
            </motion.div>
         </div>

         {/* Lato Immagine (NITIDA, SENZA SFOCATURA) */}
         <div className="w-full md:w-1/2 h-[50vh] md:h-full relative overflow-hidden">
            <div className="absolute inset-0 bg-red-900/10 mix-blend-overlay z-10"></div>
            <img 
               src="/hero-pomodoro.jpg" 
               // Ho rimosso 'blur-sm'. Ora è nitida.
               // Ho aggiunto un leggero zoom (scale-105) per renderla viva.
               className="w-full h-full object-cover brightness-90 scale-105 hover:scale-100 transition-transform duration-[1.5s]"
               alt="Pomodoro del Piennolo"
               onError={(e) => { (e.target as HTMLImageElement).src = "/placeholder-food.jpg"; }}
            />
         </div>

      </section>

      {/* SEZIONE STORIA */}
      <section className="py-24 max-w-5xl mx-auto px-6 text-center">
         <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8">
           Un sapore che esplode.
         </h2>
         <p className="text-stone-400 text-lg md:text-xl leading-relaxed mb-12 max-w-3xl mx-auto">
           Cresce su una terra nera, ricca e ardente. La sua buccia è spessa per proteggere la polpa dolce-acida. 
           È l'ingrediente segreto per uno spaghetto che non dimenticherete mai.
           Quando lo schiacci in padella, libera un profumo di terra e fuoco unico al mondo.
         </p>
         
         <div className="w-full h-[400px] rounded-3xl overflow-hidden relative shadow-2xl shadow-red-900/20">
             <img 
               src="/pomodoro-terra.jpg" 
               className="w-full h-full object-cover opacity-80"
               alt="Coltivazione Vesuvio"
               onError={(e) => { (e.target as HTMLImageElement).src = "/placeholder-food.jpg"; }}
             />
             <div className="absolute inset-0 flex items-center justify-center">
                <span className="bg-black/70 px-6 py-2 rounded-full border border-red-500/50 text-red-400 uppercase tracking-widest text-sm backdrop-blur">
                   DOP Vesuvio
                </span>
             </div>
         </div>
      </section>

      {/* CHIUSURA */}
      <section className="pb-20 text-center">
         <p className="text-stone-500 text-sm font-light">
           Vieni a scegliere il tuo grappolo in negozio.
         </p>
      </section>

    </main>
  );
}