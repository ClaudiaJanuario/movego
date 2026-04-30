'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Book, Search, ExternalLink, ShoppingCart, Calendar, User } from 'lucide-react'

const mockBooks = [
  {
    id: '1',
    title: 'Moto Guzzi: 100 Anni di Storia',
    author: 'Mario Colombo',
    year: 2021,
    publisher: 'Nada Editore',
    isbn: '978-8879117890',
    synopsis: 'La storia completa della Moto Guzzi nel suo centenario, con foto inedite e testimonianze esclusive.',
    coverUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&q=80',
    purchaseLinks: {
      amazon: 'https://amazon.it',
      publisher: 'https://nadaeditore.it',
    },
    tags: ['storia', 'centenario', 'fotografico'],
  },
  {
    id: '2',
    title: 'Le Mans: La Leggenda Sportiva',
    author: 'Franco Piccinini',
    year: 2018,
    publisher: 'Giorgio Nada Editore',
    isbn: '978-8879116543',
    synopsis: 'Tutto sulla 850 Le Mans, dalla progettazione alle vittorie in pista.',
    coverUrl: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=300&q=80',
    purchaseLinks: {
      amazon: 'https://amazon.it',
    },
    tags: ['Le Mans', 'sportive', 'tecnico'],
  },
  {
    id: '3',
    title: 'V7: Cinquant\'anni di Bicilindrico',
    author: 'Giuseppe Benelli',
    year: 2017,
    publisher: 'Edizioni Savine',
    isbn: '978-8879115678',
    synopsis: 'La storia del motore V7 che ha definito l\'identità Guzzi per sempre.',
    coverUrl: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&q=80',
    purchaseLinks: {
      amazon: 'https://amazon.it',
      other: 'https://ibs.it',
    },
    tags: ['V7', 'motore', 'tecnico'],
  },
  {
    id: '4',
    title: 'Carlo Guzzi: L\'Uomo e il Sogno',
    author: 'Lucia Mandelli',
    year: 2015,
    publisher: 'Mondadori',
    isbn: '978-8804654321',
    synopsis: 'Biografia del fondatore, dalla giovinezza alla creazione dell\'impero.',
    coverUrl: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&q=80',
    purchaseLinks: {
      amazon: 'https://amazon.it',
    },
    tags: ['biografia', 'fondatore', 'storia'],
  },
  {
    id: '5',
    title: 'Mandello del Lario: Terra di Motori',
    author: 'Giovanni Trincavelli',
    year: 2020,
    publisher: 'Edizioni Locali',
    isbn: '978-8879118765',
    synopsis: 'Il territorio che ha dato i natali alla Moto Guzzi, raccontato attraverso arte e memoria.',
    coverUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80',
    purchaseLinks: {
      other: 'https://libreriamandello.it',
    },
    tags: ['territorio', 'arte', 'locale'],
  },
  {
    id: '6',
    title: 'Guzzi Racing: Le Vittorie al TT',
    author: 'Marco Rossi',
    year: 2019,
    publisher: 'Motorbooks',
    isbn: '978-0760365432',
    synopsis: 'Le leggendarie vittorie della Moto Guzzi al Tourist Trophy dell\'Isola di Man.',
    coverUrl: 'https://images.unsplash.com/photo-1589998059171-988d887df646?w=300&q=80',
    purchaseLinks: {
      amazon: 'https://amazon.com',
    },
    tags: ['racing', 'TT', 'competizioni'],
  },
]

export default function LetteraturaPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedTag, setSelectedTag] = useState<string | null>(null)

  const allTags = [...new Set(mockBooks.flatMap(book => book.tags))]

  const filteredBooks = mockBooks.filter((book) => {
    const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesTag = !selectedTag || book.tags.includes(selectedTag)
    return matchesSearch && matchesTag
  })

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
              <span className="text-guzzi-red">Letteratura</span> Guzzi
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Database completo dei libri dedicati alla Moto Guzzi e alla sua storia a Mandello. 
              Ogni titolo verificato e approvato.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white border-b sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Cerca per titolo o autore..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-guzzi-red/50"
              />
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedTag(null)}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
                  !selectedTag ? 'bg-guzzi-red text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                Tutti
              </button>
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
                    selectedTag === tag ? 'bg-guzzi-red text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  #{tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Books Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-6 text-sm text-gray-500">
          {filteredBooks.length} libri trovati
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBooks.map((book, index) => (
            <motion.div
              key={book.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover"
            >
              <div className="flex">
                {/* Cover */}
                <div 
                  className="w-32 h-48 bg-cover bg-center flex-shrink-0"
                  style={{ backgroundImage: `url(${book.coverUrl})` }}
                />
                
                {/* Content */}
                <div className="p-4 flex-1">
                  <h3 className="text-lg font-semibold text-guzzi-black mb-1 line-clamp-2">
                    {book.title}
                  </h3>
                  
                  <div className="flex items-center gap-1 text-sm text-gray-500 mb-2">
                    <User className="w-3 h-3" />
                    <span>{book.author}</span>
                  </div>

                  <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {book.year}
                    </span>
                    <span>{book.publisher}</span>
                  </div>

                  <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                    {book.synopsis}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {book.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Purchase Links */}
              <div className="px-4 pb-4 pt-2 border-t border-gray-100">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">ISBN: {book.isbn}</span>
                  <div className="flex gap-2">
                    {book.purchaseLinks.amazon && (
                      <a
                        href={book.purchaseLinks.amazon}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-xs bg-guzzi-red text-white px-3 py-1 rounded-full hover:bg-guzzi-red-dark transition-colors"
                      >
                        <ShoppingCart className="w-3 h-3" />
                        Amazon
                      </a>
                    )}
                    {book.purchaseLinks.publisher && (
                      <a
                        href={book.purchaseLinks.publisher}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-xs bg-gray-200 text-gray-700 px-3 py-1 rounded-full hover:bg-gray-300 transition-colors"
                      >
                        <ExternalLink className="w-3 h-3" />
                        Editore
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredBooks.length === 0 && (
          <div className="text-center py-16">
            <Book className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">Nessun libro trovato con i filtri selezionati.</p>
          </div>
        )}
      </div>

      {/* Info Banner */}
      <div className="bg-guzzi-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-display font-bold mb-4">
            Suggerisci un <span className="text-guzzi-red">Libro</span>
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto mb-6">
            Conosci un libro sulla Moto Guzzi che non è presente nel nostro database? 
            Segnalacelo! Ogni suggerimento viene verificato prima della pubblicazione.
          </p>
          <a
            href="/contatti?subject=libro"
            className="inline-flex items-center gap-2 bg-guzzi-red hover:bg-guzzi-red-dark text-white px-6 py-3 rounded-full font-semibold transition-all"
          >
            Suggerisci un Libro
          </a>
        </div>
      </div>
    </div>
  )
}
