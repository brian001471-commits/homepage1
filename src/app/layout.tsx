import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "주식회사 나눔랩 | Smart Coat-Ops & 기능성 화학 소재 전문 기업",
  description: "경험에 의존하던 코팅 품질 관리, 이제 AI 데이터로 확실하게 예측하십시오. 제조업 기반의 탄탄한 화학 기술과 첨단 ICT 시스템의 결합, 나눔랩.",
  keywords: [
    "나눔랩",
    "Nanum Lab",
    "Smart Coat-Ops",
    "화학 코팅제",
    "표면 제어",
    "AI 품질 예측",
    "예지보전 솔루션",
    "KOLAS 성적서",
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
        {children}
      </body>
    </html>
  );
}
