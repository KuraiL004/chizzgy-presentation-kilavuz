'use client'

import { motion } from 'framer-motion'
import { Zap, Globe, Shield } from 'lucide-react'
import { FadeUp } from './motion'

const pillars = [
  {
    num: '01',
    title: 'Sıfır Karmaşa ve Hız',
    desc: 'Belirlenen renk, font, LUT ve kurgu standartları sayesinde her videoda "bu nasıl olsun?" tartışması yaşanmaz, revizyon süreçleri minimuma iner.',
    Icon: Zap,
  },
  {
    num: '02',
    title: 'Global Tutarlılık',
    desc: 'İstanbul, Bakü ve Kopenhag operasyonlarının tamamında aynı kurumsal dil ve görsel kalite konuşulur.',
    Icon: Globe,
  },
  {
    num: '03',
    title: 'B2B Güven İnşası',
    desc: 'Sayfaya giren kurumsal satın almacılar ve global partnerler, rastgele videolar değil; birbiriyle renk, ton ve kapak uyumu içinde olan prestijli bir fabrika vitrini görür.',
    Icon: Shield,
  },
]

export default function StratejiSection() {
  return (
    <section id="strateji" className="py-24 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#FF6D29]/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Başlık */}
        <FadeUp className="text-center mb-6">
          <span className="text-[#FF6D29] text-xs font-semibold tracking-widest uppercase">Stratejik Yaklaşım</span>
        </FadeUp>
        <FadeUp delay={0.1} className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Neden Doğrudan Çekime Başlamıyoruz?
          </h2>
        </FadeUp>

        {/* Vurgu metni */}
        <FadeUp delay={0.2} className="mb-16">
          <div className="max-w-4xl mx-auto glass-card rounded-2xl p-8 border-l-4 border-l-[#FF6D29]">
            <p className="text-[#BABABA] text-base sm:text-lg leading-relaxed">
              100&apos;den fazla global markanın resmi tedarikçisi olan böyle büyük bir yapının{' '}
              <span className="text-white font-semibold">Kilavuz.az Instagram sayfası</span> ve dijital vitrini yönetilirken,
              doğrudan rastgele video çekimlerine ve post paylaşımlarına başlamak kurumsal kimliğe zarar verir.
              Çekimlere başlamadan önce kurumsal itibarınızı koruyacak ve prodüksiyon ekibimize net bir kılavuz olacak{' '}
              <span className="text-[#FF6D29] font-semibold">Kurumsal Brandbook ve Pazarlama Stratejisi</span> inşa edilmelidir.
            </p>
          </div>
        </FadeUp>

        {/* 3 Sütun */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
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
                whileHover={{ y: -4 }}
                className="glass-card rounded-2xl p-8 group cursor-default transition-all duration-300"
                style={{ transition: 'transform 0.3s, border-color 0.3s, box-shadow 0.3s' }}
              >
                <div className="w-12 h-12 rounded-xl bg-[#453027]/40 border border-[#453027]/70 flex items-center justify-center mb-5 text-[#FF6D29] group-hover:bg-[#FF6D29]/15 group-hover:border-[#FF6D29]/40 transition-colors">
                  <Icon className="w-6 h-6 text-[#FF6D29]" />
                </div>
                <div className="text-[#FF6D29] text-sm font-semibold mb-2 font-mono">{p.num} /</div>
                <h3 className="text-white text-xl font-bold mb-3">{p.title}</h3>
                <p className="text-[#BABABA] text-sm leading-relaxed">{p.desc}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
