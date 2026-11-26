import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import MarqueeBand from './components/MarqueeBand'
import StratejiSection from './components/StratejiSection'
import PortfolyoSection from './components/PortfolyoSection'
import Faz1Section from './components/Faz1Section'
import Faz2Section from './components/Faz2Section'
import YatirimSection from './components/YatirimSection'
import Footer from './components/Footer'
import { AuroraField } from '@/components/ui/aurora-field'

export default function Home() {
  return (
    <>
      {/* WebGL aurora: slow drift + cursor displacement with chromatic split */}
      <AuroraField />

      {/* Site-wide grid over the aurora, under the content */}
      <div aria-hidden="true" className="page-grid" />

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
