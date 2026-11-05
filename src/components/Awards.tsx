import React from 'react';
import { Trophy, Award, Sparkles, Star, Code, Layers } from 'lucide-react';

export default function Awards() {
  return (
    <section id="awards" className="py-20 md:py-28 bg-[#FFFFFF] border-b border-[#F2F0EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-sm font-extrabold tracking-wider text-[#FF6A00] uppercase mb-3">
            <Sparkles className="w-5 h-5 text-[#FF6A00]" />
            <span>HONOURS & RECOGNITION</span>
          </div>
          <h2 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl text-[#10243B] tracking-tight">
            FIVE PLACES<br />
            <span className="text-[#FF6A00]">TO CONQUER.</span>
          </h2>
          <p className="mt-4 font-display font-extrabold text-xl sm:text-2xl text-[#10243B] tracking-tight uppercase">
            YOUR IDEAS CAN CHANGE TOMORROW!
          </p>
          <div className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 bg-[#FFF9F0] border border-[#F2F0EB] rounded-full text-sm font-extrabold text-[#FF6A00] shadow-xs">
            <span>Cash Prize Pool & Certificates of Excellence for Top Performers</span>
          </div>
        </div>

        {/* Central 3-Level Podium Visual */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
            
            {/* 2ND PLACE — SILVER (Left, medium height) */}
            <div className="order-2 md:order-1 bg-[#FFF9F0] border border-[#F2F0EB] rounded-3xl p-6 sm:p-8 text-center flex flex-col items-center justify-between shadow-xs transition-transform hover:-translate-y-1">
              <div className="w-18 h-18 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center mb-4 text-slate-500 shadow-inner">
                <Trophy className="w-9 h-9 text-slate-500" />
              </div>
              <div>
                <span className="px-3.5 py-1.5 bg-slate-200/80 text-slate-800 text-xs font-extrabold uppercase tracking-wider rounded-full">
                  RUNNER-UP
                </span>
                <h3 className="font-display font-black text-3xl text-[#10243B] mt-2">
                  2ND PLACE
                </h3>
                <p className="text-sm font-extrabold text-slate-600 mt-0.5">
                  SILVER RECOGNITION
                </p>
                <p className="text-sm text-[#455064] mt-3 font-medium leading-relaxed">
                  Awarded for stellar architectural execution, team cohesion, and high-quality prototype delivery.
                </p>
              </div>
              <div className="w-full pt-4 mt-6 border-t border-[#F2F0EB] text-xs font-bold text-[#10243B]">
                Cash Prize + Trophy + Certificate
              </div>
            </div>

            {/* 1ST PLACE — GOLD (Center, elevated height & prominent styling) */}
            <div className="order-1 md:order-2 bg-gradient-to-b from-[#FFF9F0] via-white to-[#FFF9F0] border-2 border-[#FF6A00] rounded-3xl p-8 sm:p-12 text-center flex flex-col items-center justify-between shadow-xl relative overflow-hidden transform md:-translate-y-4">
              
              {/* Gold Ribbon Banner */}
              <div className="absolute top-0 left-0 right-0 py-2 bg-[#FF6A00] text-white text-xs font-black uppercase tracking-widest text-center shadow-xs">
                CHAMPION OF HACKIGNITE 2026
              </div>

              <div className="w-22 h-22 rounded-2xl bg-amber-100 border-2 border-amber-300 flex items-center justify-center mt-5 mb-4 text-[#FFB000] shadow-md">
                <Trophy className="w-12 h-12 text-amber-500" />
              </div>

              <div>
                <span className="px-4 py-1.5 bg-amber-100 text-amber-900 text-xs font-extrabold uppercase tracking-wider rounded-full">
                  1ST PLACE — GOLD
                </span>
                <h3 className="font-display font-black text-4xl sm:text-5xl text-[#10243B] mt-3">
                  GRAND WINNER
                </h3>
                <p className="text-sm font-extrabold text-[#FF6A00] mt-1 tracking-wider uppercase">
                  NATIONAL CHAMPION
                </p>
                <p className="text-sm sm:text-base text-[#455064] mt-3.5 leading-relaxed font-medium">
                  The highest distinction across all 4 evaluation dimensions: breakthrough novelty, flawless engineering, and stage delivery.
                </p>
              </div>

              <div className="w-full pt-5 mt-6 border-t border-[#F2F0EB] text-sm font-black text-[#FF6A00]">
                Grand Cash Prize + National Champion Trophy + Certificates
              </div>
            </div>

            {/* 3RD PLACE — BRONZE (Right, lower podium) */}
            <div className="order-3 md:order-3 bg-[#FFF9F0] border border-[#F2F0EB] rounded-3xl p-6 sm:p-8 text-center flex flex-col items-center justify-between shadow-xs transition-transform hover:-translate-y-1">
              <div className="w-18 h-18 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center mb-4 text-amber-800 shadow-inner">
                <Trophy className="w-9 h-9 text-amber-800" />
              </div>
              <div>
                <span className="px-3.5 py-1.5 bg-amber-200/80 text-amber-900 text-xs font-extrabold uppercase tracking-wider rounded-full">
                  2ND RUNNER-UP
                </span>
                <h3 className="font-display font-black text-3xl text-[#10243B] mt-2">
                  3RD PLACE
                </h3>
                <p className="text-sm font-extrabold text-amber-800 mt-0.5">
                  BRONZE RECOGNITION
                </p>
                <p className="text-sm text-[#455064] mt-3 font-medium leading-relaxed">
                  Honouring exceptional design thinking, domain viability, and resilient real-time features.
                </p>
              </div>
              <div className="w-full pt-4 mt-6 border-t border-[#F2F0EB] text-xs font-bold text-[#10243B]">
                Cash Prize + Trophy + Certificate
              </div>
            </div>

          </div>
        </div>

        {/* Two Separate Special Recognition Categories */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-xs font-extrabold text-[#FF6A00] uppercase tracking-wider">
              SPECIAL JURY COMMENDATIONS
            </span>
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#10243B] mt-1">
              CATEGORY SPECIAL RECOGNITION
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Special Category 1: BEST IMPLEMENTATION */}
            <div className="p-8 bg-[#FFF9F0] border border-[#F2F0EB] rounded-3xl flex items-start gap-5 hover:border-[#FF6A00]/40 transition-colors shadow-xs">
              <div className="w-16 h-16 rounded-2xl bg-white border border-[#F2F0EB] flex items-center justify-center text-[#10243B] shrink-0 shadow-xs">
                <Code className="w-8 h-8 text-[#FF6A00]" />
              </div>
              <div>
                <span className="px-3 py-1 bg-white text-[#FF6A00] text-xs font-extrabold uppercase tracking-wider rounded-md border border-[#F2F0EB]">
                  TECHNICAL EXCELLENCE
                </span>
                <h4 className="font-display font-extrabold text-2xl text-[#10243B] mt-2">
                  BEST IMPLEMENTATION
                </h4>
                <p className="text-sm text-[#455064] mt-2.5 leading-relaxed font-medium">
                  Awarded for the cleanest codebase, superior system architecture, sophisticated data modeling, and robust API workflows.
                </p>
                <p className="text-xs sm:text-sm font-bold text-[#10243B] mt-4">
                  Cash Award & Citation of Technical Merit
                </p>
              </div>
            </div>

            {/* Special Category 2: BEST PROJECT */}
            <div className="p-8 bg-[#FFF9F0] border border-[#F2F0EB] rounded-3xl flex items-start gap-5 hover:border-[#FF6A00]/40 transition-colors shadow-xs">
              <div className="w-16 h-16 rounded-2xl bg-white border border-[#F2F0EB] flex items-center justify-center text-[#10243B] shrink-0 shadow-xs">
                <Layers className="w-8 h-8 text-[#FFB000]" />
              </div>
              <div>
                <span className="px-3 py-1 bg-white text-[#FFB000] text-xs font-extrabold uppercase tracking-wider rounded-md border border-[#F2F0EB]">
                  INNOVATION & IMPACT
                </span>
                <h4 className="font-display font-extrabold text-2xl text-[#10243B] mt-2">
                  BEST PROJECT
                </h4>
                <p className="text-sm text-[#455064] mt-2.5 leading-relaxed font-medium">
                  Honouring the solution that exhibits the most compelling real-world usability, polished user experience, and practical community impact.
                </p>
                <p className="text-xs sm:text-sm font-bold text-[#10243B] mt-4">
                  Cash Award & Citation of Product Excellence
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
