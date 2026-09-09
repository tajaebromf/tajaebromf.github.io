import Section from "./Section";
import { experience } from "@/app/content/experience";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="space-y-10">
        {/* .map() turns each Job object into markup. `key` must be stable and
            unique — React uses it to track items across re-renders. */}
        {experience.map((job) => (
          <article key={`${job.company}-${job.start}`}>
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
                {job.company}
              </h3>
              <p className="text-sm whitespace-nowrap text-zinc-500 dark:text-zinc-500">
                {job.start} - {job.end}
              </p>
            </div>
            <p className="text-sm text-sky-700 dark:text-sky-400">
              {job.role} · {job.location}
            </p>
            <ul className="mt-3 space-y-2">
              {job.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="relative pl-5 text-sm leading-relaxed text-zinc-600 before:absolute before:left-0 before:text-zinc-400 before:content-['—'] dark:text-zinc-400 dark:before:text-zinc-600"
                >
                  {bullet}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
