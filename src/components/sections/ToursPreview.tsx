'use client'

import { motion } from 'framer-motion'
import { Clock, Users, Globe, ArrowRight, Calendar } from 'lucide-react'
import Link from 'next/link'
import { useTranslations } from '@/hooks/useTranslations'

const tours = [
  {
    id: '1',
    title: 'Tour Classico Museo Guzzi',
    duration: '2 ore',
    price: 25,
    maxParticipants: 15,
    languages: ['IT', 'EN', 'DE'],
    description: 'Visita guidata completa del Museo Moto Guzzi con accesso esclusivo agli archivi storici.',
  },
  {
    id: '2',
    title: 'Mandello Storica',
    duration: '3 ore',
    price: 35,
    maxParticipants: 12,
    languages: ['IT', 'EN', 'DE', 'ES'],
    description: 'Passeggiata nei luoghi storici della Moto Guzzi: dalla prima officina al lungolago.',
  },
  {
    id: '3',
    title: 'Experience Premium',
    duration: '5 ore',
    price: 75,
    maxParticipants: 8,
    languages: ['IT', 'EN'],
    description: 'Tour esclusivo con accesso alla fabbrica, pranzo tipico e incontro con i custodi della memoria.',
  },
]

export function ToursPreview() {
  const { t } = useTranslations()
  return (
    <section className="py-24 bg-guzzi-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            {t('tours.title')}
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {t('tours.subtitle')}
          </p>
        </motion.div>

        {/* Tours Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {tours.map((tour, index) => (
            <motion.div
              key={tour.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-guzzi-red/50 transition-all"
            >
              <h3 className="text-xl font-semibold mb-3">{tour.title}</h3>
              <p className="text-gray-400 text-sm mb-6">{tour.description}</p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="w-4 h-4 text-guzzi-red" />
                  <span>{t('tours.duration')}: {tour.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Users className="w-4 h-4 text-guzzi-red" />
                  <span>Max {tour.maxParticipants} partecipanti</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Globe className="w-4 h-4 text-guzzi-red" />
                  <span>{tour.languages.join(', ')}</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <div>
                  <span className="text-2xl font-bold text-guzzi-red">€{tour.price}</span>
                  <span className="text-sm text-gray-400">/persona</span>
                </div>
                <Link
                  href={`/visite/${tour.id}`}
                  className="flex items-center gap-1 text-guzzi-red hover:text-white transition-colors text-sm font-medium"
                >
                  {t('tours.book')}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="/visite"
            className="inline-flex items-center gap-2 bg-guzzi-red hover:bg-guzzi-red-dark text-white px-8 py-4 rounded-full font-semibold transition-all"
          >
            <Calendar className="w-5 h-5" />
            {t('common.view_all')}
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
