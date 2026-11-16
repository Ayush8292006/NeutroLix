import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ArrowRight } from 'lucide-react';
import { IMAGES } from '../data/images';

export default function Hero({ onOpenQuote, splashFinished }) {
  const h1Ref = useRef(null);

  const headlineText = "Fruit powders engineered for nutraceutical and food formulations.";
  const words = headlineText.split(' ');

  // Animate H1 words ONCE on page load (0.5s total, no scroll involved)
  useLayoutEffect(() => {
    const el = h1Ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const wordSpans = el.querySelectorAll('.hero-word');
      gsap.from(wordSpans, {
        opacity: 0,
        y: 12,
        stagger: 0.04,
        duration: 0.5,
        ease: 'power2.out',
      });
    }, el);

    return () => ctx.revert();
  }, [splashFinished]);

  const handleScrollToProducts = () => {
    const el = document.querySelector('#products');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const keyFacts = [
    { title: 'Spray & Freeze Dried', desc: 'Preserving color, flavor & bioactives' },
    { title: 'Custom Specifications', desc: 'Custom mesh, carrier & bulk density' },
    { title: 'Bulk & Export Supply', desc: '350 MT/month capacity, export packaging' },
    { title: 'Quality Tested Batches', desc: 'ISO 22000, GMP, HACCP & FSSAI certified' },
  ];

  return (
    <section
      id="home"
      className="relative w-full min-h-[100svh] flex flex-col justify-between overflow-hidden bg-[#06283D] text-white"
    >
      {/* Background Image Layer with Solid Fallback Color (#0B3C5D) */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${IMAGES.hero.bg}')`,
          backgroundColor: '#0B3C5D',
        }}
      />

      {/* Dark Blue Overlay Layer (z-10) with rgba(6, 40, 61, 0.55) */}
      <div
        className="absolute inset-0 z-10"
        style={{ backgroundColor: 'rgba(6, 40, 61, 0.55)' }}
      />

      {/* Static soft blurred brand color glow behind the text & bottom strip */}
      <div
        className="absolute top-1/4 -left-20 w-80 h-80 rounded-full z-15 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(41, 169, 224, 0.25) 0%, rgba(41, 169, 224, 0) 70%)',
          filter: 'blur(50px)',
        }}
      />
      <div
        className="absolute bottom-20 right-10 w-96 h-96 rounded-full z-15 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(140, 198, 63, 0.20) 0%, rgba(140, 198, 63, 0) 70%)',
          filter: 'blur(60px)',
        }}
      />

      {/* Main Left-Aligned Content Block (z-20) */}
      <div className="relative z-20 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 w-full pt-32 sm:pt-40 lg:pt-44 pb-10 flex-grow flex items-center">
        <div className="max-w-[680px] text-left space-y-5 sm:space-y-6">
          {/* Eyebrow Label */}
          <div className="inline-block">
            <span className="text-[11px] sm:text-[12px] font-sans font-semibold tracking-[0.14em] uppercase text-[#8CC63F] block">
              FRUIT POWDER MANUFACTURER · INDIA
            </span>
            <div className="h-[1px] w-12 bg-[#8CC63F] mt-1.5" />
          </div>

          {/* H1 Headline (clamp 2.2rem to 4.5rem, text-white) */}
          <h1
            ref={h1Ref}
            className="font-display font-extrabold text-white text-[2.2rem] sm:text-5xl lg:text-[3.9rem] leading-[1.12] tracking-tighter text-balance"
          >
            {words.map((w, idx) => (
              <span key={idx} className="hero-word inline-block mr-[0.24em] text-white">
                {w}
              </span>
            ))}
          </h1>

          {/* Subtitle / Paragraph */}
          <p className="text-sm sm:text-base md:text-lg text-slate-100 font-normal leading-relaxed text-balance">
            Spray-dried and freeze-dried fruit powders with consistent quality, custom specifications and export-ready supply.
          </p>

          {/* 2 Clean Buttons (8px radius, clear hover state) */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
            <button
              onClick={onOpenQuote}
              className="btn-primary"
            >
              <span>Request a Sample</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </button>

            <button
              onClick={handleScrollToProducts}
              className="btn-secondary"
            >
              <span>Explore Products</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Floating .glass Facts Strip (2x2 on mobile, 4-col on desktop) */}
      <div className="relative z-20 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 w-full pb-6 sm:pb-8">
        <div className="glass p-4 sm:p-6 w-full">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {keyFacts.map((fact, index) => (
              <div
                key={fact.title}
                className={`flex flex-col justify-center ${
                  index !== keyFacts.length - 1 ? 'lg:border-r lg:border-white/15 lg:pr-6' : ''
                }`}
              >
                <div className="text-xs sm:text-sm font-display font-bold text-white tracking-tight flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#8CC63F] flex-shrink-0 shadow-[0_0_8px_rgba(140,198,63,0.6)]" />
                  <span>{fact.title}</span>
                </div>
                <div className="text-[11.5px] text-slate-200 mt-1 leading-snug">
                  {fact.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
