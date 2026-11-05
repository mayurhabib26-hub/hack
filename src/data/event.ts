export interface EventConfig {
  name: string;
  edition: string;
  tagline: string;
  theme: string;
  subTagline: string;
  description: string;
  dates: string;
  startDateISO: string;
  registrationDeadlineISO: string;
  registrationFee: string;
  feeAmount: number;
  teamSize: string;
  domain: string;
  duration: string;
  venueName: string;
  venueAddress: string;
  venueCity: string;
  pincode: string;
  googleMapsUrl: string;
  rulesHighlight: string;
  tracks: Array<{
    id: string;
    title: string;
    shortDesc: string;
    focusAreas: string[];
  }>;
  sponsors: Array<{
    name: string;
    tier: string;
    tagline: string;
    logoText: string;
  }>;
}

export const EVENT_DATA: EventConfig = {
  name: "HACKIGNITE",
  edition: "2026",
  tagline: "THINK • BUILD • INNOVATE • IMPACT",
  theme: "A 24-Hour Innovation Challenge to Solve Real-World Problems through Technology.",
  subTagline: "WHERE IDEAS BECOME IMPACT",
  description:
    "HackIgnite is a national-level 24-hour hackathon that brings together passionate developers, creative thinkers, and problem solvers to build innovative solutions for real-world challenges. Participants collaborate in teams, tackle problem statements revealed on the spot, and transform their ideas into functional technology solutions.",
  dates: "12–13 DECEMBER 2026",
  startDateISO: "2026-12-12T11:00:00+05:30",
  registrationDeadlineISO: "2026-12-10T11:00:00+05:30",
  registrationFee: "₹1,700 PER TEAM",
  feeAmount: 1700,
  teamSize: "3–4 MEMBERS",
  domain: "WEB & APP DEVELOPMENT",
  duration: "24 HOURS",
  venueName: "Jain College of Engineering and Technology",
  venueAddress: "404/4/5, Hebballi Road, Sai Nagar, Unkal",
  venueCity: "Hubballi",
  pincode: "580031",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Jain+College+of+Engineering+and+Technology+Hubballi",
  rulesHighlight: "Registration fees are non-refundable. Problem statements will be revealed on the spot.",
  tracks: [
    {
      id: "web-dev",
      title: "Web Platforms & Architecture",
      shortDesc: "Scalable modern web applications solving grassroots socio-economic and institutional problems.",
      focusAreas: ["Modern React/Next/Vue", "API Integrations", "Real-Time Systems", "Accessible UX"]
    },
    {
      id: "app-dev",
      title: "Mobile App Innovations",
      shortDesc: "High-performance native and cross-platform mobile apps targeting offline-first, health, education, or commerce.",
      focusAreas: ["Flutter/React Native/Swift/Kotlin", "Offline Storage", "Device Sensors", "Intuitive Flow"]
    },
    {
      id: "full-stack",
      title: "Full-Stack Enterprise & Cloud",
      shortDesc: "End-to-end connected software with resilient backend pipelines, analytics, and intelligent services.",
      focusAreas: ["Cloud Native Microservices", "Database Optimization", "Security & Auth", "Observability"]
    }
  ],
  sponsors: [
    { name: "Devfolio Community", tier: "Platform Partner", tagline: "Ecosystem Partner", logoText: "DEVFOLIO" },
    { name: "GitHub Education", tier: "Ecosystem Partner", tagline: "Developer Tools", logoText: "GITHUB" },
    { name: "Digital Ocean", tier: "Cloud Infrastructure", tagline: "Compute Credits", logoText: "DIGITALOCEAN" },
    { name: "Postman", tier: "API Platform Partner", tagline: "API Testing & Tooling", logoText: "POSTMAN" },
    { name: "Resend", tier: "Communication Partner", tagline: "Developer Communications", logoText: "RESEND" },
    { name: "Hubballi Tech Collective", tier: "Regional Innovation Network", tagline: "Startup Hub Hubballi", logoText: "HUBBALLI TECH" }
  ]
};

export const EVENT_STATS = [
  { value: "24", unit: "HOURS", label: "Continuous Sprint", desc: "Non-stop engineering from kickoff to code freeze" },
  { value: "NATL", unit: "LEVEL", label: "National Presence", desc: "Teams competing from engineering institutions across India" },
  { value: "WEB/APP", unit: "DOMAIN", label: "Web & App Focus", desc: "High-impact consumer, enterprise, and social platforms" },
  { value: "ON-SPOT", unit: "TOPICS", label: "Live Challenge Reveal", desc: "Zero pre-baked templates; real problem statements at 09:30 AM" }
];

export const PILLARS = [
  {
    number: "01",
    title: "TEAM UP",
    desc: "Collaborate with bright minds.",
    detail: "Form a powerhouse crew of 3 to 4 designers, frontend architects, backend engineers, and strategists.",
    badge: "Collaboration"
  },
  {
    number: "02",
    title: "INNOVATE",
    desc: "Solve real-world problems.",
    detail: "Tackle on-spot challenges addressing civic, commercial, health, and logistical friction in modern India.",
    badge: "Originality"
  },
  {
    number: "03",
    title: "BUILD",
    desc: "Create impactful solutions.",
    detail: "Translate raw brainstorms into functional, deployable prototypes within the intense 24-hour development clock.",
    badge: "Execution"
  },
  {
    number: "04",
    title: "WIN",
    desc: "Get recognized and exciting opportunities.",
    detail: "Pitch to esteemed industry jury panels, conquer top podium positions, and claim cash prize pool rewards.",
    badge: "Excellence"
  }
];
