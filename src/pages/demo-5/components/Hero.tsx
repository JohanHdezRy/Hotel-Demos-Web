import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const badgeRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctasRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Parallax
      if (imgRef.current) {
        gsap.to(imgRef.current, {
          yPercent: 30,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      // Entrance timeline
      const tl = gsap.timeline({ delay: 0.5 });
      tl.fromTo(
        badgeRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
      )
        .fromTo(
          titleRef.current,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" },
          "-=0.2",
        )
        .fromTo(
          subtitleRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" },
          "-=0.4",
        )
        .fromTo(
          ctasRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
          "-=0.3",
        )
        .fromTo(
          scrollIndicatorRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.5 },
          "-=0.1",
        );
    },
    { scope: containerRef },
  );

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <img
        ref={imgRef}
        src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80"
        alt="Mare e Terra restaurant interior"
        className="absolute inset-0 w-full h-full object-cover scale-110"
        fetchPriority="high"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-midnight/40 to-midnight/70" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <span
          ref={badgeRef}
          className="inline-block text-gold-mare font-[var(--font-jost)] text-xs tracking-[0.3em] uppercase mb-6 border border-gold-mare/40 px-5 py-2"
        >
          Fine Italian Cuisine — Madrid
        </span>

        <h1
          ref={titleRef}
          className="font-[var(--font-cormorant)] text-cream text-6xl md:text-8xl lg:text-9xl italic font-light leading-none mb-6"
        >
          Mare e Terra
        </h1>

        <p
          ref={subtitleRef}
          className="font-[var(--font-jost)] text-cream/75 text-lg md:text-xl font-light tracking-wide mb-10 max-w-xl mx-auto"
        >
          Handmade fresh pasta and the finest Atlantic seafood, united by the
          purest Italian tradition.
        </p>

        <div
          ref={ctasRef}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#menu"
            className="border border-cream/60 text-cream hover:border-cream hover:bg-cream/10 transition-all duration-300 px-8 py-4 font-[var(--font-jost)] text-sm tracking-widest uppercase"
          >
            Explore Menu
          </a>
          <a
            href="#reservations"
            className="bg-terracotta hover:bg-sienna text-white transition-colors duration-300 px-8 py-4 font-[var(--font-jost)] text-sm tracking-widest uppercase"
          >
            Reserve a Table
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-cream/60 animate-bounce"
      >
        <ChevronDown size={28} />
      </div>
    </section>
  );
}
