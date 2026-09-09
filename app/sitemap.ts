import type { MetadataRoute } from "next";

// Required under output: "export" — tells Next to render this once at build
// time rather than treating it as a dynamic route it would need a server for.
export const dynamic = "force-static";

/**
 * Generates sitemap.xml at build time. Single-page site, so one entry —
 * but it tells search engines the canonical URL and when it last changed.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://tajaebromf.github.io",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
