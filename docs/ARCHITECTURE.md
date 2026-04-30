# MOVE GO - Architettura Tecnica

## 🏗️ Panoramica Architetturale

MOVE GO è una piattaforma turistica digitale real-time costruita con un'architettura moderna, scalabile e orientata agli eventi.

```
┌─────────────────────────────────────────────────────────────────┐
│                         CDN (CloudFlare)                        │
└─────────────────────────────────────────────────────────────────┘
                                  │
┌─────────────────────────────────────────────────────────────────┐
│                    Frontend (Next.js 14)                        │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐               │
│  │   Pages     │ │ Components  │ │   i18n      │               │
│  │   (App)     │ │  (React)    │ │ (next-intl) │               │
│  └─────────────┘ └─────────────┘ └─────────────┘               │
└─────────────────────────────────────────────────────────────────┘
                                  │
┌─────────────────────────────────────────────────────────────────┐
│                    API Gateway (Next.js API)                    │
└─────────────────────────────────────────────────────────────────┘
                                  │
        ┌─────────────────────────┼─────────────────────────┐
        │                         │                         │
┌───────▼───────┐       ┌─────────▼─────────┐     ┌────────▼────────┐
│  Microservizi │       │   Real-Time       │     │   AI Services   │
│               │       │   Engine          │     │                 │
│ • Events      │       │ • WebSocket       │     │ • NLP Search    │
│ • Booking     │       │ • Socket.IO       │     │ • Translation   │
│ • Partners    │       │ • Notifications   │     │ • Aggregation   │
│ • CMS         │       │                   │     │ • Moderation    │
└───────────────┘       └───────────────────┘     └─────────────────┘
        │                         │                         │
        └─────────────────────────┼─────────────────────────┘
                                  │
┌─────────────────────────────────────────────────────────────────┐
│                      Data Layer                                  │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐               │
│  │ PostgreSQL  │ │   Redis     │ │ Elasticsearch│               │
│  │  (Primary)  │ │  (Cache)    │ │  (Search)    │               │
│  └─────────────┘ └─────────────┘ └─────────────┘               │
└─────────────────────────────────────────────────────────────────┘
```

---

## 🖥️ Stack Tecnologico

### Frontend
| Tecnologia | Versione | Scopo |
|------------|----------|-------|
| **Next.js** | 14.x | Framework React con SSR/SSG |
| **React** | 18.x | UI Library |
| **TypeScript** | 5.x | Type Safety |
| **TailwindCSS** | 3.x | Styling |
| **Framer Motion** | 11.x | Animazioni |
| **next-intl** | 3.x | Internazionalizzazione |
| **Zustand** | 4.x | State Management |
| **Socket.IO Client** | 4.x | Real-time Communication |

### Backend
| Tecnologia | Versione | Scopo |
|------------|----------|-------|
| **Node.js** | 20.x LTS | Runtime |
| **Express/Fastify** | Latest | API Framework |
| **Socket.IO** | 4.x | WebSocket Server |
| **Prisma** | 5.x | ORM |
| **Bull** | 4.x | Job Queue |

### Database & Cache
| Tecnologia | Scopo |
|------------|-------|
| **PostgreSQL** | Database primario relazionale |
| **Redis** | Caching, sessioni, pub/sub |
| **Elasticsearch** | Full-text search, aggregazioni |

### AI & ML
| Servizio | Scopo |
|----------|-------|
| **OpenAI GPT-4** | NLP, traduzione, moderazione |
| **Custom Crawler** | Aggregazione news/eventi |
| **Semantic Search** | Ricerca intelligente contenuti |

### Cloud & DevOps
| Servizio | Scopo |
|----------|-------|
| **AWS/Azure** | Cloud Infrastructure |
| **Kubernetes** | Container Orchestration |
| **CloudFlare** | CDN, DDoS Protection |
| **GitHub Actions** | CI/CD |
| **Terraform** | Infrastructure as Code |

---

## 📡 Sistema Eventi Real-Time

### Architettura Aggregazione AI

```
┌─────────────────────────────────────────────────────────────────┐
│                    NEWS AGGREGATION PIPELINE                     │
└─────────────────────────────────────────────────────────────────┘

┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│  RSS Feeds  │    │  News APIs  │    │  Web Scraper│
│  (Google,   │    │  (NewsAPI,  │    │  (Puppeteer)│
│   Bing)     │    │   GDELT)    │    │             │
└──────┬──────┘    └──────┬──────┘    └──────┬──────┘
       │                  │                  │
       └──────────────────┼──────────────────┘
                          │
                          ▼
              ┌───────────────────────┐
              │   INGESTION SERVICE   │
              │   (Bull Queue)        │
              └───────────┬───────────┘
                          │
                          ▼
              ┌───────────────────────┐
              │   NLP FILTER          │
              │   Keywords:           │
              │   • "Moto Guzzi"      │
              │   • "Mandello"        │
              │   • "Guzzi"           │
              └───────────┬───────────┘
                          │
                          ▼
              ┌───────────────────────┐
              │   AI CLASSIFICATION   │
              │   • Event Type        │
              │   • Location          │
              │   • Date Extraction   │
              │   • Deduplication     │
              └───────────┬───────────┘
                          │
                          ▼
              ┌───────────────────────┐
              │   MODERATION QUEUE    │
              │   (Auto + Manual)     │
              └───────────┬───────────┘
                          │
                          ▼
              ┌───────────────────────┐
              │   PUBLICATION         │
              │   • Database          │
              │   • WebSocket Push    │
              │   • Cache Invalidate  │
              └───────────────────────┘
```

### API Endpoints Eventi

```typescript
// GET /api/events
// Query params: country, type, dateFrom, dateTo, search
{
  events: Event[],
  total: number,
  page: number,
  hasMore: boolean
}

// WebSocket: events:new
// Real-time push di nuovi eventi
{
  type: 'EVENT_CREATED',
  payload: Event
}
```

---

## 🌍 Sistema Multilingua

### Architettura i18n

```
┌─────────────────────────────────────────────────────────────────┐
│                    TRANSLATION PIPELINE                          │
└─────────────────────────────────────────────────────────────────┘

┌─────────────┐         ┌─────────────┐         ┌─────────────┐
│   Content   │         │  AI Trans   │         │   Cache     │
│   (IT)      │────────▶│  (GPT-4)    │────────▶│  (Redis)    │
└─────────────┘         └─────────────┘         └─────────────┘
                                                       │
                                                       ▼
                                                ┌─────────────┐
                                                │   CDN       │
                                                │  (Static)   │
                                                └─────────────┘
```

### Lingue Supportate
- 🇮🇹 Italiano (default)
- 🇬🇧 English
- 🇩🇪 Deutsch
- 🇪🇸 Español
- 🇵🇹 Português

---

## 📚 CMS Headless - Letteratura

### Workflow Approvazione

```
┌─────────────┐    ┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│   ISBN API  │    │   Draft     │    │   Review    │    │  Published  │
│   Import    │───▶│   Queue     │───▶│   (Manual)  │───▶│   Live      │
└─────────────┘    └─────────────┘    └─────────────┘    └─────────────┘
                          │                  │
                          │                  │
                          ▼                  ▼
                   ┌─────────────┐    ┌─────────────┐
                   │   Rejected  │    │   Revision  │
                   │             │    │   Request   │
                   └─────────────┘    └─────────────┘
```

### Integrazioni API
- **Open Library API** - Metadati libri
- **Google Books API** - Copertine, descrizioni
- **Amazon Product API** - Link acquisto
- **ISBN Database** - Validazione ISBN

---

## 🏨 Sistema Partner Hospitality

### Integrazione Recensioni

```typescript
interface PartnerReview {
  source: 'google' | 'tripadvisor' | 'booking';
  rating: number;
  reviewCount: number;
  lastUpdated: Date;
}

// Aggregazione media ponderata
const aggregatedRating = calculateWeightedAverage([
  { source: 'google', weight: 0.4 },
  { source: 'tripadvisor', weight: 0.35 },
  { source: 'booking', weight: 0.25 }
]);
```

### API Integrate
- **Google Places API** - Recensioni, orari, foto
- **TripAdvisor API** - Rating, recensioni
- **Booking.com API** - Disponibilità, prezzi

---

## 📅 Sistema Booking Visite

### Architettura Prenotazioni

```
┌─────────────────────────────────────────────────────────────────┐
│                    BOOKING SYSTEM                                │
└─────────────────────────────────────────────────────────────────┘

┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│   Calendar  │    │   Slots     │    │   Payment   │
│   Service   │───▶│   Manager   │───▶│   Gateway   │
└─────────────┘    └─────────────┘    └─────────────┘
                          │                  │
                          ▼                  ▼
                   ┌─────────────┐    ┌─────────────┐
                   │   Booking   │    │   Stripe    │
                   │   Confirm   │    │   Webhook   │
                   └─────────────┘    └─────────────┘
                          │
                          ▼
                   ┌─────────────┐
                   │   QR Ticket │
                   │   Generator │
                   └─────────────┘
```

### Flusso Prenotazione
1. Selezione tour e data
2. Verifica disponibilità real-time
3. Inserimento dati partecipanti
4. Pagamento (Stripe)
5. Conferma email + QR ticket
6. Reminder automatici

---

## 🔒 Sicurezza

### Misure Implementate
- **HTTPS** everywhere (TLS 1.3)
- **CORS** configurato per domini autorizzati
- **Rate Limiting** su tutte le API
- **Input Validation** con Zod
- **SQL Injection Protection** via Prisma
- **XSS Protection** headers
- **CSRF Tokens** per form
- **JWT** con refresh token rotation

### Compliance
- **GDPR** - Gestione consensi, diritto all'oblio
- **Cookie Policy** - Banner e preferenze
- **Privacy by Design** - Minimizzazione dati

---

## 📈 Scalabilità

### Strategia di Scaling

```
                    ┌─────────────────────┐
                    │   Load Balancer     │
                    │   (AWS ALB)         │
                    └──────────┬──────────┘
                               │
        ┌──────────────────────┼──────────────────────┐
        │                      │                      │
┌───────▼───────┐    ┌─────────▼─────────┐  ┌────────▼────────┐
│   Frontend    │    │   Frontend        │  │   Frontend      │
│   Pod 1       │    │   Pod 2           │  │   Pod N         │
└───────────────┘    └───────────────────┘  └─────────────────┘
        │                      │                      │
        └──────────────────────┼──────────────────────┘
                               │
                    ┌──────────▼──────────┐
                    │   API Gateway       │
                    │   (Kong/Nginx)      │
                    └──────────┬──────────┘
                               │
        ┌──────────────────────┼──────────────────────┐
        │                      │                      │
┌───────▼───────┐    ┌─────────▼─────────┐  ┌────────▼────────┐
│   Backend     │    │   Backend         │  │   Backend       │
│   Pod 1       │    │   Pod 2           │  │   Pod N         │
└───────────────┘    └───────────────────┘  └─────────────────┘
```

### Metriche Target
- **Uptime**: 99.9%
- **Response Time**: < 200ms (p95)
- **Concurrent Users**: 10,000+
- **Events/sec**: 1,000+

---

## 🚀 Deployment

### CI/CD Pipeline

```yaml
# .github/workflows/deploy.yml
name: Deploy MOVE GO

on:
  push:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm ci
      - run: npm test
      - run: npm run lint

  build:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - run: docker build -t movego:${{ github.sha }} .
      - run: docker push registry/movego:${{ github.sha }}

  deploy:
    needs: build
    runs-on: ubuntu-latest
    steps:
      - run: kubectl set image deployment/movego movego=registry/movego:${{ github.sha }}
```

### Ambienti
- **Development**: dev.movego.it
- **Staging**: staging.movego.it
- **Production**: www.movego.it

---

## 📊 Monitoring

### Stack Observability
- **Prometheus** - Metriche
- **Grafana** - Dashboard
- **Loki** - Logs
- **Jaeger** - Distributed Tracing
- **Sentry** - Error Tracking

### Alert Critici
- Downtime > 1 min
- Error rate > 1%
- Response time > 500ms
- CPU > 80%
- Memory > 85%
