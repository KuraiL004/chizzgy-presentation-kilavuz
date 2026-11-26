'use client'

import type { ReactNode } from 'react'

type VideoSlotProps = {
  src: string
  poster?: string
  title?: string
  className?: string
  /** Video yoxdursa göstəriləcək yer tutucu */
  fallback?: ReactNode
  /** Reels kartları üçün: oynamır, hover-də səssiz oynayır */
  mode?: 'showreel' | 'reel'
}

const EMBED_HOSTS = ['player.vimeo.com', 'youtube.com/embed', 'youtube-nocookie.com/embed']

export function isEmbed(src: string) {
  return EMBED_HOSTS.some((host) => src.includes(host))
}

export function VideoSlot({ src, poster, title, className = '', fallback, mode = 'showreel' }: VideoSlotProps) {
  if (!src) return <>{fallback}</>

  if (isEmbed(src)) {
    return (
      <iframe
        src={src}
        title={title ?? 'Chizzgy video'}
        className={`absolute inset-0 w-full h-full border-0 ${className}`}
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        loading="lazy"
      />
    )
  }

  if (mode === 'reel') {
    return (
      <video
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={title}
        className={`absolute inset-0 w-full h-full object-cover ${className}`}
        onMouseEnter={(e) => e.currentTarget.play().catch(() => {})}
        onMouseLeave={(e) => {
          e.currentTarget.pause()
          e.currentTarget.currentTime = 0
        }}
      />
    )
  }

  return (
    <video
      src={src}
      poster={poster}
      controls
      playsInline
      preload="metadata"
      aria-label={title}
      className={`absolute inset-0 w-full h-full object-cover ${className}`}
    />
  )
}
