import { WARM, BLACK } from "../data/tokens";

export default function Footer() {
  return (
    <footer
      className="px-5 sm:px-10 pt-12 sm:pt-[60px] pb-6 sm:pb-[30px] flex flex-col items-center gap-5"
      style={{ background: BLACK, color: "rgba(255,255,255,.6)" }}
    >
      {/* Logo */}
      <div className="text-white text-[1.2rem] sm:text-[1.4rem] font-bold tracking-[2px] uppercase">
        El Fenn
      </div>

      {/* Address */}
      <div className="text-center text-[.82rem] sm:text-[.85rem] leading-[1.9]">
        2 Derb Moulay Abdullah Ben Hezzian
        <br />
        Bab El Ksour, Medina
        <br />
        Marrakech 40000, Morocco
        <br />
        +212 524 44 1220
      </div>

      {/* Social links */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
        {["Facebook", "Instagram", "Pinterest", "TripAdvisor"].map((s) => (
          <button
            key={s}
            type="button"
            aria-label={`Follow on ${s}`}
            className="text-[.75rem] sm:text-[.8rem] uppercase tracking-[1.5px] transition-colors duration-300 min-h-[44px] flex items-center bg-transparent border-0 p-0 cursor-pointer"
            style={{ color: "rgba(255,255,255,.7)" }}
            onMouseOver={(e) => (e.currentTarget.style.color = WARM)}
            onMouseOut={(e) =>
              (e.currentTarget.style.color = "rgba(255,255,255,.7)")
            }
          >
            {s}
          </button>
        ))}
      </div>

      {/* Nav links */}
      <div className="flex gap-4 sm:gap-6 flex-wrap justify-center">
        {[
          "Find Us",
          "Rooms",
          "Food & Drink",
          "Rooftop Bar",
          "Spa",
          "Boutique",
          "Privacy",
        ].map((l) => (
          <button
            key={l}
            type="button"
            className="text-[.72rem] sm:text-[.75rem] uppercase tracking-[1px] transition-colors duration-300 min-h-[44px] flex items-center bg-transparent border-0 p-0 cursor-pointer"
            style={{ color: "rgba(255,255,255,.65)" }}
            onMouseOver={(e) => (e.currentTarget.style.color = "#fff")}
            onMouseOut={(e) =>
              (e.currentTarget.style.color = "rgba(255,255,255,.65)")
            }
          >
            {l}
          </button>
        ))}
      </div>

      {/* Copyright */}
      <div
        className="text-[.72rem] sm:text-[.75rem] mt-3 sm:mt-5 text-center"
        style={{ color: "rgba(255,255,255,.55)" }}
      >
        © 2026 El Fenn — Demo Concept Only
      </div>
    </footer>
  );
}
