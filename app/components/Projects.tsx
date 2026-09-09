import Section from "./Section";
import { projects } from "@/app/content/projects";

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.name}
            className="rounded-xl border border-zinc-200 p-5 transition-colors hover:border-zinc-300 dark:border-zinc-800 dark:hover:border-zinc-700"
          >
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
              {/* Optional href: the title becomes a link only when one exists. */}
              {project.href ? (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sky-700 dark:hover:text-sky-400"
                >
                  {project.name}
                </a>
              ) : (
                project.name
              )}
            </h3>
            {project.kind && (
              <p className="text-sm text-sky-700 dark:text-sky-400">{project.kind}</p>
            )}

            <ul className="mt-3 space-y-2">
              {project.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400"
                >
                  {bullet}
                </li>
              ))}
            </ul>

            <ul className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <li
                  key={tech}
                  className="rounded-md bg-zinc-100 px-2 py-1 font-mono text-xs text-zinc-600 dark:bg-zinc-900 dark:text-zinc-400"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
