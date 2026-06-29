"use client";

import { LanguageProvider } from "@/contexts/LanguageContext";
import { BackToTopButton } from "@/components/BackToTopButton";
import { SiteHeader } from "@/components/SiteHeader";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <SiteHeader />
      {children}
      <BackToTopButton />
    </LanguageProvider>
  );
}
