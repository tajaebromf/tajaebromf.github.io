/**
 * Site-wide identity and links.
 *
 * Everything here is public, so no phone number by design — email and
 * LinkedIn are enough for recruiters to reach you without handing your
 * mobile number to every scraper that crawls GitHub Pages.
 */

export type SiteConfig = {
  name: string;
  role: string;
  tagline: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  /** Files in public/ are served from the site root, so "/x" means public/x. */
  headshot: string;
  resume: string;
};

export const site: SiteConfig = {
  name: "Tajae Bromfield",
  role: "Software Engineer",
  tagline:
    "I build software that makes things easier for the person on the other end.",
  location: "Fort Myers, FL",
  email: "TajaeBromfield2004@gmail.com",
  github: "https://github.com/tajaebromf",
  linkedin: "https://www.linkedin.com/in/tajae-bromfield",
  headshot: "/headshot.jpg",
  resume: "/Tajae_Resume.pdf",
};
