export interface EvaluationCriterion {
  id: string;
  category: string;
  points: number;
  subtitle: string;
  description: string;
  rubricItems: string[];
}

export const EVALUATION_SYSTEM: EvaluationCriterion[] = [
  {
    id: "innovation",
    category: "INNOVATION",
    points: 25,
    subtitle: "Originality, creativity, and uniqueness",
    description: "Evaluates the degree of novelty, breakthrough thinking, and creative approach toward solving the on-spot problem statement.",
    rubricItems: [
      "Novelty of the solution approach and problem framing",
      "Creativity in combining distinct technologies or methodologies",
      "Competitive differentiation over existing conventional methods",
      "Potential real-world impact and domain relevance"
    ]
  },
  {
    id: "technical-implementation",
    category: "TECHNICAL IMPLEMENTATION",
    points: 25,
    subtitle: "Technical complexity, architecture, and quality",
    description: "Assesses code cleanliness, architectural rigor, technology stack selection, and depth of technical execution built during the 24 hours.",
    rubricItems: [
      "Clean modular code structure and git commit discipline",
      "Architectural soundness, scalability, and security posture",
      "Effective API integration and optimal database modeling",
      "Appropriate use of modern frameworks, tooling, and libraries"
    ]
  },
  {
    id: "functionality",
    category: "FUNCTIONALITY",
    points: 25,
    subtitle: "Working features, reliability, and usability",
    description: "Scrutinizes whether the core prototype actually works as intended without critical crashes, offering a seamless user experience.",
    rubricItems: [
      "Working end-to-end user flows without mocking vital steps",
      "Responsive, clean, and intuitive user interface design",
      "Robust error handling and validation across edge cases",
      "Operational performance and fluid interaction response"
    ]
  },
  {
    id: "demo-presentation",
    category: "DEMO & PRESENTATION",
    points: 25,
    subtitle: "Communication, demonstration, and explanation",
    description: "Measures the team's ability to articulate value, present a live live demonstration, and answer probing technical questions from the jury.",
    rubricItems: [
      "Clarity, confidence, and conciseness in product pitching",
      "Flawless live execution during the demonstration window",
      "Effective demonstration of technical capabilities to judges",
      "Incisive defense during juror Q&A regarding scalability"
    ]
  }
];
