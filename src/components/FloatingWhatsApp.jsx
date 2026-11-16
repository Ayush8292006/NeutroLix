import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);
  const phoneNumber = "919820123456";
  const defaultMessage = encodeURIComponent("Hello NutroLix Nature, I would like to inquire about bulk Fruit Powders and request technical spec sheets.");

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center select-none">
      {/* Tooltip Card */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 mr-3 px-3 py-1.5 rounded-[8px] glass-dark text-white shadow-card text-xs font-sans border border-white/20">
          <span className="w-1.5 h-1.5 rounded-full bg-[#8CC63F]" />
          <span>Technical Export Sales</span>
        </div>
      )}

      {/* Button */}
      <a
        href={`https://wa.me/${phoneNumber}?text=${defaultMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="flex items-center justify-center w-12 h-12 rounded-full bg-[#25D366] text-white shadow-card hover:bg-[#20ba59] hover:scale-105 transition-all"
        aria-label="Contact NutroLix on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-white" />
      </a>
    </div>
  );
}
