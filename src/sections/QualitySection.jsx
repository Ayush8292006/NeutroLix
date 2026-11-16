import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Plus } from 'lucide-react';
import { CERTIFICATIONS, LAB_CAPABILITIES } from '../data/siteContent';

export default function QualitySection({ onOpenQuote }) {
  return (
    <section
      id="quality"
      className="relative py-20 lg:py-24 bg-[#F6F7F2] border-b border-slate-200 overflow-hidden"
    >
      {/* Static blurred brand-color shapes behind */}
      <div
        className="absolute top-10 right-0 w-[450px] h-[450px] rounded-full pointer-events-none"
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
        
        {/* Section Header: Subtle Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: [0.25, 1, 0.5, 1] }}
          className="max-w-3xl mb-14"
        >
          <span className="text-[11px] font-sans font-semibold tracking-[0.14em] uppercase text-[#0B3C5D] block mb-2">
            QUALITY ASSURANCE & ACCREDITATIONS
          </span>
          <div className="h-[1px] w-12 bg-[#8CC63F] mb-4" />
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-display font-extrabold text-[#0B3C5D] tracking-tight leading-[1.18]">
            International Compliance & Analytical Testing
          </h2>
          <p className="mt-3 text-base text-slate-700 leading-relaxed font-medium">
            Supplying global brand-owners in North America, Europe, and Asia requires total analytical transparency. Every batch is quarantined and dispatched with lot-specific Certificate of Analysis.
          </p>
        </motion.div>

        {/* Certifications Grid in .glass-light with Staggered Scroll Reveal */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-14">
          {CERTIFICATIONS.map((cert, index) => (
            <motion.div
              key={cert.code}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0, margin: '100px' }}
              transition={{
                duration: 0.45,
                delay: (index % 4) * 0.05,
                ease: [0.25, 1, 0.5, 1],
              }}
              className="cert-card glass-light p-5 rounded-[16px] flex flex-col justify-between hover:-translate-y-1.5 hover:shadow-card transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs font-bold text-[#0B3C5D] bg-white px-2 py-0.5 rounded-[6px] border border-slate-200/80 shadow-xs">
                    {cert.code}
                  </span>
                  <ShieldCheck className="w-4 h-4 text-[#8CC63F]" />
                </div>
                <h3 className="font-display font-extrabold text-sm text-[#0B3C5D]">
                  {cert.name}
                </h3>
                <p className="text-[11px] text-slate-700 mt-1 leading-snug font-medium">
                  {cert.desc}
                </p>
              </div>

              <div className="mt-4 pt-2 border-t border-slate-200/80 text-[10px] text-slate-500 font-mono font-semibold">
                Audit Body: {cert.authority}
              </div>
            </motion.div>
          ))}

          {/* Placeholder Card for custom certificates in .glass-light */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0, margin: '100px' }}
            transition={{ duration: 0.45, delay: 0.2, ease: [0.25, 1, 0.5, 1] }}
            className="cert-card glass-light p-5 rounded-[16px] border-2 border-dashed border-slate-300 flex flex-col items-center justify-center text-center p-6 hover:border-slate-400 transition-colors"
          >
            <Plus className="w-6 h-6 text-slate-400 mb-2" />
            <span className="font-display font-extrabold text-xs text-[#0B3C5D] block">
              Custom Accreditations
            </span>
            <span className="text-[10px] text-slate-600 mt-1 font-medium">
              [Add your certificates here: e.g. BRCGS, Non-GMO Project, Organic EU]
            </span>
          </motion.div>
        </div>

        {/* In-House Testing Laboratory Section in .glass-dark with subtle scroll reveal */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0, margin: '100px' }}
          transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
          className="glass-dark rounded-[20px] text-white p-6 sm:p-10 border border-white/15 relative overflow-hidden"
        >
          <div className="max-w-xl mb-6">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#8CC63F] block mb-1">Analytical Testing</span>
            <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
              In-House Analytical Quarantine Protocols
            </h3>
            <p className="text-xs text-slate-200 mt-1 font-normal">
              Multi-residue pesticide screen, heavy metals (ICP-MS), and automated microbial testing prior to release.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            {LAB_CAPABILITIES.map((lab, i) => (
              <div key={i} className="glass p-4 rounded-[12px] border border-white/10">
                <h4 className="text-xs font-bold font-display text-white mb-2 pb-1 border-b border-white/10 flex items-center justify-between">
                  <span>{lab.title}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8CC63F] shadow-[0_0_6px_rgba(140,198,63,0.8)]" />
                </h4>
                <ul className="space-y-1 text-[11px] text-slate-200">
                  {lab.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-[#8CC63F]">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
