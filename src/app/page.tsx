import { HeroSection } from '@/components/sections/HeroSection'
import { EventsPreview } from '@/components/sections/EventsPreview'
import { HistoryPreview } from '@/components/sections/HistoryPreview'
import { PartnersPreview } from '@/components/sections/PartnersPreview'
import { BBNenaPreview } from '@/components/sections/BBNenaPreview'
import { ToursPreview } from '@/components/sections/ToursPreview'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <EventsPreview />
      <HistoryPreview />
      <PartnersPreview />
      <BBNenaPreview />
      <ToursPreview />
    </>
  )
}
