export interface TimelineActivity {
  time?: string;
  title: string;
  description: string;
  type?: 'regular' | 'checkpoint' | 'milestone' | 'finale';
  highlight?: boolean;
}

export interface TimelineStep {
  id: string;
  stepNumber: string;
  phaseTitle: string;
  dateRange: string;
  summary: string;
  activities: TimelineActivity[];
}

export const TIMELINE_STEPS: TimelineStep[] = [
  {
    id: "step-1",
    stepNumber: "STEP 01",
    phaseTitle: "REGISTRATION PHASE",
    dateRange: "05 November – 10 December 2026",
    summary: "Team registration kickoff, roster confirmation, track preference selection, and final payment portal verification.",
    activities: [
      {
        title: "Registration Kickoff",
        description: "Official team registrations open nationwide for student developers and innovators.",
        type: "regular"
      },
      {
        title: "Team Formation & Verification",
        description: "Collate team details (3–4 members per squad), valid institutional IDs, and domain preferences.",
        type: "regular"
      },
      {
        title: "Registration Portal Freeze",
        description: "Strict closure of team registrations and database locking for logistics and badge preparation.",
        type: "milestone",
        highlight: true
      },
      {
        time: "11:00 AM",
        title: "Final Registration Deadline",
        description: "10 December 2026 at 11:00 AM IST sharp. No further team entries accepted after this timestamp.",
        type: "milestone"
      }
    ]
  },
  {
    id: "step-2",
    stepNumber: "STEP 02",
    phaseTitle: "DAY 1 SPRINT",
    dateRange: "12 December 2026",
    summary: "Arrival, venue check-in, on-spot challenge allocation, 24-hour coding kickoff, and evening mentor evaluations.",
    activities: [
      {
        time: "08:30 AM",
        title: "Volunteers & Organizing Crew Report",
        description: "Registration desks active, high-speed campus LAN/Wi-Fi distribution, hardware desks open.",
        type: "regular"
      },
      {
        time: "09:30 AM",
        title: "Check-in & On-Spot Topic Allocation",
        description: "Team badge verification, desk seating, and official live release of on-spot problem statements.",
        type: "milestone"
      },
      {
        time: "11:00 AM",
        title: "24-Hour Coding Begins",
        description: "The official HackIgnite clock starts. Teams initiate Git repositories, architecture, and core builds.",
        type: "milestone",
        highlight: true
      },
      {
        time: "06:00 PM – 07:30 PM",
        title: "MENTOR CHECKPOINT 1",
        description: "Mandatory table reviews with industry mentors. Architecture validation, feasibility feedback, and technical roadmapping.",
        type: "checkpoint",
        highlight: true
      }
    ]
  },
  {
    id: "step-3",
    stepNumber: "STEP 03",
    phaseTitle: "DAY 2 FINALE",
    dateRange: "13 December 2026",
    summary: "Midnight caffeine rush, dawn evaluation rounds, live stage project demonstrations, and grand awards ceremony.",
    activities: [
      {
        time: "01:30 AM",
        title: "Midnight Tea & Refreshments",
        description: "Midnight recharge break, campus music jam, and quick energy booster snacks for nocturnal builders.",
        type: "regular"
      },
      {
        time: "06:00 AM – 07:00 AM",
        title: "MENTOR CHECKPOINT 2",
        description: "Second mandatory mentor evaluation. Working prototype scrutiny, edge cases, integration verification, and deployment review.",
        type: "checkpoint",
        highlight: true
      },
      {
        time: "10:30 AM",
        title: "Project Demonstrations",
        description: "Final judging rounds begin at assigned team stalls. Live app execution, API calls, and code review.",
        type: "milestone"
      },
      {
        time: "11:00 AM",
        title: "Code Freeze",
        description: "24-hour hacking countdown hits zero. Final Git push deadline, repository locked for jury evaluation.",
        type: "milestone",
        highlight: true
      },
      {
        time: "01:00 PM",
        title: "Closing Ceremony & Awards",
        description: "Valedictory gathering, jury feedback, felicitation of winning teams, and grand podium prize distribution.",
        type: "finale",
        highlight: true
      }
    ]
  }
];
