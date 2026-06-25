"use client";

import { motion } from "framer-motion";
import { ClipboardList, Code2, ShieldCheck, ChevronRight } from "lucide-react";
import { useTranslations } from "@/hooks/useTranslations";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const STEP_ICONS = [ClipboardList, Code2, ShieldCheck] as const;

export function ProcessSection() {
  const { home: homeT } = useTranslations();
  const process = homeT.process;

  return (
    <section id="process" className="py-24 md:py-32 relative bg-brand-dark border-t border-slate-900">
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-14 md:mb-16"
        >
          <span className="text-brand-cyan text-xs font-mono font-bold tracking-widest uppercase">
            {process.badge}
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-white">{process.title}</h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">{process.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 relative">
          {process.steps.map((step, idx) => {
            const Icon = STEP_ICONS[idx] ?? ClipboardList;
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="relative"
              >
                {idx < process.steps.length - 1 && (
                  <ChevronRight className="hidden md:block absolute -right-3 top-16 w-6 h-6 text-brand-cyan/40 z-10" />
                )}
                <Card className="h-full border-slate-800 bg-[#1E293B]/50 hover:border-brand-cyan/35 hover:-translate-y-1 transition-all duration-300 group">
                  <CardHeader className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold text-brand-cyan tracking-widest">
                        STEP {step.step}
                      </span>
                      <div className="w-11 h-11 rounded-xl bg-brand-dark border border-brand-cyan/25 flex items-center justify-center text-brand-cyan group-hover:border-brand-cyan/50 transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>
                    <CardTitle className="text-base text-white group-hover:text-brand-cyan transition-colors leading-snug">
                      {step.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-xs md:text-sm leading-relaxed text-slate-400">
                      {step.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
