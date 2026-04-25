import { useState, useMemo } from "react";
import { GALLERY, GALLERY_CATS, GALLERY_LAYOUT } from "../data/servicesData";
import {
  DISPLAY,
  MONO,
  ACCENT,
  BG,
  BG_ALT,
  INK,
  INK_SOFT,
  MUTED,
} from "../data/tokens";

export default function Gallery() {
  const [cat, setCat] = useState("All");

  const items = useMemo(
    () =>
      cat === "All"
        ? GALLERY
        : GALLERY.filter((g) => g.cat.toLowerCase() === cat.toLowerCase()),
    [cat],
  );

  return (
    <section id="gallery" style={{ padding: "clamp(72px, 10vw, 120px) 0", background: BG_ALT }}>
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">

        {/* Header row — stacked on mobile, side-by-side on md+ */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 md:gap-10 mb-8 md:mb-10">
          <div>
            <div
              style={{
                fontFamily: MONO,
                fontSize: 11,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: ACCENT,
                marginBottom: 14,
              }}
            >
              — 03 / Gallery
            </div>
            <h2
              style={{
                fontFamily: DISPLAY,
                fontWeight: 300,
                fontSize: "clamp(36px,5vw,68px)",
                letterSpacing: "-0.025em",
                lineHeight: 1,
                margin: 0,
                color: INK,
              }}
            >
              Around the{" "}
              <em style={{ fontStyle: "italic", color: ACCENT }}>property.</em>
            </h2>
          </div>
          <p
            className="md:max-w-[340px] md:text-right"
            style={{ fontSize: 15, color: MUTED, lineHeight: 1.55, margin: 0 }}
          >
            Real photographs. If it's in the frame, it's on the property.
          </p>
        </div>

        {/* Filter pills */}
        <div className="flex flex-wrap gap-2 mb-8 md:mb-10">
          {GALLERY_CATS.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className="rounded-full text-[12px] tracking-[0.05em] border-none cursor-pointer transition-all duration-200"
              style={{
                padding: "10px 18px",
                background: cat === c ? INK : BG,
                color: cat === c ? BG : INK_SOFT,
                fontFamily: "inherit",
              }}
            >
              {c}
            </button>
          ))}
        </div>

        {/*
          Grid strategy:
          - Mobile (< sm): single column, uniform height cards
          - Tablet (sm–lg): 2-column uniform grid
          - Desktop (lg+): original 12-column masonry layout
        */}

        {/* Mobile / Tablet grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:hidden">
          {items.map((g, i) => (
            <div
              key={`${g.src}-${cat}-${i}-sm`}
              className="overflow-hidden rounded-[14px] relative cursor-pointer group"
              style={{ height: 240 }}
            >
              <img
                src={g.src}
                alt={g.cap}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.45))",
                }}
              />
              <span
                className="absolute bottom-3 left-3 text-white opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 z-[2]"
                style={{
                  fontFamily: MONO,
                  fontSize: 11,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                }}
              >
                {g.cap}
              </span>
            </div>
          ))}
        </div>

        {/* Desktop 12-column masonry grid */}
        <div
          className="hidden lg:grid"
          style={{
            gridTemplateColumns: "repeat(12, 1fr)",
            gridAutoRows: "100px",
            gap: 12,
          }}
        >
          {items.map((g, i) => {
            const l = GALLERY_LAYOUT[i % GALLERY_LAYOUT.length];
            return (
              <div
                key={`${g.src}-${cat}-${i}-lg`}
                className="overflow-hidden rounded-[14px] relative cursor-pointer group"
                style={{ gridColumn: `span ${l.w}`, gridRow: `span ${l.h}` }}
              >
                <img
                  src={g.src}
                  alt={g.cap}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.45))",
                  }}
                />
                <span
                  className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 z-[2]"
                  style={{
                    fontFamily: MONO,
                    fontSize: 11,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                  }}
                >
                  {g.cap}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
