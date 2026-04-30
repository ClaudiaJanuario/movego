'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { useTranslations } from '@/hooks/useTranslations'

const timelineHighlights = [
  {
    year: 1921,
    title: 'La Fondazione',
    description: 'Carlo Guzzi, Giorgio Parodi e Giovanni Ravelli fondano la Società Anonima Moto Guzzi a Mandello del Lario.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80',
  },
  {
    year: 1928,
    title: 'La Galleria del Vento',
    description: 'Costruzione della prima galleria del vento per motociclette al mondo.',
    image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=400&q=80',
  },
  {
    year: 1967,
    title: 'V7 - La Leggenda',
    description: 'Nasce la V7, il bicilindrico a V che definirà l\'identità Guzzi per sempre.',
    image: 'https://images.unsplash.com/photo-1558981359-219d6364c9c8?w=400&q=80',
  },
  {
    year: 2021,
    title: '100 Anni di Storia',
    description: 'Un secolo di passione, innovazione e vittorie. La leggenda continua.',
    image: 'https://images.unsplash.com/photo-1558981285-6f0c94958bb6?w=400&q=80',
  },
]

export function HistoryPreview() {
  const { t } = useTranslations()
  return (
    <section className="py-24 bg-guzzi-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            {t('history.title')}
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {t('history.subtitle')}
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-guzzi-red via-guzzi-red/50 to-transparent hidden lg:block" />

          <div className="space-y-12 lg:space-y-0">
            {timelineHighlights.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`lg:flex lg:items-center lg:gap-12 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                    <span className="text-5xl font-display font-bold text-guzzi-red">
                      {item.year}
                    </span>
                    <h3 className="text-2xl font-semibold mt-2 mb-3">{item.title}</h3>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </div>

                {/* Center Dot */}
                <div className="hidden lg:flex items-center justify-center w-8">
                  <div className="w-4 h-4 rounded-full bg-guzzi-red ring-4 ring-guzzi-red/30" />
                </div>

                {/* Image Placeholder */}
                <div className="lg:w-1/2 mt-4 lg:mt-0">
                  <div 
                    className="h-48 rounded-2xl bg-cover bg-center"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link
            href="/storia"
            className="inline-flex items-center gap-2 text-guzzi-red hover:text-white border border-guzzi-red hover:bg-guzzi-red px-8 py-4 rounded-full font-semibold transition-all"
          >
            {t('history.discover')}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>

        {/* Giovanni Trincavelli Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 bg-gradient-to-r from-guzzi-red/20 to-transparent rounded-3xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-guzzi-red font-semibold text-sm uppercase tracking-wider">
                Arte & Tradizione
              </span>
              <h3 className="text-3xl font-display font-bold mt-2 mb-4">
                Le Opere di Giovanni Trincavelli
              </h3>
              <p className="text-gray-400 mb-6">
                Custode della memoria storica di Mandello, Giovanni Trincavelli ha immortalato 
                attraverso le sue opere pittoriche l'essenza della Moto Guzzi e del territorio. 
                Una galleria unica che unisce arte e passione motociclistica.
              </p>
              <Link
                href="/storia#trincavelli"
                className="inline-flex items-center gap-2 text-guzzi-red hover:text-white transition-colors"
              >
                Scopri la Galleria
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="h-32 bg-white/10 rounded-xl" />
              <div className="h-32 bg-white/10 rounded-xl" />
              <div className="h-32 bg-white/10 rounded-xl" />
              <div className="h-32 bg-white/10 rounded-xl" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
