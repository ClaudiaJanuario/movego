'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Star, MapPin, Utensils, Hotel, Home, Phone, Globe, Filter } from 'lucide-react'
import { cn } from '@/lib/utils'

const mockPartners = [
  {
    id: '1',
    name: 'Ristorante La Terrazza del Lago',
    type: 'restaurant' as const,
    rating: 4.8,
    reviewCount: 324,
    address: 'Via Lungolago, 15 - Mandello del Lario',
    description: 'Cucina tradizionale lariana con vista mozzafiato sul lago. Specialità di pesce fresco.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80',
    priceRange: 'mid' as const,
    phone: '+39 0341 123456',
    website: 'https://example.com',
    amenities: ['Vista Lago', 'Terrazza', 'Parcheggio'],
    featured: true,
  },
  {
    id: '2',
    name: 'Hotel Guzzi Heritage',
    type: 'hotel' as const,
    rating: 4.6,
    reviewCount: 189,
    address: 'Piazza Garibaldi, 8 - Mandello del Lario',
    description: 'Hotel 4 stelle nel centro storico, a pochi passi dal Museo Moto Guzzi.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80',
    priceRange: 'premium' as const,
    phone: '+39 0341 234567',
    website: 'https://example.com',
    amenities: ['WiFi', 'Colazione', 'Garage Moto'],
    featured: true,
  },
  {
    id: '3',
    name: 'B&B Vista Lago',
    type: 'bb' as const,
    rating: 4.9,
    reviewCount: 87,
    address: 'Via Roma, 42 - Mandello del Lario',
    description: 'Accogliente B&B a conduzione familiare con camere affacciate sul lago.',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80',
    priceRange: 'mid' as const,
    phone: '+39 0341 345678',
    amenities: ['Vista Lago', 'Colazione', 'Giardino'],
    featured: false,
  },
  {
    id: '4',
    name: 'Trattoria del Guzzista',
    type: 'restaurant' as const,
    rating: 4.7,
    reviewCount: 256,
    address: 'Via Moto Guzzi, 22 - Mandello del Lario',
    description: 'Trattoria storica frequentata dai dipendenti Guzzi. Cucina casalinga abbondante.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80',
    priceRange: 'budget' as const,
    phone: '+39 0341 456789',
    amenities: ['Cucina Tipica', 'Porzioni Abbondanti', 'Storico'],
    featured: false,
  },
  {
    id: '5',
    name: 'Airbnb Loft Industriale',
    type: 'airbnb' as const,
    rating: 4.8,
    reviewCount: 45,
    address: 'Via Fabbrica, 10 - Mandello del Lario',
    description: 'Loft moderno ricavato da ex officina meccanica. Design industriale unico.',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&q=80',
    priceRange: 'mid' as const,
    amenities: ['Design', 'Cucina', 'Self Check-in'],
    featured: false,
  },
  {
    id: '6',
    name: 'Ristorante Aquila Rossa',
    type: 'restaurant' as const,
    rating: 4.5,
    reviewCount: 178,
    address: 'Piazza del Mercato, 5 - Mandello del Lario',
    description: 'Ristorante elegante con menu degustazione e carta dei vini pregiata.',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80',
    priceRange: 'premium' as const,
    phone: '+39 0341 567890',
    website: 'https://example.com',
    amenities: ['Fine Dining', 'Cantina', 'Eventi'],
    featured: true,
  },
]

const typeConfig = {
  restaurant: { label: 'Ristorante', icon: Utensils },
  hotel: { label: 'Hotel', icon: Hotel },
  bb: { label: 'B&B', icon: Home },
  airbnb: { label: 'Airbnb', icon: Home },
}

const priceLabels = {
  budget: '€',
  mid: '€€',
  premium: '€€€',
}

export default function PartnerPage() {
  const [selectedType, setSelectedType] = useState<string | null>(null)

  const filteredPartners = mockPartners.filter((partner) => {
    return !selectedType || partner.type === selectedType
  })

  const featuredPartners = filteredPartners.filter(p => p.featured)
  const otherPartners = filteredPartners.filter(p => !p.featured)

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
              Partner <span className="text-guzzi-red">Hospitality</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Strutture selezionate e certificate per vivere l'esperienza Mandello 
              con il massimo comfort e autenticità.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white border-b sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4">
            <Filter className="w-5 h-5 text-gray-400" />
            <div className="flex gap-2">
              <button
                onClick={() => setSelectedType(null)}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-all",
                  !selectedType ? "bg-guzzi-red text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                )}
              >
                Tutti
              </button>
              {Object.entries(typeConfig).map(([key, config]) => (
                <button
                  key={key}
                  onClick={() => setSelectedType(key)}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2",
                    selectedType === key ? "bg-guzzi-red text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  )}
                >
                  <config.icon className="w-4 h-4" />
                  {config.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Partners */}
        {featuredPartners.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-display font-bold text-guzzi-black mb-6">
              Partner in <span className="text-guzzi-red">Evidenza</span>
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPartners.map((partner, index) => {
                const typeInfo = typeConfig[partner.type]
                return (
                  <motion.div
                    key={partner.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover flex"
                  >
                    {/* Image */}
                    <div 
                      className="w-1/3 bg-cover bg-center relative"
                      style={{ backgroundImage: `url(${partner.image})` }}
                    >
                      <div className="absolute top-4 left-4">
                        <span className="badge-partner">Partner MOVE GO</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="w-2/3 p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <typeInfo.icon className="w-4 h-4 text-guzzi-red" />
                        <span className="text-sm text-gray-500">{typeInfo.label}</span>
                        <span className="text-sm text-gray-400">•</span>
                        <span className="text-sm font-medium">{priceLabels[partner.priceRange]}</span>
                      </div>

                      <h3 className="text-xl font-semibold text-guzzi-black mb-2">
                        {partner.name}
                      </h3>

                      <div className="flex items-center gap-2 mb-3">
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        <span className="font-semibold">{partner.rating}</span>
                        <span className="text-gray-400">({partner.reviewCount} recensioni)</span>
                      </div>

                      <p className="text-gray-600 text-sm mb-4">{partner.description}</p>

                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                        <MapPin className="w-4 h-4 text-guzzi-red" />
                        <span>{partner.address}</span>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {partner.amenities.map((amenity) => (
                          <span key={amenity} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                            {amenity}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-3">
                        {partner.phone && (
                          <a href={`tel:${partner.phone}`} className="flex items-center gap-1 text-sm text-guzzi-red hover:underline">
                            <Phone className="w-4 h-4" />
                            Chiama
                          </a>
                        )}
                        {partner.website && (
                          <a href={partner.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm text-guzzi-red hover:underline">
                            <Globe className="w-4 h-4" />
                            Sito Web
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </section>
        )}

        {/* All Partners */}
        <section>
          <h2 className="text-2xl font-display font-bold text-guzzi-black mb-6">
            Tutti i Partner ({filteredPartners.length})
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherPartners.map((partner, index) => {
              const typeInfo = typeConfig[partner.type]
              return (
                <motion.div
                  key={partner.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover"
                >
                  {/* Image */}
                  <div className="relative h-48">
                    <div 
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${partner.image})` }}
                    />
                    <div className="absolute top-4 left-4">
                      <span className="badge-partner">Partner MOVE GO</span>
                    </div>
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                      <typeInfo.icon className="w-4 h-4 text-guzzi-red" />
                      <span className="text-sm font-medium">{typeInfo.label}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-guzzi-black mb-2">
                      {partner.name}
                    </h3>
                    
                    <div className="flex items-center gap-2 mb-3">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <span className="font-semibold">{partner.rating}</span>
                      <span className="text-gray-400 text-sm">({partner.reviewCount})</span>
                      <span className="ml-auto text-sm font-medium">{priceLabels[partner.priceRange]}</span>
                    </div>

                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                      <MapPin className="w-4 h-4 text-guzzi-red" />
                      <span className="truncate">{partner.address}</span>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </section>
      </div>

      {/* Become Partner CTA */}
      <div className="bg-gradient-to-r from-guzzi-red to-guzzi-red-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Diventa Partner MOVE GO
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Unisciti alla rete di strutture certificate e raggiungi la community globale 
            dei Guzzisti. Badge esclusivo, visibilità internazionale e supporto dedicato.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contatti?partner=true"
              className="inline-flex items-center justify-center gap-2 bg-white text-guzzi-red hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-all"
            >
              Richiedi Informazioni
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-full font-semibold transition-all"
            >
              Vedi i Piani
            </a>
          </div>
        </div>
      </div>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-guzzi-black mb-4">
              Piani Partner
            </h2>
            <p className="text-gray-600">Scegli il piano più adatto alla tua struttura</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Bronze */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <h3 className="text-xl font-semibold mb-2">Bronze</h3>
              <p className="text-4xl font-bold text-guzzi-black mb-4">€500<span className="text-lg font-normal text-gray-500">/anno</span></p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-sm">
                  <span className="text-green-500">✓</span> Listing base
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <span className="text-green-500">✓</span> Badge Partner MOVE GO
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <span className="text-green-500">✓</span> Supporto email
                </li>
              </ul>
              <button className="w-full py-3 border border-guzzi-red text-guzzi-red rounded-full font-semibold hover:bg-guzzi-red hover:text-white transition-all">
                Inizia
              </button>
            </div>

            {/* Silver */}
            <div className="bg-guzzi-black text-white rounded-2xl p-8 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-guzzi-red text-white text-xs px-3 py-1 rounded-full">
                Più Popolare
              </div>
              <h3 className="text-xl font-semibold mb-2">Silver</h3>
              <p className="text-4xl font-bold mb-4">€1.000<span className="text-lg font-normal text-gray-400">/anno</span></p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-sm">
                  <span className="text-guzzi-red">✓</span> Tutto Bronze +
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <span className="text-guzzi-red">✓</span> Posizionamento premium
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <span className="text-guzzi-red">✓</span> Analytics dashboard
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <span className="text-guzzi-red">✓</span> Supporto prioritario
                </li>
              </ul>
              <button className="w-full py-3 bg-guzzi-red text-white rounded-full font-semibold hover:bg-guzzi-red-dark transition-all">
                Inizia
              </button>
            </div>

            {/* Gold */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <h3 className="text-xl font-semibold mb-2">Gold</h3>
              <p className="text-4xl font-bold text-guzzi-black mb-4">€2.000<span className="text-lg font-normal text-gray-500">/anno</span></p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-sm">
                  <span className="text-green-500">✓</span> Tutto Silver +
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <span className="text-green-500">✓</span> Featured homepage
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <span className="text-green-500">✓</span> Social promotion
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <span className="text-green-500">✓</span> Contenuti branded
                </li>
              </ul>
              <button className="w-full py-3 border border-guzzi-red text-guzzi-red rounded-full font-semibold hover:bg-guzzi-red hover:text-white transition-all">
                Inizia
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
