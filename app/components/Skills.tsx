import Section from "./Section";
import { skills } from "@/app/content/skills";

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="space-y-6">
        {skills.map((group) => (
          <div key={group.label}>
            <h3 className="mb-2 text-sm font-medium text-zinc-900 dark:text-zinc-100">
              {group.label}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-zinc-200 px-2.5 py-1 text-sm text-zinc-600 dark:border-zinc-800 dark:text-zinc-400"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
