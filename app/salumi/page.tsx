"use client";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

// --- DATI DEI PRODOTTI ---
const prodotti = [
  {
    categoria: "I Crudi d'Eccellenza",
    items: [
      {
        nome: "Crudo di Parma DOP",
        descrizione: "Il re dei prosciutti. Dolce, raffinato e stagionato con pazienza nelle cantine di Langhirano. Si scioglie in bocca.",
        foto: "/crudo-parma.jpg",
        badge: "DOP"
      },
      {
        nome: "San Daniele DOP",
        descrizione: "Riconoscibile per la sua forma a chitarra. Un gusto delicato con note di frutta secca e una dolcezza inconfondibile.",
        foto: "/crudo-sandaniele.jpg",
        badge: "DOP"
      },
      {
        nome: "Crudo Pedrazzoli",
        descrizione: "Una scelta di nicchia per veri intenditori. Carni selezionate e una lavorazione artigianale che garantisce un sapore autentico.",
        foto: "/crudo-pedrazzoli.jpg",
        badge: "Premium"
      }
    ]
  },
  {
    categoria: "Cotti & Insaccati",
    items: [
      {
        nome: "Gran Biscotto Rovagnati",
        descrizione: "Il prosciutto cotto per eccellenza. Cotto lentamente al vapore, massaggiato a mano e marchiato a fuoco. Unico.",
        foto: "/cotto-granbiscotto.jpg",
        badge: "Top Quality"
      },
      {
        nome: "Mortadella Maletti",
        descrizione: "Profumo inebriante e gusto vellutato. La Mortadella Maletti è sinonimo di alta salumeria emiliana. Imperdibile nel panino.",
        foto: "/mortadella-maletti.jpg",
        badge: "IGP"
      }
    ]
  },
  {
    categoria: "Formaggi Stagionati",
    items: [
      {
        nome: "Parmigiano Reggiano 30 Mesi",
        descrizione: "Friabile e granuloso, ricco di cristalli di tirosina. Un'esplosione di sapore perfetta da gustare a scaglie o grattugiato.",
        foto: "/parmigiano-30.jpg",
        badge: "30 Mesi"
      },
      {
        nome: "Pecorino Romano DOP",
        descrizione: "Sapido, intenso e piccante al punto giusto. L'ingrediente principe della tradizione romana, perfetto per i primi piatti.",
        foto: "/pecorino-romano.jpg",
        badge: "DOP"
      }
    ]
  }
];

// --- LISTA MARCHI PER IL NASTRO SCORREVOLE ---
const brands = [
  "Citterio", "Negroni", "Rovagnati", "Casa Modena", "Parmacotto", 
  "Galbani", "Pedrazzoli", "Rigamonti", "Parmareggio", "Biraghi", 
  "Auricchio", "Leerdammer", "Entremont", "Zamberlan", "Asiago DOP", "Fontina DOP"
];

export default function SalumiPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white pt-32 pb-20 px-6 overflow-hidden">
      
      {/* HEADER PAGINA */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-4xl mx-auto mb-24"
      >
        <span className="text-orange-500 text-xs font-bold tracking-[0.3em] uppercase mb-4 block">
          Il Banco del Fresco
        </span>
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8 leading-tight">
          Salumi & <span className="italic text-stone-500">Formaggi</span>
        </h1>
        
        {/* DESCRIZIONE */}
        <p className="text-stone-300 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto font-light">
          Questa è solo un'anteprima della nostra selezione. 
          Il vero viaggio nel gusto continua in bottega, dove vi aspetta un assortimento ancora più ricco e variegato, 
          selezionato ogni giorno per garantirvi solo l'eccellenza.
        </p>
      </motion.div>

      {/* STRUTTURA A CATEGORIE */}
      <div className="max-w-7xl mx-auto space-y-32 mb-32">
        
        {prodotti.map((sezione, catIndex) => (
          <div key={catIndex} className="relative">
            
            {/* TITOLO CATEGORIA */}
            <div className="text-center mb-16 relative">
                 <h2 className="text-3xl md:text-4xl font-serif font-bold inline-block bg-[#0a0a0a] px-6 relative z-10 text-orange-500">
                    {sezione.categoria}
                 </h2>
                 <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/10 -z-0"></div>
            </div>

            {/* LISTA PRODOTTI A SCALINI (ZIG-ZAG) */}
            <div className="space-y-24 md:space-y-32">
              {sezione.items.map((item, index) => {
                const isEven = index % 2 === 0;

                return (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }} 
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${
                        isEven ? "md:flex-row-reverse" : "" 
                    }`}
                  >
                    
                    {/* LATO IMMAGINE */}
                    <div className="w-full md:w-1/2 h-[350px] md:h-[450px] relative group">
                        <div className="absolute inset-0 bg-orange-500/10 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
                        <div className="absolute inset-0 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                           <img 
                             src={item.foto} 
                             alt={item.nome}
                             className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                             onError={(e) => { (e.target as HTMLImageElement).src = "/placeholder-food.jpg"; }}
                           />
                           {/* Badge */}
                           <div className="absolute top-4 left-4 bg-black/80 backdrop-blur px-4 py-1 rounded-full text-xs font-bold border border-white/20 text-orange-400 uppercase tracking-widest">
                              <Star size={12} fill="currentColor" className="inline mb-[2px] mr-1" /> {item.badge}
                           </div>
                        </div>
                    </div>

                    {/* LATO TESTO */}
                    <div className={`w-full md:w-1/2 text-center ${isEven ? "md:text-left" : "md:text-right"}`}>
                       <h3 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-white">
                         {item.nome}
                       </h3>
                       <p className="text-stone-400 text-lg leading-relaxed max-w-md mx-auto md:mx-0 inline-block">
                         {item.descrizione}
                       </p>
                    </div>

                  </motion.div>
                );
              })}
            </div>

          </div>
        ))}

      </div>

      {/* --- SEZIONE MARCHI (SCORREVOLE) AGGIUNTA QUI --- */}
      <section className="py-20 bg-[#0f0f0f] border-t border-white/5 overflow-hidden -mx-6 px-6">
        <div className="text-center mb-10">
           <span className="text-orange-500 text-xs font-bold tracking-[0.3em] uppercase">
             Qualità Garantita
           </span>
           <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mt-2">
             I Nostri Partner d'Eccellenza
           </h3>
        </div>

        {/* Nastro Scorrevole */}
        <div className="relative w-full flex overflow-hidden mask-linear-gradient">
          <motion.div 
            className="flex gap-12 items-center whitespace-nowrap pl-12"
            animate={{ x: ["0%", "-50%"] }} // Scorre verso sinistra
            transition={{ repeat: Infinity, duration: 40, ease: "linear" }} // Velocità lenta e costante
          >
            {/* Ripetiamo la lista 2 volte per creare l'effetto infinito senza buchi */}
            {[...brands, ...brands].map((brand, index) => (
              <div key={index} className="flex items-center gap-12 group cursor-default">
                <span className="text-2xl md:text-4xl font-serif font-bold text-stone-600 group-hover:text-white transition-colors duration-500 uppercase tracking-tighter">
                  {brand}
                </span>
                <Star size={12} className="text-orange-500/50" />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

    </main>
  );
}