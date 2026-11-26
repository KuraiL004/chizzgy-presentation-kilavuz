"use client"

/**
 * AuroraField — full-screen WebGL background.
 *
 * - Mesh gradient: large warm lights (amber, rust, gold, wine, espresso) and two graphite
 *   "shadows" drift slowly over an organically warped plane and blend by distance,
 *   like a soft gradient sphere. A light CSS blur smooths the result further.
 * - The cursor nudges the field in the direction it moves, proportional to its speed.
 *   No swirl, no colour split; when the pointer rests the distortion fades to zero.
 * - Renders at reduced resolution, pauses when the tab is hidden, shows one static
 *   frame for prefers-reduced-motion, and falls back to a CSS gradient without WebGL.
 */

import { useEffect, useRef } from "react"

const VERT = `
attribute vec2 aPos;
void main() { gl_Position = vec4(aPos, 0.0, 1.0); }
`

const FRAG = `
precision mediump float;
uniform vec2 uRes;
uniform float uTime;   // slow drift clock
uniform vec2 uMouse;   // aspect-corrected, centred coords
uniform vec2 uVel;     // smoothed pointer velocity, shader units per second

// palette — Chizzgy warm range, kept below full brightness so text stays readable
const vec3 BASE     = vec3(0.071, 0.063, 0.071); // graphite, a touch under #141214
const vec3 ESPRESSO = vec3(0.231, 0.188, 0.169); // #3B302B
const vec3 WINE     = vec3(0.300, 0.090, 0.050); // deep rust-brown
const vec3 RUST     = vec3(0.560, 0.170, 0.050);
const vec3 AMBER    = vec3(0.800, 0.355, 0.150); // #F06A2E at ~85%
const vec3 GOLD     = vec3(0.720, 0.430, 0.190); // warm gold highlight

float hash(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}
float noise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
             mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
}
float fbm(vec2 p) {
  float v = 0.0, a = 0.5;
  mat2 r = mat2(0.8, -0.6, 0.6, 0.8);
  for (int i = 0; i < 4; i++) { v += a * noise(p); p = r * p * 2.03; a *= 0.5; }
  return v;
}

// one colour light: inverse-distance weight, so neighbouring lights blend smoothly
float wgt(vec2 s, vec2 c, float k) {
  vec2 d = s - c;
  return k / pow(dot(d, d) + 0.035, 1.5);
}

// Mesh gradient: a handful of large coloured lights drifting around the screen,
// blended by distance over an organically warped plane (like a soft gradient ball).
vec3 aurora(vec2 p) {
  float t = uTime;
  vec2 w = vec2(fbm(p * 0.7 + vec2(0.0, 0.6 * t)), fbm(p * 0.7 + vec2(4.3, -0.5 * t))) - 0.5;
  vec2 s = p + w * 0.6;

  vec2 c0 = vec2(-0.55,  0.28) + 0.32 * vec2(sin(t * 3.1),       cos(t * 2.3));
  vec2 c1 = vec2( 0.60,  0.30) + 0.30 * vec2(cos(t * 2.6 + 1.0), sin(t * 3.4));
  vec2 c2 = vec2( 0.05, -0.05) + 0.35 * vec2(sin(t * 2.2 + 2.0), cos(t * 2.9 + 0.5));
  vec2 c3 = vec2(-0.75, -0.40) + 0.28 * vec2(cos(t * 3.6),       sin(t * 2.1 + 1.3));
  vec2 c4 = vec2( 0.70, -0.42) + 0.30 * vec2(sin(t * 2.8 + 0.7), cos(t * 3.3 + 2.1));
  vec2 c5 = vec2( 0.00,  0.55) + 0.40 * vec2(cos(t * 1.9 + 3.0), sin(t * 2.4));
  vec2 c6 = vec2(-0.15, -0.60) + 0.40 * vec2(sin(t * 2.0 + 4.0), cos(t * 1.7));

  float w0 = wgt(s, c0, 0.22);  // amber
  float w1 = wgt(s, c1, 0.2);   // rust
  float w2 = wgt(s, c2, 5.4);   // graphite (keeps the middle calm behind text)
  float w3 = wgt(s, c3, 0.8);   // wine
  float w4 = wgt(s, c4, 0.14);  // gold
  float w5 = wgt(s, c5, 0.6);   // espresso
  float w6 = wgt(s, c6, 4.9);   // graphite

  vec3 col = AMBER * w0 + RUST * w1 + BASE * w2 + WINE * w3 + GOLD * w4 + ESPRESSO * w5 + BASE * w6;
  return col / (w0 + w1 + w2 + w3 + w4 + w5 + w6);
}

void main() {
  vec2 uv = gl_FragCoord.xy / uRes;
  float aspect = uRes.x / uRes.y;
  vec2 p = (uv - 0.5) * vec2(aspect, 1.0);

  // drag the field slightly along the pointer's motion, only near the pointer
  vec2 d = p - uMouse;
  float infl = exp(-dot(d, d) / 0.09);
  p -= uVel * infl * 0.03;

  vec3 col = aurora(p);

  // vignette keeps the edges in the page colour; BRIGHTNESS scales the whole field toward graphite
  const float BRIGHTNESS = 0.6;
  float v = smoothstep(1.3, 0.3, length(p * vec2(0.85, 1.0)));
  col = mix(BASE, col, v * BRIGHTNESS);
  gl_FragColor = vec4(col, 1.0);
}
`

const RES_SCALE = 0.55 // fraction of device pixels rendered; the aurora is soft, upscaling is invisible
const DRIFT = 0.0525   // drift speed (noise units per second) — deliberately very slow
const MAX_VEL = 3      // clamp for pointer velocity (shader units per second)

export function AuroraField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const gl = canvas.getContext("webgl", { antialias: false, alpha: false, premultipliedAlpha: false, powerPreference: "low-power" })
    if (!gl) { canvas.dataset.fallback = "true"; return }

    const compile = (type: number, src: string) => {
      const sh = gl.createShader(type)!
      gl.shaderSource(sh, src)
      gl.compileShader(sh)
      if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(sh) ?? "shader error")
      return sh
    }
    let prog: WebGLProgram
    try {
      prog = gl.createProgram()!
      gl.attachShader(prog, compile(gl.VERTEX_SHADER, VERT))
      gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, FRAG))
      gl.linkProgram(prog)
      if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(prog) ?? "link error")
    } catch (err) {
      console.warn("AuroraField: WebGL unavailable, using CSS fallback", err)
      canvas.dataset.fallback = "true"
      return
    }
    gl.useProgram(prog)

    const buf = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buf)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW)
    const aPos = gl.getAttribLocation(prog, "aPos")
    gl.enableVertexAttribArray(aPos)
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0)

    const uRes = gl.getUniformLocation(prog, "uRes")
    const uTime = gl.getUniformLocation(prog, "uTime")
    const uMouse = gl.getUniformLocation(prog, "uMouse")
    const uVel = gl.getUniformLocation(prog, "uVel")

    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches

    const resize = () => {
      const dpr = Math.min(2, window.devicePixelRatio || 1)
      const rect = canvas.getBoundingClientRect() // larger than the viewport so the CSS blur has no dark edges
      const w = Math.max(1, Math.round(rect.width * dpr * RES_SCALE))
      const h = Math.max(1, Math.round(rect.height * dpr * RES_SCALE))
      canvas.width = w
      canvas.height = h
      gl.viewport(0, 0, w, h)
      gl.uniform2f(uRes, w, h)
    }
    resize()

    // pointer position and velocity in shader space
    const toShader = (cx: number, cy: number) => {
      const r = canvas.getBoundingClientRect()
      const aspect = r.width / r.height
      return { x: ((cx - r.left) / r.width - 0.5) * aspect, y: 0.5 - (cy - r.top) / r.height }
    }
    const mouse = { x: 0, y: 0 }
    const vel = { x: 0, y: 0 }       // smoothed, what the shader sees
    const impulse = { x: 0, y: 0 }   // raw velocity from the latest pointer events
    let lastT = 0
    let hasLast = false
    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return
      const now = performance.now()
      const p = toShader(e.clientX, e.clientY)
      if (hasLast) {
        const dt = Math.max(0.008, (now - lastT) / 1000)
        impulse.x = (p.x - mouse.x) / dt
        impulse.y = (p.y - mouse.y) / dt
        const m = Math.hypot(impulse.x, impulse.y)
        if (m > MAX_VEL) { impulse.x *= MAX_VEL / m; impulse.y *= MAX_VEL / m }
      }
      mouse.x = p.x; mouse.y = p.y
      lastT = now
      hasLast = true
    }
    const onLeave = () => { hasLast = false; impulse.x = impulse.y = 0 }

    let raf = 0
    let last = performance.now()
    let drift = 0
    const frame = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000)
      last = now
      drift += dt * DRIFT
      // the impulse dies quickly once the pointer stops; the shader value eases toward it
      const decay = Math.exp(-dt * 10)
      impulse.x *= decay; impulse.y *= decay
      const k = 1 - Math.exp(-dt * 6)
      vel.x += (impulse.x - vel.x) * k
      vel.y += (impulse.y - vel.y) * k
      gl.uniform1f(uTime, drift + 7.0)
      gl.uniform2f(uMouse, mouse.x, mouse.y)
      gl.uniform2f(uVel, vel.x, vel.y)
      gl.drawArrays(gl.TRIANGLES, 0, 3)
      raf = requestAnimationFrame(frame)
    }

    const start = () => { if (!raf) { last = performance.now(); raf = requestAnimationFrame(frame) } }
    const stop = () => { if (raf) { cancelAnimationFrame(raf); raf = 0 } }
    const onVis = () => (document.hidden ? stop() : start())

    const drawStatic = () => {
      gl.uniform1f(uTime, 7.0)
      gl.uniform2f(uMouse, 0, 0)
      gl.uniform2f(uVel, 0, 0)
      gl.drawArrays(gl.TRIANGLES, 0, 3)
    }
    const onResize = () => {
      resize()
      if (reduce) drawStatic()
    }

    window.addEventListener("resize", onResize)
    if (reduce) {
      drawStatic()
    } else {
      window.addEventListener("pointermove", onMove, { passive: true })
      document.documentElement.addEventListener("pointerleave", onLeave)
      document.addEventListener("visibilitychange", onVis)
      start()
    }

    return () => {
      stop()
      window.removeEventListener("resize", onResize)
      window.removeEventListener("pointermove", onMove)
      document.documentElement.removeEventListener("pointerleave", onLeave)
      document.removeEventListener("visibilitychange", onVis)
      gl.deleteBuffer(buf)
      gl.deleteProgram(prog)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed -inset-[60px] z-0 block w-[calc(100%+120px)] h-[calc(100%+120px)] pointer-events-none blur-[28px] bg-bgdata-[fallback=true]:bg-[radial-gradient(ellipse_80%_55%_at_30%_0%,#3B302B_0%,transparent_70%),radial-gradient(ellipse_60%_45%_at_85%_10%,rgba(122,52,24,0.45)_0%,transparent_70%)]"
    />
  )
}

export default AuroraField
