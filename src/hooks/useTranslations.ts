'use client'

import { useState, useEffect, useCallback } from 'react'

type Messages = Record<string, Record<string, string> | string>

const messagesCache: Record<string, Messages> = {}

// Default Italian translations (fallback)
const defaultMessages: Messages = {
  nav: {
    home: 'Home',
    events: 'Eventi',
    history: 'Storia',
    literature: 'Letteratura',
    partners: 'Partner',
    blog: 'Blog',
    tours: 'Visite Guidate',
    bb: 'Antica Officina B&B',
    contact: 'Contatti'
  },
  hero: {
    slogan: "L'anima Guzzi, Every Way You Go.",
    description: "Nel cuore del Lago di Como, dove nel 1921 nacque una leggenda su due ruote.",
    cta_events: 'Scopri gli Eventi',
    cta_tours: 'Prenota Visita',
    cta_history: 'Esplora la Storia'
  },
  events: {
    title: 'Eventi',
    subtitle: 'Scopri tutti gli eventi del mondo Moto Guzzi',
    ai_powered: 'Aggregazione AI Real-Time',
    view_all: 'Vedi Tutti gli Eventi'
  },
  history: {
    title: 'La Storia',
    subtitle: 'Un secolo di passione e innovazione',
    discover: 'Scopri la Storia Completa'
  },
  partners: {
    title: 'Partner Hospitality',
    subtitle: 'Strutture certificate',
    become_partner: 'Diventa Partner',
    view_all: 'Vedi Tutti i Partner'
  },
  tours: {
    title: 'Visite Guidate',
    subtitle: 'Esplora Mandello con guide esperte',
    book: 'Prenota',
    duration: 'Durata'
  },
  bb: {
    title: 'Antica Officina B&B',
    historic_place: 'Luogo Storico',
    discover: 'Scopri la Storia Completa'
  },
  common: {
    read_more: 'Leggi di più',
    book_now: 'Prenota Ora',
    contact_us: 'Contattaci',
    view_all: 'Vedi Tutti'
  },
  footer: {
    description: 'Piattaforma turistica digitale per Mandello del Lario',
    rights: 'Tutti i diritti riservati',
    privacy: 'Privacy Policy',
    terms: 'Termini e Condizioni'
  }
}

// Simple event emitter for locale changes
const localeListeners: Set<() => void> = new Set()

export function notifyLocaleChange() {
  localeListeners.forEach(listener => listener())
}

export function useTranslations() {
  const [locale, setLocale] = useState('it')
  const [messages, setMessages] = useState<Messages>(defaultMessages)
  const [loading, setLoading] = useState(true)
  const [refreshKey, setRefreshKey] = useState(0)

  const loadMessages = useCallback(async () => {
    setLoading(true)
    try {
      // Get current locale from cookie
      const localeRes = await fetch('/api/locale')
      const { locale: currentLocale } = await localeRes.json()
      setLocale(currentLocale || 'it')

      const localeToUse = currentLocale || 'it'

      // Load messages
      if (!messagesCache[localeToUse]) {
        const msgModule = await import(`../messages/${localeToUse}.json`)
        messagesCache[localeToUse] = msgModule.default
      }
      
      setMessages(messagesCache[localeToUse])
    } catch (error) {
      // Fallback to Italian
      if (!messagesCache['it']) {
        const msgModule = await import('../messages/it.json')
        messagesCache['it'] = msgModule.default
      }
      setMessages(messagesCache['it'])
      setLocale('it')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    loadMessages()
    
    // Subscribe to locale changes
    const handleLocaleChange = () => {
      setRefreshKey(prev => prev + 1)
    }
    localeListeners.add(handleLocaleChange)
    
    return () => {
      localeListeners.delete(handleLocaleChange)
    }
  }, [loadMessages])

  // Reload when refreshKey changes
  useEffect(() => {
    if (refreshKey > 0) {
      loadMessages()
    }
  }, [refreshKey, loadMessages])

  const t = (key: string): string => {
    if (!messages) return key
    
    const keys = key.split('.')
    let value: unknown = messages
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = (value as Record<string, unknown>)[k]
      } else {
        return key
      }
    }
    
    return typeof value === 'string' ? value : key
  }

  return { t, locale, loading, messages }
}
