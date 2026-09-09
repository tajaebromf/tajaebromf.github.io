import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Leadership from "./components/Leadership";
import Contact from "./components/Contact";
import { site } from "@/app/content/site";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="mx-auto w-full max-w-3xl flex-1 px-6">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Leadership />
        <Contact />
      </main>
      <footer className="border-t border-zinc-200 py-8 dark:border-zinc-800">
        <p className="mx-auto max-w-3xl px-6 text-sm text-zinc-500 dark:text-zinc-500">
          © {new Date().getFullYear()} {site.name}. Built with Next.js and
          Tailwind, deployed on GitHub Pages.
        </p>
      </footer>
    </>
  );
}
