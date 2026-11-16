import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Logo from '../assets/Logo';
import { IMAGES } from '../data/images';

export default function WelcomeSplash({ onComplete }) {
  const [show, setShow] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [showSubline, setShowSubline] = useState(false);
  const [isOpening, setIsOpening] = useState(false);

  const headline = "Welcome to NutroLix Nature";
  const subline = "Natural Fruit Powders for Nutraceutical & Food Industry";

  useEffect(() => {
    // 1. Session Storage check: show once per session
    if (sessionStorage.getItem('nutrolix_splash_shown')) {
      if (onComplete) onComplete();
      return;
    }

    setShow(true);

    // 2. Preload Hero Image
    if (IMAGES?.hero?.bg) {
      const img = new Image();
      img.src = IMAGES.hero.bg;
    }

    // 3. Absolute safety timeout (4200ms)
    const safetyTimer = setTimeout(() => {
      dismissSplash();
    }, 4200);

    // 4. Reduced Motion check
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      const quickTimer = setTimeout(() => {
        dismissSplash();
      }, 500);
      return () => {
        clearTimeout(quickTimer);
        clearTimeout(safetyTimer);
      };
    }

    // 5. ESC Key Listener
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        dismissSplash();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    // 6. Typewriter effect: starts after logo fade-in (500ms), 40ms per char
    let charIdx = 0;
    let typeInterval = null;
    let sublineTimer = null;
    let openTimer = null;

    const startTypingTimeout = setTimeout(() => {
      typeInterval = setInterval(() => {
        if (charIdx < headline.length) {
          setTypedText(headline.slice(0, charIdx + 1));
          charIdx++;
        } else {
          clearInterval(typeInterval);
          // Show subline after typewriter finishes
          sublineTimer = setTimeout(() => {
            setShowSubline(true);
            // Trigger animated door opening after reading pause (~1000ms)
            openTimer = setTimeout(() => {
              triggerAnimatedOpen();
            }, 950);
          }, 180);
        }
      }, 40);
    }, 500);

    return () => {
      clearTimeout(safetyTimer);
      clearTimeout(startTypingTimeout);
      if (typeInterval) clearInterval(typeInterval);
      if (sublineTimer) clearTimeout(sublineTimer);
      if (openTimer) clearTimeout(openTimer);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const triggerAnimatedOpen = () => {
    setIsOpening(true);
    if (onComplete) onComplete();
    setTimeout(() => {
      sessionStorage.setItem('nutrolix_splash_shown', 'true');
      setShow(false);
    }, 900);
  };

  const dismissSplash = () => {
    sessionStorage.setItem('nutrolix_splash_shown', 'true');
    setShow(false);
    if (onComplete) onComplete();
  };

  if (!show) return null;

  return (
    <div
      style={{ zIndex: 99999 }}
      className="fixed inset-0 select-none overflow-hidden"
    >
      {/* Animated Left Curtain / Shutter Door */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: isOpening ? '-100%' : 0 }}
        transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
        className="absolute top-0 bottom-0 left-0 w-1/2 bg-[#06283D] border-r border-[#8CC63F]/30 z-10 overflow-hidden"
      >
        {/* Soft lime glow on the left panel */}
        <div
          className="absolute -top-24 -left-24 w-96 h-96 rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(140, 198, 63, 0.20) 0%, rgba(140, 198, 63, 0) 70%)',
            filter: 'blur(70px)',
          }}
        />
      </motion.div>

      {/* Animated Right Curtain / Shutter Door */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: isOpening ? '100%' : 0 }}
        transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
        className="absolute top-0 bottom-0 right-0 w-1/2 bg-[#06283D] border-l border-[#8CC63F]/30 z-10 overflow-hidden"
      >
        {/* Soft sky-blue glow on the right panel */}
        <div
          className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(41, 169, 224, 0.25) 0%, rgba(41, 169, 224, 0) 70%)',
            filter: 'blur(70px)',
          }}
        />
      </motion.div>

      {/* Center Glowing Seam Line: shines & splits when opening */}
      <motion.div
        initial={{ opacity: 0.7, scaleY: 1 }}
        animate={{
          opacity: isOpening ? 0 : 0.7,
          scaleY: isOpening ? 0.2 : 1,
        }}
        transition={{ duration: 0.35 }}
        className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1.5px] bg-gradient-to-b from-transparent via-[#8CC63F] to-transparent z-15 pointer-events-none"
      />

      {/* Foreground Content Layer: Glass Card + Typewriter */}
      <motion.div
        animate={{
          opacity: isOpening ? 0 : 1,
          scale: isOpening ? 1.08 : 1,
        }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="absolute inset-0 z-20 flex flex-col items-center justify-center p-4 pointer-events-auto"
      >
        {/* Centered Single .glass Card */}
        <div className="relative flex flex-col items-center max-w-[560px] w-[88vw] sm:w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="glass w-full p-7 sm:p-10 flex flex-col items-center text-center !rounded-[20px] shadow-2xl border border-white/25"
          >
            {/* 1. Logo (Light variant, 72px desktop / 56px mobile) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.55 }}
              className="mb-6 flex justify-center"
            >
              <Logo
                variant="light"
                className="h-14 sm:h-[72px]"
                showText={true}
              />
            </motion.div>

            {/* 2. Typewriter Headline with blinking lime-green caret */}
            <div className="min-h-[2.5rem] flex items-center justify-center">
              <h1 className="text-xl sm:text-2xl md:text-[1.75rem] font-display font-extrabold text-white tracking-tight">
                {typedText}
                <span className="inline-block w-[2px] h-5 sm:h-6 ml-1.5 bg-[#8CC63F] animate-pulse align-middle" />
              </h1>
            </div>

            {/* 3. Second smaller line (13px, letter-spaced, 70% white) */}
            <div className="min-h-[1.5rem] mt-3">
              <motion.p
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: showSubline ? 0.75 : 0, y: showSubline ? 0 : 6 }}
                transition={{ duration: 0.5 }}
                className="text-[12.5px] sm:text-[13px] font-sans text-white tracking-[0.08em] uppercase font-medium leading-relaxed"
              >
                {subline}
              </motion.p>
            </div>
          </motion.div>

          {/* Small "Skip" text link below the card */}
          <button
            onClick={dismissSplash}
            className="mt-6 text-xs font-mono text-slate-400 hover:text-white uppercase tracking-widest transition-colors cursor-pointer py-1 px-3"
          >
            Skip [ESC] →
          </button>
        </div>
      </motion.div>
    </div>
  );
}
