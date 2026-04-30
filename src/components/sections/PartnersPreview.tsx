'use client'

import { motion } from 'framer-motion'
import { Star, MapPin, Utensils, Hotel, Home, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { useTranslations } from '@/hooks/useTranslations'

const mockPartners = [
  {
    id: '1',
    name: 'Ristorante La Terrazza del Lago',
    type: 'restaurant' as const,
    rating: 4.8,
    reviewCount: 324,
    address: 'Via Lungolago, 15',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&q=80',
    priceRange: 'mid' as const,
  },
  {
    id: '2',
    name: 'Hotel Guzzi Heritage',
    type: 'hotel' as const,
    rating: 4.6,
    reviewCount: 189,
    address: 'Piazza Garibaldi, 8',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&q=80',
    priceRange: 'premium' as const,
  },
  {
    id: '3',
    name: 'B&B Vista Lago',
    type: 'bb' as const,
    rating: 4.9,
    reviewCount: 87,
    address: 'Via Roma, 42',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&q=80',
    priceRange: 'mid' as const,
  },
]

const typeConfig = {
  restaurant: { label: 'Ristorante', icon: Utensils },
  hotel: { label: 'Hotel', icon: Hotel },
  bb: { label: 'B&B', icon: Home },
  airbnb: { label: 'Airbnb', icon: Home },
}

export function PartnersPreview() {
  const { t } = useTranslations()
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-guzzi-black mb-4">
            {t('partners.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('partners.subtitle')}
          </p>
        </motion.div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {mockPartners.map((partner, index) => {
            const typeInfo = typeConfig[partner.type]
            return (
              <motion.div
                key={partner.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover border border-gray-100"
              >
                {/* Image */}
                <div className="relative h-48">
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${partner.image})` }}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="badge-partner">
                      Partner MOVE GO
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                    <typeInfo.icon className="w-4 h-4 text-guzzi-red" />
                    <span className="text-sm font-medium">{typeInfo.label}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-guzzi-black mb-2">
                    {partner.name}
                  </h3>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <span className="font-semibold">{partner.rating}</span>
                    </div>
                    <span className="text-gray-400">•</span>
                    <span className="text-sm text-gray-500">{partner.reviewCount} recensioni</span>
                  </div>

                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <MapPin className="w-4 h-4 text-guzzi-red" />
                    <span>{partner.address}</span>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="/partner"
            className="inline-flex items-center gap-2 bg-guzzi-black hover:bg-guzzi-red text-white px-8 py-4 rounded-full font-semibold transition-all"
          >
            {t('partners.view_all')}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>

        {/* Become Partner CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-guzzi-red to-guzzi-red-dark rounded-3xl p-8 md:p-12 text-white text-center"
        >
          <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
            {t('partners.become_partner')}
          </h3>
          <p className="text-white/80 max-w-2xl mx-auto mb-6">
            Unisciti alla rete di strutture certificate e raggiungi la community globale 
            dei Guzzisti. Badge esclusivo, visibilità internazionale e supporto dedicato.
          </p>
          <Link
            href="/contatti?partner=true"
            className="inline-flex items-center gap-2 bg-white text-guzzi-red hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-all"
          >
            Richiedi Informazioni
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
