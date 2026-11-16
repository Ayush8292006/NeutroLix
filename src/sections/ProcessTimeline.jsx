import React from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';
import { PROCESS_TIMELINE } from '../data/siteContent';
import Img from '../components/Img';

export default function ProcessTimeline() {
  return (
    <section
      id="process"
      className="py-20 lg:py-24 bg-[#F6F7F2] border-b border-slate-200"
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Subtle Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: [0.25, 1, 0.5, 1] }}
          className="max-w-3xl mb-14"
        >
          <span className="text-[11px] font-sans font-semibold tracking-[0.14em] uppercase text-[#0B3C5D] block mb-2">
            MANUFACTURING PROTOCOL · STEP 01 TO 07
          </span>
          <div className="h-[1px] w-12 bg-[#8CC63F] mb-4" />
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-display font-extrabold text-[#0B3C5D] tracking-tight leading-[1.18]">
            Farm-to-Drum Processing & Analytical Quarantine
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed font-medium">
            Continuous temperature-controlled drying and closed-loop milling protocols engineered to preserve heat-sensitive enzymes, vitamins, and organoleptic properties.
          </p>
        </motion.div>

        {/* Static Step Cards Grid with Gentle Staggered Scroll Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROCESS_TIMELINE.map((stepItem, index) => (
            <motion.div
              key={stepItem.step}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.55,
                delay: (index % 3) * 0.1,
                ease: [0.25, 1, 0.5, 1],
              }}
              className={`process-card group rounded-[16px] bg-white border border-slate-200 overflow-hidden flex flex-col justify-between hover:border-[#0B3C5D] hover:-translate-y-1.5 hover:shadow-card transition-all duration-300 ${
                index === 6 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Image Frame with zoom on hover */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 border-b border-slate-100">
                <div className="w-full h-full transform group-hover:scale-104 transition-transform duration-300 ease-out">
                  <Img
                    src={stepItem.image}
                    alt={stepItem.title}
                    fallbackText={stepItem.title}
                    aspectRatio="aspect-[16/10]"
                  />
                </div>

                {/* Step Badge */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-[#06283D]/90 text-white px-2.5 py-1 rounded-[6px] font-mono text-xs font-bold shadow-sm">
                  <span className="text-[#8CC63F]">STEP</span>
                  <span>{stepItem.step}</span>
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-2.5 right-3 flex items-center gap-1 bg-black/60 backdrop-blur-sm text-white px-2 py-0.5 rounded-[4px] text-[10.5px] font-mono">
                  <Clock className="w-3 h-3 text-[#8CC63F]" />
                  <span>{stepItem.duration}</span>
                </div>
              </div>

              {/* Step Details */}
              <div className="p-5 flex-grow flex flex-col justify-between space-y-3">
                <div>
                  <h3 className="font-display font-bold text-base text-[#0B3C5D]">
                    {stepItem.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed font-medium">
                    {stepItem.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>Protocol Validated</span>
                  <span className="text-[#0B3C5D] font-bold">Standard Spec</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
