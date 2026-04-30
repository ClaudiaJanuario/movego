'use client'

import { useState, useEffect, useCallback } from 'react'

type Messages = Record<string, Record<string, string> | string>

const messagesCache: Record<string, Messages> = {}

// Simple event emitter for locale changes
const localeListeners: Set<() => void> = new Set()

export function notifyLocaleChange() {
  localeListeners.forEach(listener => listener())
}

export function useTranslations() {
  const [locale, setLocale] = useState('it')
  const [messages, setMessages] = useState<Messages | null>(null)
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
