"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Link as LinkIcon } from "lucide-react";
import Link from "next/link";

// --- LISTA PRODOTTI COMPLETA ---
const prodotti = [
  // 1. NOVITÀ
  { id: 1, nome: "Mela Annurca Campana IGP", category: "POMACEE", tipo: "frutta", isNovita: true, img: "/hero-mela.jpg", descrizione: "La regina delle mele. Rossa, piccola e succosa." },

  // 2. FRUTTA
  { id: 101, nome: "Pesca Gialla", category: "DRUPACEE", tipo: "frutta", isNovita: false, img: "/pesca-gialla.jpg.jpg", descrizione: "Polpa soda e succosa, buccia vellutata." },
  { id: 102, nome: "Pesca Bianca", category: "DRUPACEE", tipo: "frutta", isNovita: false, img: "/pesca-bianca.jpg.jpg", descrizione: "Polpa delicata e profumatissima." },
  { id: 103, nome: "Nettarina (Noce)", category: "DRUPACEE", tipo: "frutta", isNovita: false, img: "/nettarina.jpg.jpg", descrizione: "Buccia liscia e lucida, croccante." },
  { id: 104, nome: "Pesca Tabacchiera", category: "DRUPACEE", tipo: "frutta", isNovita: false, img: "/tabacchiera.jpg", descrizione: "Schiacciata, dolcissima (Saturnina)." },
  { id: 105, nome: "Percoca", category: "DRUPACEE", tipo: "frutta", isNovita: false, img: "/percoca.jpg.jpg", descrizione: "Polpa gialla dura e compatta, ottima nel vino." },
  { id: 106, nome: "Albicocche", category: "DRUPACEE", tipo: "frutta", isNovita: false, img: "/albicocche.jpg", descrizione: "Arancioni, polpa morbida e farinosa." },
  { id: 107, nome: "Susina Goccia d'Oro", category: "DRUPACEE", tipo: "frutta", isNovita: false, img: "/susina-gialla.jpg", descrizione: "Tonda, buccia gialla, succosissima." },
  { id: 108, nome: "Susina Stanley", category: "DRUPACEE", tipo: "frutta", isNovita: false, img: "/susina-viola.jpg", descrizione: "Ovale, viola scuro, polpa soda che si stacca." },
  { id: 109, nome: "Ciliegie Tenerine", category: "DRUPACEE", tipo: "frutta", isNovita: false, img: "/ciliegie-tenerine.jpg", descrizione: "Polpa molle e molto succosa." },
  { id: 110, nome: "Ciliegie Ferrovia", category: "DRUPACEE", tipo: "frutta", isNovita: false, img: "/ciliegie-duroni.jpg", descrizione: "Duroni croccanti, scuri e grossi." },
  { id: 111, nome: "Amarene", category: "DRUPACEE", tipo: "frutta", isNovita: false, img: "/amarene.jpg", descrizione: "Aspre, ideali per marmellate o sciroppi." },
  { id: 112, nome: "Mela Golden", category: "POMACEE", tipo: "frutta", isNovita: false, img: "/mela-golden.jpg", descrizione: "Gialla, dolce e classica." },
  { id: 113, nome: "Mela Stark", category: "POMACEE", tipo: "frutta", isNovita: false, img: "/mela-stark.jpg", descrizione: "Rossa scura, polpa farinosa." },
  { id: 114, nome: "Mela Granny Smith", category: "POMACEE", tipo: "frutta", isNovita: false, img: "/mela-granny.jpg", descrizione: "Verde brillante, asprigna e croccante." },
  { id: 115, nome: "Mela Fuji", category: "POMACEE", tipo: "frutta", isNovita: false, img: "/mela-fuji.jpg", descrizione: "Rossa striata, molto dolce e croccante." },
  { id: 116, nome: "Mela Cotogna", category: "POMACEE", tipo: "frutta", isNovita: false, img: "/mela-cotogna.jpg", descrizione: "Dura e aspra da cruda, solo per cotognata." },
  { id: 117, nome: "Pera William", category: "POMACEE", tipo: "frutta", isNovita: false, img: "/pera-william.jpg", descrizione: "Tondeggiante, succosa, estiva." },
  { id: 118, nome: "Pera Abate", category: "POMACEE", tipo: "frutta", isNovita: false, img: "/pera-abate.jpg", descrizione: "Forma allungata e curva, polpa soda." },
  { id: 119, nome: "Pera Kaiser", category: "POMACEE", tipo: "frutta", isNovita: false, img: "/pera-kaiser.jpg", descrizione: "Buccia marrone rugginosa, ottima cotta." },
  { id: 120, nome: "Pera Coscia", category: "POMACEE", tipo: "frutta", isNovita: false, img: "/pera-coscia.jpg", descrizione: "Piccola, verde, estiva e dolce." },
  { id: 121, nome: "Limoni", category: "AGRUMI", tipo: "frutta", isNovita: false, img: "/limoni.jpg", descrizione: "Gialli, succosi e rifiorenti." },
  { id: 122, nome: "Arance Navel", category: "AGRUMI", tipo: "frutta", isNovita: false, img: "/arance-bionde.jpg", descrizione: "Bionde, polpa gialla, dolci da mangiare." },
  { id: 123, nome: "Arance Tarocco", category: "AGRUMI", tipo: "frutta", isNovita: false, img: "/arance-rosse.jpg", descrizione: "Rosse, polpa striata, ottime per spremute." },
  { id: 124, nome: "Clementine", category: "AGRUMI", tipo: "frutta", isNovita: false, img: "/clementine.jpg", descrizione: "Piccole, dolci, facili da sbucciare e senza semi." },
  { id: 125, nome: "Pompelmi", category: "AGRUMI", tipo: "frutta", isNovita: false, img: "/pompelmi.jpg", descrizione: "Gialli (acidi) o Rosa (più dolci)." },
  { id: 126, nome: "Lime", category: "AGRUMI", tipo: "frutta", isNovita: false, img: "/lime.jpg", descrizione: "Piccolo, verde e aromatico." },
  { id: 127, nome: "Fragole", category: "BOSCO", tipo: "frutta", isNovita: false, img: "/fragole.jpg", descrizione: "Dolci e profumate." },
  { id: 128, nome: "Lamponi", category: "BOSCO", tipo: "frutta", isNovita: false, img: "/lamponi.jpg", descrizione: "Rossi o Gialli, delicatissimi." },
  { id: 129, nome: "More", category: "BOSCO", tipo: "frutta", isNovita: false, img: "/more.jpg", descrizione: "Nere e succose." },
  { id: 130, nome: "Mirtilli", category: "BOSCO", tipo: "frutta", isNovita: false, img: "/mirtilli.jpg", descrizione: "Bacche blu ricche di antiossidanti." },
  { id: 131, nome: "Anguria Tradizionale", category: "ESTIVI", tipo: "frutta", isNovita: false, img: "/anguria.jpg", descrizione: "Grossa con semi, il classico dell'estate." },
  { id: 132, nome: "Anguria Perla Nera", category: "ESTIVI", tipo: "frutta", isNovita: false, img: "/anguria-perla-nera.jpg", descrizione: "Buccia scura, senza semi." },
  { id: 134, nome: "Melone a Pane", category: "ESTIVI", tipo: "frutta", isNovita: false, img: "/melone-liscio.jpg", descrizione: "Buccia liscia chiara, dolcissimo." },
  { id: 135, nome: "Melone Giallo", category: "ESTIVI", tipo: "frutta", isNovita: false, img: "/melone-giallo.jpg", descrizione: "Invernale, polpa bianca e dolce." },
  { id: 136, nome: "Uva Italia", category: "UVA", tipo: "frutta", isNovita: false, img: "/uva-italia.jpg", descrizione: "Bianca, chicco grosso e succoso." },
  { id: 138, nome: "Uva Nera", category: "UVA", tipo: "frutta", isNovita: false, img: "/uva-cardinal.jpg", descrizione: "Rossa/Nera, chicco grosso." },
  { id: 139, nome: "Uva Fragola", category: "UVA", tipo: "frutta", isNovita: false, img: "/uva-fragola.jpg", descrizione: "Sapore intenso e aromatico." },
  { id: 140, nome: "Kiwi Hayward", category: "ESOTICI", tipo: "frutta", isNovita: false, img: "/kiwi.jpg", descrizione: "Il classico verde peloso." },
  { id: 141, nome: "Kiwi Gold", category: "ESOTICI", tipo: "frutta", isNovita: false, img: "/kiwi-gold.jpg", descrizione: "Polpa gialla, buccia liscia, dolcissimo." },
  { id: 142, nome: "Banane", category: "ESOTICI", tipo: "frutta", isNovita: false, img: "/banane.jpg", descrizione: "Il frutto energetico per eccellenza." },
  { id: 143, nome: "Ananas", category: "ESOTICI", tipo: "frutta", isNovita: false, img: "/ananas.jpg", descrizione: "Dolce e digestivo." },
  { id: 144, nome: "Avocado", category: "ESOTICI", tipo: "frutta", isNovita: false, img: "/avocado.jpg", descrizione: "Polpa burrosa, ottimo per insalate." },
  { id: 145, nome: "Papaya", category: "ESOTICI", tipo: "frutta", isNovita: false, img: "/papaya.jpg", descrizione: "Polpa arancione morbida e dolce." },
  { id: 146, nome: "Litchi", category: "ESOTICI", tipo: "frutta", isNovita: false, img: "/litchi.jpg", descrizione: "Ciliegia della Cina, polpa bianca traslucida." },
  { id: 147, nome: "Fico d'India", category: "ESOTICI", tipo: "frutta", isNovita: false, img: "/fico-india.jpg", descrizione: "Spinoso fuori, dolcissimo dentro." },
  { id: 148, nome: "Nespolo", category: "ESOTICI", tipo: "frutta", isNovita: false, img: "/nespolo.jpg", descrizione: "Arancione primaverile, succoso e acidulo." },
  { id: 149, nome: "Melograno", category: "ESOTICI", tipo: "frutta", isNovita: false, img: "/melograno.jpg", descrizione: "Chicchi rossi preziosi e succosi." },
  { id: 151, nome: "Fichi Settembrini", category: "FICHI", tipo: "frutta", isNovita: false, img: "/fichi.jpg", descrizione: "Piccoli, neri o verdi, dolcissimi." },
  { id: 152, nome: "Caco Mela", category: "CACHI", tipo: "frutta", isNovita: false, img: "/caco-mela.jpg", descrizione: "Vaniglia. Croccante come una mela, non allappa." },
  { id: 153, nome: "Caco Morbido", category: "CACHI", tipo: "frutta", isNovita: false, img: "/caco-morbido.jpg", descrizione: "Gelatinoso e zuccherino." },
  { id: 154, nome: "Noci", category: "SECCA", tipo: "frutta", isNovita: false, img: "/noci.jpg", descrizione: "Energetiche e croccanti." },
  { id: 155, nome: "Nocciole", category: "SECCA", tipo: "frutta", isNovita: false, img: "/nocciole.jpg", descrizione: "Tostate o fresche." },
  { id: 156, nome: "Castagne", category: "SECCA", tipo: "frutta", isNovita: false, img: "/castagne.jpg", descrizione: "Il sapore dell'autunno." },
  { id: 157, nome: "Pistacchi", category: "SECCA", tipo: "frutta", isNovita: false, img: "/pistacchi.jpg", descrizione: "Oro verde." },
  { id: 158, nome: "Arachidi", category: "SECCA", tipo: "frutta", isNovita: false, img: "/arachidi.jpg", descrizione: "Ottime da sgranocchiare." },
  { id: 160, nome: "Olive Verdi", category: "SFIZI", tipo: "frutta", isNovita: false, img: "/olive-nere.jpg", descrizione: "Polpose e saporite." },

  // 3. VERDURA
  { id: 201, nome: "Lattuga Romana", category: "INSALATE", tipo: "verdura", isNovita: false, img: "/lattuga-romana.jpg", descrizione: "Foglie allungate e carnose, costa robusta. Detta anche Spadona." },
  { id: 202, nome: "Lattuga Cappuccio", category: "INSALATE", tipo: "verdura", isNovita: false, img: "/lattuga-cappuccio.jpg", descrizione: "Cespo tondo e compatto, foglie chiare e croccanti." },
  { id: 203, nome: "Lattuga Iceberg", category: "INSALATE", tipo: "verdura", isNovita: false, img: "/lattuga-iceberg.jpg", descrizione: "Cuore compatto e croccantissimo, simile al ghiaccio." },
  { id: 204, nome: "Lattuga Canasta", category: "INSALATE", tipo: "verdura", isNovita: false, img: "/lattuga-canasta.jpg", descrizione: "Foglie frastagliate con screziature rosse." },
  { id: 205, nome: "Lattuga Gentilina", category: "INSALATE", tipo: "verdura", isNovita: false, img: "/lattuga-gentilina.jpg", descrizione: "Foglie ondulate e tenere, dolci al palato." },
  { id: 206, nome: "Lattuga Lollo", category: "INSALATE", tipo: "verdura", isNovita: false, img: "/lattuga-lollo.jpg", descrizione: "Foglie ricce e ondulate, molto decorative." },
  { id: 2, nome: "Scarola Liscia", category: "INSALATE", tipo: "verdura", isNovita: false, img: "/scarola.jpg", descrizione: "Cuore tenero, resistente al freddo." },
  { id: 3, nome: "Indivia Riccia", category: "INSALATE", tipo: "verdura", isNovita: false, img: "/indivia.jpg", descrizione: "Foglie frastagliate e croccanti." },
  { id: 4, nome: "Radicchio di Treviso", category: "INSALATE", tipo: "verdura", isNovita: false, img: "/radicchio.jpg", descrizione: "Lungo, croccante e leggermente amaro." },
  { id: 5, nome: "Valerianella (Songino)", category: "INSALATE", tipo: "verdura", isNovita: false, img: "/songino.jpg", descrizione: "Foglie piccole e tonde, dolce." },
  { id: 6, nome: "Pomodoro Cuore di Bue", category: "POMODORI", tipo: "verdura", isNovita: false, img: "/cuore-di-bue.jpg", descrizione: "Grosso e irregolare, ideale per l'insalata." },
  { id: 7, nome: "Pomodoro San Marzano", category: "POMODORI", tipo: "verdura", isNovita: false, img: "/san-marzano.jpg", descrizione: "Il re del sugo." },
  { id: 8, nome: "Pomodorino Ciliegino", category: "POMODORI", tipo: "verdura", isNovita: false, img: "/ciliegino.jpg", descrizione: "Piccolo e dolcissimo." },
  { id: 9, nome: "Peperoni Quadrati", category: "ORTAGGI", tipo: "verdura", isNovita: false, img: "/peperoni.jpg", descrizione: "Gialli o Rossi, polpa spessa." },
  { id: 10, nome: "Friggitelli", category: "ORTAGGI", tipo: "verdura", isNovita: false, img: "/friggitelli.jpg", descrizione: "Verdi e dolci, da fare in padella." },
  { id: 11, nome: "Melanzana Tonda Nera", category: "ORTAGGI", tipo: "verdura", isNovita: false, img: "/melanzana-tonda.jpg", descrizione: "La classica per la parmigiana." },
  { id: 12, nome: "Melanzana Lunga", category: "ORTAGGI", tipo: "verdura", isNovita: false, img: "/melanzana-lunga.jpg", descrizione: "Sottile e dal sapore deciso." },
  { id: 13, nome: "Zucchine Scure", category: "ZUCCHINE", tipo: "verdura", isNovita: false, img: "/zucchine.jpg", descrizione: "Le classiche milanesi." },
  { id: 14, nome: "Zucchine Romanesche", category: "ZUCCHINE", tipo: "verdura", isNovita: false, img: "/zucchine-romanesche.jpg", descrizione: "Chiare, costolute, spesso col fiore." },
  { id: 15, nome: "Zucca Delica", category: "ZUCCA", tipo: "verdura", isNovita: false, img: "/zucca-delica.jpg", descrizione: "Polpa soda e dolce, ottima al forno." },
  { id: 16, nome: "Zucca Butternut", category: "ZUCCA", tipo: "verdura", isNovita: false, img: "/zucca-butternut.jpg", descrizione: "Forma a pera, liscia e dolce." },
  { id: 17, nome: "Cavolfiore Bianco", category: "CAVOLI", tipo: "verdura", isNovita: false, img: "/cavolfiore.jpg", descrizione: "Compatto e bianchissimo." },
  { id: 18, nome: "Broccolo Calabrese", category: "CAVOLI", tipo: "verdura", isNovita: false, img: "/broccolo.jpg", descrizione: "Testa verde scuro e compatta." },
  { id: 19, nome: "Cipolla Dorata", category: "BULBI", tipo: "verdura", isNovita: false, img: "/cipolla-dorata.jpg", descrizione: "Ideale per soffritti e cotture lunghe." },
  { id: 20, nome: "Verza", category: "CAVOLI", tipo: "verdura", isNovita: false, img: "/verza.jpg", descrizione: "Foglie grinzose, cuore tenero." },
  { id: 21, nome: "Cime di Rapa", category: "CAVOLI", tipo: "verdura", isNovita: false, img: "/cime-di-rapa.jpg", descrizione: "Foglie e infiorescenze saporite." },
  { id: 22, nome: "Fagiolini", category: "LEGUMI", tipo: "verdura", isNovita: false, img: "/fagiolini.jpg", descrizione: "Teneri e senza filo." },
  { id: 23, nome: "Piselli Freschi", category: "LEGUMI", tipo: "verdura", isNovita: false, img: "/piselli.jpg", descrizione: "Dolci, da sgranare." },
  { id: 24, nome: "Cipolla Rossa", category: "BULBI", tipo: "verdura", isNovita: false, img: "/cipolla-rossa.jpg", descrizione: "Rossa, dolce e croccante." },
  { id: 25, nome: "Carote", category: "RADICI", tipo: "verdura", isNovita: false, img: "/carote.jpg", descrizione: "Fresche con il ciuffo." },
  { id: 26, nome: "Patate Pasta Gialla", category: "TUBERI", tipo: "verdura", isNovita: false, img: "/patate.jpg", descrizione: "Non si sfaldano in cottura." },
  { id: 27, nome: "Patate Novelle", category: "TUBERI", tipo: "verdura", isNovita: false, img: "/patate-novelle.jpg", descrizione: "Piccole e dalla buccia sottile." },
];

export default function FruttaVerduraPage() {
  const [filtro, setFiltro] = useState("tutti");

  // Logica Filtri
  const prodottiFiltrati = prodotti.filter((item) => {
    if (filtro === "tutti") return true;
    if (filtro === "novita") return item.isNovita;
    return item.tipo === filtro;
  });

  return (
    <main className="min-h-screen bg-[#111] text-white font-sans pt-24 pb-20 selection:bg-orange-500 selection:text-white">
      
      {/* --- HERO SECTION --- */}
      <section className="max-w-7xl mx-auto px-6 mb-16 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1 text-left">
           <span className="text-orange-500 text-xs font-bold tracking-[0.2em] uppercase mb-4 block flex items-center gap-2">
             <span className="w-2 h-2 rounded-full bg-orange-500"></span> REPARTO FRESCHI
           </span>
           <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight mb-6 text-[#e8e6e3]">
             Scelti per te <br />
             <span className="text-stone-400 italic">ogni mattina.</span>
           </h1>
           <p className="text-stone-400 text-sm md:text-base leading-relaxed max-w-lg">
             Ecco una selezione di ciò che puoi trovare nella nostra bottega. 
             Il nostro assortimento è ricco e segue il ritmo delle stagioni: 
             passa a trovarci per scoprire tutte le novità fresche di giornata!
           </p>
        </div>
        <div className="flex-1 w-full h-[300px] md:h-[400px] rounded-[40px] overflow-hidden relative shadow-2xl border border-white/5">
           <img src="/hero-frutta.jpg" className="w-full h-full object-cover" alt="Negozio" onError={(e) => { (e.target as HTMLImageElement).src = "/negozio-esterno.jpg" }} />
           <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#111]/20"></div>
        </div>
      </section>

      {/* --- FILTRI STICKY --- */}
      <section className="sticky top-[130px] z-40 py-4 mb-12 pointer-events-none transition-all">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap gap-3 justify-center md:justify-start pointer-events-auto">
          <button onClick={() => setFiltro("tutti")} className={`px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all border ${filtro === 'tutti' ? 'bg-orange-500 text-white border-orange-500 shadow-lg' : 'bg-[#1a1a1a] text-stone-400 border-white/10 hover:border-white hover:text-white'}`}>TUTTI</button>
          <button onClick={() => setFiltro("frutta")} className={`px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all border ${filtro === 'frutta' ? 'bg-orange-500 text-white border-orange-500 shadow-lg' : 'bg-[#1a1a1a] text-stone-400 border-white/10 hover:border-white hover:text-white'}`}>SOLO FRUTTA</button>
          <button onClick={() => setFiltro("verdura")} className={`px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all border ${filtro === 'verdura' ? 'bg-orange-500 text-white border-orange-500 shadow-lg' : 'bg-[#1a1a1a] text-stone-400 border-white/10 hover:border-white hover:text-white'}`}>SOLO VERDURA</button>
          <button onClick={() => setFiltro("novita")} className={`px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all flex items-center gap-2 border ${filtro === 'novita' ? 'bg-white text-black border-white shadow-lg' : 'bg-[#1a1a1a] text-stone-400 border-white/10 hover:border-white hover:text-white'}`}><Star size={14} fill={filtro === 'novita' ? "black" : "currentColor"} /> NOVITÀ</button>
        </div>
      </section>

      {/* --- GRIGLIA PRODOTTI --- */}
      <section className="max-w-7xl mx-auto px-6">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence>
            {prodottiFiltrati.map((prodotto) => (
              <motion.div
                layout
                key={prodotto.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className={`relative rounded-2xl overflow-hidden group pb-4 ${prodotto.isNovita ? 'border border-red-500/50 shadow-2xl shadow-red-900/20 bg-[#161616]' : 'bg-[#161616] border border-white/5'}`}
              >
                {/* --- CARD SPECIALE (MELA ANNURCA) --- */}
                {prodotto.isNovita ? (
                  <>
                     <div className="bg-red-600 text-white text-[10px] font-bold text-center py-1 uppercase tracking-widest flex items-center justify-center gap-2">
                        <Star size={10} fill="white" /> Specialità della casa <Star size={10} fill="white" />
                     </div>
                     <div className="p-4">
                        <div className="w-full h-40 rounded-xl overflow-hidden mb-4 relative bg-white">
                           <img src={prodotto.img} className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-700" alt={prodotto.nome} onError={(e) => { (e.target as HTMLImageElement).src = "/hero-frutta.jpg" }} />
                        </div>
                        <div className="text-orange-500 text-[10px] font-bold uppercase tracking-widest mb-1">{prodotto.category}</div>
                        <h3 className="text-xl font-bold text-white mb-6 leading-tight">{prodotto.nome}</h3>
                        <Link href="/mela-annurca">
                          <button className="w-full bg-red-600 hover:bg-red-700 text-white text-xs font-bold py-3 rounded-lg uppercase tracking-widest transition-all flex items-center justify-center gap-2 shadow-lg shadow-red-900/30">
                             CLICCA QUI <LinkIcon size={14} />
                          </button>
                        </Link>
                     </div>
                  </>
                ) : (
                  // --- CARD STANDARD (SENZA LOGO WHATSAPP SOPRA LA FOTO) ---
                  <>
                    <div className="h-48 overflow-hidden relative bg-white">
                      <img src={prodotto.img} className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500" alt={prodotto.nome} onError={(e) => { (e.target as HTMLImageElement).src = "/hero-frutta.jpg" }} />
                    </div>
                    <div className="p-5 pb-2">
                       <h3 className="text-lg font-bold text-stone-200 mb-2">{prodotto.nome}</h3>
                       <p className="text-stone-500 text-xs line-clamp-2 h-8 leading-relaxed">{prodotto.descrizione}</p>
                       <div className="text-green-500 text-[10px] uppercase tracking-widest border-t border-white/5 pt-3 font-bold flex justify-between items-center">
                          <span>Disponibile</span>
                       </div>
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </main>
  );
}