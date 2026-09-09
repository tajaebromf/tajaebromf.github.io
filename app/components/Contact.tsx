import Section from "./Section";
import { site } from "@/app/content/site";

export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <p className="text-zinc-600 dark:text-zinc-400">
        Open to software engineering roles and interesting problems. The fastest
        way to reach me is email.
      </p>
      <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
        <a
          href={`mailto:${site.email}`}
          className="text-sky-700 hover:underline dark:text-sky-400"
        >
          {site.email}
        </a>
        <a
          href={site.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sky-700 hover:underline dark:text-sky-400"
        >
          LinkedIn
        </a>
        <a
          href={site.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sky-700 hover:underline dark:text-sky-400"
        >
          GitHub
        </a>
      </div>
    </Section>
  );
}
