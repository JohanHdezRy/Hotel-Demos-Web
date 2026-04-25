import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import MiniCalendar from "./MiniCalendar";
import { ROOMS } from "../data/roomsData";
import {
  BG,
  BG_ALT,
  INK,
  MUTED,
  LINE,
  ACCENT,
  DISPLAY,
  MONO,
} from "../data/tokens";
import { addDays, fmtDate, fmtWeekday } from "../hooks/useDateHelpers";
import type { BookingData, OpenField } from "../hooks/useBookingData";

type Props = { data: BookingData };

export default function BookingPanel({ data }: Props) {
  const [open, setOpen] = useState<OpenField>(null);
  const [pickerPos, setPickerPos] = useState<{
    top: number;
    left: number | undefined;
    right: number | undefined;
  }>({ top: 0, left: 0, right: undefined });
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(null);
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
    // On narrow viewports, always anchor to left edge of screen with a margin
    const isMobile = window.innerWidth < 640;
    setPickerPos({
      top: r.bottom + 8,
      left: isMobile ? 16 : align === "left" ? r.left : undefined,
      right: isMobile
        ? undefined
        : align === "right"
          ? window.innerWidth - r.right
          : undefined,
    });
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

  const fieldBtn = (
    label: string,
    mainVal: string,
    hint: string,
    isOpen: boolean,
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void,
  ) => (
    <button
      onClick={onClick}
      className="flex flex-col gap-0.5 text-left w-full rounded-[10px] cursor-pointer transition-all"
      style={{
        padding: "12px 14px",
        background: BG_ALT,
        border: isOpen ? `1px solid ${ACCENT}` : "1px solid transparent",
      }}
    >
      <span
        style={{
          fontFamily: MONO,
          fontSize: 9,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: MUTED,
        }}
      >
        {label}
      </span>
      <span
        style={{
          fontFamily: DISPLAY,
          fontSize: 16,
          letterSpacing: "-0.01em",
          color: INK,
        }}
      >
        {mainVal}
      </span>
      {hint && (
        <span style={{ fontSize: 10, color: MUTED, marginTop: 1 }}>{hint}</span>
      )}
    </button>
  );

  return (
    // hidden on mobile/tablet — BookingSection handles those breakpoints
    <aside
      ref={ref}
      className="absolute z-[5] hidden lg:flex flex-col gap-4"
      style={{
        right: 48,
        top: "50%",
        transform: "translateY(-50%)",
        width: 360,
        background: BG,
        borderRadius: 20,
        boxShadow:
          "0 24px 70px rgba(20,15,10,0.28), 0 4px 12px rgba(20,15,10,0.08)",
        padding: 28,
      }}
    >
      <div style={{ borderBottom: `1px solid ${LINE}`, paddingBottom: 18 }}>
        <div
          style={{
            fontFamily: MONO,
            fontSize: 10,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: ACCENT,
            marginBottom: 10,
          }}
        >
          Reserve
        </div>
        <h3
          style={{
            fontFamily: DISPLAY,
            fontSize: 28,
            fontWeight: 300,
            letterSpacing: "-0.02em",
            lineHeight: 1.05,
            margin: 0,
            color: INK,
          }}
        >
          Your stay,{" "}
          <em style={{ fontStyle: "italic", color: ACCENT }}>curated.</em>
        </h3>
      </div>

      <div className="flex flex-col gap-2">
        {fieldBtn(
          "Check-in",
          fmtDate(data.checkIn),
          fmtWeekday(data.checkIn),
          open === "checkin",
          (e) => openAt("checkin", e.currentTarget),
        )}
        {fieldBtn(
          "Check-out",
          fmtDate(data.checkOut),
          `${fmtWeekday(data.checkOut)} · ${data.nights} ${data.nights === 1 ? "night" : "nights"}`,
          open === "checkout",
          (e) => openAt("checkout", e.currentTarget),
        )}
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={(e) => openAt("guests", e.currentTarget)}
            className="flex flex-col gap-0.5 text-left rounded-[10px] cursor-pointer transition-all"
            style={{
              padding: "12px 14px",
              background: BG_ALT,
              border:
                open === "guests"
                  ? `1px solid ${ACCENT}`
                  : "1px solid transparent",
            }}
          >
            <span
              style={{
                fontFamily: MONO,
                fontSize: 9,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: MUTED,
              }}
            >
              Guests
            </span>
            <span
              style={{
                fontFamily: DISPLAY,
                fontSize: 16,
                letterSpacing: "-0.01em",
                color: INK,
              }}
            >
              {data.adults} adult{data.adults !== 1 ? "s" : ""}
            </span>
          </button>
          <button
            onClick={(e) => openAt("room", e.currentTarget, "right")}
            className="flex flex-col gap-0.5 text-left rounded-[10px] cursor-pointer transition-all"
            style={{
              padding: "12px 14px",
              background: BG_ALT,
              border:
                open === "room"
                  ? `1px solid ${ACCENT}`
                  : "1px solid transparent",
            }}
          >
            <span
              style={{
                fontFamily: MONO,
                fontSize: 9,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: MUTED,
              }}
            >
              Room
            </span>
            <span
              style={{
                fontFamily: DISPLAY,
                fontSize: 13,
                letterSpacing: "-0.01em",
                color: INK,
                lineHeight: 1.2,
              }}
            >
              {data.room.name}
            </span>
          </button>
        </div>
      </div>

      <div
        className="flex items-center gap-2.5 rounded-[10px]"
        style={{
          padding: "12px 14px",
          background: "oklch(0.96 0.03 150)",
          fontSize: 12,
          color: "oklch(0.38 0.08 155)",
        }}
      >
        <span
          className="w-2 h-2 rounded-full flex-shrink-0 animate-pulse"
          style={{ background: "oklch(0.65 0.12 155)" }}
        />
        <div>
          <strong className="block text-[13px] font-semibold mb-0.5">
            8 suites available
          </strong>
          <span className="text-[11px] opacity-80">
            From ${data.room.price}/night · breakfast included
          </span>
        </div>
      </div>

      <button
        className="flex items-center justify-center gap-2.5 text-[13px] font-medium tracking-[0.05em] rounded-xl border-none cursor-pointer transition-all duration-200"
        style={{ padding: 16, background: INK, color: BG }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.background = ACCENT;
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.background = INK;
        }}
      >
        Reserve <span>→</span>
      </button>

      <div
        className="flex items-center justify-center gap-2"
        style={{
          fontFamily: MONO,
          fontSize: 10,
          letterSpacing: "0.12em",
          color: MUTED,
          textTransform: "uppercase",
        }}
      >
        <span>Best-rate guarantee</span>
        <span>·</span>
        <span>Free cancel 14d</span>
      </div>

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
                  width: 180,
                }}
              >
                <div
                  style={{
                    fontFamily: MONO,
                    fontSize: 9,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: MUTED,
                    marginBottom: 14,
                  }}
                >
                  Adults
                </div>
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => data.setAdults(Math.max(1, data.adults - 1))}
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 8,
                      border: `1px solid ${LINE}`,
                      background: "transparent",
                      cursor: "pointer",
                      fontSize: 18,
                      color: INK,
                    }}
                  >
                    −
                  </button>
                  <span
                    style={{
                      fontFamily: DISPLAY,
                      fontSize: 28,
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
                      width: 36,
                      height: 36,
                      borderRadius: 8,
                      border: `1px solid ${LINE}`,
                      background: "transparent",
                      cursor: "pointer",
                      fontSize: 18,
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
                  width: 240,
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
                      padding: "10px 14px",
                      border: "none",
                      borderRadius: 8,
                      cursor: "pointer",
                      background: data.roomIdx === i ? BG_ALT : "transparent",
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
                    <span
                      style={{ fontSize: 13, color: INK, textAlign: "left" }}
                    >
                      {r.name}
                    </span>
                    <span
                      style={{ fontFamily: MONO, fontSize: 10, color: MUTED }}
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
    </aside>
  );
}
