import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { TRUST_METRICS } from '../data/siteContent';

function CounterItem({ item, index }) {
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true, margin: '-40px' });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, item.value, {
        duration: 1.8,
        ease: [0.22, 1, 0.36, 1],
        onUpdate: (latest) => {
          setDisplayValue(Math.floor(latest));
        }
      });
      return () => controls.stop();
    }
  }, [isInView, item.value]);

  return (
    <div
      ref={nodeRef}
      className={`py-4 px-3 sm:px-5 flex flex-col justify-between ${
        index !== TRUST_METRICS.length - 1 ? 'lg:border-r border-slate-200/80' : ''
      }`}
    >
      <div className="flex items-baseline font-display font-extrabold text-3xl sm:text-4xl text-[#0B3C5D] tracking-tight">
        <span>{displayValue}</span>
        <span className="text-[#8CC63F] ml-0.5">{item.suffix}</span>
      </div>
      <div className="text-xs font-bold text-[#0B3C5D] mt-2">
        {item.label}
      </div>
      <div className="text-[11.5px] text-slate-600 mt-0.5 leading-snug font-medium">
        {item.desc}
      </div>
    </div>
  );
}

export default function TrustStrip() {
  return (
    <section className="relative py-8 bg-[#F6F7F2] border-b border-slate-200 overflow-hidden">
      {/* Soft blurred background shapes */}
      <div
        className="absolute top-0 right-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(41, 169, 224, 0.18) 0%, rgba(41, 169, 224, 0) 70%)',
          filter: 'blur(50px)',
        }}
      />
      <div
        className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(140, 198, 63, 0.15) 0%, rgba(140, 198, 63, 0) 70%)',
          filter: 'blur(50px)',
        }}
      />

      <div className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-light p-3 sm:p-5 rounded-[16px] shadow-subtle border border-white/80">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-4">
            {TRUST_METRICS.map((item, index) => (
              <CounterItem key={item.label} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
