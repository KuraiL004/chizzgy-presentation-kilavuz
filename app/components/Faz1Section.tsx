'use client'

import { motion } from 'framer-motion'
import { BookOpen, Clapperboard, BarChart3, Video, CheckCircle2 } from 'lucide-react'
import { FadeUp } from './motion'

const faz1Items = [
  {
    label: 'A',
    title: 'Kurumsal Kimlik, Basılı Materyal ve Promosyon Kılavuzu (Brandbook)',
    price: '2.500 ₼',
    type: 'Tek Seferlik',
    Icon: BookOpen,
    items: [
      'Logo Sistemi ve Mimarisi (Ana logo, ülke bazlı alt marka kullanımları, güvenlik alanı)',
      'Renk (HEX, RGB) ve Tipografi Sistemi (CMYK, Pantone dahil)',
      'Resmi Kurumsal Evraklar (Kartvizit, Badge, Contract, Fatura şablonu)',
      'Ambalaj ve Paketleme Tasarımları',
      'Kurumsal Tekstil ve Promosyon (Üniformalar, kalemler, kupalar)',
      'Filo ve Araç Giydirme Tasarımları',
    ],
  },
  {
    label: 'B',
    title: 'Medya, Fotoğrafçılık ve Video Prodüksiyon Kılavuzu (Visual & Motion Guidelines)',
    price: '1.000 ₼',
    type: 'Tek Seferlik',
    Icon: Clapperboard,
    items: [
      'Fotoğrafçılık ve Videography Stili (ışık, kadraj ve kamera hareketi kuralları)',
      'Özel Renk Profilleri (Custom LUT paketi)',
      'Video Kurgu Stilleri, Text & Transition Presetleri',
      'Kapak Fotoğrafı (Cover) ve Grid Stilleri',
    ],
  },
  {
    label: 'C',
    title: 'Sosyal Medya Pazarlama Stratejisi (11 Temel Bölüm)',
    price: '1.000 ₼',
    type: 'Tek Seferlik',
    Icon: BarChart3,
    items: [
      "01 | Brand Overview — 1995'ten gelen miras ve ISO 9001 kalitesinin konumlandırması",
      '02 | Target Audience — B2B karar vericiler ve kurumsal satın almacılar',
      '03 | Competitor Analysis — Yerel/bölgesel rakip analizi ve ayrışma noktaları',
      '04-05 | Social Media Objectives & Platform Strategy',
      '06-07 | Content Strategy & Content Pillars',
      '08-09 | Tone of Voice & Visual Direction',
      '10-11 | Content Calendar & KPI Tracking',
    ],
  },
  {
    label: 'D',
    title: 'Pilot Prodüksiyon Testi — 4 Adet Premium Video',
    price: '1.199 ₼',
    type: 'Tek Seferlik Özel Fiyat',
    originalPrice: '1.849 ₼',
    discount: '650 ₼ Kurulum Avantajı',
    Icon: Video,
    items: [
      '4 Adet Premium Reels konsept videosu',
      'Her videoya özel kapak/post tasarımı',
      "Brandbook'a uygun LUT ve preset uygulaması",
      'Sahadan gerçek prodüksiyon çekimi (Bakü tesisleri)',
    ],
    isHighlight: true,
  },
]

export default function Faz1Section() {
  return (
    <section id="faz1" className="py-24 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-80 bg-[#453027]/10 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Başlık */}
        <FadeUp className="text-center mb-3">
          <div className="inline-flex items-center gap-2 border border-[#FF6D29]/40 bg-[#FF6D29]/10 rounded-full px-4 py-1.5">
            <span className="text-[#FF6D29] text-xs font-bold tracking-widest uppercase">
              FAZ 1: TEMEL İNŞA VE SİSTEM KURULUMU
            </span>
          </div>
        </FadeUp>
        <FadeUp delay={0.1} className="text-center mb-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Kurumsal Brandbook, Pazarlama Stratejisi
            <br className="hidden sm:block" />
            ve 4 Video Pilot Prodüksiyon
          </h2>
        </FadeUp>
        <FadeUp delay={0.15} className="text-center mb-14">
          <p className="text-[#BABABA] text-sm sm:text-base max-w-2xl mx-auto">
            Prodüksiyon aşamasına geçmeden önce markanın tüm fiziksel ve dijital varlıklarını tek bir standart altına alacak olan kurulum paketimizdir.
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
                        BÖLÜM {item.label}
                      </div>
                      <h3 className="text-white font-bold text-base leading-tight max-w-xs">{item.title}</h3>
                    </div>
                  </div>
                </div>

                {/* İçerik listesi */}
                <ul className="space-y-2.5 mb-6">
                  {item.items.map((it, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-[#BABABA] text-sm leading-snug">
                      <CheckCircle2 className="w-4 h-4 text-[#FF6D29] mt-0.5 shrink-0" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>

                {/* Fiyat */}
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
                      ÖZEL KURULUM FIRSATI
                    </div>
                  )}
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* FAZ 1 TOPLAM */}
        <FadeUp delay={0.2}>
          <div className="glass-card rounded-2xl p-8 border border-[#FF6D29]/40 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF6D29]/8 rounded-full blur-[80px] pointer-events-none" />
            <div className="relative flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <div className="text-[#FF6D29] text-sm font-bold uppercase tracking-widest mb-2">
                  FAZ 1 — TOPLAM YATIRIM
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-[#BABABA] text-xl line-through">6.349 ₼</span>
                  <span className="text-white text-4xl sm:text-5xl font-extrabold">5.699 ₼</span>
                </div>
                <div className="text-[#BABABA] text-sm mt-1">
                  Tek Seferlik Kurulum · Brandbook · Strateji · 4 Pilot Video
                </div>
              </div>
              <a
                href="#yatirim"
                className="shrink-0 bg-[#FF6D29] hover:bg-[#e85d1f] text-white font-bold px-8 py-4 rounded-full text-base transition-all duration-200 shadow-[0_0_30px_rgba(255,109,41,0.4)] hover:shadow-[0_0_50px_rgba(255,109,41,0.65)] text-center whitespace-nowrap"
              >
                Teklifi Onayla →
              </a>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
