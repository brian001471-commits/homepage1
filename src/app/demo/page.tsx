import { DemoIntakeForm } from "@/components/DemoIntakeForm";
import { DemoPageHeader } from "@/components/DemoPageHeader";

export const metadata = {
  title: "문의하기 | 주식회사 나눔랩",
  description:
    "AI 솔루션 및 DX 컨설팅 도입 문의. 나눔랩 B2B 맞춤 상담을 신청해 주세요.",
};

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-brand-dark flex flex-col">
      <DemoPageHeader />

      <main className="flex-1 py-16 md:py-24 px-6">
        <DemoIntakeForm />
      </main>

      <footer className="border-t border-slate-900/80 py-8">
        <p className="text-center text-[10px] text-slate-500 font-mono">
          © {new Date().getFullYear()} NANUM LAB Co., Ltd. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
