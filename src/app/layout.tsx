import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Providers } from "@/components/Providers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "주식회사 나눔랩 | AI · DX 솔루션 전문 기업",
  description:
    "응용 소프트웨어 개발 및 AI 기반 디지털 전환(DX)을 선도하는 나눔랩. 범용 AI 솔루션, DX 컨설팅, 지역산업 DX 확산, AI 실무 교육을 제공합니다.",
  keywords: [
    "나눔랩",
    "Nanum Lab",
    "AI 솔루션",
    "DX 컨설팅",
    "디지털 전환",
    "응용 소프트웨어",
    "AI 실무 교육",
    "지역산업 DX",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-brand-dark text-slate-200 min-h-screen selection:bg-brand-cyan/20 selection:text-brand-cyan`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
