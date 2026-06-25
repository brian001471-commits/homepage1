"use client";

import { motion } from "framer-motion";
import { useTranslations } from "@/hooks/useTranslations";

export function AboutSection() {
  const { home: homeT } = useTranslations();
  const about = homeT.about;

  return (
    <section id="about" className="py-24 md:py-32 relative bg-brand-dark border-t border-slate-900">
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-12 md:space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl space-y-5"
        >
          <div className="inline-flex items-center gap-2 text-brand-cyan font-bold tracking-widest text-xs uppercase font-mono">
            <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
            {about.badge}
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">{about.title}</h2>
          <p className="text-lg md:text-xl text-brand-cyan font-semibold leading-relaxed">{about.subtitle}</p>
          <div className="w-20 h-1 bg-gradient-to-r from-brand-cyan to-transparent" />
          <p className="text-slate-400 text-sm md:text-base leading-[1.9]">{about.body}</p>
        </motion.div>
      </div>
    </section>
  );
}
