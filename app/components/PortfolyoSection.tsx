'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import type { PointerEvent as ReactPointerEvent, MouseEvent as ReactMouseEvent } from 'react'
import { motion } from 'framer-motion'
import { Play, ChevronLeft, ChevronRight } from 'lucide-react'
import { FadeUp } from './motion'
import ShowreelPanel from './ShowreelPanel'
import VideoLightbox from './VideoLightbox'
import { VideoSlot, isEmbed } from '@/components/ui/video-slot'
import { reelVideos } from '@/src/data/videos'
import type { PortfolioVideo } from '@/src/data/videos'

// Siçan ilə dartanda bu qədər pikseldən sonra "klik" yox, "drag" sayılır
const DRAG_THRESHOLD = 6
// Kənarlardakı fade zolağının eni (px). Scroll limiti də buradır:
// ən sola/sağa çəkəndə ilk/son video məhz fadenin bitdiyi nöqtədə dayanır.
const FADE = 96

// --- Fizika parametrləri ---
// Rezin: limitdən o yana d px dartanda ekranda nə qədər gedir (yumşaq, 140px-ə asimptotik yaxınlaşır)
const RUBBER_MAX = 140
const RUBBER_STIFFNESS = 0.55
// Buraxandan sonra ətalət: hər 16ms-də sürətin nə qədəri qalır
const FRICTION = 0.95
// Limitdən kənarda yay: sərtlik və sönmə (kritik sönmə, yəni yırğalanmadan yumşaq qayıdış)
const SPRING_K = 0.00022
const SPRING_D = 2 * Math.sqrt(SPRING_K)
// Bu sürətdən aşağı düşəndə ən yaxın karta yumşaq yapışma başlayır (px/ms)
const SETTLE_SPEED = 0.25

const rubber = (d: number) =>
  Math.sign(d) * RUBBER_MAX * (1 - 1 / ((Math.abs(d) * RUBBER_STIFFNESS) / RUBBER_MAX + 1))

// Fade hər iki tərəfdə daim qalır
const MASK = `linear-gradient(to right, transparent 0, #000 ${FADE}px, #000 calc(100% - ${FADE}px), transparent 100%)`

/**
 * 9:16 kart: üzərində dəyirmi play düyməsi.
 * Hover: kart bir az böyüyür və video səssiz oynayır. Klik: pleyer açılır.
 */
function ReelCard({
  video,
  index,
  isDragging,
  onOpen,
}: {
  video: PortfolioVideo
  index: number
  isDragging: boolean
  onOpen: () => void
}) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const hasFile = !!video.src && !isEmbed(video.src)

  const startPreview = () => {
    if (!isDragging) videoRef.current?.play().catch(() => {})
  }
  const stopPreview = () => {
    const v = videoRef.current
    if (!v) return
    v.pause()
    v.currentTime = 0
  }

  return (
    <motion.div
      data-slot
      role={video.src ? 'button' : undefined}
      tabIndex={video.src ? 0 : undefined}
      aria-label={video.src ? `${video.title || `Video ${index + 1}`} — oynat` : undefined}
      onMouseEnter={startPreview}
      onMouseLeave={stopPreview}
      onClick={() => video.src && onOpen()}
      onKeyDown={(e) => {
        if (video.src && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault()
          onOpen()
        }
      }}
      whileHover={isDragging ? undefined : { scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      className={`glass-card rounded-lg overflow-hidden group shrink-0 snap-start w-[200px] sm:w-[220px] lg:w-[240px] hover:border-line-strong ${
        video.src ? 'cursor-pointer' : ''
      }`}
      style={{ transition: 'border-color 0.3s, box-shadow 0.3s' }}
    >
      {/* Video (9:16 şaquli) */}
      <div className="relative w-full" style={{ aspectRatio: '9/16' }}>
        {hasFile ? (
          <video
            ref={videoRef}
            src={video.src}
            poster={video.poster || undefined}
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          />
        ) : (
          <VideoSlot
            src={video.src}
            poster={video.poster}
            title={video.title || `Video ${index + 1}`}
            mode="reel"
            fallback={<div className="absolute inset-0 bg-gradient-to-b from-line/40 to-bg" />}
          />
        )}

        {/* Dəyirmi play düyməsi */}
        <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
          <div className="w-14 h-14 rounded-full bg-bg/70 flex items-center justify-center ring-1 ring-ink/25 transition-colors duration-200 group-hover:bg-accent group-hover:ring-accent">
            <Play className="w-6 h-6 text-ink ml-0.5 fill-current transition-colors duration-200 group-hover:text-bg" />
          </div>
        </div>

        {/* Yuva nömrəsi */}
        <div className="absolute top-2.5 left-2.5 z-10 bg-bg/80 text-ink text-[11px] font-display font-bold tabular-nums px-1.5 py-0.5 rounded-sm">
          {String(index + 1).padStart(2, '0')}
        </div>
        <div className="absolute top-2.5 right-2.5 z-10 bg-bg/80 text-muted text-[11px] tabular-nums px-1.5 py-0.5 rounded-sm">
          9:16
        </div>

        {/* Başlıq və açıqlama: kartın aşağı hissəsində, videonun üstündə (pleyerdə göstərilmir) */}
        {(video.title || video.desc) && (
          <div className="absolute bottom-0 inset-x-0 z-10 px-4 pb-4 pt-16 bg-gradient-to-t from-bg via-bg/85 to-transparent pointer-events-none">
            {video.title && <h4 className="text-ink text-sm font-bold leading-tight">{video.title}</h4>}
            {video.desc && <p className="text-muted text-xs leading-snug mt-1">{video.desc}</p>}
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default function PortfolyoSection() {
  const trackRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)
  const drag = useRef({ active: false, moved: false, interrupted: false, startX: 0, startScroll: 0, pointerId: -1 })
  const thumbDrag = useRef({ active: false, startX: 0, startScroll: 0 })
  const samples = useRef<{ x: number; t: number }[]>([])
  // Limitdən kənara çıxa bilən "virtual" mövqe; ekranda scrollLeft + rezin sürüşməsi kimi göstərilir
  const virtualX = useRef(0)
  const rafId = useRef<number | null>(null)

  const [isDragging, setIsDragging] = useState(false)
  const [snapEnabled, setSnapEnabled] = useState(true)
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(true)
  const [activeIndex, setActiveIndex] = useState(0)
  const [thumb, setThumb] = useState({ width: 100, left: 0 })

  /** İki qonşu kart arasındakı məsafə (kart eni + boşluq) */
  const getStep = useCallback(() => {
    const cards = trackRef.current?.querySelectorAll<HTMLElement>('[data-slot]')
    if (!cards || cards.length < 2) return 0
    return cards[1].offsetLeft - cards[0].offsetLeft
  }, [])

  const getMax = () => {
    const track = trackRef.current
    return track ? track.scrollWidth - track.clientWidth : 0
  }

  /**
   * Hər kartın yapışma mövqeyi. Sondakı kartlar scroll limitindən o yana düşdüyü üçün
   * limitə bərabərləşdirilir: ən sağda son video fadenin bitdiyi nöqtədə dayanır.
   */
  const snapPositions = useCallback(() => {
    const track = trackRef.current
    const step = getStep()
    if (!track || !step) return [0]
    const max = track.scrollWidth - track.clientWidth
    return reelVideos.map((_, i) => Math.min(i * step, max))
  }, [getStep])

  /** Hazırkı scroll mövqeyinə ən yaxın yapışma nöqtəsinin indeksi (bərabərlikdə birincisi) */
  const nearestIndex = useCallback(() => {
    const track = trackRef.current
    if (!track) return 0
    const positions = snapPositions()
    let best = 0
    positions.forEach((p, i) => {
      if (Math.abs(p - track.scrollLeft) < Math.abs(positions[best] - track.scrollLeft)) best = i
    })
    return best
  }, [snapPositions])

  const updateState = useCallback(() => {
    const track = trackRef.current
    if (!track) return
    const { scrollLeft, scrollWidth, clientWidth } = track
    const atEnd = scrollLeft >= scrollWidth - clientWidth - 4
    setCanPrev(scrollLeft > 4)
    setCanNext(!atEnd)
    // Sona çatanda son video aktiv sayılır (sayğac "05 / 05" göstərsin)
    setActiveIndex(atEnd ? reelVideos.length - 1 : nearestIndex())
    setThumb({
      width: (clientWidth / scrollWidth) * 100,
      left: (scrollLeft / scrollWidth) * 100,
    })
  }, [nearestIndex])

  useEffect(() => {
    updateState()
    window.addEventListener('resize', updateState)
    return () => {
      window.removeEventListener('resize', updateState)
      if (rafId.current !== null) cancelAnimationFrame(rafId.current)
    }
  }, [updateState])

  /** Virtual mövqeyi ekrana köçürür: limit daxilində scroll, kənarda rezin sürüşməsi */
  const render = (x: number) => {
    const track = trackRef.current
    const inner = innerRef.current
    if (!track || !inner) return
    const clamped = Math.min(Math.max(x, 0), getMax())
    virtualX.current = x
    track.scrollLeft = clamped
    const over = x - clamped
    inner.style.transform = over ? `translateX(${-rubber(over)}px)` : ''
  }

  const stopAnimation = () => {
    if (rafId.current === null) return false
    cancelAnimationFrame(rafId.current)
    rafId.current = null
    return true
  }

  const scrollToIndex = (index: number) => {
    const positions = snapPositions()
    const i = Math.max(0, Math.min(index, positions.length - 1))
    trackRef.current?.scrollTo({ left: positions[i], behavior: 'smooth' })
  }

  /** Ən yaxın karta yumşaq yapışır, bitəndən sonra CSS snap-ı geri qaytarır */
  const settle = () => {
    const track = trackRef.current
    if (!track) return
    let done = false
    const finish = () => {
      if (done) return
      done = true
      setSnapEnabled(true)
    }
    track.addEventListener('scrollend', finish, { once: true })
    window.setTimeout(finish, 700) // scrollend dəstəklənmirsə və ya scroll olmayıbsa
    scrollToIndex(nearestIndex())
  }

  /** Buraxandan sonra: ətalətlə davam, limitə dəyəndə yaylı qayıdış, sonda yapışma */
  const startMomentum = (initialVelocity: number) => {
    stopAnimation()
    let x = virtualX.current
    let v = initialVelocity
    let last = performance.now()

    const tick = (now: number) => {
      const dt = Math.min(now - last, 32)
      last = now
      const max = getMax()
      const bound = x < 0 ? 0 : x > max ? max : null

      if (bound !== null) {
        // Limitdən kənarda: yay geri çəkir
        v += (-SPRING_K * (x - bound) - SPRING_D * v) * dt
        x += v * dt
        if (Math.abs(x - bound) < 0.5 && Math.abs(v) < 0.02) {
          render(bound)
          rafId.current = null
          settle()
          return
        }
      } else {
        // Limit daxilində: sürtünmə ilə yavaşlayır
        v *= Math.pow(FRICTION, dt / 16)
        x += v * dt
        if (Math.abs(v) < SETTLE_SPEED && x >= 0 && x <= max) {
          render(x)
          rafId.current = null
          settle()
          return
        }
      }
      render(x)
      rafId.current = requestAnimationFrame(tick)
    }
    rafId.current = requestAnimationFrame(tick)
  }

  /** Animasiya gedirsə dayandırır və rezini sıfırlayır (kartlar limit daxilinə qayıdır) */
  const haltAnimation = () => {
    if (stopAnimation()) {
      render(Math.min(Math.max(virtualX.current, 0), getMax()))
      setSnapEnabled(true)
    }
  }

  const scrollByCards = (dir: 1 | -1) => {
    haltAnimation()
    scrollToIndex(nearestIndex() + dir)
  }

  // --- Siçan ilə kartları tutub dartmaq (toxunma ekranlarında brauzerin öz scroll-u işləyir) ---
  const onPointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== 'mouse' || e.button !== 0 || !trackRef.current) return
    // Hərəkət zamanı tutulsa, olduğu yerdən davam edir
    const interrupted = stopAnimation()
    if (!interrupted) virtualX.current = trackRef.current.scrollLeft
    drag.current = {
      active: true,
      moved: false,
      interrupted,
      startX: e.clientX,
      startScroll: virtualX.current,
      pointerId: e.pointerId,
    }
    samples.current = [{ x: e.clientX, t: e.timeStamp }]
  }

  const onPointerMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    const d = drag.current
    const track = trackRef.current
    if (!d.active || !track) return
    const dx = e.clientX - d.startX
    if (!d.moved) {
      if (Math.abs(dx) < DRAG_THRESHOLD) return
      d.moved = true
      setIsDragging(true)
      setSnapEnabled(false)
      track.setPointerCapture(d.pointerId)
    }
    render(d.startScroll - dx)
    // Son 100ms-in nöqtələri: buraxanda atılma sürəti buradan hesablanır
    samples.current.push({ x: e.clientX, t: e.timeStamp })
    while (samples.current.length > 2 && e.timeStamp - samples.current[0].t > 100) samples.current.shift()
  }

  const endDrag = (e: ReactPointerEvent<HTMLDivElement>) => {
    const d = drag.current
    const track = trackRef.current
    if (!d.active || !track) return
    d.active = false
    if (!d.moved) {
      // Hərəkət zamanı sadəcə klik edilibsə, animasiya olduğu yerdən davam etsin
      if (d.interrupted) startMomentum(0)
      return
    }
    if (track.hasPointerCapture(d.pointerId)) track.releasePointerCapture(d.pointerId)
    setIsDragging(false)

    const pts = samples.current
    const first = pts[0]
    const lastPt = pts[pts.length - 1]
    const dt = lastPt.t - first.t
    // Siçan buraxılmadan əvvəl dayanıbsa, atılma yoxdur
    const stale = e.timeStamp - lastPt.t > 60
    const velocity = dt > 0 && !stale ? -(lastPt.x - first.x) / dt : 0
    startMomentum(velocity)
  }

  // Dartmadan sonra təsadüfi klik getməsin
  const onClickCapture = (e: ReactMouseEvent) => {
    if (drag.current.moved) {
      e.preventDefault()
      e.stopPropagation()
      drag.current.moved = false
    }
  }

  // --- Alt çubuğu (qatarı) tutub dartmaq ---
  const onThumbDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (!trackRef.current) return
    haltAnimation()
    e.currentTarget.setPointerCapture(e.pointerId)
    thumbDrag.current = { active: true, startX: e.clientX, startScroll: trackRef.current.scrollLeft }
    setIsDragging(true)
    setSnapEnabled(false)
  }

  const onThumbMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    const t = thumbDrag.current
    const track = trackRef.current
    if (!t.active || !track) return
    // Çubuğun 1px hərəkəti = məzmunun (scrollWidth / clientWidth) px hərəkəti
    const ratio = track.scrollWidth / track.clientWidth
    render(Math.min(Math.max(t.startScroll + (e.clientX - t.startX) * ratio, 0), getMax()))
  }

  const onThumbUp = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (!thumbDrag.current.active) return
    thumbDrag.current.active = false
    if (e.currentTarget.hasPointerCapture(e.pointerId)) e.currentTarget.releasePointerCapture(e.pointerId)
    setIsDragging(false)
    settle()
  }

  const navBtn =
    'w-11 h-11 rounded-md border border-line text-ink flex items-center justify-center transition-colors duration-200 hover:border-line-strong hover:bg-surface disabled:opacity-30 disabled:pointer-events-none'

  return (
    <section id="portfel" className="pt-28 pb-32 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Başlıq */}
        <FadeUp className="text-left mb-5 flex items-center gap-3 before:block before:w-6 before:h-px before:bg-accent">
          <span className="text-accent text-[13px] font-medium">
            Chizzgy Portfeli
          </span>
        </FadeUp>
        <FadeUp delay={0.1} className="text-left mb-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink max-w-4xl">
            Kinematik İstehsal Gücümüz
          </h2>
        </FadeUp>
        <FadeUp delay={0.15} className="text-left mb-10">
          <p className="text-muted text-base sm:text-[1.0625rem] leading-relaxed max-w-[60ch]">
            Sony FX3 / A7 IV kino kameraları, peşəkar Godox işıq infrastrukturu, xüsusi LUT rəng elmi və ən yüksək montaj/CGI standartlarımız.
          </p>
        </FadeUp>

        {/* 16:9 panel: böyük pleyer + 3 miniatür */}
        <FadeUp delay={0.18}>
          <ShowreelPanel />
        </FadeUp>

        {/* Karusel idarəetməsi */}
        <FadeUp delay={0.2} className="flex items-center justify-between mb-4">
          <div className="text-muted text-[13px] font-display tabular-nums">
            <span className="text-ink font-semibold">{String(activeIndex + 1).padStart(2, '0')}</span>
            {' / '}
            {String(reelVideos.length).padStart(2, '0')}
          </div>
          <div className="flex gap-2">
            <button type="button" aria-label="Əvvəlki video" onClick={() => scrollByCards(-1)} disabled={!canPrev} className={navBtn}>
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button type="button" aria-label="Növbəti video" onClick={() => scrollByCards(1)} disabled={!canNext} className={navBtn}>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </FadeUp>

        <FadeUp delay={0.25}>
          {/* Karusel: kənarlarda daimi fade, kartlar fadenin bitdiyi nöqtədən başlayır */}
          <div
            ref={trackRef}
            onScroll={updateState}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={endDrag}
            onPointerCancel={endDrag}
            onPointerLeave={endDrag}
            onClickCapture={onClickCapture}
            onDragStart={(e) => e.preventDefault()}
            className={`no-scrollbar overflow-x-auto py-5 select-none ${
              isDragging ? 'cursor-grabbing' : 'cursor-grab'
            } ${snapEnabled ? 'snap-x snap-mandatory' : ''}`}
            style={{
              scrollbarWidth: 'none',
              scrollPaddingInline: FADE,
              maskImage: MASK,
              WebkitMaskImage: MASK,
            }}
          >
            <div ref={innerRef} className="flex gap-4 w-max will-change-transform" style={{ paddingInline: FADE }}>
              {reelVideos.map((video, i) => (
                <ReelCard
                  key={i}
                  video={video}
                  index={i}
                  isDragging={isDragging}
                  onOpen={() => setOpenIndex(i)}
                />
              ))}
            </div>
          </div>

          {/* Klikləyəndə açılan pleyer */}
          <VideoLightbox
            video={openIndex !== null ? reelVideos[openIndex] : null}
            aspect="9/16"
            onClose={() => setOpenIndex(null)}
          />

          {/* Scroll çubuğu: yalnız "qatar", "dəmir yolu" görünmür */}
          {thumb.width < 100 && (
            <div className="relative h-2 mt-2">
              <div
                role="presentation"
                onPointerDown={onThumbDown}
                onPointerMove={onThumbMove}
                onPointerUp={onThumbUp}
                onPointerCancel={onThumbUp}
                className="absolute top-0 h-full rounded-full bg-accent/50 hover:bg-accent active:bg-accent transition-colors cursor-grab active:cursor-grabbing touch-none"
                style={{ width: `${thumb.width}%`, left: `${thumb.left}%` }}
              />
            </div>
          )}
        </FadeUp>

        {/* Avadanlıq etiketləri */}
        <FadeUp delay={0.3} className="flex flex-wrap justify-start gap-2 mt-10">
          {[
            'Sony FX3',
            'Sony A7 IV',
            'Godox peşəkar işıqlandırma',
            'Xüsusi LUT paketi',
            'Unreal Engine 5',
            'Blender',
            'Nuke Compositing',
          ].map((tag) => (
            <span
              key={tag}
              className="text-muted text-[13px] border border-line rounded-sm px-3 py-1.5 cursor-default"
            >
              {tag}
            </span>
          ))}
        </FadeUp>
      </div>
    </section>
  )
}
