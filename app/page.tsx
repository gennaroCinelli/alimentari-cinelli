"use client";
import { motion } from "framer-motion";
import Link from "next/link";
// Ho importato nuove icone (Info, Phone, Star) per i nuovi bottoni!
import { Apple, Banana, Carrot, Grape, Beef, Egg, Wheat, ShoppingBasket, Fish, Milk, Coffee, Cookie, Info, Phone, Star } from "lucide-react";

// --- COMPONENTE MAGICO: La lettera che cola ---
const ParolaCheSiScioglie = ({ parola, arancione = false }: { parola: string, arancione?: boolean }) => {
  return (
    <span className="inline-flex flex-wrap justify-center px-1 pb-12 -mb-12" style={{ filter: "url(#gooey)" }}>
      {parola.split("").map((lettera, i) => {
         
         const gocce = [
           { left: "25%", height: 25 + (i % 3) * 8, delay: 0 },
           { left: "50%", height: 35 + (i % 2) * 12, delay: 0.05 },
           { left: "75%", height: 18 + (i % 4) * 6, delay: 0.1 }
         ];

         return (
          <motion.span
            key={i}
            initial="active"
            animate="rest"
            whileHover="active"
            whileTap="active"
            className="relative inline-block cursor-crosshair group px-[2px] md:px-[4px]"
          >
            <motion.span 
              variants={{ 
                rest: { y: 0, transition: { duration: 2.5, ease: "easeOut" } }, 
                active: { y: 4, transition: { duration: 0.2, ease: "easeOut" } } 
              }}
              className={`relative z-10 block transition-colors duration-300 ${arancione ? 'text-orange-500' : 'text-white group-hover:text-orange-300'}`}
            >
              {lettera}
            </motion.span>

            {gocce.map((goccia, j) => (
              <motion.span
                key={j}
                variants={{
                  rest: { scaleY: 0, transition: { duration: 2.5, ease: "easeOut" } },
                  active: { scaleY: 1, transition: { duration: 0.4, delay: goccia.delay, ease: "easeOut" } }
                }}
                style={{ left: goccia.left, height: goccia.height, transformOrigin: "top" }}
                className={`absolute top-[65%] w-[4px] md:w-[6px] rounded-b-full z-0 transition-colors duration-300 ${arancione ? 'bg-orange-500' : 'bg-white group-hover:bg-orange-300'}`}
              />
            ))}
          </motion.span>
         );
      })}
    </span>
  );
};

// --- COMPONENTE HERO ---
function HeroSection() {
  
  const iconeSfondo = [
    { Icon: Apple, style: "top-[10%] left-[5%] rotate-[-15deg]", size: 50 },
    { Icon: Wheat, style: "top-[45%] left-[2%] rotate-[-30deg]", size: 70 },
    { Icon: Egg, style: "bottom-[15%] left-[10%] rotate-[-20deg]", size: 40 },
    { Icon: Fish, style: "top-[35%] left-[15%] rotate-[10deg]", size: 45 },
    { Icon: Carrot, style: "bottom-[5%] left-[3%] rotate-[15deg]", size: 60 },
    { Icon: Wheat, style: "top-[2%] left-[15%] rotate-[45deg]", size: 50 },
    { Icon: Milk, style: "bottom-[2%] left-[20%] rotate-[15deg]", size: 40 },
    { Icon: Carrot, style: "top-[20%] right-[8%] rotate-[25deg]", size: 55 },
    { Icon: Grape, style: "bottom-[30%] right-[5%] rotate-[10deg]", size: 60 },
    { Icon: Banana, style: "top-[65%] right-[2%] rotate-[-10deg]", size: 65 },
    { Icon: ShoppingBasket, style: "bottom-[10%] right-[30%] rotate-[10deg]", size: 50 },
    { Icon: Beef, style: "bottom-[5%] right-[15%] rotate-[-35deg]", size: 55 },
    { Icon: Banana, style: "top-[2%] right-[15%] rotate-[-45deg]", size: 45 },
    { Icon: Coffee, style: "bottom-[40%] right-[2%] rotate-[10deg]", size: 45 },
  ];

  return (
    <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-[#0a0a0a] px-4 pt-10 pb-20">
      
      <svg className="absolute w-0 h-0" aria-hidden="true">
        <defs>
          <filter id="gooey">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -9" result="goo" />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>

      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {iconeSfondo.map(({ Icon, style, size }, index) => (
          <div key={index} className={`absolute text-stone-600/30 ${style}`}>
            <Icon strokeWidth={1.2} size={size} />
          </div>
        ))}
      </div>

      <div className="relative z-20 w-full max-w-5xl mx-auto flex flex-col items-center text-center mt-10 md:mt-0">
          
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-orange-500 text-xs md:text-sm font-bold tracking-[0.4em] uppercase block font-mono mb-6 md:mb-10"
          >
            La Nostra Promessa
          </motion.span>
          
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-sans font-black uppercase text-white drop-shadow-2xl leading-[1.2] flex flex-col items-center gap-2 md:gap-4"
          >
            <div className="flex gap-2 md:gap-4 flex-wrap justify-center relative z-10">
              <ParolaCheSiScioglie parola="DAL" />
              <span className="relative">
                <ParolaCheSiScioglie parola="PRODUTTORE" arancione={true} />
              </span>
            </div>
            
            <div className="flex gap-2 md:gap-4 flex-wrap justify-center z-10 mt-2 md:mt-4">
               <ParolaCheSiScioglie parola="DIRETTAMENTE" />
               <ParolaCheSiScioglie parola="A" />
               <ParolaCheSiScioglie parola="TE." arancione={true} />
            </div>
          </motion.h1>

          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-16 md:w-24 h-1 bg-orange-500 mx-auto mt-10 md:mt-14 rounded-full shadow-[0_0_15px_rgba(249,115,22,0.8)]"
          ></motion.div>

          {/* --------------------------------------------------------- */}
          {/* MENU HOME "FIGO" (Griglia interattiva)                      */}
          {/* --------------------------------------------------------- */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="w-full max-w-4xl mx-auto mt-12 md:mt-16 z-30 relative"
          >
            {/* Griglia 4 Bottoni Principali */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 px-2 md:px-0">
              
              <Link href="/chi-siamo" className="group flex flex-col items-center justify-center gap-3 bg-white/5 hover:bg-orange-500/10 border border-white/10 hover:border-orange-500 p-5 md:p-6 rounded-3xl transition-all duration-300 hover:-translate-y-1 shadow-lg backdrop-blur-sm">
                <Info className="text-stone-400 group-hover:text-orange-500 transition-colors" size={26} />
                <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase text-stone-200 group-hover:text-white transition-colors">Chi Siamo</span>
              </Link>

              <Link href="/frutta-verdura" className="group flex flex-col items-center justify-center gap-3 bg-white/5 hover:bg-orange-500/10 border border-white/10 hover:border-orange-500 p-5 md:p-6 rounded-3xl transition-all duration-300 hover:-translate-y-1 shadow-lg backdrop-blur-sm">
                <Carrot className="text-stone-400 group-hover:text-orange-500 transition-colors" size={26} />
                <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase text-stone-200 group-hover:text-white transition-colors text-center leading-tight">Frutta & Verdura</span>
              </Link>

              <Link href="/salumi" className="group flex flex-col items-center justify-center gap-3 bg-white/5 hover:bg-orange-500/10 border border-white/10 hover:border-orange-500 p-5 md:p-6 rounded-3xl transition-all duration-300 hover:-translate-y-1 shadow-lg backdrop-blur-sm">
                <Beef className="text-stone-400 group-hover:text-orange-500 transition-colors" size={26} />
                <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase text-stone-200 group-hover:text-white transition-colors text-center leading-tight">Salumi & Formaggi</span>
              </Link>

              <Link href="/contatti" className="group flex flex-col items-center justify-center gap-3 bg-white/5 hover:bg-orange-500/10 border border-white/10 hover:border-orange-500 p-5 md:p-6 rounded-3xl transition-all duration-300 hover:-translate-y-1 shadow-lg backdrop-blur-sm">
                <Phone className="text-stone-400 group-hover:text-orange-500 transition-colors" size={26} />
                <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase text-stone-200 group-hover:text-white transition-colors">Contatti</span>
              </Link>

            </div>

            {/* Box Speciale "Prodotti Tipici" (Sostituisce il menu a tendina) */}
            <div className="mt-6 md:mt-8 mx-2 md:mx-0 bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-sm relative overflow-hidden group hover:border-white/20 transition-all shadow-lg">
              {/* Linea luminosa in alto al box */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"></div>
              
              <h3 className="text-stone-400 text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase mb-6 text-center flex items-center justify-center gap-2">
                <Star size={14} className="text-orange-500"/> Le Nostre Eccellenze <Star size={14} className="text-orange-500"/>
              </h3>
              
              {/* "Pillole" per ogni prodotto tipico */}
              <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                
                <Link href="/mela-annurca" className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-black/40 hover:bg-red-500/10 hover:border-red-500 transition-all text-[10px] md:text-xs font-bold uppercase tracking-wider group/link">
                  <span className="w-2 h-2 rounded-full bg-red-500 group-hover/link:shadow-[0_0_10px_rgba(239,68,68,1)] transition-shadow"></span> 
                  <span className="text-stone-300 group-hover/link:text-white transition-colors">Mela Annurca</span>
                </Link>
                
                <Link href="/nfrennule" className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-black/40 hover:bg-yellow-500/10 hover:border-yellow-500 transition-all text-[10px] md:text-xs font-bold uppercase tracking-wider group/link">
                  <span className="w-2 h-2 rounded-full bg-yellow-500 group-hover/link:shadow-[0_0_10px_rgba(234,179,8,1)] transition-shadow"></span> 
                  <span className="text-stone-300 group-hover/link:text-white transition-colors">'Nfrennule</span>
                </Link>
                
                <Link href="/pane" className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-black/40 hover:bg-amber-600/10 hover:border-amber-600 transition-all text-[10px] md:text-xs font-bold uppercase tracking-wider group/link">
                  <span className="w-2 h-2 rounded-full bg-amber-600 group-hover/link:shadow-[0_0_10px_rgba(217,119,6,1)] transition-shadow"></span> 
                  <span className="text-stone-300 group-hover/link:text-white transition-colors">Pane a Legna</span>
                </Link>
                
                <Link href="/mozzarella" className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-black/40 hover:bg-blue-500/10 hover:border-blue-500 transition-all text-[10px] md:text-xs font-bold uppercase tracking-wider group/link">
                  <span className="w-2 h-2 rounded-full bg-blue-500 group-hover/link:shadow-[0_0_10px_rgba(59,130,246,1)] transition-shadow"></span> 
                  <span className="text-stone-300 group-hover/link:text-white transition-colors">Mozzarella</span>
                </Link>
                
                <Link href="/pomodoro" className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-black/40 hover:bg-red-600/10 hover:border-red-600 transition-all text-[10px] md:text-xs font-bold uppercase tracking-wider group/link">
                  <span className="w-2 h-2 rounded-full bg-red-600 group-hover/link:shadow-[0_0_10px_rgba(220,38,38,1)] transition-shadow"></span> 
                  <span className="text-stone-300 group-hover/link:text-white transition-colors">Pomodoro Piennolo</span>
                </Link>

              </div>
            </div>

          </motion.div>

      </div>
    </section>
  );
}

// --- PAGINA PRINCIPALE ---
export default function Home() {
  
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white font-sans overflow-hidden selection:bg-orange-500 selection:text-white">
      
      <HeroSection />
      
      <section className="relative w-full py-10 pb-32 z-10 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4">
           
           <motion.div
             initial={{ opacity: 0, y: 50 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 0.8, ease: "easeOut" }}
             className="relative w-full h-[400px] md:h-[600px] rounded-[3rem] overflow-hidden shadow-2xl shadow-orange-900/20 border border-white/10"
           >
             
             <img 
               src="/nuova-foto-statica.jpg.png" 
               onError={(e) => {
                 if (e.currentTarget.src.includes('.jpg')) {
                   e.currentTarget.src = "/nuova-foto-statica.png";
                 }
               }}
               alt="Il nostro negozio" 
               className="w-full h-full object-cover grayscale-[15%] hover:grayscale-0 transition-all duration-700 hover:scale-105"
             />
             
             <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>
           </motion.div>

        </div>
      </section>

    </main>
  );
}