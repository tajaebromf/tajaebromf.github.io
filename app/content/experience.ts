/** Professional roles, newest first — the order they render in. */

export type Job = {
  company: string;
  role: string;
  location: string;
  /** Kept as display strings rather than Dates: they are only ever printed. */
  start: string;
  end: string;
  bullets: string[];
};

export const experience: Job[] = [
  {
    company: "BoomBox Inc",
    role: "Full-Stack Developer",
    location: "Fort Myers, FL",
    start: "June 2026",
    end: "Present",
    bullets: [
      "Develop features for a music-based mobile social platform built in React Native for iOS, building and debugging on device through Xcode.",
      "Implemented a new user onboarding experience from Figma designs, translating mockups into working mobile interfaces.",
      "Debugged Node.js authentication flows to root-cause Google and Apple sign-in failures, then implemented both providers through Firebase Authentication.",
      "Resolved database defects causing user login errors, improving authentication reliability across the platform.",
      "Built React components surfacing the platform's Terms of Service and Privacy Policy for in-app users.",
    ],
  },
  {
    company: "Wabtec Corporation",
    role: "Software Engineer Intern",
    location: "Erie, PA",
    start: "May 2025",
    end: "Aug. 2025",
    bullets: [
      "Re-engineered a legacy C# application to Python, reducing cross-team integration friction and enabling seamless compatibility with existing data processing pipelines.",
      "Identified and resolved 100+ code anomalies through systematic debugging, reducing application runtime by 50% and improving overall test execution reliability.",
      "Designed a Pandas-based parsing algorithm to normalize data across multiple inconsistent file formats, then resolved resulting Plotly visualization issues to restore accurate test reporting.",
    ],
  },
  {
    company: "Storm Smart",
    role: "Software Engineer Intern",
    location: "Fort Myers, FL",
    start: "May 2024",
    end: "Aug. 2024",
    bullets: [
      "Developed a Python web scraper to extract pricing data for windows, doors, and storm shutters from a supplier site that did not publish itemized pricing, enabling internal access to previously hidden cost data.",
      "Designed an algorithm to isolate per-component pricing (glass, frame, wood type) across three base products, enabling component-level cost modeling that previously didn't exist for the pricing team.",
    ],
  },
];
