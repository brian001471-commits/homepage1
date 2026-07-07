import { CoreTechSection } from "@/components/CoreTechSection";

export const metadata = {
  title: "기술 소개 | 주식회사 나눔랩",
  description:
    "나눔랩 AI 데이터 분석, 빅데이터 플랫폼, XAI, 현장 중심 DX 아키텍처 등 핵심 기술 솔루션을 소개합니다.",
};

export default function TechPage() {
  return (
    <div className="min-h-screen bg-brand-dark flex flex-col">
      <main className="flex-1 pt-20">
        <CoreTechSection />
      </main>

      <footer className="border-t border-slate-900/80 py-8">
        <p className="text-center text-[10px] text-slate-500 font-mono">
          © {new Date().getFullYear()} NANUMLAB Co., Ltd. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
