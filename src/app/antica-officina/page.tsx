'use client'

import { motion } from 'framer-motion'
import { Quote, MapPin, Phone, Mail, Calendar, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function AnticaOfficinaPage() {
  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Hero */}
      <div className="relative h-[60vh] min-h-[400px]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url('/images/b&b.jpg')` 
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="inline-block bg-guzzi-red text-white text-sm px-4 py-1 rounded-full mb-4">
                Luogo Storico
              </span>
              <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">
                Antica Officina B&B
              </h1>
              <p className="text-xl text-white/80 max-w-2xl">
                Dove nacque la leggenda Moto Guzzi
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Story */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {/* Quote */}
              <div className="relative mb-12 bg-gray-50 rounded-2xl p-8">
                <Quote className="absolute top-4 left-4 w-12 h-12 text-guzzi-red/20" />
                <p className="text-2xl text-gray-700 italic pl-8 leading-relaxed">
                  "Qui, in questa piccola officina affacciata sul lago, Carlo Guzzi 
                  e Giorgio Parodi hanno trasformato un sogno in una leggenda che 
                  ha conquistato il mondo."
                </p>
              </div>

              {/* Story */}
              <h2 className="text-3xl font-display font-bold text-guzzi-black mb-6">
                La Storia
              </h2>
              
              <div className="prose prose-lg max-w-none text-gray-600">
                <p>
                  Nel cuore di Mandello del Lario, esattamente dove oggi sorge l' 
                  <strong>Antica Officina B&B</strong>, si trovava la prima officina della Moto Guzzi. 
                  Era il 1921 quando tre giovani amici — Carlo Guzzi, Giorgio Parodi e 
                  Giovanni Ravelli — decisero di dare vita al loro sogno.
                </p>
                
                <p>
                  Questo luogo sacro per ogni Guzzista è oggi custodito con amore e dedizione 
                  da <strong>Nena Matos</strong> e <strong>Giovanni Trincavelli</strong>, 
                  che ne preservano la memoria storica e l'atmosfera autentica.
                </p>

                <p>
                  Ogni angolo di questa struttura racconta storie di passione, innovazione 
                  e coraggio. Le pareti conservano l'eco dei primi motori, le finestre 
                  si affacciano sullo stesso lago che ispirò i fondatori, e l'aria 
                  è ancora impregnata di quel sogno che ha cambiato la storia delle due ruote.
                </p>

                <p>
                  Dormire qui significa immergersi nella storia viva della Moto Guzzi, 
                  circondati da cimeli, fotografie d'epoca e i racconti dei custodi 
                  di questa tradizione unica al mondo.
                </p>
              </div>

              {/* Protagonists */}
              <h2 className="text-3xl font-display font-bold text-guzzi-black mt-12 mb-6">
                I Custodi della Memoria
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-2xl p-6">
                  <div className="w-20 h-20 rounded-full bg-guzzi-red/10 mb-4 flex items-center justify-center">
                    <span className="text-2xl font-display font-bold text-guzzi-red">NM</span>
                  </div>
                  <h3 className="text-xl font-semibold text-guzzi-black mb-2">Nena Matos</h3>
                  <p className="text-sm text-guzzi-red mb-3">Custode della Memoria</p>
                  <p className="text-gray-600 text-sm">
                    Con passione e dedizione, Nena accoglie visitatori da tutto il mondo, 
                    condividendo storie e aneddoti tramandati di generazione in generazione.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-2xl p-6">
                  <div className="w-20 h-20 rounded-full bg-guzzi-red/10 mb-4 flex items-center justify-center">
                    <span className="text-2xl font-display font-bold text-guzzi-red">GT</span>
                  </div>
                  <h3 className="text-xl font-semibold text-guzzi-black mb-2">Giovanni Trincavelli</h3>
                  <p className="text-sm text-guzzi-red mb-3">Artista & Narratore</p>
                  <p className="text-gray-600 text-sm">
                    Artista e narratore, Giovanni immortala attraverso le sue opere pittoriche 
                    l'essenza della Moto Guzzi e del territorio lariano.
                  </p>
                </div>
              </div>

              {/* Gallery */}
              <h2 className="text-3xl font-display font-bold text-guzzi-black mt-12 mb-6">
                Galleria
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { src: '/images/gallery/antica-officina-b-b.jpg', alt: 'Antica Officina B&B - Esterno' },
                  { src: '/images/gallery/480445_636330356393190_2088580822_n.jpg', alt: 'Facciata con persiane verdi' },
                  { src: '/images/gallery/caption.jpg', alt: 'Camera da letto' },
                  { src: '/images/gallery/486389_637068116319414_448985603_n.jpg', alt: 'Cantina storica' },
                  { src: '/images/gallery/421271_676173029075589_910102445_n.jpg', alt: 'Ingresso Moto Guzzi' },
                  { src: '/images/gallery/10645153_982210335138522_553731386342409386_n.jpg', alt: 'Cortile interno' },
                  { src: '/images/gallery/10515286_939173946108828_7971175168429370867_o.jpg', alt: 'Vista esterna' },
                  { src: '/images/gallery/bb.jpg', alt: 'B&B panoramica' },
                  { src: '/images/gallery/kitchen.jpg', alt: 'Cucina' },
                  { src: '/images/gallery/motociclette via Cavour.jpg', alt: 'Motociclette Via Cavour' },
                  { src: '/images/gallery/z_20240418_022834612_8607666.webp', alt: 'Dettaglio interno' },
                  { src: '/images/gallery/z_20240418_023108590_6539123.webp', alt: 'Ambiente storico' },
                ].map((img, i) => (
                  <div 
                    key={i} 
                    className="aspect-square bg-cover bg-center rounded-xl hover:scale-105 transition-transform cursor-pointer"
                    style={{ backgroundImage: `url('${img.src}')` }}
                    title={img.alt}
                  />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="sticky top-28"
            >
              {/* Booking Card */}
              <div className="bg-guzzi-black text-white rounded-2xl p-6 mb-6">
                <h3 className="text-xl font-semibold mb-4">Prenota il tuo Soggiorno</h3>
                <p className="text-gray-400 text-sm mb-6">
                  Vivi l'esperienza unica di dormire dove nacque la Moto Guzzi.
                </p>
                <Link
                  href="/contatti?subject=antica-officina"
                  className="flex items-center justify-center gap-2 w-full bg-guzzi-red hover:bg-guzzi-red-dark text-white py-3 rounded-full font-semibold transition-all"
                >
                  <Calendar className="w-5 h-5" />
                  Richiedi Disponibilità
                </Link>
              </div>

              {/* Contact Info */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-guzzi-black mb-4">Contatti</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-guzzi-red flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Indirizzo</p>
                      <p className="text-sm text-gray-600">
                        Via dell'Officina, 1<br />
                        Mandello del Lario (LC)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-guzzi-red flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Telefono</p>
                      <a href="tel:+390341000000" className="text-sm text-guzzi-red hover:underline">
                        +39 0341 000 000
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-guzzi-red flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Email</p>
                      <a href="mailto:info@anticaofficina.it" className="text-sm text-guzzi-red hover:underline">
                        info@bbdanena.it
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Interactive Map */}
              <div className="rounded-2xl overflow-hidden mt-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2773.8!2d9.3167!3d45.9167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786e5c0a0a0a0a0%3A0x0!2sMandello%20del%20Lario!5e0!3m2!1sit!2sit!4v1600000000000!5m2!1sit!2sit"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mappa Antica Officina B&B"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-guzzi-red to-guzzi-red-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Un'Esperienza Unica
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Non è solo un B&B. È un viaggio nel tempo, un pellegrinaggio alle origini 
            della Moto Guzzi. Prenota il tuo soggiorno e vivi la storia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contatti?subject=antica-officina"
              className="inline-flex items-center justify-center gap-2 bg-white text-guzzi-red hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-all"
            >
              Prenota Ora
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/storia"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-full font-semibold transition-all"
            >
              Scopri la Storia Guzzi
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
