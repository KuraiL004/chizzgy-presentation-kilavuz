'use client'

import { motion } from 'framer-motion'
import { Play, Video, Box, Sparkles, Palette } from 'lucide-react'
import { FadeUp } from './motion'

const reels = [
  {
    title: 'Endüstriyel & Kurumsal Hero Kurgu',
    desc: 'Fabrika, makine parkuru ve yüksek tempo',
    aspect: '9/16',
    color: '#453027',
    Icon: Video,
  },
  {
    title: 'CGI, 3D & VFX Entegrasyonu',
    desc: 'Unreal Engine 5, Blender ve Nuke compositing gücü',
    aspect: '9/16',
    color: '#3a2520',
    Icon: Box,
  },
  {
    title: 'Dinamik Marka & Ürün Vitrin Reels',
    desc: 'Özel geçiş presetleri ve ses tasarımı',
    aspect: '9/16',
    color: '#453027',
    Icon: Sparkles,
  },
  {
    title: 'Custom LUT & Sinematik Renk Dünyası',
    desc: 'Çiğ fabrika ışıklarını kurumsal renklere dönüştürme',
    aspect: '9/16',
    color: '#3a2520',
    Icon: Palette,
  },
]

export default function PortfolyoSection() {
  return (
    <section id="portfolyo" className="py-24 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#FF6D29]/6 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Başlık */}
        <FadeUp className="text-center mb-3">
          <span className="text-[#FF6D29] text-xs font-semibold tracking-widest uppercase">Chizzgy Portfolyo</span>
        </FadeUp>
        <FadeUp delay={0.1} className="text-center mb-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Sinematik Üretim Gücümüz
          </h2>
        </FadeUp>
        <FadeUp delay={0.15} className="text-center mb-14">
          <p className="text-[#BABABA] text-sm sm:text-base max-w-2xl mx-auto">
            Sony FX3 / A7 IV sinema kameraları, profesyonel Godox ışık altyapısı, özel LUT renk bilimi ve üst düzey kurgu/CGI standartlarımız.
          </p>
        </FadeUp>

        {/* Ana Showreel Alanı */}
        <FadeUp delay={0.2} className="mb-10">
          <div className="relative w-full aspect-video glass-card rounded-2xl overflow-hidden flex items-center justify-center group cursor-pointer">
            {/* Arka plan gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#453027]/40 to-[#161316]" />
            {/* Dekoratif çizgiler */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  'linear-gradient(45deg, #FF6D29 1px, transparent 1px), linear-gradient(-45deg, #FF6D29 1px, transparent 1px)',
                backgroundSize: '40px 40px',
              }}
            />
            <div className="relative z-10 flex flex-col items-center gap-4">
              {/* Play butonu */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-20 h-20 bg-[#FF6D29] rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(255,109,41,0.5)] cursor-pointer"
              >
                <Play className="w-8 h-8 text-white ml-1 fill-white" />
              </motion.div>
              <div className="text-center">
                <div className="text-white font-bold text-lg">Hero / Portfolio Amiral Gemisi Kurgu Örneği</div>
                <div className="text-[#BABABA] text-sm mt-1">Showreel — Chizzgy Creative</div>
              </div>
            </div>
            {/* Köşe rozeti */}
            <div className="absolute top-4 left-4 bg-[#FF6D29] text-white text-xs font-bold px-3 py-1 rounded-full">
              16:9 SHOWREEL
            </div>
          </div>
        </FadeUp>

        {/* 4 Reels Kartı */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {reels.map((r, i) => {
            const Icon = r.Icon
            return (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
                }}
                whileHover={{ y: -4, borderColor: '#FF6D29' }}
                className="glass-card rounded-xl overflow-hidden cursor-pointer group"
                style={{ transition: 'transform 0.3s, border-color 0.3s, box-shadow 0.3s' }}
              >
                {/* Video placeholder (9:16 dikey) */}
                <div className="relative w-full" style={{ aspectRatio: '9/16' }}>
                  <div
                    className="absolute inset-0 flex flex-col items-center justify-center"
                    style={{ background: `linear-gradient(160deg, ${r.color}/60 0%, #161316 100%)` }}
                  >
                    <div className="w-14 h-14 rounded-2xl bg-[#453027]/50 border border-[#453027] flex items-center justify-center mb-4 text-[#FF6D29] group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7 text-[#FF6D29]" />
                    </div>
                    {/* Mini play */}
                    <div className="w-10 h-10 bg-[#FF6D29]/80 rounded-full flex items-center justify-center group-hover:bg-[#FF6D29] transition-colors">
                      <Play className="w-4 h-4 text-white ml-0.5 fill-white" />
                    </div>
                  </div>
                  {/* Rozet */}
                  <div className="absolute top-2 right-2 bg-[#161316]/80 text-[#BABABA] text-[10px] font-mono px-2 py-0.5 rounded">
                    9:16
                  </div>
                </div>
                {/* Bilgi */}
                <div className="p-4">
                  <h4 className="text-white text-xs font-bold mb-1 leading-tight">{r.title}</h4>
                  <p className="text-[#BABABA] text-[11px] leading-snug">{r.desc}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Ekipman etiketleri */}
        <FadeUp delay={0.3} className="flex flex-wrap justify-center gap-3 mt-10">
          {[
            'Sony FX3',
            'Sony A7 IV',
            'Godox ışık altyapısı',
            'Özel LUT paketi',
            'Unreal Engine 5',
            'Blender',
            'Nuke Compositing',
          ].map((tag) => (
            <span
              key={tag}
              className="text-[#BABABA] text-xs font-mono border border-[#453027] rounded-full px-4 py-1.5 hover:border-[#FF6D29] hover:text-[#FF6D29] transition-colors duration-200 cursor-default"
            >
              {tag}
            </span>
          ))}
        </FadeUp>
      </div>
    </section>
  )
}
