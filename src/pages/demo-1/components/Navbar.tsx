import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavbarScroll } from "../../../hooks/useNavbarScroll";
import { NAV_LINKS } from "../data/navData";

export default function Navbar() {
  const scrolled = useNavbarScroll(80);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const navBase =
    "fixed top-0 left-0 w-full z-[1000] px-4 md:px-12 flex items-center gap-3 md:gap-5 transition-all duration-[400ms]";
  const navScroll = scrolled
    ? "bg-white/[0.97] shadow-[0_2px_16px_rgba(0,0,0,.06)] py-3"
    : "bg-transparent py-[18px]";

  return (
    <>
      <nav className={`${navBase} ${navScroll}`}>
        <Link
          to="/"
          className={`text-[.75rem] tracking-[1px] transition-colors duration-[400ms] ${scrolled ? "text-[#A90023]" : "text-white/80"}`}
        >
          ← Demos
        </Link>
        <span
          className={`font-[var(--font-playfair-sc)] text-[.8rem] sm:text-base tracking-[2px] sm:tracking-[3px] truncate transition-colors duration-[400ms] ${scrolled ? "text-[#1C1C1C]" : "text-white"}`}
        >
          HOTEL BELLA GRACE
        </span>

        {/* Desktop links */}
        <div className="ml-auto hidden md:flex gap-6 items-center">
          {NAV_LINKS.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`text-[.72rem] tracking-[2px] uppercase font-semibold transition-colors duration-300 hover:text-[#D2AA00] bg-transparent border-none cursor-pointer ${scrolled ? "text-[#1C1C1C]" : "text-white/85"}`}
            >
              {label}
            </button>
          ))}
          <button
            onClick={() => scrollToSection("contact")}
            className="text-[.72rem] tracking-[2px] uppercase font-semibold px-[22px] py-2 border-[1.5px] border-[#A90023] bg-[#A90023] text-white rounded-[2px] transition-all duration-300 hover:bg-[#7d001a] cursor-pointer"
          >
            Check Availability
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="ml-auto flex md:hidden flex-col gap-[5px] p-2 bg-transparent border-none cursor-pointer"
          onClick={() => setMobileMenuOpen((p) => !p)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-px transition-all duration-300 ${scrolled ? "bg-[#1C1C1C]" : "bg-white"} ${mobileMenuOpen ? "rotate-45 translate-y-[6px]" : ""}`}
          />
          <span
            className={`block w-5 h-px transition-all duration-300 ${scrolled ? "bg-[#1C1C1C]" : "bg-white"} ${mobileMenuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-5 h-px transition-all duration-300 ${scrolled ? "bg-[#1C1C1C]" : "bg-white"} ${mobileMenuOpen ? "-rotate-45 -translate-y-[6px]" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-[999] bg-[#1C1C1C] flex flex-col items-center justify-center gap-8 transition-all duration-300 ease-in-out md:hidden ${
          mobileMenuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        {NAV_LINKS.map(({ label, id }) => (
          <button
            key={id}
            onClick={() => scrollToSection(id)}
            className="text-white text-[1.05rem] tracking-[4px] uppercase bg-transparent border-none cursor-pointer hover:text-[#D2AA00] transition-colors duration-300"
          >
            {label}
          </button>
        ))}
        <button
          onClick={() => {
            scrollToSection("contact");
            setMobileMenuOpen(false);
          }}
          className="mt-4 px-10 py-3 bg-[#A90023] text-white text-[.8rem] tracking-[2px] uppercase rounded-[2px] hover:bg-[#7d001a] transition-colors duration-300 border-none cursor-pointer"
        >
          Check Availability
        </button>
      </div>
    </>
  );
}
