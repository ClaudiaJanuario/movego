'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, MapPin, ExternalLink, Globe, Users, Monitor, Filter, Search } from 'lucide-react'
import { cn } from '@/lib/utils'

const mockEvents = [
  {
    id: '1',
    title: 'GMG - Giornate Mondiali Guzzi 2024',
    date: '2024-09-06',
    endDate: '2024-09-08',
    location: 'Mandello del Lario',
    country: 'Italia',
    type: 'presenziale' as const,
    source: 'Moto Guzzi Official',
    sourceUrl: 'https://motoguzzi.com',
    description: 'Il raduno mondiale dei Guzzisti torna nella sua casa. Tre giorni di eventi, mostre, tour guidati e celebrazioni.',
    tags: ['raduno', 'ufficiale', 'mondiale'],
  },
  {
    id: '2',
    title: 'Moto Guzzi Experience Tour - Lago di Como',
    date: '2024-07-15',
    location: 'Lago di Como',
    country: 'Italia',
    type: 'presenziale' as const,
    source: 'Moto Guzzi World',
    sourceUrl: 'https://motoguzziworld.com',
    description: 'Tour guidato attraverso le strade più panoramiche del Lago di Como con partenza da Mandello.',
    tags: ['tour', 'esperienza', 'lago'],
  },
  {
    id: '3',
    title: 'Webinar: Storia della V7 - Dal 1967 ad oggi',
    date: '2024-06-20',
    location: 'Online',
    country: 'Worldwide',
    type: 'virtual' as const,
    source: 'Guzzi Heritage Club',
    sourceUrl: 'https://guzziheritage.com',
    description: 'Approfondimento sulla leggendaria V7 con esperti e collezionisti internazionali.',
    tags: ['webinar', 'storia', 'V7'],
  },
  {
    id: '4',
    title: 'Guzzi Owners Meeting Germany',
    date: '2024-08-10',
    endDate: '2024-08-11',
    location: 'Monaco di Baviera',
    country: 'Germania',
    type: 'hybrid' as const,
    source: 'Moto Guzzi Deutschland',
    sourceUrl: 'https://motoguzzi.de',
    description: 'Incontro annuale dei club tedeschi con streaming live per chi non può partecipare.',
    tags: ['club', 'germania', 'meeting'],
  },
  {
    id: '5',
    title: 'Raduno Guzzisti Spagna',
    date: '2024-09-20',
    location: 'Barcellona',
    country: 'Spagna',
    type: 'presenziale' as const,
    source: 'Club Guzzi España',
    sourceUrl: 'https://clubguzzi.es',
    description: 'Raduno nazionale dei Guzzisti spagnoli con tour costiero.',
    tags: ['raduno', 'spagna', 'club'],
  },
  {
    id: '6',
    title: 'Virtual Garage Tour - Collezioni Private',
    date: '2024-07-01',
    location: 'Online',
    country: 'Worldwide',
    type: 'virtual' as const,
    source: 'MOVE GO',
    sourceUrl: '#',
    description: 'Tour virtuale esclusivo nelle collezioni private più importanti al mondo.',
    tags: ['virtuale', 'collezioni', 'esclusivo'],
  },
]

const countries = ['Tutti', 'Italia', 'Germania', 'Spagna', 'Worldwide']
const eventTypes = ['Tutti', 'presenziale', 'virtual', 'hybrid']

const typeConfig = {
  virtual: { label: 'Virtuale', icon: Monitor, className: 'badge-virtual' },
  hybrid: { label: 'Ibrido', icon: Globe, className: 'badge-hybrid' },
  presenziale: { label: 'Presenziale', icon: Users, className: 'badge-presenziale' },
}

export default function EventiPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCountry, setSelectedCountry] = useState('Tutti')
  const [selectedType, setSelectedType] = useState('Tutti')

  const filteredEvents = mockEvents.filter((event) => {
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCountry = selectedCountry === 'Tutti' || event.country === selectedCountry
    const matchesType = selectedType === 'Tutti' || event.type === selectedType
    return matchesSearch && matchesCountry && matchesType
  })

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
              Eventi <span className="text-guzzi-red">Real-Time</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Aggregazione automatica AI di tutti gli eventi Moto Guzzi e Mandello del Lario 
              nel mondo. Sempre aggiornato, sempre connesso.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white border-b sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Cerca eventi..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-guzzi-red/50"
              />
            </div>

            {/* Country Filter */}
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-gray-400" />
              <select
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-guzzi-red/50"
              >
                {countries.map((country) => (
                  <option key={country} value={country}>{country}</option>
                ))}
              </select>
            </div>

            {/* Type Filter */}
            <div className="flex gap-2">
              {eventTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium transition-all",
                    selectedType === type
                      ? "bg-guzzi-red text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  )}
                >
                  {type === 'Tutti' ? 'Tutti' : typeConfig[type as keyof typeof typeConfig]?.label || type}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Events List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-6 text-sm text-gray-500">
          {filteredEvents.length} eventi trovati
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event, index) => {
            const typeInfo = typeConfig[event.type]
            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover"
              >
                <div className="p-6">
                  {/* Type Badge & Country */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={cn('badge-partner flex items-center gap-1', typeInfo.className)}>
                      <typeInfo.icon className="w-3 h-3" />
                      {typeInfo.label}
                    </span>
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                      {event.country}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-guzzi-black mb-2">
                    {event.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {event.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {event.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Date & Location */}
                  <div className="space-y-2 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-guzzi-red" />
                      <span>
                        {new Date(event.date).toLocaleDateString('it-IT', { 
                          day: 'numeric', 
                          month: 'long', 
                          year: 'numeric' 
                        })}
                        {event.endDate && ` - ${new Date(event.endDate).toLocaleDateString('it-IT', { 
                          day: 'numeric', 
                          month: 'long'
                        })}`}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-guzzi-red" />
                      <span>{event.location}</span>
                    </div>
                  </div>

                  {/* Source */}
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <a 
                      href={event.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between text-sm text-gray-400 hover:text-guzzi-red transition-colors"
                    >
                      <span>Fonte: {event.source}</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">Nessun evento trovato con i filtri selezionati.</p>
          </div>
        )}
      </div>

      {/* AI Info Banner */}
      <div className="bg-guzzi-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-display font-bold mb-4">
            Aggregazione <span className="text-guzzi-red">AI Real-Time</span>
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Il nostro sistema di intelligenza artificiale monitora costantemente le fonti web 
            per intercettare automaticamente tutti gli eventi che menzionano "Moto Guzzi" e 
            "Mandello del Lario". Ogni evento viene verificato e classificato prima della pubblicazione.
          </p>
        </div>
      </div>
    </div>
  )
}
