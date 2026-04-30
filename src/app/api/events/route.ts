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

// Static events data - updated from guzzi-days.net
// In production, this could be fetched from an external API or database
const events: GuzziEvent[] = [
  {
    id: '1',
    title: 'Serata Docu-Film Moto Guzzi',
    date: '2026-02-28',
    location: 'Vervio (SO)',
    country: 'Italia',
    type: 'presenziale',
    source: 'Guzzi Days',
    description: 'Proiezione gratuita dei docu-film "Il coraggio di andare oltre" e "Viaggio oltre la meta".',
    link: 'https://guzzi-days.net/it/raduni-moto-guzzi/serata-docu-film-moto-guzzi-a-vervio-un-tuffo-nella-storia-e-nella-societ%C3%A0/',
  },
  {
    id: '2',
    title: 'Avviamento Motori 2026',
    date: '2026-03-15',
    location: 'Mandello del Lario',
    country: 'Italia',
    type: 'presenziale',
    source: 'Guzzi Days',
    description: 'Festa per il 105° anniversario Moto Guzzi. Sfilata moto storiche e avviamento motori.',
    link: 'https://guzzi-days.net/it/raduni-moto-guzzi/avviamento-motori-2026-mandello-del-lario/',
  },
  {
    id: '3',
    title: 'Día del Orgullo Guzzista',
    date: '2026-03-15',
    location: 'Tutta la Spagna',
    country: 'Spagna',
    type: 'presenziale',
    source: 'Guzzi Days',
    description: "Celebrazione dell'anniversario di fondazione Moto Guzzi con uscite coordinate in tutta la Spagna.",
    link: 'https://guzzi-days.net/it/raduni-moto-guzzi/giorno-dell-orgoglio-guzzista-spagna-2026/',
  },
  {
    id: '4',
    title: '1° Raduno Moto Guzzi Terre di Pisa',
    date: '2026-03-27',
    endDate: '2026-03-29',
    location: 'Pontedera / Pisa',
    country: 'Italia',
    type: 'presenziale',
    source: 'Guzzi Days',
    description: 'Weekend tra Museo Piaggio, Pontedera e Pisa. Tour, cena dei Guzzisti e benedizione caschi.',
    link: 'https://guzzi-days.net/it/raduni-moto-guzzi/1-raduno-moto-guzzi-terre-di-pisa-pontedera-2026/',
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
