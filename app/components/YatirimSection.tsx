'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { FileSpreadsheet, Rocket, ArrowRight, TrendingUp, Sparkles, Award } from 'lucide-react'
import { FadeUp } from './motion'
import { PeakChart } from '@/components/ui/peak-chart'

const yatirimItems = [
  { label: 'Korporativ Brandbook', price: '2.500 ₼', type: 'Birdəfəlik' },
  { label: 'Media və Motion Bələdçisi', price: '1.000 ₼', type: 'Birdəfəlik' },
  { label: 'Marketinq Strategiyası (11 Bölmə)', price: '1.000 ₼', type: 'Birdəfəlik' },
  {
    label: 'Pilot Prodakşn Testi (4 Premium Video)',
    price: '1.199 ₼',
    type: 'Birdəfəlik Xüsusi Dəstək Qiyməti',
    original: '1.849 ₼',
  },
]

const steps = [
  {
    num: '01',
    title: 'Adım 1 - Quraşdırmanın Başlanması (Təhlil və Araşdırma)',
    desc: "Müqavilə təsdiqi ilə birlikdə Kılavuz Visual Solutions-un mövcud korporativ materialları incələnir; Brandbook, xüsusi LUT/Preset infrastrukturu və 11 bölməlik Marketinq Strategiyası hazırlanaraq rəhbərliyin təsdiqinə təqdim edilir.",
    color: '#FF6D29',
    Icon: FileSpreadsheet,
  },
  {
    num: '02',
    title: 'Adım 2 - Prodakşn və Böyümə (Yaradıcı Həllər)',
    desc: 'Təsdiqlənmiş marka konstitusiyası və strategiyası əsasında ssenarilər yazılır, Bakı müəssisələrində çəkiliş günləri planlaşdırılır və Kilavuz.az hesabı qlobal standartlarda yenidən qurulur.',
    color: '#453027',
    Icon: Rocket,
  },
]

// Kılavuz Visual Solutions üçün xüsusi böyümə proqnozu məlumatları
const GROWTH_DATA: Record<
  string,
  {
    reachData: number[]
    leadsData: number[]
    reachLabels: string[]
    leadsLabels: string[]
    reachPeak: number
    leadsPeak: number
  }
> = {
  Həftəlik: {
    reachData: [12, 18, 25, 42, 68, 95, 120],
    reachLabels: ['B.e', 'Ç.a', 'Çər', 'C.a', 'Cüm', 'Şən', 'Baz'],
    reachPeak: 120,
    leadsData: [1, 2, 2, 4, 7, 9, 14],
    leadsLabels: ['B.e', 'Ç.a', 'Çər', 'C.a', 'Cüm', 'Şən', 'Baz'],
    leadsPeak: 14,
  },
  Aylıq: {
    reachData: [15, 22, 35, 55, 80, 120, 180, 240, 310, 380, 460, 520],
    reachLabels: ['Ay 1', 'Ay 2', 'Ay 3', 'Ay 4', 'Ay 5', 'Ay 6', 'Ay 7', 'Ay 8', 'Ay 9', 'Ay 10', 'Ay 11', 'Ay 12'],
    reachPeak: 520,
    leadsData: [3, 5, 8, 14, 22, 35, 48, 62, 75, 88, 105, 128],
    leadsLabels: ['Ay 1', 'Ay 2', 'Ay 3', 'Ay 4', 'Ay 5', 'Ay 6', 'Ay 7', 'Ay 8', 'Ay 9', 'Ay 10', 'Ay 11', 'Ay 12'],
    leadsPeak: 128,
  },
  İllik: {
    reachData: [45, 120, 280, 520],
    reachLabels: ['Q1', 'Q2', 'Q3', 'Q4'],
    reachPeak: 520,
    leadsData: [12, 38, 75, 128],
    leadsLabels: ['Q1', 'Q2', 'Q3', 'Q4'],
    leadsPeak: 128,
  },
}

export default function YatirimSection() {
  const [period, setPeriod] = React.useState('Aylıq')
  const [chartWidth, setChartWidth] = React.useState(380)

  React.useEffect(() => {
    const handleResize = () => {
      if (typeof window === 'undefined') return
      const w = window.innerWidth
      if (w < 480) {
        setChartWidth(Math.max(280, w - 70))
      } else if (w < 768) {
        setChartWidth(380)
      } else if (w < 1200) {
        setChartWidth(340)
      } else {
        setChartWidth(380)
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const currentGrowth = GROWTH_DATA[period] || GROWTH_DATA['Aylıq']

  return (
    <section id="investisiya" className="py-24 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#453027]/5 to-transparent" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FF6D29]/8 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 left-0 w-80 h-80 bg-[#FF6D29]/5 rounded-full blur-[130px]" />
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

        {/* 1. İNTERAKTİV PROQNOZ VƏ NƏTİCƏ DASHBOARD-U (PEAK CHART ANIMATION) */}
        <FadeUp delay={0.12} className="mb-14">
          <div className="glass-card-elevated rounded-3xl p-6 sm:p-10 border border-[#FF6D29]/50 relative overflow-hidden">
            {/* Arxa plan işıqları */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#FF6D29]/15 rounded-full blur-[90px] pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#453027]/40 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10">
              {/* Üst Məlumat Başlığı */}
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 pb-8 border-b border-[#453027]/60">
                <div className="max-w-2xl">
                  <div className="inline-flex items-center gap-2 border border-[#FF6D29]/40 bg-[#FF6D29]/10 rounded-full px-4 py-1.5 mb-4 text-[#FF6D29] text-xs font-bold tracking-widest uppercase">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>BİZİMLƏ ƏMƏKDAŞLIĞIN BÖYÜMƏ PROQNOZU</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
                    Rəqəmlər Hardan Haraya Yüksələcək?
                  </h3>
                  <p className="text-[#BABABA] text-sm sm:text-base leading-relaxed">
                    Kılavuz Visual Solutions üçün hazırladığımız strateji Brandbook və aylıq 12 Premium Reels prodakşnı ilə orqanik çatımlılıq və B2B korporativ sifariş sorğularının dinamik artım proqnozu:
                  </p>
                </div>

                {/* KPI Xülasə Qutuları */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4 shrink-0">
                  <div className="glass-card rounded-2xl p-4 border border-[#FF6D29]/40">
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#FF6D29] mb-1">
                      <TrendingUp className="w-3.5 h-3.5" />
                      <span>Auditoriya Çatımı</span>
                    </div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-white">
                      +450<span className="text-[#FF6D29]">%</span>
                    </div>
                    <div className="text-[11px] text-[#BABABA] mt-0.5">İlk 6 ayda hədəf</div>
                  </div>

                  <div className="glass-card rounded-2xl p-4 border border-[#453027]">
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#BABABA] mb-1">
                      <Award className="w-3.5 h-3.5 text-[#FF6D29]" />
                      <span>B2B Sorğuları</span>
                    </div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-white">
                      10<span className="text-[#FF6D29]">x</span>
                    </div>
                    <div className="text-[11px] text-[#BABABA] mt-0.5">Yüksək konversiya</div>
                  </div>
                </div>
              </div>

              {/* Peak Charts Yan-yana / Adaptiv */}
              <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
                {/* 1-ci Qrafik: Aylıq Sosial Media Çatımı */}
                <div className="flex flex-col items-center">
                  <div className="mb-3 text-center">
                    <span className="text-xs font-bold text-[#FF6D29] tracking-wider uppercase">
                      İllik Orqanik Çatım Dinamikası
                    </span>
                    <h4 className="text-white font-bold text-sm">Aylıq Video İzlənmələri (Min)</h4>
                  </div>
                  <PeakChart
                    width={chartWidth}
                    accent="#FF6D29"
                    data={currentGrowth.reachData}
                    labels={currentGrowth.reachLabels}
                    value={currentGrowth.reachPeak}
                    valueSuffix="k"
                    decimals={0}
                    title="Orqanik Video Çatımı"
                    caption="Sistemli Brandbook & LUT effekti ilə böyümə"
                    updatedText="Canlı Proqnoz"
                    periods={['Həftəlik', 'Aylıq', 'İllik']}
                    period={period}
                    onPeriodChange={setPeriod}
                    formatValue={(v) => `${Math.round(v)}k`}
                  />
                </div>

                {/* 2-ci Qrafik: B2B Korporativ Sifariş Sorğuları */}
                <div className="flex flex-col items-center">
                  <div className="mb-3 text-center">
                    <span className="text-xs font-bold text-[#FF6D29] tracking-wider uppercase">
                      B2B Müştəri Sorğuları (Leads)
                    </span>
                    <h4 className="text-white font-bold text-sm">Gələn Rəsmi Müraciətlər</h4>
                  </div>
                  <PeakChart
                    width={chartWidth}
                    accent="#453027"
                    data={currentGrowth.leadsData}
                    labels={currentGrowth.leadsLabels}
                    value={currentGrowth.leadsPeak}
                    valueSuffix="+"
                    decimals={0}
                    title="Aylıq Korporativ Müraciət"
                    caption="İstehsalat və çap sifarişləri üzrə artım"
                    updatedText="Hədəf Göstəricisi"
                    periods={['Həftəlik', 'Aylıq', 'İllik']}
                    period={period}
                    onPeriodChange={setPeriod}
                    formatValue={(v) => `${Math.round(v)} müraciət`}
                  />
                </div>
              </div>
            </div>
          </div>
        </FadeUp>

        {/* 2. İNVESTİSİYA CƏDVƏLİ VƏ YOL XƏRİTƏSİ */}
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

                {/* Təhlil və Araşdırma Cəmi */}
                <div className="bg-[#FF6D29]/10 border border-[#FF6D29]/30 rounded-xl p-4 mb-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[#FF6D29] text-xs font-bold uppercase tracking-wide">
                        TƏHLİL VƏ ARAŞDIRMA — Quraşdırma Cəmi
                      </div>
                      <div className="text-[#BABABA] text-xs mt-0.5">Birdəfəlik Quraşdırma Paketi</div>
                    </div>
                    <div className="text-right">
                      <div className="text-[#BABABA] text-sm line-through">6.349 ₼</div>
                      <div className="text-white text-2xl font-extrabold">5.699 ₼</div>
                    </div>
                  </div>
                </div>

                {/* Yaradıcı Həllər */}
                <div className="bg-[#453027]/20 border border-[#453027]/60 rounded-xl p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-white text-xs font-bold uppercase tracking-wide">
                        YARADICI HƏLLƏR — Aylıq Prodakşn
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
