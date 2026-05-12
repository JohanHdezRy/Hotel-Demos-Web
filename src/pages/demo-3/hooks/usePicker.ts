import { useEffect, useRef, useState, type RefObject } from "react";
import { addDays } from "../../../lib/dateHelpers";
import type { BookingData } from "./useBookingData";
import type { OpenField } from "../types";

export type PickerPosition = {
  top: number;
  left: number | undefined;
  right: number | undefined;
};

/**
 * Booking picker controller used by both `BookingPanel` and `BookingSection`.
 * Owns the open field, the portaled picker's screen position, the
 * click-outside-to-close handler, and the date selection callbacks.
 *
 * `mobileBreakpoint` differs between consumers (panel uses 640, section 768),
 * so it's parameterized rather than hard-coded.
 */
export function usePicker<T extends HTMLElement>(
  data: BookingData,
  mobileBreakpoint: number,
) {
  const [open, setOpen] = useState<OpenField>(null);
  const [pickerPos, setPickerPos] = useState<PickerPosition>({
    top: 0,
    left: 0,
    right: undefined,
  });
  const containerRef = useRef<T>(null);

  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      const container = containerRef.current;
      if (container && !container.contains(e.target as Node)) setOpen(null);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  const openAt = (
    field: OpenField,
    btn: HTMLButtonElement,
    align: "left" | "right" = "left",
  ) => {
    const r = btn.getBoundingClientRect();
    const isMobile = window.innerWidth < mobileBreakpoint;
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

  const close = () => setOpen(null);

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

  return {
    open,
    pickerPos,
    containerRef: containerRef as RefObject<T | null>,
    openAt,
    close,
    pickCheckIn,
    pickCheckOut,
  };
}
