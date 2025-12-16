"use client";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Navigation, MessageCircle, Truck } from "lucide-react";

export default function ContattiPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white font-sans pt-32 pb-20 selection:bg-orange-500 selection:text-white">
      
      {/* --- HERO SECTION --- */}
      <section className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto"
        >
           <span className="text-orange-500 text-xs font-bold tracking-[0.3em] uppercase mb-4 block">
             Siamo qui per te
           </span>
           <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-6">
             Vieni a <br />
             <span className="text-stone-500 italic">trovarci.</span>
           </h1>
           <p className="text-stone-400 text-lg">
             Il profumo del pane fresco e la cortesia di una volta ti aspettano in bottega.
           </p>
        </motion.div>
      </section>


      {/* --- GRIGLIA INFO E MAPPA --- */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* COLONNA SINISTRA: Informazioni e Contatti */}
        <div className="space-y-6">
          
          {/* Card Indirizzo */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-[#141414] p-8 rounded-3xl border border-white/5 hover:border-orange-500/30 transition-colors"
          >
            <div className="flex items-start gap-4">
              <div className="bg-orange-500/10 p-3 rounded-full text-orange-500">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Dove Siamo</h3>
                <p className="text-stone-400 mb-4">
                  Via Caudina, 10<br />
                  82019 Sant'Agata Dé Goti (BN)
                </p>
                <a 
                  href="https://www.google.com/maps/dir//Via+Caudina,+10,+82019+Sant'Agata+de'+Goti+BN" 
                  target="_blank"
                  className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-orange-500 transition-colors uppercase tracking-widest cursor-pointer"
                >
                  <Navigation size={16} /> Avvia Navigatore
                </a>
              </div>
            </div>
          </motion.div>

          {/* Card Orari */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-[#141414] p-8 rounded-3xl border border-white/5 hover:border-orange-500/30 transition-colors"
          >
            <div className="flex items-start gap-4">
              <div className="bg-orange-500/10 p-3 rounded-full text-orange-500">
                <Clock size={24} />
              </div>
              <div className="w-full">
                <h3 className="text-xl font-bold mb-4">Orari di Apertura</h3>
                <div className="space-y-4 text-stone-400 text-sm">
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span>Martedì - Sabato</span>
                    <div className="text-right">
                      <span className="text-white font-bold block">07:30 - 13:20</span>
                      <span className="text-white font-bold block">15:30 - 20:30</span>
                    </div>
                  </div>
                  <div className="flex justify-between border-b border-white/5 pb-2">
                    <span>Domenica</span>
                    <span className="text-white font-bold">07:30 - 13:20</span>
                  </div>
                  <div className="flex justify-between pt-1">
                    <span>Lunedì</span>
                    <span className="text-red-500 font-bold uppercase tracking-wider">Chiuso</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CONTATTI + SPEDIZIONI */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col md:flex-row gap-4"
          >
            {/* TASTO CHIAMA (Quadrato a sinistra) */}
            <a href="tel:+393393022051" className="bg-[#141414] p-6 rounded-3xl border border-white/5 hover:bg-white hover:text-black transition-all group text-center cursor-pointer flex flex-col items-center justify-center w-full md:w-40 flex-shrink-0">
               <Phone size={24} className="mb-2 text-orange-500 group-hover:text-black" />
               <span className="font-bold text-xs block uppercase tracking-wider">CHIAMA</span>
            </a>

            {/* TASTO SPEDIZIONI (Rettangolo lungo fino alla mappa) */}
            <div className="flex-grow bg-[#141414] p-6 rounded-3xl border border-white/5 hover:border-green-500/30 transition-colors flex items-center gap-6 relative overflow-hidden group">
                {/* Icona Verde */}
                <div className="bg-green-500/10 p-4 rounded-full text-green-500 z-10 shrink-0">
                   <Truck size={24} />
                </div>
                
                {/* Testo */}
                <div className="z-10 flex-1">
                   <h3 className="font-bold text-white text-lg uppercase tracking-wider mb-1">Spedizioni Italia</h3>
                   <p className="text-xs text-stone-400 mb-3 leading-relaxed">
                     Vuoi ricevere i nostri prodotti a casa? <br className="hidden md:block"/>Scrivici per info su costi e tempi.
                   </p>
                   <a 
                     href="https://wa.me/393393022051?text=Salve,%20vorrei%20info%20sulle%20spedizioni" 
                     target="_blank"
                     className="text-green-500 text-xs font-bold uppercase border-b border-green-500/30 hover:text-white hover:border-white transition-colors pb-0.5 inline-flex items-center gap-1"
                   >
                     Richiedi Info su WhatsApp <MessageCircle size={12} />
                   </a>
                </div>

                {/* Decorazione sfondo */}
                <Truck size={100} className="absolute -right-6 -bottom-6 text-white/5 rotate-12 group-hover:scale-110 transition-transform" />
            </div>

          </motion.div>

        </div>


        {/* COLONNA DESTRA: Mappa */}
        <div className="h-full min-h-[500px]">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="w-full h-full bg-[#141414] rounded-3xl overflow-hidden border border-white/10 relative shadow-2xl"
            >
              {/* --- MAPPA GOOGLE CORRETTA --- */}
              <iframe 
                src="https://maps.google.com/maps?q=Via+Caudina+10+Sant'Agata+de'+Goti&t=&z=17&ie=UTF8&iwloc=&output=embed"
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: "grayscale(100%) invert(90%) contrast(85%)" }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

              {/* Etichetta sopra la mappa */}
              <div className="absolute bottom-6 left-6 bg-orange-600 text-white px-4 py-2 rounded-full text-xs font-bold shadow-xl flex items-center gap-2">
                <MapPin size={14} /> Sant'Agata de' Goti
              </div>
            </motion.div>
        </div>

      </section>

    </main>
  );
}