"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, ChevronDown, Menu, X } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const [isLoading, setIsLoading] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const navigaVerso = (url: string) => {
    if (typeof window !== "undefined" && window.location.pathname === url) return;
    setIsLoading(true);
    setIsMobileMenuOpen(false);
    setTimeout(() => {
      router.push(url);
      setIsLoading(false);
    }, 1500); 
  };

  const isActive = (path: string) => pathname === path;
  const isProdottiActive = pathname === '/mela-annurca' || pathname === '/nfrennule';

  const linkStyle = "transition-colors uppercase py-1 border-b-2 font-bold cursor-pointer text-[10px] md:text-xs tracking-widest";
  const activeStyle = "text-orange-500 border-orange-500"; 
  const inactiveStyle = "hover:text-white hover:text-orange-400 border-transparent hover:border-orange-500 text-stone-400";

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center"
          >
            <motion.img 
              src="/logo.png" 
              alt="Logo"
              className="w-32 h-32 object-contain mb-4"
              animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            />
            <p className="text-orange-500 font-serif tracking-widest text-sm animate-pulse">CARICAMENTO...</p>
          </motion.div>
        )}
      </AnimatePresence>

      <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-white/5 shadow-2xl transition-all">
        
        {/* PIANO SUPERIORE */}
        <div className="max-w-7xl mx-auto px-6 py-1 flex justify-between items-center relative min-h-[70px]">
          <div className="md:hidden z-30">
             <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white">
               {isMobileMenuOpen ? <X /> : <Menu />}
             </button>
          </div>
          <div className="hidden md:flex flex-1 flex-col items-start text-left z-10">
              <span className="text-base md:text-lg font-bold tracking-tight text-white leading-none uppercase font-serif drop-shadow-md">ALIMENTARI E FRUTTA</span>
              <span className="text-[9px] md:text-[10px] text-orange-500 font-medium tracking-[0.2em] mt-1 uppercase">CINELLI DOMENICO</span>
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 z-20">
            <Link href="/" onClick={() => navigaVerso('/')}>
              <motion.img 
                whileHover={{ scale: 1.05, rotate: -3 }}
                whileTap={{ scale: 0.95 }}
                src="/logo.png" 
                alt="Logo Cinelli" 
                className="h-14 md:h-20 w-auto object-contain drop-shadow-2xl cursor-pointer" 
              />
            </Link>
          </div>
          <div className="flex-1 flex justify-end z-10">
            <a href="https://wa.me/393330000000" target="_blank" className="bg-[#25D366] hover:bg-[#20bd5a] text-black px-4 py-1.5 rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-wider transition-all flex items-center gap-2 shadow-lg shadow-green-900/20 hover:scale-105">
              <MessageCircle size={14} /> <span className="hidden md:inline">Ordina</span>
            </a>
          </div>
        </div>

        {/* PIANO INFERIORE (MENU DESKTOP) */}
        <div className="hidden md:block w-full border-t border-white/5 bg-white/2 py-2">
          <div className="flex max-w-7xl mx-auto items-center justify-between px-6">
            
            {/* SINISTRA: Qui ho reinserito la HOME */}
            <div className="flex-1 flex justify-end gap-8 pr-12 items-center">
              
              {/* --- ECCO LA HOME AGGIUNTA --- */}
              <button onClick={() => navigaVerso('/')} className={`${linkStyle} ${isActive('/') ? activeStyle : inactiveStyle}`}>
                HOME
              </button>
              {/* ----------------------------- */}

              <button onClick={() => navigaVerso('/chi-siamo')} className={`${linkStyle} ${isActive('/chi-siamo') ? activeStyle : inactiveStyle}`}>CHI SIAMO</button>
              <button onClick={() => navigaVerso('/frutta-verdura')} className={`${linkStyle} ${isActive('/frutta-verdura') ? activeStyle : inactiveStyle}`}>FRUTTA & VERDURA</button>
            </div>

            <div className="w-20"></div>

            {/* DESTRA */}
            <div className="flex-1 flex justify-start gap-8 pl-12 items-center overflow-visible">
              <button onClick={() => navigaVerso('/salumi')} className={`${linkStyle} ${isActive('/salumi') ? activeStyle : inactiveStyle}`}>
                SALUMI & FORMAGGI
              </button>

               <div className="relative group">
                <button className={`flex items-center gap-1 ${linkStyle} ${isProdottiActive ? activeStyle : inactiveStyle}`}>
                  PRODOTTI TIPICI <ChevronDown size={12}/>
                </button>
                <div className="absolute top-full left-0 mt-2 w-48 bg-[#111] border border-white/10 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all transform translate-y-2 group-hover:translate-y-0 z-50 flex flex-col overflow-hidden">
                  <button onClick={() => navigaVerso('/mela-annurca')} className={`text-left px-4 py-3 border-b border-white/5 flex items-center gap-2 text-xs font-bold tracking-wider ${isActive('/mela-annurca') ? 'text-orange-500 bg-white/10' : 'text-stone-300 hover:bg-white/5 hover:text-white'}`}>
                    <span className="w-2 h-2 rounded-full bg-red-500"></span> Mela Annurca
                  </button>
                  <button onClick={() => navigaVerso('/nfrennule')} className={`text-left px-4 py-3 flex items-center gap-2 uppercase text-xs font-bold tracking-wider ${isActive('/nfrennule') ? 'text-yellow-500 bg-white/10' : 'text-stone-300 hover:bg-white/5 hover:text-white'}`}>
                    <span className="w-2 h-2 rounded-full bg-yellow-600"></span> 'Nfrennule
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
            <div className="md:hidden bg-[#111] border-t border-white/10 p-6 flex flex-col gap-4 text-center text-sm font-bold text-stone-300 tracking-widest">
               <button onClick={() => navigaVerso('/')} className={`${isActive('/') ? 'text-orange-500' : ''}`}>HOME</button>
               <button onClick={() => navigaVerso('/chi-siamo')} className={`${isActive('/chi-siamo') ? 'text-orange-500' : ''}`}>CHI SIAMO</button>
               <button onClick={() => navigaVerso('/frutta-verdura')} className={`${isActive('/frutta-verdura') ? 'text-orange-500' : ''}`}>FRUTTA & VERDURA</button>
               <button onClick={() => navigaVerso('/salumi')} className={`${isActive('/salumi') ? 'text-orange-500' : ''}`}>SALUMI & FORMAGGI</button>
               
               <div className="bg-white/5 p-4 rounded-xl flex flex-col gap-3">
                  <span className="text-orange-500 text-[10px] uppercase opacity-50">Prodotti Tipici</span>
                  <button onClick={() => navigaVerso('/mela-annurca')} className={`${isActive('/mela-annurca') ? 'text-red-500' : ''}`}>MELA ANNURCA</button>
                  <button onClick={() => navigaVerso('/nfrennule')} className={`${isActive('/nfrennule') ? 'text-yellow-500' : ''}`}>'NFRENNULE</button>
               </div>
               <button onClick={() => navigaVerso('/contatti')} className={`${isActive('/contatti') ? 'text-orange-500' : ''}`}>CONTATTI</button>
            </div>
          )}
        </AnimatePresence>

      </nav>
    </>
  );
}