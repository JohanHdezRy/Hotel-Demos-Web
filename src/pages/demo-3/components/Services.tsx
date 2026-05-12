import { SERVICES } from "../data/servicesData";
import { DISPLAY, MONO, ACCENT, INK, MUTED } from "../data/tokens";

export default function Services() {
  return (
    <section id="services" style={{ padding: "clamp(72px, 10vw, 120px) 0" }}>
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section header — stacked on mobile, side-by-side on md+ */}
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
              — 02 / What's here
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
              Six{" "}
              <em style={{ fontStyle: "italic", color: ACCENT }}>
                slow pursuits
              </em>
              <br />
              for the week.
            </h2>
          </div>
          <p
            className="md:max-w-[340px] md:text-right"
            style={{ fontSize: 15, color: MUTED, lineHeight: 1.55, margin: 0 }}
          >
            A spa over the bay, a kitchen sourced from the village, a bar that
            watches the sun go down.
          </p>
        </div>

        {/*
          Grid strategy:
          - Mobile: single column, uniform 280px height
          - sm: 2 columns, uniform height
          - lg+: original 3-column editorial grid with span features
        */}

        {/* Mobile / Tablet uniform grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:hidden">
          {SERVICES.map((s) => (
            <article
              key={s.id}
              className="relative overflow-hidden rounded-[20px] group cursor-pointer"
              style={{ height: "clamp(240px, 40vw, 320px)" }}
            >
              <img
                src={s.img}
                alt={s.name}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 25%, rgba(12,9,5,0.78) 100%)",
                }}
              />
              <div
                className="absolute bottom-0 left-0 right-0 flex flex-col gap-1"
                style={{ padding: 20 }}
              >
                <div className="flex items-center gap-3 mb-1">
                  <span
                    style={{
                      fontFamily: MONO,
                      fontSize: 10,
                      letterSpacing: "0.2em",
                      color: "rgba(255,255,255,0.5)",
                      textTransform: "uppercase",
                    }}
                  >
                    {s.num}
                  </span>
                  <span
                    style={{
                      fontFamily: MONO,
                      fontSize: 10,
                      letterSpacing: "0.15em",
                      color: ACCENT,
                      textTransform: "uppercase",
                    }}
                  >
                    {s.kicker}
                  </span>
                </div>
                <h3
                  style={{
                    fontFamily: DISPLAY,
                    fontWeight: 300,
                    fontSize: 26,
                    letterSpacing: "-0.02em",
                    lineHeight: 1,
                    margin: 0,
                    color: "#fff",
                  }}
                >
                  {s.name} <em style={{ fontStyle: "italic" }}>{s.em}</em>
                </h3>
                <div className="flex items-center justify-between mt-2">
                  <span
                    style={{
                      fontFamily: MONO,
                      fontSize: 10,
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "rgba(255,255,255,0.55)",
                    }}
                  >
                    {s.hours}
                  </span>
                  <span className="text-white/50 group-hover:text-white/90 transition-colors duration-200">
                    →
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Desktop editorial grid */}
        <div
          className="hidden lg:grid"
          style={{
            gridTemplateColumns: "repeat(3, 1fr)",
            gridAutoRows: "300px",
            gap: 12,
          }}
        >
          {SERVICES.map((s) => (
            <article
              key={s.id}
              className="relative overflow-hidden rounded-[20px] group cursor-pointer"
              style={{
                gridColumn: s.feature ? "span 2" : "span 1",
                gridRow: s.feature ? "span 2" : "span 1",
              }}
            >
              <img
                src={s.img}
                alt={s.name}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 25%, rgba(12,9,5,0.78) 100%)",
                }}
              />
              <div
                className="absolute bottom-0 left-0 right-0 flex flex-col gap-1"
                style={{ padding: s.feature ? 36 : 24 }}
              >
                <div className="flex items-center gap-3 mb-1">
                  <span
                    style={{
                      fontFamily: MONO,
                      fontSize: 10,
                      letterSpacing: "0.2em",
                      color: "rgba(255,255,255,0.5)",
                      textTransform: "uppercase",
                    }}
                  >
                    {s.num}
                  </span>
                  <span
                    style={{
                      fontFamily: MONO,
                      fontSize: 10,
                      letterSpacing: "0.15em",
                      color: ACCENT,
                      textTransform: "uppercase",
                    }}
                  >
                    {s.kicker}
                  </span>
                </div>
                <h3
                  style={{
                    fontFamily: DISPLAY,
                    fontWeight: 300,
                    fontSize: s.feature ? 48 : 30,
                    letterSpacing: "-0.02em",
                    lineHeight: 1,
                    margin: 0,
                    color: "#fff",
                  }}
                >
                  {s.name} <em style={{ fontStyle: "italic" }}>{s.em}</em>
                </h3>
                {s.feature && (
                  <p
                    style={{
                      fontSize: 15,
                      color: "rgba(255,255,255,0.72)",
                      lineHeight: 1.55,
                      margin: "8px 0 0",
                      maxWidth: 460,
                    }}
                  >
                    {s.desc}
                  </p>
                )}
                <div className="flex items-center justify-between mt-3">
                  <span
                    style={{
                      fontFamily: MONO,
                      fontSize: 10,
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "rgba(255,255,255,0.55)",
                    }}
                  >
                    {s.hours}
                  </span>
                  <span className="text-white/50 group-hover:text-white/90 transition-colors duration-200">
                    →
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
