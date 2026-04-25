import { useState } from "react";
import { ROOMS } from "../data/roomsData";
import {
  DISPLAY,
  MONO,
  ACCENT,
  BG,
  BG_ALT,
  INK,
  INK_SOFT,
  MUTED,
  LINE,
} from "../data/tokens";
import type { Room } from "../types";

function RoomCard({
  room: r,
  expanded,
  onToggle,
}: {
  room: Room;
  expanded: boolean;
  onToggle: () => void;
}) {
  return (
    <article
      onClick={onToggle}
      className="rounded-[20px] cursor-pointer group transition-shadow duration-300 overflow-hidden"
      style={{
        background: BG,
        boxShadow: expanded ? "0 10px 40px rgba(20,15,10,0.1)" : undefined,
      }}
    >
      {expanded ? (
        /* ── Expanded layout: full-width stacked ── */
        <>
          <div
            className="overflow-hidden flex-shrink-0"
            style={{
              height: "clamp(220px, 40vw, 460px)",
              borderRadius: "20px 20px 0 0",
            }}
          >
            <img
              src={r.img}
              alt={r.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
            />
          </div>
          <div
            className="flex flex-col gap-3"
            style={{ padding: "clamp(20px, 4vw, 36px) clamp(20px, 4vw, 48px)" }}
          >
            <div
              style={{
                fontFamily: MONO,
                fontSize: 10,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: ACCENT,
              }}
            >
              {r.tag}
            </div>
            <h3
              style={{
                fontFamily: DISPLAY,
                fontWeight: 300,
                fontSize: "clamp(26px,3vw,42px)",
                letterSpacing: "-0.02em",
                lineHeight: 1,
                margin: 0,
                color: INK,
              }}
            >
              {r.name}
            </h3>
            <div
              className="flex flex-wrap gap-4"
              style={{ fontSize: 13, color: MUTED, marginTop: 6 }}
            >
              {r.specs.map((s) => (
                <span key={s}>{s}</span>
              ))}
            </div>
            <p
              style={{
                fontSize: 15,
                lineHeight: 1.6,
                color: INK_SOFT,
                maxWidth: 640,
                margin: 0,
              }}
            >
              {r.desc}
            </p>
            <div
              style={{
                fontFamily: MONO,
                fontSize: 11,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: MUTED,
                marginTop: 6,
              }}
            >
              Close ×
            </div>

            {/* Expanded detail grid — stacked on mobile, 2-col on md+ */}
            <style>{`
              @media (min-width: 768px) {
                .room-detail-grid { grid-template-columns: 2fr 1fr !important; }
              }
            `}</style>
            <div
              className="room-detail-grid grid gap-8 md:gap-16 mt-5 pt-6"
              style={{
                borderTop: `1px solid ${LINE}`,
                gridTemplateColumns: "1fr",
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: MONO,
                    fontSize: 10,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: MUTED,
                    marginBottom: 14,
                  }}
                >
                  Included in the suite
                </div>
                <ul
                  className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 m-0 p-0"
                  style={{ listStyle: "none", fontSize: 13, color: INK_SOFT }}
                >
                  {r.amenities.map((a) => (
                    <li key={a} className="flex items-center gap-2">
                      <span style={{ color: ACCENT, fontSize: 18 }}>◦</span>
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div
                  style={{
                    fontFamily: MONO,
                    fontSize: 10,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: MUTED,
                    marginBottom: 14,
                  }}
                >
                  Booking window
                </div>
                <p
                  style={{
                    fontSize: 14,
                    color: INK_SOFT,
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  Free cancellation up to 14 days before arrival. 3-night
                  minimum. Breakfast included for two.
                </p>
              </div>
            </div>

            {/* Price + CTA in expanded mode */}
            <div
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-4 pt-6"
              style={{ borderTop: `1px solid ${LINE}` }}
            >
              <div>
                <div
                  style={{
                    fontFamily: MONO,
                    fontSize: 10,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: MUTED,
                    marginBottom: 4,
                  }}
                >
                  From
                </div>
                <div
                  style={{
                    fontFamily: DISPLAY,
                    fontSize: "clamp(32px, 4vw, 40px)",
                    fontWeight: 300,
                    letterSpacing: "-0.02em",
                    lineHeight: 1,
                    color: INK,
                  }}
                >
                  $
                  <em style={{ fontStyle: "italic", color: ACCENT }}>
                    {r.price}
                  </em>
                </div>
                <div style={{ fontSize: 12, color: MUTED, marginTop: 4 }}>
                  per night
                </div>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  document
                    .getElementById("booking")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="rounded-full text-[13px] font-medium tracking-[0.05em] border-none cursor-pointer transition-colors duration-200 self-start sm:self-auto"
                style={{
                  padding: "14px 24px",
                  background: INK,
                  color: BG,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = ACCENT;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = INK;
                }}
              >
                Reserve →
              </button>
            </div>
          </div>
        </>
      ) : (
        /* ── Collapsed layout: responsive horizontal on md+, stacked on mobile ── */
        <div
          className="flex flex-col md:grid md:items-center md:gap-10"
          style={{ padding: 20 }}
        >
          <style>{`
            @media (min-width: 768px) {
              .room-card-collapsed { grid-template-columns: 300px 1fr auto !important; }
            }
            @media (min-width: 1024px) {
              .room-card-collapsed { grid-template-columns: 360px 1fr auto !important; }
            }
          `}</style>
          <div
            className="room-card-collapsed flex flex-col md:grid md:items-center md:gap-10 w-full"
            style={{ gridTemplateColumns: "1fr" }}
          >
            {/* Image */}
            <div
              className="overflow-hidden flex-shrink-0 w-full"
              style={{
                height: "clamp(200px, 40vw, 260px)",
                borderRadius: 14,
              }}
            >
              <img
                src={r.img}
                alt={r.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
            </div>

            {/* Info */}
            <div className="flex flex-col gap-3 mt-4 md:mt-0">
              <div
                style={{
                  fontFamily: MONO,
                  fontSize: 10,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: ACCENT,
                }}
              >
                {r.tag}
              </div>
              <h3
                style={{
                  fontFamily: DISPLAY,
                  fontWeight: 300,
                  fontSize: "clamp(24px,3vw,42px)",
                  letterSpacing: "-0.02em",
                  lineHeight: 1,
                  margin: 0,
                  color: INK,
                }}
              >
                {r.name}
              </h3>
              <div
                className="flex flex-wrap gap-4"
                style={{ fontSize: 13, color: MUTED, marginTop: 4 }}
              >
                {r.specs.map((s) => (
                  <span key={s}>{s}</span>
                ))}
              </div>
              <p
                style={{
                  fontSize: 15,
                  lineHeight: 1.6,
                  color: INK_SOFT,
                  maxWidth: 640,
                  margin: 0,
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {r.desc}
              </p>
              <div
                style={{
                  fontFamily: MONO,
                  fontSize: 11,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: MUTED,
                  marginTop: 4,
                }}
              >
                Expand details +
              </div>
            </div>

            {/* Price + CTA — inline on mobile below info, right-aligned on md+ */}
            <div className="flex flex-row md:flex-col items-center md:items-end justify-between md:justify-start gap-4 md:gap-4 mt-5 md:mt-0 md:text-right">
              <div>
                <div
                  style={{
                    fontFamily: MONO,
                    fontSize: 10,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: MUTED,
                    marginBottom: 4,
                  }}
                >
                  From
                </div>
                <div
                  style={{
                    fontFamily: DISPLAY,
                    fontSize: "clamp(28px, 4vw, 40px)",
                    fontWeight: 300,
                    letterSpacing: "-0.02em",
                    lineHeight: 1,
                    color: INK,
                  }}
                >
                  $
                  <em style={{ fontStyle: "italic", color: ACCENT }}>
                    {r.price}
                  </em>
                </div>
                <div style={{ fontSize: 12, color: MUTED, marginTop: 4 }}>
                  per night
                </div>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  document
                    .getElementById("booking")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="rounded-full text-[12px] font-medium tracking-[0.05em] border-none cursor-pointer transition-colors duration-200"
                style={{
                  padding: "12px 20px",
                  background: INK,
                  color: BG,
                  flexShrink: 0,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = ACCENT;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = INK;
                }}
              >
                Reserve →
              </button>
            </div>
          </div>
        </div>
      )}
    </article>
  );
}

export default function Rooms() {
  const [expanded, setExpanded] = useState(0);

  return (
    <section
      id="rooms"
      style={{ padding: "clamp(72px, 10vw, 120px) 0", background: BG_ALT }}
    >
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
              — 01 / Rooms & Suites
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
              Twelve ways to{" "}
              <em style={{ fontStyle: "italic", color: ACCENT }}>
                face the water.
              </em>
            </h2>
          </div>
          <p
            className="md:max-w-[340px] md:text-right"
            style={{ fontSize: 15, color: MUTED, lineHeight: 1.55, margin: 0 }}
          >
            All 42 suites open onto the Pacific. Expand any card to see what's
            inside. Prices include breakfast and WiFi.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {ROOMS.map((r, i) => (
            <RoomCard
              key={i}
              room={r}
              expanded={expanded === i}
              onToggle={() => setExpanded(expanded === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
