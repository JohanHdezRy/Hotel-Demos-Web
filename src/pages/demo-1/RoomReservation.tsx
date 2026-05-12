import { useLocation, Link } from "react-router-dom";
import { ScrollTop } from "../../components/ScrollTop";
import { todayISO, addDaysISO } from "../../lib/dateHelpers";
import type { StaticRoom as RoomData } from "./types";
import { useRoomReservation } from "./hooks/useRoomReservation";

const AMENITIES: Record<
  string,
  { icon: string; title: string; desc: string }[]
> = {
  STANDARD: [
    {
      icon: "wifi",
      title: "High-Speed WiFi",
      desc: "Complimentary fiber connection throughout.",
    },
    {
      icon: "pool",
      title: "Pool & Terrace",
      desc: "Heated outdoor pool with city views.",
    },
    {
      icon: "fitness",
      title: "Fitness Center",
      desc: "State-of-the-art equipment, open 24h.",
    },
    {
      icon: "breakfast",
      title: "Breakfast Room",
      desc: "Continental breakfast included daily.",
    },
  ],
  DELUXE: [
    {
      icon: "view",
      title: "City View",
      desc: "Floor-to-ceiling windows overlooking Charleston.",
    },
    {
      icon: "pool",
      title: "Pool & Terrace",
      desc: "Heated outdoor pool with terrace access.",
    },
    {
      icon: "bar",
      title: "Mini Bar",
      desc: "Curated selection refreshed daily.",
    },
    {
      icon: "spa",
      title: "Spa Access",
      desc: "Complimentary access to the wellness floor.",
    },
  ],
  SUITE: [
    {
      icon: "butler",
      title: "Dedicated Butler",
      desc: "24/7 personalized service at your request.",
    },
    {
      icon: "pool",
      title: "Private Plunge Pool",
      desc: "Heated infinity-edge pool on your terrace.",
    },
    {
      icon: "wine",
      title: "Curated Cellar",
      desc: "Temperature-controlled wine selection.",
    },
    {
      icon: "wellness",
      title: "Wellness Suite",
      desc: "In-suite dry sauna and massage tables.",
    },
  ],
  PENTHOUSE: [
    {
      icon: "butler",
      title: "Dedicated Butler",
      desc: "24/7 personalized service via private elevator.",
    },
    {
      icon: "pool",
      title: "Private Plunge Pool",
      desc: "Heated infinity-edge pool on the terrace.",
    },
    {
      icon: "wine",
      title: "Curated Cellar",
      desc: "Temperature-controlled wine wall, sommelier selections.",
    },
    {
      icon: "wellness",
      title: "Wellness Suite",
      desc: "In-suite dry sauna and twin massage tables.",
    },
  ],
};

function AmenityIcon({ icon }: { icon: string }) {
  const icons: Record<string, React.ReactNode> = {
    wifi: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="w-7 h-7"
      >
        <path
          d="M1.5 8.5a15 15 0 0 1 21 0M5 12a11 11 0 0 1 14 0M8.5 15.5a7 7 0 0 1 7 0M12 19h.01"
          strokeLinecap="round"
        />
      </svg>
    ),
    pool: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="w-7 h-7"
      >
        <path
          d="M2 12c1.5 0 1.5-2 3-2s1.5 2 3 2 1.5-2 3-2 1.5 2 3 2 1.5-2 3-2 1.5 2 3 2M2 17c1.5 0 1.5-2 3-2s1.5 2 3 2 1.5-2 3-2 1.5 2 3 2 1.5-2 3-2 1.5 2 3 2M15 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"
          strokeLinecap="round"
        />
      </svg>
    ),
    fitness: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="w-7 h-7"
      >
        <path
          d="M6 4v16M18 4v16M2 8h4M18 8h4M2 16h4M18 16h4M6 12h12"
          strokeLinecap="round"
        />
      </svg>
    ),
    breakfast: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="w-7 h-7"
      >
        <path
          d="M17 8h1a4 4 0 1 1 0 8h-1M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8zM6 1v3M10 1v3M14 1v3"
          strokeLinecap="round"
        />
      </svg>
    ),
    view: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="w-7 h-7"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" strokeLinecap="round" />
      </svg>
    ),
    bar: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="w-7 h-7"
      >
        <path
          d="M8 2l4 5 4-5M6 7h12l-2 13H8L6 7zM3 7h18"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    spa: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="w-7 h-7"
      >
        <path
          d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10c0-1-.2-2-.5-3"
          strokeLinecap="round"
        />
        <path d="M12 8c0 2.2-1.8 4-4 4s-4-1.8-4-4c0-2.2 1.8-4 4-4s4 1.8 4 4z" />
      </svg>
    ),
    butler: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="w-7 h-7"
      >
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    wine: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="w-7 h-7"
      >
        <path
          d="M8 22h8M12 11v11M5 3h14l-2 8a5 5 0 0 1-10 0L5 3z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    wellness: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="w-7 h-7"
      >
        <path
          d="M12 22V12m0 0C12 7 7 4 2 6c0 5 4.5 9 10 6zm0 0c0-5 5-8 10-6-1 5-4.5 9-10 6z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  };
  return <span className="text-[#A90023]">{icons[icon] ?? icons["wifi"]}</span>;
}

export function RoomReservation() {
  const location = useLocation();
  const room = (location.state as { room: RoomData } | null)?.room;

  const {
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
  } = useRoomReservation(room);

  const amenities = AMENITIES[room?.type ?? "STANDARD"] ?? AMENITIES.STANDARD;

  if (!room) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white font-[var(--font-source-sans)]">
        <div className="text-center">
          <p className="text-[#999] mb-4 tracking-[2px] text-sm uppercase">
            No room selected
          </p>
          <Link
            to="/demo-1"
            className="text-[#A90023] text-sm tracking-[2px] uppercase hover:underline"
          >
            ← Back to Hotel
          </Link>
        </div>
      </div>
    );
  }

  if (confirmed) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white font-[var(--font-source-sans)]">
        <div className="text-center max-w-md px-6">
          <div className="w-14 h-14 rounded-full border-2 border-[#A90023] flex items-center justify-center mx-auto mb-8">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="#A90023"
              strokeWidth="1.5"
              className="w-7 h-7"
            >
              <path
                d="M20 6L9 17l-5-5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <p className="text-[.65rem] tracking-[4px] uppercase text-[#A90023] mb-3">
            Reservation Confirmed
          </p>
          <h2 className="font-[var(--font-playfair-sc)] text-[2rem] tracking-[3px] text-[#1C1C1C] mb-4">
            {room.name}
          </h2>
          <p className="text-[.9rem] text-[#666] leading-[1.8] mb-2">
            {checkIn} → {checkOut} · {nights} night{nights > 1 ? "s" : ""} ·{" "}
            {guests} guest{guests > 1 ? "s" : ""}
          </p>
          <p className="font-semibold text-[#1C1C1C] mb-10 text-lg">
            Total: ${total.toLocaleString()}
          </p>
          <Link
            to="/demo-1"
            className="inline-block px-10 py-3 border-[1.5px] border-[#1C1C1C] text-[#1C1C1C] text-[.78rem] tracking-[2px] uppercase hover:bg-[#1C1C1C] hover:text-white transition-colors duration-300"
          >
            Back to Hotel
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#f9f9f9] text-[#1C1C1C] font-[var(--font-source-sans)] min-h-screen">
      {/* ── NAV ── */}
      <header className="fixed top-0 w-full z-50 bg-[#f9f9f9]/90 backdrop-blur-md border-b border-[#eee]">
        <div className="flex justify-between items-center px-6 md:px-12 py-5 max-w-[1400px] mx-auto">
          <Link
            to="/demo-1"
            className="text-[.72rem] tracking-[2px] uppercase text-[#A90023] hover:opacity-70 transition-opacity"
          >
            ← Hotel Bella Grace
          </Link>
          <span className="font-[var(--font-playfair-sc)] text-[.9rem] tracking-[3px] text-[#1C1C1C]">
            RESERVE
          </span>
          <span className="text-[.72rem] tracking-[2px] uppercase text-[#999]">
            Charleston, SC
          </span>
        </div>
      </header>

      <main className="pt-24 max-w-[1300px] mx-auto px-6 md:px-12 pb-24">
        {/* ── HERO ── */}
        <section className="mb-20 md:mb-28">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start">
            {/* Image */}
            <div className="md:col-span-8 order-2 md:order-1">
              <div className="aspect-[16/9] w-full overflow-hidden">
                <img
                  src={room.images[0]}
                  alt={room.name}
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Info */}
            <div className="md:col-span-4 flex flex-col justify-center order-1 md:order-2 md:pt-8">
              <span className="text-[.65rem] tracking-[4px] uppercase text-[#A90023] mb-4 block">
                {room.type.charAt(0) + room.type.slice(1).toLowerCase()} Room
              </span>
              <h1 className="font-[var(--font-cormorant)] text-[3.2rem] md:text-[4rem] text-[#1C1C1C] tracking-[2px] leading-[1.05] mb-6">
                {room.name}
              </h1>
              <p className="text-[.9rem] leading-[1.8] text-[#666] mb-8">
                An elevated retreat within Hotel Bella Grace, thoughtfully
                appointed with bespoke furnishings, curated art, and every
                modern comfort — set against the backdrop of historic
                Charleston.
              </p>
              <div className="flex items-baseline gap-2">
                <span className="text-[.8rem] text-[#999]">From</span>
                <span className="font-[var(--font-cormorant)] text-[2.4rem] text-[#A90023] leading-none">
                  ${room.price.toLocaleString()}
                </span>
                <span className="text-[.8rem] text-[#999]">/ night</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── DETAILS + FORM ── */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left: Details */}
          <div className="lg:col-span-7 space-y-20">
            {/* Description */}
            <div className="bg-white p-10 md:p-14 shadow-[0_2px_20px_rgba(0,0,0,.05)]">
              <h2 className="font-[var(--font-cormorant)] text-[2rem] tracking-[3px] text-[#1C1C1C] mb-7">
                Room Details
              </h2>
              <div className="text-[.9rem] text-[#555] leading-[1.9] space-y-5">
                <p>
                  Thoughtfully designed for discerning travellers, this room
                  balances timeless elegance with contemporary comfort. Custom
                  millwork, high-thread linens, and a curated palette of warm
                  neutrals define the space.
                </p>
                <p>
                  Up to {room.capacity} guests. Private en-suite bathroom with
                  soaking tub, rainfall shower, and premium Aesop amenities.
                  Blackout curtains, climate control, and 24-hour room service.
                </p>
              </div>
            </div>

            {/* Amenities */}
            <div>
              <p className="text-[.65rem] tracking-[4px] uppercase text-[#A90023] mb-10">
                Included Amenities
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-8">
                {amenities.map((a) => (
                  <div key={a.title} className="flex items-start gap-5">
                    <AmenityIcon icon={a.icon} />
                    <div>
                      <h4 className="font-[var(--font-cormorant)] text-[1.15rem] tracking-[1px] text-[#1C1C1C] mb-1">
                        {a.title}
                      </h4>
                      <p className="text-[.8rem] text-[#888] leading-[1.7]">
                        {a.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Secondary gallery */}
            {room.images.length >= 3 && (
              <div className="grid grid-cols-2 gap-6">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={room.images[1]}
                    alt="Room detail"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[4/5] overflow-hidden mt-12">
                  <img
                    src={room.images[2]}
                    alt="Room detail"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Right: Booking Form */}
          <div className="lg:col-span-5">
            <div className="sticky top-28 bg-white p-8 md:p-12 shadow-[0_4px_30px_rgba(0,0,0,.07)]">
              <h2 className="font-[var(--font-cormorant)] text-[1.8rem] tracking-[3px] text-[#1C1C1C] mb-8">
                Reserve
              </h2>

              <form
                className="space-y-7 text-[.85rem]"
                onSubmit={(e) => {
                  e.preventDefault();
                  setConfirmed(true);
                }}
              >
                {/* Dates */}
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="reservation-checkin"
                      className="text-[.62rem] tracking-[3px] uppercase text-[#A90023] block mb-2"
                    >
                      Check-In
                    </label>
                    <input
                      id="reservation-checkin"
                      type="date"
                      value={checkIn}
                      min={todayISO()}
                      onChange={(e) => setCheckIn(e.target.value)}
                      className="w-full border-b border-[#D2D2D2] focus:border-[#A90023] bg-transparent py-2 text-[#1C1C1C] outline-none transition-colors duration-200 text-[.85rem]"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="reservation-checkout"
                      className="text-[.62rem] tracking-[3px] uppercase text-[#A90023] block mb-2"
                    >
                      Check-Out
                    </label>
                    <input
                      id="reservation-checkout"
                      type="date"
                      value={checkOut}
                      min={addDaysISO(checkIn, 1)}
                      onChange={(e) => setCheckOut(e.target.value)}
                      className="w-full border-b border-[#D2D2D2] focus:border-[#A90023] bg-transparent py-2 text-[#1C1C1C] outline-none transition-colors duration-200 text-[.85rem]"
                    />
                  </div>
                </div>

                {/* Guests */}
                <div>
                  <label
                    htmlFor="reservation-guests"
                    className="text-[.62rem] tracking-[3px] uppercase text-[#A90023] block mb-2"
                  >
                    Guests
                  </label>
                  <select
                    id="reservation-guests"
                    value={guests}
                    onChange={(e) => setGuests(Number(e.target.value))}
                    className="w-full border-b border-[#D2D2D2] focus:border-[#A90023] bg-transparent py-2 text-[#1C1C1C] outline-none cursor-pointer appearance-none text-[.85rem]"
                  >
                    {Array.from({ length: room.capacity }, (_, i) => i + 1).map(
                      (n) => (
                        <option key={n} value={n}>
                          {n} {n === 1 ? "Adult" : "Adults"}
                        </option>
                      ),
                    )}
                  </select>
                </div>

                {/* Requests */}
                <div>
                  <label
                    htmlFor="reservation-requests"
                    className="text-[.62rem] tracking-[3px] uppercase text-[#A90023] block mb-2"
                  >
                    Special Requests
                  </label>
                  <textarea
                    id="reservation-requests"
                    value={requests}
                    onChange={(e) => setRequests(e.target.value)}
                    placeholder="Dietary requirements, arrival time…"
                    rows={2}
                    className="w-full border-b border-[#D2D2D2] focus:border-[#A90023] bg-transparent py-2 text-[#1C1C1C] outline-none resize-none placeholder-[#bbb] text-[.85rem]"
                  />
                </div>

                {/* Summary */}
                <div className="pt-7 mt-2 border-t border-[#eee] space-y-3 text-[.85rem]">
                  <div className="flex justify-between text-[#888]">
                    <span>
                      ${room.price.toLocaleString()} × {nights} night
                      {nights > 1 ? "s" : ""}
                    </span>
                    <span>${subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-[#888]">
                    <span>Taxes &amp; Fees (11%)</span>
                    <span>${taxes.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between font-[var(--font-cormorant)] text-[1.3rem] tracking-[1px] text-[#1C1C1C] pt-4 border-t border-[#eee]">
                    <span>Total</span>
                    <span>${total.toLocaleString()}</span>
                  </div>
                </div>

                {/* CTA */}
                <button
                  type="submit"
                  className="w-full bg-[#A90023] text-white text-[.72rem] tracking-[3px] uppercase py-5 mt-4 hover:bg-[#7d001a] transition-colors duration-300 rounded-[2px]"
                >
                  Confirm Reservation
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* ── FOOTER ── */}
      <footer className="bg-[#e8e8e8] mt-12">
        <div className="flex flex-col md:flex-row justify-between items-center px-12 py-12 gap-6 max-w-[1300px] mx-auto text-[#5f5e5f] text-[.65rem] tracking-[3px] uppercase">
          <span>© 2026 Hotel Bella Grace. Marriott Bonvoy.</span>
          <nav className="flex gap-8">
            {[
              "Privacy Policy",
              "Terms of Service",
              "Accessibility",
              "Sustainability",
            ].map((l) => (
              <button
                key={l}
                type="button"
                className="hover:text-[#A90023] transition-colors duration-200 bg-transparent border-0 p-0 cursor-pointer"
              >
                {l}
              </button>
            ))}
          </nav>
        </div>
      </footer>

      <ScrollTop
        bg="#A90023"
        color="#fff"
        hoverBg="#D2AA00"
        hoverColor="#1C1C1C"
      />
    </div>
  );
}
