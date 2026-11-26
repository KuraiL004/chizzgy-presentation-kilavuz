'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { href: '#strategiya', label: 'Strategiya' },
  { href: '#portfel', label: 'Portfel' },
  { href: '#faza1', label: 'Təhlil' },
  { href: '#faza2', label: 'Yaradıcı Həllər' },
  { href: '#yolxeritesi', label: 'Yol Xəritəsi' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  // Aşağı scroll edəndə gizlənir; yuxarı scroll, siçanın ekranın yuxarı kənarına
  // yaxınlaşması və ya klaviatura fokusu paneli geri gətirir.
  const [hiddenByScroll, setHiddenByScroll] = useState(false)
  const [pointerNearTop, setPointerNearTop] = useState(false)
  const [focusInside, setFocusInside] = useState(false)
  const lastY = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 20)
      if (y < 80) setHiddenByScroll(false)
      else if (y > lastY.current + 4) setHiddenByScroll(true)
      else if (y < lastY.current - 4) setHiddenByScroll(false)
      lastY.current = y
    }
    const onPointerMove = (e: PointerEvent) => {
      if (e.pointerType === 'mouse') setPointerNearTop(e.clientY < 90)
    }
    const onPointerLeaveWindow = () => setPointerNearTop(false)
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('pointermove', onPointerMove, { passive: true })
    document.documentElement.addEventListener('pointerleave', onPointerLeaveWindow)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('pointermove', onPointerMove)
      document.documentElement.removeEventListener('pointerleave', onPointerLeaveWindow)
    }
  }, [])

  const visible = !hiddenByScroll || pointerNearTop || focusInside || mobileOpen

  return (
    <nav
      // only keyboard focus keeps the bar open; a tapped/clicked link keeps focus too,
      // which previously pinned the bar visible on mobile after the first tap
      onFocus={(e) => setFocusInside(e.target.matches(':focus-visible'))}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setFocusInside(false)
      }}
      className={`fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b transition-[translate,padding,border-color] duration-300 ease-out ${
        visible ? 'translate-y-0' : '-translate-y-full'
      } ${
        scrolled
          ? 'border-line py-3'
          : 'border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Loqo */}
        <a href="#" className="flex items-center gap-2.5 sm:gap-3 group">
          <div className="relative flex items-center justify-center">
            <img
              src="/chizzgy-logo.svg"
              alt="Chizzgy"
              className="relative w-8 h-8 sm:w-9 sm:h-9 object-contain shrink-0 transition-transform duration-200 group-hover:scale-105"
            />
          </div>
          <span className="font-display [font-stretch:125%] text-ink font-extrabold text-lg sm:text-xl leading-none tracking-[-0.01em] transition-colors">
            CHIZZGY
          </span>
        </a>

        {/* Desktop linklər */}
        <div className="hidden lg:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-muted hover:text-ink text-sm font-medium underline-offset-[10px] decoration-accent decoration-2 hover:underline transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden lg:flex">
          <a
            href="#investisiya"
            className="bg-accent hover:bg-accent-press text-bg font-semibold text-sm px-5 py-2.5 rounded-md transition-colors duration-200"
          >
            Büdcə &amp; Təklif
          </a>
        </div>

        {/* Mobil menyu düyməsi */}
        <button
          className="lg:hidden text-ink p-2.5 -mr-2.5 rounded-md hover:bg-surface transition-colors"
          aria-expanded={mobileOpen}
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
            className="lg:hidden overflow-hidden bg-bg border-t border-line"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-muted hover:text-ink text-base font-medium py-2 border-b border-line/50 transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#investisiya"
                onClick={() => setMobileOpen(false)}
                className="mt-2 bg-accent text-bg font-semibold text-sm px-5 py-3 rounded-md text-center"
              >
                Büdcə &amp; Təklif
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
