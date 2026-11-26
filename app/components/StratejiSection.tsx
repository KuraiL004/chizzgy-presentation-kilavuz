'use client'

import { motion } from 'framer-motion'
import { Zap, Globe, Shield } from 'lucide-react'
import { FadeUp } from './motion'

const pillars = [
  {
    num: '01',
    title: 'Sıfır Qarışıqlıq və Sürət',
    desc: 'Müəyyən edilmiş rəng, şrift, LUT və montaj standartları sayəsində hər videoda "bu necə olsun?" müzakirəsi yaşanmaz, təkrari düzəliş prosesləri minimuma enər.',
    Icon: Zap,
  },
  {
    num: '02',
    title: 'Qlobal Ardıcıllıq',
    desc: 'İstanbul, Bakı və Kopenhagen əməliyyatlarının hamısında eyni korporativ dil və vizual keyfiyyət danışılır.',
    Icon: Globe,
  },
  {
    num: '03',
    title: 'B2B Etimadın Qurulması',
    desc: 'Səhifəyə daxil olan korporativ satınalma rəhbərləri və qlobal partnyorlar təsadüfi videolar deyil; bir-biri ilə rəng, ton və üzlük uyğunluğu içində olan nüfuzlu fabrik vitrini görər.',
    Icon: Shield,
  },
]

export default function StratejiSection() {
  return (
    <section id="strategiya" className="pt-20 pb-24 md:pt-28 md:pb-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:grid lg:grid-cols-12 lg:grid-rows-[auto_auto_1fr] lg:gap-x-16 lg:items-start">
        {/* Başlıq */}
        <FadeUp className="lg:col-span-5 mb-5">
          <span className="text-accent text-[13px] font-medium">
            Strateji Yanaşma
          </span>
        </FadeUp>
        <FadeUp delay={0.1} className="lg:col-span-5 mb-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink">
            Niyə Birbaşa Çəkilişə Başlamırıq?
          </h2>
        </FadeUp>

        {/* Vurğu mətni */}
        <FadeUp delay={0.2} className="lg:col-span-5 mb-16 lg:mb-0">
          <div className="max-w-[60ch]">
            <p className="text-muted text-base sm:text-[1.0625rem] leading-[1.7]">
              100-dən çox qlobal brendin rəsmi təchizatçısı olan belə böyük bir strukturun{' '}
              <span className="text-ink font-semibold">Kilavuz.az Instagram səhifəsi</span> və rəqəmsal vitrini idarə olunarkən,
              birbaşa təsadüfi video çəkilişlərinə və post paylaşımlarına başlamaq korporativ imicə zərər verər.
              Çəkilişlərə başlamazdan əvvəl korporativ nüfuzunuzu qoruyacaq və prodakşn komandamıza dəqiq bir təlimat olacaq{' '}
              <span className="text-ink font-semibold">Korporativ Brandbook və Marketinq Strategiyası</span> inşa edilməlidir.
            </p>
          </div>
        </FadeUp>

        {/* 3 Sütun */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
          className="lg:col-span-7 lg:col-start-6 lg:row-start-1 lg:row-span-3 grid grid-cols-1"
        >
          {pillars.map((p, i) => {
            const Icon = p.Icon
            return (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
                }}
                whileHover={{ x: 4 }}
                className="grid grid-cols-[2.5rem_1fr] gap-x-5 border-t border-line py-8 first:border-t-0 first:pt-0 last:pb-0 group cursor-default"
                style={{ transition: 'transform 0.3s, border-color 0.3s, box-shadow 0.3s' }}
              >
                <div className="row-span-3 pt-1 text-accent">
                  <Icon className="w-6 h-6 text-accent" strokeWidth={1.5} />
                </div>
                <div className="text-muted text-[13px] font-medium mb-1 tabular-nums">{p.num} /</div>
                <h3 className="text-ink text-xl sm:text-2xl font-bold mb-3">{p.title}</h3>
                <p className="text-muted text-[15px] leading-relaxed max-w-[58ch]">{p.desc}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
