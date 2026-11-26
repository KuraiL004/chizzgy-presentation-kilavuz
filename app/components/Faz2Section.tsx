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
    <section id="faza2" className="pt-28 pb-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Başlıq */}
        <FadeUp className="text-left mb-5">
          <div className="inline-flex items-center gap-3 before:block before:w-6 before:h-px before:bg-accent">
            <span className="text-accent text-[13px] font-medium">
              YARADICI HƏLLƏR
            </span>
          </div>
        </FadeUp>
        <FadeUp delay={0.1} className="text-left mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink max-w-4xl">
            Aylıq Paketlər və Keyfiyyət Səviyyələri
          </h2>
        </FadeUp>

        {/* Təklif olunan əsas paket — PRO 12 PREMIUM */}
        <FadeUp delay={0.15} className="mb-14">
          <div className="relative glass-card-elevated rounded-3xl p-8 sm:p-10 overflow-hidden">

            {/* Rozet */}
            <div className="inline-flex items-center gap-2 bg-accent text-bg text-[12px] font-semibold px-2.5 py-1 rounded-sm mb-7">
              <Star className="w-3.5 h-3.5 fill-current" />
              <span>KILAVUZ.AZ ÜÇÜN TÖVSİYƏ OLUNAN ƏSAS PRODAKŞN PAKETİ</span>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
              <div className="flex-1">
                <h3 className="text-ink text-2xl sm:text-3xl font-extrabold mb-3">
                  PRO PAKET — 12 REELS
                  <span className="ml-3 font-sans text-sm text-accent font-medium [font-stretch:100%]">Premium Səviyyə</span>
                </h3>
                <p className="text-muted text-[15px] mb-7 leading-relaxed max-w-[60ch]">
                  Təhlil və Araşdırma mərhələsindəki Brandbook və Strategiya təsdiqləndikdən dərhal sonra, hazırlanan bələdçilərə 100% sadiq qalaraq Kilavuz.az hesabını sahəsində lider mövqeyə daşıyacaq aylıq müntəzəm prodakşn prosesimiz.
                </p>
                <ul className="space-y-3">
                  {proDeliveries.map((d, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted text-[15px] leading-snug">
                      <Check className="w-4 h-4 text-accent mt-0.5 shrink-0" strokeWidth={2} />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:w-72 shrink-0 flex flex-col items-start lg:items-end justify-between">
                <div className="text-left lg:text-right">
                  <div className="text-muted text-sm mb-1">Aylıq İnvestisiya</div>
                  <div className="font-display [font-stretch:118%] text-ink text-5xl font-extrabold tabular-nums tracking-[-0.03em] whitespace-nowrap">4.899 ₼</div>
                  <div className="text-muted text-sm mt-1">/ Ay</div>
                </div>
                <a
                  href="#investisiya"
                  className="mt-8 bg-accent hover:bg-accent-press text-bg font-semibold px-6 py-3.5 rounded-md text-sm transition-colors duration-200 whitespace-nowrap"
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
            <div className="p-6 border-b border-line/60 flex flex-col sm:flex-row items-center justify-between gap-4">
              <h3 className="text-ink font-bold text-lg">Bütün Paketləri Müqayisə Et</h3>
              <div className="flex bg-bg rounded-lg p-1 border border-line">
                {levels.map((l) => (
                  <button
                    key={l}
                    onClick={() => setActiveLevel(l)}
                    className={`px-5 py-2 rounded-md text-sm font-semibold transition-colors duration-200 ${
                      activeLevel === l
                        ? 'bg-accent text-bg'
                        : 'text-muted hover:text-white'
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
                  <tr className="border-b border-line/40">
                    <th className="text-left p-5 text-muted text-sm font-semibold">Paket</th>
                    <th className="text-center p-5 text-muted text-sm font-semibold">Reels Sayı</th>
                    <th className="text-center p-5 text-accent text-sm font-bold">
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
                    <th className="text-left p-5 text-muted text-sm font-semibold hidden md:table-cell">
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
                      className={`border-b border-line/30 last:border-0 transition-colors duration-200 ${
                        pkg.isRecommended ? 'bg-accent/5' : 'hover:bg-line/10'
                      }`}
                    >
                      <td className="p-5">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-md bg-raised flex items-center justify-center text-sm font-display tabular-nums font-bold text-ink">
                            {pkg.reels}
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-ink font-bold">{pkg.name}</span>
                              {pkg.isRecommended && (
                                <span className="text-[11px] bg-accent text-bg rounded-sm px-1.5 py-0.5 font-semibold flex items-center gap-1 whitespace-nowrap">
                                  <Flame className="w-2.5 h-2.5 fill-current" />
                                  TÖVSİYƏ EDİLƏN
                                </span>
                              )}
                            </div>
                            <span className="text-muted/60 text-xs">{pkg.levelTag}</span>
                          </div>
                        </div>
                      </td>
                      <td className="p-5 text-center">
                        <span className="text-muted text-sm tabular-nums font-medium">{pkg.reels} Video</span>
                      </td>
                      <td className="p-5 text-center">
                        <AnimatePresence mode="wait">
                          <motion.span
                            key={activeLevel + pkg.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.2 }}
                            className={`font-display [font-stretch:112%] font-extrabold text-lg tabular-nums whitespace-nowrap ${
                              pkg.isRecommended && activeLevel === 'Premium'
                                ? 'text-accent'
                                : 'text-white'
                            }`}
                          >
                            {pkg.prices[activeLevel]}
                          </motion.span>
                        </AnimatePresence>
                        <div className="text-muted text-xs">/ay</div>
                      </td>
                      <td className="p-5 hidden md:table-cell">
                        <span className="text-muted text-sm">{pkg.items}</span>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Düzəliş qeydi */}
            <div className="p-5 border-t border-line/40 bg-line/10">
              <p className="text-muted text-xs">
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
