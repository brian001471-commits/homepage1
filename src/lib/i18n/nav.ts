import type { Locale } from "@/contexts/LanguageContext";

export const navTranslations = {
  ko: {
    home: "홈",
    about: "회사 소개",
    coreTech: "기술 소개",
    research: "연구 성과",
    contact: "문의하기",
  },
  en: {
    home: "Home",
    about: "About",
    coreTech: "Technology Intro",
    research: "Research",
    contact: "Contact",
  },
} as const satisfies Record<Locale, Record<string, string>>;

export function getNavT(locale: Locale) {
  return navTranslations[locale];
}
