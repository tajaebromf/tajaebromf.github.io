/** Degree history. An array so a future degree just appends. */

export type Degree = {
  school: string;
  degree: string;
  honors?: string;
  gpa?: string;
  location: string;
  start: string;
  end: string;
};

export const education: Degree[] = [
  {
    school: "Florida Gulf Coast University",
    degree: "Bachelor of Science in Software Engineering",
    honors: "Magna Cum Laude",
    gpa: "3.80",
    location: "Fort Myers, FL",
    start: "Aug. 2023",
    end: "May 2026",
  },
];
