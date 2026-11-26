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
    <section className="relative min-h-dvh flex flex-col justify-center overflow-hidden pt-32 pb-20">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Rozet */}
        <FadeUp className="flex justify-start mb-10">
          <div className="inline-flex items-center gap-3">
            <span className="w-6 h-px bg-accent" />
            <span className="text-muted text-[13px] font-medium tracking-[0.02em]">
              KORPORATİV ƏMƏKDAŞLIQ VƏ RƏQƏMSAL TRANSFORMASİYA TƏQDİMATI
            </span>
          </div>
        </FadeUp>

        {/* Əsas Başlıq */}
        <FadeUp delay={0.1} className="text-left mb-8">
          <h1 className="text-[2.5rem] sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-extrabold text-ink max-w-6xl">
            30 İllik İstehsal Nəhənginə{' '}
            <span className="block">Yeni Nəsil Toxunuş</span>
          </h1>
        </FadeUp>

        {/* İzah Mətni */}
        <FadeUp delay={0.2} className="text-left mb-20">
          <p className="text-muted text-lg sm:text-xl max-w-[38ch] leading-relaxed">
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10"
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
                whileHover={{ borderColor: '#F06A2E' }}
                className="border-t border-line pt-6 cursor-default group flex flex-col justify-between"
                style={{ transition: 'border-color 0.3s, box-shadow 0.3s, transform 0.3s' }}
              >
                <div>
                  <div className="mb-5 text-accent">
                    <Icon className="w-5 h-5 text-accent" strokeWidth={1.5} />
                  </div>
                  <div className="text-muted text-[13px] font-medium mb-2">
                    {item.step}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-ink mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed max-w-[34ch]">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* CTA Düymələri */}
        <FadeUp delay={0.4} className="flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-3 mt-16">
          <a
            href="#faza1"
            className="bg-accent hover:bg-accent-press text-bg font-semibold px-7 py-4 rounded-md text-base transition-colors duration-200 w-full sm:w-auto text-center"
          >
            Təhlil və Araşdırma Paketini İncələ →
          </a>
          <a
            href="#portfel"
            className="border border-line hover:border-line-strong hover:bg-surface text-ink font-semibold px-7 py-4 rounded-md text-base transition-colors duration-200 w-full sm:w-auto text-center"
          >
            Portfeli Gör
          </a>
        </FadeUp>
      </div>
    </section>
  )
}
