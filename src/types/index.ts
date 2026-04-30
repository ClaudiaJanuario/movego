export interface Event {
  id: string
  title: string
  description: string
  date: string
  endDate?: string
  location: string
  country: string
  type: 'virtual' | 'hybrid' | 'presenziale'
  source: string
  sourceUrl: string
  imageUrl?: string
  tags: string[]
  createdAt: string
}

export interface Book {
  id: string
  title: string
  author: string
  year: number
  publisher: string
  isbn: string
  synopsis: string
  coverUrl?: string
  purchaseLinks: {
    amazon?: string
    publisher?: string
    other?: string
  }
  approved: boolean
  createdAt: string
}

export interface Partner {
  id: string
  name: string
  type: 'restaurant' | 'hotel' | 'bb' | 'airbnb'
  description: string
  address: string
  coordinates: {
    lat: number
    lng: number
  }
  rating: number
  reviewCount: number
  imageUrl: string
  website?: string
  phone?: string
  email?: string
  amenities: string[]
  priceRange: 'budget' | 'mid' | 'premium'
  partnerSince: string
  featured: boolean
}

export interface GuidedTour {
  id: string
  title: string
  description: string
  duration: string
  price: number
  languages: string[]
  maxParticipants: number
  availableDates: string[]
  imageUrl: string
  highlights: string[]
}

export interface TimelineEvent {
  year: number
  title: string
  description: string
  imageUrl?: string
  category: 'foundation' | 'model' | 'person' | 'achievement'
}

export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  author: string
  publishedAt: string
  imageUrl: string
  tags: string[]
  locale: string
}

export interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
  newsletter: boolean
}
