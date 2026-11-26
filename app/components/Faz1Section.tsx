'use client'

import { motion } from 'framer-motion'
import { BookOpen, Clapperboard, BarChart3, Video, CheckCircle2 } from 'lucide-react'
import { FadeUp } from './motion'

const faz1Items = [
  {
    label: 'A',
    title: 'Korporativ Kimlik, Çap Materialları və Promosiya Təlimatı (Brandbook)',
    price: '2.500 ₼',
    type: 'Birdəfəlik Quraşdırma',
    Icon: BookOpen,
    items: [
      'Loqo Sistemi və Arxitekturası (Əsas loqo, ölkələr üzrə sub-brend istifadəsi, təhlükəsizlik sahəsi)',
      'Rəng (HEX, RGB) və Tipoqrafiya Sistemi (CMYK, Pantone daxil)',
      'Rəsmi Korporativ Sənədlər (Vizitkalar, Beyclər, Müqavilə və Hesab-faktura şablonu)',
      'Qablaşdırma və Paketləmə Dizaynları',
      'Korporativ Tekstil və Promosiya (Uniformalar, qələmlər, fincanlar)',
      'Park və Nəqliyyat Vasitələrinin Brendinqi Dizaynı',
    ],
  },
  {
    label: 'B',
    title: 'Media, Fotoqrafiya və Video Prodakşn Təlimatı (Visual & Motion Guidelines)',
    price: '1.000 ₼',
    type: 'Birdəfəlik Quraşdırma',
    Icon: Clapperboard,
    items: [
      'Fotoqrafiya və Videoqrafiya Üslubu (işıq, kadr və kamera hərəkəti qaydaları)',
      'Xüsusi Rəng Profilləri (Custom LUT paketi)',
      'Video Montaj Üslubları, Mətn və Keçid (Transition) Presetləri',
      'Üzlük Fotosu (Cover) və Grid Üslubları',
    ],
  },
  {
    label: 'C',
    title: 'Sosial Media Marketinq Strategiyası (11 Əsas Bölmə)',
    price: '1.000 ₼',
    type: 'Birdəfəlik Quraşdırma',
    Icon: BarChart3,
    items: [
      "01 | Brand Overview — 1995-dən gələn miras və ISO 9001 keyfiyyətinin mövqeləndirilməsi",
      '02 | Target Audience — B2B qərar qəbul edənlər və korporativ satınalmaçılar',
      '03 | Competitor Analysis — Yerli və regional rəqiblərin təhlili, fərqlənmə nöqtələri',
      '04-05 | Social Media Objectives & Platform Strategy',
      '06-07 | Content Strategy & Content Pillars',
      '08-09 | Tone of Voice & Visual Direction',
      '10-11 | Content Calendar & KPI Tracking',
    ],
  },
  {
    label: 'D',
    title: 'Pilot Prodakşn Testi — 4 Ədəd Premium Video',
    price: '1.199 ₼',
    type: 'Birdəfəlik Xüsusi Dəstək Qiyməti',
    originalPrice: '1.849 ₼',
    discount: '650 ₼ Quraşdırma Üstünlüyü',
    Icon: Video,
    items: [
      '4 Ədəd Premium Reels konsept videosu',
      'Hər videoya xüsusi üzlük/post dizaynı',
      "Brandbook standartlarına uyğun LUT və montaj tətbiqi",
      'Bakı istehsalat müəssisələrindən real çəkilişlər',
    ],
    isHighlight: true,
  },
]

export default function Faz1Section() {
  return (
    <section id="faza1" className="pt-28 pb-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Başlıq */}
        <FadeUp className="text-left mb-5">
          <div className="inline-flex items-center gap-3 before:block before:w-6 before:h-px before:bg-accent">
            <span className="text-accent text-[13px] font-medium">
              TƏHLİL
            </span>
          </div>
        </FadeUp>
        <FadeUp delay={0.1} className="text-left mb-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink max-w-4xl">
            Korporativ Brandbook, Marketinq Strategiyası
            <br />
            və 4 Video Pilot Prodakşn
          </h2>
        </FadeUp>
        <FadeUp delay={0.15} className="text-left mb-14">
          <p className="text-muted text-base sm:text-[1.0625rem] leading-relaxed max-w-[60ch]">
            Prodakşn mərhələsinə keçməzdən əvvəl brendin bütün fiziki və rəqəmsal aktivlərini vahid standart altına gətirən quraşdırma paketimizdir.
          </p>
        </FadeUp>

        {/* Kartlar */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-6"
        >
          {faz1Items.map((item, i) => {
            const Icon = item.Icon
            return (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
                }}
                whileHover={{ y: -3 }}
                className={`glass-card rounded-2xl p-7 sm:p-8 group flex flex-col ${
                  item.isHighlight ? 'border-accent/60 bg-raised' : ''
                }`}
                style={{ transition: 'transform 0.3s, border-color 0.3s, box-shadow 0.3s' }}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-5">
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 shrink-0 rounded-xl bg-bg/60 border border-line flex items-center justify-center text-accent">
                      <Icon className="w-5 h-5 text-accent" strokeWidth={1.5} />
                    </div>
                    <div>
                      <div className="text-muted text-[13px] font-medium mb-1">
                        BÖLMƏ {item.label}
                      </div>
                      <h3 className="text-ink font-bold text-lg leading-snug max-w-sm">{item.title}</h3>
                    </div>
                  </div>
                </div>

                {/* Məzmun siyahısı */}
                <ul className="space-y-3 mb-8 flex-1">
                  {item.items.map((it, j) => (
                    <li key={j} className="flex items-start gap-3 text-muted text-[15px] leading-snug">
                      <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 shrink-0" strokeWidth={1.75} />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>

                {/* Qiymət */}
                <div className="border-t border-line pt-6 flex items-end justify-between gap-4">
                  <div>
                    {item.originalPrice && (
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-muted text-sm line-through tabular-nums whitespace-nowrap">{item.originalPrice}</span>
                        <span className="text-[13px] text-accent font-medium">
                          -{item.discount}
                        </span>
                      </div>
                    )}
                    <div className="font-display [font-stretch:112%] text-ink text-3xl font-extrabold tabular-nums whitespace-nowrap">{item.price}</div>
                    <div className="text-muted text-[13px] mt-1">{item.type}</div>
                  </div>
                  {item.isHighlight && (
                    <div className="bg-accent text-bg text-[12px] font-semibold px-2.5 py-1 rounded-sm whitespace-nowrap">
                      XÜSUSİ TƏKLİF
                    </div>
                  )}
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* FAZA 1 CƏMİ */}
        <FadeUp delay={0.2}>
          <div className="glass-card-elevated rounded-3xl p-8 sm:p-10 relative overflow-hidden">
            <div className="relative flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <div className="text-accent text-[13px] font-medium mb-3">
                  TƏHLİL VƏ ARAŞDIRMA — CƏMİ İNVESTİSİYA
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-display text-muted text-xl line-through decoration-1 tabular-nums">6.349 ₼</span>
                  <span className="font-display [font-stretch:118%] text-ink text-5xl sm:text-6xl font-extrabold tabular-nums tracking-[-0.03em]">5.699 ₼</span>
                </div>
                <div className="text-muted text-sm mt-3">
                  Birdəfəlik Quraşdırma · Brandbook · Strategiya · 4 Pilot Video
                </div>
              </div>
              <a
                href="#investisiya"
                className="shrink-0 bg-accent hover:bg-accent-press text-bg font-semibold px-7 py-4 rounded-md text-base transition-colors duration-200 text-center whitespace-nowrap"
              >
                Təklifi Təsdiq Et →
              </a>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
