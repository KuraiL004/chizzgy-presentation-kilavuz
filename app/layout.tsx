import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

/* ── Poppins: tüm 6 ağırlık — PROJECT_SPEC.md §2A ── */
const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "CHIZZGY × KILAVUZ — Kurumsal İş Birliği & Dijital Dönüşüm Sunumu",
  description:
    "Chizzgy Creative & Strategy Agency tarafından Kılavuz Visual Solutions (Kilavuz.az) yönetimine sunulan B2B teklif ve portfolyo landing page'i. Faz 1 Kurulum Paketi 5.699 ₼ | Faz 2 Aylık Pro Paket 4.899 ₼/Ay",
  keywords: [
    "Chizzgy", "Kilavuz Visual Solutions", "kilavuz.az",
    "brandbook", "sosyal medya ajansı", "video prodüksiyon", "Bakü"
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="tr" className={`${poppins.variable} h-full`}>
      <body className="min-h-full antialiased">
        {children}
      </body>
    </html>
  );
}
