import { useMemo, useState } from "react";
import {
  todayISO,
  addDaysISO,
  nightsCountISO,
} from "../../../lib/dateHelpers";
import type { StaticRoom } from "../types";

const TAX_RATE = 0.11;

/**
 * Reservation form state for a single room (dates, guest count, requests,
 * confirmation flag) plus derived nightly totals. Setters keep check-out
 * after check-in automatically.
 */
export function useRoomReservation(room: StaticRoom | undefined) {
  const [checkIn, setCheckInRaw] = useState(todayISO());
  const [checkOut, setCheckOut] = useState(addDaysISO(todayISO(), 2));
  const [guests, setGuests] = useState(1);
  const [requests, setRequests] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  const setCheckIn = (value: string) => {
    setCheckInRaw(value);
    if (value >= checkOut) setCheckOut(addDaysISO(value, 1));
  };

  const nights = useMemo(
    () => nightsCountISO(checkIn, checkOut),
    [checkIn, checkOut],
  );
  const subtotal = (room?.price ?? 0) * nights;
  const taxes = Math.round(subtotal * TAX_RATE);
  const total = subtotal + taxes;

  return {
    checkIn,
    checkOut,
    guests,
    requests,
    confirmed,
    nights,
    subtotal,
    taxes,
    total,
    setCheckIn,
    setCheckOut,
    setGuests,
    setRequests,
    setConfirmed,
  };
}
