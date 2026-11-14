import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import MarqueeBand from './components/MarqueeBand'
import StratejiSection from './components/StratejiSection'
import PortfolyoSection from './components/PortfolyoSection'
import Faz1Section from './components/Faz1Section'
import Faz2Section from './components/Faz2Section'
import YatirimSection from './components/YatirimSection'
import Footer from './components/Footer'
import { InteractiveBackground } from '@/components/ui/interactive-background'

export default function Home() {
  return (
    <>
      {/* Full-screen Interactive Background (Canvas dot grid + cursor spotlight LERP) */}
      <InteractiveBackground />

      {/* Main Content (relative z-10 for full interactivity above background) */}
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
