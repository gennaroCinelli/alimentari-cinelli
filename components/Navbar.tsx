"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  // Stato per il caricamento INIZIALE (Barra Arancione)
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  
  // Stato per il caricamento di NAVIGAZIONE (Testo Rotante)
  const [isNavigating, setIsNavigating] = useState(false);
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Effetto per gestire l'intro iniziale (Barra)
  useEffect(() => {
    // La barra ci mette 2.5 secondi a caricare, poi scompare
    const timer = setTimeout(() => {
      setIsInitialLoad(false);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  const navigaVerso = (url: string) => {
    if (typeof window !== "undefined" && window.location.pathname === url) return;
    setIsNavigating(true); // Attiva il loader di navigazione
    setIsMobileMenuOpen(false);
    setTimeout(() => {
      router.push(url);
      setIsNavigating(false);
    }, 1500); 
  };

  const isActive = (path: string) => pathname === path;
  
  const isProdottiActive = 
    pathname === '/mela-annurca' || 
    pathname === '/nfrennule' || 
    pathname === '/pane' || 
    pathname === '/mozzarella' || 
    pathname === '/pomodoro';

  const linkStyle = "transition-colors uppercase py-1 border-b-2 font-bold cursor-pointer text-[10px] md:text-xs tracking-widest";
  const activeStyle = "text-orange-500 border-orange-500"; 
  const inactiveStyle = "hover:text-white hover:text-orange-400 border-transparent hover:border-orange-500 text-stone-400";

  return (
    <>
      {/* --------------------------------------------------------- */}
      {/* 1. INTRO INIZIALE (Splash Screen con Barra Arancione)     */}
      {/* --------------------------------------------------------- */}
      <AnimatePresence>
        {isInitialLoad && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8 } }}
            className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center px-4"
          >
             {/* Testo Intro */}
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8 }}
               className="text-center mb-8"
             >
                <h1 className="text-3xl md:text-5xl font-serif font-bold text-white tracking-tight leading-none uppercase drop-shadow-2xl">
                   Alimentari e Frutta
                </h1>
                <span className="text-sm md:text-lg text-orange-500 font-bold tracking-[0.3em] uppercase block mt-3">
                   Cinelli Domenico
                </span>
             </motion.div>

             {/* BARRA DI CARICAMENTO */}
             <div className="w-64 md:w-80 h-1 bg-stone-800 rounded-full overflow-hidden relative">
                <motion.div 
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2.2, ease: "easeInOut" }}
                  className="h-full bg-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.8)]"
                />
             </div>
             
             {/* Percentuale (opzionale, solo estetica) */}
             <motion.p 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.5 }}
               className="text-stone-500 text-[10px] font-mono mt-4 tracking-widest"
             >
               CARICAMENTO...
             </motion.p>
          </motion.div>
        )}
      </AnimatePresence>


      {/* --------------------------------------------------------- */}
      {/* 2. LOADER DI NAVIGAZIONE (Testo Rotante quando cambi pagina) */}
      {/* --------------------------------------------------------- */}
      <AnimatePresence>
        {isNavigating && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center px-4"
          >
            <motion.div
              animate={{ rotate: 360 }} 
              transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
              className="flex flex-col items-center justify-center text-center p-10"
            >
               <h1 className="text-2xl md:text-4xl font-serif font-bold text-white leading-none uppercase drop-shadow-2xl">
                 Alimentari<br/>e Frutta
               </h1>
               <span className="text-sm md:text-lg text-orange-500 font-bold tracking-[0.3em] uppercase mt-2 drop-shadow-md">
                 Cinelli
               </span>
            </motion.div>
            <p className="text-orange-500 font-serif tracking-widest text-xs animate-pulse absolute bottom-10">ATTENDERE...</p>
          </motion.div>
        )}
      </AnimatePresence>


      {/* --------------------------------------------------------- */}
      {/* 3. NAVBAR VERA E PROPRIA                                  */}
      {/* --------------------------------------------------------- */}
      <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-white/5 shadow-2xl transition-all">
        
        {/* PIANO SUPERIORE */}
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center relative min-h-[70px]">
          
          {/* MENU MOBILE (SX) */}
          <div className="md:hidden z-30 pr-4">
             <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white">
               {isMobileMenuOpen ? <X /> : <Menu />}
             </button>
          </div>

          {/* SINISTRA: TESTO CLICCABILE (HOME LINK) */}
          <div className="flex flex-1 flex-col items-start text-left z-10 overflow-hidden">
              <Link href="/" onClick={() => navigaVerso('/')} className="group cursor-pointer block">
                <span className="block text-sm md:text-lg font-bold tracking-tight text-white leading-none uppercase font-serif drop-shadow-md group-hover:text-orange-500 transition-colors truncate">
                  ALIMENTARI E FRUTTA
                </span>
                <span className="block text-[9px] md:text-[10px] text-orange-500 font-medium tracking-[0.2em] mt-1 uppercase group-hover:text-white transition-colors truncate">
                  CINELLI DOMENICO
                </span>
              </Link>
          </div>
          
          {/* DESTRA: SOLO 1986 */}
          <div className="flex justify-end items-center z-10 pl-4">
             <span className="text-base md:text-lg font-bold tracking-tight text-white leading-none uppercase font-serif drop-shadow-md">
                1986
             </span>
          </div>

        </div>

        {/* PIANO INFERIORE (MENU DESKTOP) */}
        <div className="hidden md:block w-full border-t border-white/5 bg-white/2 py-2">
          <div className="flex max-w-7xl mx-auto items-center justify-between px-6">
            
            {/* SINISTRA */}
            <div className="flex-1 flex justify-end gap-8 pr-12 items-center">
              <button onClick={() => navigaVerso('/')} className={`${linkStyle} ${isActive('/') ? activeStyle : inactiveStyle}`}>
                HOME
              </button>
              <button onClick={() => navigaVerso('/chi-siamo')} className={`${linkStyle} ${isActive('/chi-siamo') ? activeStyle : inactiveStyle}`}>CHI SIAMO</button>
              <button onClick={() => navigaVerso('/frutta-verdura')} className={`${linkStyle} ${isActive('/frutta-verdura') ? activeStyle : inactiveStyle}`}>FRUTTA & VERDURA</button>
            </div>

            {/* Spazio centrale vuoto */}
            <div className="w-10"></div>

            {/* DESTRA */}
            <div className="flex-1 flex justify-start gap-8 pl-12 items-center overflow-visible">
              <button onClick={() => navigaVerso('/salumi')} className={`${linkStyle} ${isActive('/salumi') ? activeStyle : inactiveStyle}`}>
                SALUMI & FORMAGGI
              </button>

               {/* MENU A TENDINA */}
               <div className="relative group">
                <button className={`flex items-center gap-1 ${linkStyle} ${isProdottiActive ? activeStyle : inactiveStyle}`}>
                  PRODOTTI TIPICI <ChevronDown size={12}/>
                </button>
                
                <div className="absolute top-full left-0 mt-2 w-64 bg-[#111] border border-white/10 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all transform translate-y-2 group-hover:translate-y-0 z-50 flex flex-col overflow-hidden">
                  <button onClick={() => navigaVerso('/mela-annurca')} className={`text-left px-4 py-3 border-b border-white/5 flex items-center gap-2 text-xs font-bold tracking-wider ${isActive('/mela-annurca') ? 'text-orange-500 bg-white/10' : 'text-stone-300 hover:bg-white/5 hover:text-white'}`}>
                    <span className="w-2 h-2 rounded-full bg-red-500"></span> Mela Annurca
                  </button>
                  <button onClick={() => navigaVerso('/nfrennule')} className={`text-left px-4 py-3 border-b border-white/5 flex items-center gap-2 uppercase text-xs font-bold tracking-wider ${isActive('/nfrennule') ? 'text-yellow-500 bg-white/10' : 'text-stone-300 hover:bg-white/5 hover:text-white'}`}>
                    <span className="w-2 h-2 rounded-full bg-yellow-600"></span> 'Nfrennule
                  </button>
                  <button onClick={() => navigaVerso('/pane')} className={`text-left px-4 py-3 border-b border-white/5 flex items-center gap-2 text-xs font-bold tracking-wider ${isActive('/pane') ? 'text-amber-500 bg-white/10' : 'text-stone-300 hover:bg-white/5 hover:text-white'}`}>
                    <span className="w-2 h-2 rounded-full bg-amber-700"></span> Pane Cotto a Legna
                  </button>
                  <button onClick={() => navigaVerso('/mozzarella')} className={`text-left px-4 py-3 border-b border-white/5 flex items-center gap-2 text-xs font-bold tracking-wider ${isActive('/mozzarella') ? 'text-blue-400 bg-white/10' : 'text-stone-300 hover:bg-white/5 hover:text-white'}`}>
                    <span className="w-2 h-2 rounded-full bg-blue-500"></span> Mozzarella di Bufala
                  </button>
                  <button onClick={() => navigaVerso('/pomodoro')} className={`text-left px-4 py-3 flex items-center gap-2 text-xs font-bold tracking-wider ${isActive('/pomodoro') ? 'text-red-600 bg-white/10' : 'text-stone-300 hover:bg-white/5 hover:text-white'}`}>
                    <span className="w-2 h-2 rounded-full bg-red-700"></span> Pomodoro del Piennolo
                  </button>
                </div>
              </div>

              <button onClick={() => navigaVerso('/contatti')} className={`${linkStyle} ${isActive('/contatti') ? activeStyle : inactiveStyle}`}>CONTATTI</button>
            </div>

          </div>
        </div>

        {/* MENU MOBILE */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <div className="md:hidden bg-[#111] border-t border-white/10 p-6 flex flex-col gap-4 text-center text-sm font-bold text-stone-300 tracking-widest h-screen overflow-y-auto pb-20">
               <button onClick={() => navigaVerso('/')} className={`${isActive('/') ? 'text-orange-500' : ''}`}>HOME</button>
               <button onClick={() => navigaVerso('/chi-siamo')} className={`${isActive('/chi-siamo') ? 'text-orange-500' : ''}`}>CHI SIAMO</button>
               <button onClick={() => navigaVerso('/frutta-verdura')} className={`${isActive('/frutta-verdura') ? 'text-orange-500' : ''}`}>FRUTTA & VERDURA</button>
               <button onClick={() => navigaVerso('/salumi')} className={`${isActive('/salumi') ? 'text-orange-500' : ''}`}>SALUMI & FORMAGGI</button>
               
               <div className="bg-white/5 p-4 rounded-xl flex flex-col gap-3">
                 <span className="text-orange-500 text-[10px] uppercase opacity-50">Prodotti Tipici</span>
                 <button onClick={() => navigaVerso('/mela-annurca')} className={`${isActive('/mela-annurca') ? 'text-red-500' : ''}`}>MELA ANNURCA</button>
                 <button onClick={() => navigaVerso('/nfrennule')} className={`${isActive('/nfrennule') ? 'text-yellow-500' : ''}`}>'NFRENNULE</button>
                 <button onClick={() => navigaVerso('/pane')} className={`${isActive('/pane') ? 'text-amber-500' : ''}`}>PANE A LEGNA</button>
                 <button onClick={() => navigaVerso('/mozzarella')} className={`${isActive('/mozzarella') ? 'text-blue-400' : ''}`}>MOZZARELLA</button>
                 <button onClick={() => navigaVerso('/pomodoro')} className={`${isActive('/pomodoro') ? 'text-red-600' : ''}`}>POMODORO PIENNOLO</button>
               </div>

               <button onClick={() => navigaVerso('/contatti')} className={`${isActive('/contatti') ? 'text-orange-500' : ''}`}>CONTATTI</button>
            </div>
          )}
        </AnimatePresence>

      </nav>
    </>
  );
}