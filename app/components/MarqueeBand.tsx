'use client'

import { motion } from 'framer-motion'
import { FadeUp } from './motion'

// Referans görseldeki 7 sütun x 5 satır = 35 marka düzeni (örnek kurumsal markalar)
const brands = [
  // Satır 1
  { name: 'NETFLIX', category: 'Global Media' },
  { name: 'SAMSUNG', category: 'Tech' },
  { name: 'PEPSI', category: 'Beverage' },
  { name: "LAY'S", category: 'FMCG' },
  { name: 'DORITOS', category: 'Snack' },
  { name: 'KITKAT', category: 'Confectionery' },
  { name: 'MASTERCARD', category: 'Finance' },

  // Satır 2
  { name: 'FORMULA 1', category: 'Motorsport' },
  { name: 'MTN DEW', category: 'Beverage' },
  { name: 'CHEETOS', category: 'Snack' },
  { name: 'POPEYES', category: 'Food & Chain' },
  { name: 'TRENDYOL', category: 'E-Commerce' },
  { name: 'HONOR', category: 'Tech' },
  { name: 'TECNO', category: 'Mobile' },

  // Satır 3
  { name: 'BOLT FOOD', category: 'Delivery' },
  { name: 'SETANTA SPORTS', category: 'Broadcasting' },
  { name: 'DOMINOS', category: 'Food' },
  { name: 'ALPEN GOLD', category: 'FMCG' },
  { name: 'ABB BANK', category: 'Banking' },
  { name: 'BAKCELL', category: 'Telecom' },
  { name: 'OBA MARKET', category: 'Retail' },

  // Satır 4
  { name: 'BRAVO', category: 'Supermarket' },
  { name: 'VEYSELOGLU', category: 'Holding' },
  { name: 'IRSAD', category: 'Electronics' },
  { name: 'DUDOMI', category: 'Food' },
  { name: 'NAR MOBILE', category: 'Telecom' },
  { name: 'CITYNET', category: 'Internet' },
  { name: 'NATURA', category: 'Juice' },

  // Satır 5
  { name: 'HYPERX', category: 'Gaming' },
  { name: 'APAR', category: 'Logistics' },
  { name: 'MIA SHOES', category: 'Fashion' },
  { name: 'X-CROSS', category: 'Retail' },
  { name: 'AZTELEKOM', category: 'Telecom' },
  { name: 'DANIZ MALL', category: 'Mall' },
  { name: 'PASHA CAPITAL', category: 'Investment' },
]

export default function MarqueeBand() {
  return (
    <section className="py-24 border-y border-[#453027]/40 relative overflow-hidden">
      {/* Arka plan ambiyans parıltısı */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#453027]/15 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12">
          <FadeUp>
            <div className="inline-flex items-center gap-2 border border-[#453027] bg-[#453027]/30 rounded-full px-4 py-1 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6D29]" />
              <span className="text-[#FF6D29] text-xs font-semibold tracking-widest uppercase">
                GÜVENİLEN PRODÜKSİYON VE STRATEJİ ORTAĞI
              </span>
            </div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
              Beraber Çalıştığımız Markalar
            </h2>
            <p className="text-[#BABABA] text-sm max-w-xl mx-auto">
              Chizzgy ekibinin görsel dünyasını, CGI ve prodüksiyon süreçlerini yönettiği markalar ve iş ortakları:
            </p>
          </FadeUp>
        </div>

        {/* Referans Görseldeki Bento Logo Izgara Düzeni (7 Sütunlu Grid) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.02 } },
          }}
          className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-2.5 sm:gap-3"
        >
          {brands.map((brand, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 15 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
              }}
              whileHover={{ y: -3, borderColor: '#FF6D29' }}
              className="group relative rounded-xl px-3 py-4 flex flex-col items-center justify-center min-h-[76px] transition-all duration-200 cursor-default"
              style={{
                background: 'rgba(28, 23, 26, 0.75)',
                border: '1px solid rgba(69, 48, 39, 0.45)',
              }}
            >
              {/* Subtle hover orange glow */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-[#FF6D29]/0 to-[#FF6D29]/0 group-hover:from-[#FF6D29]/5 group-hover:to-[#453027]/20 transition-all duration-300 pointer-events-none" />

              <span className="text-white/80 group-hover:text-white font-bold text-xs sm:text-[13px] tracking-wider text-center uppercase transition-colors duration-200 leading-tight">
                {brand.name}
              </span>
              <span className="text-[#BABABA]/50 group-hover:text-[#BABABA] text-[9px] tracking-normal font-medium mt-1 transition-colors">
                {brand.category}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
