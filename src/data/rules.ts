export interface HackathonRule {
  number: string;
  title: string;
  summary: string;
  details: string;
  tag: string;
}

export const HACKATHON_RULES: HackathonRule[] = [
  {
    number: "01",
    title: "Team Composition",
    summary: "Teams must strictly consist of 3 to 4 members.",
    details: "Solo participants or pairs are not permitted. Every team must designate one Team Lead for correspondence. Cross-institutional teams are permitted provided all members present valid student credentials.",
    tag: "Eligibility"
  },
  {
    number: "02",
    title: "Domain Alignment",
    summary: "Projects must fall strictly under Web and App Development domains.",
    details: "All submissions must be functional web applications, responsive progressive web apps, or native/cross-platform mobile applications addressing the allotted challenge.",
    tag: "Scope"
  },
  {
    number: "03",
    title: "On-Spot Problem Statements",
    summary: "Specific challenges will be revealed on the spot at 09:30 AM on 12 December 2026.",
    details: "To ensure absolute fairness and spontaneous creativity, no prior problem statements are disclosed. Tracks and detailed briefs will be handed out simultaneously to all registered teams during morning check-in.",
    tag: "Fairness"
  },
  {
    number: "04",
    title: "Original Work & Code Freeze",
    summary: "All code, designs, and architecture must be built during the 24-hour window.",
    details: "Pre-written codebases, pre-packaged modules, or commercial templates are strictly prohibited. Open-source libraries, packages, and public APIs are welcomed provided they are declared in documentation. Code freeze occurs sharp at 11:00 AM on 13 December.",
    tag: "Integrity"
  },
  {
    number: "05",
    title: "Mandatory Mentor Checkpoints",
    summary: "Mandatory attendance for Checkpoint 1 (Day 1 evening) and Checkpoint 2 (Day 2 morning).",
    details: "Both evaluations are compulsory. Teams failing to present their progress during Checkpoint 1 (06:00 PM – 07:30 PM) or Checkpoint 2 (06:00 AM – 07:00 AM) will forfeit checkpoint scoring points.",
    tag: "Milestone"
  },
  {
    number: "06",
    title: "Code Repository & Git Commits",
    summary: "Teams must maintain an active Git repository with regular commits during the 24 hours.",
    details: "A dedicated GitHub or GitLab repository link must be submitted at kickoff. Jurors and organizers will inspect commit history, timestamps, and branch workflows to verify incremental progress.",
    tag: "Version Control"
  },
  {
    number: "07",
    title: "Registration Fee Policy",
    summary: "Registration fee of ₹1,700 per team is strictly non-refundable.",
    details: "Once registered, payment transfers cannot be refunded or cancelled under any circumstance. The fee covers 24-hour venue access, high-speed networking, meals, midnight refreshments, mentor access, and participation kit.",
    tag: "Finance"
  },
  {
    number: "08",
    title: "Identification & Verification",
    summary: "All participants must carry valid college identity cards for verification at check-in.",
    details: "Physical college ID cards or bonafide institution credentials must be shown at the registration desk. Teams without verified member credentials will not receive entry passes.",
    tag: "Verification"
  },
  {
    number: "09",
    title: "Conduct & Fair Play",
    summary: "Professional behavior, mutual respect, and academic integrity are expected at all times.",
    details: "Plagiarism, intellectual property infringement, misconduct toward peers, volunteers, or jury members will result in immediate disqualification and campus removal.",
    tag: "Conduct"
  },
  {
    number: "10",
    title: "Evaluation & Final Decision",
    summary: "The decision of the judging panel and organizers will be final and binding.",
    details: "Scores are awarded based on the transparent 100-point four-dimension rubric. Juror verdicts regarding category winners and podium placements are non-negotiable.",
    tag: "Governance"
  }
];
