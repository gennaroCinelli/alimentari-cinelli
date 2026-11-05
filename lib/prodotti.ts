// ---------------------------------------------------------------
// CATALOGO FRUTTA & VERDURA — aggiornato ogni giorno in bottega
// ---------------------------------------------------------------

export type Prodotto = {
  nome: string;
  category: string;
  tipo: "frutta" | "verdura";
  img: string;
  descrizione: string;
  isSpecial?: boolean;
};

export const PRODOTTI: Prodotto[] = [
  // SPECIALITÀ
  { nome: "Mela Annurca Campana IGP", category: "POMACEE", tipo: "frutta", isSpecial: true, img: "/hero-mela.jpg", descrizione: "La regina delle mele. Rossa, piccola e succosa." },

  // FRUTTA — DRUPACEE
  { nome: "Pesca Gialla", category: "DRUPACEE", tipo: "frutta", img: "/pesca-gialla.jpg.jpg", descrizione: "Polpa soda e succosa, buccia vellutata." },
  { nome: "Pesca Bianca", category: "DRUPACEE", tipo: "frutta", img: "/pesca-bianca.jpg.jpg", descrizione: "Polpa delicata e profumatissima." },
  { nome: "Nettarina", category: "DRUPACEE", tipo: "frutta", img: "/nettarina.jpg.jpg", descrizione: "Buccia liscia e lucida, croccante." },
  { nome: "Pesca Tabacchiera", category: "DRUPACEE", tipo: "frutta", img: "/tabacchiera.jpg", descrizione: "Schiacciata, dolcissima (Saturnina)." },
  { nome: "Percoca", category: "DRUPACEE", tipo: "frutta", img: "/percoca.jpg.jpg", descrizione: "Polpa gialla dura e compatta, ottima nel vino." },
  { nome: "Albicocche", category: "DRUPACEE", tipo: "frutta", img: "/albicocche.jpg", descrizione: "Arancioni, polpa morbida e profumata." },
  { nome: "Susina Goccia d'Oro", category: "DRUPACEE", tipo: "frutta", img: "/susina-gialla.jpg", descrizione: "Tonda, buccia gialla, succosissima." },
  { nome: "Susina Stanley", category: "DRUPACEE", tipo: "frutta", img: "/susina-viola.jpg", descrizione: "Ovale, viola scuro, polpa soda che si stacca." },
  { nome: "Ciliegie Tenerine", category: "DRUPACEE", tipo: "frutta", img: "/ciliegie-tenerine.jpg", descrizione: "Polpa molle e molto succosa." },
  { nome: "Ciliegie Ferrovia", category: "DRUPACEE", tipo: "frutta", img: "/ciliegie-duroni.jpg", descrizione: "Duroni croccanti, scuri e grossi." },
  { nome: "Amarene", category: "DRUPACEE", tipo: "frutta", img: "/amarene.jpg", descrizione: "Aspre, ideali per marmellate o sciroppi." },

  // FRUTTA — POMACEE
  { nome: "Mela Golden", category: "POMACEE", tipo: "frutta", img: "/mela-golden.jpg", descrizione: "Gialla, dolce e classica." },
  { nome: "Mela Stark", category: "POMACEE", tipo: "frutta", img: "/mela-stark.jpg", descrizione: "Rossa scura, polpa profumata." },
  { nome: "Mela Granny Smith", category: "POMACEE", tipo: "frutta", img: "/mela-granny.jpg", descrizione: "Verde brillante, asprigna e croccante." },
  { nome: "Mela Fuji", category: "POMACEE", tipo: "frutta", img: "/mela-fuji.jpg", descrizione: "Rossa striata, molto dolce e croccante." },
  { nome: "Mela Cotogna", category: "POMACEE", tipo: "frutta", img: "/mela-cotogna.jpg", descrizione: "Dura e aspra da cruda, solo per cotognata." },

  // FRUTTA — PERE
  { nome: "Pera William", category: "POMACEE", tipo: "frutta", img: "/pera-william.jpg", descrizione: "Tondeggiante, succosa, estiva." },
  { nome: "Pera Abate", category: "POMACEE", tipo: "frutta", img: "/pera-abate.jpg", descrizione: "Forma allungata e curva, polpa soda." },
  { nome: "Pera Kaiser", category: "POMACEE", tipo: "frutta", img: "/pera-kaiser.jpg", descrizione: "Buccia rugginosa, ottima cotta." },
  { nome: "Pera Coscia", category: "POMACEE", tipo: "frutta", img: "/pera-coscia.jpg", descrizione: "Piccola, verde, estiva e dolce." },

  // FRUTTA — AGRUMI
  { nome: "Limoni", category: "AGRUMI", tipo: "frutta", img: "/limoni.jpg", descrizione: "Gialli, succosi e rifiorenti." },
  { nome: "Arance Navel", category: "AGRUMI", tipo: "frutta", img: "/arance-bionde.jpg", descrizione: "Bionde, polpa gialla, dolci da mangiare." },
  { nome: "Arance Tarocco", category: "AGRUMI", tipo: "frutta", img: "/arance-rosse.jpg", descrizione: "Rosse, polpa striata, ottime per spremute." },
  { nome: "Clementine", category: "AGRUMI", tipo: "frutta", img: "/clementine.jpg", descrizione: "Piccole, dolci, facili da sbucciare e senza semi." },
  { nome: "Pompelmi", category: "AGRUMI", tipo: "frutta", img: "/pompelmi.jpg", descrizione: "Gialli (acidi) o rosa (più dolci)." },
  { nome: "Lime", category: "AGRUMI", tipo: "frutta", img: "/lime.jpg", descrizione: "Piccolo, verde e aromatico." },

  // FRUTTA — BOSCO
  { nome: "Fragole", category: "BOSCO", tipo: "frutta", img: "/fragole.jpg", descrizione: "Dolci e profumate." },
  { nome: "Lamponi", category: "BOSCO", tipo: "frutta", img: "/lamponi.jpg", descrizione: "Rossi o gialli, delicatissimi." },
  { nome: "More", category: "BOSCO", tipo: "frutta", img: "/more.jpg", descrizione: "Nere e succose." },
  { nome: "Mirtilli", category: "BOSCO", tipo: "frutta", img: "/mirtilli.jpg", descrizione: "Bacche blu ricche di antiossidanti." },

  // FRUTTA — ESTIVI
  { nome: "Anguria Tradizionale", category: "ESTIVI", tipo: "frutta", img: "/anguria.jpg", descrizione: "Grossa con semi, il classico dell'estate." },
  { nome: "Anguria Perla Nera", category: "ESTIVI", tipo: "frutta", img: "/anguria-perla-nera.jpg", descrizione: "Buccia scura, senza semi." },
  { nome: "Melone a Pane", category: "ESTIVI", tipo: "frutta", img: "/melone-liscio.jpg", descrizione: "Buccia liscia chiara, dolcissimo." },
  { nome: "Melone Giallo", category: "ESTIVI", tipo: "frutta", img: "/melone-giallo.jpg", descrizione: "Invernale, polpa bianca e dolce." },

  // FRUTTA — UVA
  { nome: "Uva Italia", category: "UVA", tipo: "frutta", img: "/uva-italia.jpg", descrizione: "Bianca, chicco grosso e succoso." },
  { nome: "Uva Nera Cardinal", category: "UVA", tipo: "frutta", img: "/uva-cardinal.jpg", descrizione: "Rossone, chicco grosso e croccante." },
  { nome: "Uva Fragola", category: "UVA", tipo: "frutta", img: "/uva-fragola.jpg", descrizione: "Sapore intenso e aromatico." },

  // FRUTTA — ESOTICI
  { nome: "Kiwi Hayward", category: "ESOTICI", tipo: "frutta", img: "/kiwi.jpg", descrizione: "Il classico verde peloso." },
  { nome: "Kiwi Gold", category: "ESOTICI", tipo: "frutta", img: "/kiwi-gold.jpg", descrizione: "Polpa gialla, buccia liscia, dolcissimo." },
  { nome: "Banane", category: "ESOTICI", tipo: "frutta", img: "/banane.jpg", descrizione: "Il frutto energetico per eccellenza." },
  { nome: "Ananas", category: "ESOTICI", tipo: "frutta", img: "/ananas.jpg", descrizione: "Dolce e digestivo." },
  { nome: "Avocado", category: "ESOTICI", tipo: "frutta", img: "/avocado.jpg", descrizione: "Polpa burrosa, ottimo per insalate." },
  { nome: "Papaya", category: "ESOTICI", tipo: "frutta", img: "/papaya.jpg", descrizione: "Polpa arancione morbida e dolce." },
  { nome: "Litchi", category: "ESOTICI", tipo: "frutta", img: "/litchi.jpg", descrizione: "Ciliegia della Cina, polpa bianca traslucida." },
  { nome: "Fico d'India", category: "ESOTICI", tipo: "frutta", img: "/fico-india.jpg", descrizione: "Spinoso fuori, dolcissimo dentro." },
  { nome: "Nespolo", category: "ESOTICI", tipo: "frutta", img: "/nespolo.jpg", descrizione: "Arancione primaverile, succoso e acidulo." },
  { nome: "Melograno", category: "ESOTICI", tipo: "frutta", img: "/melograno.jpg", descrizione: "Chicchi rossi preziosi e succosi." },

  // FRUTTA — AUTUNNO
  { nome: "Fichi Settembrini", category: "FICHI", tipo: "frutta", img: "/fichi.jpg", descrizione: "Piccoli, neri o verdi, dolcissimi." },
  { nome: "Caco Mela", category: "CACHI", tipo: "frutta", img: "/caco-mela.jpg", descrizione: "Vaniglia. Croccante come una mela, non allappa." },
  { nome: "Caco Morbido", category: "CACHI", tipo: "frutta", img: "/caco-morbido.jpg", descrizione: "Gelatinoso e zuccherino." },

  // FRUTTA — SECCA
  { nome: "Noci", category: "SECCA", tipo: "frutta", img: "/noci.jpg", descrizione: "Energetiche e croccanti." },
  { nome: "Nocciole", category: "SECCA", tipo: "frutta", img: "/nocciole.jpg", descrizione: "Tostate o fresche." },
  { nome: "Castagne", category: "SECCA", tipo: "frutta", img: "/castagne.jpg", descrizione: "Il sapore dell'autunno." },
  { nome: "Pistacchi", category: "SECCA", tipo: "frutta", img: "/pistacchi.jpg", descrizione: "Oro verde." },
  { nome: "Arachidi", category: "SECCA", tipo: "frutta", img: "/arachidi.jpg", descrizione: "Ottime da sgranocchiare." },
  { nome: "Olive Verdi", category: "SFIZI", tipo: "frutta", img: "/olive-verdi.jpg", descrizione: "Polpose e saporite." },
  { nome: "Olive Nere", category: "SFIZI", tipo: "frutta", img: "/olive-nere.jpg", descrizione: "Mature e saporite, da antipasto." },

  // VERDURA — INSALATE
  { nome: "Lattuga Romana", category: "INSALATE", tipo: "verdura", img: "/lattuga-romana.jpg", descrizione: "Foglie allungate e carnose, costa robusta. Detta anche Spadona." },
  { nome: "Lattuga Cappuccio", category: "INSALATE", tipo: "verdura", img: "/lattuga-cappuccio.jpg", descrizione: "Cespo tondo e compatto, foglie chiare e croccanti." },
  { nome: "Lattuga Iceberg", category: "INSALATE", tipo: "verdura", img: "/lattuga-iceberg.jpg", descrizione: "Cuore compatto e croccantissimo." },
  { nome: "Lattuga Canasta", category: "INSALATE", tipo: "verdura", img: "/lattuga-canasta.jpg", descrizione: "Foglie frastagliate con screziature rosse." },
  { nome: "Lattuga Gentilina", category: "INSALATE", tipo: "verdura", img: "/lattuga-gentilina.jpg", descrizione: "Foglie ondulate e tenere, dolci al palato." },
  { nome: "Lattuga Lollo", category: "INSALATE", tipo: "verdura", img: "/lattuga-lollo.jpg", descrizione: "Foglie ricce e ondulate, molto decorative." },
  { nome: "Scarola Liscia", category: "INSALATE", tipo: "verdura", img: "/scarola.jpg", descrizione: "Cuore tenero, resistente al freddo." },
  { nome: "Indivia Riccia", category: "INSALATE", tipo: "verdura", img: "/indivia.jpg", descrizione: "Foglie frastagliate e croccanti." },
  { nome: "Radicchio di Treviso", category: "INSALATE", tipo: "verdura", img: "/radicchio.jpg", descrizione: "Lungo, croccante e leggermente amaro." },
  { nome: "Valerianella (Songino)", category: "INSALATE", tipo: "verdura", img: "/songino.jpg", descrizione: "Foglie piccole e tonde, dolce." },

  // VERDURA — POMODORI
  { nome: "Pomodoro Cuore di Bue", category: "POMODORI", tipo: "verdura", img: "/cuore-di-bue.jpg", descrizione: "Grosso e irregolare, ideale per l'insalata." },
  { nome: "Pomodoro San Marzano", category: "POMODORI", tipo: "verdura", img: "/san-marzano.jpg", descrizione: "Il re del sugo." },
  { nome: "Pomodorino Ciliegino", category: "POMODORI", tipo: "verdura", img: "/ciliegino.jpg", descrizione: "Piccolo e dolcissimo." },

  // VERDURA — ORTAGGI
  { nome: "Peperoni Quadrati", category: "ORTAGGI", tipo: "verdura", img: "/peperoni.jpg", descrizione: "Gialli o rossi, polpa spessa." },
  { nome: "Friggitelli", category: "ORTAGGI", tipo: "verdura", img: "/friggitelli.jpg", descrizione: "Verdi e dolci, da fare in padella." },
  { nome: "Melanzana Tonda Nera", category: "ORTAGGI", tipo: "verdura", img: "/melanzana-tonda.jpg", descrizione: "La classica per la parmigiana." },
  { nome: "Melanzana Lunga", category: "ORTAGGI", tipo: "verdura", img: "/melanzana-lunga.jpg", descrizione: "Sottile e dal sapore deciso." },

  // VERDURA — ZUCCHINE & ZUCCHE
  { nome: "Zucchine Scure", category: "ZUCCHINE", tipo: "verdura", img: "/zucchine.jpg", descrizione: "Le classiche milanesi." },
  { nome: "Zucchine Romanesche", category: "ZUCCHINE", tipo: "verdura", img: "/zucchine-romanesche.jpg", descrizione: "Chiare, costolute, spesso col fiore." },
  { nome: "Zucca Delica", category: "ZUCCA", tipo: "verdura", img: "/zucca-delica.jpg", descrizione: "Polpa soda e dolce, ottima al forno." },
  { nome: "Zucca Butternut", category: "ZUCCA", tipo: "verdura", img: "/zucca-butternut.jpg", descrizione: "Forma a pera, liscia e dolce." },

  // VERDURA — CAVOLI
  { nome: "Cavolfiore Bianco", category: "CAVOLI", tipo: "verdura", img: "/cavolfiore.jpg", descrizione: "Compatto e bianchissimo." },
  { nome: "Broccolo Calabrese", category: "CAVOLI", tipo: "verdura", img: "/broccolo.jpg", descrizione: "Testa verde scuro e compatta." },
  { nome: "Verza", category: "CAVOLI", tipo: "verdura", img: "/verza.jpg", descrizione: "Foglie grinzose, cuore tenero." },
  { nome: "Cime di Rapa", category: "CAVOLI", tipo: "verdura", img: "/cime-di-rapa.jpg", descrizione: "Foglie e infiorescenze saporite." },

  // VERDURA — LEGUMI, BULBI, RADICI, TUBERI
  { nome: "Fagiolini", category: "LEGUMI", tipo: "verdura", img: "/fagiolini.jpg", descrizione: "Teneri e senza filo." },
  { nome: "Piselli Freschi", category: "LEGUMI", tipo: "verdura", img: "/piselli.jpg", descrizione: "Dolci, da sgranare." },
  { nome: "Cipolla Dorata", category: "BULBI", tipo: "verdura", img: "/cipolla-dorata.jpg", descrizione: "Ideale per soffritti e cotture lunghe." },
  { nome: "Cipolla Rossa", category: "BULBI", tipo: "verdura", img: "/cipolla-rossa.jpg", descrizione: "Rossa, dolce e croccante." },
  { nome: "Carote", category: "RADICI", tipo: "verdura", img: "/carote.jpg", descrizione: "Fresche con il ciuffo." },
  { nome: "Patate Pasta Gialla", category: "TUBERI", tipo: "verdura", img: "/patate.jpg", descrizione: "Non si sfaldano in cottura." },
  { nome: "Patate Novelle", category: "TUBERI", tipo: "verdura", img: "/patate-novelle.jpg", descrizione: "Piccole e dalla buccia sottile." },
];
