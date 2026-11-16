import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Logo from '../assets/Logo';
import { IMAGES } from '../data/images';

export default function WelcomeSplash({ onComplete }) {
  const [show, setShow] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [showSubline, setShowSubline] = useState(false);
  const [progress, setProgress] = useState(0);
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

    // 6. Smooth Progress Bar (0 to 100% over ~2.3s)
    const startTime = Date.now();
    const totalDuration = 2300;

    const progressInterval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(100, Math.floor((elapsed / totalDuration) * 100));
      setProgress(pct);

      if (pct >= 100) {
        clearInterval(progressInterval);
        setTimeout(() => {
          triggerAnimatedOpen();
        }, 150);
      }
    }, 25);

    // 7. Typewriter effect: starts at 450ms, 40ms per char
    let charIdx = 0;
    let typeInterval = null;
    let sublineTimer = null;

    const startTypingTimeout = setTimeout(() => {
      typeInterval = setInterval(() => {
        if (charIdx < headline.length) {
          setTypedText(headline.slice(0, charIdx + 1));
          charIdx++;
        } else {
          clearInterval(typeInterval);
          sublineTimer = setTimeout(() => {
            setShowSubline(true);
          }, 150);
        }
      }, 40);
    }, 450);

    return () => {
      clearTimeout(safetyTimer);
      clearTimeout(startTypingTimeout);
      if (typeInterval) clearInterval(typeInterval);
      if (sublineTimer) clearTimeout(sublineTimer);
      clearInterval(progressInterval);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const triggerAnimatedOpen = () => {
    setIsOpening(true);
    if (onComplete) onComplete();
    setTimeout(() => {
      sessionStorage.setItem('nutrolix_splash_shown', 'true');
      setShow(false);
    }, 850);
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
      {/* 1. Cinematic Top Shutter Panel (Slides UP on open, NO vertical lines) */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: isOpening ? '-100%' : 0 }}
        transition={{ duration: 0.85, ease: [0.77, 0, 0.175, 1] }}
        className="absolute top-0 left-0 right-0 h-1/2 bg-[#06283D] z-10 overflow-hidden"
      >
        {/* Soft lime ambient orb on top corner */}
        <div
          className="absolute -top-32 -left-32 w-[420px] h-[420px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(140, 198, 63, 0.20) 0%, rgba(140, 198, 63, 0) 70%)',
            filter: 'blur(80px)',
          }}
        />
      </motion.div>

      {/* 2. Cinematic Bottom Shutter Panel (Slides DOWN on open, NO vertical lines) */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: isOpening ? '100%' : 0 }}
        transition={{ duration: 0.85, ease: [0.77, 0, 0.175, 1] }}
        className="absolute bottom-0 left-0 right-0 h-1/2 bg-[#06283D] z-10 overflow-hidden"
      >
        {/* Soft sky-blue ambient orb on bottom corner */}
        <div
          className="absolute -bottom-32 -right-32 w-[450px] h-[450px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(41, 169, 224, 0.25) 0%, rgba(41, 169, 224, 0) 70%)',
            filter: 'blur(80px)',
          }}
        />
      </motion.div>

      {/* 3. Center Foreground Content: Single Refined .glass Card */}
      <motion.div
        animate={{
          opacity: isOpening ? 0 : 1,
          scale: isOpening ? 1.08 : 1,
        }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="absolute inset-0 z-20 flex flex-col items-center justify-center p-4 pointer-events-auto"
      >
        <div className="relative flex flex-col items-center max-w-[560px] w-[90vw] sm:w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="glass w-full p-8 sm:p-11 flex flex-col items-center text-center !rounded-[24px] shadow-2xl border border-white/20"
          >
            {/* Logo Mark + Wordmark */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.55 }}
              className="mb-6 flex justify-center"
            >
              <Logo
                variant="light"
                className="h-14 sm:h-[70px]"
                showText={true}
              />
            </motion.div>

            {/* Headline Typewriter (Clean horizontal layout, stylish caret) */}
            <div className="min-h-[2.5rem] flex items-center justify-center">
              <h1 className="text-xl sm:text-2xl md:text-[1.75rem] font-display font-extrabold text-white tracking-tight">
                {typedText}
                <span className="inline-block w-2.5 h-1 ml-1 bg-[#8CC63F] rounded-full animate-pulse align-middle" />
              </h1>
            </div>

            {/* Subline */}
            <div className="min-h-[1.5rem] mt-3">
              <motion.p
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: showSubline ? 0.75 : 0, y: showSubline ? 0 : 6 }}
                transition={{ duration: 0.5 }}
                className="text-[12px] sm:text-[13px] font-sans text-white tracking-[0.08em] uppercase font-medium leading-relaxed"
              >
                {subline}
              </motion.p>
            </div>

            {/* Horizontal Progress Line & Status (100% Horizontal, Zero Vertical Line) */}
            <div className="w-full mt-7 pt-4 border-t border-white/10 space-y-2">
              <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  style={{ width: `${progress}%` }}
                  className="h-full bg-gradient-to-r from-[#29A9E0] to-[#8CC63F] transition-all duration-75 ease-out rounded-full shadow-[0_0_8px_rgba(140,198,63,0.6)]"
                />
              </div>

              <div className="flex justify-between items-center text-[10px] font-mono text-slate-300">
                <span>Standardized Fruit Powders</span>
                <span className="text-[#8CC63F] font-bold">{progress}%</span>
              </div>
            </div>
          </motion.div>

          {/* Skip Link below the card */}
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
