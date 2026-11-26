"use client"

import * as React from "react"

/**
 * FluidAuroraBackground
 * - Deep obsidian / charcoal black canvas (#141214)
 * - 3 large heavily blurred (blur-[130px]) organic fluid orbs:
 *    1. Primary Orb: Vibrant Warm Orange (#F97316) - follows mouse with smooth LERP (0.05)
 *    2. Secondary Orb: Deep Amber / Burnt Orange (#EA580C) - counter-parallax inertia (0.02)
 *    3. Accent Orb: Soft Golden Copper (#FB923C) + Warm Crimson (#DC2626) hint - ambient morphing
 * - Fluid Motion & Interactive Pulse on mouse velocity
 * - Ultra-subtle SVG film-grain / noise overlay (opacity: 0.035) to eliminate banding
 * - Soft radial vignette around viewport edges
 * - GPU-accelerated translate3d transforms, zero React re-renders on mousemove
 * - Mobile fallback: gentle figure-eight ambient path
 * - fixed inset-0 -z-10 pointer-events-none overflow-hidden
 */
export function FluidAuroraBackground() {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const orb1Ref = React.useRef<HTMLDivElement>(null)
  const orb2Ref = React.useRef<HTMLDivElement>(null)
  const orb3Ref = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    let animId: number
    let width = window.innerWidth
    let height = window.innerHeight

    // Mouse coordinates and velocity tracking
    const mouse = {
      x: width * 0.5,
      y: height * 0.4,
      targetX: width * 0.5,
      targetY: height * 0.4,
      orb1X: width * 0.5,
      orb1Y: height * 0.4,
      orb2X: width * 0.5,
      orb2Y: height * 0.5,
      lastTargetX: width * 0.5,
      lastTargetY: height * 0.4,
      speed: 0,
      active: false,
    }

    const handleResize = () => {
      width = window.innerWidth
      height = window.innerHeight
    }

    const handlePointerMove = (e: PointerEvent) => {
      mouse.targetX = e.clientX
      mouse.targetY = e.clientY
      mouse.active = true
    }

    const handlePointerLeave = () => {
      mouse.active = false
    }

    window.addEventListener("resize", handleResize, { passive: true })
    window.addEventListener("pointermove", handlePointerMove, { passive: true })
    document.addEventListener("mouseleave", handlePointerLeave, { passive: true })

    const startTime = performance.now()

    const animate = (currentTime: number) => {
      const elapsed = (currentTime - startTime) * 0.001

      // Velocity calculation for dynamic expansion pulse
      const dx = mouse.targetX - mouse.lastTargetX
      const dy = mouse.targetY - mouse.lastTargetY
      const currentSpeed = Math.sqrt(dx * dx + dy * dy)
      mouse.speed += (currentSpeed - mouse.speed) * 0.1
      mouse.lastTargetX = mouse.targetX
      mouse.lastTargetY = mouse.targetY

      // Mobile / Idle fallback: gentle figure-eight path
      if (!mouse.active) {
        const cx = width * 0.5
        const cy = height * 0.4
        const rx = Math.min(width * 0.28, 260)
        const ry = Math.min(height * 0.18, 160)
        mouse.targetX = cx + Math.sin(elapsed * 0.5) * rx
        mouse.targetY = cy + Math.sin(elapsed * 1.0) * ry * 0.6
      }

      // LERP calculations:
      // Primary Orb follows cursor with weighted delay (0.05)
      mouse.orb1X += (mouse.targetX - mouse.orb1X) * 0.05
      mouse.orb1Y += (mouse.targetY - mouse.orb1Y) * 0.05

      // Secondary Orb moves subtly in opposite direction (counter-parallax, 0.02)
      const oppositeTargetX = width - mouse.targetX * 0.5
      const oppositeTargetY = height - mouse.targetY * 0.5
      mouse.orb2X += (oppositeTargetX - mouse.orb2X) * 0.02
      mouse.orb2Y += (oppositeTargetY - mouse.orb2Y) * 0.02

      // Interactive Pulse scale: expands from 1.0 up to 1.35 when moving fast
      const pulseScale = 1.0 + Math.min(mouse.speed * 0.015, 0.35)
      const pulseOpacity = 0.22 + Math.min(mouse.speed * 0.003, 0.08)

      // Continuous ambient organic morphing
      const morph1 = 1 + Math.sin(elapsed * 0.8) * 0.08
      const morph2 = 1 + Math.cos(elapsed * 0.6) * 0.1
      const morph3X = Math.sin(elapsed * 0.35) * (width * 0.15)
      const morph3Y = Math.cos(elapsed * 0.45) * (height * 0.12)

      // Apply GPU-accelerated transforms
      if (orb1Ref.current) {
        const x = mouse.orb1X - 250
        const y = mouse.orb1Y - 250
        const scale = pulseScale * morph1
        orb1Ref.current.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${scale.toFixed(3)})`
        orb1Ref.current.style.opacity = pulseOpacity.toFixed(3)
      }

      if (orb2Ref.current) {
        const x = mouse.orb2X - 280
        const y = mouse.orb2Y - 280
        const scale = morph2
        orb2Ref.current.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${scale.toFixed(3)})`
      }

      if (orb3Ref.current) {
        const x = width * 0.4 + morph3X - 220
        const y = height * 0.6 + morph3Y - 220
        orb3Ref.current.style.transform = `translate3d(${x}px, ${y}px, 0)`
      }

      animId = requestAnimationFrame(animate)
    }

    animId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("pointermove", handlePointerMove)
      document.removeEventListener("mouseleave", handlePointerLeave)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 -z-10 pointer-events-none overflow-hidden select-none"
      style={{ backgroundColor: "#141214" }}
      aria-hidden="true"
    >
      {/* ========================================================
          1. FLUID ORBS LAYER (Mix-blend & Heavy Blurs)
         ======================================================== */}
      <div className="absolute inset-0 w-full h-full filter blur-[130px] opacity-90">
        {/* Primary Orb: Vibrant Warm Orange (#F97316) */}
        <div
          ref={orb1Ref}
          className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full will-change-transform"
          style={{
            background: "radial-gradient(circle, #F06A2E 0%, rgba(240, 106, 46, 0.35) 60%, transparent 100%)",
            opacity: 0.22,
          }}
        />

        {/* Secondary Orb: Deep Amber / Burnt Orange (#EA580C) with Counter-Parallax */}
        <div
          ref={orb2Ref}
          className="absolute top-0 left-0 w-[560px] h-[560px] rounded-full will-change-transform"
          style={{
            background: "radial-gradient(circle, #5A4A41 0%, rgba(90, 74, 65, 0.35) 65%, transparent 100%)",
            opacity: 0.18,
          }}
        />

        {/* Accent Orb: Soft Golden Copper (#FB923C) + Warm Crimson (#DC2626) Depth */}
        <div
          ref={orb3Ref}
          className="absolute top-0 left-0 w-[450px] h-[450px] rounded-full will-change-transform"
          style={{
            background:
              "radial-gradient(circle at 40% 40%, #3B302B 0%, rgba(59, 48, 43, 0.45) 55%, transparent 100%)",
            opacity: 0.2,
          }}
        />
      </div>

      {/* ========================================================
          2. SVG FILM-GRAIN / NOISE OVERLAY (Anti-banding 0.035 opacity)
         ======================================================== */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ opacity: 0.035, mixBlendMode: "overlay" }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="aurora-noise-filter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.75"
            numOctaves="3"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#aurora-noise-filter)" />
      </svg>

      {/* ========================================================
          3. SOFT RADIAL VIGNETTE AROUND VIEWPORT EDGES (#141214)
         ======================================================== */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 90% 75% at 50% 50%, transparent 45%, rgba(20, 18, 20, 0.6) 80%, #141214 100%)",
        }}
      />
    </div>
  )
}

export default FluidAuroraBackground
