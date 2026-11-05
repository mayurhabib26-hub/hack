import React from 'react';
import { EVENT_DATA } from '../data/event';
import { Handshake, PhoneCall } from 'lucide-react';

export default function Sponsors() {
  const sponsors = EVENT_DATA.sponsors;

  return (
    <section className="py-14 bg-white border-b border-[#F2F0EB] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#FF6A00]">
              ECOSYSTEM & PLATFORM PARTNERS
            </span>
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#10243B] tracking-tight">
              POWERED BY DEVELOPER COMMUNITIES
            </h3>
          </div>
          <div className="flex items-center gap-2 text-sm text-[#455064] font-medium">
            <Handshake className="w-5 h-5 text-[#FF6A00]" />
            <span>Sponsorship queries:</span>
            <a
              href="tel:7022951232"
              className="font-extrabold text-[#10243B] hover:text-[#FF6A00] flex items-center gap-1.5 underline"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Aditya R H (7022951232)</span>
            </a>
          </div>
        </div>
      </div>

      {/* Infinite Logo Carousel */}
      <div className="relative w-full overflow-hidden">
        {/* Soft edge gradient fades */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex items-center py-2">
          {sponsors.concat(sponsors).map((s, idx) => (
            <div
              key={`${s.name}-${idx}`}
              className="mx-4 sm:mx-6 px-7 py-5 rounded-2xl bg-[#FFF9F0] border border-[#F2F0EB] hover:border-[#FF6A00]/40 transition-colors flex items-center gap-4 shrink-0 group"
            >
              <div className="w-11 h-11 rounded-xl bg-white border border-[#F2F0EB] flex items-center justify-center font-display font-black text-sm text-[#10243B] group-hover:text-[#FF6A00] transition-colors">
                {s.logoText.slice(0, 2)}
              </div>
              <div className="text-left">
                <p className="font-display font-extrabold text-base sm:text-lg text-[#10243B] tracking-tight whitespace-nowrap">
                  {s.name}
                </p>
                <div className="flex items-center gap-2 text-xs text-[#455064] mt-0.5">
                  <span className="font-bold text-[#FF6A00]">{s.tier}</span>
                  <span>·</span>
                  <span className="font-medium">{s.tagline}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
