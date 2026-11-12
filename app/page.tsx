import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import MarqueeBand from './components/MarqueeBand'
import StratejiSection from './components/StratejiSection'
import PortfolyoSection from './components/PortfolyoSection'
import Faz1Section from './components/Faz1Section'
import Faz2Section from './components/Faz2Section'
import YatirimSection from './components/YatirimSection'
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
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
    </>
  )
}
