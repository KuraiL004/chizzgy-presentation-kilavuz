'use client'

import { motion } from 'framer-motion'
import { Palette, Globe, Video, TrendingUp } from 'lucide-react'
import { FadeUp } from './motion'

const features = [
  {
    step: 'New-Gen Brandbook',
    title: 'Strateji Korporativ Kimlik',
    desc: 'Köhnəlməyən, qlobal bazarlara adaptasiya olunan yeni nəsil vizual dil və brend arxitekturası.',
    Icon: Palette,
  },
  {
    step: 'Digital Platform',
    title: 'Qlobal Veb Təcrübə',
    desc: 'Müştərilərinizin və investorların sizi dünyanın istənilən nöqtəsindən heyranlıqla izləyəcəyi rəqəmsal səhnə.',
    Icon: Globe,
  },
  {
    step: 'Visual & Video Production',
    title: 'Kinematoqrafik İstehsal',
    desc: 'Sənaye gücünüzü və istehsal miqyasınızı hiss etdirən yüksək keyfiyyətli reklam və promo videoları.',
    Icon: Video,
  },
  {
    step: 'Growth Roadmap',
    title: 'Rəqəmsal Böyümə Strategiyası',
    desc: 'Avropa və yerli bazarlarda mövqeyinizi gücləndirəcək hədəflənmiş marketinq yol xəritəsi.',
    Icon: TrendingUp,
  },
]

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-28 pb-16">
      {/* Arxa plan ambiyansı */}
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
              KORPORATİV ƏMƏKDAŞLIQ VƏ RƏQƏMSAL TRANSFORMASİYA TƏQDİMATI
            </span>
          </div>
        </FadeUp>

        {/* Əsas Başlıq */}
        <FadeUp delay={0.1} className="text-center mb-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-[1.1] tracking-tight max-w-5xl mx-auto">
            30 İllik İstehsal Nəhənginə{' '}
            <span className="text-[#FF6D29]">Yeni Nəsil Toxunuş</span>
          </h1>
        </FadeUp>

        {/* İzah Mətni */}
        <FadeUp delay={0.2} className="text-center mb-14">
          <p className="text-[#BABABA] text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Siz İstehsal Gücünü Qurduz, Biz Onu Dünyaya Danışacağıq. Xoş Gəldiniz, <strong className="text-white">Kılavuz!</strong>
          </p>
        </FadeUp>

        {/* Xidmətlər və Transformasiya Bento Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {features.map((item, i) => {
            const Icon = item.Icon
            return (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
                }}
                whileHover={{ y: -4, borderColor: '#FF6D29' }}
                className="glass-card rounded-2xl p-6 cursor-default transition-all duration-300 hover:orange-glow group flex flex-col justify-between"
                style={{ transition: 'border-color 0.3s, box-shadow 0.3s, transform 0.3s' }}
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#453027]/40 border border-[#453027]/60 flex items-center justify-center mb-4 text-[#FF6D29] group-hover:bg-[#FF6D29]/15 group-hover:border-[#FF6D29]/40 transition-colors">
                    <Icon className="w-5 h-5 text-[#FF6D29]" />
                  </div>
                  <div className="text-[#FF6D29] text-xs font-mono font-bold tracking-wide uppercase mb-2">
                    {item.step}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2.5 tracking-tight group-hover:text-[#FF6D29] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[#BABABA] text-xs sm:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* CTA Düymələri */}
        <FadeUp delay={0.4} className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
          <a
            href="#faza1"
            className="bg-[#FF6D29] hover:bg-[#e85d1f] text-white font-bold px-8 py-4 rounded-full text-base transition-all duration-200 shadow-[0_0_30px_rgba(255,109,41,0.4)] hover:shadow-[0_0_50px_rgba(255,109,41,0.65)] w-full sm:w-auto text-center"
          >
            Faza 1 Quraşdırma Paketini İncələ →
          </a>
          <a
            href="#portfel"
            className="border border-[#453027] hover:border-[#FF6D29] text-white hover:text-[#FF6D29] font-semibold px-8 py-4 rounded-full text-base transition-all duration-200 w-full sm:w-auto text-center"
          >
            Portfeli Gör
          </a>
        </FadeUp>
      </div>
    </section>
  )
}
