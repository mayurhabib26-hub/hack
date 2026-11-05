import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, ShieldAlert, Users, QrCode, ArrowRight, Download, Sparkles, AlertCircle, Copy, Check } from 'lucide-react';
import confetti from 'canvas-confetti';
import { EVENT_DATA } from '../data/event';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface TeamMember {
  name: string;
  email: string;
  role: string;
  college?: string;
}

interface StoredRegistration {
  teamId: string;
  teamName: string;
  college: string;
  track: string;
  leadName: string;
  leadEmail: string;
  leadPhone: string;
  members: TeamMember[];
  utrNumber: string;
  registeredAt: string;
  amount: number;
}

export default function RegistrationModal({ isOpen, onClose }: RegistrationModalProps) {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [copiedUpi, setCopiedUpi] = useState(false);
  
  // Form fields
  const [teamName, setTeamName] = useState('');
  const [college, setCollege] = useState('');
  const [city, setCity] = useState('');
  const [track, setTrack] = useState('web-dev');
  
  // Lead
  const [leadName, setLeadName] = useState('');
  const [leadEmail, setLeadEmail] = useState('');
  const [leadPhone, setLeadPhone] = useState('');
  const [leadBranch, setLeadBranch] = useState('');

  // Members (Member 2 and 3 mandatory, Member 4 optional)
  const [member2Name, setMember2Name] = useState('');
  const [member2Email, setMember2Email] = useState('');
  const [member2Role, setMember2Role] = useState('Frontend Developer');

  const [member3Name, setMember3Name] = useState('');
  const [member3Email, setMember3Email] = useState('');
  const [member3Role, setMember3Role] = useState('Backend Engineer');

  const [hasMember4, setHasMember4] = useState(false);
  const [member4Name, setMember4Name] = useState('');
  const [member4Email, setMember4Email] = useState('');
  const [member4Role, setMember4Role] = useState('UI/UX Designer');

  // Payment
  const [utrNumber, setUtrNumber] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Generated pass
  const [registeredData, setRegisteredData] = useState<StoredRegistration | null>(null);

  // Check if existing registration in localStorage
  useEffect(() => {
    const saved = localStorage.getItem('hackignite_team_reg');
    if (saved) {
      try {
        setRegisteredData(JSON.parse(saved));
      } catch (e) {
        // ignore
      }
    }
  }, []);

  if (!isOpen) return null;

  const handleCopyUpi = () => {
    navigator.clipboard.writeText('jcet.hackignite2026@sbi');
    setCopiedUpi(true);
    setTimeout(() => setCopiedUpi(false), 2000);
  };

  const handleNextToStep2 = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    if (!teamName.trim() || !college.trim() || !city.trim()) {
      setErrorMsg('Please complete all team information fields.');
      return;
    }
    setStep(2);
  };

  const handleNextToStep3 = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    if (!leadName.trim() || !leadEmail.trim() || !leadPhone.trim() || !leadBranch.trim()) {
      setErrorMsg('Please provide complete details for Team Lead.');
      return;
    }
    if (!member2Name.trim() || !member2Email.trim() || !member3Name.trim() || !member3Email.trim()) {
      setErrorMsg('HackIgnite requires a minimum of 3 members per team. Please fill Member 2 and Member 3.');
      return;
    }
    if (hasMember4 && (!member4Name.trim() || !member4Email.trim())) {
      setErrorMsg('Please complete details for Member 4 or uncheck the 4th member option.');
      return;
    }
    setStep(3);
  };

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    if (!utrNumber.trim()) {
      setErrorMsg('Please enter your 12-digit UPI Reference / UTR Number.');
      return;
    }
    if (!termsAccepted) {
      setErrorMsg('You must agree to the HackIgnite non-refundable policy and rules.');
      return;
    }

    const members: TeamMember[] = [
      { name: member2Name, email: member2Email, role: member2Role },
      { name: member3Name, email: member3Email, role: member3Role }
    ];

    if (hasMember4 && member4Name.trim()) {
      members.push({ name: member4Name, email: member4Email, role: member4Role });
    }

    const randomId = 'HI26-' + Math.floor(1000 + Math.random() * 9000);
    const newReg: StoredRegistration = {
      teamId: randomId,
      teamName,
      college,
      track,
      leadName,
      leadEmail,
      leadPhone,
      members,
      utrNumber,
      registeredAt: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
      amount: EVENT_DATA.feeAmount
    };

    localStorage.setItem('hackignite_team_reg', JSON.stringify(newReg));
    setRegisteredData(newReg);
    setStep(4);

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#FF6A00', '#F4510B', '#FFB000', '#10243B']
      });
    } catch {
      // fallback
    }
  };

  const handleReset = () => {
    localStorage.removeItem('hackignite_team_reg');
    setRegisteredData(null);
    setStep(1);
    setTeamName('');
    setCollege('');
    setLeadName('');
    setLeadEmail('');
    setLeadPhone('');
    setUtrNumber('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#10243B]/60 backdrop-blur-xs">
      <div 
        className="relative w-full max-w-2xl bg-[#FFF9F0] border border-[#F2F0EB] shadow-2xl rounded-2xl overflow-hidden my-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 sm:px-8 py-5 bg-[#FFFFFF] border-b border-[#F2F0EB]">
          <div className="flex items-center gap-3.5">
            <img 
              src="/assets/aistudio/logo_9820e70d.png" 
              alt="HackIgnite" 
              className="w-11 h-11 object-contain"
            />
            <div>
              <h2 id="modal-title" className="text-lg sm:text-xl font-display font-black text-[#10243B] uppercase tracking-tight">
                Team Registration Portal
              </h2>
              <p className="text-xs sm:text-sm text-[#455064] font-medium">
                12–13 Dec 2026 · Jain College of Engineering and Technology, Hubballi
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close registration dialog"
            className="p-2.5 text-[#455064] hover:text-[#10243B] hover:bg-[#F2F0EB] rounded-xl transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Stepper progress (if not view mode) */}
        {!registeredData || step !== 4 ? (
          <div className="px-6 sm:px-8 py-3.5 bg-[#FFF9F0] border-b border-[#F2F0EB] flex items-center justify-between text-xs sm:text-sm font-bold text-[#455064]">
            <div className={`flex items-center gap-2 ${step >= 1 ? 'text-[#FF6A00] font-black' : ''}`}>
              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${step >= 1 ? 'bg-[#FF6A00] text-white' : 'bg-[#F2F0EB]'}`}>1</span>
              <span>Team & Track</span>
            </div>
            <div className="h-px w-8 bg-[#F2F0EB]" />
            <div className={`flex items-center gap-2 ${step >= 2 ? 'text-[#FF6A00] font-black' : ''}`}>
              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${step >= 2 ? 'bg-[#FF6A00] text-white' : 'bg-[#F2F0EB]'}`}>2</span>
              <span>Members (3–4)</span>
            </div>
            <div className="h-px w-8 bg-[#F2F0EB]" />
            <div className={`flex items-center gap-2 ${step >= 3 ? 'text-[#FF6A00] font-black' : ''}`}>
              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${step >= 3 ? 'bg-[#FF6A00] text-white' : 'bg-[#F2F0EB]'}`}>3</span>
              <span>Fee ₹1,700 & Payment</span>
            </div>
          </div>
        ) : null}

        {/* Modal Body */}
        <div className="p-6 max-h-[75vh] overflow-y-auto">
          {errorMsg && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-lg flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* STEP 1: Team & Track */}
          {step === 1 && (!registeredData || registeredData.teamId === '') && (
            <form onSubmit={handleNextToStep2} className="space-y-5">
              <div>
                <label className="block text-sm font-extrabold text-[#10243B] uppercase mb-1.5">
                  Team Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. ByteCraft Hubballi"
                  value={teamName}
                  onChange={(e) => setTeamName(e.target.value)}
                  className="w-full px-4 py-3 text-base bg-white border border-[#F2F0EB] rounded-xl text-[#10243B] font-medium focus:outline-hidden focus:border-[#FF6A00]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-extrabold text-[#10243B] uppercase mb-1.5">
                    College / Institute *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. JCET Hubballi / BVB / KLE"
                    value={college}
                    onChange={(e) => setCollege(e.target.value)}
                    className="w-full px-4 py-3 text-base bg-white border border-[#F2F0EB] rounded-xl text-[#10243B] font-medium focus:outline-hidden focus:border-[#FF6A00]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-extrabold text-[#10243B] uppercase mb-1.5">
                    City / State *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Hubballi, Karnataka"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full px-4 py-3 text-base bg-white border border-[#F2F0EB] rounded-xl text-[#10243B] font-medium focus:outline-hidden focus:border-[#FF6A00]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-extrabold text-[#10243B] uppercase mb-2">
                  Primary Domain Preference *
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {EVENT_DATA.tracks.map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setTrack(t.id)}
                      className={`p-4 text-left border rounded-xl transition-all cursor-pointer ${
                        track === t.id
                          ? 'bg-white border-[#FF6A00] shadow-sm ring-2 ring-[#FF6A00]'
                          : 'bg-white/70 border-[#F2F0EB] hover:border-slate-300'
                      }`}
                    >
                      <p className="text-sm font-extrabold text-[#10243B]">{t.title}</p>
                      <p className="text-xs text-[#455064] line-clamp-2 mt-1 font-medium">{t.shortDesc}</p>
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-amber-50/80 border border-amber-200 rounded-xl text-xs sm:text-sm text-amber-900 flex items-start gap-3">
                <ShieldAlert className="w-5 h-5 text-[#FF6A00] shrink-0 mt-0.5" />
                <p>
                  <strong className="font-bold">Note on Problem Statements:</strong> Specific challenge statements are announced on the spot at 09:30 AM on 12 December. Selecting a track indicates your team&apos;s architectural tooling focus.
                </p>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  type="submit"
                  className="px-7 py-3 bg-[#FF6A00] hover:bg-[#F4510B] text-white text-sm font-extrabold uppercase tracking-wider rounded-xl transition-colors flex items-center gap-2 cursor-pointer shadow-sm"
                >
                  <span>Continue to Team Roster</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}

          {/* STEP 2: Members */}
          {step === 2 && (
            <form onSubmit={handleNextToStep3} className="space-y-5">
              {/* Lead */}
              <div className="p-5 bg-white border border-[#F2F0EB] rounded-2xl space-y-3.5 shadow-2xs">
                <div className="flex items-center justify-between border-b border-[#F2F0EB] pb-2.5">
                  <div className="flex items-center gap-2.5 text-sm font-extrabold text-[#10243B] uppercase">
                    <span className="w-6 h-6 rounded-full bg-[#10243B] text-white flex items-center justify-center text-xs font-bold">L</span>
                    <span>Team Lead (Primary Contact)</span>
                  </div>
                  <span className="text-xs text-[#FF6A00] font-bold">Mandatory</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-bold text-[#455064] mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Lead Full Name"
                      value={leadName}
                      onChange={(e) => setLeadName(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-[#FFF9F0]/40 border border-[#F2F0EB] rounded-xl text-[#10243B] font-medium focus:border-[#FF6A00]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#455064] mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="lead@college.edu"
                      value={leadEmail}
                      onChange={(e) => setLeadEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-[#FFF9F0]/40 border border-[#F2F0EB] rounded-xl text-[#10243B] font-medium focus:border-[#FF6A00]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#455064] mb-1">WhatsApp / Phone *</label>
                    <input
                      type="tel"
                      required
                      placeholder="10-digit mobile"
                      value={leadPhone}
                      onChange={(e) => setLeadPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-[#FFF9F0]/40 border border-[#F2F0EB] rounded-xl text-[#10243B] font-medium focus:border-[#FF6A00]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#455064] mb-1">Branch & Semester *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. CSE - 5th Sem"
                      value={leadBranch}
                      onChange={(e) => setLeadBranch(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-[#FFF9F0]/40 border border-[#F2F0EB] rounded-xl text-[#10243B] font-medium focus:border-[#FF6A00]"
                    />
                  </div>
                </div>
              </div>

              {/* Member 2 */}
              <div className="p-5 bg-white border border-[#F2F0EB] rounded-2xl space-y-3.5 shadow-2xs">
                <div className="flex items-center justify-between border-b border-[#F2F0EB] pb-2.5">
                  <span className="text-sm font-extrabold text-[#10243B] uppercase">Member 02</span>
                  <span className="text-xs text-[#FF6A00] font-bold">Mandatory</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                  <div>
                    <label className="block text-xs font-bold text-[#455064] mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Member Name"
                      value={member2Name}
                      onChange={(e) => setMember2Name(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-[#FFF9F0]/40 border border-[#F2F0EB] rounded-xl text-[#10243B] font-medium focus:border-[#FF6A00]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#455064] mb-1">Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="member2@college.edu"
                      value={member2Email}
                      onChange={(e) => setMember2Email(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-[#FFF9F0]/40 border border-[#F2F0EB] rounded-xl text-[#10243B] font-medium focus:border-[#FF6A00]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#455064] mb-1">Role / Specialization</label>
                    <select
                      value={member2Role}
                      onChange={(e) => setMember2Role(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-[#FFF9F0]/40 border border-[#F2F0EB] rounded-xl text-[#10243B] font-medium focus:border-[#FF6A00]"
                    >
                      <option>Frontend Developer</option>
                      <option>Backend Developer</option>
                      <option>Full-Stack Engineer</option>
                      <option>UI/UX Designer</option>
                      <option>Mobile App Developer</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Member 3 */}
              <div className="p-5 bg-white border border-[#F2F0EB] rounded-2xl space-y-3.5 shadow-2xs">
                <div className="flex items-center justify-between border-b border-[#F2F0EB] pb-2.5">
                  <span className="text-sm font-extrabold text-[#10243B] uppercase">Member 03</span>
                  <span className="text-xs text-[#FF6A00] font-bold">Mandatory</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                  <div>
                    <label className="block text-xs font-bold text-[#455064] mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Member Name"
                      value={member3Name}
                      onChange={(e) => setMember3Name(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-[#FFF9F0]/40 border border-[#F2F0EB] rounded-xl text-[#10243B] font-medium focus:border-[#FF6A00]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#455064] mb-1">Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="member3@college.edu"
                      value={member3Email}
                      onChange={(e) => setMember3Email(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-[#FFF9F0]/40 border border-[#F2F0EB] rounded-xl text-[#10243B] font-medium focus:border-[#FF6A00]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#455064] mb-1">Role / Specialization</label>
                    <select
                      value={member3Role}
                      onChange={(e) => setMember3Role(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-[#FFF9F0]/40 border border-[#F2F0EB] rounded-xl text-[#10243B] font-medium focus:border-[#FF6A00]"
                    >
                      <option>Backend Engineer</option>
                      <option>Frontend Developer</option>
                      <option>Database Architect</option>
                      <option>UI/UX Designer</option>
                      <option>Mobile App Developer</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Member 4 (Optional) */}
              <div className="p-5 bg-white/80 border border-[#F2F0EB] rounded-2xl space-y-3.5">
                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2.5 cursor-pointer text-sm font-extrabold text-[#10243B] uppercase">
                    <input
                      type="checkbox"
                      checked={hasMember4}
                      onChange={(e) => setHasMember4(e.target.checked)}
                      className="rounded text-[#FF6A00] focus:ring-[#FF6A00] w-4 h-4"
                    />
                    <span>Add Member 04 (Teams of 4)</span>
                  </label>
                  <span className="text-xs text-[#455064] font-medium">Optional (Rule: 3–4 members)</span>
                </div>

                {hasMember4 && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
                    <div>
                      <label className="block text-xs font-bold text-[#455064] mb-1">Full Name *</label>
                      <input
                        type="text"
                        required={hasMember4}
                        placeholder="Member 4 Name"
                        value={member4Name}
                        onChange={(e) => setMember4Name(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-sm bg-[#FFF9F0]/40 border border-[#F2F0EB] rounded-xl text-[#10243B] font-medium focus:border-[#FF6A00]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#455064] mb-1">Email *</label>
                      <input
                        type="email"
                        required={hasMember4}
                        placeholder="member4@college.edu"
                        value={member4Email}
                        onChange={(e) => setMember4Email(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-sm bg-[#FFF9F0]/40 border border-[#F2F0EB] rounded-xl text-[#10243B] font-medium focus:border-[#FF6A00]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#455064] mb-1">Role</label>
                      <select
                        value={member4Role}
                        onChange={(e) => setMember4Role(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-sm bg-[#FFF9F0]/40 border border-[#F2F0EB] rounded-xl text-[#10243B] font-medium focus:border-[#FF6A00]"
                      >
                        <option>UI/UX Designer</option>
                        <option>Frontend Developer</option>
                        <option>Backend Developer</option>
                        <option>QA & Testing</option>
                      </select>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex items-center justify-between pt-2">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-5 py-2.5 text-sm font-bold text-[#455064] hover:text-[#10243B] cursor-pointer"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="px-7 py-3 bg-[#FF6A00] hover:bg-[#F4510B] text-white text-sm font-extrabold uppercase tracking-wider rounded-xl transition-colors flex items-center gap-2 cursor-pointer shadow-sm"
                >
                  <span>Proceed to Payment</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}

          {/* STEP 3: Payment */}
          {step === 3 && (
            <form onSubmit={handleFinalSubmit} className="space-y-5">
              <div className="p-5 sm:p-6 bg-white border border-[#F2F0EB] rounded-2xl flex flex-col sm:flex-row items-center gap-6 shadow-xs">
                {/* QR Code mockup */}
                <div className="shrink-0 flex flex-col items-center">
                  <div className="w-40 h-40 bg-white p-2.5 border-2 border-[#10243B] rounded-2xl flex flex-col items-center justify-center relative shadow-xs">
                    <div className="grid grid-cols-4 gap-1 w-full h-full p-2 bg-[#FFF9F0] rounded-xl place-items-center">
                      <QrCode className="w-24 h-24 text-[#10243B]" />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <span className="px-2.5 py-1 bg-[#FF6A00] text-white text-xs font-black rounded-sm tracking-wider uppercase shadow-xs">
                        ₹1,700
                      </span>
                    </div>
                  </div>
                  <span className="text-xs text-[#455064] mt-2 font-mono font-bold">Scan via any UPI App</span>
                </div>

                <div className="space-y-3 text-sm flex-1">
                  <div className="flex items-center justify-between pb-2 border-b border-[#F2F0EB]">
                    <span className="text-[#455064] font-medium">Registration Fee:</span>
                    <span className="font-display font-extrabold text-xl text-[#10243B]">₹1,700 <span className="text-xs font-semibold text-[#455064]">/ team</span></span>
                  </div>
                  <div className="flex items-center justify-between pb-2 border-b border-[#F2F0EB]">
                    <span className="text-[#455064] font-medium">Beneficiary:</span>
                    <span className="font-bold text-[#10243B]">JCET HackIgnite 2026</span>
                  </div>
                  <div className="flex items-center justify-between pb-2 border-b border-[#F2F0EB]">
                    <span className="text-[#455064] font-medium">Official UPI ID:</span>
                    <div className="flex items-center gap-1.5">
                      <code className="bg-[#F2F0EB] px-2.5 py-1 rounded-lg text-xs font-mono font-bold text-[#10243B]">
                        jcet.hackignite2026@sbi
                      </code>
                      <button
                        type="button"
                        onClick={handleCopyUpi}
                        className="p-1.5 text-[#455064] hover:text-[#FF6A00] cursor-pointer"
                        title="Copy UPI ID"
                      >
                        {copiedUpi ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#455064] font-medium">Includes:</span>
                    <span className="text-[#10243B] font-semibold text-xs">24-hr access, meals, Wi-Fi, mentorship, certificates</span>
                  </div>
                </div>
              </div>

              {/* UTR Input */}
              <div className="space-y-2">
                <label className="block text-sm font-extrabold text-[#10243B] uppercase">
                  UPI Reference / UTR Number (12 Digits) *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. 432890128472"
                  value={utrNumber}
                  onChange={(e) => setUtrNumber(e.target.value)}
                  className="w-full px-4 py-3 text-base bg-white border border-[#F2F0EB] rounded-xl text-[#10243B] font-mono font-bold tracking-wider focus:outline-hidden focus:border-[#FF6A00]"
                />
                <p className="text-xs text-[#455064] font-medium">
                  Enter the transaction ID or UTR number shown in your Google Pay, PhonePe, Paytm, or BHIM app after sending ₹1,700.
                </p>
              </div>

              {/* Terms check */}
              <div className="p-4 bg-white border border-[#F2F0EB] rounded-xl space-y-2">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    checked={termsAccepted}
                    onChange={(e) => setTermsAccepted(e.target.checked)}
                    className="mt-1 rounded text-[#FF6A00] focus:ring-[#FF6A00] w-4 h-4"
                  />
                  <span className="text-xs sm:text-sm text-[#455064] leading-relaxed font-medium">
                    I acknowledge that the registration fee of <strong className="text-[#10243B] font-bold">₹1,700 is strictly non-refundable</strong> under any condition as stated in the HackIgnite rules, and our team agrees to abide by all 10 hackathon guidelines and code of conduct.
                  </span>
                </label>
              </div>

              <div className="flex items-center justify-between pt-2">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-5 py-2.5 text-sm font-bold text-[#455064] hover:text-[#10243B] cursor-pointer"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="px-7 py-3.5 bg-[#FF6A00] hover:bg-[#F4510B] text-white text-sm font-extrabold uppercase tracking-wider rounded-xl transition-colors flex items-center gap-2 cursor-pointer shadow-md"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Confirm Registration</span>
                </button>
              </div>
            </form>
          )}

          {/* STEP 4 / Existing Registration: DIGITAL PASS */}
          {(step === 4 || registeredData) && registeredData && (
            <div className="space-y-5">
              <div className="p-6 bg-white border border-[#F2F0EB] rounded-2xl relative overflow-hidden shadow-xs">
                {/* Decorative top accent */}
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#FF6A00] via-[#F4510B] to-[#FFB000]" />

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-[#F2F0EB]">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-sm uppercase tracking-wider">
                        Confirmed Entry
                      </span>
                      <span className="text-sm font-mono font-bold text-[#FF6A00]">
                        {registeredData.teamId}
                      </span>
                    </div>
                    <h3 className="text-2xl font-display font-extrabold text-[#10243B] mt-1.5">
                      {registeredData.teamName}
                    </h3>
                    <p className="text-sm text-[#455064] font-medium">{registeredData.college}</p>
                  </div>
                  <div className="text-left sm:text-right">
                    <p className="text-xs text-[#455064] uppercase font-bold tracking-wider">Event Dates</p>
                    <p className="text-sm sm:text-base font-display font-bold text-[#10243B]">12–13 DEC 2026</p>
                    <p className="text-xs text-[#455064]">Hubballi, Karnataka</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4 text-sm border-b border-[#F2F0EB]">
                  <div>
                    <p className="text-[#455064] font-medium text-xs">Team Lead:</p>
                    <p className="font-bold text-[#10243B] text-base">{registeredData.leadName}</p>
                    <p className="text-[#455064] text-xs font-mono">{registeredData.leadPhone} · {registeredData.leadEmail}</p>
                  </div>
                  <div>
                    <p className="text-[#455064] font-medium text-xs">Chosen Track:</p>
                    <p className="font-bold text-[#10243B] text-base uppercase">{registeredData.track}</p>
                    <p className="text-[#455064] text-xs font-mono">UTR: {registeredData.utrNumber}</p>
                  </div>
                </div>

                <div className="pt-3">
                  <p className="text-xs sm:text-sm font-bold text-[#10243B] uppercase tracking-wider mb-2">
                    Confirmed Squad Roster ({registeredData.members.length + 1} Members)
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm">
                    <div className="p-2.5 bg-[#FFF9F0] rounded-lg">
                      <p className="font-semibold text-[#10243B]">{registeredData.leadName} (Lead)</p>
                      <p className="text-xs text-[#455064]">{registeredData.leadEmail}</p>
                    </div>
                    {registeredData.members.map((m, idx) => (
                      <div key={idx} className="p-2.5 bg-[#FFF9F0] rounded-lg">
                        <p className="font-semibold text-[#10243B]">{m.name} ({m.role})</p>
                        <p className="text-xs text-[#455064]">{m.email}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 p-3.5 bg-[#F2F0EB]/60 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs sm:text-sm text-[#455064]">
                  <span>Registration Fee: <strong className="text-[#10243B] font-bold">₹1,700 Paid</strong></span>
                  <span className="font-mono text-xs">Timestamp: {registeredData.registeredAt}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleReset}
                  className="text-xs sm:text-sm text-[#455064] hover:text-red-600 underline cursor-pointer"
                >
                  Register another team
                </button>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => window.print()}
                    className="px-5 py-2.5 border border-[#10243B] hover:bg-[#10243B] hover:text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded-xl transition-colors flex items-center gap-2 cursor-pointer"
                  >
                    <Download className="w-4 h-4" />
                    <span>Print / Save Pass</span>
                  </button>
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-6 py-2.5 bg-[#FF6A00] hover:bg-[#F4510B] text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded-xl transition-colors cursor-pointer shadow-xs"
                  >
                    Done
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
