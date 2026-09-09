import { site } from "@/app/content/site";

/** Anchor targets must match the `id` given to each <Section>. */
const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#leadership", label: "Leadership" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/80">
      <nav className="mx-auto flex max-w-3xl flex-col gap-2 px-6 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:py-4">
        <a href="#top" className="font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
          {site.name}
        </a>
        {/* On phones this scrolls sideways instead of disappearing, so the
            links stay reachable without a hamburger menu. */}
        <ul className="-mx-6 flex gap-5 overflow-x-auto px-6 text-sm text-zinc-600 [scrollbar-width:none] sm:mx-0 sm:gap-6 sm:overflow-visible sm:px-0 dark:text-zinc-400">
          {links.map((link) => (
            <li key={link.href} className="whitespace-nowrap">
              <a href={link.href} className="transition-colors hover:text-sky-700 dark:hover:text-sky-400">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
