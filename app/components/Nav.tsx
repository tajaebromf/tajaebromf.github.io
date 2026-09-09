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
      <nav className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-6 py-4">
        <a href="#top" className="font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
          {site.name}
        </a>
        {/* Hidden on small screens, where the page is short enough to just scroll. */}
        <ul className="hidden gap-6 text-sm text-zinc-600 sm:flex dark:text-zinc-400">
          {links.map((link) => (
            <li key={link.href}>
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
