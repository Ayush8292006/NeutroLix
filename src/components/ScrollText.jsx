import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollText({
  text = '',
  as: Component = 'p',
  className = '',
  start = 'top 80%',
  end = 'bottom 55%',
  activeColor = 'currentColor',
}) {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const el = containerRef.current;
    if (!el || !text) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const words = el.querySelectorAll('.scroll-word');
      // Applied via GSAP only: starts at 0.2 and scrubs to 1.0
      // In CSS, words are opacity: 1 by default so text is NEVER invisible if JS fails!
      gsap.fromTo(
        words,
        { opacity: 0.2 },
        {
          opacity: 1,
          stagger: 0.08,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start,
            end,
            scrub: true,
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [text, start, end]);

  const words = text.split(' ');

  return (
    <Component ref={containerRef} className={`relative ${className}`}>
      {words.map((word, index) => (
        <span
          key={index}
          className="scroll-word inline-block mr-[0.25em]"
          style={{ color: activeColor }}
        >
          {word}
        </span>
      ))}
    </Component>
  );
}
