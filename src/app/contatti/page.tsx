'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'

export default function ContattiPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    newsletter: false,
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      {/* Hero */}
      <div className="bg-guzzi-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">
              Contattaci
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Siamo qui per rispondere alle tue domande e aiutarti a vivere 
              l'esperienza MOVE GO al meglio.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-3xl font-display font-bold text-guzzi-black mb-8">
              Informazioni di Contatto
            </h2>

            <div className="space-y-6 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-guzzi-red/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-guzzi-red" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Indirizzo</h3>
                  <p className="text-gray-600">
                    Mandello del Lario (LC)<br />
                    Lago di Como, Italia
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-guzzi-red/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-guzzi-red" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <a href="mailto:info@movego.it" className="text-guzzi-red hover:underline">
                    info@movego.it
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-guzzi-red/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-guzzi-red" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Telefono</h3>
                  <a href="tel:+390341000000" className="text-guzzi-red hover:underline">
                    +39 0341 000 000
                  </a>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-200 rounded-2xl h-64 flex items-center justify-center">
              <p className="text-gray-500">Mappa Interattiva</p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            {submitted ? (
              <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold mb-2">Messaggio Inviato!</h3>
                <p className="text-gray-600">
                  Grazie per averci contattato. Ti risponderemo il prima possibile.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-display font-bold text-guzzi-black mb-6">
                  Invia un Messaggio
                </h2>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-guzzi-red/50"
                      placeholder="Il tuo nome"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-guzzi-red/50"
                      placeholder="la.tua@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Oggetto *
                    </label>
                    <select
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-guzzi-red/50"
                    >
                      <option value="">Seleziona un argomento</option>
                      <option value="info">Informazioni Generali</option>
                      <option value="visite">Visite Guidate</option>
                      <option value="partner">Diventa Partner</option>
                      <option value="eventi">Eventi</option>
                      <option value="altro">Altro</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Messaggio *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-guzzi-red/50 resize-none"
                      placeholder="Scrivi il tuo messaggio..."
                    />
                  </div>

                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="newsletter"
                      checked={formData.newsletter}
                      onChange={(e) => setFormData({ ...formData, newsletter: e.target.checked })}
                      className="w-4 h-4 text-guzzi-red border-gray-300 rounded focus:ring-guzzi-red"
                    />
                    <label htmlFor="newsletter" className="text-sm text-gray-600">
                      Iscrivimi alla newsletter internazionale MOVE GO
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-guzzi-red hover:bg-guzzi-red-dark text-white px-6 py-4 rounded-lg font-semibold transition-all"
                  >
                    <Send className="w-5 h-5" />
                    Invia Messaggio
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
