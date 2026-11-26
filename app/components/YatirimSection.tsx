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
    color: '#D85A22',
    Icon: FileSpreadsheet,
  },
  {
    num: '02',
    title: 'Adım 2 - Prodakşn və Böyümə (Yaradıcı Həllər)',
    desc: 'Təsdiqlənmiş marka konstitusiyası və strategiyası əsasında ssenarilər yazılır, Bakı müəssisələrində çəkiliş günləri planlaşdırılır və Kilavuz.az hesabı qlobal standartlarda yenidən qurulur.',
    color: '#3B302B',
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
    <section className="pt-28 pb-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Yol Xəritəsi Naviqasiya Hədəfi */}
        <div id="yolxeritesi" className="scroll-mt-28" />

        {/* Başlıq */}
        <FadeUp className="text-left mb-5 flex items-center gap-3 before:block before:w-6 before:h-px before:bg-accent">
          <span className="text-accent text-[13px] font-medium">
            İnvestisiya Cədvəli və Yol Xəritəsi
          </span>
        </FadeUp>
        <FadeUp delay={0.1} className="text-left mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink max-w-4xl">
            Dəqiq İnvestisiya Xülasəsi və<br className="hidden sm:block" /> İcra Yol Xəritəsi
          </h2>
        </FadeUp>

        {/* 1. İNTERAKTİV PROQNOZ VƏ 3 ƏDƏD DASHBOARD (PEAK CHARTS) */}
        <FadeUp delay={0.12} className="mb-14">
          <div className="glass-card-elevated rounded-3xl p-6 sm:p-10 relative overflow-hidden">

            <div className="relative z-10">
              {/* Üst Məlumat Başlığı */}
              <div className="mb-10 pb-10 border-b border-line">
                <div className="max-w-3xl mb-8">
                  <div className="inline-flex items-center gap-2 mb-4 text-accent text-[13px] font-medium">
                    <Sparkles className="w-3.5 h-3.5" strokeWidth={1.75} />
                    <span>BİZİMLƏ ƏMƏKDAŞLIĞIN BÖYÜMƏ PROQNOZU</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-ink mb-3">
                    Rəqəmlər Hardan Haraya Yüksələcək?
                  </h3>
                  <p className="text-muted text-sm sm:text-base leading-relaxed">
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
                        className="group relative rounded-xl p-6 sm:p-7 overflow-hidden bg-bg/50 border border-line hover:border-line-strong transition-colors duration-200 flex flex-col justify-between"
                      >

                        <div className="relative z-10">
                          {/* İkon və Rozet */}
                          <div className="flex items-center justify-between gap-2 mb-4">
                            <div className="w-10 h-10 rounded-lg bg-raised flex items-center justify-center text-accent">
                              <IconComponent className="w-5 h-5 text-accent" strokeWidth={1.5} />
                            </div>
                            <div className="flex items-center gap-1.5 text-[12px] font-medium text-muted">
                              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                              <span>{card.badge}</span>
                            </div>
                          </div>

                          {/* Başlıq */}
                          <div className="text-sm font-medium text-muted mb-2">
                            {card.title}
                          </div>

                          {/* Dəyər / Value */}
                          <div className="font-display [font-stretch:118%] text-4xl lg:text-5xl font-extrabold text-ink tracking-[-0.03em] tabular-nums mb-3 flex items-baseline gap-1">
                            <span>
                              {card.value}
                            </span>
                          </div>

                          {/* İzah / Subtext */}
                          <p className="text-sm text-muted leading-relaxed">
                            {card.subtext}
                          </p>
                        </div>

                        {/* Alt Vurğu Xətti */}
                        <div className="relative z-10 mt-6 pt-4 border-t border-line flex items-center justify-between text-[12px] text-muted/70">
                          <span>Chizzgy Hədəf Metrikası</span>
                          <span className="text-accent font-medium flex items-center gap-1.5">
                            Aktiv <span className="w-1.5 h-1.5 rounded-full bg-accent" />
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
                    <span className="block text-[13px] font-medium text-accent mb-1">
                      AUDİTORİYA DİNAMİKASI
                    </span>
                    <h4 className="text-ink font-bold text-base">Aylıq B2B Orqanik Çatım</h4>
                  </div>
                  <PeakChart
                    width={chartWidth}
                    accent="#F06A2E"
                    variant="studio"
                    font="var(--font-archivo), ui-sans-serif, sans-serif"
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
                    <span className="block text-[13px] font-medium text-accent mb-1">
                      MÜŞTƏRİ AXINI PROQNOZU
                    </span>
                    <h4 className="text-ink font-bold text-base">Korporativ Müraciətlər (Leads)</h4>
                  </div>
                  <PeakChart
                    width={chartWidth}
                    accent="#F06A2E"
                    variant="studio"
                    font="var(--font-archivo), ui-sans-serif, sans-serif"
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
                    <span className="block text-[13px] font-medium text-accent mb-1">
                      EFFEKTİVLİK VƏ SATIŞ
                    </span>
                    <h4 className="text-ink font-bold text-base">Satış Konversiya Artımı</h4>
                  </div>
                  <PeakChart
                    width={chartWidth}
                    accent="#F06A2E"
                    variant="studio"
                    font="var(--font-archivo), ui-sans-serif, sans-serif"
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
              <div className="px-6 py-5 border-b border-line">
                <h3 className="text-ink font-bold text-lg">İnvestisiya Cədvəli</h3>
              </div>
              <div className="p-6">
                <div className="space-y-4 mb-6">
                  {yatirimItems.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between gap-4 py-3 border-b border-line/60 last:border-0"
                    >
                      <div>
                        <div className="text-ink text-[15px] font-medium">{item.label}</div>
                        <div className="text-muted text-[13px] mt-0.5">{item.type}</div>
                      </div>
                      <div className="text-right">
                        {item.original && (
                          <div className="text-muted text-[13px] line-through tabular-nums">{item.original}</div>
                        )}
                        <div className="font-display [font-stretch:112%] text-ink font-bold tabular-nums">{item.price}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Təhlil və Araşdırma Cəmi */}
                <div className="bg-raised border border-line rounded-lg p-5 mb-3 shadow-[inset_2px_0_0_0_var(--color-accent)]">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-accent text-[13px] font-medium">
                        TƏHLİL VƏ ARAŞDIRMA — Quraşdırma Cəmi
                      </div>
                      <div className="text-muted text-[13px] mt-0.5">Birdəfəlik Quraşdırma Paketi</div>
                    </div>
                    <div className="text-right">
                      <div className="text-muted text-sm line-through tabular-nums">6.349 ₼</div>
                      <div className="font-display [font-stretch:115%] text-ink text-3xl font-extrabold tabular-nums">5.699 ₼</div>
                    </div>
                  </div>
                </div>

                {/* Yaradıcı Həllər */}
                <div className="bg-bg/40 border border-line rounded-lg p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-ink text-[13px] font-medium">
                        YARADICI HƏLLƏR — Aylıq Prodakşn
                      </div>
                      <div className="text-muted text-[13px] mt-0.5">Pro Paket · 12 Reels · Premium</div>
                    </div>
                    <div className="text-right">
                      <div className="font-display [font-stretch:115%] text-ink text-3xl font-extrabold tabular-nums">4.899 ₼</div>
                      <div className="text-muted text-xs">/ay</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>

          {/* Yol Xəritəsi */}
          <FadeUp delay={0.2}>
            <div className="glass-card rounded-2xl overflow-hidden h-full">
              <div className="px-6 py-5 border-b border-line">
                <h3 className="text-ink font-bold text-lg">2 Addımlı Yol Xəritəsi</h3>
              </div>
              <div className="p-6 space-y-8">
                {steps.map((step, i) => {
                  const Icon = step.Icon
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.15, duration: 0.5 }}
                      className="relative pl-11"
                    >
                      {/* Xətt */}
                      {i < steps.length - 1 && (
                        <div className="absolute left-[13px] top-9 -bottom-8 w-px bg-line" />
                      )}
                      {/* Nömrə */}
                      <div
                        className="absolute left-0 top-0 w-7 h-7 rounded-md flex items-center justify-center text-xs font-display font-bold tabular-nums text-ink"
                        style={{ background: step.color }}
                      >
                        {step.num}
                      </div>
                      <div>
                        <div className="flex items-center gap-2.5 mb-2">
                          <Icon className="w-5 h-5 text-accent shrink-0" strokeWidth={1.5} />
                          <h4 className="text-ink font-bold text-base leading-snug">{step.title}</h4>
                        </div>
                        <p className="text-muted text-[15px] leading-relaxed">{step.desc}</p>
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
          <div className="relative glass-card-elevated rounded-3xl px-6 py-14 sm:p-16 text-center overflow-hidden">
            <div className="relative">
              <div className="inline-flex items-center gap-3 mb-5 text-accent text-[13px] font-medium">
                STRATEJİ ƏMƏKDAŞLIQ
              </div>
              <h3 className="text-ink text-3xl sm:text-5xl font-extrabold mb-4">
                Birlikdə İnşa Edək
              </h3>
              <p className="text-muted text-base sm:text-lg max-w-[46ch] mx-auto mb-10 leading-relaxed">
                1995-ci ildən bu günə daşınan sənaye mirasınızı, qlobal rəqəmsal standartlarda dünyaya təqdim etməyə hazırsınız?
              </p>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
                <a
                  href="mailto:contact@chizzgy.com?subject=Kilavuz%20Visual%20Solutions%20B2B%20Teklif%20Tesdiqi"
                  className="bg-accent hover:bg-accent-press text-bg font-semibold px-8 py-4 rounded-md text-base transition-colors duration-200 w-full sm:w-auto inline-flex items-center justify-center gap-2"
                >
                  <span>Dərhal Əlaqə Saxlayın</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#faza1"
                  className="border border-line hover:border-line-strong hover:bg-surface text-ink font-semibold px-8 py-4 rounded-md text-base transition-colors duration-200 w-full sm:w-auto"
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
