import React from 'react';
import { MapPin, Navigation, Compass, Building2, Train, Bus } from 'lucide-react';
import { EVENT_DATA } from '../data/event';

export default function Venue() {
  return (
    <section className="py-20 md:py-28 bg-[#FFF9F0] border-b border-[#F2F0EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-2 text-sm font-extrabold tracking-wider text-[#FF6A00] uppercase mb-4">
          <span className="w-2 h-2 rounded-full bg-[#FF6A00]" />
          <span>LOCATION & CAMPUS ACCESS</span>
        </div>

        {/* Asymmetric Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* LEFT: Venue Information & Navigation (Span 5) */}
          <div className="lg:col-span-5 bg-white border border-[#F2F0EB] p-8 sm:p-12 rounded-3xl flex flex-col justify-between shadow-xs">
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#FFF9F0] border border-[#F2F0EB] flex items-center justify-center text-[#FF6A00] mb-6 shadow-2xs">
                <MapPin className="w-7 h-7" />
              </div>

              <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-[#10243B] tracking-tight leading-tight">
                MEET US AT<br />
                <span className="text-[#FF6A00]">HACKIGNITE.</span>
              </h2>

              <div className="mt-8 pt-6 border-t border-[#F2F0EB] space-y-5">
                <div>
                  <span className="text-xs font-extrabold uppercase tracking-wider text-[#455064]">
                    HOST INSTITUTION
                  </span>
                  <p className="font-display font-extrabold text-xl text-[#10243B] mt-1">
                    {EVENT_DATA.venueName}
                  </p>
                </div>

                <div>
                  <span className="text-xs font-extrabold uppercase tracking-wider text-[#455064]">
                    CAMPUS ADDRESS
                  </span>
                  <p className="text-base text-[#455064] mt-1 font-medium leading-relaxed">
                    {EVENT_DATA.venueAddress}, {EVENT_DATA.venueCity} – {EVENT_DATA.pincode}, Karnataka, India.
                  </p>
                </div>

                {/* Transit quick info */}
                <div className="grid grid-cols-2 gap-3.5 pt-2">
                  <div className="p-4 bg-[#FFF9F0] rounded-2xl border border-[#F2F0EB]">
                    <div className="flex items-center gap-2 text-sm font-bold text-[#10243B]">
                      <Train className="w-4 h-4 text-[#FF6A00]" />
                      <span>Railway Station</span>
                    </div>
                    <p className="text-xs text-[#455064] mt-1.5 font-medium">~5.8 km from Hubballi Jn (UBL)</p>
                  </div>

                  <div className="p-4 bg-[#FFF9F0] rounded-2xl border border-[#F2F0EB]">
                    <div className="flex items-center gap-2 text-sm font-bold text-[#10243B]">
                      <Bus className="w-4 h-4 text-[#FF6A00]" />
                      <span>Bus Terminal</span>
                    </div>
                    <p className="text-xs text-[#455064] mt-1.5 font-medium">~4.5 km from CBT / Hosur</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-[#F2F0EB]">
              <a
                href={EVENT_DATA.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full py-4 px-7 bg-[#FF6A00] hover:bg-[#F4510B] text-white text-sm font-extrabold uppercase tracking-wider rounded-xl transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <Navigation className="w-4 h-4" />
                <span>GET DIRECTIONS ON GOOGLE MAPS</span>
              </a>
            </div>
          </div>

          {/* RIGHT: Map Visual / Interactive Embed (Span 7) */}
          <div className="lg:col-span-7 bg-white border border-[#F2F0EB] rounded-3xl overflow-hidden shadow-xs relative flex flex-col">
            
            {/* Top Bar for Map Frame */}
            <div className="px-6 py-4 bg-white border-b border-[#F2F0EB] flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-sm font-bold font-display text-[#10243B]">
                  Jain College of Engineering & Technology, Hubballi
                </span>
              </div>
              <span className="text-xs font-mono font-bold text-[#455064]">
                15.3857° N, 75.1275° E
              </span>
            </div>

            {/* Embedded Google Maps iFrame */}
            <div className="relative w-full h-[400px] sm:h-[460px] bg-[#F2F0EB]">
              <iframe
                title="Jain College of Engineering and Technology Location"
                src="https://maps.google.com/maps?q=Jain%20College%20of%20Engineering%20and%20Technology%2C%20Hebballi%20Road%2C%20Hubballi&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full filter saturate-105"
              />
            </div>

            {/* Bottom Campus Facility Strip */}
            <div className="p-4 sm:p-5 bg-[#FFF9F0] border-t border-[#F2F0EB] flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm text-[#455064]">
              <div className="flex items-center gap-2 font-medium">
                <Building2 className="w-4 h-4 text-[#FF6A00]" />
                <span>Air-conditioned Labs · High-Speed Wi-Fi · 24/7 Security</span>
              </div>
              <a
                href="tel:7483462669"
                className="font-bold text-[#10243B] hover:text-[#FF6A00] transition-colors"
              >
                Transit Helpdesk: Zeeshan (7483462669)
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
