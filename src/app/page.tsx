"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ProcessSection } from "@/components/ProcessSection";
import { LocationSection } from "@/components/LocationSection";
import { useTranslations } from "@/hooks/useTranslations";
import { useLanguage } from "@/contexts/LanguageContext";
import { Activity } from "lucide-react";

const HERO_VIDEO_SRC = "/videos/hero-bg.mp4";

// Hero background video ??full-length loop
const HeroVideoBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
      <video
        src={HERO_VIDEO_SRC}
        muted
        autoPlay
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover scale-105"
      />
      {/* Dark overlay ??keeps hero copy readable over the video */}
      <div className="absolute inset-0 bg-[#0B0F19]/55" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,#0B0F19_92%)]" />
    </div>
  );
};

export default function Home() {
  const { locale } = useLanguage();
  const { nav: navT, home: homeT } = useTranslations();

  return (
    <div className="relative min-h-screen bg-brand-dark overflow-hidden flex flex-col">
      {/* [1층] 메인 히어로 섹션 (Hero Section) */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-brand-dark"
      >
        <HeroVideoBackground />

        <div className="relative max-w-6xl mx-auto px-6 text-center z-10 select-none">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-5 md:space-y-6"
          >
            {/* Small Technical Badge */}
            <div className="inline-flex items-center gap-2 bg-brand-cyan/10 border border-brand-cyan/35 px-4 py-1.5 rounded-full text-xs text-brand-cyan font-mono tracking-widest uppercase">
              <Activity className="w-3.5 h-3.5 animate-pulse" />
              {homeT.hero.badge}
            </div>

            <h1
              className={`font-extrabold tracking-tight text-white max-w-7xl mx-auto font-sans break-keep drop-shadow-[0_6px_24px_rgba(0,0,0,0.85)] ${
                locale === "en"
                  ? "text-[1.75rem] sm:text-3xl md:text-4xl lg:text-[2.75rem] xl:text-5xl leading-[1.2]"
                  : "text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.15]"
              }`}
            >
              <span className={`block ${locale === "ko" ? "whitespace-nowrap" : ""}`}>
                {homeT.hero.titleLine1}
              </span>
              <span className={`block ${locale === "ko" ? "whitespace-nowrap" : ""}`}>
                {homeT.hero.titleLine2Prefix}{" "}
                <span className="text-brand-cyan text-glow-cyan">{homeT.hero.titleHighlight}</span>
                {homeT.hero.titleLine2Suffix}
              </span>
              <span className="block">{homeT.hero.titleLine3}</span>
            </h1>

            <p
              className={`text-[#FFE66D] max-w-3xl mx-auto font-extrabold leading-relaxed bg-black/45 border border-[#FFE66D]/25 rounded-2xl px-5 py-3 shadow-[0_0_28px_rgba(0,0,0,0.75)] [text-shadow:0_2px_10px_rgba(0,0,0,0.95)] ${
                locale === "en"
                  ? "text-xs sm:text-sm md:text-base px-2"
                  : "text-sm md:text-[0.9375rem] leading-snug"
              }`}
            >
              {homeT.hero.subtitle}
            </p>

            {/* Call To Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-3">
              <Link
                href="/demo"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-brand-cyan text-brand-dark font-extrabold text-sm tracking-wider hover:shadow-[0_0_25px_rgba(0,240,255,0.6)] transition-all duration-300 transform hover:scale-105 text-center"
              >
                {navT.contact}
              </Link>
              <a
                href="#"
                className="w-full sm:w-auto px-8 py-4 rounded-full border border-slate-600 text-white hover:text-white hover:border-slate-400 font-extrabold text-sm tracking-wider transition-all duration-300 text-center bg-transparent hover:bg-slate-900/40"
              >
                {homeT.hero.downloadPdf}
              </a>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-3 md:bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 hover:text-brand-cyan transition-colors duration-200">
          <span className="text-[10px] tracking-widest font-mono">{homeT.hero.scroll}</span>
          <div className="w-1.5 h-6 rounded-full border border-slate-600 flex justify-center p-0.5">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1 h-1.5 bg-brand-cyan rounded-full"
            />
          </div>
        </div>
      </section>

      <ProcessSection />

      {/* [4층] 연구 성과 & 포트폴리오 아카이브 (Research & Insights) */}
      <section id="research" className="py-32 relative bg-brand-dark border-t border-slate-900">
        <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="space-y-4">
              <span className="text-brand-cyan text-xs font-mono font-bold tracking-widest uppercase">
                {homeT.research.badge}
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-white">{homeT.research.title}</h2>
            </div>
            <p className="text-slate-400 text-sm max-w-md">{homeT.research.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {homeT.research.cards.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="group relative bg-[#1E293B]/70 border border-slate-800 rounded-3xl p-8 hover:border-brand-cyan/40 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Visual Accent Corner Glow */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-cyan/5 rounded-full blur-xl group-hover:bg-brand-cyan/15 transition-all duration-300 pointer-events-none" />

                <div className="space-y-6">
                  {/* Category Badge & Tag */}
                  <div className="flex justify-between items-center text-[10px] font-mono font-bold">
                    <span className="text-brand-cyan tracking-widest">{card.category}</span>
                    <span className="bg-slate-900/60 px-2 py-0.5 rounded text-slate-300 border border-slate-800">
                      {card.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white group-hover:text-brand-cyan transition-colors duration-200 leading-snug">
                    {card.title}
                  </h3>

                  {/* Quantitative Metric Callout */}
                  <div className="py-2">
                    <span className="text-2xl md:text-3xl font-black text-white font-mono bg-slate-900/40 border border-slate-800/80 px-4 py-2 rounded-xl block text-center text-glow-cyan text-brand-cyan">
                      {card.metric}
                    </span>
                  </div>

                  {/* Detailed Copy */}
                  <p className="text-xs text-slate-400 leading-relaxed font-normal">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <LocationSection />

      {/* Footer */}
      <footer className="mt-auto bg-brand-dark border-t border-slate-900/80 py-12 relative z-10 select-none">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center md:items-start gap-2">
          <span className="text-white font-black tracking-widest text-lg">
            NANUM LAB
          </span>
          <p className="text-[12px] text-white font-mono">{homeT.footer.company}</p>
          <p className="text-[12px] text-white font-mono">{homeT.footer.address}</p>
        </div>
      </footer>
    </div>
  );
}
