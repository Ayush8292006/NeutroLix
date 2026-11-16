import React, { useState } from 'react';

export default function Img({
  src,
  alt = 'NutroLix Nature Ingredient',
  fallbackText = 'NutroLix Nature',
  className = '',
  containerClassName = '',
  aspectRatio = 'aspect-[16/10]',
  loading = 'lazy',
  priority = false,
}) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      className={`relative overflow-hidden bg-[#DDE6DA] ${aspectRatio} ${containerClassName}`}
    >
      {!hasError ? (
        <img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : loading}
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-80'
          } ${className}`}
        />
      ) : (
        /* Fallback: Solid brand-color block with name so there's never a broken icon or hole */
        <div className="w-full h-full bg-[#0B3C5D] text-white flex flex-col items-center justify-center p-4 text-center select-none">
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#8CC63F] block mb-1">
            NutroLix Nature
          </span>
          <span className="font-display font-bold text-sm tracking-tight text-white">
            {fallbackText || alt}
          </span>
        </div>
      )}
    </div>
  );
}

