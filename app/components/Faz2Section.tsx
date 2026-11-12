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
    items: '4 Reels Video, 4 Üzlük, 2 Post Dizaynı',
    levelTag: 'Baza Həcmi',
  },
  {
    name: 'Biznes',
    reels: 8,
    prices: { Basic: '1.349 ₼', Standart: '2.299 ₼', Premium: '3.449 ₼' },
    items: '8 Reels Video (1 Ədəd Hero Montajı Daxil), 8 Üzlük, 4 Post, Ssenari Yazımı',
    levelTag: 'İnkişaf Yönümlü',
  },
  {
    name: 'Pro',
    reels: 12,
    prices: { Basic: '1.899 ₼', Standart: '3.199 ₼', Premium: '4.899 ₼' },
    items: '12 Reels Video (1 Ədəd Hero Montajı Daxil), 12 Üzlük, 6 Post, Ssenari, Aylıq Məzmun Planı',
    levelTag: 'Əsas Prodakşn',
    isRecommended: true,
  },
  {
    name: 'Lider',
    reels: 16,
    prices: { Basic: '2.499 ₼', Standart: '4.149 ₼', Premium: '6.299 ₼' },
    items: '16 Reels Video (1 Ədəd Hero Montajı Daxil), 16 Üzlük, 8 Post, Ssenari, Məzmun Planı, Şəxsi Layihə Koordinatoru',
    levelTag: 'Maksimum Həcm',
  },
]

const proDeliveries = [
  '12 Ədəd Premium Reels Video Prodakşnı (Peşəkar kamera və işıqlandırma avadanlıqları ilə Bakı müəssisələrində çəkiliş)',
  '1 Ədəd "Hero / Portfel" Xüsusi Montajı (Kılavuz-un sənaye gücünü ən yüksək səviyyədə əks etdirən flaqman film)',
  '12 Ədəd Xüsusi Reels Üzlük (Cover) Dizaynı (Instagram grid bütövlüyünü qoruyan şablon sistemi)',
  '6 Ədəd Premium Post / Qrafik Dizayn (Korporativ elanlar, xidmətlər və texniki gücü izah edən statik/karusel dizaynlar)',
  'Ssenari Müəllifliyi və Aylıq Nəşr Təqvimi (Hər videonun çəkiliş öncəsi ssenariləşdirilməsi)',
  '2 Pulsuz Düzəliş (Reviziya) Hüququ (Hər video üçün rahat və zəmanətli proses)',
]

export default function Faz2Section() {
  const [activeLevel, setActiveLevel] = useState<Level>('Premium')

  return (
    <section id="faza2" className="py-24 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#FF6D29]/6 rounded-full blur-[120px]" />
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-[#453027]/20 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Başlıq */}
        <FadeUp className="text-center mb-3">
          <div className="inline-flex items-center gap-2 border border-[#453027] bg-[#453027]/20 rounded-full px-4 py-1.5">
            <span className="text-[#FF6D29] text-xs font-bold tracking-widest uppercase">
              FAZA 2: AYLIQ RƏQƏMSAL PRODAKŞN VƏ İDARƏETMƏ
            </span>
          </div>
        </FadeUp>
        <FadeUp delay={0.1} className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Aylıq Paketlər və Keyfiyyət Səviyyələri
          </h2>
        </FadeUp>

        {/* Təklif olunan əsas paket — PRO 12 PREMIUM */}
        <FadeUp delay={0.15} className="mb-14">
          <div className="relative glass-card rounded-2xl p-8 border border-[#FF6D29]/50 overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#FF6D29]/8 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#FF6D29] to-transparent" />

            {/* Rozet */}
            <div className="inline-flex items-center gap-2 bg-[#FF6D29] text-white text-xs font-bold px-4 py-1.5 rounded-full mb-6">
              <Star className="w-3.5 h-3.5 fill-white" />
              <span>KILAVUZ.AZ ÜÇÜN TÖVSİYƏ OLUNAN ƏSAS PRODAKŞN PAKETİ</span>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
              <div className="flex-1">
                <h3 className="text-white text-2xl sm:text-3xl font-extrabold mb-2">
                  PRO PAKET — 12 REELS
                  <span className="ml-3 text-sm text-[#FF6D29] font-semibold">Premium Səviyyə</span>
                </h3>
                <p className="text-[#BABABA] text-sm mb-6 leading-relaxed max-w-lg">
                  Faza 1-dəki Brandbook və Strategiya təsdiqləndikdən dərhal sonra, hazırlanan bələdçilərə 100% sadiq qalaraq Kilavuz.az hesabını sahəsində lider mövqeyə daşıyacaq aylıq müntəzəm prodakşn prosesimiz.
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
                  <div className="text-[#BABABA] text-sm mb-1">Aylıq İnvestisiya</div>
                  <div className="text-[#FF6D29] text-5xl font-extrabold">4.899 ₼</div>
                  <div className="text-[#BABABA] text-sm mt-1">/ Ay</div>
                </div>
                <a
                  href="#investisiya"
                  className="mt-6 bg-[#FF6D29] hover:bg-[#e85d1f] text-white font-bold px-6 py-3 rounded-full text-sm transition-all duration-200 shadow-[0_0_20px_rgba(255,109,41,0.4)] whitespace-nowrap"
                >
                  Paketi Seç →
                </a>
              </div>
            </div>
          </div>
        </FadeUp>

        {/* İnteraktiv Müqayisə Cədvəli */}
        <FadeUp delay={0.2}>
          <div className="glass-card rounded-2xl overflow-hidden">
            {/* Səviyyə Keçidi */}
            <div className="p-6 border-b border-[#453027]/60 flex flex-col sm:flex-row items-center justify-between gap-4">
              <h3 className="text-white font-bold text-lg">Bütün Paketləri Müqayisə Et</h3>
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

            {/* Cədvəl */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#453027]/40">
                    <th className="text-left p-5 text-[#BABABA] text-sm font-semibold">Paket</th>
                    <th className="text-center p-5 text-[#BABABA] text-sm font-semibold">Reels Sayı</th>
                    <th className="text-center p-5 text-[#FF6D29] text-sm font-bold">
                      <AnimatePresence mode="wait">
                        <motion.span
                          key={activeLevel}
                          initial={{ opacity: 0, y: -6 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 6 }}
                          transition={{ duration: 0.2 }}
                        >
                          {activeLevel} Qiymət
                        </motion.span>
                      </AnimatePresence>
                    </th>
                    <th className="text-left p-5 text-[#BABABA] text-sm font-semibold hidden md:table-cell">
                      Məzmun və Təhvil Detalları
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
                                  TÖVSİYƏ EDİLƏN
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

            {/* Düzəliş qeydi */}
            <div className="p-5 border-t border-[#453027]/40 bg-[#453027]/10">
              <p className="text-[#BABABA] text-xs">
                <span className="text-white font-semibold">Əlavə Düzəliş Qeydi</span> (3-cü düzəliş və sonrası):
                Basic 20 ₼/video · Standart 35 ₼/video · Premium 50 ₼/video · Hero Montaj 100 ₼/video
              </p>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
