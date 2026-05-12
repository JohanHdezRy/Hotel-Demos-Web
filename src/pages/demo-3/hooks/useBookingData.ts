import { useState } from "react";
import { ROOMS } from "../data/roomsData";
import { addDays, nightsCount, TODAY } from "../../../lib/dateHelpers";
import type { OpenField } from "../types";

export type { OpenField };

export function useBookingData() {
  const [checkIn, setCI] = useState<Date>(() => addDays(TODAY, 1));
  const [checkOut, setCO] = useState<Date>(() => addDays(TODAY, 5));
  const [adults, setAdults] = useState(2);
  const [roomIdx, setRoomIdx] = useState(1);

  const n = nightsCount(checkIn, checkOut);
  const room = ROOMS[roomIdx];
  const subtotal = room.price * n;
  const tax = Math.round(subtotal * 0.12);

  return {
    checkIn,
    checkOut,
    adults,
    roomIdx,
    setCI,
    setCO,
    setAdults,
    setRoomIdx,
    nights: n,
    room,
    subtotal,
    tax,
    total: subtotal + tax,
  };
}

export type BookingData = ReturnType<typeof useBookingData>;
