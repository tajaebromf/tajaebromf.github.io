/**
 * Shared wrapper for every page section: consistent width, spacing, and heading.
 *
 * `children` is a special prop — whatever you nest inside <Section>...</Section>
 * arrives here as `children` and gets rendered where we place it below.
 */

type SectionProps = {
  id: string;
  title: string;
  children: React.ReactNode;
};

export default function Section({ id, title, children }: SectionProps) {
  return (
    // scroll-mt-20 keeps the heading clear of the sticky nav when jumping to #id
    <section id={id} className="scroll-mt-20 border-t border-zinc-200 py-16 dark:border-zinc-800">
      <h2 className="mb-8 text-sm font-semibold uppercase tracking-widest text-sky-700 dark:text-sky-400">
        {title}
      </h2>
      {children}
    </section>
  );
}
