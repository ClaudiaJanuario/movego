'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Globe } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useTranslations, notifyLocaleChange } from '@/hooks/useTranslations'

const getNavigation = (t: (key: string) => string) => [
  { name: t('nav.home'), href: '/' },
  { name: t('nav.events'), href: '/eventi' },
  { name: t('nav.history'), href: '/storia' },
  { name: t('nav.literature'), href: '/letteratura' },
  { name: t('nav.partners'), href: '/partner' },
  { name: t('nav.blog'), href: '/blog' },
  { name: t('nav.tours'), href: '/visite' },
  { name: t('nav.bb'), href: '/antica-officina' },
  { name: t('nav.contact'), href: '/contatti' },
]

const languages = [
  { code: 'it', name: 'Italiano' },
  { code: 'en', name: 'English' },
  { code: 'de', name: 'Deutsch' },
  { code: 'es', name: 'Español' },
  { code: 'pt', name: 'Português' },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [langMenuOpen, setLangMenuOpen] = useState(false)
  const [currentLang, setCurrentLang] = useState('it')
  const router = useRouter()
  const { t } = useTranslations()
  const navigation = getNavigation(t)

  useEffect(() => {
    // Get current locale from cookie on mount
    fetch('/api/locale')
      .then(res => res.json())
      .then(data => setCurrentLang(data.locale))
      .catch(() => setCurrentLang('it'))
  }, [])

  const handleLanguageChange = async (langCode: string) => {
    try {
      await fetch('/api/locale', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ locale: langCode }),
      })
      setCurrentLang(langCode)
      setLangMenuOpen(false)
      // Notify all components to reload translations
      notifyLocaleChange()
    } catch (error) {
      console.error('Failed to change language:', error)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-guzzi-black/95 backdrop-blur-md">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src="/images/Gemini_Generated_Image_han7zihan7zihan7.png"
              alt="MOVE GO - Moto Guzzi"
              width={120}
              height={60}
              className="h-12 w-auto object-contain rounded-lg"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-6">
            {navigation.map((item: { name: string; href: string }) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-300 hover:text-guzzi-red transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-guzzi-red transition-all group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Language Selector & Mobile Menu Button */}
          <div className="flex items-center gap-4">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors"
              >
                <Globe className="w-5 h-5" />
                <span className="text-sm uppercase">{currentLang}</span>
              </button>
              
              <AnimatePresence>
                {langMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-xl overflow-hidden"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => handleLanguageChange(lang.code)}
                        className={cn(
                          "w-full px-4 py-2 text-left text-sm hover:bg-gray-100 transition-colors",
                          currentLang === lang.code && "bg-guzzi-red text-white hover:bg-guzzi-red-dark"
                        )}
                      >
                        {lang.name}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-white p-2"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2">
                {navigation.map((item: { name: string; href: string }) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-guzzi-red/20 rounded-lg transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
