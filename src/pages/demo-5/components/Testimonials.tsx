import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "../../../lib/utils";
import { useTestimonialCarousel } from "../hooks/useTestimonialCarousel";

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const {
    testimonials,
    currentIndex,
    goNext,
    goPrev,
    goTo,
    handleMouseEnter,
    handleMouseLeave,
  } = useTestimonialCarousel();

  useGSAP(
    () => {
      gsap.fromTo(
        ".testimonials-inner",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          },
        },
      );
    },
    { scope: containerRef },
  );

  const current = testimonials[currentIndex];

  return (
    <section
      id="testimonials"
      ref={containerRef}
      className="bg-parchment py-24 lg:py-32"
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-gold-mare tracking-widest font-[var(--font-jost)] text-xs font-light uppercase block mb-4">
            Reviews
          </span>
          <h2 className="font-[var(--font-cormorant)] italic text-5xl lg:text-6xl text-midnight">
            What They Say
          </h2>
        </div>

        {/* Carousel */}
        <div
          className="testimonials-inner"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="relative text-center px-8 lg:px-16">
            {/* Opening quote */}
            <div className="font-[var(--font-cormorant)] text-8xl text-gold-mare/30 leading-none select-none mb-2">
              &ldquo;
            </div>

            {/* Stars */}
            <div className="flex justify-center gap-1 mb-6">
              {[1, 2, 3, 4, 5].map((star) => (
                <span key={star} className="text-gold-mare text-xl">
                  ★
                </span>
              ))}
            </div>

            {/* Quote text */}
            <p className="font-[var(--font-cormorant)] italic text-2xl lg:text-3xl text-midnight leading-relaxed mb-8 min-h-[120px] flex items-center justify-center">
              {current.text}
            </p>

            {/* Author */}
            <div className="flex flex-col items-center gap-3">
              <img
                src={current.avatarUrl}
                alt={current.name}
                loading="lazy"
                className="w-14 h-14 rounded-full object-cover border-2 border-gold-mare/40"
              />
              <div>
                <div className="font-[var(--font-jost)] font-medium text-midnight text-sm tracking-wide">
                  {current.name}
                </div>
                <div className="font-[var(--font-jost)] text-text-muted-mare text-xs tracking-wide">
                  {current.role}
                </div>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-12">
            <button
              type="button"
              onClick={goPrev}
              className="p-2 border border-walnut/30 text-walnut hover:border-gold-mare hover:text-gold-mare transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => goTo(index)}
                  aria-label={`Testimonial ${index + 1}`}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all duration-300",
                    index === currentIndex
                      ? "bg-gold-mare w-6"
                      : "bg-gold-mare/30",
                  )}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={goNext}
              className="p-2 border border-walnut/30 text-walnut hover:border-gold-mare hover:text-gold-mare transition-colors duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
