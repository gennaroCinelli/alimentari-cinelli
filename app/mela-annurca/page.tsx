"use client";
import { motion } from "framer-motion";
import { Sun, Droplets, Clock, Heart, Package } from "lucide-react";

export default function MelaAnnurcaPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-red-500 selection:text-white pt-20">
      
      {/* --- HERO GIGANTE --- */}
      <section className="relative h-[80vh] w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="/annurca-hero.jpg" // 1. FOTO GRANDE
            className="w-full h-full object-cover opacity-40 scale-105"
            alt="Mela Annurca Sfondo"
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
          <span className="inline-block py-1 px-4 border border-red-500/50 rounded-full text-red-500 text-xs font-bold tracking-[0.4em] uppercase mb-6 bg-red-900/10 backdrop-blur-md">
            L'oro Rosso della Campania
          </span>
          <h1 className="text-6xl md:text-9xl font-serif font-bold leading-none mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white to-stone-500">
            La Regina.
          </h1>
          <p className="text-xl md:text-2xl text-stone-300 font-light max-w-2xl mx-auto leading-relaxed">
            Non viene colta rossa dall'albero. <br />
            Diventa rossa <span className="text-red-500 font-serif italic">aspettando a terra.</span>
          </p>
        </motion.div>
      </section>


      {/* --- LA STORIA (3 Step) --- */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        
        {/* Step 1: Raccolta (Verde) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center mb-32">
          <div>
            <span className="text-red-500 font-serif text-3xl italic mb-4 block">01. La Raccolta</span>
            <h2 className="text-4xl font-bold mb-6">Verde e Acerba.</h2>
            <p className="text-stone-400 text-lg leading-relaxed">
              A differenza delle altre mele, l'Annurca viene raccolta quando è ancora <strong>verde</strong>, acerba e dura. 
              Non è pronta per essere mangiata. Qui inizia il suo viaggio speciale che la rende unica al mondo.
            </p>
          </div>
          <div className="h-[400px] bg-[#141414] rounded-2xl overflow-hidden border border-white/5 relative group shadow-2xl shadow-red-900/10">
             <img 
               src="/annurca-verde.jpg" // 2. FOTO MELA VERDE
               className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
               alt="Raccolta Mela Verde" 
               onError={(e) => { (e.target as HTMLImageElement).src = "/placeholder-food.jpg"; }}
             />
          </div>
        </div>

        {/* Step 2: Melaio (Arrossamento) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center mb-32 md:flex-row-reverse">
          <div className="order-2 md:order-1 h-[400px] bg-[#141414] rounded-2xl overflow-hidden border border-white/5 relative group shadow-2xl shadow-red-900/10">
             <img 
               src="/annurca-melaio.jpg" // 3. FOTO MELAIO (PAGLIA)
               className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
               alt="Melaio Arrossamento" 
               onError={(e) => { (e.target as HTMLImageElement).src = "/placeholder-food.jpg"; }}
             />
             <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded text-xs border border-white/10">Il "Melaio"</div>
          </div>
          <div className="order-1 md:order-2">
            <span className="text-red-500 font-serif text-3xl italic mb-4 block">02. L'Arrossamento</span>
            <h2 className="text-4xl font-bold mb-6">Dormire sulla Paglia.</h2>
            <p className="text-stone-400 text-lg leading-relaxed">
              Le mele vengono stese a terra nei <strong>"melai"</strong>, su letti di paglia o aghi di pino. 
              Restano lì per settimane. I contadini le girano a mano, una per una, periodicamente, per farle prendere il sole su tutti i lati.
            </p>
          </div>
        </div>

        {/* Step 3: Cassetta (Vendita) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center mb-32">
          <div>
            <span className="text-red-500 font-serif text-3xl italic mb-4 block">03. Pronte per Voi</span>
            <h2 className="text-4xl font-bold mb-6">Dalla Terra alla Cassetta.</h2>
            <p className="text-stone-400 text-lg leading-relaxed">
              Una volta raggiunto quel rosso perfetto e uniforme, vengono raccolte nuovamente da terra. 
              Vengono pulite, selezionate e adagiate con cura nelle <strong>cassette di legno</strong>, pronte per arrivare freschissime nel nostro negozio.
            </p>
          </div>
          <div className="h-[400px] bg-[#141414] rounded-2xl overflow-hidden border border-white/5 relative group shadow-2xl shadow-red-900/10 flex items-center justify-center">
             <img 
               src="/annurca-cassetta.jpg" // 4. FOTO CASSETTA
               className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
               alt="Cassette pronte" 
               onError={(e) => { (e.target as HTMLImageElement).src = "/placeholder-food.jpg"; }}
             />
             <Package size={60} className="absolute text-white/50 group-hover:opacity-0 transition-opacity" />
          </div>
        </div>

      </section>


      {/* --- DETTAGLI TECNICI --- */}
      <section className="bg-[#111] py-20 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="text-center p-8 bg-[#0a0a0a] rounded-2xl border border-white/5 hover:border-red-500/30 transition-colors">
            <Sun className="mx-auto text-red-500 mb-4" size={32} />
            <h3 className="font-bold text-lg mb-2">Arrossamento</h3>
            <p className="text-stone-500 text-sm">Naturale al sole nei melai per 15-20 giorni.</p>
          </div>
          
          <div className="text-center p-8 bg-[#0a0a0a] rounded-2xl border border-white/5 hover:border-red-500/30 transition-colors">
            <Droplets className="mx-auto text-red-500 mb-4" size={32} />
            <h3 className="font-bold text-lg mb-2">Polpa</h3>
            <p className="text-stone-500 text-sm">Bianca, compatta, croccante e succosa.</p>
          </div>
          
          <div className="text-center p-8 bg-[#0a0a0a] rounded-2xl border border-white/5 hover:border-red-500/30 transition-colors">
            <Clock className="mx-auto text-red-500 mb-4" size={32} />
            <h3 className="font-bold text-lg mb-2">Stagione</h3>
            <p className="text-stone-500 text-sm">Da Ottobre fino a primavera inoltrata.</p>
          </div>

          <div className="text-center p-8 bg-[#0a0a0a] rounded-2xl border border-white/5 hover:border-red-500/30 transition-colors">
            <Heart className="mx-auto text-red-500 mb-4" size={32} />
            <h3 className="font-bold text-lg mb-2">Salute</h3>
            <p className="text-stone-500 text-sm">Ricca di polifenoli, aiuta a combattere il colesterolo.</p>
          </div>

        </div>
      </section>


      {/* --- SEZIONE FINALE (Senza Bottone) --- */}
      <section className="py-32 text-center px-4">
        <span className="text-orange-500 text-xs font-bold tracking-[0.3em] uppercase mb-4 block">
             Eccellenza Certificata
        </span>
        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">
          Il sapore autentico della tradizione.
        </h2>
        <p className="text-stone-400 text-lg max-w-2xl mx-auto">
          Vieni in negozio a scoprire la vera Mela Annurca Campana IGP.
        </p>
      </section>

    </main>
  );
}