import Section from "./Section";
import { leadership } from "@/app/content/leadership";

export default function Leadership() {
  return (
    <Section id="leadership" title="Leadership">
      <div className="space-y-10">
        {leadership.map((role) => (
          <article key={role.organization}>
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
                {role.organization}
              </h3>
              <p className="text-sm whitespace-nowrap text-zinc-500 dark:text-zinc-500">
                {role.start} - {role.end}
              </p>
            </div>
            <p className="text-sm text-sky-700 dark:text-sky-400">
              {role.role} · {role.location}
            </p>
            <ul className="mt-3 space-y-2">
              {role.bullets.map((bullet) => (
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
