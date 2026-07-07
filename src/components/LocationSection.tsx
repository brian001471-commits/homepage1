"use client";

import { useCallback, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { LocateFixed, MapPin } from "lucide-react";
import { useTranslations } from "@/hooks/useTranslations";
import { Card, CardContent } from "@/components/ui/card";

export function LocationSection() {
  const { home: homeT } = useTranslations();
  const location = homeT.location;
  const [mapKey, setMapKey] = useState(0);

  const mapSrc = useMemo(
    () =>
      `https://maps.google.com/maps?q=${encodeURIComponent(location.mapQuery)}&hl=ko&z=16&output=embed`,
    [location.mapQuery],
  );

  const resetMap = useCallback(() => {
    setMapKey((key) => key + 1);
  }, []);

  return (
    <section id="location" className="py-24 md:py-32 relative bg-brand-dark border-t border-slate-900">
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="space-y-4 mb-10"
        >
          <span className="text-brand-cyan text-xs font-mono font-bold tracking-widest uppercase">
            {location.badge}
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-white">{location.title}</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-brand-cyan to-transparent" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4"
          >
            <Card className="h-full border-slate-800 bg-brand-card/60">
              <CardContent className="p-8 flex flex-col gap-6">
                <div className="w-12 h-12 rounded-xl bg-brand-dark border border-brand-cyan/30 flex items-center justify-center text-brand-cyan">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <p className="text-lg font-bold text-white leading-relaxed">{location.addressLine1}</p>
                  <p className="text-base text-brand-cyan font-semibold">{location.addressLine2}</p>
                  <p className="text-base text-slate-300 font-medium">{location.phone}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-8"
          >
            <div className="relative h-full min-h-[320px] md:min-h-[400px] rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/50">
              <button
                type="button"
                onClick={resetMap}
                className="absolute top-4 right-4 z-10 inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-brand-dark/90 backdrop-blur-sm border border-brand-cyan/40 text-brand-cyan text-xs md:text-sm font-bold tracking-wide shadow-[0_0_20px_rgba(0,240,255,0.15)] hover:bg-brand-cyan hover:text-brand-dark hover:border-brand-cyan transition-all duration-300 cursor-pointer"
                aria-label={location.mapReset}
              >
                <LocateFixed className="w-4 h-4 shrink-0" />
                {location.mapReset}
              </button>
              <iframe
                key={mapKey}
                title={location.title}
                src={mapSrc}
                className="w-full h-full min-h-[320px] md:min-h-[400px] border-0 grayscale-[20%] contrast-[1.05]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
