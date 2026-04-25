import { Link } from "react-router-dom";
import type { Demo } from "./DemoCard";

interface Props {
  demo: Demo;
  totalPanels?: number;
  zIndex?: number;
}

export function DemoPanel({ demo, totalPanels = 6, zIndex }: Props) {
  const padded = String(totalPanels).padStart(2, "0");

  return (
    <section
      className="lp-panel relative h-screen w-full overflow-hidden"
      style={zIndex !== undefined ? { zIndex } : undefined}
    >
      {/*
        ── MOBILE layout (< md): image fills top 60vh, info card below ─────
        ── TABLET/DESKTOP (md+): classic sidebar-left + image-right flex ───
      */}

      {/* ── DESKTOP: sidebar + image (flex row, md+) ─────────────────── */}
      <div className="hidden md:flex h-full w-full">
        {/* Sidebar */}
        <aside
          className="relative z-20 flex flex-col py-12 px-8 shrink-0 bg-black h-full"
          style={{ width: "clamp(220px, 24%, 320px)" }}
        >
          <div className="flex-grow">
            {/* Panel counter */}
            <p className="text-[10px] text-white/20 uppercase tracking-[0.2em] mb-10">
              {demo.num} / {padded}
            </p>

            {/* Demo name + tag */}
            <div className="mb-10">
              <h2
                className="font-[var(--font-cormorant)] italic leading-tight text-white/90 mb-3"
                style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)" }}
              >
                {demo.name}
              </h2>
              <p className="text-[13px] text-stone-400 uppercase tracking-[0.15em]">
                {demo.tag}
              </p>
            </div>

            {/* Brand palette */}
            <div>
              <p className="text-[10px] text-stone-500 mb-4 uppercase tracking-[0.15em]">
                Brand Palette
              </p>
              <div className="flex gap-3">
                {demo.colors.map((c, i) => (
                  <div
                    key={i}
                    className="w-6 h-6 rounded-full border border-white/10"
                    style={{ background: c }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* View Demo CTA */}
          <Link
            to={demo.path}
            className="w-full py-4 px-6 text-[12px] tracking-[0.15em] uppercase transition-opacity duration-300 hover:opacity-80 flex items-center justify-center gap-2 text-white"
            style={{ background: demo.colors[0] }}
          >
            View Demo
            <span className="text-sm leading-none">→</span>
          </Link>
        </aside>

        {/* Main image area */}
        <main className="relative flex-1 h-full">
          <img
            src={demo.img}
            alt={demo.name}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/10 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
        </main>

        {/* Footer — positioned relative to the image area */}
        <footer
          className="absolute bottom-8 flex justify-between items-center px-8 lg:px-12 text-stone-400 text-[10px] uppercase tracking-[0.15em] z-10"
          style={{ left: "clamp(220px, 24%, 320px)", right: 0 }}
        >
          <span>
            {demo.name} · {demo.style}
          </span>
          <ul className="flex gap-4 lg:gap-8">
            <li>{demo.loc}</li>
            <li className="hidden lg:list-item">{demo.tag}</li>
            <li>Contact</li>
          </ul>
        </footer>
      </div>

      {/* ── MOBILE layout (< md): image top, info card bottom ────────── */}
      <div className="flex md:hidden flex-col h-full w-full">
        {/* Image — top 60% of screen */}
        <div className="relative flex-shrink-0" style={{ height: "60vh" }}>
          <img
            src={demo.img}
            alt={demo.name}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/10 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

          {/* Panel counter badge */}
          <div className="absolute top-5 left-4 text-[10px] text-white/40 uppercase tracking-[0.2em]">
            {demo.num} / {padded}
          </div>
        </div>

        {/* Info card — fills remaining height */}
        <div
          className="flex flex-col justify-between flex-1 px-5 py-6 bg-black"
          style={{ minHeight: 0 }}
        >
          <div>
            {/* Name + tag */}
            <div className="mb-4">
              <h2
                className="font-[var(--font-cormorant)] italic leading-tight text-white/90 mb-1"
                style={{ fontSize: "clamp(1.6rem, 6vw, 2rem)" }}
              >
                {demo.name}
              </h2>
              <p className="text-[11px] text-stone-400 uppercase tracking-[0.15em]">
                {demo.tag}
              </p>
            </div>

            {/* Meta row */}
            <p className="text-[10px] text-stone-500 uppercase tracking-[0.12em] mb-4">
              {demo.style} · {demo.loc}
            </p>

            {/* Brand palette */}
            <div className="flex items-center gap-3">
              <span className="text-[9px] text-stone-600 uppercase tracking-[0.15em]">
                Palette
              </span>
              <div className="flex gap-2">
                {demo.colors.map((c, i) => (
                  <div
                    key={i}
                    className="w-5 h-5 rounded-full border border-white/10"
                    style={{ background: c }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* CTA button */}
          <Link
            to={demo.path}
            className="w-full py-4 px-6 text-[12px] tracking-[0.15em] uppercase transition-opacity duration-300 active:opacity-70 flex items-center justify-center gap-2 text-white mt-4"
            style={{ background: demo.colors[0] }}
          >
            View Demo
            <span className="text-sm leading-none">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
