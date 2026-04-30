'use client'

import Link from 'next/link'
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react'
import { useTranslations } from '@/hooks/useTranslations'

const getFooterLinks = (t: (key: string) => string) => ({
  explore: [
    { name: t('nav.events'), href: '/eventi' },
    { name: t('nav.history'), href: '/storia' },
    { name: t('nav.literature'), href: '/letteratura' },
    { name: t('nav.blog'), href: '/blog' },
  ],
  services: [
    { name: t('nav.tours'), href: '/visite' },
    { name: t('nav.partners'), href: '/partner' },
    { name: t('nav.bb'), href: '/antica-officina' },
    { name: t('nav.contact'), href: '/contatti' },
  ],
  legal: [
    { name: t('footer.privacy'), href: '/privacy' },
    { name: t('footer.terms'), href: '/termini' },
    { name: t('footer.cookies'), href: '/cookie' },
  ],
})

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
  { name: 'YouTube', icon: Youtube, href: '#' },
]

export function Footer() {
  const { t } = useTranslations()
  const footerLinks = getFooterLinks(t)
  
  return (
    <footer className="bg-guzzi-black text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <span className="text-3xl font-display font-bold">
                M<span className="text-guzzi-red">O</span>VE
                <span className="text-guzzi-red ml-1">G</span>O
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t('footer.description')}
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-guzzi-red transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{t('footer.quick_links')}</h3>
            <ul className="space-y-3">
              {footerLinks.explore.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-guzzi-red transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{t('nav.tours')}</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-guzzi-red transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{t('footer.contact')}</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-guzzi-red flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  Mandello del Lario (LC)<br />
                  Lago di Como, Italia
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-guzzi-red flex-shrink-0" />
                <a href="mailto:info@movego.it" className="text-gray-400 hover:text-white transition-colors text-sm">
                  info@movego.it
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-guzzi-red flex-shrink-0" />
                <a href="tel:+390341000000" className="text-gray-400 hover:text-white transition-colors text-sm">
                  +39 0341 000 000
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} MOVE GO. {t('footer.rights')}.
            </p>
            <div className="flex gap-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-500 hover:text-white text-sm transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
