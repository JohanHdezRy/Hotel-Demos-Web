import { WARM } from "../data/tokens";
import { heroImages } from "../data/imageData";
import { useHeroCarousel } from "../hooks/useHeroCarousel";
import { useHeroEntrance } from "../hooks/useHeroEntrance";
import { cn } from "../../../lib/utils";

export default function Hero() {
  const {
    index: slide,
    prev: onPrev,
    next: onNext,
    goTo: onGoTo,
  } = useHeroCarousel();
  const heroOverlayRef = useHeroEntrance();

  return (
    <section className="relative h-screen overflow-hidden">
      {heroImages.map((src, i) => (
        <div
          key={i}
          className={cn(
            "absolute inset-0 transition-opacity duration-[1200ms] ease-in-out",
            i === slide ? "opacity-100" : "opacity-0",
          )}
        >
          <img
            src={src}
            alt={`El Fenn slide ${i + 1}`}
            loading={i === 0 ? "eager" : "lazy"}
            decoding="async"
            fetchPriority={i === 0 ? "high" : "auto"}
            className={cn(
              "w-full h-full object-cover",
              i === slide && "ken-burns",
            )}
          />
        </div>
      ))}

      {/* Content overlay */}
      <div
        ref={heroOverlayRef}
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-5"
        style={{
          background:
            "linear-gradient(180deg,rgba(26,26,26,.4) 0%,rgba(26,26,26,.15) 50%,rgba(26,26,26,.55) 100%)",
        }}
      >
        <p
          className="ef-label text-[.6rem] sm:text-[.65rem] tracking-[4px] sm:tracking-[6px] uppercase mb-4 sm:mb-5"
          style={{ color: WARM }}
        >
          Marrakech · Medina
        </p>
        <div style={{ overflow: "hidden" }}>
          <h1
            className="ef-title text-white font-[var(--font-roboto)] font-light text-[clamp(2.4rem,8vw,5.5rem)] tracking-[3px] sm:tracking-[4px] uppercase"
            style={{ textShadow: "0 2px 30px rgba(0,0,0,.4)" }}
          >
            El Fenn
          </h1>
        </div>
        <p className="ef-sub text-white/80 text-[.9rem] sm:text-[1rem] mt-3 sm:mt-4 font-light tracking-[1.5px] sm:tracking-[2px]">
          Luxury with Authenticity
        </p>
      </div>

      {/* Carousel controls */}
      <div className="absolute bottom-8 sm:bottom-10 left-0 right-0 flex justify-between px-4 sm:px-10">
        <button
          onClick={onPrev}
          aria-label="Previous slide"
          className="bg-transparent border border-white/50 text-white px-4 sm:px-6 py-3 text-[.65rem] sm:text-[.7rem] uppercase tracking-[2px] cursor-pointer transition-all duration-300 hover:bg-white/15 hover:border-white min-w-[44px] min-h-[44px] flex items-center justify-center"
        >
          ← Prev
        </button>
        <button
          onClick={onNext}
          aria-label="Next slide"
          className="bg-transparent border border-white/50 text-white px-4 sm:px-6 py-3 text-[.65rem] sm:text-[.7rem] uppercase tracking-[2px] cursor-pointer transition-all duration-300 hover:bg-white/15 hover:border-white min-w-[44px] min-h-[44px] flex items-center justify-center"
        >
          Next →
        </button>
      </div>

      {/* Dots */}
      <div
        className="absolute bottom-[42px] sm:bottom-[48px] left-1/2 -translate-x-1/2 flex gap-2.5"
        role="tablist"
        aria-label="Hero slides"
      >
        {heroImages.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => onGoTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === slide ? "true" : undefined}
            className="w-3 h-3 sm:w-2.5 sm:h-2.5 rounded-full cursor-pointer transition-all duration-300 border-0 p-0"
            style={{
              background: i === slide ? WARM : "rgba(255,255,255,.4)",
            }}
          />
        ))}
      </div>
    </section>
  );
}
