"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useTranslations } from "@/hooks/useTranslations";

type NavKey = "home" | "about" | "research" | "tech" | "contact";

export function SiteHeader() {
  const pathname = usePathname();
  const { nav: navT } = useTranslations();
  const [homeScrollSection, setHomeScrollSection] = useState("hero");

  useEffect(() => {
    if (pathname !== "/") {
      return;
    }

    const handleScroll = () => {
      const sections = ["hero", "process", "research"];
      const scrollPos = window.scrollY + 250;
      let current = "hero";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            current = section;
            break;
          }
        }
      }

      setHomeScrollSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const isActive = (key: NavKey): boolean => {
    switch (key) {
      case "home":
        return pathname === "/" && homeScrollSection !== "research";
      case "about":
        return pathname === "/about";
      case "research":
        return pathname === "/" && homeScrollSection === "research";
      case "tech":
        return pathname === "/tech";
      case "contact":
        return pathname === "/demo";
      default:
        return false;
    }
  };

  const navLinkClass = (key: NavKey) =>
    `text-[18px] font-extrabold tracking-tight transition-colors duration-200 hover:text-brand-cyan ${
      isActive(key) ? "text-brand-cyan" : "text-slate-400"
    }`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-dark/85 backdrop-blur-md border-b border-slate-800/80 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <span className="text-brand-cyan text-2xl font-black tracking-widest text-glow-cyan group-hover:opacity-90 transition-opacity">
            NANUMLAB
          </span>
          <div className="w-px h-4 bg-slate-700 hidden sm:block" />
          <span className="text-[10px] text-slate-400 font-mono tracking-widest hidden sm:block">
            INTEGRATED WEB PLATFORM
          </span>
        </Link>

        <div className="flex items-center gap-5 md:gap-8">
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className={navLinkClass("home")}>
              {navT.home}
            </Link>
            <Link href="/#research" className={navLinkClass("research")}>
              {navT.research}
            </Link>
            <Link href="/about" className={navLinkClass("about")}>
              {navT.about}
            </Link>
            <Link href="/tech" className={navLinkClass("tech")}>
              {navT.coreTech}
            </Link>
          </nav>

          <LanguageSwitcher />

          <Link
            href="/demo"
            className={`text-[16px] font-extrabold tracking-tight border px-6 py-2.5 rounded-full transition-all duration-200 ${
              isActive("contact")
                ? "text-brand-dark bg-brand-cyan border-brand-cyan"
                : "text-brand-cyan border-brand-cyan/40 hover:bg-brand-cyan/10"
            }`}
          >
            {navT.contact}
          </Link>
        </div>
      </div>
    </header>
  );
}
