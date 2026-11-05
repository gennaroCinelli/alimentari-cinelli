// ---------------------------------------------------------------
// SALUMI & FORMAGGI — la selezione del banco del fresco
// ---------------------------------------------------------------

export type ProdottoSalumi = {
  nome: string;
  descrizione: string;
  foto: string;
  badge: string;
};

export type CategoriaSalumi = {
  categoria: string;
  numero: string;
  items: ProdottoSalumi[];
};

export const SALUMI: CategoriaSalumi[] = [
  {
    categoria: "I Crudi d'Eccellenza",
    numero: "01",
    items: [
      {
        nome: "Crudo di Parma DOP",
        descrizione:
          "Il re dei prosciutti. Dolce, raffinato e stagionato con pazienza nelle cantine di Langhirano. Si scioglie in bocca.",
        foto: "/crudo-parma.jpg",
        badge: "DOP",
      },
      {
        nome: "San Daniele DOP",
        descrizione:
          "Riconoscibile per la sua forma a chitarra. Un gusto delicato con note di frutta secca e una dolcezza inconfondibile.",
        foto: "/crudo-sandaniele.jpg",
        badge: "DOP",
      },
      {
        nome: "Crudo Pedrazzoli",
        descrizione:
          "Una scelta di nicchia per veri intenditori. Carni selezionate e una lavorazione artigianale che garantisce un sapore autentico.",
        foto: "/crudo-pedrazzoli.jpg",
        badge: "Premium",
      },
    ],
  },
  {
    categoria: "Cotti & Insaccati",
    numero: "02",
    items: [
      {
        nome: "Gran Biscotto Rovagnati",
        descrizione:
          "Il prosciutto cotto per eccellenza. Cotto lentamente al vapore, massaggiato a mano e marchiato a fuoco. Unico.",
        foto: "/cotto-granbiscotto.jpg",
        badge: "Top Quality",
      },
      {
        nome: "Mortadella Maletti",
        descrizione:
          "Profumo inebriante e gusto vellutato. La Mortadella Maletti è sinonimo di alta salumeria emiliana. Imperdibile nel panino.",
        foto: "/mortadella-maletti.jpg",
        badge: "IGP",
      },
    ],
  },
  {
    categoria: "Formaggi Stagionati",
    numero: "03",
    items: [
      {
        nome: "Parmigiano Reggiano 30 Mesi",
        descrizione:
          "Friabile e granuloso, ricco di cristalli di tirosina. Un'esplosione di sapore perfetta da gustare a scaglie o grattugiato.",
        foto: "/parmigiano-30.jpg",
        badge: "30 Mesi",
      },
      {
        nome: "Pecorino Romano DOP",
        descrizione:
          "Sapido, intenso e piccante al punto giusto. L'ingrediente principe della tradizione romana, perfetto per i primi piatti.",
        foto: "/pecorino-romano.jpg",
        badge: "DOP",
      },
    ],
  },
];

export const BRANDS = [
  "Citterio",
  "Negroni",
  "Rovagnati",
  "Casa Modena",
  "Parmacotto",
  "Galbani",
  "Pedrazzoli",
  "Rigamonti",
  "Parmareggio",
  "Biraghi",
  "Auricchio",
  "Leerdammer",
  "Entremont",
  "Zamberlan",
  "Asiago DOP",
  "Fontina DOP",
];
