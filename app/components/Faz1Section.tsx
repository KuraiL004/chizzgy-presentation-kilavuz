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
    <section id="faza1" className="py-24 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-80 bg-[#453027]/10 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Başlıq */}
        <FadeUp className="text-center mb-3">
          <div className="inline-flex items-center gap-2 border border-[#FF6D29]/40 bg-[#FF6D29]/10 rounded-full px-4 py-1.5">
            <span className="text-[#FF6D29] text-xs font-bold tracking-widest uppercase">
              FAZA 1: TƏMƏL QURUCULUQ VƏ SİSTEMİN QURAŞDIRILMASI
            </span>
          </div>
        </FadeUp>
        <FadeUp delay={0.1} className="text-center mb-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Korporativ Brandbook, Marketinq Strategiyası
            <br className="hidden sm:block" />
            və 4 Video Pilot Prodakşn
          </h2>
        </FadeUp>
        <FadeUp delay={0.15} className="text-center mb-14">
          <p className="text-[#BABABA] text-sm sm:text-base max-w-2xl mx-auto">
            Prodakşn mərhələsinə keçməzdən əvvəl brendin bütün fiziki və rəqəmsal aktivlərini vahid standart altına gətirən quraşdırma paketimizdir.
          </p>
        </FadeUp>

        {/* Kartlar */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10"
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
                className={`glass-card rounded-2xl p-8 group transition-all duration-300 ${
                  item.isHighlight ? 'border-[#FF6D29]/60' : ''
                }`}
                style={{ transition: 'transform 0.3s, border-color 0.3s, box-shadow 0.3s' }}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-5">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#453027]/40 border border-[#453027]/70 flex items-center justify-center text-[#FF6D29] group-hover:bg-[#FF6D29]/15 group-hover:border-[#FF6D29]/40 transition-colors">
                      <Icon className="w-6 h-6 text-[#FF6D29]" />
                    </div>
                    <div>
                      <div className="text-[#FF6D29] text-xs font-bold font-mono mb-0.5">
                        BÖLMƏ {item.label}
                      </div>
                      <h3 className="text-white font-bold text-base leading-tight max-w-xs">{item.title}</h3>
                    </div>
                  </div>
                </div>

                {/* Məzmun siyahısı */}
                <ul className="space-y-2.5 mb-6">
                  {item.items.map((it, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-[#BABABA] text-sm leading-snug">
                      <CheckCircle2 className="w-4 h-4 text-[#FF6D29] mt-0.5 shrink-0" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>

                {/* Qiymət */}
                <div className="border-t border-[#453027]/60 pt-5 flex items-end justify-between">
                  <div>
                    {item.originalPrice && (
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[#BABABA] text-sm line-through">{item.originalPrice}</span>
                        <span className="text-xs bg-[#FF6D29]/20 text-[#FF6D29] rounded-full px-2 py-0.5 font-semibold">
                          -{item.discount}
                        </span>
                      </div>
                    )}
                    <div className="text-white text-2xl font-extrabold">{item.price}</div>
                    <div className="text-[#BABABA] text-xs mt-0.5">{item.type}</div>
                  </div>
                  {item.isHighlight && (
                    <div className="bg-[#FF6D29] text-white text-xs font-bold px-3 py-1.5 rounded-full">
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
          <div className="glass-card rounded-2xl p-8 border border-[#FF6D29]/40 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF6D29]/8 rounded-full blur-[80px] pointer-events-none" />
            <div className="relative flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <div className="text-[#FF6D29] text-sm font-bold uppercase tracking-widest mb-2">
                  FAZA 1 — CƏMİ İNVESTİSİYA
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-[#BABABA] text-xl line-through">6.349 ₼</span>
                  <span className="text-white text-4xl sm:text-5xl font-extrabold">5.699 ₼</span>
                </div>
                <div className="text-[#BABABA] text-sm mt-1">
                  Birdəfəlik Quraşdırma · Brandbook · Strategiya · 4 Pilot Video
                </div>
              </div>
              <a
                href="#investisiya"
                className="shrink-0 bg-[#FF6D29] hover:bg-[#e85d1f] text-white font-bold px-8 py-4 rounded-full text-base transition-all duration-200 shadow-[0_0_30px_rgba(255,109,41,0.4)] hover:shadow-[0_0_50px_rgba(255,109,41,0.65)] text-center whitespace-nowrap"
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
