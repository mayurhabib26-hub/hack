import React, { useState } from 'react';
import { EVALUATION_SYSTEM, EvaluationCriterion } from '../data/evaluation';
import { Check, ShieldCheck, ChevronRight } from 'lucide-react';

export default function Evaluation() {
  const [selectedId, setSelectedId] = useState<string>('innovation');

  const selectedCriterion = EVALUATION_SYSTEM.find((c) => c.id === selectedId) || EVALUATION_SYSTEM[0];

  return (
    <section className="py-20 md:py-28 bg-[#FFF9F0] border-b border-[#F2F0EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-[#F2F0EB]">
          <div>
            <div className="flex items-center gap-2 text-sm font-extrabold tracking-wider text-[#FF6A00] uppercase mb-3">
              <span className="w-2 h-2 rounded-full bg-[#FF6A00]" />
              <span>TRANSPARENT RUBRIC</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#10243B] tracking-tight">
              100 POINTS.<br />
              <span className="text-[#FF6A00]">FOUR DIMENSIONS.</span>
            </h2>
          </div>
          
          {/* Large 100-Point Badge */}
          <div className="flex items-center gap-5 bg-white p-5 sm:p-6 rounded-2xl border border-[#F2F0EB] shadow-xs">
            <div className="flex flex-col">
              <span className="font-display font-black text-5xl sm:text-6xl text-[#10243B] leading-none tabular-nums">
                100
              </span>
              <span className="text-xs uppercase font-extrabold tracking-wider text-[#FF6A00] mt-1.5">
                TOTAL MAX POINTS
              </span>
            </div>
            <div className="h-12 w-px bg-[#F2F0EB]" />
            <p className="text-sm text-[#455064] max-w-[210px] leading-snug font-medium">
              Equally balanced across 4 key technical & presentation disciplines.
            </p>
          </div>
        </div>

        {/* 4 Dimension Columns / Interactive Scoring Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: 4 Dimension Tabs with Progress Bars (Span 6) */}
          <div className="lg:col-span-6 space-y-4">
            {EVALUATION_SYSTEM.map((item: EvaluationCriterion, idx: number) => {
              const isSelected = selectedId === item.id;
              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedId(item.id)}
                  className={`p-6 sm:p-7 rounded-2xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-white border-[#FF6A00] shadow-md ring-1 ring-[#FF6A00]'
                      : 'bg-white/70 border-[#F2F0EB] hover:bg-white hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-lg bg-[#FFF9F0] border border-[#F2F0EB] flex items-center justify-center text-sm font-bold font-display text-[#10243B]">
                        0{idx + 1}
                      </span>
                      <h3 className="font-display font-extrabold text-lg sm:text-xl text-[#10243B]">
                        {item.category}
                      </h3>
                    </div>
                    <span className="font-display font-black text-xl text-[#FF6A00] tabular-nums">
                      {item.points} PTS
                    </span>
                  </div>

                  <p className="text-sm text-[#455064] mb-3.5 font-medium">
                    {item.subtitle}
                  </p>

                  {/* Visual Progress Bar (25%) */}
                  <div className="w-full bg-[#F2F0EB] h-2.5 rounded-full overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-[#FF6A00] to-[#FFB000] h-full rounded-full transition-all duration-500"
                      style={{ width: '100%' }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT: Detailed Rubric Inspection Card for Selected Dimension (Span 6) */}
          <div className="lg:col-span-6 bg-white border border-[#F2F0EB] rounded-3xl p-8 sm:p-10 shadow-xs sticky top-28">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#F2F0EB]">
              <div>
                <span className="text-xs font-extrabold tracking-wider uppercase text-[#FF6A00]">
                  SCORING CRITERIA BREAKDOWN
                </span>
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#10243B] mt-1">
                  {selectedCriterion.category}
                </h3>
              </div>
              <div className="px-4 py-2 bg-[#FFF9F0] border border-[#F2F0EB] rounded-xl text-center">
                <span className="block font-display font-black text-2xl text-[#FF6A00] leading-none">
                  25
                </span>
                <span className="text-[10px] uppercase font-bold text-[#455064]">WEIGHTAGE</span>
              </div>
            </div>

            <p className="text-base text-[#455064] leading-relaxed mb-6 font-medium">
              {selectedCriterion.description}
            </p>

            <div className="space-y-3.5">
              <p className="text-xs font-extrabold uppercase tracking-wider text-[#10243B]">
                What the Jury will evaluate:
              </p>
              {selectedCriterion.rubricItems.map((item: string, rIdx: number) => (
                <div
                  key={rIdx}
                  className="p-3.5 bg-[#FFF9F0] border border-[#F2F0EB] rounded-xl flex items-start gap-3.5"
                >
                  <div className="w-5 h-5 rounded-full bg-white border border-[#FF6A00]/50 flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                    <Check className="w-3.5 h-3.5 text-[#FF6A00]" />
                  </div>
                  <span className="text-sm text-[#10243B] font-semibold leading-normal">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-[#F2F0EB] flex items-center justify-between text-xs sm:text-sm text-[#455064]">
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span className="font-semibold">Standardized Jury Calibration</span>
              </span>
              <span className="font-mono font-bold text-[#10243B]">Strict 100 pt limit</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
