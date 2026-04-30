'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Clock, Users, Globe, Calendar, MapPin, Check, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const tours = [
  {
    id: '1',
    title: 'Tour Classico Museo Guzzi',
    duration: '2 ore',
    price: 25,
    maxParticipants: 15,
    languages: ['IT', 'EN', 'DE'],
    description: 'Visita guidata completa del Museo Moto Guzzi con accesso esclusivo agli archivi storici. Scopri oltre 100 anni di storia attraverso modelli iconici, prototipi e cimeli.',
    highlights: ['Museo completo', 'Archivi storici', 'Guida esperta', 'Foto ricordo'],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    availableDates: ['2024-03-15', '2024-03-16', '2024-03-22', '2024-03-23'],
  },
  {
    id: '2',
    title: 'Mandello Storica',
    duration: '3 ore',
    price: 35,
    maxParticipants: 12,
    languages: ['IT', 'EN', 'DE', 'ES'],
    description: 'Passeggiata nei luoghi storici della Moto Guzzi: dalla prima officina al lungolago, passando per le vie dove i fondatori hanno scritto la storia.',
    highlights: ['Prima officina', 'Lungolago', 'Centro storico', 'Aneddoti locali'],
    image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=600&q=80',
    availableDates: ['2024-03-14', '2024-03-17', '2024-03-21', '2024-03-24'],
  },
  {
    id: '3',
    title: 'Experience Premium',
    duration: '5 ore',
    price: 75,
    maxParticipants: 8,
    languages: ['IT', 'EN'],
    description: 'Tour esclusivo con accesso alla fabbrica, pranzo tipico lariano e incontro con i custodi della memoria. Un\'esperienza irripetibile per veri appassionati.',
    highlights: ['Accesso fabbrica', 'Pranzo incluso', 'Incontro custodi', 'Certificato'],
    image: 'https://images.unsplash.com/photo-1558981359-219d6364c9c8?w=600&q=80',
    availableDates: ['2024-03-16', '2024-03-23', '2024-03-30'],
    featured: true,
  },
  {
    id: '4',
    title: 'Tour Fotografico',
    duration: '4 ore',
    price: 55,
    maxParticipants: 10,
    languages: ['IT', 'EN'],
    description: 'Per appassionati di fotografia: tour dedicato ai luoghi più iconici con consigli professionali per scatti perfetti delle tue Guzzi.',
    highlights: ['Spot fotografici', 'Consigli pro', 'Golden hour', 'Moto incluse'],
    image: 'https://images.unsplash.com/photo-1558981285-6f0c94958bb6?w=600&q=80',
    availableDates: ['2024-03-15', '2024-03-22', '2024-03-29'],
  },
]

export default function VisitePage() {
  const [selectedTour, setSelectedTour] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      {/* Hero */}
      <div className="bg-guzzi-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">
              Visite <span className="text-guzzi-red">Guidate</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Esperienze uniche per scoprire la storia della Moto Guzzi 
              con guide esperte e appassionate. Prenota il tuo tour.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Tours */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {tours.map((tour, index) => (
            <motion.div
              key={tour.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                "bg-white rounded-2xl shadow-lg overflow-hidden card-hover",
                tour.featured && "ring-2 ring-guzzi-red"
              )}
            >
              {/* Image */}
              <div className="relative h-48">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${tour.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                {tour.featured && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-guzzi-red text-white text-xs px-3 py-1 rounded-full font-semibold">
                      Consigliato
                    </span>
                  </div>
                )}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-semibold text-white">{tour.title}</h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-600 mb-4">{tour.description}</p>

                {/* Info */}
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Clock className="w-4 h-4 text-guzzi-red" />
                    <span>{tour.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Users className="w-4 h-4 text-guzzi-red" />
                    <span>Max {tour.maxParticipants}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Globe className="w-4 h-4 text-guzzi-red" />
                    <span>{tour.languages.join(', ')}</span>
                  </div>
                </div>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {tour.highlights.map((highlight) => (
                    <span key={highlight} className="flex items-center gap-1 text-xs bg-green-50 text-green-700 px-2 py-1 rounded">
                      <Check className="w-3 h-3" />
                      {highlight}
                    </span>
                  ))}
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div>
                    <span className="text-3xl font-bold text-guzzi-red">€{tour.price}</span>
                    <span className="text-sm text-gray-400">/persona</span>
                  </div>
                  <button
                    onClick={() => setSelectedTour(tour.id)}
                    className="flex items-center gap-2 bg-guzzi-red hover:bg-guzzi-red-dark text-white px-6 py-3 rounded-full font-semibold transition-all"
                  >
                    Prenota Ora
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Booking Modal Placeholder */}
      {selectedTour && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl max-w-md w-full p-6"
          >
            <h3 className="text-xl font-semibold mb-4">Prenota il tuo Tour</h3>
            <p className="text-gray-600 mb-6">
              Sistema di prenotazione in fase di attivazione. 
              Contattaci per prenotare la tua visita guidata.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setSelectedTour(null)}
                className="flex-1 py-3 border border-gray-200 rounded-lg font-medium hover:bg-gray-50 transition-all"
              >
                Chiudi
              </button>
              <a
                href="/contatti?subject=visite"
                className="flex-1 py-3 bg-guzzi-red text-white rounded-lg font-medium text-center hover:bg-guzzi-red-dark transition-all"
              >
                Contattaci
              </a>
            </div>
          </motion.div>
        </div>
      )}

      {/* Info Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-guzzi-red/10 flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-guzzi-red" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Prenotazione Facile</h3>
              <p className="text-gray-600 text-sm">
                Scegli data e orario, paga online e ricevi il tuo QR ticket via email.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-guzzi-red/10 flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-guzzi-red" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Guide Multilingua</h3>
              <p className="text-gray-600 text-sm">
                Tour disponibili in italiano, inglese, tedesco, spagnolo e portoghese.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-guzzi-red/10 flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-guzzi-red" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Punto di Ritrovo</h3>
              <p className="text-gray-600 text-sm">
                Tutti i tour partono dalla Piazza Garibaldi, nel centro di Mandello del Lario.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Group Booking CTA */}
      <section className="bg-guzzi-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-display font-bold mb-4">
            Tour per <span className="text-guzzi-red">Gruppi</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Organizzi un raduno o un viaggio di gruppo? Contattaci per tour personalizzati, 
            tariffe speciali e esperienze su misura per il tuo club.
          </p>
          <a
            href="/contatti?subject=gruppi"
            className="inline-flex items-center gap-2 bg-guzzi-red hover:bg-guzzi-red-dark text-white px-8 py-4 rounded-full font-semibold transition-all"
          >
            Richiedi Preventivo Gruppi
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  )
}
