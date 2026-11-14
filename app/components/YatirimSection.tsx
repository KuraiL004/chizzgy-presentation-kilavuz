'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { FileSpreadsheet, Rocket, ArrowRight, TrendingUp, Sparkles, Users, Award } from 'lucide-react'
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

// 3 Ədəd B2B İndikator / Göstərici Kartı (Yuxarıdakı kartlar)
const indicatorCards = [
  {
    id: 'card-1',
    title: 'Aylıq B2B Orqanik Çatım',
    value: '250K+',
    subtext: 'Yalnızca hədəf kütləyə çatan optimize edilmiş illik baxış.',
    icon: TrendingUp,
    badge: 'Auditoriya',
  },
  {
    id: 'card-2',
    title: 'Korporativ Müraciətlər (Leads)',
    value: '85+',
    subtext: 'Hər ay birbaşa rəsmi təklif istəyən yeni şirkət sayı.',
    icon: Users,
    badge: 'Müştəri Axını',
  },
  {
    id: 'card-3',
    title: 'Satış Konversiya Artımı',
    value: '+40%',
    subtext: 'Premium Brandbook sayəsində görüşmələrin satışa çevrilmə dərəcəsi.',
    icon: Award,
    badge: 'Effektivlik',
  },
]

// 3 Ədəd Dashboard üçün dövrlər üzrə məlumatlar:
// 1. Aylıq B2B Orqanik Çatım (250K+)
// 2. Korporativ Müraciətlər - Leads (85+)
// 3. Satış Konversiya Artımı (+40%)
const THREE_DASHBOARDS_DATA: Record<
  string,
  {
    // 1. Orqanik Çatım
    reachData: number[]
    reachLabels: string[]
    reachValue: number

    // 2. Korporativ Müraciətlər
    leadsData: number[]
    leadsLabels: string[]
    leadsValue: number

    // 3. Satış Konversiya Artımı
    conversionData: number[]
    conversionLabels: string[]
    conversionValue: number
  }
> = {
  Həftəlik: {
    reachData: [25, 45, 70, 110, 160, 210, 250],
    reachLabels: ['B.e', 'Ç.a', 'Çər', 'C.a', 'Cüm', 'Şən', 'Baz'],
    reachValue: 250,

    leadsData: [8, 15, 24, 38, 52, 68, 85],
    leadsLabels: ['B.e', 'Ç.a', 'Çər', 'C.a', 'Cüm', 'Şən', 'Baz'],
    leadsValue: 85,

    conversionData: [12, 16, 22, 28, 33, 37, 40],
    conversionLabels: ['B.e', 'Ç.a', 'Çər', 'C.a', 'Cüm', 'Şən', 'Baz'],
    conversionValue: 40,
  },
  Aylıq: {
    reachData: [35, 50, 75, 105, 140, 175, 195, 215, 230, 240, 248, 250],
    reachLabels: ['Ay 1', 'Ay 2', 'Ay 3', 'Ay 4', 'Ay 5', 'Ay 6', 'Ay 7', 'Ay 8', 'Ay 9', 'Ay 10', 'Ay 11', 'Ay 12'],
    reachValue: 250,

    leadsData: [12, 18, 26, 35, 44, 53, 62, 69, 74, 78, 82, 85],
    leadsLabels: ['Ay 1', 'Ay 2', 'Ay 3', 'Ay 4', 'Ay 5', 'Ay 6', 'Ay 7', 'Ay 8', 'Ay 9', 'Ay 10', 'Ay 11', 'Ay 12'],
    leadsValue: 85,

    conversionData: [8, 12, 16, 21, 25, 29, 32, 35, 37, 38, 39, 40],
    conversionLabels: ['Ay 1', 'Ay 2', 'Ay 3', 'Ay 4', 'Ay 5', 'Ay 6', 'Ay 7', 'Ay 8', 'Ay 9', 'Ay 10', 'Ay 11', 'Ay 12'],
    conversionValue: 40,
  },
  İllik: {
    reachData: [60, 125, 195, 250],
    reachLabels: ['Q1', 'Q2', 'Q3', 'Q4'],
    reachValue: 250,

    leadsData: [20, 42, 66, 85],
    leadsLabels: ['Q1', 'Q2', 'Q3', 'Q4'],
    leadsValue: 85,

    conversionData: [14, 24, 34, 40],
    conversionLabels: ['Q1', 'Q2', 'Q3', 'Q4'],
    conversionValue: 40,
  },
}

export default function YatirimSection() {
  const [period, setPeriod] = React.useState('Aylıq')
  const [chartWidth, setChartWidth] = React.useState(340)

  React.useEffect(() => {
    const handleResize = () => {
      if (typeof window === 'undefined') return
      const w = window.innerWidth
      if (w < 440) {
        setChartWidth(Math.max(260, w - 60))
      } else if (w < 640) {
        setChartWidth(340)
      } else if (w < 1024) {
        setChartWidth(360)
      } else if (w < 1280) {
        setChartWidth(310)
      } else {
        setChartWidth(340)
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const currentData = THREE_DASHBOARDS_DATA[period] || THREE_DASHBOARDS_DATA['Aylıq']

  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#453027]/5 to-transparent" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FF5722]/10 rounded-full blur-[130px]" />
        <div className="absolute top-1/3 left-0 w-80 h-80 bg-[#FF6600]/8 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Yol Xəritəsi Naviqasiya Hədəfi */}
        <div id="yolxeritesi" className="scroll-mt-28" />

        {/* Başlıq */}
        <FadeUp className="text-center mb-3">
          <span className="text-[#FF5722] text-xs font-semibold tracking-widest uppercase">
            İnvestisiya Cədvəli və Yol Xəritəsi
          </span>
        </FadeUp>
        <FadeUp delay={0.1} className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Dəqiq İnvestisiya Xülasəsi və<br className="hidden sm:block" /> İcra Yol Xəritəsi
          </h2>
        </FadeUp>

        {/* 1. İNTERAKTİV PROQNOZ VƏ 3 ƏDƏD DASHBOARD (PEAK CHARTS) */}
        <FadeUp delay={0.12} className="mb-14">
          <div className="glass-card-elevated rounded-3xl p-6 sm:p-10 border border-[#FF5722]/50 relative overflow-hidden">
            {/* Arxa plan narıncı parıltı effekti */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#FF5722]/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#FF6600]/15 rounded-full blur-[110px] pointer-events-none" />

            <div className="relative z-10">
              {/* Üst Məlumat Başlığı */}
              <div className="mb-10 pb-8 border-b border-[#453027]/60">
                <div className="max-w-3xl mb-8">
                  <div className="inline-flex items-center gap-2 border border-[#FF5722]/40 bg-[#FF5722]/10 rounded-full px-4 py-1.5 mb-4 text-[#FF5722] text-xs font-bold tracking-widest uppercase">
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

                {/* Yuxarıdakı Dəqiqliklə Hizalanmış 3 Ədəd B2B İndikator Kartı */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
                  {indicatorCards.map((card, idx) => {
                    const IconComponent = card.icon
                    return (
                      <motion.div
                        key={card.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1, duration: 0.5 }}
                        whileHover={{ y: -4 }}
                        className="group relative rounded-2xl p-6 sm:p-7 overflow-hidden transition-all duration-300 flex flex-col justify-between"
                        style={{
                          background: 'linear-gradient(135deg, rgba(69, 48, 39, 0.40) 0%, rgba(22, 19, 22, 0.85) 100%)',
                          backdropFilter: 'blur(20px)',
                          WebkitBackdropFilter: 'blur(20px)',
                          border: '1px solid rgba(255, 87, 34, 0.35)',
                          boxShadow: '0 12px 32px -8px rgba(0, 0, 0, 0.6), 0 0 20px rgba(255, 87, 34, 0.12)',
                        }}
                      >
                        {/* Zərif arxa/alt narıncı parıltı (B2B Orange #FF5722 / #FF6600 Glow) */}
                        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-48 h-24 bg-gradient-to-t from-[#FF5722]/25 to-transparent rounded-full blur-2xl group-hover:from-[#FF6600]/40 group-hover:h-32 transition-all duration-500 pointer-events-none" />
                        <div className="absolute top-0 right-0 w-24 h-24 bg-[#FF5722]/10 rounded-full blur-xl pointer-events-none" />

                        <div className="relative z-10">
                          {/* İkon və Rozet */}
                          <div className="flex items-center justify-between gap-2 mb-4">
                            <div className="w-10 h-10 rounded-xl bg-[#FF5722]/15 border border-[#FF5722]/40 flex items-center justify-center text-[#FF5722] group-hover:scale-110 group-hover:bg-[#FF5722]/25 transition-all duration-300 shadow-[0_0_15px_rgba(255,87,34,0.3)]">
                              <IconComponent className="w-5 h-5 text-[#FF5722]" />
                            </div>
                            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FF5722]/10 border border-[#FF5722]/30 text-[11px] font-semibold text-[#FF5722] uppercase tracking-wider">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#FF5722] animate-pulse" />
                              <span>{card.badge}</span>
                            </div>
                          </div>

                          {/* Başlıq */}
                          <div className="text-xs sm:text-sm font-semibold text-[#BABABA] group-hover:text-white transition-colors duration-200 mb-2">
                            {card.title}
                          </div>

                          {/* Dəyər / Value */}
                          <div className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-white tracking-tight mb-3 flex items-baseline gap-1">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-[#FF5722] group-hover:to-[#FF6600] transition-all duration-300">
                              {card.value}
                            </span>
                          </div>

                          {/* İzah / Subtext */}
                          <p className="text-xs sm:text-sm text-[#BABABA]/80 leading-relaxed group-hover:text-[#BABABA] transition-colors">
                            {card.subtext}
                          </p>
                        </div>

                        {/* Alt Vurğu Xətti */}
                        <div className="relative z-10 mt-5 pt-3 border-t border-[#453027]/50 flex items-center justify-between text-[11px] text-[#BABABA]/60">
                          <span>Chizzgy Hədəf Metrikası</span>
                          <span className="text-[#FF5722] font-semibold flex items-center gap-1">
                            Aktiv <span className="w-1.5 h-1.5 rounded-full bg-[#FF5722]" />
                          </span>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </div>

              {/* AŞAĞIDAKI 3 ƏDƏD ANIMASIYALI DASHBOARD (Yuxarıdakı 3 Metrikanı Təmsil Edir) */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start justify-items-center">
                {/* 1-ci Dashboard: Aylıq B2B Orqanik Çatım (250K+) */}
                <div className="flex flex-col items-center w-full">
                  <div className="mb-3 text-center">
                    <span className="text-xs font-bold text-[#FF5722] tracking-wider uppercase">
                      AUDİTORİYA DİNAMİKASI
                    </span>
                    <h4 className="text-white font-bold text-sm">Aylıq B2B Orqanik Çatım</h4>
                  </div>
                  <PeakChart
                    width={chartWidth}
                    accent="#FF5722"
                    data={currentData.reachData}
                    labels={currentData.reachLabels}
                    value={currentData.reachValue}
                    valueSuffix="K+"
                    decimals={0}
                    title="Orqanik Video Çatımı"
                    caption="Hədəf kütləyə çatan optimallaşdırılmış baxış"
                    updatedText="Canlı Proqnoz"
                    periods={['Həftəlik', 'Aylıq', 'İllik']}
                    period={period}
                    onPeriodChange={setPeriod}
                    formatValue={(v) => `${Math.round(v)}K+`}
                  />
                </div>

                {/* 2-ci Dashboard: Korporativ Müraciətlər - Leads (85+) */}
                <div className="flex flex-col items-center w-full">
                  <div className="mb-3 text-center">
                    <span className="text-xs font-bold text-[#FF6600] tracking-wider uppercase">
                      MÜŞTƏRİ AXINI PROQNOZU
                    </span>
                    <h4 className="text-white font-bold text-sm">Korporativ Müraciətlər (Leads)</h4>
                  </div>
                  <PeakChart
                    width={chartWidth}
                    accent="#FF6600"
                    data={currentData.leadsData}
                    labels={currentData.leadsLabels}
                    value={currentData.leadsValue}
                    valueSuffix="+"
                    decimals={0}
                    title="Aylıq Korporativ Müraciət"
                    caption="Birbaşa rəsmi təklif istəyən yeni şirkətlər"
                    updatedText="Hədəf Göstəricisi"
                    periods={['Həftəlik', 'Aylıq', 'İllik']}
                    period={period}
                    onPeriodChange={setPeriod}
                    formatValue={(v) => `${Math.round(v)}+ müraciət`}
                  />
                </div>

                {/* 3-cü Dashboard: Satış Konversiya Artımı (+40%) */}
                <div className="flex flex-col items-center w-full">
                  <div className="mb-3 text-center">
                    <span className="text-xs font-bold text-[#FF5722] tracking-wider uppercase">
                      EFFEKTİVLİK VƏ SATIŞ
                    </span>
                    <h4 className="text-white font-bold text-sm">Satış Konversiya Artımı</h4>
                  </div>
                  <PeakChart
                    width={chartWidth}
                    accent="#FF5722"
                    data={currentData.conversionData}
                    labels={currentData.conversionLabels}
                    value={currentData.conversionValue}
                    valueSuffix="%"
                    decimals={0}
                    title="Satışa Çevrilmə Artımı"
                    caption="Görüşmələrin uğurlu müqaviləyə çevrilməsi"
                    updatedText="Konversiya"
                    periods={['Həftəlik', 'Aylıq', 'İllik']}
                    period={period}
                    onPeriodChange={setPeriod}
                    formatValue={(v) => `+${Math.round(v)}%`}
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
                <div className="bg-[#FF5722]/10 border border-[#FF5722]/30 rounded-xl p-4 mb-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[#FF5722] text-xs font-bold uppercase tracking-wide">
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
                      <div className="text-[#FF5722] text-2xl font-extrabold">4.899 ₼</div>
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
                        className="absolute left-0 top-1 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-[0_0_12px_rgba(255,87,34,0.4)]"
                        style={{ background: step.color }}
                      >
                        {step.num}
                      </div>
                      <div>
                        <div className="flex items-center gap-2.5 mb-2">
                          <Icon className="w-5 h-5 text-[#FF5722]" />
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
          <div className="relative glass-card rounded-2xl p-10 text-center border border-[#FF5722]/30 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#FF5722]/5 to-transparent pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#FF5722] to-transparent" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 border border-[#FF5722]/40 bg-[#FF5722]/10 rounded-full px-4 py-1.5 mb-5 text-[#FF5722] text-xs font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(255,87,34,0.2)]">
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
                  className="bg-[#FF5722] hover:bg-[#e64a19] text-white font-bold px-10 py-4 rounded-full text-base transition-all duration-200 shadow-[0_0_30px_rgba(255,87,34,0.5)] hover:shadow-[0_0_50px_rgba(255,87,34,0.7)] w-full sm:w-auto inline-flex items-center justify-center gap-2"
                >
                  <span>Dərhal Əlaqə Saxlayın</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#faza1"
                  className="border border-[#453027] hover:border-[#FF5722] text-[#BABABA] hover:text-white font-semibold px-10 py-4 rounded-full text-base transition-all duration-200 w-full sm:w-auto"
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
