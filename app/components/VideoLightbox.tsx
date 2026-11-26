'use client'

import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from 'react'
import type { PointerEvent as ReactPointerEvent } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Play, Pause, Volume1, Volume2, VolumeX, Maximize, X } from 'lucide-react'
import type { PortfolioVideo } from '@/src/data/videos'
import { isEmbed } from '@/components/ui/video-slot'

type Aspect = '9/16' | '16/9'

type Props = {
  /** null olanda pleyer bağlıdır */
  video: PortfolioVideo | null
  aspect?: Aspect
  onClose: () => void
}

// İdarəetmə paneli siçan hərəkətsiz qalanda bu qədər ms sonra gizlənir
const CONTROLS_HIDE_MS = 2500

const subscribeNoop = () => () => {}
/** Portal yalnız brauzerdə: serverdə false, klientdə true */
const useIsClient = () => useSyncExternalStore(subscribeNoop, () => true, () => false)

const formatTime = (s: number) => {
  if (!Number.isFinite(s)) return '0:00'
  const m = Math.floor(s / 60)
  return `${m}:${String(Math.floor(s % 60)).padStart(2, '0')}`
}

/** Pleyerin ölçüsü: ekrana sığan ən böyük ölçü, nisbət qorunur */
const frameWidth = (aspect: Aspect) =>
  aspect === '9/16' ? 'min(92vw, calc(86vh * 9 / 16))' : 'min(92vw, calc(80vh * 16 / 9))'

function Player({ video, aspect, onClose }: { video: PortfolioVideo; aspect: Aspect; onClose: () => void }) {
  const frameRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const barRef = useRef<HTMLDivElement>(null)
  const volRef = useRef<HTMLDivElement>(null)
  const hideTimer = useRef<number | null>(null)
  const seeking = useRef(false)
  const volDragging = useRef(false)

  const [playing, setPlaying] = useState(false)
  const [muted, setMuted] = useState(false)
  const [volume, setVolume] = useState(1)
  // Dartma zamanı siçan çubuqdan çıxsa da çubuq açıq qalsın
  const [volOpen, setVolOpen] = useState(false)
  const [current, setCurrent] = useState(0)
  const [duration, setDuration] = useState(0)
  const [controlsVisible, setControlsVisible] = useState(true)

  const togglePlay = useCallback(() => {
    const v = videoRef.current
    if (!v) return
    if (v.paused) v.play().catch(() => {})
    else v.pause()
  }, [])

  const toggleMute = useCallback(() => {
    const v = videoRef.current
    if (!v) return
    v.muted = !v.muted
    // Səs 0-da ikən açılsa, eşidilən səviyyəyə qaytar
    if (!v.muted && v.volume === 0) {
      v.volume = 0.5
      setVolume(0.5)
    }
    setMuted(v.muted)
  }, [])

  /** Səs səviyyəsi 0–1. 0 olanda səssiz sayılır, yuxarı çəkəndə səs açılır */
  const applyVolume = useCallback((value: number) => {
    const v = videoRef.current
    if (!v) return
    const next = Math.min(Math.max(value, 0), 1)
    v.volume = next
    v.muted = next === 0
    setVolume(next)
    setMuted(v.muted)
  }, [])

  const toggleFullscreen = () => {
    if (document.fullscreenElement) document.exitFullscreen().catch(() => {})
    else frameRef.current?.requestFullscreen().catch(() => {})
  }

  /** Siçan hərəkət edəndə panel görünür, hərəkətsiz qalanda (oynayarkən) gizlənir */
  const pokeControls = useCallback(() => {
    setControlsVisible(true)
    if (hideTimer.current) window.clearTimeout(hideTimer.current)
    hideTimer.current = window.setTimeout(() => {
      if (!videoRef.current?.paused && !seeking.current) setControlsVisible(false)
    }, CONTROLS_HIDE_MS)
  }, [])

  // Açılan kimi səsli başlasın; brauzer icazə verməsə səssiz başlasın
  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    v.play().catch(() => {
      v.muted = true
      setMuted(true)
      v.play().catch(() => {})
    })
    return () => {
      if (hideTimer.current) window.clearTimeout(hideTimer.current)
    }
  }, [])

  // Klaviatura: Esc bağlayır, boşluq oynat/dayandır, M səs
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && !document.fullscreenElement) onClose()
      else if (e.key === ' ' || e.key === 'k') {
        e.preventDefault()
        togglePlay()
        pokeControls()
      } else if (e.key === 'm' || e.key === 'M') toggleMute()
      else if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
        // Oxlar: səsi 10% artır / azalt
        e.preventDefault()
        const v = videoRef.current
        if (!v) return
        const base = v.muted ? 0 : v.volume
        applyVolume(base + (e.key === 'ArrowUp' ? 0.1 : -0.1))
        pokeControls()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose, togglePlay, toggleMute, applyVolume, pokeControls])

  // --- Səs çubuğunda klik və dartma ---
  const volumeFrom = (clientX: number) => {
    const bar = volRef.current
    if (!bar) return
    const rect = bar.getBoundingClientRect()
    if (!rect.width) return
    applyVolume((clientX - rect.left) / rect.width)
  }
  const onVolDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    e.stopPropagation()
    e.currentTarget.setPointerCapture(e.pointerId)
    volDragging.current = true
    setVolOpen(true)
    volumeFrom(e.clientX)
  }
  const onVolMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (volDragging.current) volumeFrom(e.clientX)
  }
  const onVolUp = (e: ReactPointerEvent<HTMLDivElement>) => {
    volDragging.current = false
    setVolOpen(false)
    if (e.currentTarget.hasPointerCapture(e.pointerId)) e.currentTarget.releasePointerCapture(e.pointerId)
  }

  // --- Proqres çubuğunda klik və dartma ilə irəli/geri ---
  // Brauzer əvvəlki axtarışı bitirməmiş yenisini vermirik: yalnız son mövqe saxlanılır, `seeked`-də tətbiq olunur
  const pendingSeek = useRef<number | null>(null)

  const seekTo = (clientX: number) => {
    const bar = barRef.current
    const v = videoRef.current
    if (!bar || !v || !duration) return
    const rect = bar.getBoundingClientRect()
    const ratio = Math.min(Math.max((clientX - rect.left) / rect.width, 0), 1)
    const t = ratio * duration
    setCurrent(t)
    if (v.seeking) pendingSeek.current = t
    else v.currentTime = t
  }

  const onSeeked = () => {
    const v = videoRef.current
    if (!v || pendingSeek.current === null) return
    v.currentTime = pendingSeek.current
    pendingSeek.current = null
  }

  const updateDuration = (v: HTMLVideoElement) => {
    if (Number.isFinite(v.duration) && v.duration > 0) setDuration(v.duration)
  }

  const onBarDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    e.stopPropagation()
    e.currentTarget.setPointerCapture(e.pointerId)
    seeking.current = true
    seekTo(e.clientX)
  }
  const onBarMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (seeking.current) seekTo(e.clientX)
  }
  const onBarUp = (e: ReactPointerEvent<HTMLDivElement>) => {
    seeking.current = false
    if (e.currentTarget.hasPointerCapture(e.pointerId)) e.currentTarget.releasePointerCapture(e.pointerId)
    pokeControls()
  }

  const progress = duration ? (current / duration) * 100 : 0
  const showControls = controlsVisible || !playing
  const shownVolume = muted ? 0 : volume
  const VolumeIcon = shownVolume === 0 ? VolumeX : shownVolume < 0.5 ? Volume1 : Volume2

  const iconBtn =
    'w-9 h-9 rounded-full flex items-center justify-center text-white/85 hover:text-white hover:bg-white/10 transition-colors'

  return (
    <div
      ref={frameRef}
      onMouseMove={pokeControls}
      className={`relative rounded-2xl overflow-hidden bg-black border border-line shadow-lift ${
        showControls ? '' : 'cursor-none'
      }`}
      style={{ width: frameWidth(aspect), aspectRatio: aspect }}
    >
      <video
        ref={videoRef}
        src={video.src}
        poster={video.poster || undefined}
        playsInline
        preload="auto"
        onClick={togglePlay}
        onPlay={() => {
          setPlaying(true)
          pokeControls()
        }}
        onPause={() => {
          setPlaying(false)
          setControlsVisible(true)
        }}
        onTimeUpdate={(e) => !seeking.current && setCurrent(e.currentTarget.currentTime)}
        onLoadedMetadata={(e) => updateDuration(e.currentTarget)}
        onDurationChange={(e) => updateDuration(e.currentTarget)}
        onSeeked={onSeeked}
        onEnded={() => setControlsVisible(true)}
        className="absolute inset-0 w-full h-full object-contain"
      />

      {/* Dayananda mərkəzdə böyük play */}
      <AnimatePresence>
        {!playing && (
          <motion.button
            type="button"
            aria-label="Oynat"
            onClick={togglePlay}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85 }}
            transition={{ duration: 0.2 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-accent flex items-center justify-center hover:scale-105 transition-transform"
          >
            <Play className="w-7 h-7 text-white ml-1 fill-white" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Alt idarəetmə paneli */}
      <div
        className={`absolute bottom-0 inset-x-0 px-3 pb-3 pt-10 bg-gradient-to-t from-black/85 via-black/40 to-transparent transition-opacity duration-300 ${
          showControls ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Proqres çubuğu */}
        <div
          ref={barRef}
          onPointerDown={onBarDown}
          onPointerMove={onBarMove}
          onPointerUp={onBarUp}
          onPointerCancel={onBarUp}
          className="group/bar relative h-4 flex items-center cursor-pointer touch-none"
        >
          <div className="relative w-full h-1 group-hover/bar:h-1.5 transition-all rounded-full bg-white/15">
            <div className="absolute inset-y-0 left-0 rounded-full bg-accent" style={{ width: `${progress}%` }} />
            <div
              className="absolute top-1/2 w-3 h-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent scale-0 group-hover/bar:scale-100 transition-transform"
              style={{ left: `${progress}%` }}
            />
          </div>
        </div>

        <div className="flex items-center gap-1 mt-1">
          <button type="button" onClick={togglePlay} aria-label={playing ? 'Dayandır' : 'Oynat'} className={iconBtn}>
            {playing ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
          </button>
          {/* Səs: düymə + üstünə gələndə açılan səviyyə çubuğu */}
          <div className="group/vol flex items-center">
            <button type="button" onClick={toggleMute} aria-label={muted ? 'Səsi aç' : 'Səsi bağla'} className={iconBtn}>
              <VolumeIcon className="w-4 h-4" />
            </button>
            <div
              ref={volRef}
              role="slider"
              aria-label="Səs səviyyəsi"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={Math.round(shownVolume * 100)}
              onPointerDown={onVolDown}
              onPointerMove={onVolMove}
              onPointerUp={onVolUp}
              onPointerCancel={onVolUp}
              className={`relative h-4 flex items-center cursor-pointer touch-none overflow-hidden ${
                volOpen ? 'w-16 opacity-100 mx-1' : 'w-0 opacity-0'
              } group-hover/vol:w-16 group-hover/vol:opacity-100 group-hover/vol:mx-1 group-focus-within/vol:w-16 group-focus-within/vol:opacity-100 group-focus-within/vol:mx-1 transition-all duration-200`}
            >
              <div className="relative w-full h-1 rounded-full bg-white/15">
                <div className="absolute inset-y-0 left-0 rounded-full bg-accent" style={{ width: `${shownVolume * 100}%` }} />
                <div
                  className="absolute top-1/2 w-2.5 h-2.5 -translate-y-1/2 rounded-full bg-white"
                  style={{ left: `calc(${shownVolume * 100}% - ${shownVolume * 10}px)` }}
                />
              </div>
            </div>
          </div>
          <span className="ml-1 text-[11px] font-display tabular-nums text-muted">
            {formatTime(current)} / {formatTime(duration)}
          </span>
          <button type="button" onClick={toggleFullscreen} aria-label="Tam ekran" className={`${iconBtn} ml-auto`}>
            <Maximize className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}

/** Saytın rənglərində video pleyer pəncərəsi (lightbox) */
export default function VideoLightbox({ video, aspect = '9/16', onClose }: Props) {
  const isClient = useIsClient()

  // Açıq olanda səhifə arxada scroll olmasın
  useEffect(() => {
    if (!video) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [video])

  if (!isClient) return null

  return createPortal(
    <AnimatePresence>
      {video && (
        <motion.div
          key="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={video.title || 'Video'}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-bg/95"
        >
          {/* Bağla */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Bağla"
            className="absolute top-5 right-5 z-10 w-11 h-11 rounded-full border border-line bg-bg/80 text-white flex items-center justify-center hover:border-accent hover:text-accent transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ type: 'spring', stiffness: 260, damping: 26 }}
            onClick={(e) => e.stopPropagation()}
            className="relative"
          >
            {isEmbed(video.src) ? (
              <div
                className="relative rounded-2xl overflow-hidden bg-black border border-line"
                style={{ width: frameWidth(aspect), aspectRatio: aspect }}
              >
                <iframe
                  src={video.src}
                  title={video.title || 'Video'}
                  className="absolute inset-0 w-full h-full border-0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              <Player video={video} aspect={aspect} onClose={onClose} />
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  )
}
