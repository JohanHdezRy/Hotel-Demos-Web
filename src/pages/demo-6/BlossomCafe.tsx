import { Link } from "react-router-dom";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";

export function BlossomCafe() {
  return (
    <div className="bg-foam text-espresso overflow-x-hidden font-[var(--font-dm-sans)]">
      {/* Back link — minimal, non-intrusive */}
      <nav aria-label="Site navigation" className="fixed top-6 left-6 z-50">
        <Link
          to="/"
          aria-label="Back to portfolio home"
          className="font-[var(--font-dm-sans)] text-[0.6rem] tracking-[4px] uppercase text-foam/60 hover:text-foam transition-colors duration-300 flex items-center gap-2 group"
        >
          <span
            aria-hidden="true"
            className="inline-block w-5 h-px bg-foam/50 group-hover:w-7 group-hover:bg-foam transition-all duration-300"
          />
          Back
        </Link>
      </nav>
      <main>
        <Hero />
        <Menu />
        <Gallery />
        <Contact />
      </main>
    </div>
  );
}
