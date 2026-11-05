import React from 'react';
import { Calendar, Clock, MapPin, Users, Globe, IndianRupee, AlertTriangle, ArrowUpRight } from 'lucide-react';
import { EVENT_DATA } from '../data/event';

interface EventDetailsProps {
  onOpenRegistration: () => void;
}

export default function EventDetails({ onOpenRegistration }: EventDetailsProps) {
  return (
    <section className="py-20 md:py-28 bg-[#FFF9F0] border-b border-[#F2F0EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-2 text-sm font-extrabold tracking-wider text-[#FF6A00] uppercase mb-4">
          <span className="w-2 h-2 rounded-full bg-[#FF6A00]" />
          <span>SPECIFICATIONS & ELIGIBILITY</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#10243B] tracking-tight">
            THE DETAILS<br />
            <span className="text-[#FF6A00]">THAT MATTER.</span>
          </h2>
          <p className="max-w-md text-base sm:text-lg text-[#455064] font-medium leading-relaxed">
            Clear parameters for registered squads. Review the non-refundable registration criteria, team roster limits, and event schedule.
          </p>
        </div>

        {/* Asymmetric Bento Composition */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Card 1: Large Featured Orange Block — REGISTRATION FEE & WINDOW (Span 7) */}
          <div className="md:col-span-7 bg-[#FF6A00] text-white p-8 sm:p-12 rounded-3xl relative overflow-hidden flex flex-col justify-between shadow-md">
            
            {/* Geometric watermark circle */}
            <div className="absolute -right-12 -bottom-12 w-64 h-64 rounded-full border-8 border-white/10 pointer-events-none" />
            <div className="absolute right-16 top-8 w-24 h-24 rounded-full bg-white/5 pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3.5 py-1.5 bg-white/20 text-white text-xs font-extrabold uppercase tracking-wider rounded-full backdrop-blur-xs">
                  FLAT TEAM PRICING
                </span>
                <span className="text-sm font-bold text-white/90">05 Nov – 10 Dec 2026</span>
              </div>

              <p className="text-sm font-bold tracking-wider uppercase text-white/90">
                REGISTRATION FEE
              </p>
              <div className="flex items-baseline gap-3 mt-1">
                <span className="font-display font-black text-6xl sm:text-7xl lg:text-8xl tracking-tight text-white">
                  ₹1,700
                </span>
                <span className="text-xl sm:text-2xl font-black text-white/90">PER TEAM</span>
              </div>
              <p className="text-sm sm:text-base text-white/95 mt-3 max-w-lg font-medium leading-relaxed">
                Covers your complete 24-hour hackathon journey: high-speed network, lab workstations, mentor evaluations, midnight refreshments, and certification.
              </p>
            </div>

            <div className="pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-white/20 mt-8">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-white/80">REGISTRATION WINDOW</p>
                <p className="text-base sm:text-lg font-extrabold font-display text-white">05 November – 10 December 2026</p>
              </div>

              <button
                onClick={onOpenRegistration}
                className="px-7 py-3.5 bg-white text-[#FF6A00] hover:bg-[#FFF9F0] text-sm font-extrabold uppercase tracking-wider rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm shrink-0"
              >
                <span>REGISTER TEAM</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* Card 2: DURATION & SPRINT (Span 5) */}
          <div className="md:col-span-5 bg-white border border-[#F2F0EB] p-8 sm:p-10 rounded-3xl flex flex-col justify-between shadow-xs">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#FFF9F0] border border-[#F2F0EB] flex items-center justify-center mb-6">
                <Clock className="w-6 h-6 text-[#FF6A00]" />
              </div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#455064]">
                SPRINT DURATION
              </span>
              <h3 className="font-display font-black text-4xl sm:text-5xl text-[#10243B] mt-1">
                24 HOURS
              </h3>
              <p className="text-sm sm:text-base text-[#455064] mt-2.5 leading-relaxed font-medium">
                From kickoff at 11:00 AM on Day 1 through dawn checkpoints to code freeze at 11:00 AM on Day 2.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-[#F2F0EB]">
              <span className="text-xs sm:text-sm font-extrabold text-[#FF6A00] uppercase tracking-wider">
                12–13 DECEMBER 2026
              </span>
            </div>
          </div>

          {/* Card 3: DOMAIN TRACKS (Span 4) */}
          <div className="md:col-span-4 bg-white border border-[#F2F0EB] p-6 sm:p-8 rounded-3xl shadow-xs">
            <div className="w-12 h-12 rounded-2xl bg-[#FFF9F0] border border-[#F2F0EB] flex items-center justify-center mb-4">
              <Globe className="w-6 h-6 text-[#10243B]" />
            </div>
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#455064]">
              DOMAIN
            </span>
            <h3 className="font-display font-extrabold text-2xl text-[#10243B] mt-1">
              Web & App Development
            </h3>
            <p className="text-sm text-[#455064] mt-2 leading-relaxed">
              Solutions must be built as responsive modern web platforms or cross-platform mobile apps.
            </p>
          </div>

          {/* Card 4: TEAM SIZE & SQUAD (Span 4) */}
          <div className="md:col-span-4 bg-white border border-[#F2F0EB] p-6 sm:p-8 rounded-3xl shadow-xs">
            <div className="w-12 h-12 rounded-2xl bg-[#FFF9F0] border border-[#F2F0EB] flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-[#FF6A00]" />
            </div>
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#455064]">
              SQUAD COMPOSITION
            </span>
            <h3 className="font-display font-extrabold text-2xl text-[#10243B] mt-1">
              3–4 Members
            </h3>
            <p className="text-sm text-[#455064] mt-2 leading-relaxed">
              Strictly 3 to 4 students per team. Designate one Team Lead for registration and judging slots.
            </p>
          </div>

          {/* Card 5: VENUE & HOST (Span 4) */}
          <div className="md:col-span-4 bg-[#10243B] text-white p-6 sm:p-8 rounded-3xl shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-[#FFB000]" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-white/60">
                VENUE
              </span>
              <h3 className="font-display font-extrabold text-xl text-white mt-1">
                Jain College of Engineering & Tech
              </h3>
              <p className="text-sm text-white/80 mt-1">
                Hebballi Road, Unkal, Hubballi – 580031
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-white/10">
              <a
                href={EVENT_DATA.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-[#FFB000] hover:underline flex items-center gap-1.5 font-bold"
              >
                <span>Open in Google Maps</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Critical Highlight Callout Banner (Full Width 12 cols) */}
          <div className="md:col-span-12 p-6 sm:p-8 bg-amber-50/90 border-2 border-amber-300 rounded-3xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 rounded-2xl bg-[#FF6A00] text-white flex items-center justify-center shrink-0 shadow-xs">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-extrabold uppercase tracking-wider text-[#10243B]">
                  IMPORTANT EVENT DIRECTIVE
                </p>
                <p className="text-base sm:text-lg font-bold text-amber-950 mt-0.5">
                  &ldquo;{EVENT_DATA.rulesHighlight}&rdquo;
                </p>
              </div>
            </div>

            <span className="px-4 py-2 bg-amber-200/80 text-amber-900 text-xs sm:text-sm font-extrabold uppercase rounded-xl shrink-0">
              Zero Pre-Built Code
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
