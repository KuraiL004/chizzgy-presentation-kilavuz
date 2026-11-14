import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import MarqueeBand from './components/MarqueeBand'
import StratejiSection from './components/StratejiSection'
import PortfolyoSection from './components/PortfolyoSection'
import Faz1Section from './components/Faz1Section'
import Faz2Section from './components/Faz2Section'
import YatirimSection from './components/YatirimSection'
import Footer from './components/Footer'
import { FluidAuroraBackground } from '@/components/ui/fluid-aurora-background'
import { InteractiveBackground } from '@/components/ui/interactive-background'

export default function Home() {
  return (
    <>
      {/* 1. Interactive Fluid Aurora Mesh Gradient Background (Dark #070708 + Warm Orange Blobs) */}
      <FluidAuroraBackground />

      {/* 2. Full-screen Interactive Dot Grid Background with LERP tracking */}
      <InteractiveBackground />

      {/* Main Content (relative z-10 for complete interactivity above background) */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <HeroSection />
          <MarqueeBand />
          <StratejiSection />
          <PortfolyoSection />
          <Faz1Section />
          <Faz2Section />
          <YatirimSection />
        </main>
        <Footer />
      </div>
    </>
  )
}
