"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, BrainCircuit, Database, Network, Settings } from "lucide-react";
import { useTranslations } from "@/hooks/useTranslations";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const CARD_ICONS = [BrainCircuit, Database, Network, Settings] as const;

export function CoreTechSection() {
  const { tech: techT } = useTranslations();

  return (
    <section className="py-24 md:py-32 relative bg-brand-dark border-t border-slate-900 min-h-[calc(100vh-5rem)]">
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Heading & Description */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 lg:sticky lg:top-28 space-y-6"
          >
            <span className="inline-flex items-center gap-2 text-brand-cyan text-xs font-mono font-bold tracking-widest">
              <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
              {techT.badge}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight">
              {techT.title}
            </h1>
            <div className="w-16 h-1 bg-gradient-to-r from-brand-cyan to-transparent" />
            <p className="text-slate-400 text-sm md:text-base leading-[1.9]">{techT.description}</p>
          </motion.div>

          {/* Right: 2-column Card Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {techT.cards.map((card, idx) => {
              const Icon = CARD_ICONS[idx] ?? BrainCircuit;
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <Card className="h-full border-slate-800 bg-brand-card/60 hover:border-brand-cyan/35 hover:-translate-y-1 transition-all duration-300 group">
                    <CardHeader className="space-y-4">
                      <div className="w-12 h-12 rounded-xl bg-brand-dark border border-brand-cyan/30 flex items-center justify-center text-brand-cyan group-hover:shadow-[0_0_20px_rgba(0,240,255,0.15)] transition-shadow">
                        <Icon className="w-6 h-6" />
                      </div>
                      <CardTitle className="text-base text-white group-hover:text-brand-cyan transition-colors leading-snug">
                        {card.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-sm leading-relaxed text-slate-400 whitespace-pre-line">
                        {card.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="mt-20 pt-12 border-t border-slate-900 flex justify-center">
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
