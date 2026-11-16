import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { INDUSTRIES } from '../data/siteContent';
import Img from '../components/Img';

export default function ApplicationsSection({ onOpenQuote }) {
  return (
    <section
      id="applications"
      className="relative py-16 sm:py-20 lg:py-24 bg-[#06253B] text-white border-b border-white/10 overflow-hidden"
    >
      {/* Real photo background with subtle opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-15 pointer-events-none"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=1600&q=80')",
        }}
      />

      {/* Static blurred brand color shapes behind the glass cards */}
      <div
        className="absolute top-1/3 -right-20 w-[450px] h-[450px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(41, 169, 224, 0.25) 0%, rgba(41, 169, 224, 0) 70%)',
          filter: 'blur(70px)',
        }}
      />
      <div
        className="absolute bottom-10 -left-10 w-[420px] h-[420px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(140, 198, 63, 0.20) 0%, rgba(140, 198, 63, 0) 70%)',
          filter: 'blur(70px)',
        }}
      />

      <div className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0, margin: '100px' }}
          transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
          className="max-w-3xl mb-8 sm:mb-12"
        >
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-sans font-semibold tracking-[0.14em] uppercase text-[#8CC63F] block mb-2">
              APPLICATIONS & FORMULATIONS
            </span>
            <span className="md:hidden text-[10px] font-mono text-slate-300 flex items-center gap-1">
              <span>Swipe row</span>
              <ChevronRight className="w-3 h-3 text-[#8CC63F]" />
            </span>
          </div>
          <div className="h-[1px] w-12 bg-[#8CC63F] mb-4" />
          <h2 className="text-2xl sm:text-4xl lg:text-[2.75rem] font-display font-extrabold text-white tracking-tight leading-[1.18]">
            Formulation Performance Across Sectors
          </h2>
          <p className="mt-2.5 sm:mt-3 text-xs sm:text-base text-slate-200 leading-relaxed">
            Targeted particle sizing, cold-water dispersibility, and heat stability engineered for specific industrial manufacturing parameters.
          </p>
        </motion.div>

        {/* Guaranteed Visible Cards Layout: Mobile swipe row, md 2-cols, lg 3-cols */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0, margin: '150px' }}
          transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
          className="flex flex-row overflow-x-auto snap-x snap-mandatory gap-4 pb-4 no-scrollbar md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 md:overflow-visible"
        >
          {INDUSTRIES.map((ind) => (
            <div
              key={ind.id}
              className="app-card group glass rounded-[16px] overflow-hidden flex flex-col justify-between hover:border-white/40 hover:-translate-y-1.5 hover:shadow-card transition-all duration-300 w-[84vw] sm:w-[360px] md:w-auto flex-shrink-0 snap-center"
            >
              {/* Header with Img & Zoom on hover */}
              <div className="relative aspect-[16/10] overflow-hidden bg-black/40 border-b border-white/10">
                <div className="w-full h-full transform group-hover:scale-104 transition-transform duration-300 ease-out">
                  <Img
                    src={ind.image}
                    alt={ind.title}
                    fallbackText={ind.title}
                    aspectRatio="aspect-[16/10]"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#06283D] via-[#06283D]/40 to-transparent pointer-events-none" />
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-[4px] bg-[#06253B]/90 text-[#8CC63F] border border-white/10 font-bold">
                    {ind.category}
                  </span>
                </div>
                <div className="absolute bottom-2.5 left-4 right-4">
                  <h3 className="text-base sm:text-lg font-bold font-display text-white">{ind.title}</h3>
                </div>
              </div>

              {/* Card Body with High-Contrast Text */}
              <div className="p-4 sm:p-5 flex-grow flex flex-col justify-between space-y-3.5 sm:space-y-4">
                <p className="text-xs text-slate-100 leading-relaxed font-normal">
                  {ind.summary}
                </p>

                <div className="space-y-1.5 pt-3 border-t border-white/15">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#8CC63F] font-semibold">
                    Application Scope:
                  </div>
                  {ind.useCases.map((use, i) => (
                    <div key={i} className="flex items-start gap-1.5 text-xs text-slate-200">
                      <span className="text-[#8CC63F] mt-0.5">•</span>
                      <span>{use}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-3 border-t border-white/15 flex items-center justify-between gap-2">
                  <span className="text-[11px] font-mono text-slate-200 font-medium">
                    {ind.stats}
                  </span>
                  <button
                    onClick={onOpenQuote}
                    className="text-xs font-bold font-display text-[#8CC63F] hover:text-white flex items-center gap-1 transition-colors"
                  >
                    <span>Formulate</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
