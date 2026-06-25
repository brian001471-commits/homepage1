"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslations } from "@/lib/i18n";

export function useTranslations() {
  const { locale } = useLanguage();
  return getTranslations(locale);
}
