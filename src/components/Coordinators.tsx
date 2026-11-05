import React from 'react';
import { Phone, Users, ShieldCheck, HelpCircle } from 'lucide-react';
import { CONTACT_DIRECTORY, ContactCategory, CoordinatorContact } from '../data/contacts';

export default function Coordinators() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-[#FFFFFF] border-b border-[#F2F0EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-[#F2F0EB]">
          <div>
            <div className="flex items-center gap-2 text-sm font-extrabold tracking-wider text-[#FF6A00] uppercase mb-3">
              <Users className="w-5 h-5 text-[#FF6A00]" />
              <span>ORGANIZING COMMITTEE</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#10243B] tracking-tight">
              THE PEOPLE BEHIND<br />
              <span className="text-[#FF6A00]">THE EXPERIENCE.</span>
            </h2>
          </div>
          <p className="max-w-md text-base sm:text-lg text-[#455064] font-medium leading-relaxed">
            Have inquiries regarding accommodation, travel connections, sponsorship, or team eligibility? Reach out directly to our designated committee leads.
          </p>
        </div>

        {/* Directory Grid of Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CONTACT_DIRECTORY.map((cat: ContactCategory, idx: number) => (
            <div
              key={cat.category}
              className="bg-[#FFF9F0] border border-[#F2F0EB] rounded-2xl p-7 flex flex-col justify-between hover:border-[#FF6A00]/40 transition-colors shadow-2xs"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between pb-3.5 mb-5 border-b border-[#F2F0EB]">
                  <span className="font-display font-extrabold text-xs sm:text-sm uppercase tracking-wider text-[#10243B]">
                    {cat.category}
                  </span>
                  <span className="text-xs font-extrabold uppercase tracking-wider text-[#FF6A00] bg-white px-2.5 py-1 rounded-md border border-[#F2F0EB]">
                    {cat.badge}
                  </span>
                </div>

                {/* Contacts List */}
                <div className="space-y-5">
                  {cat.contacts.map((contact: CoordinatorContact, cIdx: number) => (
                    <div key={cIdx} className="space-y-1.5">
                      <div className="flex items-center justify-between gap-2.5">
                        <span className="font-display font-extrabold text-base sm:text-lg text-[#10243B]">
                          {contact.name}
                        </span>
                        {contact.phone && (
                          <a
                            href={`tel:${contact.phone.replace(/\s+/g, '')}`}
                            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white hover:bg-[#FF6A00] text-[#10243B] hover:text-white border border-[#F2F0EB] hover:border-[#FF6A00] text-sm font-mono font-extrabold transition-colors cursor-pointer shrink-0 shadow-2xs"
                            title={`Call ${contact.name}`}
                          >
                            <Phone className="w-3.5 h-3.5 text-[#FF6A00] hover:text-white" />
                            <span>{contact.phone}</span>
                          </a>
                        )}
                      </div>

                      {contact.title && (
                        <p className="text-xs sm:text-sm font-bold text-[#FF6A00]">
                          {contact.title}
                        </p>
                      )}

                      {contact.roleDescription && (
                        <p className="text-xs sm:text-sm text-[#455064] leading-relaxed font-medium">
                          {contact.roleDescription}
                        </p>
                      )}

                      {cIdx !== cat.contacts.length - 1 && (
                        <div className="pt-3 border-b border-[#F2F0EB]/60" />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Category Footer */}
              <div className="pt-4 mt-5 border-t border-[#F2F0EB] text-xs font-mono font-medium text-[#455064]">
                <span>Category 0{idx + 1}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
