'use client'

import { motion } from 'framer-motion'
import { AnimatedCounter, FadeUp } from './motion'

const stats = [
  {
    value: 1995,
    suffix: '',
    label: 'İstanbul Çağlayan\'dan Başlayan Endüstriyel Miras',
    icon: '🏭',
  },
  {
    value: 8000,
    suffix: ' m²',
    label: 'Günlük Üretim (5.000 m² Kumaş + 3.000 m² UV/Solvent Baskı)',
    icon: '📐',
  },
  {
    value: 100,
    suffix: '+',
    label: 'Global Markanın Resmi Tedarikçisi ve Çözüm Ortağı',
    icon: '🌍',
    prefix: '',
  },
  {
    text: 'TR • AZ • EU',
    label: 'İstanbul, Bakü, Danimarka, İspanya ve Almanya Operasyonları',
    icon: '✈️',
  },
]

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-24 pb-16">
      {/* Arka plan ambiyans */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FF6D29]/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-[#453027]/30 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#453027]/10 rounded-full blur-[150px]" />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#BABABA 1px, transparent 1px), linear-gradient(90deg, #BABABA 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Rozet */}
        <FadeUp className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 border border-[#453027] bg-[#453027]/20 rounded-full px-4 py-1.5">
            <span className="w-1.5 h-1.5 bg-[#FF6D29] rounded-full animate-pulse" />
            <span className="text-[#BABABA] text-xs font-medium tracking-widest uppercase">
              Kurumsal İş Birliği ve Dijital Dönüşüm Sunumu
            </span>
          </div>
        </FadeUp>

        {/* Ana Başlık */}
        <FadeUp delay={0.1} className="text-center mb-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-[1.1] tracking-tight max-w-5xl mx-auto">
            1995&apos;ten Günümüze Ulaşan{' '}
            <span className="text-[#FF6D29]">Endüstriyel Üretim</span>{' '}
            Gücünün Global ve Dijital Standartlara Taşınması
          </h1>
        </FadeUp>

        {/* Açıklama */}
        <FadeUp delay={0.2} className="text-center mb-14">
          <p className="text-[#BABABA] text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            1995 yılında İstanbul Çağlayan&apos;da başlayan, günlük 5.000 m² kumaş baskı ve 3.000 m² dijital baskı kapasitesine ulaşan, ISO 9001 (Meyer TÜRKAK onaylı) kalite standartlarına sahip ve Türkiye&apos;den sonra Azerbaycan (Bakü) ile Avrupa&apos;ya açılan <strong className="text-white">Kılavuz Visual Solutions</strong>, sıradan bir işletme değil, uluslararası bir endüstri devidir.
          </p>
        </FadeUp>

        {/* Stats Bento Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
              }}
              whileHover={{ y: -4, borderColor: '#FF6D29' }}
              className="glass-card rounded-2xl p-6 cursor-default transition-all duration-300 hover:orange-glow group"
              style={{ transition: 'border-color 0.3s, box-shadow 0.3s, transform 0.3s' }}
            >
              <div className="text-3xl mb-3">{stat.icon}</div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white mb-2 tracking-tight">
                {stat.text ? (
                  <span>{stat.text}</span>
                ) : (
                  <AnimatedCounter
                    end={stat.value!}
                    suffix={stat.suffix}
                    prefix={stat.prefix}
                  />
                )}
              </div>
              <div className="text-[#BABABA] text-xs sm:text-sm leading-snug">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Butonları */}
        <FadeUp delay={0.4} className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
          <a
            href="#faz1"
            className="bg-[#FF6D29] hover:bg-[#e85d1f] text-white font-bold px-8 py-4 rounded-full text-base transition-all duration-200 shadow-[0_0_30px_rgba(255,109,41,0.4)] hover:shadow-[0_0_50px_rgba(255,109,41,0.65)] w-full sm:w-auto text-center"
          >
            Faz 1 Kurulum Paketini İncele →
          </a>
          <a
            href="#portfolyo"
            className="border border-[#453027] hover:border-[#FF6D29] text-white hover:text-[#FF6D29] font-semibold px-8 py-4 rounded-full text-base transition-all duration-200 w-full sm:w-auto text-center"
          >
            Portfolyoyu Gör
          </a>
        </FadeUp>
      </div>
    </section>
  )
}

