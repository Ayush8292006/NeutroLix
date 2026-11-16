import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, PhoneCall } from 'lucide-react';
import { COMPANY_INFO } from '../data/siteContent';

export default function CtaBanner({ onOpenQuote }) {
  return (
    <section className="relative py-20 bg-[#0B3C5D] border-b border-white/10 overflow-hidden">
      {/* Subtle photo background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-15 pointer-events-none"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=1600&q=80')",
        }}
      />

      {/* Static soft blurred brand color glow */}
      <div
        className="absolute top-0 right-10 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(140, 198, 63, 0.25) 0%, rgba(140, 198, 63, 0) 70%)',
          filter: 'blur(60px)',
        }}
      />
      <div
        className="absolute bottom-0 left-10 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(41, 169, 224, 0.25) 0%, rgba(41, 169, 224, 0) 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: [0.25, 1, 0.5, 1] }}
          className="glass p-8 sm:p-12 lg:p-14 rounded-[20px] border border-white/25 flex flex-col lg:flex-row lg:items-center justify-between gap-8 shadow-2xl"
        >
          <div className="max-w-2xl space-y-3">
            <span className="text-[11px] font-sans font-semibold tracking-[0.14em] uppercase text-[#8CC63F] block">
              CONTRACT SUPPLY & R&D SAMPLES
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white tracking-tight leading-snug">
              Need a custom blend or bulk export volume?
            </h2>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
              We provide 250g sterilized evaluation sample packs with complete batch Certificate of Analysis, followed by commercial pilot batches and annual supply contracts.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 flex-shrink-0">
            <button
              onClick={onOpenQuote}
              className="btn-primary"
            >
              <span>Request a Sample</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="btn-secondary"
            >
              <PhoneCall className="w-4 h-4 text-[#8CC63F]" />
              <span>Contact Technical Sales</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
