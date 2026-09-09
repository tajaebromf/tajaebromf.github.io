import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { site } from "@/app/content/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const url = "https://tajaebromf.github.io";
const title = `${site.name} - ${site.role}`;

// Drives the browser tab, search results, and the link preview card on
// LinkedIn/Slack/iMessage when the URL is shared.
export const metadata: Metadata = {
  metadataBase: new URL(url),
  title,
  description: site.tagline,
  authors: [{ name: site.name, url }],
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description: site.tagline,
    url,
    siteName: site.name,
    type: "website",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: title }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: site.tagline,
    images: ["/og.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      // scroll-smooth animates the jump when a nav anchor is clicked.
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
        {/* Visually hidden until keyboard-focused, so tab users can jump the nav. */}
        <a
          href="#top"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-sky-700 focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
