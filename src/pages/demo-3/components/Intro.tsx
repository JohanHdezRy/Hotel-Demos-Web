import {
  DISPLAY,
  MONO,
  ACCENT,
  INK,
  INK_SOFT,
  MUTED,
  LINE,
} from "../data/tokens";

export default function Intro() {
  return (
    <section
      className="max-w-[1280px] mx-auto"
      style={{ padding: "clamp(72px, 12vw, 160px) clamp(20px, 5vw, 48px)" }}
    >
      {/*
        Two-column on lg+, single column on mobile/tablet.
        The <style> tag injects the lg breakpoint override since Tailwind v4
        inline grid-template-columns values can't use arbitrary responsive syntax easily.
      */}
      <style>{`
        @media (min-width: 1024px) {
          .intro-grid { grid-template-columns: 1fr 1.2fr !important; gap: 120px !important; }
        }
      `}</style>
      <div
        className="intro-grid grid gap-10"
        style={{ gridTemplateColumns: "1fr" }}
      >
        {/* Left: eyebrow + heading */}
        <div>
          <div
            className="mb-5"
            style={{
              fontFamily: MONO,
              fontSize: 11,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: MUTED,
            }}
          >
            — About Costa Mare
          </div>
          <h2
            style={{
              fontFamily: DISPLAY,
              fontWeight: 300,
              fontSize: "clamp(36px,5vw,80px)",
              letterSpacing: "-0.03em",
              lineHeight: 0.98,
              margin: 0,
              color: INK,
            }}
          >
            A quiet stretch of coast,{" "}
            <em style={{ fontStyle: "italic", color: ACCENT, fontWeight: 400 }}>
              tended for forty years.
            </em>
          </h2>
        </div>

        {/* Right: body text + stats row */}
        <div>
          {[
            "Costa Mare is a 42-suite resort set on a mile and a half of private Pacific beach, tucked between a cloud forest and the sea. Everything we do is slower than you'd expect — breakfast runs until noon, check-in happens on your schedule, and the staff-to-guest ratio sits stubbornly at 1.2 to 1.",
            "Our rooms face the water. Our kitchens source from the village. Our spa looks out over the bay. It's not a place designed to impress you in photographs; it's designed to let you forget what day it is.",
          ].map((p, i) => (
            <p
              key={i}
              style={{
                fontSize: "clamp(15px, 2vw, 17px)",
                lineHeight: 1.65,
                color: INK_SOFT,
                margin: "0 0 20px",
              }}
            >
              {p}
            </p>
          ))}
          <div
            className="grid grid-cols-3 gap-4 sm:gap-8 mt-10 pt-8"
            style={{ borderTop: `1px solid ${LINE}` }}
          >
            {[
              { num: "42", lbl: "Suites" },
              { num: "1.4km", lbl: "Private beach" },
              { num: "1987", lbl: "Year opened" },
            ].map((s) => (
              <div key={s.lbl}>
                <div
                  style={{
                    fontFamily: DISPLAY,
                    fontSize: "clamp(32px, 4vw, 44px)",
                    fontWeight: 300,
                    letterSpacing: "-0.02em",
                    lineHeight: 1,
                    marginBottom: 8,
                    color: INK,
                  }}
                >
                  {s.num}
                </div>
                <div
                  style={{
                    fontFamily: MONO,
                    fontSize: 10,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: MUTED,
                  }}
                >
                  {s.lbl}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
