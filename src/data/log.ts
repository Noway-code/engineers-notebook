export type LogEntry = {
  year: string;
  current?: boolean;
  type: "Experience" | "Publication" | "Project";
  description: string;
  href?: string;
};

export const log: LogEntry[] = [
  {
    year: "2025",
    current: true,
    type: "Experience",
    description: "Software Engineering Analyst at BNY",
  },
  {
    year: "2025",
    type: "Publication",
    description: "Bug Localization in Mobile Apps, arXiv:2508.05085",
  },
  { year: "2024", type: "Project", description: "Ladybug: GUI Bug Localizer" },
  { year: "2023", type: "Project", description: "Financial Fraud Detector" },
];
