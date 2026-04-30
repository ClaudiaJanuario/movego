'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Calendar, MapPin, ExternalLink, Globe, Users, Monitor, Loader2 } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { useTranslations } from '@/hooks/useTranslations'

interface GuzziEvent {
  id: string
  title: string
  date: string
  endDate?: string
  location: string
  country: string
  type: 'presenziale' | 'virtual' | 'hybrid'
  source: string
  description: string
  link: string
}

const typeConfig = {
  virtual: { label: 'Virtuale', icon: Monitor, className: 'badge-virtual' },
  hybrid: { label: 'Ibrido', icon: Globe, className: 'badge-hybrid' },
  presenziale: { label: 'Presenziale', icon: Users, className: 'badge-presenziale' },
}

export function EventsPreview() {
  const { t } = useTranslations()
  const [events, setEvents] = useState<GuzziEvent[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('/api/events')
        const data = await response.json()
        setEvents(data.events || [])
      } catch (error) {
        console.error('Failed to fetch events:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchEvents()
  }, [])
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-guzzi-black mb-4">
            {t('events.title')} <span className="text-guzzi-red">Real-Time</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('events.ai_powered')} - {t('events.subtitle')}
          </p>
        </motion.div>

        {/* Events Grid */}
        {loading ? (
          <div className="flex justify-center items-center py-12">
            <Loader2 className="w-8 h-8 text-guzzi-red animate-spin" />
          </div>
        ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {events.map((event: GuzziEvent, index: number) => {
            const typeInfo = typeConfig[event.type]
            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover"
              >
                <div className="p-6">
                  {/* Type Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={cn('badge-partner flex items-center gap-1', typeInfo.className)}>
                      <typeInfo.icon className="w-3 h-3" />
                      {typeInfo.label}
                    </span>
                    <span className="text-xs text-gray-500">{event.country}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-guzzi-black mb-2 line-clamp-2">
                    {event.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {event.description}
                  </p>

                  {/* Date & Location */}
                  <div className="space-y-2 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-guzzi-red" />
                      <span>{new Date(event.date).toLocaleDateString('it-IT', { 
                        day: 'numeric', 
                        month: 'short', 
                        year: 'numeric' 
                      })}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-guzzi-red" />
                      <span>{event.location}</span>
                    </div>
                  </div>

                  {/* Source */}
                  <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-xs text-gray-400">Fonte: {event.source}</span>
                    <a 
                      href={event.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-guzzi-red hover:text-guzzi-red-dark transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="/eventi"
            className="inline-flex items-center gap-2 bg-guzzi-red hover:bg-guzzi-red-dark text-white px-8 py-4 rounded-full font-semibold transition-all"
          >
            {t('events.view_all')}
            <ExternalLink className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
