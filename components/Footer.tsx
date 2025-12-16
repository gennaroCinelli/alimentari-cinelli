"use client";
import { Instagram, Facebook } from "lucide-react";

export default function Footer() {
    return (
      <footer className="bg-[#111] text-white py-12 border-t border-white/10 mt-auto">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          
          {/* Colonna 1: Info Brand */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">Alimentari <span className="text-orange-500">Cinelli</span></h3>
            <p className="text-stone-400 text-sm leading-relaxed">
              Dal 1986 portiamo sulla tua tavola solo il meglio della tradizione. 
              Qualità, freschezza e cortesia ogni giorno.
            </p>
          </div>
  
          {/* Colonna 2: Contatti e Social */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white uppercase tracking-widest text-xs">Contatti & Social</h3>
            <ul className="text-stone-400 text-sm space-y-2 mb-6">
              <li>Via Caudina, 10</li>
              <li>82019 Sant'Agata de' Goti (BN)</li>
              <li>
                {/* Link Telefono: IL COMANDO 'tel:' FA APRIRE L'APP TELEFONO */}
                <a href="tel:+393393022051" className="hover:text-white transition-colors font-bold">
                  +39 339 302 2051
                </a>
              </li>
              <li>
                {/* Link Email: IL COMANDO 'mailto:' FA APRIRE LA POSTA */}
                <a href="mailto:alimentaricinelli@pec.it" className="hover:text-orange-500 transition-colors">
                  alimentaricinelli@pec.it
                </a>
              </li>
            </ul>

            {/* --- ICONE SOCIAL --- */}
            <div className="flex justify-center md:justify-start gap-4">
              {/* Instagram */}
              <a 
                href="https://www.instagram.com/alimentariefrutta_cinelli?igsh=cDZwanZnbXNtb2xr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/5 p-2 rounded-full hover:bg-gradient-to-tr hover:from-purple-500 hover:to-orange-500 transition-all hover:scale-110 group"
                title="Seguici su Instagram"
              >
                <Instagram size={20} className="text-stone-300 group-hover:text-white" />
              </a>

              {/* Facebook */}
              <a 
                href="https://www.facebook.com/share/14S1y2GFayv/?mibextid=wwXIfr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/5 p-2 rounded-full hover:bg-blue-600 transition-all hover:scale-110 group"
                title="Seguici su Facebook"
              >
                <Facebook size={20} className="text-stone-300 group-hover:text-white" />
              </a>
            </div>

          </div>
  
          {/* Colonna 3: Orari */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white uppercase tracking-widest text-xs">Orari di Apertura</h3>
            <ul className="text-stone-400 text-sm space-y-2">
              <li className="flex flex-col md:block">
                <span className="text-white font-bold">Mar - Sab:</span> 
                <span className="ml-1">07:30 - 13:20 / 15:30 - 20:30</span>
              </li>
              <li>
                <span className="text-white font-bold">Domenica:</span> 07:30 - 13:20
              </li>
              <li>
                <span className="text-red-500 font-bold">Lunedì:</span> Chiuso
              </li>
            </ul>
          </div>
          
        </div>
        
        {/* --- BOTTOM BAR CON COPYRIGHT E CREDITS --- */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col items-center gap-3 text-xs text-stone-600">
          
          <p>© {new Date().getFullYear()} Alimentari Cinelli. Tutti i diritti riservati.</p>
          
          {/* CREDITS GENNARO CINELLI */}
          <p className="flex items-center gap-1 opacity-80">
            Designed & Developed by <span className="text-stone-400 font-bold hover:text-orange-500 transition-colors cursor-default">Gennaro Cinelli</span>
          </p>

        </div>
      </footer>
    );
}