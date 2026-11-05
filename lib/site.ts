// ---------------------------------------------------------------
// DATI DELLA BOTTEGA — unica fonte di verità per tutto il sito
// ---------------------------------------------------------------

export const SITE = {
  nome: "Alimentari e Frutta",
  titolare: "Cinelli Domenico",
  brand: "Alimentari Cinelli",
  slogan: "Dal produttore, direttamente a te.",
  dal: 1986,
  indirizzo: {
    via: "Via Caudina, 10",
    cap: "82019",
    citta: "Sant'Agata de' Goti",
    provincia: "BN",
  },
  telefono: "+39 339 302 2051",
  telefonoHref: "tel:+393393022051",
  whatsapp: "https://wa.me/393393022051",
  whatsappOrdine:
    "https://wa.me/393393022051?text=Salve%2C%20vorrei%20fare%20un%20ordine",
  whatsappSpedizioni:
    "https://wa.me/393393022051?text=Salve%2C%20vorrei%20info%20sulle%20spedizioni",
  email: "alimentaricinelli@pec.it",
  instagram:
    "https://www.instagram.com/alimentariefrutta_cinelli?igsh=cDZwanZnbXNtb2xr",
  facebook: "https://www.facebook.com/share/14S1y2GFayv/?mibextid=wwXIfr",
  mapsDir:
    "https://www.google.com/maps/dir//Via+Caudina,+10,+82019+Sant'Agata+de'+Goti+BN",
  mapsEmbed:
    "https://maps.google.com/maps?q=Via+Caudina+10+Sant'Agata+de'+Goti&t=&z=17&ie=UTF8&iwloc=&output=embed",
  developer: "GENX",
};

// ---------------------------------------------------------------
// ORARI DI APERTURA
// Chiave = giorno JS (0 = domenica ... 6 = sabato)
// Valore = lista di fasce [inizio, fine] in formato "HH:MM"
// ---------------------------------------------------------------
export type Fascia = [string, string];

export const ORARI: Record<number, Fascia[] | null> = {
  0: [["07:30", "13:20"]], // domenica
  1: null, // lunedì chiuso
  2: [
    ["07:30", "13:20"],
    ["15:30", "20:30"],
  ],
  3: [
    ["07:30", "13:20"],
    ["15:30", "20:30"],
  ],
  4: [
    ["07:30", "13:20"],
    ["15:30", "20:30"],
  ],
  5: [
    ["07:30", "13:20"],
    ["15:30", "20:30"],
  ],
  6: [
    ["07:30", "13:20"],
    ["15:30", "20:30"],
  ],
};

export const GIORNI_LABEL = [
  "Domenica",
  "Lunedì",
  "Martedì",
  "Mercoledì",
  "Giovedì",
  "Venerdì",
  "Sabato",
];

// ---------------------------------------------------------------
// LE 5 ECCELLENZE — usate da navbar, home e pagine prodotto
// ---------------------------------------------------------------
export type Eccellenza = {
  slug: string;
  nome: string;
  breve: string;
  claim: string;
  img: string;
  colore: string; // hex accento
  coloreSoft: string; // hex accento tenue (per sfondi)
};

export const ECCELLENZE: Eccellenza[] = [
  {
    slug: "/mela-annurca",
    nome: "Mela Annurca",
    breve: "L'oro rosso della Campania",
    claim: "Non viene colta rossa dall'albero. Diventa rossa aspettando a terra.",
    img: "/annurca-cassetta.jpg",
    colore: "#E63B2E",
    coloreSoft: "rgba(230,59,46,0.14)",
  },
  {
    slug: "/mozzarella",
    nome: "Mozzarella",
    breve: "Oro bianco, ogni mattina",
    claim: "Arriva fresca ogni mattina. Ancora tiepida, immersa nel suo siero.",
    img: "/hero-mozzarella.jpg",
    colore: "#A8C6E8",
    coloreSoft: "rgba(168,198,232,0.14)",
  },
  {
    slug: "/pane",
    nome: "Pane a Legna",
    breve: "Crosta scura, mollica alta",
    claim: "Crosta scura, mollica alta, profumo di casa.",
    img: "/hero-pane.jpg",
    colore: "#C98A3D",
    coloreSoft: "rgba(201,138,61,0.14)",
  },
  {
    slug: "/nfrennule",
    nome: "'Nfrennule",
    breve: "Il tarallo di Sant'Agata",
    claim: "Acqua, farina, olio e vino. Il sapore antico della festa.",
    img: "/hero-nfrennule.jpg",
    colore: "#D9A441",
    coloreSoft: "rgba(217,164,65,0.14)",
  },
  {
    slug: "/pomodoro",
    nome: "Pomodoro Piennolo",
    breve: "Il sole del Vesuvio",
    claim: "Appeso nei grappoli, conserva il sole dell'estate per tutto l'inverno.",
    img: "/hero-pomodoro.jpg",
    colore: "#D7412C",
    coloreSoft: "rgba(215,65,44,0.14)",
  },
];
