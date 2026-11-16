import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/siteContent';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section className="relative py-20 lg:py-24 bg-[#F6F7F2] border-b border-slate-200 overflow-hidden">
      {/* Soft blurred background brand color shapes */}
      <div
        className="absolute top-1/3 left-10 w-[450px] h-[450px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(41, 169, 224, 0.20) 0%, rgba(41, 169, 224, 0) 70%)',
          filter: 'blur(70px)',
        }}
      />
      <div
        className="absolute bottom-10 right-10 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(140, 198, 63, 0.18) 0%, rgba(140, 198, 63, 0) 70%)',
          filter: 'blur(70px)',
        }}
      />

      <div className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mb-12"
        >
          <span className="text-[11px] font-sans font-semibold tracking-[0.14em] uppercase text-[#0B3C5D] block mb-2">
            CLIENT EVALUATIONS · PLACEHOLDERS
          </span>
          <div className="h-[1px] w-12 bg-[#8CC63F] mb-4" />
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-display font-extrabold text-[#0B3C5D] tracking-tight leading-[1.18]">
            Formulator Feedback & Industry Case Studies
          </h2>
        </motion.div>

        {/* Testimonial Card in .glass-light */}
        <div className="max-w-3xl glass-light rounded-[20px] p-8 sm:p-12 relative shadow-card border border-white/80">
          <Quote className="w-10 h-10 text-[#0B3C5D]/30 mb-6" />

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <blockquote className="text-base sm:text-lg text-slate-800 leading-relaxed font-sans font-medium">
                "{current.quote}"
              </blockquote>

              <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between flex-wrap gap-4">
                <div>
                  <div className="font-display font-bold text-sm text-[#0B3C5D]">
                    {current.author}
                  </div>
                  <div className="text-xs text-slate-600 mt-0.5">
                    {current.role} • <span className="font-semibold text-slate-800">{current.company}</span>
                  </div>
                </div>

                <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-[6px] bg-white border border-slate-200/80 text-[#0B3C5D] font-bold shadow-xs">
                  {current.tag} [Case Study]
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8 pt-4 border-t border-slate-200/80">
            <span className="text-xs font-mono text-slate-600 font-semibold">
              0{currentIndex + 1} / 0{TESTIMONIALS.length}
            </span>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="p-2 rounded-[8px] bg-white/80 border border-slate-300 hover:bg-white text-slate-700 transition-colors shadow-xs"
                aria-label="Previous"
              >
                <ChevronLeft className="w-4 h-4 text-[#0B3C5D]" />
              </button>
              <button
                onClick={handleNext}
                className="p-2 rounded-[8px] bg-[#0B3C5D] hover:bg-[#135482] text-white transition-colors shadow-sm"
                aria-label="Next"
              >
                <ChevronRight className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
