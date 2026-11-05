import React from 'react';
import { ArrowRight, Calendar, MapPin, Users, Clock, Sparkles } from 'lucide-react';
import { useCountdown } from '../hooks/useCountdown';
import { EVENT_DATA } from '../data/event';

interface HeroProps {
  onOpenRegistration: () => void;
}

export default function Hero({ onOpenRegistration }: HeroProps) {
  const countdown = useCountdown(EVENT_DATA.startDateISO, EVENT_DATA.registrationDeadlineISO);

  return (
    <section id="home" className="relative overflow-hidden pt-6 pb-16 md:pt-12 md:pb-24 border-b border-[#F2F0EB]">
      {/* Subtle ambient warm lighting & geometric grid backdrop */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#FF6A00]/10 blur-3xl" />
        <div className="absolute top-1/2 right-0 w-[32rem] h-[32rem] rounded-full bg-[#FFB000]/10 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Asymmetric Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Editorial Display Typography & CTAs (Span 7) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Small Editorial Label */}
            <div className="flex items-center gap-2 text-sm font-extrabold tracking-wider text-[#FF6A00] uppercase">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF6A00]" />
              <span>NATIONAL LEVEL HACKATHON / 2026</span>
              <span className="text-[#455064]">·</span>
              <span className="text-[#10243B] font-bold">JCET HUBBALLI</span>
            </div>

            {/* Oversized Display Typography */}
            <div className="space-y-1">
              <h1 className="font-display font-extrabold text-5xl sm:text-7xl lg:text-8xl tracking-tighter text-[#10243B] leading-[0.9]">
                HACK<br />
                <span className="text-[#FF6A00]">IGNITE.</span>
              </h1>
            </div>

            {/* Tagline */}
            <div className="pt-2">
              <p className="font-display font-extrabold text-lg sm:text-2xl text-[#10243B] tracking-tight uppercase">
                THINK. BUILD. INNOVATE. IMPACT.
              </p>
              <p className="mt-3 text-sm sm:text-lg text-[#455064] max-w-xl leading-relaxed font-medium">
                {EVENT_DATA.theme}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="pt-3 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenRegistration}
                className="px-9 py-4 bg-[#FF6A00] hover:bg-[#F4510B] text-white text-sm sm:text-base font-extrabold uppercase tracking-wider rounded-xl shadow-md hover:shadow-lg transition-all duration-150 transform hover:-translate-y-0.5 flex items-center gap-2.5 cursor-pointer"
              >
                <span>REGISTER YOUR TEAM</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#experience"
                className="px-8 py-4 border-2 border-[#10243B]/20 hover:border-[#10243B] bg-white/80 hover:bg-white text-[#10243B] text-sm sm:text-base font-bold uppercase tracking-wider rounded-xl transition-all cursor-pointer"
              >
                EXPLORE THE EVENT
              </a>
            </div>

            {/* Event Quick Specs Bar */}
            <div className="pt-8 border-t border-[#F2F0EB]">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div>
                  <div className="flex items-center gap-1.5 text-[#455064] mb-1 font-bold text-xs uppercase tracking-wider">
                    <Calendar className="w-4 h-4 text-[#FF6A00]" />
                    <span>DATES</span>
                  </div>
                  <p className="font-display font-extrabold text-base sm:text-lg text-[#10243B]">12–13 DEC 2026</p>
                </div>

                <div>
                  <div className="flex items-center gap-1.5 text-[#455064] mb-1 font-bold text-xs uppercase tracking-wider">
                    <MapPin className="w-4 h-4 text-[#FF6A00]" />
                    <span>VENUE</span>
                  </div>
                  <p className="font-display font-extrabold text-base sm:text-lg text-[#10243B] truncate" title="JCET, Hubballi">
                    JCET, Hubballi
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-1.5 text-[#455064] mb-1 font-bold text-xs uppercase tracking-wider">
                    <Users className="w-4 h-4 text-[#FF6A00]" />
                    <span>TEAM SIZE</span>
                  </div>
                  <p className="font-display font-extrabold text-base sm:text-lg text-[#10243B]">3–4 MEMBERS</p>
                </div>

                <div>
                  <div className="flex items-center gap-1.5 text-[#455064] mb-1 font-bold text-xs uppercase tracking-wider">
                    <Sparkles className="w-4 h-4 text-[#FF6A00]" />
                    <span>FEE</span>
                  </div>
                  <p className="font-display font-extrabold text-base sm:text-lg text-[#FF6A00]">₹1,700 / TEAM</p>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Brand Identity Artwork & Live Countdown (Span 5) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            
            {/* The Original Logo Composition with Geometric Rings & Orbital Curves */}
            <div className="relative w-72 h-72 sm:w-88 sm:h-88 md:w-96 md:h-96 flex items-center justify-center">
              
              {/* Outer geometric ring 1 */}
              <div className="absolute inset-0 rounded-full border border-dashed border-[#FF6A00]/30 animate-orbit" />
              
              {/* Outer geometric ring 2 */}
              <div className="absolute inset-4 rounded-full border border-[#10243B]/10" />

              {/* Decorative accent dots and orbital nodes */}
              <div className="absolute top-2 right-12 w-3 h-3 rounded-full bg-[#FF6A00] shadow-xs" />
              <div className="absolute bottom-6 left-10 w-2 h-2 rounded-full bg-[#FFB000]" />
              <div className="absolute top-1/2 -left-3 w-2.5 h-2.5 rounded-full bg-[#F4510B]" />
              
              {/* Soft warm glowing backdrop */}
              <div className="absolute inset-8 rounded-full bg-gradient-to-tr from-[#FF6A00]/15 via-white/80 to-[#FFB000]/20 blur-xl" />

              {/* Central Official Logo Asset */}
              <div className="relative z-10 w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 bg-white rounded-full p-3 shadow-xl border-4 border-white overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
                <img
                  src="/assets/aistudio/logo_9820e70d.png"
                  alt="HackIgnite 2026 Official Logo"
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Floating decorative badge */}
              <div className="absolute -bottom-2 sm:bottom-0 right-2 z-20 bg-[#10243B] text-white px-4 py-2 rounded-full border border-white shadow-lg flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#FFB000]" />
                <span className="text-xs font-bold tracking-wider uppercase">24-HOUR SPRINT</span>
              </div>
            </div>

            {/* Live IST Countdown Card */}
            <div className="w-full max-w-md mt-8 bg-white border border-[#F2F0EB] rounded-2xl p-5 sm:p-6 shadow-sm">
              <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-[#F2F0EB]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-extrabold text-[#10243B] tracking-wider uppercase">
                    COUNTDOWN TO HACKATHON
                  </span>
                </div>
                <span className="text-xs text-[#455064] font-semibold">
                  {countdown.isRegistrationClosed ? (
                    <span className="text-red-600 font-bold">Registration Closed</span>
                  ) : (
                    <span>Deadline: 10 Dec, 11:00 AM IST</span>
                  )}
                </span>
              </div>

              {/* 4 Digit Boxes */}
              <div className="grid grid-cols-4 gap-2.5 sm:gap-3 text-center">
                <div className="p-3 sm:p-4 bg-[#FFF9F0] rounded-xl border border-[#F2F0EB]">
                  <span className="block font-display font-extrabold text-3xl sm:text-4xl text-[#10243B] tabular-nums">
                    {String(countdown.days).padStart(2, '0')}
                  </span>
                  <span className="text-xs uppercase font-extrabold text-[#455064] tracking-wider mt-1 block">
                    DAYS
                  </span>
                </div>

                <div className="p-3 sm:p-4 bg-[#FFF9F0] rounded-xl border border-[#F2F0EB]">
                  <span className="block font-display font-extrabold text-3xl sm:text-4xl text-[#10243B] tabular-nums">
                    {String(countdown.hours).padStart(2, '0')}
                  </span>
                  <span className="text-xs uppercase font-extrabold text-[#455064] tracking-wider mt-1 block">
                    HOURS
                  </span>
                </div>

                <div className="p-3 sm:p-4 bg-[#FFF9F0] rounded-xl border border-[#F2F0EB]">
                  <span className="block font-display font-extrabold text-3xl sm:text-4xl text-[#10243B] tabular-nums">
                    {String(countdown.minutes).padStart(2, '0')}
                  </span>
                  <span className="text-xs uppercase font-extrabold text-[#455064] tracking-wider mt-1 block">
                    MINS
                  </span>
                </div>

                <div className="p-3 sm:p-4 bg-[#FFF9F0] rounded-xl border border-[#F2F0EB]">
                  <span className="block font-display font-extrabold text-3xl sm:text-4xl text-[#FF6A00] tabular-nums">
                    {String(countdown.seconds).padStart(2, '0')}
                  </span>
                  <span className="text-xs uppercase font-extrabold text-[#455064] tracking-wider mt-1 block">
                    SECS
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
