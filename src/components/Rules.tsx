import React, { useState } from 'react';
import { ChevronDown, Shield, FileText } from 'lucide-react';
import { HACKATHON_RULES, HackathonRule } from '../data/rules';

export default function Rules() {
  const [openIndexes, setOpenIndexes] = useState<number[]>([0, 2]); // First and third open by default

  const toggleRule = (idx: number) => {
    setOpenIndexes((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  const expandAll = () => {
    setOpenIndexes(HACKATHON_RULES.map((_, i) => i));
  };

  const collapseAll = () => {
    setOpenIndexes([]);
  };

  return (
    <section className="py-20 md:py-28 bg-[#FFFFFF] border-b border-[#F2F0EB]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 pb-6 border-b border-[#F2F0EB]">
          <div>
            <div className="flex items-center gap-2 text-sm font-extrabold tracking-wider text-[#FF6A00] uppercase mb-3">
              <Shield className="w-5 h-5 text-[#FF6A00]" />
              <span>COMPLIANCE & INTEGRITY</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#10243B] tracking-tight">
              GREAT IDEAS.<br />
              <span className="text-[#FF6A00]">FAIR PLAY.</span>
            </h2>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={expandAll}
              className="px-4 py-2 text-xs sm:text-sm font-extrabold text-[#10243B] hover:text-[#FF6A00] bg-[#FFF9F0] rounded-xl border border-[#F2F0EB] transition-colors cursor-pointer"
            >
              Expand All
            </button>
            <button
              onClick={collapseAll}
              className="px-4 py-2 text-xs sm:text-sm font-extrabold text-[#455064] hover:text-[#10243B] bg-white rounded-xl border border-[#F2F0EB] transition-colors cursor-pointer"
            >
              Collapse
            </button>
          </div>
        </div>

        {/* Premium Editorial Accordion */}
        <div className="space-y-4">
          {HACKATHON_RULES.map((rule: HackathonRule, idx: number) => {
            const isOpen = openIndexes.includes(idx);

            return (
              <div
                key={rule.number}
                className={`border rounded-2xl transition-all overflow-hidden ${
                  isOpen
                    ? 'bg-[#FFF9F0] border-[#FF6A00]/50 shadow-xs'
                    : 'bg-white border-[#F2F0EB] hover:border-slate-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleRule(idx)}
                  className="w-full px-6 sm:px-8 py-5 sm:py-6 flex items-center justify-between text-left gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4 sm:gap-6 min-w-0">
                    <span className="font-display font-black text-xl sm:text-2xl text-[#FF6A00] tabular-nums shrink-0">
                      {rule.number}
                    </span>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <h3 className="font-display font-extrabold text-lg sm:text-xl text-[#10243B]">
                          {rule.title}
                        </h3>
                        <span className="px-2.5 py-0.5 bg-white text-[#455064] text-xs font-bold rounded-md border border-[#F2F0EB]">
                          {rule.tag}
                        </span>
                      </div>
                      <p className="text-sm text-[#455064] truncate mt-1 font-medium">
                        {rule.summary}
                      </p>
                    </div>
                  </div>

                  <div
                    className={`w-9 h-9 rounded-full bg-white border border-[#F2F0EB] flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#FF6A00] text-white border-[#FF6A00]' : 'text-[#10243B]'
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-8 pb-6 sm:pb-7 pt-2 text-sm sm:text-base text-[#455064] leading-relaxed border-t border-[#F2F0EB]/60">
                    <p className="mb-2 font-bold text-[#10243B]">
                      {rule.summary}
                    </p>
                    <p className="text-[#455064] leading-relaxed font-medium">
                      {rule.details}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Note at bottom */}
        <div className="mt-8 p-5 bg-[#FFF9F0] border border-[#F2F0EB] rounded-2xl flex items-center justify-between text-xs sm:text-sm text-[#455064]">
          <span className="flex items-center gap-2 font-medium">
            <FileText className="w-4 h-4 text-[#FF6A00]" />
            <span>Official Rulebook of HackIgnite 2026 · Jain College of Engineering and Technology</span>
          </span>
          <span className="font-extrabold text-[#10243B]">All 10 Rules Active</span>
        </div>

      </div>
    </section>
  );
}
