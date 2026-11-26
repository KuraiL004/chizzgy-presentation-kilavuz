import type { Metadata } from "next";
import { Archivo, Hanken_Grotesk } from "next/font/google";
import "./globals.css";

/* ── Başlıq: Archivo (variable, width oxu ilə — film titrləri kimi geniş) ── */
const archivo = Archivo({
  subsets: ["latin", "latin-ext"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
});

/* ── Mətn: Hanken Grotesk (variable) ── */
const hanken = Hanken_Grotesk({
  subsets: ["latin", "latin-ext"],
  variable: "--font-hanken",
  display: "swap",
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
    <html lang="az" className={`${archivo.variable} ${hanken.variable} h-full`}>
      <body className="min-h-full antialiased">
        {children}
      </body>
    </html>
  );
}
