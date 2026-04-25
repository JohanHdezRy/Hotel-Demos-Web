import { useLandingHero } from "../hooks/useLandingHero";
import { usePanelScroll } from "../hooks/usePanelScroll";
import { DemoPanel } from "../components/landing/DemoPanel";
import type { Demo } from "../components/landing/DemoCard";

import imgDemo1 from "../styles/img/demo1.png";
import imgDemo2 from "../styles/img/demo2.png";
import imgDemo3 from "../styles/img/demo3.png";
import imgDemo4 from "../styles/img/demo4.png";
import imgDemo5 from "../styles/img/demo5.png";
import imgDemo6 from "../styles/img/demo6.png";

const DEMOS: Demo[] = [
  {
    path: "/demo-1",
    num: "01",
    name: "Bella Grace",
    loc: "Charleston, SC · USA",
    style: "Boutique Hotel",
    tag: "Southern Elegance",
    colors: ["#A90023", "#D2AA00", "#FAF7F2"],
    img: imgDemo1,
  },
  {
    path: "/demo-2",
    num: "02",
    name: "FreshBox",
    loc: "Illinois · USA",
    style: "Fast Casual",
    tag: "Burgers & Bites",
    colors: ["#3D1200", "#F5AE00", "#FFF7E6"],
    img: imgDemo2,
  },
  {
    path: "/demo-3",
    num: "03",
    name: "Costa Mare",
    loc: "Pacific Coast · Resort",
    style: "Luxury Resort",
    tag: "Beachfront Retreat",
    colors: ["#16130e", "#c07a50", "#fefcf8"],
    img: imgDemo3,
  },
  {
    path: "/demo-4",
    num: "04",
    name: "El Fenn",
    loc: "Marrakech · Morocco",
    style: "Luxury Riad",
    tag: "Moroccan Boutique",
    colors: ["#c2956b", "#d1647a", "#1a1a1a"],
    img: imgDemo4,
  },
  {
    path: "/demo-5",
    num: "05",
    name: "Mare e Terra",
    loc: "Madrid · Spain",
    style: "Italian Restaurant",
    tag: "Pasta & Seafood",
    colors: ["#1c1410", "#c4622d", "#f5f0e8"],
    img: imgDemo5,
  },
  {
    path: "/demo-6",
    num: "06",
    name: "Blossom Café",
    loc: "Barcelona · Spain",
    style: "Specialty Coffee",
    tag: "Coffee & Brunch",
    colors: ["#1a1208", "#7a9070", "#faf6f0"],
    img: imgDemo6,
  },
];

function scrollToDemo(demoIndex: number) {
  const totalPanels = DEMOS.length + 1;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const target = ((demoIndex + 1) / totalPanels) * maxScroll;
  window.scrollTo({ top: target, behavior: "smooth" });
}

// ── Preview card grid shared between hero and clone ───────────────────────
interface PreviewGridProps {
  interactive?: boolean;
}
function PreviewGrid({ interactive = true }: PreviewGridProps) {
  return (
    <div className="grid grid-cols-3 gap-[8px] md:gap-[10px]">
      {DEMOS.map((demo, i) => (
        <button
          key={demo.path}
          onClick={interactive ? () => scrollToDemo(i) : undefined}
          className="group relative overflow-hidden rounded-[2px] border-0 p-0 bg-transparent"
          style={{
            aspectRatio: "4/3",
            cursor: interactive ? "pointer" : "default",
          }}
          aria-label={`Ver ${demo.name}`}
        >
          <img
            src={demo.img}
            alt={demo.name}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.08]"
          />
          {/* gradient overlay */}
          <div
            className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-30"
            style={{
              background:
                "linear-gradient(160deg, transparent 40%, rgba(0,0,0,0.65))",
            }}
          />
          <span className="absolute bottom-[6px] left-2 z-10 text-[8px] md:text-[9px] tracking-[0.2em] uppercase text-white/75 transition-colors duration-300 group-hover:text-gold">
            {demo.name}
          </span>
        </button>
      ))}
    </div>
  );
}

// ── Mobile CTA strip: shown instead of PreviewGrid on small screens ───────
function MobileCTAStrip({ interactive }: { interactive: boolean }) {
  return (
    <div className="grid grid-cols-2 gap-3">
      {DEMOS.map((demo, i) => (
        <button
          key={demo.path}
          onClick={interactive ? () => scrollToDemo(i) : undefined}
          className="group relative overflow-hidden rounded-[2px] border border-white/10"
          style={{
            aspectRatio: "16/9",
            cursor: interactive ? "pointer" : "default",
          }}
          aria-label={`Ver ${demo.name}`}
        >
          <img
            src={demo.img}
            alt={demo.name}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.08]"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(160deg, transparent 30%, rgba(0,0,0,0.70))",
            }}
          />
          <span className="absolute bottom-[8px] left-[8px] z-10 text-[8px] tracking-[0.18em] uppercase text-white/80">
            {demo.name}
          </span>
        </button>
      ))}
    </div>
  );
}

// Lives at the end of the scroll so the infinite loop transition is seamless.
function IntroClone() {
  return (
    <section className="relative h-screen flex flex-col justify-center overflow-hidden bg-[#0d0d0d]">
      {/* Gold radial gradient */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 70% 50%, rgba(193,157,104,0.07) 0%, transparent 70%), " +
            "radial-gradient(ellipse 40% 60% at 10% 80%, rgba(193,157,104,0.04) 0%, transparent 60%)",
        }}
      />
      {/* Thin gold accent line — hidden on mobile to avoid layout noise */}
      <div
        aria-hidden
        className="hidden sm:block absolute top-[15%] h-[70%] w-px opacity-35"
        style={{
          left: "3vw",
          background:
            "linear-gradient(to bottom, transparent, var(--color-gold) 30%, var(--color-gold) 70%, transparent)",
        }}
      />

      <div
        className="relative z-10 grid md:grid-cols-2 gap-10 md:gap-16 items-center mx-auto w-full"
        style={{ padding: "0 max(16px, 6vw)", maxWidth: "1400px" }}
      >
        {/* Left: copy */}
        <div>
          <p className="text-[10px] tracking-[0.35em] uppercase text-gold mb-6 md:mb-8">
            Portfolio · Diseño Web
          </p>
          <h1
            className="font-[var(--font-cormorant)] font-light leading-[1.05] tracking-[-0.01em] text-white mb-6 md:mb-8"
            style={{ fontSize: "clamp(2rem, 7vw, 6rem)" }}
          >
            Hotel &amp;
            <br />
            <em className="not-italic text-gold">Restaurant</em>
            <br />
            Demos
          </h1>
          <div className="h-px w-12 bg-gold mb-6 md:mb-8 opacity-70" />
          <p className="text-[13px] font-light tracking-[0.05em] leading-[1.85] text-white/45 max-w-[340px] mb-8 md:mb-10">
            Una colección de diseños web para hoteles boutique y restaurantes de
            autor. Cada demo es un proyecto funcional e independiente.
          </p>
          <div className="inline-flex items-center gap-3 text-[11px] tracking-[0.25em] uppercase text-white border border-gold/50 px-6 md:px-8 py-[14px]">
            Explorar demos
            <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
              <path
                d="M0 5h14M10 1l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* Right: preview grid — 3-col on md+, 2-col compact on mobile */}
        <div className="hidden md:block">
          <PreviewGrid interactive={false} />
        </div>
        <div className="md:hidden mt-2">
          <MobileCTAStrip interactive={false} />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[9px] tracking-[0.3em] uppercase text-white/45">
          Scroll
        </span>
        <div className="w-[22px] h-[36px] border border-gold/40 rounded-[12px] flex justify-center relative">
          <div
            className="w-[3px] h-[6px] bg-gold rounded-[2px] absolute top-[6px]"
            style={{ animation: "scrollDot 1.8s ease-in-out infinite" }}
          />
        </div>
      </div>
    </section>
  );
}

export function Landing() {
  const heroRef = useLandingHero();
  const containerRef = usePanelScroll();

  return (
    <div
      ref={containerRef}
      className="bg-[#0d0d0d] text-white overflow-x-hidden"
    >
      {/* ═══════════════════════════════════════════════════
          PANEL 0 — HERO
      ═══════════════════════════════════════════════════ */}
      <section
        ref={heroRef}
        className="lp-panel relative h-screen flex flex-col justify-center overflow-hidden bg-[#0d0d0d]"
        style={{ zIndex: 10 }}
      >
        {/* Gold radial gradient overlay */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 70% 50%, rgba(193,157,104,0.07) 0%, transparent 70%), " +
              "radial-gradient(ellipse 40% 60% at 10% 80%, rgba(193,157,104,0.04) 0%, transparent 60%)",
          }}
        />

        {/* Thin gold vertical accent line — hidden on mobile */}
        <div
          aria-hidden
          className="hidden sm:block absolute top-[15%] h-[70%] w-px opacity-35"
          style={{
            left: "3vw",
            background:
              "linear-gradient(to bottom, transparent, var(--color-gold) 30%, var(--color-gold) 70%, transparent)",
          }}
        />

        {/* Two-column content grid: single column on mobile, two on md+ */}
        <div
          className="relative z-10 grid md:grid-cols-[38%_62%] gap-8 md:gap-25 items-center mx-auto w-full"
          style={{ padding: "0 max(16px, 6vw)", maxWidth: "1500px" }}
        >
          {/* LEFT: copy */}
          <div>
            <p className="lh-label opacity-0 text-[10px] tracking-[0.35em] uppercase text-gold mb-5 md:mb-8">
              Portfolio · Diseño Web
            </p>

            <h1
              className="lh-title opacity-0 font-[var(--font-cormorant)] font-light leading-[1.05] tracking-[-0.01em] text-white mb-5 md:mb-8"
              style={{ fontSize: "clamp(2rem, 7vw, 6rem)" }}
            >
              Hotel &amp;
              <br />
              <em className="not-italic text-gold">Restaurant</em>
              <br />
              Demos
            </h1>

            <div className="lh-rule h-px w-12 bg-gold mb-5 md:mb-8 opacity-70" />

            <p className="lh-sub opacity-0 text-[13px] font-light tracking-[0.05em] leading-[1.85] text-white/45 max-w-[340px] mb-8 md:mb-10">
              Una colección de diseños web para hoteles boutique y restaurantes
              de autor. Cada demo es un proyecto funcional e independiente.
            </p>

            <button
              onClick={() => scrollToDemo(0)}
              className="lh-cta opacity-0 group inline-flex items-center gap-3 text-[11px] tracking-[0.25em] uppercase text-white border border-gold/50 px-6 md:px-8 py-[14px] bg-transparent transition-all duration-300 hover:bg-gold/10 hover:border-gold hover:text-gold"
            >
              Explorar demos
              <svg
                width="16"
                height="10"
                viewBox="0 0 16 10"
                fill="none"
                className="transition-transform duration-300 group-hover:translate-x-1.5"
              >
                <path
                  d="M0 5h14M10 1l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          {/* RIGHT col: 3×2 grid on md+, compact 2×3 grid on mobile */}
          <div className="lh-grid opacity-0 hidden md:block">
            <PreviewGrid interactive={true} />
          </div>
          <div className="lh-grid opacity-0 md:hidden mt-4">
            <MobileCTAStrip interactive={true} />
          </div>
        </div>

        {/* Scroll indicator — always visible */}
        <button
          onClick={() => scrollToDemo(0)}
          className="lh-scroll opacity-0 absolute bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 border-0 bg-transparent cursor-pointer"
          aria-label="Scroll to demos"
        >
          <span className="text-[9px] tracking-[0.3em] uppercase text-white/45">
            Scroll
          </span>
          <div className="w-[22px] h-[36px] border border-gold/40 rounded-[12px] flex justify-center relative">
            <div
              className="w-[3px] h-[6px] bg-gold rounded-[2px] absolute top-[6px]"
              style={{ animation: "scrollDot 1.8s ease-in-out infinite" }}
            />
          </div>
        </button>
      </section>

      {/* ═══════════════════════════════════════════════════
          PANELS 1–6 — DEMOS
      ═══════════════════════════════════════════════════ */}
      {DEMOS.map((demo, i) => (
        <DemoPanel
          key={demo.path}
          demo={demo}
          totalPanels={DEMOS.length}
          zIndex={(i + 2) * 10}
        />
      ))}

      {/* ═══════════════════════════════════════════════════
          CLONE — visual copy of Panel 0 for seamless loop
          Not a .lp-panel so it is NOT pinned by usePanelScroll
      ═══════════════════════════════════════════════════ */}
      <IntroClone />
    </div>
  );
}
