import { useGsapHero } from "../../../hooks/useGsapHero";
import hotel from "../../../styles/img/demo-1/hotel.jpg";

export default function Hero() {
  const heroRef = useGsapHero<HTMLElement>();

  return (
    <header
      ref={heroRef}
      className="relative h-[96vh] min-h-[540px] overflow-hidden"
    >
      <img
        src={hotel}
        alt="Hotel Bella Grace facade"
        loading="eager"
        decoding="async"
        fetchPriority="high"
        className="gh-img w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-[#1c1c1c]/40" />
      <div className="absolute top-1/2 right-[5%] -translate-y-1/2 text-right text-white w-[90%] sm:w-auto sm:max-w-[520px]">
        <p className="gh-label text-[.72rem] sm:text-[.78rem] tracking-[2px] mb-3 opacity-80">
          Residence Inn by Marriott
        </p>
        <div style={{ overflow: "hidden" }}>
          <p className="gh-line font-[var(--font-playfair-sc)] text-[clamp(1.8rem,6vw,2.6rem)] leading-[1.15] tracking-[2px]">
            HOTEL BELLA GRACE
          </p>
        </div>
        <div style={{ overflow: "hidden" }} className="mb-4">
          <p className="gh-line font-[var(--font-playfair-sc)] text-[clamp(.8rem,2.5vw,1.1rem)] leading-[1.2] tracking-[2px] text-white/70">
            CHARLESTON HISTORIC DISTRICT
          </p>
        </div>
        <div className="gh-meta mt-2 text-[.85rem] flex justify-end gap-2.5 items-center">
          <span className="text-[#266F97] text-[.7rem] tracking-[2px]">
            ●●●●○
          </span>
          <span>4.4 · 376 Reviews</span>
        </div>
      </div>
    </header>
  );
}
