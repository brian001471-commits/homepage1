"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useTranslations } from "@/hooks/useTranslations";

export function DemoPageHeader() {
  const { demo: t } = useTranslations();

  return (
    <header className="border-b border-slate-800/80 bg-brand-dark/85 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <span className="text-brand-cyan text-2xl font-black tracking-widest text-glow-cyan">
            NANUM LAB
          </span>
          <div className="w-px h-4 bg-slate-700 hidden sm:block" />
          <span className="text-[10px] text-slate-400 font-mono tracking-widest hidden sm:block">
            CONTACT
          </span>
        </Link>

        <div className="flex items-center gap-5 md:gap-8">
          <LanguageSwitcher />
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-brand-cyan transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">{t.header.back}</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
