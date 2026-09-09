/** Leadership and professional development roles. */

export type LeadershipRole = {
  organization: string;
  role: string;
  location: string;
  start: string;
  end: string;
  bullets: string[];
};

export const leadership: LeadershipRole[] = [
  {
    organization: "Florida Gulf Coast University - Collegiate 100",
    role: "President",
    location: "Fort Myers, FL",
    start: "Feb. 2025",
    end: "May 2026",
    bullets: [
      "Mentored 30+ K-12 students through weekly programming focused on academic motivation, social development, and leadership skills.",
      "Spearheaded a campus-wide pageant at FGCU that generated over $10,000 in revenue, becoming one of the organization's largest fundraising initiatives.",
    ],
  },
  {
    organization:
      "Florida Gulf Coast University - National Society of Black Engineers",
    role: "Vice President",
    location: "Fort Myers, FL",
    start: "Apr. 2025",
    end: "May 2026",
    bullets: [
      "Led STEM education initiatives for 40+ students, directly supporting 15% in securing internships.",
      "Built and leveraged relationships with NASA, Northrop Grumman, and Hertz Global Holdings to organize industry-led workshops and panels.",
    ],
  },
];
