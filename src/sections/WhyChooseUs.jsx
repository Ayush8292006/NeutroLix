import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Sliders, Boxes, PlaneTakeoff, QrCode, Zap } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/siteContent';

const ICON_MAP = {
  Leaf,
  Sliders,
  Boxes,
  PlaneTakeoff,
  QrCode,
  Zap,
};

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="relative py-20 lg:py-24 bg-[#EEF5F9] border-b border-slate-200 overflow-hidden"
    >
      {/* Static blurred brand-color shapes behind the glass-light cards */}
      <div
        className="absolute top-10 -left-20 w-[450px] h-[450px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(41, 169, 224, 0.25) 0%, rgba(41, 169, 224, 0) 70%)',
          filter: 'blur(70px)',
        }}
      />
      <div
        className="absolute bottom-10 -right-20 w-[450px] h-[450px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(140, 198, 63, 0.20) 0%, rgba(140, 198, 63, 0) 70%)',
          filter: 'blur(70px)',
        }}
      />

      <div className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Subtle Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: [0.25, 1, 0.5, 1] }}
          className="max-w-3xl mb-14"
        >
          <span className="text-[11px] font-sans font-semibold tracking-[0.14em] uppercase text-[#0B3C5D] block mb-2">
            MANUFACTURER ADVANTAGE
          </span>
          <div className="h-[1px] w-12 bg-[#8CC63F] mb-4" />
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-display font-extrabold text-[#0B3C5D] tracking-tight leading-[1.18]">
            Built for Industrial Reliability & Supply Security
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed font-medium">
            Combining direct agricultural contract farming with precision drying engineering to meet the exacting commercial requirements of multinational ingredient buyers.
          </p>
        </motion.div>

        {/* 6 Advantage Cards: Staggered Gentle Scroll Reveal (halka show ho) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((item, index) => {
            const IconComponent = ICON_MAP[item.icon] || Leaf;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.55,
                  delay: (index % 3) * 0.1,
                  ease: [0.25, 1, 0.5, 1],
                }}
                className="why-item glass-light p-6 rounded-[16px] hover:-translate-y-1.5 hover:shadow-card transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-[10px] bg-white border border-slate-200/80 shadow-sm flex items-center justify-center text-[#0B3C5D]">
                      <IconComponent className="w-5 h-5 text-[#0B3C5D]" />
                    </div>
                    <span className="font-mono text-xs text-slate-500 font-bold">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="font-display font-extrabold text-base text-[#0B3C5D] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-700 leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-200/80 flex items-center justify-between text-[11px] font-mono text-slate-600">
                  <span>Parameter:</span>
                  <span className="text-[#0B3C5D] font-bold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8CC63F]" />
                    {item.highlight}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
