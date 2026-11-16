import React from 'react';

export default function Logo({
  variant = 'dark', // 'light' (white text) | 'dark' (deep blue text)
  className = 'h-8',
  showText = true,
  animated = false, // for welcome screen draw
}) {
  const isLight = variant === 'light' || variant === 'white';
  const primaryTextColor = isLight ? '#FFFFFF' : '#0B3C5D';
  const natureColor = '#8CC63F';

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* Precision Vector Mark: Green Leaf + Blue Water Drop */}
      <svg
        viewBox="0 0 52 52"
        className="h-full w-auto aspect-square flex-shrink-0"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Leaf Outline / Fill */}
        <path
          id="logo-leaf"
          d="M8 42 C 6 26, 16 10, 38 6 C 46 5, 48 12, 42 26 C 36 41, 22 46, 8 42 Z"
          fill="#8CC63F"
          stroke="#8CC63F"
          strokeWidth="1.5"
        />
        {/* Leaf Vein */}
        <path
          id="logo-vein"
          d="M12 39 Q 28 28 40 12"
          stroke="#FFFFFF"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.85"
        />
        {/* Overlapping Water Drop at Lower Right */}
        <path
          id="logo-drop"
          d="M32 16 C 32 16, 44 28, 44 35 C 44 42, 38 46, 32 46 C 26 46, 20 42, 20 35 C 20 28, 32 16, 32 16 Z"
          fill="#29A9E0"
          stroke="#0B5C8E"
          strokeWidth="1"
        />
        {/* Water Drop Highlight */}
        <circle cx="28" cy="36" r="2.5" fill="#FFFFFF" opacity="0.6" />
      </svg>

      {/* Typography Set in Manrope */}
      {showText && (
        <div className="flex flex-col leading-none">
          <div className="flex items-baseline font-display font-extrabold text-lg sm:text-xl tracking-tight">
            <span style={{ color: primaryTextColor }}>Nutro</span>
            <span style={{ color: '#29A9E0' }}>Lix</span>
            <span
              className="ml-1 text-sm sm:text-base font-bold uppercase tracking-wider"
              style={{ color: natureColor }}
            >
              Nature
            </span>
          </div>
          <span
            className={`text-[8.5px] uppercase tracking-[0.16em] font-medium mt-0.5 ${
              isLight ? 'text-slate-300' : 'text-slate-500'
            }`}
          >
            Pure Fruit Ingredients
          </span>
        </div>
      )}
    </div>
  );
}
