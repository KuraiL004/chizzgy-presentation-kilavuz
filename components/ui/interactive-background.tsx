"use client"

import * as React from "react"

/**
 * InteractiveBackground Component
 * - Base dark canvas (#141214)
 * - Dot grid pattern (1px dots, 24px spacing, subtle opacity)
 * - Smooth cursor spotlight via LERP (linear interpolation) with 400px radius warm accent #F06A2E at 7% opacity
 * - Proximity reaction: dots within 120px scale up to 1.5x and brighten
 * - HTML5 Canvas + requestAnimationFrame (60fps, no React re-renders on mousemove)
 * - Graceful ambient floating motion on touch/mobile or when idle
 * - pointer-events-none, fixed positioning, z-0
 */
export function InteractiveBackground() {
  const canvasRef = React.useRef<HTMLCanvasElement>(null)

  React.useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d", { alpha: false })
    if (!ctx) return

    let animationFrameId: number
    let width = 0
    let height = 0
    let dpr = 1

    // Mouse coordinates & LERP tracking
    const mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      active: false,
    }

    const SPACING = 24
    const BASE_DOT_RADIUS = 1
    const SPOTLIGHT_RADIUS = 400
    const PROXIMITY_RADIUS = 120
    const LERP_FACTOR = 0.08

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = window.innerWidth
      height = window.innerHeight

      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`

      ctx.scale(dpr, dpr)
    }

    resize()
    window.addEventListener("resize", resize, { passive: true })

    const handlePointerMove = (e: PointerEvent) => {
      mouse.targetX = e.clientX
      mouse.targetY = e.clientY
      mouse.active = true
    }

    const handlePointerLeave = () => {
      mouse.active = false
    }

    window.addEventListener("pointermove", handlePointerMove, { passive: true })
    document.addEventListener("mouseleave", handlePointerLeave, { passive: true })

    let startTime = performance.now()

    const render = (currentTime: number) => {
      const elapsed = (currentTime - startTime) * 0.001

      // If mouse is inactive or on touch devices, simulate a gentle ambient floating spotlight
      if (!mouse.active) {
        const cx = width * 0.5
        const cy = height * 0.4
        const floatRadiusX = Math.min(width * 0.25, 200)
        const floatRadiusY = Math.min(height * 0.15, 120)
        mouse.targetX = cx + Math.sin(elapsed * 0.6) * floatRadiusX
        mouse.targetY = cy + Math.cos(elapsed * 0.4) * floatRadiusY
      }

      // Smooth interpolation (lerp)
      if (mouse.x < -500) {
        mouse.x = mouse.targetX
        mouse.y = mouse.targetY
      } else {
        mouse.x += (mouse.targetX - mouse.x) * LERP_FACTOR
        mouse.y += (mouse.targetY - mouse.y) * LERP_FACTOR
      }

      const mx = mouse.x
      const my = mouse.y

      // 1. Base Layer Fill (#141214)
      ctx.fillStyle = "#141214"
      ctx.fillRect(0, 0, width, height)

      // 2. Cursor Spotlight (400px radius warm accent #F06A2E at 7% opacity)
      const spotlightGrad = ctx.createRadialGradient(mx, my, 0, mx, my, SPOTLIGHT_RADIUS)
      spotlightGrad.addColorStop(0, "rgba(240, 106, 46, 0.07)")
      spotlightGrad.addColorStop(0.5, "rgba(240, 106, 46, 0.025)")
      spotlightGrad.addColorStop(1, "rgba(240, 106, 46, 0)")

      ctx.fillStyle = spotlightGrad
      ctx.fillRect(0, 0, width, height)

      // 3. Dot Grid Pattern & Proximity Reaction
      const cols = Math.ceil(width / SPACING) + 1
      const rows = Math.ceil(height / SPACING) + 1

      const proxSq = PROXIMITY_RADIUS * PROXIMITY_RADIUS
      const spotSq = SPOTLIGHT_RADIUS * SPOTLIGHT_RADIUS

      for (let r = 0; r < rows; r++) {
        const y = r * SPACING
        for (let c = 0; c < cols; c++) {
          const x = c * SPACING

          const dx = x - mx
          const dy = y - my
          const distSq = dx * dx + dy * dy

          let radius = BASE_DOT_RADIUS
          let alpha = 0.16 // default subtle low opacity

          // Proximity reaction within 120px: scale up to 1.5x and brighten
          if (distSq < proxSq) {
            const dist = Math.sqrt(distSq)
            const factor = 1 - dist / PROXIMITY_RADIUS
            radius = BASE_DOT_RADIUS * (1 + 0.5 * factor) // up to 1.5x
            alpha = 0.16 + 0.65 * factor // brighten in opacity up to ~0.8
          } else if (distSq < spotSq) {
            // Subtle illumination under spotlight
            const dist = Math.sqrt(distSq)
            const factor = 1 - dist / SPOTLIGHT_RADIUS
            alpha = 0.16 + 0.22 * factor
          }

          ctx.fillStyle = `rgba(168, 161, 155, ${alpha.toFixed(3)})`
          ctx.beginPath()
          ctx.arc(x, y, radius, 0, Math.PI * 2)
          ctx.fill()
        }
      }

      animationFrameId = requestAnimationFrame(render)
    }

    animationFrameId = requestAnimationFrame(render)

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener("resize", resize)
      window.removeEventListener("pointermove", handlePointerMove)
      document.removeEventListener("mouseleave", handlePointerLeave)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 w-full h-full block"
      style={{
        backgroundColor: "#141214",
      }}
      aria-hidden="true"
    />
  )
}

export default InteractiveBackground
