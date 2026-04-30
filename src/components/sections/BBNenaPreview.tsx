'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Quote } from 'lucide-react'
import Link from 'next/link'
import { useTranslations } from '@/hooks/useTranslations'

export function BBNenaPreview() {
  const { t } = useTranslations()
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div 
                className="h-96 lg:h-[500px] bg-cover bg-center"
                style={{ 
                  backgroundImage: `url('/images/b&b.jpg')` 
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-guzzi-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="badge-partner">{t('bb.historic_place')}</span>
              </div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-guzzi-red text-white p-6 rounded-2xl shadow-xl hidden lg:block">
              <p className="text-4xl font-display font-bold">1921</p>
              <p className="text-sm opacity-80">Anno di Fondazione</p>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:pl-8"
          >
            <span className="text-guzzi-red font-semibold text-sm uppercase tracking-wider">
              Antica Officina Moto Guzzi
            </span>
            
            <h2 className="text-4xl md:text-5xl font-display font-bold text-guzzi-black mt-3 mb-6">
              {t('bb.title')}
            </h2>
            
            <div className="relative mb-8">
              <Quote className="absolute -top-2 -left-4 w-8 h-8 text-guzzi-red/20" />
              <p className="text-xl text-gray-600 italic pl-6">
                "Dove nacque la prima officina Moto Guzzi, oggi rivive la memoria 
                di un sogno che ha conquistato il mondo."
              </p>
            </div>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Nel cuore di Mandello del Lario, l'<strong>Antica Officina B&B</strong> sorge 
              esattamente dove Carlo Guzzi e Giorgio Parodi diedero vita al loro sogno. 
              Questo luogo sacro per ogni Guzzista è oggi custodito con amore da 
              <strong> Nena Matos</strong> e <strong>Giovanni Trincavelli</strong>, 
              che ne preservano la memoria storica e l'atmosfera autentica.
            </p>

            <p className="text-gray-600 mb-8 leading-relaxed">
              Ogni angolo racconta storie di passione, innovazione e coraggio. 
              Dormire qui significa immergersi nella storia viva della Moto Guzzi, 
              circondati da cimeli, fotografie d'epoca e i racconti dei custodi 
              di questa tradizione unica al mondo.
            </p>

            {/* Protagonists */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-3 bg-gray-100 rounded-full px-4 py-2">
                <div className="w-10 h-10 rounded-full bg-guzzi-red/20" />
                <div>
                  <p className="font-semibold text-sm">Nena Matos</p>
                  <p className="text-xs text-gray-500">Custode della Memoria</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-gray-100 rounded-full px-4 py-2">
                <div className="w-10 h-10 rounded-full bg-guzzi-red/20" />
                <div>
                  <p className="font-semibold text-sm">Giovanni Trincavelli</p>
                  <p className="text-xs text-gray-500">Artista & Narratore</p>
                </div>
              </div>
            </div>

            <Link
              href="/antica-officina"
              className="inline-flex items-center gap-2 bg-guzzi-red hover:bg-guzzi-red-dark text-white px-8 py-4 rounded-full font-semibold transition-all"
            >
              {t('bb.discover')}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
