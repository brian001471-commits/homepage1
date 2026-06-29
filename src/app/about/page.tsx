import { AboutPageSection } from "@/components/AboutPageSection";

export const metadata = {
  title: "회사소개 | 주식회사 나눔랩",
  description:
    "공공 DX·AX 전문 기업 나눔랩. AI·데이터 기술로 공공서비스의 일상을 다시 설계합니다. 실용성, 신뢰성, 확장성을 핵심 가치로 합니다.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-brand-dark flex flex-col">
      <main className="flex-1 pt-20">
        <AboutPageSection />
      </main>

      <footer className="border-t border-slate-900/80 py-8">
        <p className="text-center text-[10px] text-slate-500 font-mono">
          © {new Date().getFullYear()} NANUM LAB Co., Ltd. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
