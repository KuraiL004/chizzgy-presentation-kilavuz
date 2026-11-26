'use client'

import { motion } from 'framer-motion'
import { FadeUp } from './motion'

// Azərbaycan bazarında aktiv marketinq aparan brendlər: 8 sütun x 3 sətir = 24 brend
const brands = [
  // Sətir 1
  { name: 'PASHA CAPITAL', category: 'Investment' },
  { name: 'ABB BANK', category: 'Banking' },
  { name: 'BAKCELL', category: 'Telecom' },
  { name: 'NAR MOBILE', category: 'Telecom' },
  { name: 'AZTELEKOM', category: 'Telecom' },
  { name: 'CITYNET', category: 'Internet' },
  { name: 'VEYSELOGLU', category: 'Holding' },
  { name: 'OBA MARKET', category: 'Retail' },

  // Sətir 2
  { name: 'BRAVO', category: 'Supermarket' },
  { name: 'IRSHAD', category: 'Electronics' },
  { name: 'APAR', category: 'Logistics' },
  { name: 'DENIZ MALL', category: 'Mall' },
  { name: 'NATURA', category: 'Juice' },
  { name: 'DUDOMI', category: 'Food' },
  { name: 'MIA SHOES', category: 'Fashion' },
  { name: 'X-CROSS', category: 'Retail' },

  // Sətir 3
  { name: 'PEPSI', category: 'Beverage' },
  { name: "LAY'S", category: 'FMCG' },
  { name: 'COCA-COLA', category: 'Beverage' },
  { name: 'AZERCELL', category: 'Telecom' },
  { name: 'KAPITAL BANK', category: 'Banking' },
  { name: 'LEOBANK', category: 'Banking' },
  { name: 'ARAZ MARKET', category: 'Supermarket' },
  { name: 'SIRAB', category: 'Water' },
]

export default function MarqueeBand() {
  return (
    <section className="pt-24 pb-28 border-y border-line/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-left mb-12">
          <FadeUp>
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="w-6 h-px bg-accent" />
              <span className="text-accent text-[13px] font-medium">
                GÜVƏNİLƏN PRODAKŞN VƏ STRATEGİYA TƏRƏFDAŞI
              </span>
            </div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-ink mb-3">
              Birlikdə İşlədiyimiz Brendlər
            </h2>
            <p className="text-muted text-sm max-w-xl">
              Chizzgy komandasının vizual dünyasını, CGI və prodakşn proseslərini idarə etdiyi brendlər və tərəfdaşlar:
            </p>
          </FadeUp>
        </div>

        {/* 8 Sütunlu Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.02 } },
          }}
          className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-px bg-line/70 border border-line/70 rounded-lg overflow-hidden"
        >
          {brands.map((brand, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
              }}
              className="group relative bg-bg hover:bg-surface px-3 py-5 flex flex-col items-center justify-center min-h-[84px] transition-colors duration-200 cursor-default"
            >
              <span className="font-display [font-stretch:115%] text-ink/80 group-hover:text-ink font-semibold text-[13px] text-center tracking-[0.02em] transition-colors duration-200 leading-tight">
                {brand.name}
              </span>
              <span className="text-muted/60 group-hover:text-accent text-[11px] mt-1.5 transition-colors duration-200">
                {brand.category}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
