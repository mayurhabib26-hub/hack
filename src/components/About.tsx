import React from 'react';
import { EVENT_DATA, EVENT_STATS } from '../data/event';

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#FFF9F0] border-b border-[#F2F0EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Editorial Label */}
        <div className="flex items-center gap-2 text-sm font-extrabold tracking-wider text-[#FF6A00] uppercase mb-4">
          <span className="w-2 h-2 rounded-full bg-[#FF6A00]" />
          <span>ABOUT THE HACKATHON</span>
        </div>

        {/* Editorial Split Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Heading & Narrative (Span 7) */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl text-[#10243B] tracking-tight leading-[1.02]">
              WHERE IDEAS<br />
              <span className="text-[#FF6A00]">BECOME IMPACT.</span>
            </h2>

            <div className="space-y-4 text-lg sm:text-xl text-[#455064] leading-relaxed font-medium">
              <p>
                {EVENT_DATA.description.split('.')[0]}.
              </p>
              <p>
                {EVENT_DATA.description.split('.')[1]}.
              </p>
            </div>

            <div className="p-4 sm:p-5 bg-white border border-[#F2F0EB] rounded-2xl flex items-center gap-3.5 shadow-xs">
              <span className="px-3 py-1.5 bg-[#10243B] text-white text-xs font-bold uppercase tracking-wider rounded-lg shrink-0">
                VENUE FOCUS
              </span>
              <p className="text-sm sm:text-base text-[#10243B] font-semibold">
                Hosted at the modern innovation labs of <strong>Jain College of Engineering and Technology</strong>, Hubballi.
              </p>
            </div>
          </div>

          {/* RIGHT: Abstract Graphic Composition derived from HackIgnite logo (Span 5) */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="relative w-full max-w-sm aspect-square bg-white border border-[#F2F0EB] rounded-3xl p-8 shadow-xs overflow-hidden flex flex-col items-center justify-center">
              
              {/* Background geometric SVG rings & flame geometry */}
              <svg
                viewBox="0 0 300 300"
                className="w-full h-full text-[#FF6A00]"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Concentric rings */}
                <circle cx="150" cy="150" r="130" stroke="#F2F0EB" strokeWidth="2" />
                <circle cx="150" cy="150" r="100" stroke="#FF6A00" strokeWidth="1.5" strokeDasharray="4 6" opacity="0.4" />
                <circle cx="150" cy="150" r="70" stroke="#FFB000" strokeWidth="2" opacity="0.6" />
                
                {/* Orbit path with angle */}
                <ellipse cx="150" cy="150" rx="125" ry="45" transform="rotate(-30 150 150)" stroke="#FF6A00" strokeWidth="3" />
                
                {/* Stylized flame geometry */}
                <path
                  d="M150 60 C155 90 185 110 185 140 C185 170 160 190 150 200 C140 190 115 170 115 140 C115 115 135 90 150 60 Z"
                  fill="#FF6A00"
                  fillOpacity="0.12"
                />
                <path
                  d="M150 90 C154 110 170 125 170 145 C170 165 155 178 150 185 C145 178 130 165 130 145 C130 128 142 112 150 90 Z"
                  fill="#F4510B"
                  fillOpacity="0.25"
                />
                <circle cx="230" cy="100" r="4" fill="#FF6A00" />
                <circle cx="70" cy="200" r="5" fill="#FFB000" />
              </svg>

              {/* Central small logo icon */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <img
                  src="/assets/aistudio/logo_9820e70d.png"
                  alt="HackIgnite"
                  className="w-20 h-20 object-contain mb-3 drop-shadow-sm"
                  referrerPolicy="no-referrer"
                />
                <p className="font-display font-extrabold text-xs sm:text-sm uppercase tracking-wider text-[#10243B]">
                  24 HOURS · LIVE CHALLENGES
                </p>
                <p className="text-xs text-[#455064] mt-1 font-mono font-semibold">
                  12–13 DECEMBER 2026
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* 4 Statistics Strip with Oversized Numbers & Thin Separators */}
        <div className="mt-16 pt-12 border-t border-[#F2F0EB]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {EVENT_STATS.map((stat, idx) => (
              <div
                key={stat.label}
                className={`flex flex-col ${
                  idx !== 0 ? 'lg:border-l lg:border-[#F2F0EB] lg:pl-8' : ''
                }`}
              >
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="font-display font-black text-5xl sm:text-6xl lg:text-7xl text-[#10243B] tabular-nums tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-xs sm:text-sm font-extrabold text-[#FF6A00] tracking-wider uppercase">
                    {stat.unit}
                  </span>
                </div>
                <h3 className="font-display font-extrabold text-base sm:text-lg text-[#10243B] uppercase tracking-wide">
                  {stat.label}
                </h3>
                <p className="text-xs sm:text-sm text-[#455064] mt-1.5 leading-relaxed font-medium">
                  {stat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
