import {
  BG,
  INK,
  INK_SOFT,
  LINE,
  DISPLAY,
  MONO,
  MUTED,
  BG_ALT,
} from "../data/tokens";
import { MONTHS_FULL, DAYS_SHORT, TODAY, fmtDate } from "../../../lib/dateHelpers";
import { useMonthNav } from "../hooks/useMonthNav";

type Props = {
  checkIn: Date;
  checkOut: Date;
  mode: "checkin" | "checkout";
  onSelect: (d: Date) => void;
  onClose: () => void;
};

export default function MiniCalendar({
  checkIn,
  checkOut,
  mode,
  onSelect,
  onClose,
}: Props) {
  const init = mode === "checkin" ? checkIn : checkOut;
  const { year: vy, month: vm, prev: prevM, next: nextM } = useMonthNav(init);

  const dim = new Date(vy, vm + 1, 0).getDate();
  const fwd = new Date(vy, vm, 1).getDay();
  const cells: (number | null)[] = [
    ...Array(fwd).fill(null),
    ...Array.from({ length: dim }, (_, i) => i + 1),
  ];
  while (cells.length % 7 !== 0) cells.push(null);

  return (
    <div
      style={{
        background: BG,
        borderRadius: 16,
        // Use vw-based width so it never overflows a 320px screen.
        // min 260px fits 7 day cells at ~37px each; max 310px keeps it compact.
        width: "min(310px, calc(100vw - 32px))",
        boxShadow: "0 20px 60px rgba(20,15,10,0.22)",
        border: `1px solid ${LINE}`,
        overflow: "hidden",
      }}
    >
      {/* Header with close on mobile */}
      <div
        className="flex items-center justify-between"
        style={{ padding: "14px 14px 0" }}
      >
        <button
          onClick={prevM}
          aria-label="Previous month"
          style={{
            width: 32,
            height: 32,
            border: `1px solid ${LINE}`,
            borderRadius: 8,
            background: "transparent",
            cursor: "pointer",
            fontSize: 18,
            color: INK_SOFT,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <span aria-hidden="true">‹</span>
        </button>
        <span
          style={{
            fontFamily: DISPLAY,
            fontSize: 15,
            fontWeight: 400,
            color: INK,
          }}
        >
          {MONTHS_FULL[vm]} {vy}
        </span>
        <div className="flex items-center gap-1">
          <button
            onClick={nextM}
            aria-label="Next month"
            style={{
              width: 32,
              height: 32,
              border: `1px solid ${LINE}`,
              borderRadius: 8,
              background: "transparent",
              cursor: "pointer",
              fontSize: 18,
              color: INK_SOFT,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <span aria-hidden="true">›</span>
          </button>
          {/* Close button — visible only on mobile via inline flex/none trick */}
          <button
            onClick={onClose}
            aria-label="Close calendar"
            style={{
              width: 32,
              height: 32,
              border: `1px solid ${LINE}`,
              borderRadius: 8,
              background: "transparent",
              cursor: "pointer",
              fontSize: 14,
              color: INK_SOFT,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            ✕
          </button>
        </div>
      </div>

      {/* Day labels */}
      <div className="grid grid-cols-7" style={{ padding: "10px 14px 0" }}>
        {DAYS_SHORT.map((d) => (
          <div
            key={d}
            style={{
              fontFamily: MONO,
              fontSize: 9,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: MUTED,
              textAlign: "center",
              padding: "2px 0 6px",
            }}
          >
            {d}
          </div>
        ))}
      </div>

      {/* Day cells */}
      <div
        className="grid grid-cols-7 gap-px"
        style={{ padding: "0 14px 14px" }}
      >
        {cells.map((d, i) => {
          if (!d) return <div key={i} style={{ aspectRatio: "1" }} />;
          const date = new Date(vy, vm, d);
          const isPast = mode === "checkin" ? date < TODAY : date <= checkIn;
          const isCI = date.getTime() === checkIn.getTime();
          const isCO = date.getTime() === checkOut.getTime();
          const inRange = date > checkIn && date < checkOut;
          const isActive = isCI || isCO;
          const isToday = date.getTime() === TODAY.getTime();
          return (
            <button
              key={i}
              disabled={isPast}
              aria-label={fmtDate(date)}
              aria-current={isToday ? "date" : undefined}
              aria-pressed={isActive}
              onClick={() => {
                if (!isPast) onSelect(date);
              }}
              style={{
                aspectRatio: "1",
                border: "none",
                borderRadius: isActive ? 8 : inRange ? 0 : 8,
                cursor: isPast ? "default" : "pointer",
                fontSize: 12,
                background: isActive ? INK : inRange ? BG_ALT : "transparent",
                color: isPast ? MUTED : isActive ? BG : INK,
                fontFamily: isActive ? DISPLAY : "inherit",
                fontStyle: isActive ? "italic" : "normal",
                opacity: isPast ? 0.3 : 1,
                transition: "all 0.12s",
              }}
              onMouseEnter={(e) => {
                if (!isPast && !isActive && !inRange)
                  (e.currentTarget as HTMLElement).style.background = BG_ALT;
              }}
              onMouseLeave={(e) => {
                if (!isPast && !isActive && !inRange)
                  (e.currentTarget as HTMLElement).style.background =
                    "transparent";
              }}
            >
              {d}
            </button>
          );
        })}
      </div>

      {/* Footer label */}
      <div
        style={{
          padding: "10px 14px 14px",
          borderTop: `1px solid ${LINE}`,
          fontFamily: MONO,
          fontSize: 9,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: MUTED,
          textAlign: "center",
        }}
      >
        {mode === "checkin" ? "Select arrival date" : "Select departure date"}
      </div>
    </div>
  );
}
