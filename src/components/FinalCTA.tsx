import React from 'react';
import { ArrowRight, Sparkles, Clock, Users } from 'lucide-react';

interface FinalCTAProps {
  onOpenRegistration: () => void;
}

export default function FinalCTA({ onOpenRegistration }: FinalCTAProps) {
  return (
    <section className="relative bg-[#10243B] text-white py-24 md:py-32 overflow-hidden">
      {/* Decorative Brand Geometry */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute -top-32 -right-32 w-[34rem] h-[34rem] rounded-full border-2 border-[#FF6A00]" />
        <div className="absolute top-1/2 -left-24 w-96 h-96 rounded-full border border-dashed border-[#FFB000]" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-[#FF6A00]/10 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Subtle Editorial Kicker */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 text-xs sm:text-sm font-extrabold tracking-wider text-[#FFB000] uppercase mb-8">
          <Sparkles className="w-4 h-4" />
          <span>NATIONAL INNOVATION CHALLENGE 2026</span>
        </div>

        {/* Large Display Headline */}
        <h2 className="font-display font-extrabold text-5xl sm:text-7xl lg:text-8xl tracking-tighter text-white max-w-4xl mx-auto leading-[0.93]">
          DON&apos;T JUST IMAGINE<br />
          THE FUTURE.<br />
          <span className="text-[#FF6A00]">BUILD IT.</span>
        </h2>

        {/* Supporting Line */}
        <p className="mt-6 font-display font-extrabold text-xl sm:text-3xl text-white tracking-tight uppercase">
          24 HOURS. ONE TEAM. INFINITE POSSIBILITIES.
        </p>

        <p className="mt-4 text-base sm:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed font-medium">
          Assemble your squad of 3 to 4 developers and designers. Tackle unannounced live problem statements and compete for national acclaim.
        </p>

        {/* Primary Action Button */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5">
          <button
            onClick={onOpenRegistration}
            className="w-full sm:w-auto px-12 py-5 bg-[#FF6A00] hover:bg-[#F4510B] text-white text-sm sm:text-base font-black uppercase tracking-widest rounded-xl shadow-xl hover:shadow-2xl transition-all duration-200 transform hover:-translate-y-1 flex items-center justify-center gap-3 cursor-pointer"
          >
            <span>REGISTER NOW</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <a
            href="#schedule"
            className="w-full sm:w-auto px-10 py-5 bg-white/10 hover:bg-white/20 border-2 border-white/20 text-white text-sm sm:text-base font-extrabold uppercase tracking-wider rounded-xl transition-colors cursor-pointer"
          >
            VIEW SCHEDULE
          </a>
        </div>

        {/* Micro Guarantee bar */}
        <div className="mt-14 pt-8 border-t border-white/15 flex flex-wrap items-center justify-center gap-6 text-sm text-white/70 font-medium">
          <span className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#FFB000]" />
            <span>Registration Freeze: 10 Dec 2026, 11:00 AM IST</span>
          </span>
          <span>·</span>
          <span className="flex items-center gap-2">
            <Users className="w-4 h-4 text-[#FF6A00]" />
            <span>₹1,700 per team (3–4 Members)</span>
          </span>
          <span>·</span>
          <span>JCET Campus, Hubballi</span>
        </div>

      </div>
    </section>
  );
}
