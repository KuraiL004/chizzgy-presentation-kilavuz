'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { href: '#strategiya', label: 'Strategiya' },
  { href: '#portfel', label: 'Portfel' },
  { href: '#faza1', label: 'Faza 1: Quraşdırma' },
  { href: '#faza2', label: 'Faza 2: Paketlər' },
  { href: '#yolxeritesi', label: 'Yol Xəritəsi' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#161316]/95 backdrop-blur-xl border-b border-[#453027]/60 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Loqo cütü */}
        <div className="flex items-center gap-4">
          <div className="text-left">
            <div className="text-white font-bold text-lg leading-none tracking-tight">CHIZZGY</div>
            <div className="text-[#BABABA] text-[10px] font-light leading-none">Creative &amp; Strategy</div>
          </div>
          <span className="text-[#453027] text-xl font-light">×</span>
          <div className="text-left">
            <div className="text-[#FF6D29] font-bold text-lg leading-none tracking-tight">KILAVUZ</div>
            <div className="text-[#BABABA] text-[10px] font-light leading-none">Visual Solutions</div>
          </div>
        </div>

        {/* Desktop linklər */}
        <div className="hidden lg:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[#BABABA] hover:text-white text-sm font-medium transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden lg:flex">
          <a
            href="#investisiya"
            className="bg-[#FF6D29] hover:bg-[#e85d1f] text-white font-semibold text-sm px-5 py-2.5 rounded-full transition-all duration-200 shadow-[0_0_20px_rgba(255,109,41,0.4)] hover:shadow-[0_0_30px_rgba(255,109,41,0.6)]"
          >
            İnvestisiya Planı (Təklif)
          </a>
        </div>

        {/* Mobil menyu düyməsi */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menyu"
        >
          <div className="w-6 h-0.5 bg-white mb-1.5 transition-all" />
          <div className="w-6 h-0.5 bg-white mb-1.5 transition-all" />
          <div className="w-4 h-0.5 bg-white transition-all" />
        </button>
      </div>

      {/* Mobil menyu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden bg-[#161316]/98 border-t border-[#453027]/40"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-[#BABABA] hover:text-white text-base font-medium py-1 transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#investisiya"
                onClick={() => setMobileOpen(false)}
                className="mt-2 bg-[#FF6D29] text-white font-semibold text-sm px-5 py-3 rounded-full text-center"
              >
                İnvestisiya Planı (Təklif)
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
