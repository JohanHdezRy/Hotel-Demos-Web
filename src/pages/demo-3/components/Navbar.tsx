import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavbarScroll } from "../../../hooks/useNavbarScroll";
import {
  DISPLAY,
  MONO,
  ACCENT,
  INK,
  INK_SOFT,
  BG,
  LINE,
  MUTED,
} from "../data/tokens";

export default function Navbar() {
  const scrolled = useNavbarScroll(50);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const scrollTo = (id: string) => {
    setDrawerOpen(false);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 280);
  };

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  // Close drawer on Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setDrawerOpen(false);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  const navLinks = ["rooms", "services", "gallery", "booking"] as const;

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between transition-all duration-300"
        style={{
          padding: scrolled
            ? "14px clamp(20px, 4vw, 48px)"
            : "20px clamp(20px, 4vw, 48px)",
          background: scrolled ? "rgba(254,252,248,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? `1px solid ${LINE}` : "none",
        }}
      >
        {/* Logo */}
        <div className="flex items-baseline gap-3">
          <Link
            to="/"
            style={{
              fontFamily: DISPLAY,
              fontSize: 22,
              fontWeight: 400,
              color: scrolled ? INK : "#fff",
              textDecoration: "none",
            }}
          >
            Costa <em style={{ fontStyle: "italic", color: ACCENT }}>Mare</em>
          </Link>
          <span
            className="hidden sm:inline"
            style={{
              fontFamily: MONO,
              fontSize: 10,
              letterSpacing: "0.2em",
              color: MUTED,
              textTransform: "uppercase",
            }}
          >
            Est · 1987
          </span>
        </div>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-9">
          {navLinks.map((id) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="capitalize text-[13px] tracking-[0.02em] transition-colors duration-200 bg-transparent border-none cursor-pointer"
              style={{ color: scrolled ? INK_SOFT : "rgba(255,255,255,0.9)" }}
            >
              {id === "booking"
                ? "Reserve"
                : id.charAt(0).toUpperCase() + id.slice(1)}
            </button>
          ))}
        </div>

        {/* Desktop CTA */}
        <button
          className="hidden md:flex items-center gap-2 text-[13px] font-medium rounded-full border-none cursor-pointer transition-all duration-200 hover:-translate-y-px"
          style={{ padding: "10px 20px", background: INK, color: BG }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.background = ACCENT;
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.background = INK;
          }}
        >
          Book now <span>→</span>
        </button>

        {/* Mobile right side: Book CTA + Hamburger */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={() => scrollTo("booking")}
            className="flex items-center gap-1.5 text-[12px] font-medium rounded-full border-none cursor-pointer transition-all duration-200"
            style={{ padding: "8px 16px", background: INK, color: BG }}
          >
            Book
          </button>
          <button
            onClick={() => setDrawerOpen(true)}
            aria-label="Open menu"
            className="flex flex-col justify-center items-center gap-[5px] w-10 h-10 rounded-lg border-none cursor-pointer bg-transparent"
          >
            <span
              className="block h-px w-6 transition-all duration-300"
              style={{ background: scrolled ? INK : "#fff" }}
            />
            <span
              className="block h-px w-6 transition-all duration-300"
              style={{ background: scrolled ? INK : "#fff" }}
            />
            <span
              className="block h-px w-4 transition-all duration-300"
              style={{ background: scrolled ? INK : "#fff" }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile drawer backdrop */}
      <div
        className="fixed inset-0 z-[150] md:hidden transition-opacity duration-300"
        style={{
          background: "rgba(22,19,14,0.6)",
          backdropFilter: "blur(4px)",
          opacity: drawerOpen ? 1 : 0,
          pointerEvents: drawerOpen ? "auto" : "none",
        }}
        onClick={() => setDrawerOpen(false)}
      />

      {/* Mobile drawer */}
      <div
        className="fixed top-0 right-0 bottom-0 z-[200] md:hidden flex flex-col"
        style={{
          width: "min(320px, 88vw)",
          background: BG,
          boxShadow: "-20px 0 60px rgba(22,19,14,0.22)",
          transform: drawerOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.3s cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        {/* Drawer header */}
        <div
          className="flex items-center justify-between"
          style={{
            padding: "20px 24px",
            borderBottom: `1px solid ${LINE}`,
          }}
        >
          <span
            style={{
              fontFamily: DISPLAY,
              fontSize: 20,
              fontWeight: 400,
              color: INK,
            }}
          >
            Costa <em style={{ fontStyle: "italic", color: ACCENT }}>Mare</em>
          </span>
          <button
            onClick={() => setDrawerOpen(false)}
            aria-label="Close menu"
            className="flex items-center justify-center w-9 h-9 rounded-full border-none cursor-pointer transition-colors duration-200"
            style={{ background: "oklch(0.93 0.02 80)", color: INK }}
          >
            ✕
          </button>
        </div>

        {/* Drawer links */}
        <nav className="flex flex-col flex-1" style={{ padding: "12px 0" }}>
          {navLinks.map((id, idx) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="flex items-center justify-between text-left w-full border-none cursor-pointer transition-colors duration-200"
              style={{
                padding: "18px 24px",
                background: "transparent",
                fontFamily: DISPLAY,
                fontSize: 26,
                fontWeight: 300,
                letterSpacing: "-0.02em",
                color: INK,
                borderBottom:
                  idx < navLinks.length - 1 ? `1px solid ${LINE}` : "none",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background =
                  "oklch(0.97 0.02 80)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background =
                  "transparent";
              }}
            >
              <span>
                {id === "booking"
                  ? "Reserve"
                  : id.charAt(0).toUpperCase() + id.slice(1)}
              </span>
              <span style={{ color: ACCENT, fontSize: 20 }}>→</span>
            </button>
          ))}
        </nav>

        {/* Drawer footer CTA */}
        <div style={{ padding: "20px 24px", borderTop: `1px solid ${LINE}` }}>
          <button
            onClick={() => scrollTo("booking")}
            className="flex items-center justify-center gap-2 w-full rounded-xl text-[14px] font-medium tracking-[0.04em] border-none cursor-pointer transition-all duration-200"
            style={{ padding: "16px", background: INK, color: BG }}
          >
            Book now →
          </button>
          <p
            className="text-center mt-3"
            style={{
              fontFamily: MONO,
              fontSize: 10,
              letterSpacing: "0.12em",
              color: MUTED,
              textTransform: "uppercase",
            }}
          >
            Best-rate guarantee · Free cancel
          </p>
        </div>
      </div>
    </>
  );
}
