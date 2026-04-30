import { NextResponse } from 'next/server';

export interface GuzziEvent {
  id: string;
  title: string;
  date: string;
  endDate?: string;
  location: string;
  country: string;
  type: 'presenziale' | 'virtual' | 'hybrid';
  source: string;
  description: string;
  link: string;
}

// Events data from guzzi-days.net/it/raduni-moto-guzzi/
// Last updated: 2026-04-30
const events: GuzziEvent[] = [
  {
    id: '1',
    title: 'MEETING NAZIONALE Moto Guzzi World Club Città di Siracusa',
    date: '2026-04-30',
    endDate: '2026-05-03',
    location: 'Siracusa',
    country: 'Italia',
    type: 'presenziale',
    source: 'Guzzi Days',
    description: 'Dal 30 aprile al 3 maggio 2026, Siracusa sarà il cuore pulsante della passione per l\'Aquila di Mandello!',
    link: 'https://guzzi-days.net/it/raduni-moto-guzzi/meeting-nazionale-moto-guzzi-world-club-citta-di-siracusa-2026/',
  },
  {
    id: '2',
    title: 'XXVII Raduno Internazionale Moto Guzzi Club Spagna',
    date: '2026-05-01',
    location: 'Spagna',
    country: 'Spagna',
    type: 'presenziale',
    source: 'Guzzi Days',
    description: 'XXVII Riunione Internazionale del Club España Moto Guzzi, evento che celebra la passione per l\'Aquila.',
    link: 'https://guzzi-days.net/it/raduni-moto-guzzi/xxvii-reunion-internacional-espana-moto-guzzi-club/',
  },
  {
    id: '3',
    title: 'Raduno Guzzisti Nomads, Grecia 2026',
    date: '2026-05-01',
    location: 'Grecia',
    country: 'Grecia',
    type: 'presenziale',
    source: 'Guzzi Days',
    description: 'Primo Meeting Internazionale Guzzisti Nomads in Grecia. Preparate le vostre Aquile!',
    link: 'https://guzzi-days.net/it/raduni-moto-guzzi/raduno-guzzisti-nomads-grecia-maggio-2026/',
  },
  {
    id: '4',
    title: '34° Raduno Moto Guzzi in Scozia',
    date: '2026-05-01',
    location: 'Scozia',
    country: 'Regno Unito',
    type: 'presenziale',
    source: 'Guzzi Days',
    description: '34ª edizione del raduno Moto Guzzi della sezione scozzese del Moto Guzzi Club GB.',
    link: 'https://guzzi-days.net/it/raduni-moto-guzzi/34-edizione-del-raduno-moto-guzzi-in-scozia-2026/',
  },
  {
    id: '5',
    title: 'Motoraduno Regionale Città di Roma 2026',
    date: '2026-05-10',
    location: 'Roma',
    country: 'Italia',
    type: 'presenziale',
    source: 'Guzzi Days',
    description: 'Motogiro sul Mare di Roma organizzato dal Moto Club Moto Guzzi Roma ASD.',
    link: 'https://guzzi-days.net/it/raduni-moto-guzzi/motoraduno-regionale-citta-di-roma-2026-motogiro-sul-mare-di-roma/',
  },
  {
    id: '6',
    title: '33° Moto Guzzi Treffen Internazionale Paderborn',
    date: '2026-05-15',
    endDate: '2026-05-17',
    location: 'Paderborn',
    country: 'Germania',
    type: 'presenziale',
    source: 'Guzzi Days',
    description: 'Nel fine settimana dell\'Ascensione, la Wanderhütte di Wünnenberg-Haaren accoglie guzzisti da tutta Europa.',
    link: 'https://guzzi-days.net/it/raduni-moto-guzzi/33-moto-guzzi-treffen-internazionale-paderborn-germania/',
  },
  {
    id: '7',
    title: '3° Moto Guzzi Treffen Fränkische Schweiz',
    date: '2026-05-15',
    endDate: '2026-05-17',
    location: 'Svizzera Francone',
    country: 'Germania',
    type: 'presenziale',
    source: 'Guzzi Days',
    description: 'Nel cuore della pittoresca Svizzera Francone, la comunità Moto Guzzi si riunisce.',
    link: 'https://guzzi-days.net/it/raduni-moto-guzzi/3-moto-guzzi-treffen-frankische-schweiz/',
  },
  {
    id: '8',
    title: '7° Moto Guzzi Day 2026 by Torrieri Moto',
    date: '2026-05-16',
    endDate: '2026-05-17',
    location: 'Abruzzo',
    country: 'Italia',
    type: 'presenziale',
    source: 'Guzzi Days',
    description: 'L\'Abruzzo si accende con il rombo dei bicilindrici per il 7° Moto Guzzi Day.',
    link: 'https://guzzi-days.net/it/raduni-moto-guzzi/7-moto-guzzi-day-2026-by-torrieri-moto/',
  },
  {
    id: '9',
    title: 'Raduno Moto Guzzi Ulster',
    date: '2026-05-22',
    location: 'Irlanda del Nord',
    country: 'Regno Unito',
    type: 'presenziale',
    source: 'Guzzi Days',
    description: 'Lungo weekend all\'insegna della passione per l\'Aquila di Mandello nelle Sperrin Mountains.',
    link: 'https://guzzi-days.net/it/raduni-moto-guzzi/raduno-moto-guzzi-ulster-in-irlanda-del-nord-2026/',
  },
  {
    id: '10',
    title: '3ª KDD Nacional V85TT Moto Guzzi Albacete',
    date: '2026-05-22',
    endDate: '2026-05-24',
    location: 'Albacete',
    country: 'Spagna',
    type: 'presenziale',
    source: 'Guzzi Days',
    description: 'L\'aquila di Mandello spicca il volo nel cuore della Spagna con la 3ª KDD Nacional V85TT.',
    link: 'https://guzzi-days.net/it/raduni-moto-guzzi/3a-kdd-nacional-v85tt-moto-guzzi-albacete-2026/',
  },
  {
    id: '11',
    title: '25° Oldtimer & Classic Weekend Moto Guzzi',
    date: '2026-05-22',
    location: 'Kasteel Domein van Perk',
    country: 'Belgio',
    type: 'presenziale',
    source: 'Guzzi Days',
    description: 'Evento imperdibile dedicato alle leggendarie Moto Guzzi d\'epoca.',
    link: 'https://guzzi-days.net/it/raduni-moto-guzzi/25-oldtimer-classic-weekend-moto-guzzi-belgio-2026/',
  },
  {
    id: '12',
    title: 'Guzzi & Italo-Treffen Bergschrauber',
    date: '2026-05-24',
    location: 'Großmehring',
    country: 'Germania',
    type: 'presenziale',
    source: 'Guzzi Days',
    description: 'Occasione unica per celebrare la passione per Moto Guzzi e moto italiane.',
    link: 'https://guzzi-days.net/it/raduni-moto-guzzi/guzzi-italo-treffen-bergschrauber-2026/',
  },
];

export async function GET() {
  // Sort events by date
  const sortedEvents = events.sort((a, b) => 
    new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  // Filter out past events (optional - keep only future events)
  const now = new Date();
  const upcomingEvents = sortedEvents.filter(event => 
    new Date(event.endDate || event.date) >= now
  );

  return NextResponse.json({
    events: upcomingEvents.length > 0 ? upcomingEvents : sortedEvents,
    total: upcomingEvents.length > 0 ? upcomingEvents.length : sortedEvents.length,
    lastUpdated: new Date().toISOString(),
    source: 'https://guzzi-days.net',
  });
}
