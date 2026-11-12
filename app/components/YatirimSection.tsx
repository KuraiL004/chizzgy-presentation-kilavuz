'use client'

import { motion } from 'framer-motion'
import { FileSpreadsheet, Rocket, ArrowRight } from 'lucide-react'
import { FadeUp } from './motion'

const yatirimItems = [
  { label: 'FAZA 1 (A) — Korporativ Brandbook', price: '2.500 ₼', type: 'Birdəfəlik' },
  { label: 'FAZA 1 (B) — Media və Motion Bələdçisi', price: '1.000 ₼', type: 'Birdəfəlik' },
  { label: 'FAZA 1 (C) — Marketinq Strategiyası (11 Bölmə)', price: '1.000 ₼', type: 'Birdəfəlik' },
  {
    label: 'FAZA 1 (D) — Pilot Prodakşn Testi (4 Premium Video)',
    price: '1.199 ₼',
    type: 'Birdəfəlik Xüsusi Dəstək Qiyməti',
    original: '1.849 ₼',
  },
]

const steps = [
  {
    num: '01',
    title: 'Adım 1 - Quraşdırmanın Başlanması (Faza 1)',
    desc: "Müqavilə təsdiqi ilə birlikdə Kılavuz Visual Solutions-un mövcud korporativ materialları incələnir; Brandbook, xüsusi LUT/Preset infrastrukturu və 11 bölməlik Marketinq Strategiyası hazırlanaraq rəhbərliyin təsdiqinə təqdim edilir.",
    color: '#FF6D29',
    Icon: FileSpreadsheet,
  },
  {
    num: '02',
    title: 'Adım 2 - Prodakşn və Böyümə (Faza 2)',
    desc: 'Təsdiqlənmiş marka konstitusiyası və strategiyası əsasında ssenarilər yazılır, Bakı müəssisələrində çəkiliş günləri planlaşdırılır və Kilavuz.az hesabı qlobal standartlarda yenidən qurulur.',
    color: '#453027',
    Icon: Rocket,
  },
]

export default function YatirimSection() {
  return (
    <section id="investisiya" className="py-24 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#453027]/5 to-transparent" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FF6D29]/8 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Başlıq */}
        <FadeUp className="text-center mb-3">
          <span className="text-[#FF6D29] text-xs font-semibold tracking-widest uppercase">
            İnvestisiya Cədvəli və Yol Xəritəsi
          </span>
        </FadeUp>
        <FadeUp delay={0.1} className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Dəqiq İnvestisiya Xülasəsi və<br className="hidden sm:block" /> İcra Yol Xəritəsi
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {/* İnvestisiya Cədvəli */}
          <FadeUp delay={0.15}>
            <div className="glass-card rounded-2xl overflow-hidden h-full">
              <div className="p-6 border-b border-[#453027]/60">
                <h3 className="text-white font-bold text-lg">İnvestisiya Cədvəli</h3>
              </div>
              <div className="p-6">
                <div className="space-y-4 mb-6">
                  {yatirimItems.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between py-3 border-b border-[#453027]/30 last:border-0"
                    >
                      <div>
                        <div className="text-white text-sm font-medium">{item.label}</div>
                        <div className="text-[#BABABA] text-xs mt-0.5">{item.type}</div>
                      </div>
                      <div className="text-right">
                        {item.original && (
                          <div className="text-[#BABABA] text-xs line-through">{item.original}</div>
                        )}
                        <div className="text-white font-bold">{item.price}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* FAZA 1 Cəmi */}
                <div className="bg-[#FF6D29]/10 border border-[#FF6D29]/30 rounded-xl p-4 mb-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[#FF6D29] text-xs font-bold uppercase tracking-wide">
                        FAZA 1 — Quraşdırma Cəmi
                      </div>
                      <div className="text-[#BABABA] text-xs mt-0.5">Birdəfəlik Quraşdırma Paketi</div>
                    </div>
                    <div className="text-right">
                      <div className="text-[#BABABA] text-sm line-through">6.349 ₼</div>
                      <div className="text-white text-2xl font-extrabold">5.699 ₼</div>
                    </div>
                  </div>
                </div>

                {/* FAZA 2 */}
                <div className="bg-[#453027]/20 border border-[#453027]/60 rounded-xl p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-white text-xs font-bold uppercase tracking-wide">
                        FAZA 2 — Aylıq Prodakşn
                      </div>
                      <div className="text-[#BABABA] text-xs mt-0.5">Pro Paket · 12 Reels · Premium</div>
                    </div>
                    <div className="text-right">
                      <div className="text-[#FF6D29] text-2xl font-extrabold">4.899 ₼</div>
                      <div className="text-[#BABABA] text-xs">/ay</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>

          {/* Yol Xəritəsi */}
          <FadeUp delay={0.2}>
            <div className="glass-card rounded-2xl overflow-hidden h-full">
              <div className="p-6 border-b border-[#453027]/60">
                <h3 className="text-white font-bold text-lg">2 Addımlı Yol Xəritəsi</h3>
              </div>
              <div className="p-6 space-y-6">
                {steps.map((step, i) => {
                  const Icon = step.Icon
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.15, duration: 0.5 }}
                      className="relative pl-6"
                    >
                      {/* Xətt */}
                      {i < steps.length - 1 && (
                        <div className="absolute left-3 top-10 bottom-0 w-0.5 bg-[#453027]" />
                      )}
                      {/* Nömrə */}
                      <div
                        className="absolute left-0 top-1 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white"
                        style={{ background: step.color }}
                      >
                        {step.num}
                      </div>
                      <div>
                        <div className="flex items-center gap-2.5 mb-2">
                          <Icon className="w-5 h-5 text-[#FF6D29]" />
                          <h4 className="text-white font-bold text-base">{step.title}</h4>
                        </div>
                        <p className="text-[#BABABA] text-sm leading-relaxed">{step.desc}</p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </FadeUp>
        </div>

        {/* Son CTA */}
        <FadeUp delay={0.3}>
          <div className="relative glass-card rounded-2xl p-10 text-center border border-[#FF6D29]/30 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#FF6D29]/5 to-transparent pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#FF6D29] to-transparent" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 border border-[#FF6D29]/40 bg-[#FF6D29]/10 rounded-full px-4 py-1.5 mb-5 text-[#FF6D29] text-xs font-bold tracking-widest uppercase">
                STRATEJİ ƏMƏKDAŞLIQ
              </div>
              <h3 className="text-white text-2xl sm:text-3xl font-extrabold mb-3">
                Birlikdə İnşa Edək
              </h3>
              <p className="text-[#BABABA] text-base max-w-lg mx-auto mb-8 leading-relaxed">
                1995-ci ildən bu günə daşınan sənaye mirasınızı, qlobal rəqəmsal standartlarda dünyaya təqdim etməyə hazırsınız?
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="mailto:contact@chizzgy.com?subject=Kilavuz%20Visual%20Solutions%20B2B%20Teklif%20Tesdiqi"
                  className="bg-[#FF6D29] hover:bg-[#e85d1f] text-white font-bold px-10 py-4 rounded-full text-base transition-all duration-200 shadow-[0_0_30px_rgba(255,109,41,0.5)] hover:shadow-[0_0_50px_rgba(255,109,41,0.7)] w-full sm:w-auto inline-flex items-center justify-center gap-2"
                >
                  <span>Dərhal Əlaqə Saxlayın</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#faza1"
                  className="border border-[#453027] hover:border-[#FF6D29] text-[#BABABA] hover:text-white font-semibold px-10 py-4 rounded-full text-base transition-all duration-200 w-full sm:w-auto"
                >
                  Paketi Yenidən İncələ
                </a>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
