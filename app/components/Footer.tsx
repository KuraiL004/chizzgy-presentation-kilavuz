export default function Footer() {
  return (
    <footer className="border-t border-[#453027]/40 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Loqo */}
          <div className="flex items-center gap-3">
            <img
              src="/chizzgy-logo.svg"
              alt="Chizzgy"
              className="w-7 h-7 sm:w-8 sm:h-8 object-contain shrink-0"
            />
            <span className="text-white font-bold text-base sm:text-lg leading-none tracking-tight">
              CHIZZGY
            </span>
          </div>

          {/* Müəllif hüququ və Məxfilik */}
          <div className="text-[#BABABA] text-xs text-center sm:text-right">
            <p>© 2026 Chizzgy Creative &amp; Strategy Agency. Bütün hüquqlar qorunur.</p>
            <p className="mt-1">Bu təqdimat Kılavuz Visual Solutions rəhbərliyinə xüsusi olaraq hazırlanmışdır və məxfilik əsasına tabedir.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
