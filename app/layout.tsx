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

// Drives the browser tab, search results, and link previews on
// LinkedIn/Slack/iMessage when you share the URL.
export const metadata: Metadata = {
  metadataBase: new URL("https://tajaebromf.github.io"),
  title: `${site.name} - ${site.role}`,
  description: site.tagline,
  openGraph: {
    title: `${site.name} - ${site.role}`,
    description: site.tagline,
    url: "https://tajaebromf.github.io",
    siteName: site.name,
    type: "website",
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
        {children}
      </body>
    </html>
  );
}
