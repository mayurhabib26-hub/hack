import React from 'react';
import { Users2, Lightbulb, Code2, Trophy } from 'lucide-react';
import { PILLARS } from '../data/event';

export default function Pillars() {
  const icons = [
    <Users2 key="users" className="w-6 h-6 text-[#FF6A00]" />,
    <Lightbulb key="lightbulb" className="w-6 h-6 text-[#FFB000]" />,
    <Code2 key="code" className="w-6 h-6 text-[#10243B]" />,
    <Trophy key="trophy" className="w-6 h-6 text-[#F4510B]" />,
  ];

  return (
    <section id="experience" className="py-20 md:py-28 bg-[#FFFFFF] border-b border-[#F2F0EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-[#F2F0EB]">
          <div>
            <div className="flex items-center gap-2 text-sm font-extrabold tracking-wider text-[#FF6A00] uppercase mb-3">
              <span className="w-2 h-2 rounded-full bg-[#FF6A00]" />
              <span>THE CORE PHILOSOPHY</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#10243B] tracking-tight">
              FOUR PILLARS.<br />
              <span className="text-[#FF6A00]">ONE BIG EXPERIENCE.</span>
            </h2>
          </div>
          <p className="max-w-md text-base sm:text-lg text-[#455064] leading-relaxed font-medium">
            Every phase of HackIgnite is calibrated to push your engineering limits, sharpen creative instincts, and simulate high-tempo product development.
          </p>
        </div>

        {/* 4 Distinct Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS.map((pillar, idx) => (
            <div
              key={pillar.number}
              className="group relative p-8 bg-[#FFF9F0] hover:bg-white border border-[#F2F0EB] hover:border-[#FF6A00]/40 rounded-2xl transition-all duration-300 hover:shadow-lg flex flex-col justify-between"
            >
              {/* Top Bar: Large Number & Geometric Icon */}
              <div>
                <div className="flex items-start justify-between mb-8">
                  <span className="font-display font-black text-5xl text-[#10243B]/25 group-hover:text-[#FF6A00] transition-colors tabular-nums">
                    {pillar.number}
                  </span>
                  <div className="w-14 h-14 rounded-2xl bg-white group-hover:bg-[#FFF9F0] border border-[#F2F0EB] flex items-center justify-center shadow-xs transition-colors">
                    {icons[idx]}
                  </div>
                </div>

                <div className="mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#455064] bg-white/80 px-2 py-0.5 rounded border border-[#F2F0EB]">
                    {pillar.badge}
                  </span>
                </div>

                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#10243B] tracking-tight mb-2">
                  {pillar.title}
                </h3>

                <p className="font-bold text-base sm:text-lg text-[#FF6A00] mb-3">
                  {pillar.desc}
                </p>

                <p className="text-sm sm:text-base text-[#455064] leading-relaxed font-medium">
                  {pillar.detail}
                </p>
              </div>

              {/* Bottom Subtle Geometric Accent */}
              <div className="pt-6 mt-6 border-t border-[#F2F0EB] flex items-center justify-between text-xs font-semibold text-[#455064]">
                <span className="font-mono">Pillar {pillar.number}</span>
                <span className="text-[#FF6A00] font-bold">
                  Phase {idx + 1} →
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
