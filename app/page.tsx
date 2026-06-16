import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { StatsBar } from "@/components/stats-bar"
import { PopulationTimeline } from "@/components/population-timeline"
import { QuickAccessSection } from "@/components/quick-access-section"
import { AboutSection } from "@/components/about-section"
import { LiveConditionsSection } from "@/components/live-conditions-section"
import { MapSection } from "@/components/map-section"
import { Watershed } from "@/components/watershed"
import { FishGuideSection } from "@/components/fish-guide-section"
import { LakeHealthSection } from "@/components/lake-health-section"
import { GetInvolvedSection } from "@/components/get-involved-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main id="main">
        <HeroSection />
        <StatsBar />
        <PopulationTimeline />
        <QuickAccessSection />
        <AboutSection />
        <LiveConditionsSection />
        <MapSection />
        <Watershed />
        <FishGuideSection />
        <LakeHealthSection />
        <GetInvolvedSection />
      </main>
      <Footer />
    </div>
  )
}
