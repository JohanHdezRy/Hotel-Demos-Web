import { memo, useState } from "react";
import { useNavigate } from "react-router-dom";
import RevealSection from "../../../components/animations/RevealSection";
import { STATIC_ROOMS, type StaticRoom } from "../data/roomsData";
import type { CarouselControlsProps } from "../types";
import { cn } from "../../../lib/utils";

export function CarouselControls({
  prev,
  next,
  current,
  total,
  center,
}: CarouselControlsProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-5 mb-[30px]",
        center && "justify-center mt-4 mb-0",
      )}
    >
      <button
        onClick={prev}
        aria-label="Previous"
        className="bg-transparent border-none text-[1.2rem] cursor-pointer text-[#1C1C1C] px-[10px] py-1 transition-colors duration-200 tracking-[8px] hover:text-[#A90023]"
      >
        <span aria-hidden="true">←</span>
      </button>
      <span className="text-[.85rem] tracking-[2px] text-[#757575]">
        {String(current + 1).padStart(2, "0")} /{" "}
        {String(total).padStart(2, "0")}
      </span>
      <button
        onClick={next}
        aria-label="Next"
        className="bg-transparent border-none text-[1.2rem] cursor-pointer text-[#1C1C1C] px-[10px] py-1 transition-colors duration-200 tracking-[8px] hover:text-[#A90023]"
      >
        <span aria-hidden="true">→</span>
      </button>
    </div>
  );
}

/* ── RoomCard ── */
interface RoomCardProps {
  room: StaticRoom;
  onReserve: () => void;
}

const RoomCard = memo(function RoomCard({ room, onReserve }: RoomCardProps) {
  const [activeImg, setActiveImg] = useState(0);
  const total = room.images.length;

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-[0_2px_20px_rgba(0,0,0,.06)] hover:shadow-[0_8px_40px_rgba(0,0,0,.12)] transition-shadow duration-300">
      <div className="relative h-[260px] sm:h-[360px] lg:h-[500px] overflow-hidden">
        {room.images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`${room.name} ${i + 1}`}
            loading="lazy"
            decoding="async"
            className={cn(
              "absolute inset-0 w-full h-full object-cover transition-opacity duration-500",
              i === activeImg ? "opacity-100" : "opacity-0",
            )}
          />
        ))}
        <button
          aria-label="Previous image"
          onClick={(e) => {
            e.stopPropagation();
            setActiveImg((p) => (p - 1 + total) % total);
          }}
          className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/40 text-white flex items-center justify-center hover:bg-black/60 transition-colors text-base leading-none"
        >
          <span aria-hidden="true">‹</span>
        </button>
        <button
          aria-label="Next image"
          onClick={(e) => {
            e.stopPropagation();
            setActiveImg((p) => (p + 1) % total);
          }}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/40 text-white flex items-center justify-center hover:bg-black/60 transition-colors text-base leading-none"
        >
          <span aria-hidden="true">›</span>
        </button>
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
          {room.images.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to image ${i + 1}`}
              aria-current={i === activeImg ? "true" : undefined}
              onClick={(e) => {
                e.stopPropagation();
                setActiveImg(i);
              }}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                i === activeImg ? "w-4 bg-white" : "w-1.5 bg-white/50",
              )}
            />
          ))}
        </div>
      </div>
      <div className="px-5 py-4">
        <h3 className="font-[var(--font-playfair-sc)] text-[.9rem] tracking-[2px] text-[#1C1C1C]">
          {room.name}
        </h3>
        <p className="text-[.75rem] text-[#999] mt-1">
          {room.capacity} guests · {room.type}
        </p>
        <p className="text-[.85rem] font-semibold text-[#1C1C1C] mt-1">
          ${room.price}
          <span className="text-[.72rem] font-normal text-[#999]">/night</span>
        </p>
        <button
          onClick={onReserve}
          className="mt-4 w-full py-2.5 bg-[#A90023] text-white text-[.72rem] tracking-[1.5px] uppercase rounded-[20px] hover:bg-[#7d001a] transition-colors duration-300 border-none cursor-pointer"
        >
          Reserve
        </button>
      </div>
    </div>
  );
});

/* ── Rooms section ── */
export default function Rooms() {
  const navigate = useNavigate();

  return (
    <section
      className="px-4 sm:px-8 lg:px-15 pt-14 sm:pt-20 pb-[60px]"
      id="rooms"
    >
      <RevealSection variant="fadeUp">
        <h2 className="font-[var(--font-playfair-sc)] text-[clamp(1.8rem,5vw,2.5rem)] tracking-[4px] text-[#1C1C1C] mb-2">
          ROOMS & SUITES
        </h2>
        <p className="text-[.8rem] text-[#999] tracking-[1px] mb-8">
          Select your room type
        </p>
      </RevealSection>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {STATIC_ROOMS.map((room, i) => (
          <RevealSection key={room.id} variant="fadeUp" delay={i * 0.1}>
            <RoomCard
              room={room}
              onReserve={() => navigate("/demo-1/reserve", { state: { room } })}
            />
          </RevealSection>
        ))}
      </div>
    </section>
  );
}
