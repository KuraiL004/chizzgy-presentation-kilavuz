'use client'

import { FadeUp } from './motion'

const brands = [
  'Kılavuz Visual Solutions',
  'Pasha Capital',
  'De Muscle Club',
  'Cinema Club Academy',
  'Relay AI',
  'Pasha Kapital Football',
  'Global Partner',
  'Premium Brand',
]

export default function MarqueeBand() {
  const doubled = [...brands, ...brands]

  return (
    <section className="py-16 border-y border-[#453027]/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-10 text-center">
        <FadeUp>
          <div className="text-[#FF6D29] text-xs font-semibold tracking-widest uppercase mb-3">
            GÜVENİLEN PRODÜKSİYON VE STRATEJİ ORTAĞI
          </div>
        </FadeUp>
        <FadeUp delay={0.1}>
          <p className="text-[#BABABA] text-sm max-w-xl mx-auto">
            Chizzgy ekibinin görsel dünyasını, CGI ve prodüksiyon süreçlerini yönettiği markalar ve iş ortakları:
          </p>
        </FadeUp>
      </div>

      {/* Marquee */}
      <div className="relative">
        {/* Sol fade */}
        <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-[#161316] to-transparent pointer-events-none" />
        {/* Sağ fade */}
        <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-[#161316] to-transparent pointer-events-none" />

        <div className="flex animate-marquee whitespace-nowrap" style={{ width: 'max-content' }}>
          {doubled.map((brand, i) => (
            <div
              key={i}
              className="inline-flex items-center mx-6"
            >
              <div className="glass-card rounded-xl px-6 py-3 border border-[#453027]/60 hover:border-[#FF6D29]/60 transition-colors duration-300 cursor-default">
                <span className="text-white font-semibold text-sm tracking-wide whitespace-nowrap">
                  {brand}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

