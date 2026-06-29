"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useTranslations } from "@/hooks/useTranslations";

function ProcessStepCard({
  step,
  title,
  description,
}: {
  step: string;
  title: string;
  description: string;
}) {
  return (
    <div className="h-full rounded-xl border border-slate-700/80 bg-[#1E293B]/40 p-6 md:p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-cyan/30 hover:shadow-lg">
      <span className="block text-2xl font-black text-brand-cyan font-mono tracking-tight">
        {step}
      </span>
      <h3 className="mt-4 mb-3 text-base md:text-[17px] font-bold text-white leading-snug">
        {title}
      </h3>
      <p className="text-sm text-slate-400 leading-relaxed">{description}</p>
    </div>
  );
}

function FlowArrowHorizontal() {
  return (
    <div className="hidden lg:flex items-center justify-center shrink-0 px-1 xl:px-2 self-center">
      <div className="flex items-center gap-1">
        <div className="w-4 xl:w-8 h-px bg-gradient-to-r from-slate-600/40 via-brand-cyan/40 to-brand-cyan/60" />
        <ArrowRight className="w-4 h-4 text-brand-cyan/60 stroke-[2.5]" aria-hidden="true" />
      </div>
    </div>
  );
}

function FlowArrowVertical() {
  return (
    <div className="lg:hidden flex flex-col items-center py-3">
      <div className="w-px h-5 bg-gradient-to-b from-slate-600/40 via-brand-cyan/40 to-brand-cyan/60" />
      <ChevronDown className="w-4 h-4 text-brand-cyan/60 mt-0.5" aria-hidden="true" />
    </div>
  );
}

export function ProcessSection() {
  const { home: homeT } = useTranslations();
  const process = homeT.process;

  return (
    <section id="process" className="py-24 md:py-32 relative bg-brand-dark border-t border-slate-900">
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Left-aligned title block */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-left space-y-3 md:space-y-4 mb-12 md:mb-16 max-w-3xl"
        >
          <span className="block text-brand-cyan text-xs font-mono font-bold tracking-[0.2em] uppercase">
            {process.badge}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight">
            {process.title}
          </h2>
          <p className="text-sm md:text-base text-slate-400 leading-relaxed">{process.subtitle}</p>
        </motion.div>

        {/* Desktop: 4 cards in a row with flow arrows */}
        <div className="hidden lg:flex items-stretch w-full">
          {process.steps.map((item, idx) => (
            <div key={item.step} className="contents">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="flex-1 min-w-0"
              >
                <ProcessStepCard
                  step={item.step}
                  title={item.title}
                  description={item.description}
                />
              </motion.div>
              {idx < process.steps.length - 1 && <FlowArrowHorizontal />}
            </div>
          ))}
        </div>

        {/* Mobile / Tablet: vertical stack with flow arrows */}
        <div className="lg:hidden flex flex-col">
          {process.steps.map((item, idx) => (
            <div key={item.step}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.06 }}
              >
                <ProcessStepCard
                  step={item.step}
                  title={item.title}
                  description={item.description}
                />
              </motion.div>
              {idx < process.steps.length - 1 && <FlowArrowVertical />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
