import React, { useState } from 'react';
import { Zap, Flag, Award, ChevronLeft, ChevronRight, Clock, CheckCircle2 } from 'lucide-react';
import { TIMELINE_STEPS, TimelineActivity } from '../data/timeline';

export default function Timeline() {
  const [activeStepIndex, setActiveStepIndex] = useState(1); // default to Day 1 Sprint

  const currentStep = TIMELINE_STEPS[activeStepIndex];

  const handlePrev = () => {
    setActiveStepIndex((prev) => (prev > 0 ? prev - 1 : TIMELINE_STEPS.length - 1));
  };

  const handleNext = () => {
    setActiveStepIndex((prev) => (prev < TIMELINE_STEPS.length - 1 ? prev + 1 : 0));
  };

  return (
    <section id="schedule" className="py-20 md:py-28 bg-[#FFF9F0] border-b border-[#F2F0EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Step Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-[#F2F0EB]">
          <div>
            <div className="flex items-center gap-2 text-sm font-extrabold tracking-wider text-[#FF6A00] uppercase mb-3">
              <span className="w-2 h-2 rounded-full bg-[#FF6A00]" />
              <span>THE HORIZONTAL SCHEDULE</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-[#10243B] tracking-tight">
              THE 24-HOUR<br />
              <span className="text-[#FF6A00]">JOURNEY.</span>
            </h2>
          </div>

          {/* Step indicators & arrows */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 p-1.5 bg-white border border-[#F2F0EB] rounded-xl shadow-xs">
              {TIMELINE_STEPS.map((step, idx) => (
                <button
                  key={step.id}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`px-4 py-2 text-sm font-extrabold rounded-lg transition-all cursor-pointer ${
                    activeStepIndex === idx
                      ? 'bg-[#10243B] text-white shadow-xs'
                      : 'text-[#455064] hover:text-[#10243B]'
                  }`}
                >
                  {step.stepNumber}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-1.5">
              <button
                onClick={handlePrev}
                aria-label="Previous timeline phase"
                className="p-2.5 rounded-lg bg-white border border-[#F2F0EB] hover:bg-[#F2F0EB] text-[#10243B] transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next timeline phase"
                className="p-2.5 rounded-lg bg-white border border-[#F2F0EB] hover:bg-[#F2F0EB] text-[#10243B] transition-colors cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Phase Cards Selector */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {TIMELINE_STEPS.map((step, idx) => {
            const isActive = activeStepIndex === idx;
            return (
              <button
                key={step.id}
                onClick={() => setActiveStepIndex(idx)}
                className={`text-left p-6 rounded-2xl border transition-all cursor-pointer relative overflow-hidden ${
                  isActive
                    ? 'bg-white border-[#FF6A00] shadow-md ring-2 ring-[#FF6A00]/25'
                    : 'bg-white/70 border-[#F2F0EB] hover:bg-white hover:border-slate-300'
                }`}
              >
                {isActive && (
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#FF6A00]" />
                )}
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-extrabold tracking-wider uppercase ${isActive ? 'text-[#FF6A00]' : 'text-[#455064]'}`}>
                    {step.stepNumber}
                  </span>
                  <span className="text-xs font-mono font-bold text-[#455064]">
                    {idx === 0 ? 'Kickoff' : idx === 1 ? 'Sprint' : 'Finale'}
                  </span>
                </div>
                <h3 className="font-display font-extrabold text-xl text-[#10243B]">
                  {step.phaseTitle}
                </h3>
                <p className="text-xs sm:text-sm text-[#FF6A00] font-bold mt-1">
                  {step.dateRange}
                </p>
              </button>
            );
          })}
        </div>

        {/* Active Phase Detailed Horizontal Activities Track */}
        <div className="bg-white border border-[#F2F0EB] rounded-3xl p-6 sm:p-10 shadow-xs relative overflow-hidden">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-[#F2F0EB]">
            <div>
              <span className="text-xs font-extrabold text-[#FF6A00] uppercase tracking-wider">
                {currentStep.stepNumber} DETAILS
              </span>
              <h3 className="font-display font-extrabold text-2xl sm:text-4xl text-[#10243B] mt-0.5">
                {currentStep.phaseTitle}
              </h3>
            </div>
            <div className="text-sm sm:text-base font-bold text-[#10243B] bg-[#FFF9F0] px-5 py-2.5 rounded-xl border border-[#F2F0EB]">
              {currentStep.dateRange}
            </div>
          </div>

          {/* Activities Horizontal Track */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {currentStep.activities.map((act: TimelineActivity, actIdx: number) => {
              const isCheckpoint = act.type === 'checkpoint';
              const isMilestone = act.type === 'milestone';
              const isFinale = act.type === 'finale';

              return (
                <div
                  key={actIdx}
                  className={`p-6 sm:p-7 rounded-2xl border transition-all flex flex-col justify-between ${
                    isCheckpoint
                      ? 'bg-amber-50/90 border-amber-300 ring-1 ring-amber-300'
                      : isFinale
                      ? 'bg-[#10243B] text-white border-[#10243B]'
                      : isMilestone
                      ? 'bg-[#FFF9F0] border-[#FF6A00]/40 shadow-xs'
                      : 'bg-[#FFF9F0]/60 border-[#F2F0EB]'
                  }`}
                >
                  <div>
                    {/* Activity Time & Indicator */}
                    <div className="flex items-center justify-between mb-4">
                      {act.time ? (
                        <div className={`flex items-center gap-1.5 text-xs sm:text-sm font-mono font-extrabold ${isFinale ? 'text-[#FFB000]' : 'text-[#FF6A00]'}`}>
                          <Clock className="w-4 h-4" />
                          <span>{act.time}</span>
                        </div>
                      ) : (
                        <span className={`text-xs font-bold uppercase tracking-wider ${isFinale ? 'text-white/70' : 'text-[#455064]'}`}>
                          Phase Activity
                        </span>
                      )}

                      {/* Special Indicators */}
                      {isCheckpoint && (
                        <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FF6A00] text-white text-xs font-extrabold uppercase tracking-wider shadow-xs">
                          <Zap className="w-3.5 h-3.5 text-white fill-white" />
                          <span>CHECKPOINT</span>
                        </span>
                      )}

                      {isFinale && (
                        <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFB000] text-[#10243B] text-xs font-extrabold uppercase tracking-wider shadow-xs">
                          <Award className="w-3.5 h-3.5" />
                          <span>FINALE</span>
                        </span>
                      )}

                      {isMilestone && !isCheckpoint && (
                        <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#10243B] text-white text-xs font-extrabold uppercase tracking-wider">
                          <Flag className="w-3.5 h-3.5" />
                          <span>MILESTONE</span>
                        </span>
                      )}
                    </div>

                    <h4 className={`font-display font-extrabold text-lg sm:text-xl mb-2.5 ${isFinale ? 'text-white' : 'text-[#10243B]'}`}>
                      {act.title}
                    </h4>

                    <p className={`text-sm leading-relaxed font-medium ${isFinale ? 'text-white/85' : 'text-[#455064]'}`}>
                      {act.description}
                    </p>
                  </div>

                  <div className={`pt-4 mt-5 border-t text-xs flex items-center justify-between ${isFinale ? 'border-white/10 text-white/60' : 'border-[#F2F0EB] text-[#455064]'}`}>
                    <span className="font-semibold">Phase 0{activeStepIndex + 1}</span>
                    <span className="font-mono font-bold">Slot {actIdx + 1} of {currentStep.activities.length}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Timeline Summary Bar */}
          <div className="mt-8 pt-6 border-t border-[#F2F0EB] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-sm text-[#455064]">
            <p className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF6A00]" />
              <span className="font-medium">{currentStep.summary}</span>
            </p>
            <span className="font-bold text-[#10243B]">
              Venue: Jain College of Engineering & Tech, Hubballi
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
