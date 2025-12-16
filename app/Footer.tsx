"use client";
import { Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#050505] border-t border-white/5 pt-12 pb-8 text-stone-400 font-sans z-10 relative">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* SINISTRA: L'Autore del Sito */}
        <div className="text-xs tracking-[0.2em] font-medium order-2 md:order-1">
          CREATED BY <span className="text-white font-bold hover:text-orange-500 transition-colors cursor-pointer">GENNARO CINELLI</span>
        </div>

        {/* CENTRO: Copyright */}
        <div className="text-[10px] text-stone-600 order-3 md:order-2">
          © 2025 Bottega Cinelli. Tutti i diritti riservati.
        </div>

        {/* DESTRA: Social Network */}
        <div className="flex gap-6 order-1 md:order-3">
          
          {/* Instagram (Il tuo link) */}
          <a 
            href="https://www.instagram.com/alimentariefrutta_cinelli?igsh=cDZwanZnbXNtb2xr" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white/5 p-3 rounded-full hover:bg-gradient-to-tr hover:from-yellow-500 hover:via-red-500 hover:to-purple-600 hover:text-white transition-all duration-300 group"
          >
            <Instagram size={20} className="group-hover:scale-110 transition-transform" />
          </a>

          {/* Facebook (Il tuo link) */}
          <a 
            href="https://www.facebook.com/share/1CDFVVGtX1/?mibextid=wwXIfr" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white/5 p-3 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 group"
          >
            <Facebook size={20} className="group-hover:scale-110 transition-transform" />
          </a>
        
        </div>

      </div>
    </footer>
  );
}