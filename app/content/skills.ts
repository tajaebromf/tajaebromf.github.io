/** Skills grouped by category; each group renders as a labelled row of tags. */

export type SkillGroup = {
  label: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    label: "Languages",
    items: ["Python", "JavaScript/TypeScript", "C#", "C++", "C", "Java", "SQL"],
  },
  {
    label: "Frameworks & Tools",
    items: [
      "React",
      "Node.js",
      "FastAPI",
      "Docker",
      "Xcode",
      "Figma",
      "Git/GitHub",
      "REST APIs",
      "Selenium",
      "TestNG",
    ],
  },
  {
    label: "Cloud & Data",
    items: ["Azure", "Firebase", "PostgreSQL", "SQL", "Pandas", "Plotly"],
  },
  {
    label: "AI & ML",
    items: [
      "LLM APIs (Anthropic, Gemini)",
      "RAG",
      "LangChain",
      "FAISS vector retrieval",
      "Prompt engineering",
    ],
  },
  {
    label: "Practices",
    items: [
      "CI/CD",
      "Agile",
      "Mobile & full-stack development",
      "Unit testing",
      "Code review",
      "Debugging",
    ],
  },
];
