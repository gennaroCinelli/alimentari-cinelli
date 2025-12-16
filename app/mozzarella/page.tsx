"use client";
import { motion } from "framer-motion";
import { Droplets } from "lucide-react";

export default function MozzarellaPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white font-sans selection:bg-blue-200 selection:text-black pt-20">
      
      {/* HERO SECTION */}
      <section className="relative h-[70vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden">
         {/* Immagine di sfondo */}
         <div className="absolute inset-0 z-0">
            <img 
              src="/hero-mozzarella.jpg" 
              className="w-full h-full object-cover opacity-50" 
              alt="Mozzarella Hero"
              onError={(e) => { (e.target as HTMLImageElement).src = "/placeholder-food.jpg"; }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-black/60"></div>
         </div>

         {/* Testo */}
         <motion.div 
           initial={{ opacity: 0, y: 40 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           className="relative z-10"
         >
           <span className="text-blue-300 text-xs font-bold tracking-[0.3em] uppercase mb-6 block">
             D.O.P. Campania
           </span>
           <h1 className="text-7xl md:text-9xl font-serif font-bold text-white mb-6 drop-shadow-2xl">
             Oro Bianco.
           </h1>
           <p className="text-stone-300 max-w-2xl mx-auto text-xl font-light">
             Arriva fresca ogni mattina. Ancora tiepida, immersa nel suo siero.
           </p>
         </motion.div>
      </section>

      {/* LA COLLEZIONE (3 Prodotti) */}
      <section className="max-w-7xl mx-auto px-6 py-20 space-y-8">
        
        {/* RIGA SUPERIORE: Mozzarella e Ricotta */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* 1. La Mozzarella */}
            <div className="group relative h-[500px] overflow-hidden rounded-2xl bg-stone-900 border border-white/5 shadow-2xl">
            <img 
                src="/mozzarella-1.jpg" 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
                alt="Mozzarella di Bufala" 
                onError={(e) => { (e.target as HTMLImageElement).src = "/placeholder-food.jpg"; }}
            />
            <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black to-transparent">
                <h3 className="text-3xl font-serif font-bold mb-2">La Bufala</h3>
                <p className="text-stone-300 text-sm">
                    Pelle sottile che scrocchia sotto i denti, cuore succoso che rilascia latte al taglio. 
                </p>
            </div>
            </div>

            {/* 2. La Ricotta (Separata) */}
            <div className="group relative h-[500px] overflow-hidden rounded-2xl bg-stone-900 border border-white/5 shadow-2xl">
            <img 
                src="/ricotta.jpg" // Assicurati di avere questa foto
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
                alt="Ricotta di Bufala" 
                onError={(e) => { (e.target as HTMLImageElement).src = "/placeholder-food.jpg"; }}
            />
            <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black to-transparent">
                <h3 className="text-3xl font-serif font-bold mb-2">La Ricotta</h3>
                <p className="text-stone-300 text-sm">
                    Dolce, cremosa e delicatissima. Perfetta da spalmare sul pane caldo o per i dolci della tradizione.
                </p>
            </div>
            </div>

        </div>

        {/* RIGA INFERIORE: Provola (Al centro) */}
        <div className="flex justify-center">
            <div className="w-full md:w-2/3 group relative h-[400px] overflow-hidden rounded-2xl bg-stone-900 border border-white/5 shadow-2xl">
                <img 
                    src="/provola.jpg" // Assicurati di avere questa foto
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
                    alt="Provola Affumicata" 
                    onError={(e) => { (e.target as HTMLImageElement).src = "/placeholder-food.jpg"; }}
                />
                <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black to-transparent text-center">
                    <h3 className="text-3xl font-serif font-bold mb-2">La Provola Affumicata</h3>
                    <p className="text-stone-300 text-sm max-w-md mx-auto">
                        Affumicata naturalmente con paglia di grano. Un sapore intenso e rustico che conquista al primo morso.
                    </p>
                </div>
            </div>
        </div>

      </section>

      {/* CHIUSURA ETEREA */}
      <section className="py-20 text-center px-6">
        <Droplets className="mx-auto text-blue-400 mb-4" size={32} />
        <h2 className="text-2xl md:text-4xl font-serif italic text-white">
          "Latte, sale, caglio. La perfezione non ha bisogno di altro."
        </h2>
        <p className="text-stone-500 mt-4 text-sm uppercase tracking-widest">
          Disponibile fresca tutti i giorni
        </p>
      </section>

    </main>
  );
}