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
  title: "CHIZZGY × KILAVUZ — Korporativ Əməkdaşlıq və Rəqəmsal Transformasiya Təqdimatı",
  description:
    "Chizzgy Creative & Strategy Agency tərəfindən Kılavuz Visual Solutions (Kilavuz.az) rəhbərliyinə təqdim olunan B2B təklif və portfel lending səhifəsi. Faza 1 Quraşdırma Paketi 5.699 ₼ | Faza 2 Aylıq Pro Paket 4.899 ₼ / Ay",
  keywords: [
    "Chizzgy", "Kilavuz Visual Solutions", "kilavuz.az",
    "brandbook", "sosial media agentliyi", "video prodakşn", "Bakı"
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="az" className={`${poppins.variable} h-full`}>
      <body className="min-h-full antialiased">
        {children}
      </body>
    </html>
  );
}
