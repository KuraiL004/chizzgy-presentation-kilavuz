'use client'

import { useEffect, useRef, useState } from 'react'
import type { KeyboardEvent as ReactKeyboardEvent, PointerEvent as ReactPointerEvent } from 'react'
import { Play, Volume1, Volume2, VolumeX } from 'lucide-react'
import { showreelVideos } from '@/src/data/videos'
import type { PortfolioVideo } from '@/src/data/videos'
import { isEmbed } from '@/components/ui/video-slot'

const label = (video: PortfolioVideo, i: number) => video.title || `Video ${String(i + 1).padStart(2, '0')}`

/** Video yoxdursa göstərilən yer tutucu */
function Placeholder({ big = false, index }: { big?: boolean; index: number }) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-line/40 to-bg">
      <div
        className={`${big ? 'w-16 h-16' : 'w-9 h-9'} bg-bg/70 ring-1 ring-ink/25 rounded-full flex items-center justify-center`}
      >
        <Play className={`${big ? 'w-7 h-7' : 'w-4 h-4'} text-ink ml-0.5 fill-current`} />
      </div>
      {big && <span className="text-muted text-xs font-display tabular-nums">16:9 — {String(index + 1).padStart(2, '0')}</span>}
    </div>
  )
}

/** Üstdəki böyük pleyer: səssiz avtomatik oynayır, sağ altda səs düyməsi + üstünə gələndə açılan səviyyə çubuğu */
function MainPlayer({ video, index }: { video: PortfolioVideo; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const volRef = useRef<HTMLDivElement>(null)
  const volDragging = useRef(false)
  const [muted, setMuted] = useState(true)
  const [volume, setVolume] = useState(1)
  // Dartma zamanı siçan çubuqdan çıxsa da çubuq açıq qalsın
  const [volOpen, setVolOpen] = useState(false)

  const barRef = useRef<HTMLDivElement>(null)
  const fillRef = useRef<HTMLDivElement>(null)
  const knobRef = useRef<HTMLDivElement>(null)
  const seeking = useRef(false)
  const pendingSeek = useRef<number | null>(null)
  // Dartma zamanı siçan pleyerdən çıxsa da timeline görünsün
  const [scrubbing, setScrubbing] = useState(false)

  // Toxunuşlu ekranlarda hover yoxdur: pleyerə toxunanda idarə paneli açılır,
  // 3 saniyə toxunulmasa özü gizlənir; paneldən istifadə edərkən açıq qalır.
  const [touchShown, setTouchShown] = useState(false)
  const hideTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)
  const scheduleHide = () => {
    clearTimeout(hideTimer.current)
    hideTimer.current = setTimeout(() => setTouchShown(false), 3000)
  }
  useEffect(() => () => clearTimeout(hideTimer.current), [])
  const onSurfaceTap = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (e.pointerType === 'mouse') return
    const next = !touchShown
    setTouchShown(next)
    if (next) scheduleHide()
    else clearTimeout(hideTimer.current)
  }
  const onControlsDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== 'mouse') clearTimeout(hideTimer.current)
  }
  const onControlsUp = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== 'mouse') scheduleHide()
  }

  const paintProgress = (percent: number) => {
    if (fillRef.current) fillRef.current.style.width = `${percent}%`
    if (knobRef.current) knobRef.current.style.left = `${percent}%`
  }

  // timeupdate saniyədə ~4 dəfə gəlir, çubuq sıçrayır; hər kadrda birbaşa DOM-u yeniləyirik.
  // Pleyer ekrandan çıxanda həm video, həm də bu dövr dayanır (mobil performans və trafik üçün).
  useEffect(() => {
    let id = 0
    const tick = () => {
      const v = videoRef.current
      if (v && !seeking.current && v.duration > 0 && Number.isFinite(v.duration)) {
        paintProgress((v.currentTime / v.duration) * 100)
      }
      id = requestAnimationFrame(tick)
    }
    const startTick = () => { if (!id) id = requestAnimationFrame(tick) }
    const stopTick = () => { cancelAnimationFrame(id); id = 0 }
    startTick()

    const v = videoRef.current
    if (!v || typeof IntersectionObserver === 'undefined') return stopTick
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        v.play().catch(() => {})
        startTick()
      } else {
        v.pause()
        stopTick()
      }
    }, { threshold: 0.05 })
    io.observe(v)
    return () => { io.disconnect(); stopTick() }
  }, [video.src])

  if (!video.src) return <Placeholder big index={index} />

  if (isEmbed(video.src)) {
    return (
      <iframe
        src={video.src}
        title={label(video, index)}
        className="absolute inset-0 w-full h-full border-0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
      />
    )
  }

  /** Səs səviyyəsi 0–1. 0 olanda səssiz sayılır, yuxarı çəkəndə səs açılır */
  const applyVolume = (value: number) => {
    const v = videoRef.current
    if (!v) return
    const next = Math.min(Math.max(value, 0), 1)
    v.volume = next
    v.muted = next === 0
    setVolume(next)
    setMuted(v.muted)
  }

  const toggleMute = () => {
    const v = videoRef.current
    if (!v) return
    v.muted = !v.muted
    // Səs 0-da ikən açılsa, eşidilən səviyyəyə qaytar
    if (!v.muted && v.volume === 0) {
      v.volume = 0.5
      setVolume(0.5)
    }
    setMuted(v.muted)
  }

  // Şaquli çubuq: aşağı = 0, yuxarı = 1
  const volumeFrom = (clientY: number) => {
    const rect = volRef.current?.getBoundingClientRect()
    if (!rect?.height) return
    applyVolume((rect.bottom - clientY) / rect.height)
  }
  const onVolDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId)
    volDragging.current = true
    setVolOpen(true)
    volumeFrom(e.clientY)
  }
  const onVolMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (volDragging.current) volumeFrom(e.clientY)
  }
  const onVolUp = (e: ReactPointerEvent<HTMLDivElement>) => {
    volDragging.current = false
    setVolOpen(false)
    if (e.currentTarget.hasPointerCapture(e.pointerId)) e.currentTarget.releasePointerCapture(e.pointerId)
  }
  const onVolKey = (e: ReactKeyboardEvent<HTMLDivElement>) => {
    const up = e.key === 'ArrowUp' || e.key === 'ArrowRight'
    const down = e.key === 'ArrowDown' || e.key === 'ArrowLeft'
    if (!up && !down) return
    e.preventDefault()
    applyVolume((muted ? 0 : volume) + (up ? 0.1 : -0.1))
  }

  // Brauzer əvvəlki axtarışı bitirməmiş yenisini vermirik: yalnız son mövqe saxlanılır, `seeked`-də tətbiq olunur
  const seekTo = (clientX: number) => {
    const v = videoRef.current
    const rect = barRef.current?.getBoundingClientRect()
    if (!v || !rect?.width || !(v.duration > 0) || !Number.isFinite(v.duration)) return
    const ratio = Math.min(Math.max((clientX - rect.left) / rect.width, 0), 1)
    paintProgress(ratio * 100)
    const t = ratio * v.duration
    if (v.seeking) pendingSeek.current = t
    else v.currentTime = t
  }
  const onSeeked = () => {
    const v = videoRef.current
    if (!v || pendingSeek.current === null) return
    v.currentTime = pendingSeek.current
    pendingSeek.current = null
  }
  const onBarDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId)
    seeking.current = true
    setScrubbing(true)
    seekTo(e.clientX)
  }
  const onBarMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (seeking.current) seekTo(e.clientX)
  }
  const onBarUp = (e: ReactPointerEvent<HTMLDivElement>) => {
    seeking.current = false
    setScrubbing(false)
    if (e.currentTarget.hasPointerCapture(e.pointerId)) e.currentTarget.releasePointerCapture(e.pointerId)
  }

  const shownVolume = muted ? 0 : volume
  const VolumeIcon = shownVolume === 0 ? VolumeX : shownVolume < 0.5 ? Volume1 : Volume2

  return (
    <>
      <video
        ref={videoRef}
        src={video.src}
        poster={video.poster || undefined}
        autoPlay
        muted={muted}
        loop
        playsInline
        aria-label={label(video, index)}
        onSeeked={onSeeked}
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Toxunuşlu ekranlarda toxunma qatı: panel açılır/bağlanır */}
      <div aria-hidden className="absolute inset-0 z-[5]" onPointerUp={onSurfaceTap} />
      {/* İdarə paneli: timeline + səs. Desktop-da siçan pleyerin üstündə olanda, mobildə toxunanda görünür */}
      <div
        onPointerDownCapture={onControlsDown}
        onPointerUpCapture={onControlsUp}
        className={`absolute inset-x-0 bottom-0 z-10 transition-opacity duration-200 ${
          scrubbing || volOpen || touchShown
            ? 'opacity-100'
            : 'opacity-0 pointer-events-none group-hover/player:opacity-100 group-hover/player:pointer-events-auto focus-within:opacity-100 focus-within:pointer-events-auto'
        }`}
      >
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="relative flex items-center gap-3 px-4 pb-3 sm:px-5 sm:pb-4">
          <div
            ref={barRef}
            aria-hidden
            onPointerDown={onBarDown}
            onPointerMove={onBarMove}
            onPointerUp={onBarUp}
            onPointerCancel={onBarUp}
            className="group/bar relative flex-1 h-6 flex items-center cursor-pointer touch-none"
          >
            <div
              className={`relative w-full rounded-full bg-white/25 transition-[height] duration-150 ${
                scrubbing ? 'h-[5px]' : 'h-[3px] group-hover/bar:h-[5px]'
              }`}
            >
              <div ref={fillRef} className="absolute inset-y-0 left-0 rounded-full bg-accent" style={{ width: '0%' }} />
              <div
                ref={knobRef}
                className={`absolute top-1/2 w-3 h-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent transition-transform ${
                  scrubbing ? 'scale-100' : 'scale-0 group-hover/bar:scale-100'
                }`}
                style={{ left: '0%' }}
              />
            </div>
          </div>
          {/* Səs: düymənin üstündə açılan şaquli çubuq */}
          <div className="group/vol relative shrink-0">
            <div
              className={`absolute bottom-full left-1/2 -translate-x-1/2 pb-2 transition-opacity duration-150 ${
                volOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
              } group-hover/vol:opacity-100 group-hover/vol:pointer-events-auto group-focus-within/vol:opacity-100 group-focus-within/vol:pointer-events-auto`}
            >
              <div className="w-9 h-28 rounded-full bg-black/60 flex justify-center py-3.5">
                <div
                  ref={volRef}
                  role="slider"
                  tabIndex={0}
                  aria-label="Səs səviyyəsi"
                  aria-orientation="vertical"
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-valuenow={Math.round(shownVolume * 100)}
                  onPointerDown={onVolDown}
                  onPointerMove={onVolMove}
                  onPointerUp={onVolUp}
                  onPointerCancel={onVolUp}
                  onKeyDown={onVolKey}
                  className="relative w-6 h-full flex justify-center cursor-pointer touch-none outline-none"
                >
                  <div className="relative w-1 h-full rounded-full bg-white/20">
                    <div className="absolute inset-x-0 bottom-0 rounded-full bg-accent" style={{ height: `${shownVolume * 100}%` }} />
                    <div
                      className="absolute left-1/2 w-2.5 h-2.5 -translate-x-1/2 translate-y-1/2 rounded-full bg-white"
                      style={{ bottom: `${shownVolume * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <button
              type="button"
              onClick={toggleMute}
              aria-label={muted ? 'Səsi aç' : 'Səsi bağla'}
              className="w-9 h-9 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition-colors"
            >
              <VolumeIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

/** Miniatür: poster varsa şəkil, yoxdursa videonun ilk kadrı */
function Thumb({ video, index }: { video: PortfolioVideo; index: number }) {
  if (video.poster) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={video.poster} alt="" className="absolute inset-0 w-full h-full object-cover" />
  }
  if (video.src && !isEmbed(video.src)) {
    return (
      <video
        src={`${video.src}#t=0.1`}
        muted
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />
    )
  }
  return <Placeholder index={index} />
}

export default function ShowreelPanel() {
  const [active, setActive] = useState(0)
  const current = showreelVideos[active]

  return (
    <div className="mb-16">
      {/* Böyük pleyer */}
      <div className="rounded-2xl border border-line bg-surface p-1.5 shadow-lift">
        <div className="group/player relative w-full aspect-video rounded-xl overflow-hidden bg-black">
          {/* key: video dəyişəndə pleyer sıfırdan yüklənsin */}
          <MainPlayer key={active} video={current} index={active} />
        </div>
      </div>

      {/* 3 miniatür */}
      <div className="grid grid-cols-3 gap-3 mt-3">
        {showreelVideos.map((video, i) => {
          const isActive = i === active
          return (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`${label(video, i)} videosunu göstər`}
              aria-pressed={isActive}
              className="group text-left"
            >
              <div
                className={`relative w-full aspect-video rounded-xl overflow-hidden transition-colors duration-200 ${
                  isActive
                    ? 'ring-2 ring-accent'
                    : 'ring-1 ring-line opacity-60 group-hover:opacity-100'
                }`}
              >
                <Thumb video={video} index={i} />
              </div>
              <div
                className={`mt-2 text-xs transition-colors ${
                  isActive ? 'text-ink font-semibold' : 'text-muted/70 group-hover:text-muted'
                }`}
              >
                {label(video, i)}
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}
