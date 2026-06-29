"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Bot,
  Compass,
  MessageSquareQuote,
  ScanEye,
  Sparkles,
} from "lucide-react";
import { useTranslations } from "@/hooks/useTranslations";
import { getTechT } from "@/lib/i18n/tech";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type TechCapability = ReturnType<typeof getTechT>["capabilities"][number];

const CAPABILITY_ICONS = {
  "ai-nlp": Bot,
  "voice-vision": ScanEye,
  philosophy: Compass,
} as const;

function CapabilityCard({
  capability,
  index,
}: {
  capability: TechCapability;
  index: number;
}) {
  const Icon = CAPABILITY_ICONS[capability.id as keyof typeof CAPABILITY_ICONS] ?? Bot;
  const keywords = "keywords" in capability ? capability.keywords : undefined;

  return (
    <Card className="h-full border-slate-800 bg-brand-card/60 hover:border-brand-cyan/35 hover:-translate-y-1 transition-all duration-300 group">
      <CardHeader className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="w-12 h-12 rounded-xl bg-brand-dark border border-brand-cyan/30 flex items-center justify-center text-brand-cyan group-hover:shadow-[0_0_20px_rgba(0,240,255,0.15)] transition-shadow">
            <Icon className="w-6 h-6" />
          </div>
          <span className="text-[10px] font-mono font-bold text-slate-500 tracking-widest">
            0{index + 1}
          </span>
        </div>
        <CardTitle className="text-base md:text-lg text-white group-hover:text-brand-cyan transition-colors leading-snug">
          {capability.title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {keywords ? (
          <ul className="flex flex-wrap gap-2">
            {keywords.map((keyword) => (
              <li
                key={keyword}
                className="text-xs font-medium text-slate-300 px-3 py-1.5 rounded-full border border-slate-700/80 bg-brand-dark/60"
              >
                {keyword}
              </li>
            ))}
          </ul>
        ) : (
          "description" in capability && (
            <p className="text-sm leading-relaxed text-slate-400">{capability.description}</p>
          )
        )}
      </CardContent>
    </Card>
  );
}

export function CoreTechSection() {
  const { tech: techT } = useTranslations();

  return (
    <section className="py-24 md:py-32 relative bg-brand-dark border-t border-slate-900 min-h-[calc(100vh-5rem)]">
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-16 md:space-y-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl space-y-8"
        >
          <div className="space-y-5">
            <span className="inline-flex items-center gap-2 text-brand-cyan text-xs font-mono font-bold tracking-widest uppercase">
              <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
              {techT.badge}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight">
              {techT.title}
            </h1>
            <div className="w-16 h-1 bg-gradient-to-r from-brand-cyan to-transparent" />
          </div>

          <blockquote className="relative rounded-2xl border border-brand-cyan/25 bg-brand-card/40 px-6 py-8 md:px-10 md:py-10">
            <div className="absolute inset-0 bg-gradient-to-r from-brand-cyan/5 via-blue-500/5 to-brand-cyan/5 rounded-2xl blur-xl pointer-events-none" />
            <p className="relative text-lg md:text-2xl font-bold text-white leading-snug">
              &ldquo;{techT.slogan}&rdquo;
            </p>
          </blockquote>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl border border-brand-cyan/40 bg-gradient-to-br from-brand-card/80 via-[#1E293B]/90 to-brand-dark"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-cyan/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative p-8 md:p-12 lg:p-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 flex flex-col items-start gap-5">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-cyan/40 bg-brand-cyan/10 text-brand-cyan text-[10px] font-mono font-bold tracking-widest uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                {techT.xai.badge}
              </span>
              <div className="w-14 h-14 rounded-2xl bg-brand-dark border border-brand-cyan/50 flex items-center justify-center text-brand-cyan shadow-[0_0_30px_rgba(0,240,255,0.2)]">
                <MessageSquareQuote className="w-7 h-7" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-black text-white leading-tight">
                  {techT.xai.title}
                </h2>
                <p className="text-sm text-brand-cyan font-semibold mt-2">{techT.xai.subtitle}</p>
              </div>
            </div>
            <div className="lg:col-span-8">
              <p className="text-base md:text-lg text-slate-300 leading-[1.9] border-l-2 border-brand-cyan/50 pl-6 md:pl-8">
                {techT.xai.description}
              </p>
            </div>
          </div>
        </motion.div>

        <div>
          <div className="hidden lg:grid lg:grid-cols-3 gap-6 md:gap-8">
            {techT.capabilities.map((capability, idx) => (
              <motion.div
                key={capability.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <CapabilityCard capability={capability} index={idx} />
              </motion.div>
            ))}
          </div>

          <div className="lg:hidden">
            <Tabs defaultValue={techT.capabilities[0].id} className="w-full">
              <TabsList className="grid grid-cols-1 sm:grid-cols-3 h-auto">
                {techT.capabilities.map((capability) => (
                  <TabsTrigger
                    key={capability.id}
                    value={capability.id}
                    className="text-left sm:text-center"
                  >
                    {capability.title}
                  </TabsTrigger>
                ))}
              </TabsList>
              {techT.capabilities.map((capability, idx) => (
                <TabsContent key={capability.id} value={capability.id}>
                  <CapabilityCard capability={capability} index={idx} />
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900 flex justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-full border border-brand-cyan/40 text-brand-cyan font-bold text-sm tracking-wide hover:bg-brand-cyan/10 hover:border-brand-cyan transition-all duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            {techT.backToHome}
          </Link>
        </div>
      </div>
    </section>
  );
}
