import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'MOVE GO - Dove la Storia Corre Ancora | Mandello del Lario',
  description: 'Piattaforma turistica digitale real-time per Mandello del Lario, capitale mondiale del turismo culturale Moto Guzzi. Eventi, storia, ospitalità e community globale.',
  keywords: 'Moto Guzzi, Mandello del Lario, turismo, mototurismo, storia, eventi, Italia, Lago di Como',
  openGraph: {
    title: 'MOVE GO - Dove la Storia Corre Ancora',
    description: 'Scopri Mandello del Lario, culla della Moto Guzzi. Eventi real-time, storia, cultura e ospitalità.',
    type: 'website',
    locale: 'it_IT',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it">
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
