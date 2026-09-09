import Section from "./Section";
import { education } from "@/app/content/education";

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="space-y-4 text-zinc-600 dark:text-zinc-400">
        <p>
          I&apos;m a Software Engineering graduate from Florida Gulf Coast
          University with experience in Python, full-stack development, data
          processing, software testing, and cloud-based applications. Through
          internships at Wabtec and Storm Smart, I built software tools,
          debugged complex applications, designed data-parsing algorithms, and
          supported Python-based workflows.
        </p>
        <p>
          I helped build Web Watch, a full-stack monitoring platform
          that scrapes and analyzes website content to track real-time price and
          stock changes across multiple sources, with a data pipeline feeding a
          retrieval-based AI system.
        </p>
        <p>
          Outside of technical work, I served as President of Collegiate 100 and
          Vice President of NSBE at FGCU, which helped me grow as a leader,
          communicator, and collaborator.
        </p>
      </div>

      <dl className="mt-8 space-y-4">
        {education.map((degree) => (
          <div
            key={degree.school}
            className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between"
          >
            <div>
              <dt className="font-medium text-zinc-900 dark:text-zinc-100">
                {degree.school}
              </dt>
              <dd className="text-sm text-zinc-600 dark:text-zinc-400">
                {degree.degree}
                {degree.honors ? `, ${degree.honors}` : ""}
                {degree.gpa ? ` - GPA ${degree.gpa}` : ""}
              </dd>
            </div>
            <dd className="text-sm whitespace-nowrap text-zinc-500 dark:text-zinc-500">
              {degree.start} - {degree.end}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
