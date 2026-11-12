'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, Flame, Star } from 'lucide-react'
import { FadeUp } from './motion'

type Level = 'Basic' | 'Standart' | 'Premium'

const levels: Level[] = ['Basic', 'Standart', 'Premium']

const packages = [
  {
    name: 'Start',
    reels: 4,
    prices: { Basic: '699 ₼', Standart: '1.199 ₼', Premium: '1.849 ₼' },
    items: '4 Reels Video, 4 Kapak, 2 Post Tasarımı',
    levelTag: 'Temel Kapasite',
  },
  {
    name: 'Biznes',
    reels: 8,
    prices: { Basic: '1.349 ₼', Standart: '2.299 ₼', Premium: '3.449 ₼' },
    items: '8 Reels Video (1 Adet Hero Kurgu Dahil), 8 Kapak, 4 Post, Senaryo Yazımı',
    levelTag: 'Büyüme Odaklı',
  },
  {
    name: 'Pro',
    reels: 12,
    prices: { Basic: '1.899 ₼', Standart: '3.199 ₼', Premium: '4.899 ₼' },
    items: '12 Reels Video (1 Adet Hero Kurgu Dahil), 12 Kapak, 6 Post, Senaryo, Aylık İçerik Planı',
    levelTag: 'Ana Prodüksiyon',
    isRecommended: true,
  },
  {
    name: 'Lider',
    reels: 16,
    prices: { Basic: '2.499 ₼', Standart: '4.149 ₼', Premium: '6.299 ₼' },
    items: '16 Reels Video (1 Adet Hero Kurgu Dahil), 16 Kapak, 8 Post, Senaryo, İçerik Planı, Özel Proje Koordinatörü',
    levelTag: 'Maksimum Hacim',
  },
]

const proDeliveries = [
  '12 Adet Premium Reels Video Prodüksiyonu (Profesyonel kamera ve ışık ekipmanları)',
  '1 Adet "Hero / Portfolio" Özel Kurgu (Amiral gemisi sinematik film)',
  '12 Adet Özel Reels Kapak (Cover) Tasarımı',
  '6 Adet Premium Post / Gönderi Tasarımı',
  'Senaryo Yazımı ve Aylık İçerik Planı',
  '2 Ücretsiz Revizyon Hakkı (Premium video başına)',
]

export default function Faz2Section() {
  const [activeLevel, setActiveLevel] = useState<Level>('Premium')

  return (
    <section id="faz2" className="py-24 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#FF6D29]/6 rounded-full blur-[120px]" />
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-[#453027]/20 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Başlık */}
        <FadeUp className="text-center mb-3">
          <div className="inline-flex items-center gap-2 border border-[#453027] bg-[#453027]/20 rounded-full px-4 py-1.5">
            <span className="text-[#FF6D29] text-xs font-bold tracking-widest uppercase">
              FAZ 2: AYLIK DİJİTAL PRODÜKSİYON VE YÖNETİM
            </span>
          </div>
        </FadeUp>
        <FadeUp delay={0.1} className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Aylık Paketler ve Seviyeler
          </h2>
        </FadeUp>

        {/* Önerilen Ana Paket — PRO 12 PREMIUM */}
        <FadeUp delay={0.15} className="mb-14">
          <div className="relative glass-card rounded-2xl p-8 border border-[#FF6D29]/50 overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#FF6D29]/8 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#FF6D29] to-transparent" />

            {/* Rozet */}
            <div className="inline-flex items-center gap-2 bg-[#FF6D29] text-white text-xs font-bold px-4 py-1.5 rounded-full mb-6">
              <Star className="w-3.5 h-3.5 fill-white" />
              <span>KILAVUZ.AZ İÇİN ÖNERİLEN ANA PRODÜKSİYON PAKETİ</span>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
              <div className="flex-1">
                <h3 className="text-white text-2xl sm:text-3xl font-extrabold mb-2">
                  PRO PAKET — 12 REELS
                  <span className="ml-3 text-sm text-[#FF6D29] font-semibold">Premium Seviye</span>
                </h3>
                <p className="text-[#BABABA] text-sm mb-6 leading-relaxed max-w-lg">
                  Faz 1&apos;deki Brandbook ve Strateji onaylandıktan hemen sonra, hazırlanan kılavuzlara %100 sadık kalınarak Kilavuz.az hesabını sektörde lider konuma taşıyacak aylık düzenli prodüksiyon sürecimiz.
                </p>
                <ul className="space-y-2.5">
                  {proDeliveries.map((d, i) => (
                    <li key={i} className="flex items-start gap-2 text-[#BABABA] text-sm">
                      <Check className="w-4 h-4 text-[#FF6D29] mt-0.5 shrink-0 stroke-[3]" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:w-56 flex flex-col items-center lg:items-end justify-between">
                <div className="text-center lg:text-right">
                  <div className="text-[#BABABA] text-sm mb-1">Aylık Yatırım</div>
                  <div className="text-[#FF6D29] text-5xl font-extrabold">4.899 ₼</div>
                  <div className="text-[#BABABA] text-sm mt-1">/ Ay</div>
                </div>
                <a
                  href="#yatirim"
                  className="mt-6 bg-[#FF6D29] hover:bg-[#e85d1f] text-white font-bold px-6 py-3 rounded-full text-sm transition-all duration-200 shadow-[0_0_20px_rgba(255,109,41,0.4)] whitespace-nowrap"
                >
                  Paketi Seç →
                </a>
              </div>
            </div>
          </div>
        </FadeUp>

        {/* İnteraktif Karşılaştırma Tablosu */}
        <FadeUp delay={0.2}>
          <div className="glass-card rounded-2xl overflow-hidden">
            {/* Seviye Toggle */}
            <div className="p-6 border-b border-[#453027]/60 flex flex-col sm:flex-row items-center justify-between gap-4">
              <h3 className="text-white font-bold text-lg">Tüm Paketleri Karşılaştır</h3>
              <div className="flex bg-[#161316] rounded-full p-1 border border-[#453027]">
                {levels.map((l) => (
                  <button
                    key={l}
                    onClick={() => setActiveLevel(l)}
                    className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                      activeLevel === l
                        ? 'bg-[#FF6D29] text-white shadow-[0_0_15px_rgba(255,109,41,0.4)]'
                        : 'text-[#BABABA] hover:text-white'
                    }`}
                  >
                    {l}
                  </button>
                ))}
              </div>
            </div>

            {/* Tablo */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#453027]/40">
                    <th className="text-left p-5 text-[#BABABA] text-sm font-semibold">Paket</th>
                    <th className="text-center p-5 text-[#BABABA] text-sm font-semibold">Reels Sayısı</th>
                    <th className="text-center p-5 text-[#FF6D29] text-sm font-bold">
                      <AnimatePresence mode="wait">
                        <motion.span
                          key={activeLevel}
                          initial={{ opacity: 0, y: -6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 6 }}
                          transition={{ duration: 0.2 }}
                        >
                          {activeLevel} Seviye
                        </motion.span>
                      </AnimatePresence>
                    </th>
                    <th className="text-left p-5 text-[#BABABA] text-sm font-semibold hidden md:table-cell">
                      İçerik ve Teslimat Detayı
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {packages.map((pkg, i) => (
                    <motion.tr
                      key={pkg.name}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: i * 0.05 }}
                      className={`border-b border-[#453027]/30 last:border-0 transition-colors duration-200 ${
                        pkg.isRecommended ? 'bg-[#FF6D29]/5' : 'hover:bg-[#453027]/10'
                      }`}
                    >
                      <td className="p-5">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-[#453027]/40 border border-[#453027] flex items-center justify-center text-xs font-mono font-bold text-[#FF6D29]">
                            {pkg.reels}
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-white font-bold">{pkg.name}</span>
                              {pkg.isRecommended && (
                                <span className="text-[10px] bg-[#FF6D29] text-white rounded-full px-2 py-0.5 font-bold flex items-center gap-1">
                                  <Flame className="w-2.5 h-2.5 fill-white" />
                                  ÖNERİLEN
                                </span>
                              )}
                            </div>
                            <span className="text-[#BABABA]/60 text-xs">{pkg.levelTag}</span>
                          </div>
                        </div>
                      </td>
                      <td className="p-5 text-center">
                        <span className="text-[#BABABA] text-sm font-mono font-semibold">{pkg.reels} Video</span>
                      </td>
                      <td className="p-5 text-center">
                        <AnimatePresence mode="wait">
                          <motion.span
                            key={activeLevel + pkg.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.2 }}
                            className={`font-extrabold text-lg ${
                              pkg.isRecommended && activeLevel === 'Premium'
                                ? 'text-[#FF6D29]'
                                : 'text-white'
                            }`}
                          >
                            {pkg.prices[activeLevel]}
                          </motion.span>
                        </AnimatePresence>
                        <div className="text-[#BABABA] text-xs">/ay</div>
                      </td>
                      <td className="p-5 hidden md:table-cell">
                        <span className="text-[#BABABA] text-sm">{pkg.items}</span>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Revizyon notu */}
            <div className="p-5 border-t border-[#453027]/40 bg-[#453027]/10">
              <p className="text-[#BABABA] text-xs">
                <span className="text-white font-semibold">Ekstra Revizyon Notu</span> (3. revizyon ve sonrası):
                Basic 20 ₼/video · Standart 35 ₼/video · Premium 50 ₼/video · Hero Edit 100 ₼/video
              </p>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
