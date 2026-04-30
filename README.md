# MOVE GO 🦅

**L'anima Guzzi, Every Way You Go.**

Piattaforma turistica digitale real-time per Mandello del Lario, capitale mondiale del turismo culturale Moto Guzzi.

[![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue?logo=typescript)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

## 🎯 Panoramica

MOVE GO è un ecosistema digitale che unisce:
- **Eventi Real-Time**: Aggregazione automatica di tutti gli eventi Moto Guzzi nel mondo (fonte: [Guzzi Days](https://guzzi-days.net))
- **Storia Interattiva**: Timeline immersiva della Moto Guzzi dal 1921
- **Partner Hospitality**: Ristoranti, hotel e B&B certificati
- **Visite Guidate**: Sistema di prenotazione integrato
- **Multilingua**: Contenuti in 5 lingue (IT, EN, DE, ES, PT)
- **Antica Officina B&B**: Dove nacque la prima officina Moto Guzzi

## 🚀 Quick Start

### Prerequisiti
- Node.js 18.x o superiore
- npm 9.x o superiore

### Installazione

```bash
# Clona il repository
git clone https://github.com/YOUR_USERNAME/move-go.git
cd move-go

# Installa le dipendenze
npm install

# Copia il file di configurazione
cp .env.example .env.local

# Avvia il server di sviluppo
npm run dev
```

Apri [http://localhost:3000](http://localhost:3000) nel browser.

### Build Produzione

```bash
npm run build
npm start
```

### Lint

```bash
npm run lint
```

## 📁 Struttura Progetto

```
move-go/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── page.tsx           # Homepage
│   │   ├── eventi/            # Sezione Eventi
│   │   ├── storia/            # Storia Moto Guzzi
│   │   ├── letteratura/       # Database Libri
│   │   ├── partner/           # Partner Hospitality
│   │   ├── visite/            # Visite Guidate
│   │   ├── blog/              # Blog Multilingua
│   │   ├── bb-nena/           # B&B da Nena
│   │   └── contatti/          # Form Contatti
│   ├── components/
│   │   ├── layout/            # Header, Footer
│   │   ├── sections/          # Sezioni Homepage
│   │   └── ui/                # Componenti UI
│   ├── lib/                   # Utilities
│   └── types/                 # TypeScript Types
├── docs/
│   ├── ARCHITECTURE.md        # Architettura Tecnica
│   ├── BUSINESS_PLAN.md       # Business Plan
│   ├── BRANDING.md            # Brand Guidelines
│   └── NARRATIVE.md           # Testo Istituzionale
├── public/                    # Asset statici
└── package.json
```

## 🛠️ Stack Tecnologico

| Categoria | Tecnologia |
|-----------|------------|
| **Framework** | Next.js 14 |
| **UI** | React 18, TailwindCSS |
| **Animazioni** | Framer Motion |
| **Icons** | Lucide React |
| **i18n** | next-intl |
| **State** | Zustand |
| **Real-time** | Socket.IO |

## 📖 Documentazione

- [Architettura Tecnica](./docs/ARCHITECTURE.md)
- [Business Plan](./docs/BUSINESS_PLAN.md)
- [Brand Guidelines](./docs/BRANDING.md)
- [Testo Narrativo](./docs/NARRATIVE.md)

## 🎨 Design System

### Colori
- **Guzzi Red**: `#C41E3A`
- **Guzzi Black**: `#1A1A1A`
- **Chrome Silver**: `#C0C0C0`
- **Lake Blue**: `#2E5A88`

### Font
- **Titoli**: Oswald
- **Body**: Inter

## 📱 Sezioni

### 1. Homepage
- Hero con animazione dinamica
- Preview eventi real-time
- Storia interattiva
- Partner hospitality
- B&B da Nena
- Visite guidate

### 2. Eventi Real-Time
- Aggregazione AI automatica
- Filtri per paese e tipo
- Badge: Virtuale / Ibrido / Presenziale
- Fonte sempre indicata

### 3. Storia Moto Guzzi
- Timeline interattiva 1921-2024
- Fondatori
- Modelli iconici
- Galleria Giovanni Trincavelli

### 4. Partner Hospitality
- Mappa interattiva
- Rating aggregato
- Badge Partner MOVE GO
- Sistema abbonamento

### 5. Visite Guidate
- Calendario disponibilità
- Prenotazione online
- Pagamento integrato
- QR ticket

### 6. Blog Multilingua
- CMS headless
- Traduzione AI
- SEO internazionale
- 5 lingue supportate

## 💰 Modello di Business

| Revenue Stream | Target Year 3 |
|----------------|---------------|
| Partner Hospitality | €120.000 |
| Commissioni Booking | €30.000 |
| Sponsorizzazioni | €75.000 |
| Affiliazioni | €15.000 |
| Membership Premium | €35.000 |
| **TOTALE** | **€275.000** |

## 🌍 Lingue Supportate

- 🇮🇹 Italiano (default)
- 🇬🇧 English
- 🇩🇪 Deutsch
- 🇪🇸 Español
- 🇵🇹 Português

## 🤝 Contributing

Le contribuzioni sono benvenute! Per favore:

1. Fai un fork del repository
2. Crea un branch per la tua feature (`git checkout -b feature/AmazingFeature`)
3. Commit delle modifiche (`git commit -m 'Add some AmazingFeature'`)
4. Push al branch (`git push origin feature/AmazingFeature`)
5. Apri una Pull Request

## 📄 License

Questo progetto è distribuito sotto licenza MIT. Vedi il file [LICENSE](LICENSE) per maggiori dettagli.

## 🙏 Credits

- Eventi: [Guzzi Days](https://guzzi-days.net)
- Icone: [Lucide](https://lucide.dev)
- UI Components: [Radix UI](https://radix-ui.com)

---

**MOVE GO - Dove la Storia Corre Ancora** 🦅

Made with ❤️ in Mandello del Lario
