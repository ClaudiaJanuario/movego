'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const timeline = [
  {
    year: 1921,
    title: 'La Fondazione',
    description: 'Il 15 marzo 1921, Carlo Guzzi, Giorgio Parodi e Giovanni Ravelli fondano la Società Anonima Moto Guzzi a Mandello del Lario. Il sogno di tre amici diventa realtà sulle rive del Lago di Como.',
    category: 'foundation',
  },
  {
    year: 1924,
    title: 'Prima Vittoria al TT',
    description: 'La Moto Guzzi conquista la sua prima vittoria internazionale al Tourist Trophy dell\'Isola di Man, segnando l\'inizio di una straordinaria carriera sportiva.',
    category: 'achievement',
  },
  {
    year: 1928,
    title: 'La Galleria del Vento',
    description: 'Costruzione della prima galleria del vento per motociclette al mondo. Un\'innovazione rivoluzionaria che dimostra la vocazione tecnologica del marchio.',
    category: 'achievement',
  },
  {
    year: 1934,
    title: 'GT 500 "Norge"',
    description: 'Nasce la GT 500 "Norge", la prima moto turistica di grande successo. Il nome celebra la spedizione al Polo Nord di Giuseppe Guzzi.',
    category: 'model',
  },
  {
    year: 1950,
    title: 'Falcone',
    description: 'Debutta il Falcone, destinato a diventare uno dei modelli più iconici della storia Guzzi. Prodotto per oltre vent\'anni.',
    category: 'model',
  },
  {
    year: 1957,
    title: '8 Cilindri 500',
    description: 'La leggendaria 8 cilindri 500 GP stabilisce il record di velocità per moto di serie: 285 km/h. Un capolavoro di ingegneria.',
    category: 'achievement',
  },
  {
    year: 1967,
    title: 'V7 - La Leggenda',
    description: 'Nasce la V7, il bicilindrico a V trasversale che definirà l\'identità Guzzi per sempre. Un\'icona che continua ancora oggi.',
    category: 'model',
  },
  {
    year: 1971,
    title: 'V7 Sport',
    description: 'La V7 Sport rivoluziona il concetto di sportiva italiana. Design di Lino Tonti, prestazioni da record.',
    category: 'model',
  },
  {
    year: 1976,
    title: 'Le Mans',
    description: 'Debutta la 850 Le Mans, considerata una delle moto più belle mai costruite. Prestazioni e stile senza compromessi.',
    category: 'model',
  },
  {
    year: 1994,
    title: '1100 Sport',
    description: 'La 1100 Sport segna il ritorno alle sportive pure. Design di Luciano Marabese, motore potenziato.',
    category: 'model',
  },
  {
    year: 2004,
    title: 'Acquisizione Piaggio',
    description: 'Il Gruppo Piaggio acquisisce Moto Guzzi, garantendo continuità e investimenti per il futuro del marchio.',
    category: 'foundation',
  },
  {
    year: 2021,
    title: '100 Anni di Storia',
    description: 'Un secolo di passione, innovazione e vittorie. La Moto Guzzi celebra il centenario con eventi mondiali e nuovi modelli.',
    category: 'achievement',
  },
]

const founders = [
  {
    name: 'Carlo Guzzi',
    role: 'Fondatore & Progettista',
    description: 'Genio meccanico e visionario, Carlo Guzzi ha progettato le prime moto e definito il DNA tecnico del marchio.',
  },
  {
    name: 'Giorgio Parodi',
    role: 'Fondatore & Finanziatore',
    description: 'Figlio di un armatore genovese, Giorgio Parodi ha fornito il capitale iniziale e la visione imprenditoriale.',
  },
  {
    name: 'Giovanni Ravelli',
    role: 'Fondatore & Pilota',
    description: 'Asso dell\'aviazione e pilota, Giovanni Ravelli morì prima della fondazione ma il suo spirito vive nel logo dell\'aquila.',
  },
]

export default function StoriaPage() {
  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Hero */}
      <div className="bg-guzzi-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">
              Un Secolo di <span className="text-guzzi-red">Leggenda</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Dal 1921, Mandello del Lario è il cuore pulsante della Moto Guzzi. 
              Una storia di passione, innovazione e coraggio che ha conquistato il mondo.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Founders Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-guzzi-black mb-4">
              I Fondatori
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Tre amici uniti dalla passione per i motori e dal sogno di creare 
              la motocicletta perfetta.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {founders.map((founder, index) => (
              <motion.div
                key={founder.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg text-center"
              >
                <div className="w-24 h-24 rounded-full bg-guzzi-red/10 mx-auto mb-6 flex items-center justify-center">
                  <span className="text-3xl font-display font-bold text-guzzi-red">
                    {founder.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-guzzi-black mb-1">{founder.name}</h3>
                <p className="text-guzzi-red text-sm mb-4">{founder.role}</p>
                <p className="text-gray-600 text-sm">{founder.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-guzzi-black mb-4">
              Timeline Interattiva
            </h2>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-guzzi-red via-guzzi-red/50 to-guzzi-red hidden lg:block -translate-x-1/2" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`lg:flex lg:items-center lg:gap-8 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:text-right lg:pr-12' : 'lg:text-left lg:pl-12'}`}>
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                      <span className="text-4xl font-display font-bold text-guzzi-red">
                        {item.year}
                      </span>
                      <h3 className="text-xl font-semibold text-guzzi-black mt-2 mb-3">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>

                  {/* Center Dot */}
                  <div className="hidden lg:flex items-center justify-center absolute left-1/2 -translate-x-1/2">
                    <div className="w-5 h-5 rounded-full bg-guzzi-red ring-4 ring-white shadow-lg" />
                  </div>

                  <div className="lg:w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Giovanni Trincavelli Section */}
      <section id="trincavelli" className="py-20 bg-guzzi-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <span className="text-guzzi-red font-semibold text-sm uppercase tracking-wider">
                Arte & Tradizione
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-6">
                Le Opere di Giovanni Trincavelli
              </h2>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Giovanni Trincavelli è il custode artistico della memoria di Mandello del Lario 
                e della Moto Guzzi. Le sue opere pittoriche catturano l'essenza del territorio, 
                la passione per i motori e lo spirito di una comunità legata indissolubilmente 
                al marchio dell'aquila.
              </p>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Ogni dipinto racconta una storia: le corse leggendarie, i volti dei fondatori, 
                i paesaggi del lago che hanno ispirato generazioni di ingegneri e piloti. 
                Una galleria unica che unisce arte e passione motociclistica.
              </p>
              <button className="inline-flex items-center gap-2 text-guzzi-red hover:text-white border border-guzzi-red hover:bg-guzzi-red px-6 py-3 rounded-full font-semibold transition-all">
                Esplora la Galleria Completa
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-40 bg-white/10 rounded-xl" />
                <div className="h-56 bg-white/10 rounded-xl" />
              </div>
              <div className="space-y-4 pt-8">
                <div className="h-56 bg-white/10 rounded-xl" />
                <div className="h-40 bg-white/10 rounded-xl" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
