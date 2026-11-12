export default function Footer() {
  return (
    <footer className="border-t border-[#453027]/40 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Loqo */}
          <div className="flex items-center gap-4">
            <div className="text-left">
              <div className="text-white font-bold text-base leading-none">CHIZZGY</div>
              <div className="text-[#BABABA] text-[10px] font-light">Creative &amp; Strategy Agency</div>
            </div>
            <span className="text-[#453027] text-lg">×</span>
            <div className="text-left">
              <div className="text-[#FF6D29] font-bold text-base leading-none">KILAVUZ</div>
              <div className="text-[#BABABA] text-[10px] font-light">Visual Solutions</div>
            </div>
          </div>

          {/* Müəllif hüququ və Məxfilik */}
          <div className="text-[#BABABA] text-xs text-center sm:text-right">
            <p>© 2024 Chizzgy Creative &amp; Strategy Agency. Bütün hüquqlar qorunur.</p>
            <p className="mt-1">Bu təqdimat Kılavuz Visual Solutions rəhbərliyinə xüsusi olaraq hazırlanmışdır və məxfilik əsasına tabedir.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
