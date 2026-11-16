import React from 'react';
import { motion } from 'framer-motion';
import { Target, Compass, Factory, Check } from 'lucide-react';
import { ABOUT_CONTENT } from '../data/siteContent';
import { IMAGES } from '../data/images';
import Img from '../components/Img';

export default function AboutUs() {
  return (
    <section id="about" className="relative py-20 lg:py-24 bg-[#F6F7F2] border-b border-slate-200 overflow-hidden">
      {/* Two soft blurred brand-color shapes behind (static, no animation) */}
      <div
        className="absolute top-10 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(41, 169, 224, 0.22) 0%, rgba(41, 169, 224, 0) 70%)',
          filter: 'blur(70px)',
        }}
      />
      <div
        className="absolute bottom-10 left-0 w-[450px] h-[450px] rounded-full pointer-events-none"
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
          className="about-header max-w-3xl mb-12"
        >
          <span className="text-[11px] font-sans font-semibold tracking-[0.14em] uppercase text-[#0B3C5D] block mb-2">
            WHO WE ARE · INFRASTRUCTURE & SOURCING
          </span>
          <div className="h-[1px] w-12 bg-[#8CC63F] mb-4" />
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-display font-extrabold text-[#0B3C5D] tracking-tight leading-[1.18]">
            Engineering botanical purity for global food & pharma leaders.
          </h2>
        </motion.div>

        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-14">
          
          {/* Left: Statement & Narrative on clean background */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="about-text-block lg:col-span-7 space-y-5"
          >
            <p className="text-lg sm:text-xl font-display font-semibold text-[#0B3C5D] leading-relaxed">
              {ABOUT_CONTENT.lead}
            </p>

            <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed pt-1">
              <p>{ABOUT_CONTENT.paragraphs[0]}</p>
              <p>{ABOUT_CONTENT.paragraphs[1]}</p>
            </div>

            <div className="pt-4 border-t border-slate-200">
              <span className="text-xs font-display font-bold uppercase tracking-wider text-slate-800 block mb-3">
                Key Processing Commitments:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {ABOUT_CONTENT.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                    <span className="w-4 h-4 rounded bg-[#8CC63F]/25 text-[#0B3C5D] flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-[#0B3C5D]" />
                    </span>
                    <span className="font-medium">{h}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Image with overlapping .glass-light card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="about-img-block lg:col-span-5 relative"
          >
            <div className="rounded-[16px] overflow-hidden border border-slate-200 shadow-card relative bg-white">
              <Img
                src={IMAGES.about.orchard}
                alt="NutroLix Contract Orchards"
                fallbackText="12,000+ Contract Farm Acres"
                aspectRatio="aspect-[4/5]"
              />
              <div className="p-3.5 bg-white border-t border-slate-100 flex justify-between items-center text-xs">
                <span className="font-display font-bold text-[#0B3C5D]">GAP-Certified Orchards</span>
                <span className="text-[10px] font-mono text-slate-500 font-semibold">12,000+ Acres</span>
              </div>
            </div>

            {/* Overlapping small .glass-light card at corner */}
            <div className="absolute -bottom-5 -left-4 sm:-bottom-6 sm:-left-6 glass-light p-4 rounded-[14px] shadow-card max-w-[230px] border border-white/80">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-2 h-2 rounded-full bg-[#8CC63F] shadow-[0_0_8px_rgba(140,198,63,0.8)]" />
                <span className="text-xs font-display font-extrabold text-[#0B3C5D]">
                  Spray & Freeze Dried
                </span>
              </div>
              <p className="text-[11px] text-slate-700 leading-snug font-medium">
                Preserving enzymatic & nutritional potency under strict low-temperature protocols.
              </p>
            </div>
          </motion.div>

        </div>

        {/* 3 Fact Cards styled in .glass-light */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20px' }}
            transition={{ duration: 0.5, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="glass-light p-6 rounded-[16px] shadow-subtle flex flex-col justify-between hover:-translate-y-1 transition-transform duration-200"
          >
            <div>
              <div className="flex items-center gap-2 mb-2 text-[#0B3C5D]">
                <Compass className="w-4 h-4 text-[#0B3C5D]" />
                <h3 className="font-display font-bold text-sm text-[#0B3C5D]">
                  {ABOUT_CONTENT.vision.title}
                </h3>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed font-medium">
                {ABOUT_CONTENT.vision.text}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-200/80 text-[11px] font-mono text-slate-500 font-semibold">
              Clean-Label Botanical Standard
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20px' }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="glass-light p-6 rounded-[16px] shadow-subtle flex flex-col justify-between hover:-translate-y-1 transition-transform duration-200"
          >
            <div>
              <div className="flex items-center gap-2 mb-2 text-[#0B3C5D]">
                <Target className="w-4 h-4 text-[#8CC63F]" />
                <h3 className="font-display font-bold text-sm text-[#0B3C5D]">
                  {ABOUT_CONTENT.mission.title}
                </h3>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed font-medium">
                {ABOUT_CONTENT.mission.text}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-200/80 text-[11px] font-mono text-slate-500 font-semibold">
              Active Bioactive Standardization
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20px' }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="glass-light p-6 rounded-[16px] shadow-subtle flex flex-col justify-between hover:-translate-y-1 transition-transform duration-200"
          >
            <div>
              <div className="flex items-center gap-2 mb-2 text-[#0B3C5D]">
                <Factory className="w-4 h-4 text-[#29A9E0]" />
                <h3 className="font-display font-bold text-sm text-[#0B3C5D]">
                  Industrial Capacity
                </h3>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed font-medium">
                Dual automated drying lines producing 350 MT/month to secure consistent supply for high-volume multinational accounts.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-200/80 text-[11px] font-mono text-slate-500 font-semibold">
              350 MT Monthly Output
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
