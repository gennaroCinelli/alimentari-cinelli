import { ORARI, GIORNI_LABEL, type Fascia } from "./site";

// ---------------------------------------------------------------
// LOGICA ORARI — calcola in tempo reale se la bottega è aperta
// ---------------------------------------------------------------

function aMinuti(hhmm: string): number {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
}

export type StatoBottega = {
  aperto: boolean;
  // es. "fino alle 13:20" / "riapre alle 15:30" / "riapre martedì alle 07:30"
  messaggio: string;
  fasceOggi: Fascia[] | null;
  giorniTesto: { giorni: string; fasce: string[] | null }[];
};

export function statoBottega(ora = new Date()): StatoBottega {
  const giorno = ora.getDay();
  const adesso = ora.getHours() * 60 + ora.getMinutes();
  const fasce = ORARI[giorno];

  let aperto = false;
  let messaggio = "";

  if (fasce) {
    for (const [ini, fin] of fasce) {
      if (adesso >= aMinuti(ini) && adesso < aMinuti(fin)) {
        aperto = true;
        messaggio = `Aperto fino alle ${fin}`;
        break;
      }
    }
    if (!aperto) {
      // cerca la prossima fascia di oggi
      const prossima = fasce.find(([ini]) => adesso < aMinuti(ini));
      if (prossima) {
        messaggio = `Apre alle ${prossima[0]}`;
      }
    }
  }

  // se chiuso oggi e nessuna fascia rimane → cerca nei giorni successivi
  if (!aperto && !messaggio) {
    for (let i = 1; i <= 7; i++) {
      const g = (giorno + i) % 7;
      const f = ORARI[g];
      if (f && f.length) {
        const prefisso = i === 1 ? "Domani" : GIORNI_LABEL[g];
        messaggio = `Riapre ${prefisso.toLowerCase()} alle ${f[0][0]}`;
        break;
      }
    }
  }

  const giorniTesto = (function () {
    const righe: { giorni: string; fasce: string[] | null }[] = [];
    const push = (giorni: string, g: number) => {
      const f = ORARI[g];
      righe.push({
        giorni,
        fasce: f ? f.map(([a, b]) => `${a} – ${b}`) : null,
      });
    };
    push("Martedì – Sabato", 2);
    push("Domenica", 0);
    push("Lunedì", 1);
    return righe;
  })();

  return { aperto, messaggio, fasceOggi: fasce, giorniTesto };
}

// countdown testuale alla prossima apertura/chiusura (per la chicca "tra ...")
export function countdownStato(ora = new Date()): string | null {
  const giorno = ora.getDay();
  const adesso = ora.getHours() * 60 + ora.getMinutes();
  const fasce = ORARI[giorno];

  const fmt = (min: number) => {
    const h = Math.floor(min / 60);
    const m = min % 60;
    return h > 0 ? `${h}h ${m ? `${m}m` : ""}`.trim() : `${m}m`;
  };

  if (fasce) {
    for (const [ini, fin] of fasce) {
      if (adesso >= aMinuti(ini) && adesso < aMinuti(fin)) {
        return `chiude tra ${fmt(aMinuti(fin) - adesso)}`;
      }
    }
    for (const [ini] of fasce) {
      if (adesso < aMinuti(ini)) {
        return `apre tra ${fmt(aMinuti(ini) - adesso)}`;
      }
    }
  }
  return null;
}
