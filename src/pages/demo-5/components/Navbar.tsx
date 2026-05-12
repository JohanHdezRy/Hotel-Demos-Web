import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { Menu, X } from "lucide-react";
import { cn } from "../../../lib/utils";
import { useNavbarScroll } from "../../../hooks/useNavbarScroll";
import { useMobileDrawer } from "../../../hooks/useMobileDrawer";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Dishes", href: "#dishes" },
  { label: "Menu", href: "#menu" },
  { label: "Chef", href: "#chef" },
  { label: "Gallery", href: "#gallery" },
];

const DRAWER_ID = "mareterra-mobile-drawer";

export default function Navbar() {
  const isScrolled = useNavbarScroll();
  const { isOpen, toggle, close, drawerRef } =
    useMobileDrawer<HTMLDivElement>();
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        containerRef.current,
        { y: -80, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.2 },
      );
    },
    { scope: containerRef },
  );

  const handleLinkClick = close;

  return (
    <nav
      ref={containerRef}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-midnight/90 backdrop-blur-md shadow-lg shadow-midnight/50"
          : "bg-transparent",
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Left links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.slice(0, 3).map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-cream/70 hover:text-gold-mare transition-colors duration-300 font-[var(--font-jost)] text-xs tracking-widest uppercase"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Logo */}
          <a href="#hero" className="text-center flex-1 lg:flex-none">
            <span className="font-[var(--font-cormorant)] italic text-2xl text-cream tracking-wide">
              Mare e Terra
            </span>
          </a>

          {/* Right links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.slice(3).map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-cream/70 hover:text-gold-mare transition-colors duration-300 font-[var(--font-jost)] text-xs tracking-widest uppercase"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#reservations"
              className="border border-gold-mare/60 text-gold-mare hover:bg-gold-mare hover:text-midnight transition-all duration-300 px-5 py-2 text-xs tracking-widest uppercase font-[var(--font-jost)]"
            >
              Reserve
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="lg:hidden text-cream p-2"
            onClick={toggle}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            aria-controls={DRAWER_ID}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        id={DRAWER_ID}
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        aria-hidden={!isOpen}
        className={cn(
          "lg:hidden bg-midnight/95 backdrop-blur-md transition-all duration-300 overflow-hidden",
          isOpen ? "max-h-screen py-6" : "max-h-0",
        )}
      >
        <div className="flex flex-col items-center gap-6 px-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className="text-cream/70 hover:text-gold-mare transition-colors duration-300 font-[var(--font-jost)] text-sm tracking-widest uppercase"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#reservations"
            onClick={handleLinkClick}
            className="border border-gold-mare/60 text-gold-mare hover:bg-gold-mare hover:text-midnight transition-all duration-300 px-6 py-2 text-sm tracking-widest uppercase font-[var(--font-jost)]"
          >
            Reserve
          </a>
        </div>
      </div>
    </nav>
  );
}
