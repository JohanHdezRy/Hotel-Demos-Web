import { useState, useEffect } from "react";
import { WARM, PINK } from "../data/tokens";

const NAV_LINKS = [
  ["#rooms", "Rooms"],
  ["#rooftop", "Rooftop"],
  ["#dining", "Food & Drink"],
  ["#blog", "Blog"],
  ["#about", "About"],
] as const;

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Lock body scroll while drawer is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-5 sm:px-8 lg:px-10 h-[60px] sm:h-[70px] bg-[#1a1a1a]/85 backdrop-blur-[8px] border-b border-[#c2956b]/10 transition-colors duration-[400ms]">
        {/* Logo */}
        <div className="font-[var(--font-roboto)] font-bold text-[1.3rem] sm:text-[1.6rem] text-white tracking-[2px] uppercase">
          El Fenn
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-7">
          {NAV_LINKS.map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="text-white/80 text-[.8rem] font-medium uppercase tracking-[1.5px] transition-colors duration-300"
              style={{ color: "rgba(255,255,255,.8)" }}
              onMouseOver={(e) => (e.currentTarget.style.color = WARM)}
              onMouseOut={(e) =>
                (e.currentTarget.style.color = "rgba(255,255,255,.8)")
              }
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Right side: CTA + hamburger */}
        <div className="flex items-center gap-3">
          <button
            className="text-white border-none px-4 sm:px-[22px] py-2.5 text-[.7rem] sm:text-[.75rem] font-semibold uppercase tracking-[1.5px] cursor-pointer transition-colors duration-300 min-h-[44px]"
            style={{ background: WARM }}
            onMouseOver={(e) => (e.currentTarget.style.background = PINK)}
            onMouseOut={(e) => (e.currentTarget.style.background = WARM)}
          >
            Book a Stay
          </button>

          {/* Hamburger — mobile only */}
          <button
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden flex flex-col justify-center items-center w-[44px] h-[44px] gap-[5px] shrink-0 cursor-pointer"
          >
            <span
              className="block w-[22px] h-[2px] bg-white transition-all duration-300 origin-center"
              style={{
                transform: menuOpen
                  ? "translateY(7px) rotate(45deg)"
                  : "none",
              }}
            />
            <span
              className="block w-[22px] h-[2px] bg-white transition-all duration-300"
              style={{
                opacity: menuOpen ? 0 : 1,
                transform: menuOpen ? "scaleX(0)" : "none",
              }}
            />
            <span
              className="block w-[22px] h-[2px] bg-white transition-all duration-300 origin-center"
              style={{
                transform: menuOpen
                  ? "translateY(-7px) rotate(-45deg)"
                  : "none",
              }}
            />
          </button>
        </div>
      </header>

      {/* Mobile drawer backdrop */}
      <div
        onClick={closeMenu}
        className="md:hidden fixed inset-0 z-[90] bg-black/60 transition-opacity duration-300"
        style={{
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
        }}
        aria-hidden="true"
      />

      {/* Mobile drawer */}
      <nav
        className="md:hidden fixed top-0 right-0 z-[95] h-full w-[280px] max-w-[85vw] flex flex-col pt-[80px] pb-8 px-8 transition-transform duration-[350ms] ease-[cubic-bezier(.25,.46,.45,.94)]"
        style={{
          background: "#1a1a1a",
          transform: menuOpen ? "translateX(0)" : "translateX(100%)",
        }}
        aria-hidden={!menuOpen}
      >
        <div className="flex flex-col gap-1">
          {NAV_LINKS.map(([href, label]) => (
            <a
              key={href}
              href={href}
              onClick={closeMenu}
              className="text-white/80 text-[.9rem] font-medium uppercase tracking-[2px] py-4 border-b border-white/8 transition-colors duration-200 min-h-[44px] flex items-center"
              style={{ color: "rgba(255,255,255,.8)" }}
              onMouseOver={(e) => (e.currentTarget.style.color = WARM)}
              onMouseOut={(e) =>
                (e.currentTarget.style.color = "rgba(255,255,255,.8)")
              }
            >
              {label}
            </a>
          ))}
        </div>

        <div
          className="mt-6 h-[1px] w-full"
          style={{ background: "rgba(194,149,107,.25)" }}
        />

        <div className="mt-6 text-[.7rem] uppercase tracking-[2px] text-center" style={{ color: WARM }}>
          Marrakech · Medina
        </div>
      </nav>
    </>
  );
}
