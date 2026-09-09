import Headshot from "./Headshot";
import { site } from "@/app/content/site";

export default function Hero() {
  return (
    <section id="top" className="py-16">
      <div className="flex flex-col-reverse items-start gap-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-50">
            {site.name}
          </h1>
          <p className="mt-2 text-lg text-sky-700 dark:text-sky-400">{site.role}</p>
          <p className="mt-4 max-w-xl text-zinc-600 dark:text-zinc-400">{site.tagline}</p>
          <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-500">{site.location}</p>
        </div>

        <Headshot src={site.headshot} name={site.name} />
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href={`mailto:${site.email}`}
          className="rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
        >
          Email me
        </a>
        <a
          href={site.linkedin}
          target="_blank"
          // noopener/noreferrer: standard hardening for links opening a new tab.
          rel="noopener noreferrer"
          className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:border-zinc-400 hover:text-zinc-900 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-zinc-600 dark:hover:text-zinc-100"
        >
          LinkedIn
        </a>
        <a
          href={site.github}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:border-zinc-400 hover:text-zinc-900 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-zinc-600 dark:hover:text-zinc-100"
        >
          GitHub
        </a>
        {/* Rendered only when site.resume is set, so an empty string hides the
            button rather than linking to a missing PDF. */}
        {site.resume && (
          <a
            href={site.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:border-zinc-400 hover:text-zinc-900 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-zinc-600 dark:hover:text-zinc-100"
          >
            Resume
          </a>
        )}
      </div>
    </section>
  );
}
