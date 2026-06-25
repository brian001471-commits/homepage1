"use client";

import { Globe } from "lucide-react";
import { useLanguage, type Locale } from "@/contexts/LanguageContext";

const LOCALES: { id: Locale; label: string }[] = [
  { id: "ko", label: "KOR" },
  { id: "en", label: "ENG" },
];

export function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="flex items-center gap-2.5 shrink-0">
      <Globe className="w-[18px] h-[18px] text-slate-400" aria-hidden="true" />
      <div className="flex items-center gap-1.5 text-[13px] font-extrabold tracking-wide font-mono">
        {LOCALES.map((item, idx) => (
          <span key={item.id} className="flex items-center gap-1.5">
            {idx > 0 && <span className="text-slate-600 font-normal">|</span>}
            <button
              type="button"
              onClick={() => setLocale(item.id)}
              className={`transition-colors duration-200 ${
                locale === item.id
                  ? "text-brand-cyan"
                  : "text-slate-500 hover:text-slate-300"
              }`}
              aria-pressed={locale === item.id}
              aria-label={`Switch language to ${item.label}`}
            >
              {item.label}
            </button>
          </span>
        ))}
      </div>
    </div>
  );
}
