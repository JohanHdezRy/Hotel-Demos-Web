import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
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
import { addDays, fmtDate, fmtWeekday } from "../hooks/useDateHelpers";
import MiniCalendar from "./MiniCalendar";
import type { BookingData, OpenField } from "../hooks/useBookingData";

type Props = { data: BookingData };

export default function BookingSection({ data }: Props) {
  const [open, setOpen] = useState<OpenField>(null);
  const [pickerPos, setPickerPos] = useState<{
    top: number;
    left: number | undefined;
    right: number | undefined;
  }>({ top: 0, left: 0, right: undefined });

  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const el = document.getElementById("booking-section-form");
      if (el && !el.contains(e.target as Node)) setOpen(null);
    };
    if (open) document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  const openAt = (
    field: OpenField,
    btn: HTMLButtonElement,
    align: "left" | "right" = "left",
  ) => {
    const r = btn.getBoundingClientRect();
    const isMobile = window.innerWidth < 768;

    if (isMobile) {
      // On mobile, show calendar anchored to left edge with safe margin
      setPickerPos({
        top: r.bottom + 8,
        left: 16,
        right: undefined,
      });
    } else {
      setPickerPos({
        top: r.bottom + 8,
        left: align === "left" ? r.left : undefined,
        right:
          align === "right" ? window.innerWidth - r.right : undefined,
      });
    }
    setOpen((f) => (f === field ? null : field));
  };

  const pickCheckIn = (d: Date) => {
    data.setCI(d);
    if (data.checkOut <= d) data.setCO(addDays(d, 1));
    setOpen(null);
  };
  const pickCheckOut = (d: Date) => {
    if (d > data.checkIn) {
      data.setCO(d);
      setOpen(null);
    }
  };

  const cancelDate = addDays(data.checkIn, -14);
  const cancelStr = cancelDate.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });

  // Shared field button component used for both date fields
  const FieldBtn = ({
    label,
    mainVal,
    hint,
    isOpen,
    onClick,
  }: {
    label: string;
    mainVal: string;
    hint: string;
    isOpen: boolean;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  }) => (
    <button
      onClick={onClick}
      className="flex flex-col gap-1 text-left rounded-xl cursor-pointer transition-all w-full"
      style={{
        padding: "14px 16px",
        background: BG,
        border: isOpen ? `1px solid ${ACCENT}` : "1px solid transparent",
      }}
    >
      <span
        style={{
          fontFamily: MONO,
          fontSize: 10,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: MUTED,
        }}
      >
        {label}
      </span>
      <span
        style={{
          fontFamily: DISPLAY,
          fontSize: 18,
          color: INK,
          letterSpacing: "-0.01em",
        }}
      >
        {mainVal}
      </span>
      <span style={{ fontSize: 11, color: MUTED }}>{hint}</span>
    </button>
  );

  return (
    <section id="booking" style={{ padding: "clamp(72px, 10vw, 120px) 0" }}>
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">

        {/* Two-column on lg+, stacked on mobile/tablet */}
        <div
          className="grid gap-12 lg:gap-20 items-start"
          style={{ gridTemplateColumns: "1fr" }}
        >
          <style>{`
            @media (min-width: 1024px) {
              .booking-grid { grid-template-columns: 1fr 1fr !important; }
            }
          `}</style>
          <div
            className="booking-grid grid gap-12 lg:gap-20 items-start"
            style={{ gridTemplateColumns: "1fr" }}
          >
            {/* Left col — copy & perks */}
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
                — 04 / Reserve
              </div>
              <h2
                style={{
                  fontFamily: DISPLAY,
                  fontWeight: 300,
                  fontSize: "clamp(36px,5vw,72px)",
                  letterSpacing: "-0.025em",
                  lineHeight: 1,
                  margin: "0 0 24px",
                  color: INK,
                }}
              >
                Book direct.{" "}
                <em style={{ fontStyle: "italic", color: ACCENT }}>
                  Always cheaper.
                </em>
              </h2>
              <p
                style={{
                  fontSize: "clamp(14px, 2vw, 16px)",
                  color: INK_SOFT,
                  lineHeight: 1.65,
                  margin: "0 0 32px",
                  maxWidth: 480,
                }}
              >
                We'll always beat any price you find on a third-party site, and
                throw in breakfast. Booking direct means you're talking to us —
                not a call center.
              </p>
              <div
                className="flex flex-col gap-4 mt-8 pt-8"
                style={{ borderTop: `1px solid ${LINE}` }}
              >
                {[
                  {
                    title: "Best-rate guarantee",
                    desc: "Find it cheaper anywhere else and we'll match plus 10%.",
                  },
                  {
                    title: "Free cancellation",
                    desc: "Full refund up to 14 days before arrival. No questions.",
                  },
                  {
                    title: "No booking fees",
                    desc: "What you see is what you pay. Taxes shown upfront.",
                  },
                  {
                    title: "Breakfast on us",
                    desc: "Included for two in any suite, booked direct.",
                  },
                ].map((g) => (
                  <div key={g.title} className="flex items-start gap-4">
                    <div
                      className="flex items-center justify-center flex-shrink-0 rounded-full"
                      style={{
                        width: 36,
                        height: 36,
                        background: "oklch(0.95 0.04 28)",
                        color: ACCENT,
                        fontSize: 14,
                        fontFamily: DISPLAY,
                        fontStyle: "italic",
                      }}
                    >
                      ✓
                    </div>
                    <div>
                      <strong
                        className="block font-medium mb-0.5"
                        style={{ fontSize: 15, color: INK }}
                      >
                        {g.title}
                      </strong>
                      <span
                        style={{ fontSize: 13, color: MUTED, lineHeight: 1.5 }}
                      >
                        {g.desc}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right col — booking form */}
            <div
              id="booking-section-form"
              ref={formRef}
              className="flex flex-col gap-4 rounded-[20px] lg:sticky lg:top-24"
              style={{
                background: BG_ALT,
                padding: "clamp(20px, 4vw, 40px)",
              }}
            >
              <h3
                style={{
                  fontFamily: DISPLAY,
                  fontSize: "clamp(24px, 3vw, 32px)",
                  fontWeight: 300,
                  letterSpacing: "-0.02em",
                  margin: "0 0 8px",
                  color: INK,
                }}
              >
                Reserve a suite
              </h3>

              {/* Date row — 2 cols on all sizes */}
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                <FieldBtn
                  label="Check-in"
                  mainVal={fmtDate(data.checkIn)}
                  hint={fmtWeekday(data.checkIn)}
                  isOpen={open === "checkin"}
                  onClick={(e) => openAt("checkin", e.currentTarget)}
                />
                <FieldBtn
                  label="Check-out"
                  mainVal={fmtDate(data.checkOut)}
                  hint={`${data.nights} ${data.nights === 1 ? "night" : "nights"}`}
                  isOpen={open === "checkout"}
                  onClick={(e) => openAt("checkout", e.currentTarget, "right")}
                />
              </div>

              {/* Guests + Room — 2 cols on sm+, stacked on xs */}
              <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 gap-2 sm:gap-3">
                {/* Guests */}
                <button
                  onClick={(e) => openAt("guests", e.currentTarget)}
                  className="flex flex-col gap-1 text-left rounded-xl cursor-pointer transition-all"
                  style={{
                    padding: "14px 16px",
                    background: BG,
                    border:
                      open === "guests"
                        ? `1px solid ${ACCENT}`
                        : "1px solid transparent",
                  }}
                >
                  <span
                    style={{
                      fontFamily: MONO,
                      fontSize: 10,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: MUTED,
                    }}
                  >
                    Guests
                  </span>
                  <span
                    style={{
                      fontFamily: DISPLAY,
                      fontSize: 18,
                      color: INK,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {data.adults} adult{data.adults !== 1 ? "s" : ""}
                  </span>
                </button>

                {/* Room type */}
                <button
                  onClick={(e) => openAt("room", e.currentTarget, "right")}
                  className="flex flex-col gap-1 text-left rounded-xl cursor-pointer transition-all"
                  style={{
                    padding: "14px 16px",
                    background: BG,
                    border:
                      open === "room"
                        ? `1px solid ${ACCENT}`
                        : "1px solid transparent",
                  }}
                >
                  <span
                    style={{
                      fontFamily: MONO,
                      fontSize: 10,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: MUTED,
                    }}
                  >
                    Room type
                  </span>
                  <span
                    style={{
                      fontFamily: DISPLAY,
                      fontSize: 15,
                      color: INK,
                      letterSpacing: "-0.01em",
                      lineHeight: 1.2,
                    }}
                  >
                    {data.room.name}
                  </span>
                </button>
              </div>

              {/* Availability badge */}
              <div
                className="flex items-center gap-2.5 rounded-xl"
                style={{
                  padding: "14px 16px",
                  background: "oklch(0.96 0.03 150)",
                  fontSize: 13,
                  color: "oklch(0.4 0.08 155)",
                }}
              >
                <span
                  className="w-2 h-2 rounded-full flex-shrink-0 animate-pulse"
                  style={{ background: "oklch(0.65 0.12 155)" }}
                />
                <span>
                  8 {data.room.name}s available · {fmtDate(data.checkIn)} –{" "}
                  {fmtDate(data.checkOut)}
                </span>
              </div>

              {/* Price breakdown */}
              <div
                className="flex flex-col gap-2 rounded-xl"
                style={{ padding: "16px", background: BG, fontSize: 13 }}
              >
                {[
                  {
                    label: `${data.room.name} × ${data.nights} ${data.nights === 1 ? "night" : "nights"}`,
                    value: `$${data.subtotal.toLocaleString()}`,
                  },
                  {
                    label: "Taxes & resort fee",
                    value: `$${data.tax.toLocaleString()}`,
                  },
                  { label: "Breakfast for 2", value: "Included", green: true },
                ].map((l) => (
                  <div
                    key={l.label}
                    className="flex justify-between gap-2"
                    style={{ color: l.green ? "oklch(0.55 0.12 155)" : MUTED }}
                  >
                    <span>{l.label}</span>
                    <span className="flex-shrink-0">{l.value}</span>
                  </div>
                ))}
                <div
                  className="flex justify-between items-baseline pt-2.5 mt-1"
                  style={{
                    borderTop: `1px solid ${LINE}`,
                    fontFamily: DISPLAY,
                    fontSize: "clamp(18px, 3vw, 22px)",
                    color: INK,
                  }}
                >
                  <span
                    style={{
                      fontFamily: MONO,
                      fontSize: 13,
                      letterSpacing: "0.1em",
                      color: MUTED,
                    }}
                  >
                    TOTAL
                  </span>
                  <span>${data.total.toLocaleString()}</span>
                </div>
              </div>

              {/* CTA */}
              <button
                className="flex items-center justify-center gap-2.5 w-full rounded-xl text-[14px] font-medium tracking-[0.05em] border-none cursor-pointer transition-all duration-200"
                style={{ padding: 18, background: INK, color: BG }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = ACCENT;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = INK;
                }}
              >
                Confirm reservation <span>→</span>
              </button>

              <div
                className="text-center"
                style={{
                  fontFamily: MONO,
                  fontSize: 11,
                  letterSpacing: "0.1em",
                  color: MUTED,
                }}
              >
                No payment due today · Free cancellation until {cancelStr}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Portaled pickers */}
      {open &&
        createPortal(
          <div
            style={{
              position: "fixed",
              top: pickerPos.top,
              left: pickerPos.left,
              right: pickerPos.right,
              zIndex: 1000,
            }}
          >
            {(open === "checkin" || open === "checkout") && (
              <MiniCalendar
                checkIn={data.checkIn}
                checkOut={data.checkOut}
                mode={open}
                onSelect={open === "checkin" ? pickCheckIn : pickCheckOut}
                onClose={() => setOpen(null)}
              />
            )}
            {open === "guests" && (
              <div
                style={{
                  background: BG,
                  borderRadius: 14,
                  border: `1px solid ${LINE}`,
                  boxShadow: "0 16px 40px rgba(20,15,10,0.18)",
                  padding: 20,
                  width: "min(220px, calc(100vw - 32px))",
                }}
              >
                <div
                  style={{
                    fontFamily: MONO,
                    fontSize: 9,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: MUTED,
                    marginBottom: 16,
                  }}
                >
                  Adults
                </div>
                <div className="flex items-center justify-between">
                  <button
                    onClick={() =>
                      data.setAdults(Math.max(1, data.adults - 1))
                    }
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 10,
                      border: `1px solid ${LINE}`,
                      background: "transparent",
                      cursor: "pointer",
                      fontSize: 22,
                      color: INK,
                    }}
                  >
                    −
                  </button>
                  <span
                    style={{
                      fontFamily: DISPLAY,
                      fontSize: 32,
                      fontWeight: 300,
                      color: INK,
                    }}
                  >
                    {data.adults}
                  </span>
                  <button
                    onClick={() =>
                      data.setAdults(Math.min(10, data.adults + 1))
                    }
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 10,
                      border: `1px solid ${LINE}`,
                      background: "transparent",
                      cursor: "pointer",
                      fontSize: 22,
                      color: INK,
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
            )}
            {open === "room" && (
              <div
                style={{
                  background: BG,
                  borderRadius: 14,
                  border: `1px solid ${LINE}`,
                  boxShadow: "0 16px 40px rgba(20,15,10,0.18)",
                  padding: 8,
                  width: "min(280px, calc(100vw - 32px))",
                }}
              >
                {ROOMS.map((r, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      data.setRoomIdx(i);
                      setOpen(null);
                    }}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "100%",
                      padding: "12px 14px",
                      border: "none",
                      borderRadius: 8,
                      cursor: "pointer",
                      background:
                        data.roomIdx === i ? BG_ALT : "transparent",
                      transition: "background 0.12s",
                    }}
                    onMouseEnter={(e) => {
                      if (data.roomIdx !== i)
                        (e.currentTarget as HTMLElement).style.background =
                          BG_ALT;
                    }}
                    onMouseLeave={(e) => {
                      if (data.roomIdx !== i)
                        (e.currentTarget as HTMLElement).style.background =
                          "transparent";
                    }}
                  >
                    <div style={{ textAlign: "left" }}>
                      <div
                        style={{
                          fontSize: 14,
                          color: INK,
                          marginBottom: 2,
                        }}
                      >
                        {r.name}
                      </div>
                      <div
                        style={{
                          fontFamily: MONO,
                          fontSize: 9,
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          color: MUTED,
                        }}
                      >
                        {r.tag}
                      </div>
                    </div>
                    <span
                      style={{
                        fontFamily: MONO,
                        fontSize: 12,
                        color: ACCENT,
                        fontWeight: 500,
                        flexShrink: 0,
                        marginLeft: 8,
                      }}
                    >
                      ${r.price}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>,
          document.body,
        )}
    </section>
  );
}
