import { HERO_SLIDES } from "../data/imageData";
import { DISPLAY, MONO, INK } from "../data/tokens";
import BookingPanel from "./BookingPanel";
import type { BookingData } from "../hooks/useBookingData";
import { useHeroAutoplay } from "../hooks/useHeroAutoplay";

type Props = { data: BookingData };

export default function Hero({ data }: Props) {
  const {
    index: idx,
    goTo: go,
    next,
    prev,
  } = useHeroAutoplay(HERO_SLIDES.length, 6000);

  return (
    <section
      className="relative overflow-hidden"
      style={{ height: "100svh", minHeight: 560, maxHeight: 900 }}
    >
      {HERO_SLIDES.map((src, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-[1200ms]"
          style={{ opacity: i === idx ? 1 : 0 }}
        >
          <img
            src={src}
            alt=""
            role="presentation"
            loading={i === 0 ? "eager" : "lazy"}
            decoding="async"
            fetchPriority={i === 0 ? "high" : "auto"}
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg,rgba(0,0,0,.35) 0%,rgba(0,0,0,0) 40%,rgba(0,0,0,.65) 100%)",
            }}
          />
        </div>
      ))}

      {/* Text block — responsive positioning */}
      <div
        className="absolute z-[2] text-white"
        style={{
          left: "clamp(20px, 5vw, 48px)",
          right: "clamp(20px, 5vw, 48px)",
          top: "50%",
          transform: "translateY(-50%)",
          maxWidth: 600,
        }}
      >
        <div
          className="flex items-center gap-3 mb-5"
          style={{
            fontFamily: MONO,
            fontSize: 11,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            opacity: 0.9,
          }}
        >
          <span
            style={{
              width: 28,
              height: 1,
              background: "currentColor",
              display: "inline-block",
              flexShrink: 0,
            }}
          />
          Pacific coast · 42 suites
        </div>
        <h1
          style={{
            fontFamily: DISPLAY,
            fontWeight: 300,
            fontSize: "clamp(44px,10vw,100px)",
            letterSpacing: "-0.035em",
            lineHeight: 0.92,
            margin: 0,
          }}
        >
          Slow mornings,
          <br />
          <em style={{ fontStyle: "italic", fontWeight: 400 }}>
            golden hours.
          </em>
        </h1>

        {/* Stats row — hidden on very small screens to avoid crowding */}
        <div
          className="hidden sm:flex gap-8 mt-8"
          style={{
            fontFamily: MONO,
            fontSize: 11,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            opacity: 0.85,
          }}
        >
          {[
            { val: "—17°", lbl: "Latitude" },
            { val: "28°", lbl: "Avg. April" },
            { val: "1.4km", lbl: "Private beach" },
          ].map((m) => (
            <span key={m.lbl}>
              <strong
                style={{
                  display: "block",
                  fontFamily: DISPLAY,
                  fontSize: 22,
                  fontWeight: 400,
                  letterSpacing: 0,
                  marginBottom: 2,
                  textTransform: "none",
                  fontStyle: "italic",
                }}
              >
                {m.val}
              </strong>
              {m.lbl}
            </span>
          ))}
        </div>

        {/* Mobile CTA buttons — only visible on small screens */}
        <div className="flex flex-col sm:hidden gap-3 mt-8">
          <button
            onClick={() =>
              document
                .getElementById("booking")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="flex items-center justify-center gap-2 w-full rounded-xl text-[14px] font-medium tracking-[0.04em] border-none cursor-pointer"
            style={{ padding: "16px", background: "#fff", color: INK }}
          >
            Reserve a suite →
          </button>
          <button
            onClick={() =>
              document
                .getElementById("rooms")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="flex items-center justify-center gap-2 w-full rounded-xl text-[14px] font-medium tracking-[0.04em] cursor-pointer"
            style={{
              padding: "16px",
              background: "transparent",
              border: "1px solid rgba(255,255,255,0.5)",
              color: "#fff",
            }}
          >
            View rooms
          </button>
        </div>
      </div>

      {/* BookingPanel — shown only on lg+ (panel handles its own visibility) */}
      <BookingPanel data={data} />

      {/* Dots — repositioned for mobile */}
      <div
        className="absolute z-[3] flex gap-2.5"
        style={{
          bottom: "clamp(20px, 4vw, 48px)",
          left: "clamp(20px, 5vw, 48px)",
        }}
      >
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            className="h-0.5 border-none cursor-pointer transition-all duration-300"
            style={{
              width: 28,
              background: i === idx ? "#fff" : "rgba(255,255,255,0.4)",
            }}
          />
        ))}
      </div>

      {/* Arrows — hidden on mobile (tap dots instead) */}
      <div
        className="absolute z-[3] hidden sm:flex gap-2"
        style={{
          bottom: "clamp(20px, 4vw, 40px)",
          right: "clamp(20px, 5vw, 48px)",
        }}
      >
        {["‹", "›"].map((ch, i) => (
          <button
            key={ch}
            onClick={() => (i === 0 ? prev() : next())}
            aria-label={i === 0 ? "previous" : "next"}
            className="flex items-center justify-center rounded-full border text-white text-lg cursor-pointer transition-all duration-200"
            style={{
              width: 48,
              height: 48,
              borderColor: "rgba(255,255,255,0.5)",
              background: "transparent",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "#fff";
              el.style.color = INK;
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "transparent";
              el.style.color = "#fff";
            }}
          >
            {ch}
          </button>
        ))}
      </div>

      {/* Slide counter — desktop only */}
      <div
        className="absolute z-[3] text-white/70 hidden lg:block"
        style={{
          top: "50%",
          right: 48,
          transform: "translateY(-50%) rotate(180deg)",
          writingMode: "vertical-rl",
          fontFamily: MONO,
          fontSize: 11,
          letterSpacing: "0.2em",
        }}
      >
        {String(idx + 1).padStart(2, "0")} /{" "}
        {String(HERO_SLIDES.length).padStart(2, "0")}
      </div>
    </section>
  );
}
