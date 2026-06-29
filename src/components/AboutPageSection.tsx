"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Bot,
  Box,
  Building2,
  CloudCog,
  Compass,
  Handshake,
  Headphones,
  Layers,
  MapPin,
  MessageSquareQuote,
  QrCode,
  ScanEye,
  ShieldCheck,
  Satellite,
  Wrench,
} from "lucide-react";
import { useTranslations } from "@/hooks/useTranslations";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const VALUE_ICONS = [Wrench, ShieldCheck, CloudCog] as const;
const TARGET_ICONS = [Building2, Headphones, Handshake] as const;
const SERVICE_ICONS = [QrCode, MapPin, Headphones, Satellite, Box, Layers] as const;
const TECH_STACK_ICONS = [Bot, ScanEye, MessageSquareQuote, Compass] as const;

export function AboutPageSection() {
  const { about: aboutT } = useTranslations();

  return (
    <div className="relative bg-brand-dark">
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />

      <section className="relative pt-12 pb-16 md:pt-16 md:pb-24 border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl space-y-6"
          >
            <span className="inline-flex items-center gap-2 text-brand-cyan text-xs font-mono font-bold tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
              {aboutT.badge}
            </span>
            <div className="space-y-3">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
                {aboutT.companyName}
              </h1>
              <p className="text-sm md:text-base text-slate-400 font-mono tracking-wide">
                {aboutT.companyNameEn}
              </p>
            </div>
            <div className="w-20 h-1 bg-gradient-to-r from-brand-cyan to-transparent" />
            <p className="text-base md:text-lg text-slate-300 leading-relaxed max-w-3xl">
              {aboutT.brandPersonality}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative py-16 md:py-20 border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="relative max-w-5xl mx-auto text-center"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-brand-cyan/5 via-blue-500/5 to-brand-cyan/5 rounded-3xl blur-2xl pointer-events-none" />
            <div className="relative rounded-3xl border border-brand-cyan/25 bg-brand-card/40 px-6 py-10 md:px-12 md:py-14 backdrop-blur-sm">
              <p className="text-xl md:text-3xl lg:text-4xl font-black text-white leading-snug md:leading-tight">
                &ldquo;{aboutT.slogan}&rdquo;
              </p>
            </div>
          </motion.blockquote>
        </div>
      </section>

      <section className="relative py-16 md:py-24 border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-4 space-y-4 lg:sticky lg:top-28"
            >
              <span className="text-brand-cyan text-xs font-mono font-bold tracking-widest uppercase">
                {aboutT.introBadge}
              </span>
              <h2 className="text-2xl md:text-3xl font-black text-white">{aboutT.introTitle}</h2>
              <div className="w-14 h-1 bg-gradient-to-r from-brand-cyan to-transparent" />
            </motion.div>
            <motion.p
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-8 text-slate-300 text-base md:text-lg leading-[1.9]"
            >
              {aboutT.intro}
            </motion.p>
          </div>
        </div>
      </section>

      <section className="relative py-16 md:py-24 border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="space-y-4 mb-12 md:mb-16"
          >
            <span className="text-brand-cyan text-xs font-mono font-bold tracking-widest uppercase">
              {aboutT.valuesBadge}
            </span>
            <h2 className="text-2xl md:text-4xl font-black text-white">{aboutT.valuesTitle}</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-brand-cyan to-transparent" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {aboutT.values.map((value, idx) => {
              const Icon = VALUE_ICONS[idx] ?? Wrench;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <Card className="h-full border-slate-800 bg-brand-card/60 hover:border-brand-cyan/35 hover:-translate-y-1 transition-all duration-300 group">
                    <CardHeader className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="w-12 h-12 rounded-xl bg-brand-dark border border-brand-cyan/30 flex items-center justify-center text-brand-cyan group-hover:shadow-[0_0_20px_rgba(0,240,255,0.15)] transition-shadow">
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="text-[10px] font-mono font-bold text-slate-500 tracking-widest">
                          0{idx + 1}
                        </span>
                      </div>
                      <div>
                        <CardTitle className="text-lg text-white group-hover:text-brand-cyan transition-colors">
                          {value.title}
                        </CardTitle>
                        <p className="text-xs text-brand-cyan/80 font-mono mt-1">{value.titleEn}</p>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-sm leading-relaxed text-slate-400">
                        {value.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative py-16 md:py-24 border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="space-y-4 mb-12"
          >
            <span className="text-brand-cyan text-xs font-mono font-bold tracking-widest uppercase">
              {aboutT.targetsBadge}
            </span>
            <h2 className="text-2xl md:text-4xl font-black text-white">{aboutT.targetsTitle}</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-brand-cyan to-transparent" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
            {aboutT.targets.map((target, idx) => {
              const Icon = TARGET_ICONS[idx] ?? Building2;
              return (
                <motion.div
                  key={target.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="flex flex-col gap-5 p-6 md:p-8 rounded-2xl border border-slate-800 bg-[#1E293B]/40 hover:border-brand-cyan/30 transition-colors duration-300 h-full"
                >
                  <div className="flex items-center gap-4">
                    <div className="shrink-0 w-11 h-11 rounded-xl bg-brand-dark border border-slate-700 flex items-center justify-center text-brand-cyan">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-slate-500 tracking-widest">
                      0{idx + 1}
                    </span>
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-white leading-snug">{target.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed flex-1">{target.description}</p>
                  {"highlight" in target && target.highlight && (
                    <p className="text-xs md:text-sm text-brand-cyan/90 leading-relaxed px-4 py-3 rounded-xl border border-brand-cyan/20 bg-brand-cyan/5 font-medium">
                      {target.highlight}
                    </p>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative py-16 md:py-24 border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="space-y-4 mb-10 md:mb-12"
          >
            <span className="text-brand-cyan text-xs font-mono font-bold tracking-widest uppercase">
              {aboutT.servicesBadge}
            </span>
            <h2 className="text-2xl md:text-4xl font-black text-white">{aboutT.servicesTitle}</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-brand-cyan to-transparent" />
            <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-4xl pt-2">
              {aboutT.servicesIntro}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {aboutT.services.map((service, idx) => {
              const Icon = SERVICE_ICONS[idx] ?? Layers;
              return (
                <motion.div
                  key={service.num}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: idx * 0.06 }}
                >
                  <Card className="h-full border-slate-800 bg-brand-card/60 hover:border-brand-cyan/35 transition-all duration-300 group">
                    <CardHeader className="space-y-4">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <div className="w-11 h-11 rounded-xl bg-brand-dark border border-brand-cyan/30 flex items-center justify-center text-brand-cyan shrink-0">
                            <Icon className="w-5 h-5" />
                          </div>
                          <span className="text-brand-cyan font-mono font-black text-lg">
                            {service.num}
                          </span>
                        </div>
                      </div>
                      <CardTitle className="text-base md:text-lg text-white group-hover:text-brand-cyan transition-colors leading-snug">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <CardDescription className="text-sm leading-relaxed text-slate-400">
                        {service.description}
                      </CardDescription>
                      <div>
                        <p className="text-[10px] font-mono font-bold text-brand-cyan tracking-widest uppercase mb-2">
                          {aboutT.servicesFeaturesLabel}
                        </p>
                        <ul className="space-y-1.5">
                          {service.features.map((feature) => (
                            <li
                              key={feature}
                              className="text-xs md:text-sm text-slate-300 flex items-start gap-2"
                            >
                              <span className="text-brand-cyan mt-1.5 shrink-0">•</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="space-y-4 mb-12"
          >
            <span className="text-brand-cyan text-xs font-mono font-bold tracking-widest uppercase">
              {aboutT.techStackBadge}
            </span>
            <h2 className="text-2xl md:text-4xl font-black text-white">{aboutT.techStackTitle}</h2>
            <div className="w-16 h-1 bg-gradient-to-r from-brand-cyan to-transparent" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {aboutT.techStack.map((item, idx) => {
              const Icon = TECH_STACK_ICONS[idx] ?? Bot;
              const isHighlight = "highlight" in item && item.highlight;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className={`flex gap-4 p-6 md:p-7 rounded-2xl border transition-colors duration-300 ${
                    isHighlight
                      ? "border-brand-cyan/40 bg-gradient-to-br from-brand-cyan/10 via-brand-card/60 to-brand-dark"
                      : "border-slate-800 bg-[#1E293B]/40 hover:border-brand-cyan/25"
                  }`}
                >
                  <div
                    className={`shrink-0 w-11 h-11 rounded-xl flex items-center justify-center ${
                      isHighlight
                        ? "bg-brand-dark border border-brand-cyan/50 text-brand-cyan shadow-[0_0_20px_rgba(0,240,255,0.15)]"
                        : "bg-brand-dark border border-slate-700 text-brand-cyan"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="space-y-2">
                    <h3
                      className={`text-sm md:text-base font-bold leading-snug ${
                        isHighlight ? "text-brand-cyan" : "text-white"
                      }`}
                    >
                      {item.label}
                    </h3>
                    <p className="text-xs md:text-sm text-slate-400 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-20 pt-12 border-t border-slate-900 flex justify-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-10 py-4 rounded-full border border-brand-cyan/40 text-brand-cyan font-bold text-sm tracking-wide hover:bg-brand-cyan/10 hover:border-brand-cyan transition-all duration-200"
            >
              <ArrowLeft className="w-4 h-4" />
              {aboutT.backToHome}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
