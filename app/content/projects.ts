/** Featured projects. `tech` renders as tags on each card. */

export type Project = {
  name: string;
  /** Optional subtitle, e.g. "AI Chrome Extension". */
  kind?: string;
  tech: string[];
  bullets: string[];
  /** Add a repo or demo URL to turn the card title into a link. */
  href?: string;
};

export const projects: Project[] = [
  {
    name: "Web Watch",
    tech: ["Python", "Azure", "JavaScript", "Docker", "PostgreSQL", "LangChain"],
    bullets: [
      "Built the core web scraping engine for a full-stack monitoring platform that tracks real-time price and stock changes across e-commerce sites, with a focus on GPU listings for client Spoores.",
      "Engineered the ETL pipeline parsing scraped content into PostgreSQL and feeding a LangChain RAG system with FAISS vector retrieval and the Anthropic API; containerized with Docker and deployed on Azure.",
      "Enforced code quality through a CI pipeline requiring unit tests and documentation standards for every new function, ensuring pull requests met team standards before merging.",
    ],
  },
  {
    name: "Browser Buddy",
    kind: "AI Chrome Extension",
    tech: ["HTML", "CSS", "Python", "Gemini API", "FastAPI"],
    bullets: [
      "Built a Chrome extension and FastAPI backend enabling users to highlight webpage text, define words at their cursor, or get AI-generated descriptions of their screen, integrating Gemini's vision and text models.",
      "Implemented OCR-based cursor word detection with a multithreaded mouse-tracking service, and engineered privacy safeguards to block screen capture on sensitive windows.",
    ],
  },
];
