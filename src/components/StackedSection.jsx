import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function StackedSection({
  id,
  children,
  zIndex = 20,
  bg = 'bg-[#F6F7F2]',
  bgColor = '#F6F7F2',
  hasCurtain = true,
  className = '',
  enableScaleDown = false,
}) {
  const sectionRef = useRef(null);
  const innerRef = useRef(null);

  useLayoutEffect(() => {
    const el = sectionRef.current;
    const inner = innerRef.current;
    if (!el || !inner || !enableScaleDown) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Gentle optional scale-down as next curtain overlaps (decoration only, never hides content)
      gsap.to(inner, {
        scale: 0.96,
        opacity: 0.85,
        transformOrigin: '50% 20%',
        ease: 'none',
        scrollTrigger: {
          trigger: el,
          start: 'bottom bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, el);

    return () => ctx.revert();
  }, [enableScaleDown]);

  return (
    <section
      id={id}
      ref={sectionRef}
      style={{
        position: 'sticky',
        top: 0,
        zIndex,
        backgroundColor: bgColor,
        minHeight: '100vh',
      }}
      className={`w-full ${bg} ${
        hasCurtain
          ? 'rounded-t-[24px] sm:rounded-t-[32px] shadow-[0_-16px_40px_rgba(6,37,59,0.12)] border-t border-slate-200/60'
          : ''
      } ${className}`}
    >
      <div ref={innerRef} className="w-full h-full">
        {children}
      </div>
    </section>
  );
}
