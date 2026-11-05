import React from 'react';

export default function Marquee() {
  const items = [
    'THINK',
    'BUILD',
    'INNOVATE',
    'IMPACT',
    'THINK',
    'BUILD',
    'INNOVATE',
    'IMPACT',
  ];

  return (
    <div className="relative w-full bg-[#FF6A00] overflow-hidden py-4 sm:py-5 border-y border-[#F4510B]">
      <div className="animate-marquee flex items-center">
        {items.map((word, i) => (
          <div key={`m1-${i}`} className="flex items-center shrink-0">
            <span className="font-display font-black text-white text-xl sm:text-2xl md:text-3xl tracking-widest px-8 sm:px-12 uppercase">
              {word}
            </span>
            <span className="text-white/70 text-lg select-none">✦</span>
          </div>
        ))}
        {items.map((word, i) => (
          <div key={`m2-${i}`} className="flex items-center shrink-0">
            <span className="font-display font-black text-white text-xl sm:text-2xl md:text-3xl tracking-widest px-8 sm:px-12 uppercase">
              {word}
            </span>
            <span className="text-white/70 text-lg select-none">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
