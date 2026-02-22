"use client";
import { motion } from "framer-motion";
import { Apple, Banana, Carrot, Grape, Beef, Egg, Wheat, ShoppingBasket, Fish, Milk, Coffee, Cookie } from "lucide-react";

// --- COMPONENTE MAGICO: La lettera che cola (Ora perfetta anche per Mobile e Tablet!) ---
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
            // TRUCCO 1: All'apertura del sito parte da "sciolto" (active) e torna normale (rest)
            // creando un bellissimo effetto iniziale di liquido che viene riassorbito.
            initial="active"
            animate="rest"
            // TRUCCO 2: Si riattiva col passaggio del mouse (PC)
            whileHover="active"
            // TRUCCO 3: Si riattiva quando tocchi lo schermo per scorrere (Telefono/iPad)
            whileTap="active"
            className="relative inline-block cursor-crosshair group px-[2px] md:px-[4px]"
          >
            {/* LA LETTERA FISICA */}
            <motion.span 
              variants={{ 
                rest: { y: 0, transition: { duration: 2.5, ease: "easeOut" } }, 
                active: { y: 4, transition: { duration: 0.2, ease: "easeOut" } } 
              }}
              className={`relative z-10 block transition-colors duration-300 ${arancione ? 'text-orange-500' : 'text-white group-hover:text-orange-300'}`}
            >
              {lettera}
            </motion.span>

            {/* LE GOCCE */}
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
    // Bordo Sinistro
    { Icon: Apple, style: "top-[10%] left-[5%] rotate-[-15deg]", size: 50 },
    { Icon: Wheat, style: "top-[45%] left-[2%] rotate-[-30deg]", size: 70 },
    { Icon: Egg, style: "bottom-[15%] left-[10%] rotate-[-20deg]", size: 40 },
    { Icon: Fish, style: "top-[35%] left-[15%] rotate-[10deg]", size: 45 },
    { Icon: Carrot, style: "bottom-[5%] left-[3%] rotate-[15deg]", size: 60 },
    { Icon: Wheat, style: "top-[2%] left-[15%] rotate-[45deg]", size: 50 },
    { Icon: Milk, style: "bottom-[2%] left-[20%] rotate-[15deg]", size: 40 },
    
    // Bordo Destro
    { Icon: Carrot, style: "top-[20%] right-[8%] rotate-[25deg]", size: 55 },
    { Icon: Grape, style: "bottom-[30%] right-[5%] rotate-[10deg]", size: 60 },
    { Icon: Banana, style: "top-[65%] right-[2%] rotate-[-10deg]", size: 65 },
    { Icon: ShoppingBasket, style: "bottom-[10%] right-[30%] rotate-[10deg]", size: 50 },
    { Icon: Beef, style: "bottom-[5%] right-[15%] rotate-[-35deg]", size: 55 },
    { Icon: Banana, style: "top-[2%] right-[15%] rotate-[-45deg]", size: 45 },
    { Icon: Coffee, style: "bottom-[40%] right-[2%] rotate-[10deg]", size: 45 },
    
    // Zona Alta
    { Icon: Coffee, style: "top-[5%] left-[30%] rotate-[20deg]", size: 40 },
    { Icon: Beef, style: "top-[15%] right-[25%] rotate-[5deg]", size: 45 },
    { Icon: Banana, style: "top-[25%] left-[20%] rotate-[35deg]", size: 35 },
    { Icon: ShoppingBasket, style: "top-[5%] left-[50%] rotate-[-10deg]", size: 45 },
    { Icon: Cookie, style: "top-[8%] right-[40%] rotate-[-20deg]", size: 35 },
    { Icon: Milk, style: "top-[15%] left-[45%] rotate-[10deg]", size: 40 },
    { Icon: Beef, style: "top-[15%] right-[5%] rotate-[30deg]", size: 60 },

    // Zona Bassa
    { Icon: Cookie, style: "bottom-[5%] left-[35%] rotate-[-15deg]", size: 45 },
    { Icon: Milk, style: "bottom-[45%] right-[15%] rotate-[-5deg]", size: 50 },
    { Icon: Fish, style: "bottom-[25%] left-[25%] rotate-[-30deg]", size: 50 },
    { Icon: Egg, style: "bottom-[20%] right-[40%] rotate-[25deg]", size: 40 },
    { Icon: ShoppingBasket, style: "bottom-[2%] right-[20%] rotate-[-20deg]", size: 50 },
    { Icon: Coffee, style: "bottom-[15%] left-[50%] rotate-[10deg]", size: 40 },

    // Centro-Esterno
    { Icon: Grape, style: "top-[28%] left-[35%] rotate-[-5deg]", size: 30 },
    { Icon: Carrot, style: "top-[32%] right-[35%] rotate-[15deg]", size: 35 },
    { Icon: Apple, style: "bottom-[35%] left-[40%] rotate-[25deg]", size: 30 },
    { Icon: Fish, style: "bottom-[28%] right-[30%] rotate-[-15deg]", size: 35 },
    { Icon: Egg, style: "top-[45%] left-[25%] rotate-[5deg]", size: 35 },
    { Icon: Cookie, style: "top-[45%] right-[25%] rotate-[-5deg]", size: 35 },
    { Icon: Grape, style: "top-[55%] left-[8%] rotate-[45deg]", size: 55 },
    { Icon: Apple, style: "top-[35%] right-[18%] rotate-[40deg]", size: 45 },
    { Icon: Wheat, style: "top-[55%] right-[25%] rotate-[-15deg]", size: 50 },
  ];

  return (
    <section className="relative w-full min-h-[85vh] flex flex-col items-center justify-center overflow-hidden bg-[#0a0a0a] px-4">
      
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

      <div className="relative z-20 w-full max-w-5xl mx-auto flex flex-col items-center text-center">
          
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