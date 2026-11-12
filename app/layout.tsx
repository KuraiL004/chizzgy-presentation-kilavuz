import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CHIZZGY × KILAVUZ — Kurumsal İş Birliği Sunumu",
  description:
    "Chizzgy Creative & Strategy Agency tarafından Kılavuz Visual Solutions yönetimine sunulan kurumsal dijital dönüşüm ve B2B teklif landing page'i.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="tr" className={`${poppins.variable} h-full`}>
      <body className="min-h-full bg-[#161316] text-white antialiased">
        {children}
      </body>
    </html>
  );
}
