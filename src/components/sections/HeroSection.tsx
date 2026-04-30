'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Calendar, MapPin, History } from 'lucide-react'
import Link from 'next/link'
import { useTranslations } from '@/hooks/useTranslations'

export function HeroSection() {
  const { t } = useTranslations()
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/invideo-ai-1080-Velocità-al-Tramonto_-Guzzi-x-Lago-di-Co-2026-02-19.webm" type="video/webm" />
      </video>
      
      {/* Fallback Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat -z-10"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80')`,
        }}
      />
      
      {/* Animated Overlay - Engine Rumble Effect */}
      <div className="hero-overlay absolute inset-0" />
      
      {/* Dynamic Lines Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-guzzi-red/30 to-transparent"
            style={{ top: `${20 + i * 15}%`, width: '100%' }}
            animate={{
              x: ['-100%', '100%'],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Logo/Title */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold text-white mb-6 tracking-tight">
            <span className="inline-block">
              M<span className="text-guzzi-red">O</span>VE
            </span>
            <span className="inline-block ml-2 md:ml-4 text-guzzi-red">
              G<span className="text-white">O</span>
            </span>
          </h1>
          
          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-2xl md:text-3xl lg:text-4xl text-white/90 font-light mb-8"
          >
            {t('hero.slogan')}
          </motion.p>

          {/* Institutional Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="max-w-3xl mx-auto mb-12"
          >
            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
              {t('hero.description')}
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="/eventi"
              className="group flex items-center gap-2 bg-guzzi-red hover:bg-guzzi-red-dark text-white px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:scale-105 rumble-hover"
            >
              <Calendar className="w-5 h-5" />
              {t('hero.cta_events')}
            </Link>
            <Link
              href="/visite"
              className="group flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-full font-semibold text-lg transition-all backdrop-blur-sm"
            >
              <MapPin className="w-5 h-5" />
              {t('hero.cta_tours')}
            </Link>
            <Link
              href="/storia"
              className="group flex items-center gap-2 bg-transparent hover:bg-white/10 text-white border border-guzzi-red px-8 py-4 rounded-full font-semibold text-lg transition-all"
            >
              <History className="w-5 h-5" />
              {t('hero.cta_history')}
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-white/60"
          >
            <ChevronDown className="w-8 h-8" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
